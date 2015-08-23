title: 新建项目
categories: manual
permalinks: manual/start/new-project
---

> 通过本篇文章您将了解：
- 如何使用Fireball Dashboard创建新项目或打开现有项目
- Fireball项目中的文件是如何进行组织的

##使用Dashboard管理您的项目
运行Fireball引擎后，您将看到如下图所示的Dashboard界面：
![new-project-01](https://cloud.githubusercontent.com/assets/2867434/6851104/f49912b0-d417-11e4-8338-9b72b18df4a7.png)

###Recent Projects
您可以通过**Rencent Projects**列表快速访问最近打开过的项目。
将鼠标悬停到项目列表的条目上，会在条目右下角显示操作按钮，您可以：
- 单击条目上的`Open`打开一个项目，或
- 单击条目上的`Close`将项目从列表中移除（不会删除项目文件夹）。
![new-project-02](https://cloud.githubusercontent.com/assets/2867434/6866397/b26ccc38-d4b2-11e4-89b0-91bc1d3f6d09.png)

###New Project
您可以通过**New Project**来新建一个游戏项目。
单击`New Project`，将弹出新建项目的属性设置界面：
![new-project-02](https://cloud.githubusercontent.com/assets/2867434/6851105/f5123dd4-d417-11e4-9399-3ea81c0fd3b0.png)

需要设置的属性字段分别为：
- **Name**
  新建项目的名称。
- **Path**
  新建项目的目标**父级目录**。Fireball将在该位置下创建一个以`Name`属性为名的文件夹存放项目文件。
- **Templates**
  新建项目的框架模板。
  根据您希望构建的游戏类型（2D/3D），可以选择不同的模板构建项目，Fireball将为您选择合适的库进行引用。
  *注：目前Fireball引擎只支持创建2D游戏，我们将在后续版本中加入对3D引擎的支持。*
- **Game Kits**
  使用指定的游戏开发包创建新项目。
  通过使用Game Kit，您可以轻松创建指定风格的游戏（RPG、跑酷类、射击类等）。Game Kit将为您提供适合该游戏风格的基本逻辑框架和一些基础资源，使您无需进行重复的底层框架开发工作，做到真正的快速构建和发布。
  *注：该功能目前暂不可用，我们将在后续版本中推出Game Kits供您选择。*


项目属性设置完成后，单击`Create`按钮创建项目，Fireball将关闭Dashboard并将新建项目加载到Fireball Editor中。
关于Fireball Editor的更多信息请参见本文末尾的相关条目。

###Open Other...
若Recent Projects中没有您想要访问的项目，您可以使用**Open Other...**来手动打开Fireball项目。
单击`Open Other...`，并在弹出的文件对话框中选择项目位置。由于Fireball项目是以**文件夹**进行组织的，因此您需要定位到**项目文件夹**而非特定的项目文件。

###Help
使用**Help**访问Fireball的使用帮助。

##项目文件结构
Fireball项目的文件结构如下：
```
ProjectName
├──assets
├──library
├──local
├──settings
└──temp
```
- 项目参与者公用目录
  - **assets**
    项目资源文件，包括实际用于构建项目的所有元素，例如：
    - 场景
    - 脚本
    - Sprite
    - 贴图
    - 音频
    ...
    简单来说，该目录对应[Editor]（/start/editor-overview)中Assets面板下加载的项目资源。
  - **settings**
    项目的全局设置，这些设置为项目级参数，为项目的所有参与者所共有，例如：
    - 插件设置
    - 按键设置
    - 物理设置
    ...
- 客户端私有目录（不应纳入版本管理）
  - **library**
    客户端资源库管理目录，用于[Editor](/start/editor-overview)资源库的数据记录及资源展示。
  - **local**
    项目的本地设置，存储当前用户不适用于项目全局范围的个性化设置，如客户端界面布局。
  - **temp**
    临时文件存放目录。


---
###接下来...
- 阅读[「认识Editor」](/start/editor-overview)以了解项目开发环境的更多信息。
