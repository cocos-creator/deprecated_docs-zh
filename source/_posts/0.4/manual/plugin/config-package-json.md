title: 插件设置
categories: manual
permalinks: manual/plugin/config-package-json
---

TODO:

## 选项

 * fireball
   * `main` String - 入口函数
   * `menus` Array - 菜单列表
     * `path` String - 菜单路径
     * `message` String - 触发消息
   * `panels` Object - Panel 信息列表
     * `panel` Object - key 表示 Panel 别名
       * `type` String - 窗体类型, 可选项 `float`, `dockable`, `fixed-size`
       * `page` String - 入口页面, 如果设置了 ppage, 那么 view 将被忽略
       * `view` String - Panel 内容元素
       * `title` String - Panel 在 Tab 中显示的标题
       * `width` Integer - Panel 的宽度
       * `height` Integer - Panel 的高度
       * `min-width` Integer - Panel 的最小宽度
       * `min-height` Integer - Panel 的最小高度
       * `max-width` Integer - Panel 的最小宽度
       * `max-height` Integer - Panel 的最小高度
       * `messages` Object - Panel 消息和 DOM 消息的绑定列表, `{ key: "ipc 消息", value: "DOM 消息"}`
