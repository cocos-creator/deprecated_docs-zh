title: 类型定义
---

```
本文档对应的实现代码在 core/src/class.js
所有“备注”都属于进阶内容，初学者不需要了解。
```

Fireball 的数据类型(Class)使用 **Fire.define** 进行定义，以便简化继承、支持序列化、定义属性等。为了方便区分，这些类叫做 **FireClass**。

## <a name="define"></a>定义FireClass

- FireClass 其实就是一个特殊的 JavaScript 构造函数，通过调用 **Fire.define** 来定义。
```js
    var Sprite = Fire.define('Sprite');
```
以上代码定义了一个名为 'Sprite' 的 FireClass，并且赋给 Sprite 变量。'Sprite' 这个名字即是类名又是类型ID，将会用于序列化等场合。

- **实例化**时采用
```js
    var obj = new Sprite();  // 和 JavaScript 一样
```

- Fire.define 的第二个参数是**构造函数**，构造函数将在每个实例 new 出来时调用，用于初始对象。构造函数**不允许定义构造参数**。
```js
    var Sprite = Fire.define('Sprite', function () {
        console.log(this instanceof Sprite);
    });
    // 调用
    var obj = new Sprite();
    // true
```

- 备注：
  - 类名可以是任意字符串，不允许重复。可以使用 Fire.getClassName 来获得类名，使用 Fire.getClassByName 可用类名查找出对应的类。
  - 进阶开发者如果确实需要使用构造参数，可以利用 arguments 获取。但如果这个类需要序列化，必须保证构造参数都缺省的情况下仍然能 new 出对象。

## <a name="member"></a>成员

- **成员变量**请统一在构造函数中定义。
```js
    var Sprite = Fire.define('Sprite', function () {
        // 声明成员变量并赋初始值
        this.url = "";
        this.id = 0;
    });
    // 调用
    var obj = new Sprite();
    obj.url = 'img/fb.png';
    obj.id = 1;
```

- 和 JavaScript 一样，**实例方法**请在 prototype 上定义：
```js
    // 实例方法
    Sprite.prototype.load = function () {
        // load this.url
    };
```

- 和 JavaScript 一样，**静态变量**或**静态方法**请直接添加到 FireClass：
```js
    // 静态变量
    Sprite.count = 0;
    // 静态方法
    Sprite.getBounds = function (spriteList) {
        // do get bounds ...
    };
```

- 完整代码如下
```js
    var Sprite = Fire.define('Sprite', function () {
        this.url = "";    // 声明成员变量
        this.id = Sprite.count;      // 访问静态变量
        ++Sprite.count;
    });

    // 静态变量
    Sprite.count = 0;

    // 静态方法
    Sprite.getBounds = function (spriteList) {
        // do get bounds ...
    };

    // 实例方法
    Sprite.prototype.load = function () {
        // do load this.url
    };

    // 实例化
    var obj = new Sprite();
    obj.url = 'img/fb.png';
    
    // 访问成员变量
    obj.url = 'www/' + obj.url;
    // 调用实例方法
    obj.load();
    // 调用静态方法
    obj.getBounds([obj]);
```

- 备注：
  - 所有实例和静态成员都将被子类继承。
  - 如果不希望静态成员被子类继承，可以用 [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 声明：
  ```js
    Object.defineProperty(Sprite, 'getBounds', {
        value: function (spriteList) {
            // do get bounds ...
        },
        writable: true,
        enumerable: false
    });
  ```
  - 如果要定义**私有**成员，不建议在 Sprite 上声明，建议用闭包(Closure)实现。
  ```js
    // 私有实例方法
    var loadSprite = function (self) {
        // do load ...
    };
    Sprite.prototype.load = function () {
        loadSprite(this);
    };

    // 私有静态变量
    var debug = false;

    // 私有静态方法
    var getBound = function (spriteList) {
        // do get bound...
    };
    Sprite.getBounds = function (spriteList) {
        if (debug) {
            getBound(spriteList);
        }
    };
  ```
  - 这里所说的`实例成员`(instance member)包含了`成员变量`(member variable)和`实例方法`(instance method)。
  - 这里所说的`静态成员`(static member)包含了`静态变量`(static variable)和`静态方法`(static method)。

## <a name="inherit"></a>继承

- 使用 **Fire.extend** 来进行继承，第一个参数是子类的类名，第二个参数是父类。
```js
    var Node = Fire.define('Node');
    var Sprite = Fire.extend('Sprite', Node);    // inherit
    var obj = new Sprite();    // test
    console.log(sprite instanceof Node);    // true
```

- Fire.extend 允许传入第三个参数作为子类的构造函数。
```js
    var Sprite = Fire.define('Sprite', Node, function () {
        this.url = "";
    });
```

- 父构造函数

  - 不论子类的构造函数是否有提供，父类的构造函数都会被自动先调用。
  ```js
    var Node = Fire.define('Node', function () {
        this.name = "a node";
        this.id = 1;
    });
    var Sprite = Fire.define('Sprite', Node, function () {
	    console.log(this.name);    // "node"
	    console.log(this.id);      // 1
	    this.name = "a sprite";
    });
    var obj = new Sprite(250);
    console.log(obj.name === "a sprite");    // true
  ```

- 重载 (TODO)

- FireClass 提供了 `$super` 这个静态变量，保存了对父类的引用。因此父类也可以用 $super 代替：
```js
    var Sprite = Fire.extend('Sprite', Node);
    Sprite.prototype.draw = function () {
        console.log('before draw');
        Sprite.$super.prototype.draw.call(this);
        console.log('after draw');
    };
```

- Fire 提供了 `isChildClassOf` 用于判断继承，例如：  
```js
    var Texture = Fire.define('Texture');
    var Texture2D = Fire.extend('Texture2D', Texture);
    var result = Fire.isChildClassOf(Texture2D, Texture);   // 传入参数是类 constructor 本身而不是实例。
```
    **注意**: `isChildClassOf` 也包含两个类相等的情况，以下代码返回 true：
```js
    Fire.isChildClassOf(Texture2D, Texture2D);
```
    而它们的实例，可以用 `instanceof` 来判断：
```js
    var tex = new Texture2D();
    var result = tex instanceof Texture;	// true
```

- 备注：
  - 当你希望子类仅仅是原始的 JavaScript 构造函数，而不是 FireClass 时，你应该调用的是 Fire.JS.extend 而不是 Fire.extend。Fire.JS.extend 更加底层，只是实现最基本的继承，详细用法请查看相关 api。

## <a name="property"></a>属性(Property)

FireClass 提供了 **prop** 方法用于声明属性(property)。属性是特殊的成员变量，能够显示在 Inspector 中，也能被序列化。
- prop 需要两个参数，一是属性变量名，二是属性的默认值，默认值可以是任意类型。  
```js
    var Sprite = Fire.define('Sprite');
    Sprite.prop('width', 128);
```
以上代码定义了 width 属性，width 将显示在 Inspector，保存时也将被序列化。

- FireClass 在实例化前将自动添加属性到成员变量，可以在包括构造函数在内的代码里直接访问。
```js
    var Sprite = Fire.define('Sprite', function () {
        console.log(this.width);    // 128
    });
    Sprite.prop('width', 128);
    Sprite.prototype.getWidth = function () {
        return this.width;
    };
```

- 每个属性可附带任意多个**参数**(Attribute)，用于指定在 Inspector 中的显示方式、序列化方式等。详细的属性列表，请查阅有关文档(TODO)。
```js
    Sprite.prop('width', 128, Fire.Integer, Fire.Tooltip('The width of sprite'));
```
以上代码规定了 width 在 Inspector 里只能输入整数，并且当鼠标移到参数上时，显示对应说明。

- 属性默认情况下都会被序列化，**也会**在 Inspector 中显示。
  - 如果只想序列化，但不想显示在 Inspector，可以添加 `Fire.HideInInspector` 参数。  
    `Sprite.prop('id', 0, Fire.HideInInspector);`
  - 如果不想序列化，只想显示在 Inspector，可以添加 `Fire.NonSerialized` 参数。  
    `Sprite.prop('url', 0, Fire.NonSerialized);`
  - 如果不想序列化，也不想显示在 Inspector，可以同时传入 Fire.NonSerialized 和 Fire.HideInInspector。也可以干脆不用属性，直接在构造函数里定义的变量即可。

- 属性都能被继承，但子类和父类的属性不能重名。

- 备注：
  - 如果属性的默认值需要调用其它方法才能获得，可以在构造函数里重新赋值。
  ```js
    var Sprite = Fire.define('Sprite', function () {
        this.img = LoadImage();
    });
    Sprite.prop('img', null);
  ```
  - FireClass 的所有接口都支持链式调用：
  ```js
    var Sprite = Fire.extend('Sprite', Node, function () {
                          this.id = 0;
                      })
                     .prop('width', 128, Fire.Integer, Fire.Tooltip('The width of sprite'))
                     .prop('img', null)
                     .get('color', function () {
                          return this._color;
                      });
  ```
  - 实际上如果要显示在 Inspector，需要定义的是 Component，并且添加到 Entity 上。

## <a name="accessor"></a>访问器

访问器(Accessor)就是 **getter** 或 **setter**。在 JavaScript 中，可以用 [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 声明访问器。  

FireClass 另外封装了定义访问器的接口，这些接口和`prop`类似，用于在 Inspector 中显示指定值，但这些值不会被序列化。

- FireClass 提供了 **get** 方法用于声明一个 getter。  
它的第一个参数是变量名，第二个是获取时调用的方法，该方法可以返回任意类型的值。  
```js
    var Sprite = Fire.define('Sprite');
    Sprite.get('width', function () {
        return 128;
    });
```  
以上代码定义了 width 的 getter，getter 可以在包括构造函数在内的代码里直接访问：
```js
    var Sprite = Fire.define('Sprite', function () {
        this._width = 128;
        console.log(this.width);    // 128
    });
    Sprite.get('width', function () {
        return this._width;
    });
    var obj = new Sprite();
    console.log(obj.width);    // 128
```
和 `prop` 一样，get 可附加任意多个参数，用于指定在 Inspector 中的显示方式。
```js
    Sprite.get('width', function () {
        return this._width;
    }, Fire.Integer, Fire.Tooltip('The width of sprite'));
```
以上代码规定了 width 在 Inspector 里只能输入整数(如果有 setter 的话)，并且当鼠标移到参数上时，显示对应说明。  

- **set**  
set 方法和 get 类似，它的第一个参数是变量名，第二个是设置时调用的方法，该方法可以传入一个任意类型的参数。  
set 方法不能附加任何参数，如果需要，请把参数加到相应的 get 方法。如果没有对应的 get，则不在 Inspector 中显示。
```js
    var Sprite = Fire.define('Sprite', ...);
    Sprite.get('width', function () {
        return this._width;
    }, Fire.Integer);
    Sprite.set('width', function (value) {
        this._width = value;
    });
```

- **getset**  
可使用 getset 简化 get 和 set 调用
```js
    var Sprite = Fire.define('Sprite', ...);
    Sprite.getset('width',
        function () {
            return this._width;
        },
        function (value) {
            this._width = value;
        },
        Fire.Integer);
```

- 访问器不能和属性(prop)重名。

- 访问器都能被继承，但子类和父类的访问器不能重名。

- 备注：
  - 如果访问器附带了`Fire.HideInInspector`参数，则不在 Inspector 中显示，但仍然能从代码访问。
  - 如果一个 getter 没有相应的 setter，则在 Inspector 中是只读的，但它如果是对象或数组，内部的字段仍然可修改。


