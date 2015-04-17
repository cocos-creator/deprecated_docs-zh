title: 类型定义
categories: manual
permalinks: manual/scripting/class
---

```
所有“备注”都属于进阶内容，初学者不需要了解。
```

`Fire.Class` 是一个很常用的 API，用于声明 Fireball 中的类，为了方便区分，我们把使用 Fire.Class 声明的类叫做 **FireClass**。相比其它 JavaScript 的类型系统，FireClass 的特别之处在于扩展性强，能够定义丰富的元数据。

## 概述

### 创建Fire.Class

调用 **Fire.Class** 方法，传入一个原型对象，在原型对象中以键值对的形式设定所需的类型参数，就能创建出所需要的类。

```js
    var Sprite = Fire.Class({
        name: 'Sprite'
    });
```

这段代码将创建好的类赋值给了 Sprite 变量，另外还提供了 `name` 参数来作为类名，类名用于序列化，一般可以省略。
为了论述方便，本文将这里传入的这个 `{ name: 'Sprite' }` 对象统称为**原型对象**，本文重点介绍如何定义原型对象。

### 创建对象

由于 FireClass 本身就是一个 JavaScript 构造函数，使用 new 就可以创建对象：

```js
    var obj = new Sprite();
```

### 构造函数

如果在原型对象中声明了 `constructor`，指定的构造函数就将在每个实例的创建过程中调用，FireClass 的构造函数**不允许**定义**构造参数**。

```js
    var Sprite = Fire.Class({
        constructor: function () {
            console.log(this instanceof Sprite);    // true
        }
    });
    var obj = new Sprite();
```

### 判断类型

`instanceof` 可以用来判断对象的类型：

```js
    console.log(obj instanceof Sprite);     // true
```

**备注**

- 如果不需要序列化，类名可以省略。类名可以是任意字符串，但不允许重复。可以使用 Fire.getClassName 来获得类名，使用 Fire.getClassByName 来查找对应的类。
- 专业开发者如果确实需要使用构造参数，可以在 constructor 的 arguments 里获取。但如果这个类需要序列化，必须保证构造参数都缺省的情况下仍然能 new 出对象。

## 成员

### 实例变量

实例变量请统一在构造函数中声明：

```js
    var Sprite = Fire.Class({
        constructor: function () {
            // 声明实例变量并赋默认值
            this.url = "";
            this.id = 0;
        }
    });
    var obj = new Sprite();
    // 赋值
    obj.url = 'img/fb.png';
    obj.id = 1;
```

### 实例方法

实例方法请在原型对象中声明：

```js
    var Sprite = Fire.Class({
        constructor: function () {
            // ...
        },
        // 声明一个名叫"load"的实例方法
        load: function () {
            // load this.url
        };
    });
    var obj = new Sprite();
    // 调用实例方法
    obj.load();
```

### 类变量和类方法

静态的类变量或类方法可以直接添加到定义好的 Class：

```js
    var Sprite = Fire.Class({ ... });

    // 声明类变量
    Sprite.count = 0;
    // 声明类方法
    Sprite.getBounds = function (spriteList) {
        // ...
    };
```

也可以在原型对象的 `statics` 中声明：

```js
    var Sprite = Fire.Class({
        statics: {
            // 声明类变量
            count: 0,
            // 声明类方法
            getBounds: function (spriteList) {
                // ...
            }
        }
    });
```

**完整代码如下：**

```js
    var Sprite = Fire.Class({
        name: 'Sprite',
        constructor: function () {
            // 声明实例变量并赋默认值
            this.url = "";
            this.id = 0;
        },
        // 声明一个名叫"load"的实例方法
        load: function () {
            // load this.url
        };
    });
    // 实例化
    var obj = new Sprite();
    // 访问实例变量
    obj.url = 'sprite.png';
    // 调用实例方法
    obj.load();

    // 声明类变量
    Sprite.count = 0;
    // 声明类方法
    Sprite.getBounds = function (spriteList) {
        // ...
    };

    // 调用类方法
    Sprite.getBounds([obj]);
```

**备注**

- 如果是**私有**成员，建议在成员命名前面加上下划线"_"以示区分。

    ```js
    var Sprite = Fire.Class({
        name: 'Sprite',
        constructor: function () {
            // 私有实例变量
            this._myData = 0;
        },
        // 私有实例方法
        _load: function () {
            // ...
        };
    });
    // 私有类变量
    Sprite._list = [];
    ```

- 如果是**私有**静态成员，也可以用闭包(Closure)实现。

    ```js
    // 私有静态方法
    var doLoad = function (sprite) {
        // do load ...
    };
    // 私有静态变量
    var url = 'foo.png';

    var Sprite = Fire.Class({
        load: function () {
            // 调用局部作用域内的方法
            doLoad(this, url);
        };
    });
    ```

- 这里所说的“实例成员”(instance member)包含了“实例变量”(member variable)和“实例方法”(instance method)。
- 这里所说的“类成员”(static member)包含了“类变量”(static variable)和“类方法”(static method)。
- 类变量的继承实现方式是将父类的静态变量**浅拷贝**给子类实现的。

## 继承

### 声明方式

继承时请在原型对象里设置 `extends` 为父类：

```js
    // define base class
    var Node = Fire.Class();

    // define sub class
    var Sprite = Fire.Class({
        extends: Node
    });

    // test
    var obj = new Sprite();
```

`instanceof` 也可以用来判断对象所在的类型是否继承自某个父类：

```js
    var sub = new Sprite();
    console.log(sub instanceof Node);       // true
    var base = new Node();
    console.log(base instanceof Sprite);    // false
```

### 父构造函数

请注意，不论子类的构造函数是否提供，子类实例化前父类的构造函数都会先被自动调用。

```js
    var Node = Fire.Class({
        constructor: function () {
            this.name = "node";
        }
    });
    var Sprite = Fire.Class({
        extends: Node,
        constructor: function () {
            // 子构造函数被调用前，父构造函数已经被调用过，所以 this.name 已经被初始化过了
            console.log(this.name);    // "node"
            // 重新设置 this.name
            this.name = "sprite";
        }
    });
    var obj = new Sprite();
    console.log(obj.name);    // "sprite"
```

### 重载

所有实例方法都是虚方法，子类方法可以直接重载父类方法：

```js
    var Node = Fire.Class({
        getName: function () {
            return "node";
        }
    });
    var Sprite = Fire.Class({
        getName: function () {
            return "sprite";
        }
    });
    var obj = new Sprite();
    console.log(obj.getName());    // "sprite"
```

如果想要调用父类方法，必须直接通过父类的 prototype，并且以 call 或 apply 的形式调用：

```js
    var Node = Fire.Class({
        getName: function () {
            return "node";
        }
    });
    var Sprite = Fire.Class({
        getName: function () {
            var baseName = Node.prototype.getName.call(this);
            return baseName + ">sprite";
        }
    });
    var obj = new Sprite();
    console.log(obj.getName());    // "node>sprite"
```

使用 `Fire.isChildClassOf` 来判断两个类的继承关系：

```js
    var Texture = Fire.Class();
    var Texture2D = Fire.Class({
        extends: Texture
    });
    console.log(Fire.isChildClassOf(Texture2D, Texture));   // true
```

请注意，两个传入参数都必须是类的构造函数，而不是类的对象实例。如果传入的两个类相等，`isChildClassOf` 也会返回 true。

**备注**

- 可以通过子类的静态变量 `$super` 来访问父类。
- 所有实例成员和类成员都将被子类继承。
- 如果不希望类成员被子类继承，可以用 [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 声明：

    ```js
        Object.defineProperty(Sprite, 'getBounds', {
            value: function (spriteList) {
                // do get bounds ...
            },
            enumerable: false
        });
    ```
- 如果你想实现原生的 JavaScript 继承，也就是说你的父类和子类都不是 FireClass，那你可以通过 Fire.JS.extend 方法来继承。

## 属性

### 属性定义和访问

属性(Property)是特殊的实例变量，能够显示在 Inspector 中，也能被序列化。属性不在构造函数里定义，而是声明在原型对象的 `properties` 字典里。

**下面在 Player 类定义一个 playerName 属性：**

```js
    var Player = Fire.Class({
        extends: Fire.Component,

        properties {
            playerName: {
                default: 'Jare'
            }
        }
    });
```

这个示例也可在教程[创建和使用脚本](/manual/scripting/component#show-in-inspector)中看到，这样定义后，playerName 就能显示在 Inspector 面板里，并且在场景里保留用户输入的值。

这里的 `default` 用来声明属性的默认值，同时也定义了值类型是字符串。default 可以接受任意类型的参数，但默认值只有在第一次创建对象的时候才会用到，如果是反序列化出来的对象，属性值将会还原为上次序列化前设置的值。

**属性本身也是实例变量，可以直接访问：**

```js
    var Sprite = Fire.Class({
        constructor: function () {
            console.log(this.width);    // 读取默认 width
        },

        properties: {
            width: {
                default: 128
            },
        },

        getWidth: function () {
            return this.width;
        }
    });
```

在构造函数被调用前，属性已经被定义好了，可以在构造函数内访问或者重新给属性赋值。

### 属性参数

每个属性可附带任意多个参数(Attribute)，用于指定在 Inspector 中的显示方式、序列化方式等。

```js
    properties {
        score: {
            default: 0,
            type: Fire.Integer,
            tooltip: 'The score of player'
        }
    }
```

以上代码规定了 score 在 Inspector 里只能输入整数，并且当鼠标移到参数上时，显示对应说明。

下面是常用参数，详细用法请参阅[属性参数](/manual/scripting/attributes)。

- type: 限定属性的数据类型
- visible: 设为 false 则不在 Inspector 面板中显示该属性
- serializable: 设为 false 则不序列化该属性
- displayName: 在 Inspector 面板中显示成指定名字
- tooltip: 在 Inspector 面板中添加属性的 Tooltip
- multiline: 在 Inspector 面板中使用多行文本框

#### <a name="visible参数"></a>visible参数

默认情况下，是否显示在 Inspector 取决于属性名是否以下划线"_"开头。如果以下划线开头，则默认不显示在 Inspector，否则默认显示。

如果要显示在 Inspector，可以设置`visible`参数为 true:

```js
    properties {
        _id: {
            default: 0,
            visible: true
        }
    }
```

如果要在 Inspector 中隐藏，可以设置`visible`参数为 false:

```js
    properties {
        id: {
            default: 0,
            visible: false
        }
    }
```

#### <a name="serializable"></a>serializable参数

属性默认情况下都会被序列化，如果不想序列化，可以设置`serializable: false`。

```js
    temp_url: {
        default: '',
        serializable: false
    }
```

#### <a name="type"></a>type参数

当`default`不能提供足够详细的类型信息时，如果想要在 Inspector 里编辑属性，则需要用`type`显式声明具体的类型：

- 当默认值为 null 时，将 type 设置为指定类型(构造函数)，这样才能在 Inspector 中给属性正确赋值。

    ```js
        enemy: {
            default: null,
            type: Fire.Entity
        }
    ```
- 当默认值为数值(Number)类型时，将 type 设置为 `Fire.Integer`，用来表示这是一个整数，这样属性在 Inspector 里就不能输入小数点。
    ```js
        score: {
            default: 0,
            type: Fire.Integer
        }
    ```
- 将 type 设置为枚举类型，就能在 Inspector 中显示枚举选项框。
    ```js
        wrap: {
            default: Fire.Texture.WrapMode.Clamp,
            type: Fire.Texture.WrapMode
        }
    ```
- 当 default 设置为**数组**`[]`时，如果要在 Inspector 中编辑数组元素，可以设置 type 为以上提到的构造函数、`Fire.Integer`、枚举，或者设置成字符串`Fire.Float`, `Fire.Boolean`, `Fire.String`的其中一个，。
    ```js
        nameList: {
            default: [],
            type: Fire.String      // 指定数组的每个元素都是字符串类型
        },
        enemyList: {
            default: [],
            type: Fire.Entity   // 指定数组的每个元素都是 Entity 类型
        }
    ```

### 属性快捷定义

如果属性不带任何参数，则可以直接写成：

```js
    // 完整形式
    properties: {                   // 快捷形式
        width: {            =>      properties: {
            default: 128    =>          width: 128
        }                   =>      }
    }
```

但**默认值不能是对象类型**，如果默认值是对象，还是只能用完整的写法：

```js
    properties: {
        position: {
            default: new Fire.Vec2()
        }
    }
```

**备注**

- 属性都能被子类继承，但子类和父类的属性不能重名。
- 如果属性的默认值需要调用其它方法才能获得，可以在构造函数里重新赋值。

    ```js
    var Sprite = Fire.Class({
        constructor: function () {
            this.img = LoadImage();
        },
        properties: {
            img: null
        }
    });
    ```

## GetSet方法

在属性中设置了 get 或 set 以后，访问属性的时候，就能触发预定义的 get 或 set 方法。

### get

在属性中设置 get 方法：

```js
    properties: {
        width: {
            get: function () {
                return this.__width;
            }
        }
    }
```

get 方法可以返回任意类型的值。
这个属性同样能显示在 Inspector 中，并且可以在包括构造函数内的所有代码里直接访问。

```js
    var Sprite = Fire.Class({
        constructor: function () {
            this.__width = 128;
            console.log(this.width);    // 128
        },
        properties: {
            width: {
                get: function () {
                    return this.__width;
                }
            }
        }
    });
```

请注意：

- 设定了 get 以后，这个属性就不能被序列化，也不能指定默认值，但仍然可附带除了 "default", "serializable" 以外的任意参数。

    ```js
        width: {
            get: function () {
                return this.__width;
            },
            type: Fire.Integer,
            tooltip: "The width of sprite"
        }
    ```

- get 属性本身是只读的，但返回的对象并不是只读的。用户使用代码依然可以修改对象内部的属性，例如：

    ```js
    var Sprite = Fire.Class({
        ...
        position: {
            get: function () {
                return this.__position;
            },
        }
        ...
    });
    var obj = new Sprite();
    obj.position = new Fire.Vec2(10, 20);   // 错误！position 是只读的！
    obj.position.x = 100;                   // 允许！position 对象本身可以修改！
    ```

### set

在属性中设置 set 方法：

```js
    width: {
        set: function (value) {
            this.__width = value;
        }
    }
```

set 方法接收一个传入参数，这个参数可以是任意类型。

set 可以和 get 一起使用：

```js
    width: {
        get: function () {
            return this.__width;
        },
        set: function (value) {
            this.__width = value;
        },
        type: Fire.Integer,
        tooltip: "The width of sprite"
    }
```

请注意：
- 如果没有和 get 一起定义，则 set 自身不能附带任何参数。
- 和 get 一样，设定了 set 以后，这个属性就不能被序列化，也不能指定默认值。
