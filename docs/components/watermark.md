# Watermark

<p class="lead">为任意内容区域叠加重复文字或图片水印。</p>

<DemoFrame demo="watermark" title="Watermark 示例" :height="300" />

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `content` | 重复显示的文字水印。 | `string` | `''` |
| `image` | 自定义图片水印地址。 | `string` | `''` |
| `gap` | 水印平铺宽高。 | `number[]` | `[120, 120]` |
| `rotate` | 水印旋转角度。 | `number` | `-22` |
| `opacity` | 水印透明度。 | `number` | `0.15` |
| `zIndex` | 水印层级。 | `number` | `9` |
