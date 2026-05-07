# Input

<p class="lead">Single-line text input with icons, size variants, and clear behavior.</p>

<DemoFrame demo="input" title="Input demo" :height="280" />

## API

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `value` | Bound input value. | `string` | `''` |
| `placeholder` | Native placeholder text. | `string` | `''` |
| `disabled` | Disable editing. | `boolean` | `false` |
| `clearable` | Show clear button when value exists. | `boolean` | `false` |
| `size` | Input size variant. | `string` | `medium` |
| `prefixIcon` | Leading icon name. | `string` | `''` |
| `suffixIcon` | Trailing icon name. | `string` | `''` |

## Events

| Event | Description |
| --- | --- |
| `input` | Emits the latest value for `v-model`. |
| `change` | Emits when native change fires or value is cleared. |
| `clear` | Emits when the clear button is clicked. |
