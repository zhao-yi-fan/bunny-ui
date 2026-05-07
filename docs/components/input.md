# Input

<p class="lead">单行输入框，支持图标、尺寸切换和清空操作。</p>

<DemoFrame demo="input" title="Input 示例" :height="280" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 绑定值。 | `string` | `''` |
| `placeholder` | 原生占位文本。 | `string` | `''` |
| `disabled` | 是否禁用。 | `boolean` | `false` |
| `clearable` | 有值时是否显示清空按钮。 | `boolean` | `false` |
| `size` | 输入框尺寸。 | `string` | `medium` |
| `prefixIcon` | 前置图标名称。 | `string` | `''` |
| `suffixIcon` | 后置图标名称。 | `string` | `''` |

## 事件

| 事件名 | 说明 |
| --- | --- |
| `input` | 用于 `v-model` 的实时值更新。 |
| `change` | 原生 change 触发或点击清空时触发。 |
| `clear` | 点击清空按钮时触发。 |
