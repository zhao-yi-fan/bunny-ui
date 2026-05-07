# Dialog

<p class="lead">用于确认、提示和短流程操作的模态弹层。</p>

<DemoFrame demo="dialog" title="Dialog 示例" :height="360" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `visible` | 控制弹层显示状态。 | `boolean` | `false` |
| `title` | 头部标题。 | `string` | `''` |
| `closeOnClickModal` | 点击遮罩是否关闭。 | `boolean` | `true` |
| `closeOnPressEscape` | 按下 `Escape` 是否关闭。 | `boolean` | `true` |

## 事件

| 事件名 | 说明 |
| --- | --- |
| `update:visible` | 组件请求关闭时发出 `false`。 |
| `open` | 弹层显示时触发。 |
| `close` | 弹层隐藏时触发。 |
