## ct-adc-mini-msg

弱提示；兼容Vue插件的形式和普通js插件方式使用

## 组件示例图

![img](https://github.com/ct-adc/ct-adc-mini-msg/blob/dev/minimsg.png)

## 在线demo

[在线demo]()

## 使用

从npm安装ct-adc-mini-msg

```
npm install ct-adc-mini-msg --save
```
在代码中使用

```
import Vue from 'vue';
import MiniMsg from 'ct-adc-mini-msg';

Vue.use(MiniMsg);
在组件中使用:
this.$minimsg(options);

或者

new MiniMsg(options).animation();
```

## options

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ---
content | 提示内容 | String | '' | 字符串（支持html渲染）|
type | 提示类型 | String | 'info' | success/error/warning/info | 
container | 承载信息框的外层容器 | DOM | body | DOM元素 |
stay | 信息框的停留时长，单位:秒 | Number | 1 | 数字 |
duration | 信息框的停留时长，单位:秒 | Number | 0.3 | 数字 |
top | 信息框容器顶部的最大高度 | Number | 16 | 数字 |

## this.$minimsg

弹出一个弱提示

### 参数

同options

### 返回值

MiniMsg实例


## 方法 （MiniMsg实例的方法）

### animation

执行信息框动画，通过执行该方法来显示一个信息框。

#### 参数列表

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ----
callback 非必填 执行完动画后的回调函数

### 返回值

类型: this

### destroy

实时销毁minimsg

#### 参数列表

无参数

### 返回值

undefined

## 更新日志

[更新日志](https://github.com/ct-adc/ct-adc-mini-msg/blob/dev/CHANGELOG.md)

## 外部资源依赖列表

jquery

