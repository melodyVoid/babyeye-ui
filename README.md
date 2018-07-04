# babyeye-ui

常用组件

## Button 按钮

### Attribute

|   参数   |   说明   |  类型   |       可选值       | 默认值 |
| :------: | :------: | :-----: | :----------------: | :----: |
|   size   |   尺寸   | String  | small/medium/large | medium |
|  plain   | 朴素按钮 | Boolean |         -          | false  |
|  italic  | 斜体按钮 | Boolean |         -          | false  |
|  round   | 圆角按钮 | Boolean |         -          | false  |
| disabled |   禁用   | Boolean |         -          | false  |

### examples

```html
<be-button size="large" italic>斜体大按钮</be-button>
<be-button plain round disabled>朴素圆角禁用按钮</be-button>
```

## MessageBox 弹框

### Options

|   参数    |     说明     |     类型     |                          可选值                           | 默认值 |                         说明                          |
| :-------: | :----------: | :----------: | :-------------------------------------------------------: | :----: | :---------------------------------------------------: |
|   title   |     标题     |    String    |                             -                             |   -    |             如果不配置 title 属性，则为空             |
|  message  |     内容     | String/Array |                             -                             |   -    |   如果显示一条信息传字符串，如果显示多条信息传数组    |
|   icon    |     图标     |    String    | eyecheck/eyeposition/foutlamp/fusion/sensitivity/stecheck |   -    |                                                       |
| btnItalic | 按钮是否斜体 |   Boolean    |                             -                             | false  |                                                       |
|   size    |     尺寸     |    String    |                          large/                           |   -    | 如果设置 size 为 large,则显示为大弹框，否则是普通弹框 |

## Dialog 对话框

### Options

|   参数    |     说明     |     类型     |                          可选值                           | 默认值 |                         说明                          |
| :-------: | :----------: | :----------: | :-------------------------------------------------------: | :----: | :---------------------------------------------------: |
|   title   |     标题     |    String    |                             -                             |   -    |             如果不配置 title 属性，则为空             |
|  message  |     内容     | String/Array |                             -                             |   -    |   如果显示一条信息传字符串，如果显示多条信息传数组    |
|   icon    |     图标     |    String    | eyecheck/eyeposition/foutlamp/fusion/sensitivity/stecheck |   -    |                                                       |
| btnItalic | 按钮是否斜体 |   Boolean    |                             -                             | false  |                                                       |
|   size    |     尺寸     |    String    |                          large/                           |   -    | 如果设置 size 为 large,则显示为大弹框，否则是普通弹框 |
|   isVisible    |     是否显示     |    Boolean    |                          -                           |   true    | 由父组件的属性控制是否显示，需在v-bind的时候加上sync修饰符 |

### Slot
|   参数    |     说明     |
| :-------: | :---------: |
| 默认 | 默认Slot会插入内容区域 |
| footer | footer Slot会插入底部区域 |

## Table 展示型表格

### Options

#### column
Type: Array
Default: []
Normal: [columnItem, columnItem, ...]

columnItem: {
  label[String]: 显示在表格中的表头,
  prop[String]: 数据在data数组中dataItem中的属性名,
  width[String]: 可选，固定表格宽度，css宽度值格式字符串
}
Example: [{label: '姓名', prop: 'name', width: '300px'}, {label: '学号', prop: 'stuid'}]

#### data
Type: Array
Default: []
Normal: [dataItem, dataItem, ...]

dataItem: {
  id[String]: 唯一标识符，推荐填写否则Vue报错,
  ...(自行添加的数据，未登记在columnItem中的属性名将不被显示)
}
Example: [{id: 1, name: '李狗蛋'， stuid: '9527'}, {id: 2, name: '王二傻'， stuid: '9528'}]
#### small
Type: Boolean
Default: false

小表格样式

#### noline
Type: Boolean
Default: false

无线表格样式

#### border
Type: Boolean
Default: false

包边表格样式

### Notice

该组件的调用方式是全局方法。

在 vue 文件中

```vue
<template>
  <be-button @click="open">点击打开 Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert({
          title: '我是标题',
          icon: 'fourlamp',
          message: '已检查完左眼，请换右眼',
          btnItalic: true,
          size: 'large'
        }).then(() => {
          	// callback
        })
      }
    }
  }
</script>
```

在 js 文件中调用

```js
import { MessageBox } from 'babyeye-ui'

MessageBox.alert({
  title: '我是标题',
  icon: 'fourlamp',
  message: '已检查完左眼，请换右眼',
  btnItalic: true,
  size: 'large'
}).then(() => {
    // callback
})
```

此外，还添加了关闭 MessageBox 的方法

```
MessageBox.close()
```

调用此方法即可立即关闭 MessageBox