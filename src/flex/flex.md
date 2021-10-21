## 1 概念
> flex属性是flex-grow, flex-shrink, flex-basis的缩写

## 2 实现
```
    // 不扩展 默认收缩 宽度为0
    /* flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 0%; */
    /* flex: 0; */

    // 扩展 默认收缩 宽度自适应
    /* flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto; */
    /* flex: auto; */

    // 扩展 不收缩 宽度为50%
    /* flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 50%; */
    flex: 1 0 50%;
```    