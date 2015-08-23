title: 创建和使用脚本
categories: manual
permalinks: manual/scripting/component
---
Fireball 的很多功能都是以 Component(组件) 的形式提供的，Component 就是 Fireball 调用脚本的入口。Component 可以用来实现各类游戏逻辑(gameplay)，像是控制 Entity(实体)、发送事件、修改属性、响应玩家输入等。

Fireball 运行于 JavaScript 之上，Component 也不例外，JavaScript 入门非常简单，你可以浏览[JavaScript入门指南](/manual/scripting/javascript-primer)。此外，很多其它语言像是 CoffeeScript 和 TypeScript 都能很好的编译为 JavaScript，Fireball 默许你在内部使用任何语言。

## 新建脚本

不同于其它资源，脚本一般是在 Fireball 中直接创建的。你可以在 Assets 面板中点击右键菜单或者点击它左上角的创建按钮，选择 `Create > New Script` 来创建。

请注意：
- Component 的类名将自动设置成脚本的文件名，而且脚本相互引用时也需要用到文件名，所以建议你在创建好后立刻对脚本重命名。
- 脚本的文件名在项目中不能重复。

## 脚本简介

在 Fireball 中双击脚本时，默认会使用内置的代码编辑器打开。我们新建一个脚本 Player.js，初始的代码看起来就像这样：

```js
// Player.js

var Comp = Fire.Class({
    extends: Fire.Component,

    // use this for initialization
    start: function () {

    },

    // called every frame
    update: function () {

    }
});
```

脚本和 Fireball 关联的方式是通过继承 **Fire.Component** 实现的，Fire.Component 是所有 Component 的基类。当你定义了继承自 Fire.Component 的新类时，你就相当于创建了一个新的 Component 模板。每当你将脚本附加到 Entity 上，这份模板就会用于创建新的 Component 实例。

## Component简介

`Fire.Class({...})`用于声明一个类，传入的 `extends: Fire.Component` 用来声明继承自 Fire.Component 的类。由于 Component 的类名获取自所在的脚本文件名，这里脚本是 Player.js，所以 Fireball 会自动设置类名为 "Player"。

`var Comp` 定义了一个变量，我们将它赋值为 Fire.Class 返回的类。这个变量仅仅是这个类的一个引用，是一个普通的 JavaScript 局部变量，变量名可以是任意的，和真正的类名 "Player" 没有关联。如果这个脚本的代码不需要访问这个类，也可以不定义这个变量。

传入的 `update: function () {...};` 用于定义 **update** 回调方法，update 方法将由 Fireball 在游戏的每一帧渲染之前调用。你可以在 update 中进行诸如触发行为、响应操作等持续性的游戏逻辑。

传入的 `start: function () {...};` 用于定义 **start** 回调方法，onStart 将由 Fireball 在 update 第一次执行之前调用，你可以在 start 中编写任意的初始化代码。

请注意：
- 我们将使用 Fire.Class 声明的类型统称为 **FireClass**，Component 和普通的 FireClass 的区别仅仅在于 Component 的类名会自动从脚本获取。你可以通过阅读[类型定义](/manual/scripting/class)来进一步了解 FireClass。
- 对有经验的用户来说，Component 虽然可以定义构造函数，但我们建议将逻辑操作尽可能的放到 start 等 Fireball 的回调中进行，而构造函数仅仅用于声明实例变量。

## 添加到Entity

就像上面提到的，脚本只是用于定义 Component 的模板，所以 Component 内的任何代码都不会被执行，除非你在某个 Entity 上创建了模板的实例对象。要完成这个操作，你可以将脚本从 Assets 中拖动到 Entity 的 Inspector 上。或者点击 Inspector 中的添加 Component 按钮，在弹出的 `Scripts` 子菜单中选取你的脚本。你的 Component 添加到 Entity 上之后，看起来和 Fireball 内置的其它 Component 是一样的。

接着当你点击 Play 运行游戏，这个 Component 的脚本就会开始执行了。你可以在上面的 start 中加入代码来验证这点：
```js
// use this for initialization
start: function () {
    Fire.log('Hello Fireball!');
}
```
Fire.log 是一个很常用的方法，用于将调试信息显示到 Fireball 的 Console(控制台) 面板。现在你再运行游戏的话，就会在 Console 中看到`Hello Fireball!`了。

## <a name="show-in-inspector"></a>在Inspector中显示属性

Fireball 能够在 Inspector 面板中实时查看和编辑 Component 的属性，包括你新建的 Component。

```js
// Player.js

var Player = Fire.Class({
    extends: Fire.Component,

    properties {
        playerName: '',
    },

    // use this for initialization
    start: function () {
        Fire.log("My name is", this.playerName);
    },

    // called every frame
    update: function () {
        // ...
    };
});
```

这个脚本将会在 Inspector 中显示一个输入控件，在 Inspector 中显示属性时，会自动把脚本中驼峰法命
名的属性名`playerName`转化为可读性更高的`Player Name`，请注意。  

![player-name-in-inspector](/manual/scripting/component/player-name-in-inspector.png)

如果你编辑了 Player Name 并且按下播放，你就会看到输出了 "My name is Duang Duang"。事实上，Fireball 还允许你在游戏运行的任意时刻实时更改这些属性，这对游戏的调试非常方便。当游戏停止，属性值将会被重置回播放之前的状态。这样你就可以放心的在运行时任意修改并测试场景对象，而不用担心临时的修改被保存。
