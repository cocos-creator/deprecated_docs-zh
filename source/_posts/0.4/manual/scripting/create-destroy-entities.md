title: 创建和销毁对象
categories: manual
permalinks: manual/scripting/create-destroy-entities
---

如果你需要创建一个动态的游戏场景，那么通过脚本创建和销毁 Entity 是必不可少的。

## 创建空的Entity

你只需要直接 new Entity() 就能在当前场景中添加一个空的 Entity：

```js
    start: function () {
        for (var i = 0; i < 10; i++) {
            var name = 'Bullet ' + i;
            var newBulletEntity = new Entity(name);
        }
    }
```

## <a name="instantiate"></a>复制已有Entity

使用 Fire.instantiate 来复制指定的 Entity，该 Entity 所有的子物体及 Component 都会被一起复制：

```js
var Comp = Fire.Class({
    extends: Fire.Component,

    properties {
        bulletPrefab: {
            default: null,
            type: Fire.Entity
        },
    },

    // use this for initialization
    start: function () {
        for (var i = 0; i < 10; i++) {
            var newBulletEntity = Fire.instantiate(this.bulletPrefab);
        }
    },

    // called every frame
    update: function () {
        // ...
    };
});
```

## 销毁Entity

使用 destroy 方法来销毁 Entity：

```js
    lateUpdate: function () {
        if (this.hp <= 0) {
            this.entity.destroy();
        }
    }
```

这段代码销毁了 Component 自己所在的整个 Entity，实际上 Entity 将会在这一帧结束后才被真正销毁，在这一帧结束前仍然可以正常使用。当 Entity 被销毁后，所有子物体及连带的 Component 也会被一并销毁。

## 添加Component

除了通过 Inspector 面板来添加 Component，你也可以在脚本动态进行：

```js
    start: function () {
        for (var i = 0; i < 10; i++) {
            var name = 'Bullet ' + i;
            var newBulletEntity = new Entity(name);

            var bullet = newBulletEntity.addComponent("MyBullet");
        }
    }
```

这段代码在创建一个新 Entity 后，会接着添加一个类型叫做 "MyBullet" 的 Component。（项目里需要有 MyBullet.js 这个脚本）
你也可以直接将 Component 类型传入 addComponent：

```js
    start: function () {
        // ...
        var bullet = newBulletEntity.addComponent(Fire.SpriteRenderer);
    }
```

## 移除Component

使用脚本移除 Component 的方法，其实就是调用它的 destroy()，效果和在 Inspector 中点击移除按钮是一样的：

```js
    start: function () {
        var bullet = this.getComponent("MyBullet");
        bullet.destroy();
    }
```





