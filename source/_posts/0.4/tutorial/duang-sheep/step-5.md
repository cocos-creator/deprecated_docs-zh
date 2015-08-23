title: 新手教程：实现游戏循环
categories: tutorial
permalinks: tutorial/duang-sheep/step5
---


## 本章任务

- 添加绵羊与障碍物的碰撞
- 当绵羊碰撞到障碍物时弹出失败窗口并结束游戏
- 点击失败窗口中的按钮，重新开始游戏，实现循环


## 详细步骤

### 为障碍物添加碰撞检测

在`Assets`视图中找到并编辑`PipeGroupManager`脚本，添加一个名为`collisionDetection`的函数，来进行碰撞检测以及通过管理`pipeGroupList`属性对象，来获取已经创建出的所有`PipeGroup`物体。

下面是`PipeGroupManager`脚本中需要更新的地方：

**NOTE: `.....`表示脚本还是原来的样子无需变动.**
```js
var PipeGroupManager = Fire.Class({
  // 继承
  extends: Fire.Component,
  // 构造函数
  constructor: function () {
     .....
  },
  // 属性
  properties: {
      .....
      // 管道列表
      pipeGroupList: {
         get: function () {
             return this.entity.getChildren();
         },
         hideInInspector: true
        }
    },
    .....
    // 创建管道组
    createPipeGroupEntity: function () {
        var pipeGroup = Fire.instantiate(this.srcPipeGroup);
        pipeGroup.parent = this.entity;
        pipeGroup.transform.position = this.initPipeGroupPos;
        pipeGroup.active = true;
    },
    // 碰撞检测
    collisionDetection: function (sheepRect) {
        for (var i = 0; i < this.pipeGroupList.length; ++i) {
            // 上方障碍物
            var pipeGroupEntity = this.pipeGroupList[i];
            var pipe = pipeGroupEntity.find('topPipe');
            var pipeRender = pipe.getComponent(Fire.SpriteRenderer)
            var pipeRect = pipeRender.getWorldBounds();

            if (Fire.Intersection.rectRect(sheepRect, pipeRect)) {
                return true;
            }

            // 下方障碍物
            pipe = pipeGroupEntity.find('bottomPipe');
            pipeRender = pipe.getComponent(Fire.SpriteRenderer);
            pipeRect = pipeRender.getWorldBounds();

            if (Fire.Intersection.rectRect(sheepRect, pipeRect)) {
                return true;
            }
        }
        return false;
    },
  .....
});
```

### 为绵羊脚本增加碰撞处理

接下来在`Assets`视图中找到`Sheep`脚本，在其中添加一个`renderer`变量，用于之后获取绵羊的碰撞体范围和坐标。

下方为`Sheep`脚本中需要更新的部分：

**NOTE: `.....`表示脚本还是原来的样子无需变动**

```js
// 绵羊状态
var State = Fire.defineEnum({...});

var Sheep = Fire.Class({
    // 继承
    extends: Fire.Component,
    // 构造函数
    constructor: function () {
        .....
        // 绵羊图片渲染
        this.renderer = null;
        .....
    },
    // 属性
    properties: {....},
    // 初始化
    onLoad: function () {
        .....
        this.renderer = this.getComponent(Fire.SpriteRenderer);
        .....
      },
    .....
});

Sheep.State = State;
```

### 创建游戏失败界面

接下来我们要使用`sprite/ui`文件夹下的图片资源，在`Scene`视图中创建一系列 Sprite 物体，并组装成一个`GameOver`界面物体。

需要用到的资源文件：

- `gameoverbg`
- `text_game_over`
- `button_play`

这些资源都可以直接拖拽到`Hierarchy`窗口中，不需要对生成物体改名，之后按照下图所示将他们放在`GameOver`物体下面，完成界面组装。


**下方是GameOver对象效果示例图：**

![000](https://cloud.githubusercontent.com/assets/7564028/6864748/8a9e57ec-d4a0-11e4-970a-21bcb3b182c1.png)

最后选中`GameOver`物体，找到`Inspector`视图左上角物体名称左边的显示复选框：![001](https://cloud.githubusercontent.com/assets/7564028/6864833/80d6e0ca-d4a1-11e4-88e3-05d0de382a9e.png)

点击复选框来取消选中状态，这样就可以在游戏视图中隐藏`GameOver`物体。


### 游戏结束界面控制

创建`GameOverMenu`脚本，该脚本为`GameOver`界面里的按钮绑定事件，点击按钮即可重新开始游戏。

**下方是GameOverMenu脚本内容：**
```js
var GameOverMenu = Fire.Class({
  // 继承
  extends: Fire.Component,
  // 构造函数
  constructor: function () {
      // 重新开始事件
      this.resetGameEvent;
  },
  // 属性
  properties: {
      // 获取绵羊
      btn_play: {
          default: null,
          type: Fire.Entity
      }
  },
  // 加载Game场景(重新开始游戏)
  resetGameEvent: function () {
      Fire.Engine.loadScene('Game');
  },
  // 开始
  start: function () {
      // 注册重新开始事件
      this.btn_play.on('mousedown', this.resetGameEvent);
  },
  // 删除
  onDestroy: function () {
      // 注销重新开始事件
      this.btn_play.off('mousedown', this.resetGameEvent);
  }
});
```

将`GameOverMenu`脚本拖拽到`Hierarchy`中的`GameOver`物体上。然后将`GameOver/button_play`物体拖拽到`GameOverMenu`组件的`Btn Play`属性上。

### 游戏循环控制脚本

当我们做完以上工作以后，我们需要创建一个`GameManager`脚本，把这些资源和逻辑串联起来。

**以下GameManager脚本内容：**

```js
var Sheep = require('Sheep');
var ScrollPicture = require('ScrollPicture');
var PipeGroupManager = require('PipeGroupManager');

var GameState = Fire.defineEnum({
   Run : -1,
   Over: -1
});

var GameManager = Fire.Class({
   // 继承
   extends: Fire.Component,
   // 构造函数
   constructor: function () {
       // 游戏状态
       this.gameState = GameState.Run
   },
   // 属性
   properties: {
       // 获取绵羊
       sheep: {
           default: null,
           type: Sheep
       },
       // 获取背景
       background: {
           default: null,
           type: ScrollPicture
       },
       // 获取地面
       ground: {
           default: null,
           type: ScrollPicture
       },
       // 获取障碍物管理
       pipeGroupMgr: {
           default: null,
           type: PipeGroupManager
       },
       // 获取gameOverMenu对象
       gameOverMenu: {
           default: null,
           type: Fire.Entity
       }
   },
   // 开始
   start: function () {
       this.gameState = GameState.Run;
   },
   // 更新
   update: function () {
       switch (this.gameState) {
           case GameState.Run:
               // 获取绵羊的边界,然后传入进行做碰撞检测
               var sheepRect = this.sheep.renderer.getWorldBounds();
               var gameOver = this.pipeGroupMgr.collisionDetection(sheepRect);
               // 如果碰撞即为GameOver
               if (gameOver) {
                   // 切换游戏与绵羊状态并且通过enabled来关闭场景元素的update
                   this.gameState = GameState.Over;
                   this.sheep.state = Sheep.State.Dead;
                   this.ground.enabled = false;
                   this.background.enabled = false;
                   for (var i = 0; i < this.pipeGroupMgr.pipeGroupList.length; ++i) {
                       var pipeGroup = this.pipeGroupMgr.pipeGroupList[i].getComponent('PipeGroup');
                       pipeGroup.enabled = false;
                   }
                   this.pipeGroupMgr.enabled = false;
                   // 通过avtive打开gameover窗口
                   this.gameOverMenu.active = true;
               }
               break;
           default :
               break;
       }
   }
});
```


**最终效果示例图:**

![002](https://cloud.githubusercontent.com/assets/7564028/6864920/df1f73da-d4a2-11e4-9c02-e12597cfa1dc.png)

----

**NOTE:** [ Step - 3 实现游戏循环快照传送门](https://github.com/fireball-x/tutorial/commits/step-5)
                                                                            
