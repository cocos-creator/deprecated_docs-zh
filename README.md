# Fireball中文文档

这里是Fireball游戏引擎的中文文档资源站。当前 Fireball 版本为 v0.4.0

## Requirements

建议使用 node 0.12.0 以上版本，并卸载之前旧版的 hexo
`npm rm -g hexo`

```
npm install -g gulp
npm install -g hexo-cli
npm install
```

## 预览

```
gulp generate
hexo s
```

## Contributing

### 文档分类

文档目前分为 tutorial，manual, api 三类，分别对应`source`目录下的不同文件夹。
直接在github下的[source/\_post]目录下建立表示分类的文件夹，并在里面新建md文件即可添加文档。

### Front-matter

每个文档最前面应该有一组数据定义文档的标题、链接等重要信息，像这样：

```yaml
title: 文档标题
categories: manual
permalinks: manual/group/my-doc-link
---
```

其中：
- title 表示文档标题
- categories 文档分类，在`manual`、`tutorial`、`api`中的一个
- permalinks 表示文章的链接，注意是`permalinks`结尾有s，而且链接的前后都不可以加`/`。

### 图片和其他资源

我们可以用两种方式嵌入图片，一种是在[文档图片库](https://github.com/fireball-x/document-images/issues)中新建 issue 并把要贴的图片放进去，issue 的名字要和文档的标题类别相对应。

另一种方式是直接把图片上传到这个 repo 里，位置要求如下：

```
/_posts/category/subcategory/my-file.md
/_posts/category/subcategory/my-file
                              |--screenshot.png
                              |--document.pdf
```  
要把图片放在和文章相同层级的同名文件夹内，如果文章的 permalink 是`category/subcategory/my-title`
那么图片的链接就是`category/subcategory/my-title/screenshot.png`
为了更好得可迁移性，引用图片时最好加上 hostname，如`http://docs-zh.fireball-x.com/category/subcategory/my-title/screenshot.png`

## Troubleshooting


### `[Error: Cannot find module './build/Release/DTraceProviderBindings'] code: 'MODULE_NOT_FOUND'`

 Unknown reason for causing this issue. Reinstall local hexo with `no-optional` param to fix it:

 ```bash
 npm install hexo --no-optional
 ```

参考 https://github.com/hexojs/hexo/issues/1055
