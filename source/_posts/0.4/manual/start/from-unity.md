title: Unity 开发者上手
categories: manual
permalinks: manual/start/from-unity
---

虽然 Fireball 和 [Unity®](http://unity3d.com/) 有很多不同之处，但他们都是基于组件进行设计，有一些相似的使用体验。所以 Unity 的相关经验对入门 Fireball 有一定帮助，如果你了解过 Unity，那么这篇短文就是为你准备的。
本文并不从头介绍 Fireball，也不完整列举 Fireball 和 Unity 的所有不同点。

## 术语上的区别

Fireball 中的术语 | Unity 中的术语 | 说明
 --- | --- | ---
Scene | Level | 场景
Entity | GameObject | 场景中的对象，每个对象可包含多个组件(Component)
Assets | Project | 项目资源

## 设计上的区别

- Fireball 由 Entity 来维护父子关系，而 Unity 由 Transform 来维护。
- Fireball 的屏幕坐标(Viewport和Screen)都以左上角做为(0, 0)点。(Unity是以左下角)
- Fireball 的 NonSerialize 的字段也**可以**显示在 Inspector 中。(Unity不会)
- Fireball **可以**在 Inspector 中访问由 getter/setter 定义的属性。(Unity不行)

## API上的区别

- Fireball 的方法在命名上都以小写字母开头。
- Fireball 对象的基类是 Fire.FObject。（Unity是UnityEngine.Object）
- Fireball 销毁对象时不是调用 Object.Destroy(obj)，而是直接 **obj.destroy()**。
- Fireball 判断物体是否已被destroy，不能直接写 if (obj) ...，而要写 if (obj.isValid) 或 **Fire.isValid(obj)**。obj.isValid 只适用于 obj 的引用不为空的情况。
- Fireball 使用 **Entity.active** 来读取和设置 entity 自己的激活状态。（Unity使用activeSelf）
- Fireball 的组件只有 Component <del>和 Behaviour</del>，没有 MonoBehaviour。
- Fireball 添加组件用的是 **entity.addComponent(MyComponent)** 或 entity.addComponent("MyComponent")。
- Fireball 获取组件用的是 **entity.getComponent(MyComponent)** 或 entity.getComponent("MyComponent")。
- Fireball 使用 **component.entity** 来从组件获得 Entity。(Unity 使用 **component.gameObject**)
- Fireball 直接通过 **Entity.parent** 来获得和修改父物体，并且 **children**、sibling 和 find 等有关接口也直接通过 Entity 来访问。
- Fireball 的 **Transform.position** 是相对父物体的本地坐标，不是世界坐标。同理，rotation 和 scale 也均是本地坐标。
- Fireball 的 Transform 直接提供了 **transform.x**, transform.y 等属性，方便用户访问。
- Fireball 的 Component 提供 **onLoad** 回调。（相当于 Unity 的 **Awake**。）
- Fireball 的 Component 提供 **start** 回调。（相当于 Unity 的 **Start**。）
- Fireball 的回调函数遵循 node.js 的风格，即回调的第一个参数是错误信息，第二个参数才是获取到的数据。
- Fireball 的 Entity 可设置属性 dontDestroyOnLoad = true。（相当于 Unity 的 **DontDestroyOnLoad()**。）

