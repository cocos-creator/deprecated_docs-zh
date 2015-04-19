title: 认识Editor
categories: manual
permalinks: manual/start/editor-overview
---

> 本章节将介绍Fireball引擎编辑器的核心界面，使您能够快速熟悉Fireball Editor的各项功能，为后续的项目开发做好准备。
> 在阅读本章节之前，请确认您已经完成了以下章节的学习：
> - [获取Fireball](/zh/start/get-fireball/)
> - [新建项目](/zh/start/new-project/)

# 引言
在您跃跃欲试，开始创造自己的游戏之前，请务必先花些时间阅读本章节来了解Fireball Editor提供的各项功能——这将使您在以后构建游戏的过程中更加得心应手。当对Editor中任何部分的功能有疑问时，本章节也是您寻找答案的好地方。


Fireball Editor的主界面由若干个面板组成，每个面板都被设计用来完成特定任务。您可以调整这些面板的大小、位置来创建满足您个人使用习惯的界面布局。除了这些任务面板，菜单栏、工具栏和其他专门的工具窗口中也提供了构建一款游戏所必不可少的功能。


下图对Fireball Editor主界面的布局进行了简单介绍（默认布局中**Game面板**与**Scene面板**重叠，您需要单击`Scene`标签旁的`Game`标签进行切换），其中每一部分功能和使用说明都将在下面列出的相应小节中进行详细说明。

![editor-overview-intro](http://docs-zh.fireball-x.com/manual/start/editor-overview/editor-overview-intro.png)

# 菜单栏
##Fireball
* **Hide Fireball (快捷键 <kbd>H</kbd> )**
*暂无说明*
* **Hide Others (快捷键 <kbd>Shift + H</kbd> )**
*暂无说明*
* **Show All**
*暂无说明*
* **Quit (快捷键 <kbd>Ctrl/Command + Q</kbd> )**
退出Fireball Editor
* **Check For Updates**
检查是否有更新版本的Fireball Editor供升级。
* **About**
显示Fireball Editor的关于信息及版权信息。
* **Panels**
*暂无说明*

##File
* **New Scene (快捷键 <kbd>Ctrl/Command + N</kbd> )**
新建一个场景。
一个游戏由一个或多个场景组织而成，当需要制作新关卡、主菜单界面、加载界面、设置界面或类似的独立模块时，就需要通过该功能来新建场景。
* **Save Scene (快捷键 <kbd>Ctrl/Command + S</kbd> )**
保存当前打开的场景。
若当前场景从未被保存过，则会弹出保存文件对话框，此时您可以将场景文件(.fire)保存在指定位置；若当前场景已被保存过，Fireball Editor会直接把场景的改动保存到该场景对应的文件中。
> 建议您将所有场景文件保存到同一个位置以便管理，如**assets/scenes**。
* **Build Settings**
对项目的构建参数进行设置。
项目构建(Build)是发布游戏必不可少的步骤，Fireball Editor通过构建操作对您的项目文件进行打包和优化，使其能够便捷、安全、正确地部署到对应的发布平台上。通过Build Settings，您不但可以调整参数以发布满足特定需求的版本，而且能够在发布前进行项目的预览。
有关Build Settings的更多说明请参阅[工具窗口](#tool-windows)中的Build Settings一节。

##Edit
* **Undo (快捷键 <kbd>Z</kbd> )**
撤销上一个操作。
* **Redo (快捷键 <kbd>Shift + Z</kbd> )**
重做最近一个已撤销的操作。
* **Cut (快捷键 <kbd>X</kbd> )**
剪切选中的Entity到剪贴板。
* **Copy (快捷键 <kbd>C</kbd> )**
复制选中的Entity到剪贴板。
* **Paste (快捷键 <kbd>V</kbd> )**
将剪贴板中的Entity粘贴到场景中。
* **Select All (快捷键 <kbd>A</kbd> )**
选中当前场景中的所有Entity。

##Entity
> 在Fireball中，每一个游戏对象都被称为一个**Entity（实体）**。通过挂载的不同组件和资源，**Entity**能够表现出不同的外观和行为。游戏场景的展示、交互以及游戏逻辑的执行就是通过一个个**Entity**组织起来的。

* **Create Empty**
在场景中创建一个空白的**Entity**。
一个空白的**Entity**中只包含该**Entity**的**几何变换信息**位置、旋转、缩放），新创建的空白**Entity**默认属性为：
  - ***Position*** x=0, y=0
  - ***Rotation*** 0
  - ***Scale*** x=1, y=1
* **Create Empty Child**
在场景中选中的**Entity**下创建一个空白的**子级Entity**。
若当前没有选中的**Entity**，将在场景的根级别创建一个新的空白**Entity**，此时行为与**Create Empty**相同。

##View
*暂无说明*

##Window
* **Close (快捷键 <kbd>W</kbd> )**
关闭Fireball Editor窗口。

##Developer
* **Reload (快捷键 <kbd>Ctrl/Command + R</kbd> )**
重新加载Fireball Editor。
* **Recompile (快捷键 <kbd>F7</kbd> )**
重新编译场景中的所有脚本。
* **Developer Tools (快捷键 <kbd>Alt + Ctrl/Command + I</kbd> )**
打开**Developer Tools（开发人员工具）**窗口。
**Developer Tools**为您提供了强大的分析、调试和跟踪工具，对于游戏脚本的开发人员来说必不可少。关于**Developer Tools**的功能介绍和使用说明，请查阅[工具窗口](#tool-windows)中的Developer Tools一节。
* **Show Selected Asset in Library**
打项目Library文件夹中当前选中资源所在的目录。
* **Test**
  * **Reload Window Scripts**
*待完成*
  * **Reload Core Plugins**
*待完成*
  * **Thrown an Uncaught Exception**
*待完成*
  * **Ipc send2panel foo:bar@foobar@fire**
*待完成*
  * **AssetDB Debugger**
打开资源数据库的调试窗口**AssetDB Debugger**，用于在调试过程中跟踪资源的变化和对应关系。关于**AssetDB Debugger**的功能介绍和使用说明，请查阅[工具窗口](#tool-windows)中的AssetDB Debugger一节。

##Help
* **Website**
访问Fireball引擎的官方网站以获取产品的更多信息。
* **Documentation**
访问Fireball引擎的文档网站，以学习Fireball引擎的使用说明和查阅开发API。
* **Forum**
访问Fireball引擎的技术论坛，与其他用户及开发者进行交流并分享心得。
* **Submit An Issue On Github**
在Fireball引擎的Github项目中提交一个Issue。通常情况下，如果您在使用过程中发现功能错误，或有对提高用户体验更好的建议，欢迎您通过提交Github Issue的方式向我们反馈。Fireball团队会竭力给您满意的答案。
* **Subscribe To Newsletter**
订阅Fireball引擎的邮件列表，以便及时接收关于本产品的最新消息和更新说明。

# 工具栏<a id="toolbar"></a>
## 移动工具 ![tool-move](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-move.png)
通过控制柄对选中的**Entity**进行移动操作。当选中移动工具后，控制柄会变成如下图所示：
![preview-move](http://docs-zh.fireball-x.com/manual/start/editor-overview/preview-move.png)
* 拖动绿色箭头可使**Entity**沿当前参照系的Y轴移动。
* 拖动红色箭头可使**Entity**沿当前参照系的X轴移动。
* 拖动控制柄中央的蓝色矩形则可使**Entity**同时沿当前参照系的X轴和Y轴移动。

## 旋转工具 ![tool-rotate](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-rotate.png)
通过控制柄对选中的**Entity**进行旋转操作。当选中旋转工具后，控制柄会变成如下图所示：
![preview-rotate](http://docs-zh.fireball-x.com/manual/start/editor-overview/preview-rotate.png)
* 将鼠标放置于红色控制柄上或其内部按圆周拖动，即可根据拖动方向旋转**Entity**。
* 在拖动时，控制柄会显示出当前旋转的角度以供参考。

## 缩放工具 ![tool-scale](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-scale.png)
通过控制柄对选中的**Entity**进行缩放操作。当选中缩放工具后，控制柄会变成如下图所示：
![preview-scale](http://docs-zh.fireball-x.com/manual/start/editor-overview/preview-scale.png)
* 将鼠标放置于绿色手柄上可使**Entity**沿当前参照系的Y轴进行缩放。
* 将鼠标放置于红色手柄上可使**Entity**沿当前参照系的X轴进行缩放。
* 拖动控制柄中央的灰色矩形则可使**Entity**同时沿当前参照系的X轴和Y轴缩放。

## 使用自身参照系 ![tool-self-coordinate](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-self-coordinate.png)
控制柄的指向以选中的**Entity**自身为参照系，跟随**Entity**的旋转而旋转。
当使用自身参照系时，控制柄在选中的**Entity**上的表现如下图所示：
![preview-self-coordinate](http://docs-zh.fireball-x.com/manual/start/editor-overview/preview-self-coordinate.png)
## 使用世界参照系 ![tool-world-coordinate](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-world-coordinate.png)
控制柄的指向以当前世界为参照系，始终指向世界的X方向和Y方向。
当使用世界参照系时，控制柄在选中的**Entity**上的表现如下图所示：
![preview-world-coordinate](http://docs-zh.fireball-x.com/manual/start/editor-overview/preview-world-coordinate.png)
## 控制柄置于轴心点 ![tool-pivot](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-pivot.png)
控制柄放置在当前选中的**Entity**的轴心点上，移动、旋转和缩放操作均以该轴心点为轴。
当选中场景中的多个**Entity**时，控制柄会放在选择过程中第一个选中的**Entity**上，如下图所示（本例中从左到右进行框选）：
![preview-pivot](http://docs-zh.fireball-x.com/manual/start/editor-overview/preview-pivot.png)
## 控制柄置于中央 ![tool-centre](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-centre.png)
控制柄放置在当前选中**Entity**的中心，即移动、旋转和缩放操作均以选区中心为轴。
当选中场景中的多个**Entity**时，控制柄会放在整个选区的中心位置，如下图所示：
![preview-centre](http://docs-zh.fireball-x.com/manual/start/editor-overview/preview-centre.png)
## 运行游戏 ![tool-play](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-play.png)
编译并运行当前游戏场景，并激活**Game面板**的交互。
## 暂停游戏 ![tool-pause](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-pause.png)
暂停当前正在运行的游戏。
通过暂停游戏可以方便地查看暂停状态下的游戏数据、对象状态等，以免游戏继续执行导致数据和状态发生变化。
## 逐帧运行 ![tool-step](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-step.png)
游戏继续执行到下一帧并暂停。
通过逐帧运行游戏，能够方便地追踪游戏数据和对象状态每一帧的变化，通常用于对游戏内的一段时间范围进行动态调试。
## 快捷键帮助 ![tool-hotkeys](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-hotkeys.png)
单击该按钮将弹出Fireball Editor的快捷键映射表。
## 当前用户 ![tool-user](http://docs-zh.fireball-x.com/manual/start/editor-overview/tool-user.png)
*暂无说明*

# Hierarchy面板
![hierarchy-panel](http://docs-zh.fireball-x.com/manual/start/editor-overview/hierarchy-panel.png)
**Hierarchy面板**用于管理当前场景中所有的**Entity**，即游戏对象。**Entity**在**Hierarchy面板**中以层级方式进行组织——这表示某些**Entity**之间存在父子关系，子级**Entity**能够继承父级**Entity**的某些属性。例如，当移动、旋转或缩放父级**Entity**时，子级**Entity**也会随之变换。
## Entity列表
场景中的**Entity**会按它们之间的层级关系在列表中进行展现。拥有子级对象的**Entity**名称前会显示一个小箭头![collapse-arrow](http://docs-zh.fireball-x.com/manual/start/editor-overview/collapse-arrow.png)。单击箭头即可展开或折叠该父级**Entity**。

选中列表中的**Entity**，将会在**Inspector面板**中显示其属性，同时会在**Scene面板**中显示该**Entity**的控制柄。您可以使用 <kbd>Shift</kbd> 键和 <kbd>Ctrl</kbd> 键来在列表中进行连续多选或不连续多选。

如需修改**Entity**间的父子关系，请拖动列表项目并将其置于所需的层级位置处。例如，将**Entity** A置于**Entity** B上，则可使A成为B的子级**Entity**。

在Entity列表中点击鼠标右键将弹出右键菜单，其中：
* **Duplicate**: 创建一个当前选中**Entity**的副本，并将其置于列表最后。当需要在场景中创建多个具有相似属性的**Entity**时，这是最快捷的方法。
* **Rename**: 对当前选中的**Entity**重命名。您也可以在**Inspector面板**中为**Entity**重命名。
* **Delete**: 删除当前选中的**Entity**。您也可以通过键盘的 <kbd>Delete</kbd> 键删除选中的**Entity**。
* **Create Empty**: 在场景中创建一个空白的**Entity**。
一个空白的**Entity**中只包含该**Entity**的**几何变换信息**位置、旋转、缩放），新创建的空白**Entity**默认属性为：
  - ***Position*** x=0, y=0
  - ***Rotation*** 0
  - ***Scale*** x=1, y=1
* **Create Empty Child**: 在场景中选中的**Entity**下创建一个空白的**子级Entity**。
若当前没有选中的**Entity**，将在场景的根级别创建一个新的空白**Entity**，此时行为与**Create Empty**相同。
## 新增**Entity**
单击左上角的![add-button](http://docs-zh.fireball-x.com/manual/start/editor-overview/add-button.png)按钮将弹出场景中**Entity**的创建菜单：
* Create Empty
在场景中创建一个空白的**Entity**。
一个空白的**Entity**中只包含该**Entity**的**几何变换信息**位置、旋转、缩放），新创建的空白**Entity**默认属性为：
  - ***Position*** x=0, y=0
  - ***Rotation*** 0
  - ***Scale*** x=1, y=1
* Create Empty Child
在场景中选中的**Entity**下创建一个空白的**子级Entity**。
若当前没有选中的**Entity**，将在场景的根级别创建一个新的空白**Entity**，此时行为与**Create Empty**相同。
## 搜索**Entity**
搜索框用于快速筛选和定位具有指定关键字的**Entity**。当场景中拥有大量**Entity**，或包含复杂的层级关系时，使用搜索框能够有效提高您的工作效率。

# Assets面板
![assets-panel](http://docs-zh.fireball-x.com/manual/start/editor-overview/assets-panel.png)
**Asset（资源）**是游戏中一切展现元素和逻辑控制的组成基础，这些**Asset**属于整个游戏项目，为所有游戏场景共有。只有拥有对应的**Asset**，场景中的**Entity**才能够发挥各自的作用，例如展示相应的图形、调用脚本进行逻辑控制等。Fireball引擎中，**Asset**可以是以下类型：
* Texture（纹理）
* Normal Map（法向贴图）
* Sprite（精灵）
* Sprite Animation（精灵动画）
* 音乐音效
* 游戏字体
* Fire-shell脚本
* Atlas图集
* 场景

Fireball Engine中，为不同类型的**Asset**提供了不同的控制行为，使其可以匹配不同类型的**Component**。更多详细信息请参见Fireball Engine的API开发文档。
## Asset列表
游戏项目中的**Asset**按照目录关系进行组织，以*Assets*文件夹为根目录，因此Fireball Editor只会加载*Assets*目录下的**Assets**。
对于一个完整的游戏来说，其项目中可能包含大量**Asset**，因此我们强烈建议按照**Asset**的类别组织目录以方便查找，例如所有脚本**Asset**均放置于*script*目录下，界面相关的**Asset**放置于*ui*目录下，以此类推。
选中列表中的**Asset**后，会在**Inspector面板**中显示所选**Asset**的属性。您可以使用 <kbd>Shift</kbd> 键和 <kbd>Ctrl</kbd> 键来进行连续多选和不连续多选。
在列表中拖动**Asset**可以改变所选**Asset**所属的目录，以便对其进行更好的归纳组织。
如需将**Asset**放入当前场景，可将其拖拽到**Hierarchy面板**中，该**Asset**将自动被转换为**Entity**放入场景。
> 此处有一项特例：场景**Asset**不能通过拖拽放入**Hierarchy**面板中，因为一个场景不能够包含另一个场景。您可以通过双击场景**Asset**来打开所选场景。

在Asset列表中点击鼠标右键可以打开右键菜单，其中：
* **Create**
  - **New Folder**: 在当前选中的文件夹下创建新的子文件夹。
  - **New Script**: 创建新的Fire-shell脚本。新创建的脚本会提供基础的编辑模版，详情请查阅API开发文档。
  - **New Scene**: 创建新的场景。
  - **New Atlas**: 创建新的Atlas图集。
  - **New Sprite(Standalone)**: 创建静态Sprite（精灵）对象。必须选中一项静态图片作为材质才能创建。
  - **New Sprite Animation**: *施工中*
* **Rename**: 重命名选中的**Asset**
* **Delete**: 删除选中的**Asset**。您也可以使用 <kbd>Delete</kbd> 键删除。
* **Reimport**: 重新加载Asset列表中的所有**Asset**。
* **Show in Explorer**: 打开文件管理器，并定位到选中的**Asset**文件。
* **Show in Library**: 打开文件管理器，并定位到*Library*目录下选中**Asset**的元数据文件。
* **Show Uuid**: 在**Console面板**中显示选中**Asset**的唯一标识Uuid。

## 新增**Asset**
单击左上角的![add-button](http://docs-zh.fireball-x.com/manual/start/editor-overview/add-button.png)按钮将弹出**Asset**的创建菜单，其中：
* **New Folder**: 在当前选中的文件夹下创建新的子文件夹。
* **New Script**: 创建新的Fire-*hell脚本。新创建的脚本会提供基础的编辑模版，详情请查阅API开发文档。
* **New Scene**: 创建新的场景。
* **New Atlas**: 创建新的Atlas图集。
* **New Sprite(Standalone)**: 创建静态Sprite（精灵）对象。必须选中一项静态图片作为材质才能创建。
除了使用新增按钮添加**Asset**外，您也可以直接将欲添加的文件拖拽到**Asset面板**上来将其添加到项目中。

## 搜索**Asset**
搜索框用于快速筛选和定位具有指定关键字的**Asset**。当项目中拥有大量**Asset**时，使用搜索框能够有效提高您的工作效率。

# Inspector面板
**Inspector面板**使您可以查看并编辑当前选中项目的属性。
无论您选中的是场景中的**Entity**，还是资源库中的**Asset**，**Inspector面板**都会立即显示其可以编辑的关联属性和数值，而在**Inspector面板**中做出的修改也将实时应用到所选项目上，而无须重新编译游戏。

## **Entity**属性编辑
![inspector-entity](http://docs-zh.fireball-x.com/manual/start/editor-overview/inspector-entity.png)
* 启用/禁用复选框
  通过勾选/清空该复选框，可以启用或禁用当前编辑的**Entity**。禁用的**Entity**将不会在游戏场景中显示。
* 名称文本框
  修改当前选中的**Entity**的名称，以便更易查找和识别场景中的**Entity**。不同的**Entity**可以重名，但是我们建议您遵循统一的命名规范来为游戏项目中的**Entity**命名，以降低项目的开发难度和维护难度。您也可以通过**Hierarchy面板**来为**Entity**命名。
* 新增**Component**按钮
  您可以为**Entity**添加**Component（组件)**以使其具备相应的行为和功能。
  单击右上角的![add-button](http://docs-zh.fireball-x.com/manual/start/editor-overview/add-button.png)按钮将弹出**Component**新增菜单，包括：
  - **Scripts**: 将Fire-shell脚本绑定到该**Entity**上以控制其行为。Fireball Editor将自动搜索Asset库中所有的脚本，并以子菜单的形式列举出来以便快速选择。
  - **SpriteRenderer**: 新增Sprite精灵渲染组件，使该**Entity**能够将指定的Sprite精灵**Asset**渲染到场景中。
  - **BitmapText**: 使用位图字体在场景中显示文本。
  - **Text**: 使用系统字体在场景中显示文本。
  - **Camera**: 新增游戏摄影机，用于控制游戏的视角。
  - **AudioSource**: 新增音频播放源，用于在游戏场景中播放音乐或音效。
  - **Sprite Animation**: 新增Sprite精灵动画控制器。*施工中*
* **Component**列表
  这里是**Inspector面板**的主要工作区域，其中包括了该**Entity**所拥有的所有**Component**及**Component**的可编辑属性。通常情况下，**Entity**的**Component**根据被添加的顺序进行排列，但是`Fire.Transform`会始终显示在第一个，因为它是**Entity**的基本组件。点击**Component**名称左侧的箭头图标可以展开或折叠该**Component**的详细信息以节省空间。点击名称右侧的“X”图标将从**Entity**中删除该**Component**。
  关于每种**Component**属性的详细说明，请参阅相应**Component**的说明文档。

## **Asset**属性编辑
![inspector-asset](http://docs-zh.fireball-x.com/manual/start/editor-overview/inspector-asset.png)
相比**Entity**的属性编辑面板，**Asset**的属性编辑面板要简洁很多。这是因为**Asset**并不作为游戏场景直接使用的对象，无需进行与场景相关的详细参数设置，而且它们大多数都是从外部被导入的，通常情况下需要使用相应的外部工具进行编辑（如图像处理软件）。

总的来说，**Asset**属性编辑面板中的参数由两种类别组成，但部分种类的**Asset**可能只拥有其中一种类别的属性可供编辑：
* **Meta**
  **Asset**在Fireball Editor中的元数据，主要包含了被编辑的**Asset**在引擎中的行为或表现方式。例如，对于导入的图片文件，可以设置其**Asset**类型为Sprite精灵、纹理或法向贴图。
* **Asset**
  被编辑**Asset**的原始资源属性，例如图片的尺寸、音频的采样率等。这些属性通常情况下不能在Fireball Editor中进行编辑，只能作为查阅之用。

**Asset**属性编辑面板还提供了**Asset**的预览窗口，以供开发者对所编辑的**Asset**进行确认。对于不同种类的**Asset**：
* 如果是图形文件，预览窗口将在窗口尺寸的限制内显示该图片，并在窗口底部注明图片的原始尺寸。
* 如果是音频文件，预览窗口将提供音频的回放控制工具栏，使您可以播放和停止播放该音频文件，并且可以控制是否循环播放。同时，预览窗口中将显示该音频文件的一些基本信息（声道、采样率、音频格式等）以及回放的时间信息。

在**Inspector面板**中修改**Asset**的属性后，需要单击面板右上角的![inspector-apply](http://docs-zh.fireball-x.com/manual/start/editor-overview/inspector-apply.png)以将更改应用到所有关联的**Entity**上，或单击![inspector-revert](http://docs-zh.fireball-x.com/manual/start/editor-overview/inspector-revert.png)撤销修改。

# Scene面板
![scene-panel](http://docs-zh.fireball-x.com/manual/start/editor-overview/scene-panel.png)
**Scene面板**用于对当前的游戏场景进行编辑，可以说是游戏制作中最直观、最主要的编辑面板。
**Scene面板**通常被用于设计和构建游戏关卡的地图，例如对关卡背景、地图地面、障碍物、可视元素等进行设置。得益于**Scene面板**的可视化特性，它也被用于设计UI（用户交互界面）布局等一切希望所见即所得的游戏元素。
**需要注意的是，场景中必须有一个摄影机（Camera)用于提供视角，否则在游戏中将看不到任何画面。**不过通常情况下您并不需要担心这一点，因为在创建每个场景时，Fireball Editor都提供了一个默认的摄影机。

**Scene面板**的使用十分简单。您只需要在其中单击选中或框选所需编辑的**Entity**，然后使用工具栏上相应的变换工具对其进行位置、旋转或缩放的更改便可即时看到变化结果。当某个或多个**Entity**被选中时，在**Hierarchy面板**中会对选中项进行高亮显示，同时**Scene面板**中也会显示控制柄（控制柄的显示位置取决于您的**控制柄位置设置**，详情请参见[工具栏](#toolbar)的使用说明）。

当游戏场景过大时，您可以使用鼠标滚轮来缩放场景的显示范围。

通过面板右上角的搜索框，您可以通过**Entity**的名称来快速选中场景中对应的项目。

# Game面板
![game-panel](http://docs-zh.fireball-x.com/manual/start/editor-overview/game-panel.png)
**Game面板**是游戏场景的运行窗口。其本身并不提供游戏场景的编辑功能，但是在游戏场景进入运行状态后，它将与最终的游戏运行环境完全一致——这意味着您可以使用**Game面板**查看游戏的最终运行效果，以及进行游戏中的交互操作。

**Game面板**中的游戏视角取决于您对摄影机**Entity**的设置，不过您可以通过面板的工具栏设置不同的画面比例，以模拟游戏在不同平台和屏幕尺寸下的运行效果。大部分画面比例通过其名称就可以知道其含义，而此处将对其中几种特殊的比例和设置进行说明：
* **Free Aspect**: 画面大小根据当前**Game面板**的尺寸进行调整，确保填满面板的显示范围。
* **Custom Size**: 自定义画面尺寸。选中此项后，您可以使用工具栏右侧的数值框对画面尺寸进行精确的自定义设置。尺寸大小的单位为像素。
* **Rotate**: 勾选此项后，游戏画面将进行90°旋转，以模拟横屏效果。

# Console面板
![console-panel](http://docs-zh.fireball-x.com/manual/start/editor-overview/console-panel.png)
**Console面板**主要用于对游戏脚本的运行状态进行监控，以及通过输出的调试信息进行脚本调试。其中的信息可能来自您编写的有脚本，也可能来自Fireball Editor本身。
Fireball Editor通过不同的颜色对不同级别的控制台输出信息进行区分，严重级别从低到高分别为：
* **Log**（灰色）: 通常为仅用于调试的跟踪信息。
* **Info**（蓝色）: 通常用于指明运行状态或进行通知的信息。
* **Warn**（黄色）: 通常用于表明有不正常的运行状态，但尚不会导致程序无法运行。
* **Error**（红色）: 通常用于告知遇到了严重的、影响程序正常运行的错误，如未被捕获的异常等。

当程序的控制台输出很多时，可以通过**Console面板**工具栏中提供的工具进行管理：
* **清空所有信息 ![console-clear](http://docs-zh.fireball-x.com/manual/start/editor-overview/console-clear.png)**: 清空控制台输出信息列表。
* **筛选框 ![console-filter](http://docs-zh.fireball-x.com/manual/start/editor-overview/console-filter.png)**: 通过关键字对控制台信息进行筛选。当勾选后面的**Regex**复选框时，筛选文本框中的文本将被认为是正则表达式。
* **级别筛选下拉框 ![console-level](http://docs-zh.fireball-x.com/manual/start/editor-overview/console-level.png)**: 只显示某一严重级别的控制台输出。当选择**All**时将显示所有级别的控制台输出。
* **Collapse复选框**: 当勾选此复选框时，相同内容的控制台输出信息将被合并，并在被合并的信息前显示一个数字，以指明该信息已被重复显示了多少次。当输出大量重复信息，且信息的输出顺序不重要时，使用折叠功能能够有效节省**Console面板**的使用空间。

# 状态栏
*施工中*

# 工具窗口 <a id="tool-windows"></a>
*施工中*
