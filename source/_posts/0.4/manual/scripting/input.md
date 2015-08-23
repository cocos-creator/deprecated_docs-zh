title: 输入
categories: manual
permalinks: manual/scripting/input
---

```
本文介绍的用于获取玩家输入的 API 还未定型，将来会有计划的逐步升级这些接口。
```

## 概述

目前 Fireball 使用类 web 开发的注册机制来响应玩家输入，分为全局和 Entity 两种注册途径。能够获得的输入有键盘、鼠标和触摸操作，触摸操作实现了模拟鼠标(Mouse Simulation)的效果，只要注册鼠标事件就能接收到触摸操作。

## 全局注册

全局注册方法能够获得游戏内的全局输入事件，需要注册和反注册才能使用。下面的代码监听鼠标按下事件，一旦事件发生就调用 jump 方法，不论在哪个屏幕区域按下。

```js
var Sheep = Fire.Class({
    extends: Fire.Component,
    constructor: function () {
        // 定义获取输入事件的回调方法，保存到 bindedMouseDown 变量以便之后反注册
        this.bindedMouseDown = this.onMouseDown.bind(this);
    },
    onMouseDown: function (event) {
        this.jump();
    },
    onLoad: function () {
        // 注册回调
        Fire.Input.on('mousedown', this.bindedMouseDown);
    },
    onDestroy: function () {
        // 反注册回调，防止内存泄漏
        Fire.Input.off('mousedown', this.bindedMouseDown);
    }
});
```

注册时使用 `Fire.Input.on`，传入的第一个参数用来指定事件类型，更多类型请查阅[输入事件列表](/manual/scripting/input-events)。第二个参数是对应的回调函数，这里一般需要通过 bind 方法来绑定 this 对象，否则在回调函数触发时 this 将为 null。

反注册时传入的事件类型和回调函数必须和注册时一致。

## Entity注册

Entity 注册用于获取位于单个 Entity 上的鼠标或触摸事件，Entity 需要有 SpriteRenderer 等渲染组件才能响应输入操作。下面的代码监听该 Component 所在 Entity 的鼠标事件，当鼠标在 Entity 上按下时，才调用 jump 方法。

```js
var Sheep = Fire.Class({
    extends: Fire.Component,
    constructor: function () {
        // 定义获取输入事件的回调方法，保存到 bindedMouseDown 变量以便之后反注册
        this.bindedMouseDown = this.onMouseDown.bind(this);
    },
    onMouseDown: function (event) {
        this.jump();
    },
    onLoad: function () {
        // 注册回调
        this.entity.on('mousedown', this.bindedMouseDown);
    },
    onDestroy: function () {
        // 反注册回调
        this.entity.off('mousedown', this.bindedMouseDown);
    }
});
```

注册和反注册时，和全局事件唯一区别的地方在于事件是注册在某个 Entity 上，而不是 Fire.Input 上。

和所有 Entity 事件一样，输入事件本身也会使用冒泡(Bubble)等派发机制在 Entity 的 Hierarchy 上进行传递。
