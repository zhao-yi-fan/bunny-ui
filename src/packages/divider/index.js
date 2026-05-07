import Divider from './divider.vue'
import '../../style/divider.scss'

Divider.install = (app) => {
  app.component(Divider.name, Divider)
}

export default Divider
