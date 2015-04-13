title: 对象访问
categories: manual
permalinks: manual/scripting/component/access
---

## 用脚本控制

在 Inspector 面板，你可以对各个 Component 进行修改。当你修改了 Transform 的 Position，就等于设置了 Entity 的 Position。你也可以通过修改 SpriteRenderer 的 Color，来改变 Entity 的渲染颜色。但更多的，Component 的属性也能用脚本进行修改，两者区别在于，脚本能够在一段时间内连续地修改属性、过渡属性，实现渐变效果。脚本也能够响应玩家输入，能够修改、创建和销毁 Component 或 Entity，来实现各种各样的游戏逻辑。为此需要能够访问各个 Component 和 Entity。

## 访问所在的Entity

获取 Component 所在的 Entity 是很常见的操作，只要在 Component 方法里访问 this.entity 变量：

```js
    start: function () {
        var myName = this.entity.name;
        Fire.log('starting', myName);
    }
```

## 访问Component

访问同一个 Entity 上的其它 Component 是最简单最常用的操作。如前面所说，一个 Component 只是类的一个实例对象，因此你要做的第一件事就是获得这个对象的引用。你要调用的接口是 Component上的 **getComponent** ，它会返回 Component 所在的 Entity 的指定类型的 Component 实例，通常你会定义一个变量来保存这个引用。然后你就能通过这个变量直接访问 Component 里的任何属性了。

```js
    start: function () {
        var sr = this.getComponent(Fire.SpriteRenderer);

        // Change the color of the sprite's renderer
        sr.color = Fire.Color.red;
    }
```

Fire.SpriteRenderer 是 Fireball 内置的 Component，你也可以为 getComponent 传入一个字符串形式的类名。

```js
    start: function () {
        var sr = this.getComponent("Fire.SpriteRenderer");

        // ...
    }
```

你还能调用任意 Entity 上的 getComponent 的方法：

```js
    start: function () {
        var transform = playerEntity.getComponent(Fire.Transform);

        // Rotate the transform around world position (10, 10)
        transform.rotateAround(Fire.v2(10, 10), 90);
    }
```

Transform 用来控制一个 Entity 在游戏场景中的方位和缩放，是最常用的一个 Component。你可以使用 Entity.transform 或 Component.transform 来快速获取 Transform。于是上面的代码还可以优化成：

```js
    start: function () {
        playerEntity.transform.rotateAround(Fire.v2(10, 10), 90);
    }
```

如果在 Entity 上并没有你要的 Component，getComponent 将返回 null，如果你尝试访问 null 的值，将会在运行时抛出 'TypeError' 这个错误。

## 访问其它对象

仅仅能访问 Entity 自己的 Component 还往往不够，脚本通常还需要进行多个物体之间的互操作。例如，一门自动瞄准玩家的大炮，就需要不断获取玩家的最新位置。Fireball 提供了几种不同的方法用来访问其它对象：

### 使用Inspector设置

最常用的方式就是直接在 Inspector 中预先设置你需要的对象。这只需要在脚本中声明一个 Entity 类型的属性：

```js
// Cannon.js

var Comp = Fire.Class({
    extends: Fire.Component,
    properties: {
        // 声明一个 player 属性，类型为 Entity
        player: {
            default: null,
            type: Fire.Entity
        }
    }
});
```

这段代码在 **properties** 里面声明了一个 "player" 属性，默认值为 null，并且指定它的对象类型为 Entity。就像是其它语言里面的 `public Fire.Entity player = null;`。属性在 Inspector 中看起来是这样的：

![player-in-inspector-null](/manual/scripting/component/access/player-in-inspector-null.png)

接着你就可以将 Hierarchy 上的任意一个 Entity 拖到 Inspector 的这个属性中。于是这个 Component 实例的 player 属性就会被设置成这个 Entity。

![player-in-inspector](/manual/scripting/component/access/player-in-inspector.png)

你可以直接访问 player：

```js
var Comp = Fire.Class({
    extends: Fire.Component,
    properties: {
        player: {
            default: null,
            type: Fire.Entity
        }
    },
    start: function () {
        // 显示 player 的名字
        Fire.log(this.player.name);
    }
});
```

更棒的是，如果你将属性声明为 Component 类型，当你拖动 Entity 到 Inspector，Entity 上指定类型的 Component 将会被设置给属性。这样就能直接获得你需要的 Component 而不仅仅是 Entity。

```js
var Comp = Fire.Class({
    extends: Fire.Component,
    properties: {
        targetTransform: {
            default: null,
            type: Fire.Transform
        }
    },
});
```

当你要设置一些对象的关联，使用属性是最方便的。你甚至可以将属性的默认值由 `null` 改为数组`[]`，这样你就能在 Inspector 中关联任意多个对象。不过如果需要在运行时动态获取其它对象，还需要用到下面介绍的查找方法。

### 查找子物体

有时候，游戏场景中会有很多个相同类型的对象，像是炮塔、敌人和特效，它们通常都有一个全局的脚本来统一管理。如果用 Inspector 来一个一个将它们关联到这个脚本上，那么工作将很繁冗乏味。为了更好地统一管理这些对象，我们一般会把它们放到一个单独的父物体下，然后通过父物体来获得所有的子物体。

```js
// CannonManager.js
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function () {
        this.cannons = [];
    },

    properties: {
        targetTransform: {
            default: null,
            type: Fire.Transform
        }
    },

    start: function () {
        this.cannons = this.entity.getChildren();
    }
});
```

**getChildren** 是 Entity 提供的一个方法，可以获得一个包含所有子 Entity 的数组。还可以使用 Entity 的名字来直接获取对应的子物体，只需要在 Entity 的实例上调用 **find** 方法：

```js
this.entity.find('Main Cannon');
```

### 全局名字查找

通过 Fire.Entity.find 这个静态方法就能在整个场景中查找指定的 Entity：

```js
// CannonManager.js
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function () {
        this.player = null;
    },

    start: function () {
        this.player = Fire.Entity.find('/Main Player');
    }
});
```

请注意：
- find 既有对象上的实例方法又有类型上的静态方法，两者作用不同，实例方法用于查找子物体，静态方法用于从场景的最上层开始查找全局物体。  
  查找子物体时路径不能以'/'开头，相反的查找全局物体时路径必须以'/'开头。
