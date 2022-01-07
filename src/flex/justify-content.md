## 0 环境
- 系统：win10
- 编辑器：idea
- 浏览器：谷歌
## 1 前言
> 不是专业搞前端的 看着css文档 justify-content用着迷迷糊糊的 虽然能用 但用着就很难受 

## 2 准备
[菜鸟教程在线源码](https://www.runoob.com/try/try.php?filename=trycss3_justify-content)

## 3 概念
> `justify-content` 属性定义了浏览器之间，如何分配顺着弹性容器主轴(或者网格行轴) 的元素之间及其周围的空间 是不是看着挺云里雾里的 我直接放弃 找了国外网站
翻译过来是 `justify-content`属性是Flexible Box Layout模块的子属性。它定义了沿着主轴的对齐。当一行上的所有伸缩项目都是不灵活的，或者是灵活的，但已经达到最大尺寸时，它有助于分配多余的空闲空间。当项目溢出行时，它还对项目的对齐方式施加一些控制。但还是不够粗暴，HTML5与CSS网页设计基础的书上提了空白两字，换句话 主轴元素(弹性布局 + 沿着主轴的对齐方式/元素之间空白怎么分配的问题)(菜鸟理解 不对之处 请指正)

## 4 实现对比
![对齐方式](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f231f649f7bd4295b8c48a1a93e22979~tplv-k3u1fbpfcp-watermark.image?)

### 1 flex-xxx和center
> 由下图可见 大致归纳 把整个div看成一个整体 把它放在主轴方向哪个位置(怎么个对齐法) 比如开始 中间 最后(左 中 右)

![flex-start](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff11385dd0b84715b2519b44bfb4eae5~tplv-k3u1fbpfcp-watermark.image?)

![center](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48724e37509549f6bd0528edbe356bfc~tplv-k3u1fbpfcp-watermark.image?)

![flex-end](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/036eab461f8340d3b80a924bc66fc733~tplv-k3u1fbpfcp-watermark.image?)

### 2 space-xxx
> 结合字面理解 + 下图，主轴元素间的空白分配 `between` **每个元素之间有空白** `around` **围绕每个元素的空白(最外面元素外侧的空白 * 2 == 两个元素之间的空白)** `evenly` **空白平均分配(最外面元素外侧的空白 == 每个元素之间的空白)** 可以看作`around` + `between`

![space-between](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39e54f8515a64ed5b7a752c907d3c83e~tplv-k3u1fbpfcp-watermark.image?)

![space-around](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d136f1974c24a5c928207e36f89bdd8~tplv-k3u1fbpfcp-watermark.image?)

![space-evenly](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0eade67c6a14f048901024cf20834ed~tplv-k3u1fbpfcp-watermark.image?)