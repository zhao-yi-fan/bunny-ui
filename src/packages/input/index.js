import Input from './input.vue'
import '../../style/input.scss'

Input.install = (app) => {
  app.component(Input.name, Input)
}

export default Input
