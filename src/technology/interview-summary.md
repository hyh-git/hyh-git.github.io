# 个人面试总结

### 1. node事件循环

[点击查看node事件循环](https://www.jianshu.com/p/8cab6821bab7)

### 2. webpack 中hash区别

[点击查看webpack 中hash区别](https://www.cnblogs.com/giggle/p/9583940.html)

### 3. http2 入门

[点击查看http2 入门](https://segmentfault.com/a/1190000013589424)

### 4. vue-slot

[点击查看vue-slot](https://www.jianshu.com/p/559332a9c123)

### 5. promise 常用解析

[点击查看promise 常用解析](https://www.jianshu.com/p/1b63a13c2701)

### 6. vue到底有哪些缺点

[有待更新]

### 7. 单页面应用带来的缺点 首页白屏

[点击查看 单页面应用带来的缺点](https://blog.csdn.net/vgub158/article/details/89189591)

### 8. koa和express区别

[点击查看koa和express区别](https://www.jianshu.com/p/17e82ac53452)

### 9. 单页面应用带来的缺点 首页白屏

[点击查看 单页面应用带来的缺点](https://blog.csdn.net/vgub158/article/details/89189591)

### 10. 弄懂CORS

[点击查看 弄懂CORS](https://www.jianshu.com/p/f9c21da2c661)

### 11. 前端 Meta 用法大汇总

[点击查看 前端 Meta 用法大汇总](https://www.jianshu.com/p/850d2a209ba8)

### 12. nodejs如何开启多线程

[点击查看 nodejs如何开启多线程](https://blog.csdn.net/sanjay_f/article/details/44937443)

### 13. 前端 Meta 用法大汇总

[点击查看 前端 Meta 用法大汇总](https://www.jianshu.com/p/850d2a209ba8)

### 14. Javascript中的尾递归

[点击查看 Javascript中的尾递归](https://blog.csdn.net/tzllxya/article/details/90702660)

### 15. vue computed

[点击查看 vue computed原理](https://segmentfault.com/a/1190000016368913?utm_source=tag-newest)

### 16. vue和react的区别

[点击查看 vue和react的区别](https://www.jianshu.com/p/b7cd52868e95?from=groupmessage)

### 17. vue和react的区别

[点击查看 vue和react的区别](https://www.jianshu.com/p/b7cd52868e95?from=groupmessage)

### 18. scoped原理
vue中的scoped属性的效果主要通过PostCSS转译实现，如下是转译前的vue代码：
```
<style scoped>
.example {
 color: red;
}
</style>
<template>
 <div class="example">hi</div>
</template>
```
转译后：
```
<style>
.example[data-v-5558831a] {
 color: red;
}
</style>
<template>
 <div class="example" data-v-5558831a>hi</div>
</template>
```
即：PostCSS给一个组件中的所有dom添加了一个独一无二的动态属性，然后，给CSS选择器额外添加一个对应的属性选择器来选择该组件中dom，这种做法使得样式只作用于含有该属性的dom——组件内部dom。

[点击查看 scoped原理](https://www.jianshu.com/p/b92e2a022cd8)

### 18. http和https的区别

[暂无]