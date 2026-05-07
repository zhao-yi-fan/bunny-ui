# Dialog

<p class="lead">Focused modal surface for confirmation and short task flows.</p>

<DemoFrame demo="dialog" title="Dialog demo" :height="360" />

## API

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `visible` | Controls dialog visibility. | `boolean` | `false` |
| `title` | Header title text. | `string` | `''` |
| `closeOnClickModal` | Close when backdrop is clicked. | `boolean` | `true` |
| `closeOnPressEscape` | Close on `Escape`. | `boolean` | `true` |

## Events

| Event | Description |
| --- | --- |
| `update:visible` | Emits `false` when the dialog requests close. |
| `open` | Emits when the dialog becomes visible. |
| `close` | Emits when the dialog becomes hidden. |
