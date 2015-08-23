title: 计时和帧率
categories: manual
permalinks: manual/scripting/time
---

假设你需要以恒定速度持续移动角色，或许你会设定一个每一帧固定移动的值(distancePerFrame)：

```js
Fire.Class({
    extends: Fire.Component,
    properties: {
        distancePerFrame: 1
    },
    update: function () {
        this.transform.x += this.distancePerFrame;
    }
});
```

但是受制于平台等各方面原因，游戏的帧率无法确定也不能完全稳定，这就会导致角色移动起来的速度不稳定。如果每一帧的时间是 20 毫秒，每秒钟角色将会前进 distancePerFrame 50 次。如果每一帧的时间变成 40 毫秒，每秒钟角色将会前进 distancePerFrame 25 次，导致移动速度慢。所以我们应该根据每一帧实际消耗的时间，来缩放每一帧的实际移动距离。

```js
Fire.Class({
    extends: Fire.Component,
    properties: {
        distancePerSecond: 50
    },
    update: function () {
        this.transform.x += this.distancePerSecond * Fire.Time.deltaTime;
    }
});
```

这里我们将每一秒期望角色移动的距离设置为 distancePerSecond。同时使用 **Fire.Time.deltaTime** 来获得游戏上一帧到现在所用的时间（以秒为单位）。将他们相乘就能获得每一帧应该移动的距离。通过这个距离来持续更新角色坐标的话，移动速度就会是稳定的。而且如果把一秒钟内的这些移动累加起来，就能刚好等于 distancePerSecond。

实际上不单单是移动，任何需要你自己在游戏中实现的渐变效果，都应该考虑使用 Fire.Time.deltaTime 来计算。

## Time的其它常用接口

- 获得游戏开始到现在经过的秒数：Time.time
- 获得游戏开始到现在经过的总帧数：Time.frameCount
