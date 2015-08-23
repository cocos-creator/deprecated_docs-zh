title: 附录：输入事件列表
categories: manual
permalinks: manual/scripting/input-events
---

### 鼠标事件(触摸操作也会触发鼠标事件)

事件名 | 事件类型 | 说明 | 允许冒泡(Bubbles)
:--- |:---:|:--- |:---:
click | [Fire.MouseEvent](/api/classes/MouseEvent) | 单击鼠标 | true
dblclick | [Fire.MouseEvent](/api/classes/MouseEvent) | 双击鼠标 | true
mousedown | [Fire.MouseEvent](/api/classes/MouseEvent) | 按下鼠标 | true
mouseup | [Fire.MouseEvent](/api/classes/MouseEvent) | 抬起鼠标 | true
mousemove | [Fire.MouseEvent](/api/classes/MouseEvent) | 移动鼠标 | true

### 键盘事件

事件名 | 事件类型 | 说明 | 允许冒泡(Bubbles)
:--- |:---:|:--- |:---:
keydown | [Fire.KeyboardEvent](/api/classes/KeyboardEvent) | 键盘按下 | true
keyup | [Fire.KeyboardEvent](/api/classes/KeyboardEvent) | 键盘抬起 | true
