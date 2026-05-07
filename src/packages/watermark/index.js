import Watermark from './watermark.vue'
import '../../style/watermark.scss'

Watermark.install = (app) => {
  app.component(Watermark.name, Watermark)
}

export default Watermark
