title: 附录：保留字
categories: manual
permalinks: manual/scripting/reserved-words
---

除了类已经定义的变量外，以下是其它 Fireball-x 中已经内部占用的变量名，请避免冲突。这些变量有一些只有特殊情况才会用到，有一些是将来可能会用到。

### 全局变量

- `Fire`
- `Editor`
- `FireEditor`
- `PIXI`
- `cc`
- `sp`
- `spine`
- `require`

### 可能定义在任意对象上的变量

- `__id__`
- `__type__`
- `_iN$t`
- `_rawext`

### 可能定义在任意类型或 prototype 上的变量

- 任何以 `_attrs$` 开头的变量
- `__classname__`
- `__cid__`

### FireClass 上的静态变量

- `get`
- `set`
- `getset`
- `prop`
- `$super`
- `__props__`
- `__ctors__`

### FireClass 上的实例变量

- `_observing`
- `_$erialized`

### 枚举定义上的变量

- `__enums__`
