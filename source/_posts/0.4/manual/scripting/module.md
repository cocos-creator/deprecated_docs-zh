title: 模块化
categories: manual
permalinks: manual/scripting/module
---

Fireball 允许你将代码拆分成多个脚本文件，并且让它们相互引用。要实现这点，你需要了解如何在 Fireball 中定义和使用模块，这个步骤简称为**模块化**。

```
在本文中，“模块”和“脚本”这两个术语通常是等价的。所有“备注”都属于进阶内容，一开始不需要了解。
```

## 概述

如果你还不确定模块化究竟能做什么，模块化相当于：
- C/C++ 中的 include
- C# 中的 using
- Java 和 Python 中的 import
- HTML 中的 link

模块化使你可以在 Fireball 中引用其它脚本文件：  
- 访问其它文件公开的参数
- 调用其它文件公开的方法
- 使用其它文件公开的类型
- 使用或继承其它文件公开的Component

Fireball 中的 JavaScript 使用和 node.js 几乎相同的方式来实现模块化：
- 每一个单独的脚本文件就构成一个模块。
- 每个模块都是一个单独的作用域（在该模块内使用`var`定义的局部变量，无法被其它模块读取）。
- 以**同步**的 `require` 方法来引用其它模块。
- 设置 `module.exports` 为导出的变量。

不论模块如何定义，所有用户代码最终会由 Fireball 编译为原生的 JavaScript，可直接在手机浏览器中运行。

## 引用模块

### require

除了 Fireball 提供的接口，所有用户定义的模块都需要使用 **require** 来访问。假设我们要访问的是其它脚本里定义的 Component，叫做 Rotate：

```js
var Rotate = require('rotate');
```

require 返回的就是被模块导出的对象，通常我们都会将结果存到一个变量。传进 require 的字符串就是模块的**文件名**，这个名字不包含路径也不包含后缀，而且大小写敏感。

### require完整范例

接着我们就可以使用 Rotate 派生一个子类，新建一个脚本 `sinRotate.js`：

```js
var Rotate = require('rotate');

var SinRotate = Fire.Class({
    extends: Rotate,
    update: function () {
        this.transform.rotation += this.speed * Math.sin(Fire.Time.time);
    }
});
```

这里我们定义了一个新的 Component 叫 SinRotate，它继承自 Rotate，并对 update 方法进行了重写。当然这个 Component 也可以被其它脚本接着访问，只要用 require('sinRotate')。

备注：
  - require 可以在脚本的任何地方任意时刻进行调用。
  - 每个脚本只有第一次在项目里被 require 时，它内部定义的代码才会被执行，所以之后无论又被 require 几次，始终返回的都是同一份实例。
  - 调试时，可以随时在 Developer Tools 中 require 项目里的任意模块。

## <a name="define"></a>定义模块

### 定义Component

其实每一个单独的脚本文件就是一个模块，例如新建一个脚本 `rotate.js`，在里面定义一个 Component：

```js
var Rotate = Fire.Class({
    extends: Fire.Component,
    properties: {
        speed: 1
    },
    update: function () {
        this.transform.rotation += this.speed;
    }
});
```

当你在脚本中定义了一个 Component，Fireball 会自动将它设置为导出模块，其它脚本直接 require 这个模块就能使用这个 Component。

### 定义普通JavaScript模块

模块里不单单能定义 Component，实际上你可以定义任意 JavaScript 对象。假设有个脚本 `config.js`

```js
var config = {
    moveSpeed: 10,
    version: '0.15',
    showTutorial: true,

    load: function () {
        // ...
    }
};
config.load();
```

现在如果我们要在其它脚本中访问 config 对象：

```js
// player.js
var config = require('config');
Fire.log('speed is', config.moveSpeed);
```

结果会有报错：`TypeError: Cannot read property 'moveSpeed' of null`，这是因为 config 没有设置为导出对象。我们还需要在 `config.js` 的最后把 **module.exports** 设置成 config：

```js
module.exports = config;
```

这样做的原因是只要有其它脚本 require 它，获得的实际上就是这里的 module.exports 对象。

> 那为什么定义 Component 时可以不用设置 exports ？
  因为 Component 是 Fireball 中的特殊类型，如果一个脚本定义了 Component 却没有声明 exports，Fireball 会自动将它设置为对应的 Component。

完整代码如下：

```js
// config.js
var config = {
    moveSpeed: 10,
    version: '0.15',
    showTutorial: true,

    load: function () {
        // ...
    }
};
config.load();

module.exports = config;
```
```js
// player.js
var config = require('config');
Fire.log('speed is', config.moveSpeed);
```

这样便能正确输出：`speed is 10`。

## 更多示例

### 导出变量

- module.exports 默认就是 {}，可以直接往里面增加新的字段。

    ```js
    // foobar.js:
    module.exports.foo = function () {
        Fire.log("foo");
    };
    module.exports.bar = function () {
        Fire.log("bar");
    };
    // test.js:
    var foobar = require("foobar");
    foobar.foo();    // "foo"
    foobar.bar();    // "bar"
    ```
- module.exports 导出的对象的值可以是任意 JavaScript 类型。

    ```js
    // foobar.js:
    module.exports = {
        FOO: function () {
            this.type = "foo";
        },
        bar: "bar"
    };
    // test.js:
    var foobar = require("foobar");
    var foo = new foobar.FOO();
    Fire.log(foo.type);      // "foo"
    Fire.log(foobar.bar);    // "bar"
    ```

### 封装私有变量

每个脚本都是一个单独的作用域，在脚本内使用 **var** 定义的局部变量，将无法被模块外部访问。我们可以这样来封装模块内的私有变量：

```js
// foobar.js:
var dirty = false;
module.exports = {
    setDirty: function () {
        dirty = true;
    },
    isDirty: function () {
        return dirty;
    },
};

// test1.js:
var foo = require("foobar");
Fire.log(typeof foo.dirty);        // "undefined"
foo.setDirty();

// test2.js:
var foo = require("foobar");
Fire.log(foo.isDirty());           // true
```

**警告：定义变量前一定要在前面加上 var**，否则将会变成全局变量！在 Fireball 中禁止使用全局变量。

```js
// foobar.js:
dirty = false;        // 这是错的，dirty 会变成全局变量！前面应该加上 var ！
module.exports = {
    setDirty: function () {
        dirty = true;
    },
};
```

## 循环引用

(TODO)
