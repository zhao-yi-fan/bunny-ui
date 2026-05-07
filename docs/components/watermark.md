# Watermark

<p class="lead">Overlay repeated text or image branding on top of any wrapped content.</p>

<DemoFrame demo="watermark" title="Watermark demo" :height="300" />

## API

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `content` | Repeated watermark text. | `string` | `''` |
| `image` | Custom watermark image URL. | `string` | `''` |
| `gap` | Tile width and height. | `number[]` | `[120, 120]` |
| `rotate` | Text rotation in degrees. | `number` | `-22` |
| `opacity` | Watermark opacity. | `number` | `0.15` |
| `zIndex` | Watermark layer order. | `number` | `9` |
