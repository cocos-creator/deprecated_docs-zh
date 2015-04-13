title: Component回调
categories: manual
permalinks: manual/scripting/component/callbacks
---

Fireball 会周期性地调用 Component 的一些特定方法，如果 Component 实现了这些方法，就相当于跟 Fireball 注册了对应的回调。这些回调仅仅在 Fireball 的特定时间段，或者特定游戏事件发生时才会调用。除了前面介绍的 start(在对象的第一次 update 之前调用) 和 update(每一帧刷新前调用)，Fireball 还有很多其它回调，本文将介绍其中常用的部分，完整回调列表请查看 Component 的 API 文档。

请注意：
- 回调时 Fireball 会将控制权交给 Component，等方法执行完毕 Fireball 才会重新获得控制权。因此如果有的回调执行时间过长，将会阻碍 Fireball 的流畅运行。

## 定期回调

游戏开发的一个关键点是在每一帧渲染前更新物体的行为、状态和方位，这些更新操作通常都放在 update 回调中。

```js
    update: function () {
        this.transform.translate(new Fire.Vec2(0, Fire.Time.deltaTime * 40));
    }
```

update 会在所有动画更新前执行，但如果我们要在动画更新之后才进行一些额外操作，或者希望在所有 Component 的 update 都执行完之后才进行其它操作，那就需要用到 lateUpdate 回调。

```js
    lateUpdate: function () {
        this.transform.worldPosition = this.target.transform.worldPosition;
    }
```

## 初始化回调

在游戏运行中，很多数据是不需要每一帧重复计算的，那么我们就可以在 Component 第一次执行的时候把结果预先算好，并且保存到当前 Component 中。这类初始化的操作，我们通常在 **onLoad** 或 **start** 中进行。onLoad 回调会在这个 Component 所在的场景被载入的时候触发，onStart 则会在这个 Component 被第一次激活前，也就是第一次执行 update 之前触发。因此从执行顺序上看，所有的 Component 的 onStart 都会在其它 Component 的 onLoad 全都执行完后才被调用。

```js
var Comp = Fire.Class({
    extends: Fire.Component,

    properties: {
        target: {
            default: null,
            type: Fire.Entity
        }
    },

    start: function () {
        this.target = Fire.Entity.find('/Main Player/Bip/Head');
    },

    update: function () {
        this.transform.worldPosition = this.target.transform.worldPosition;
    }
});
```
