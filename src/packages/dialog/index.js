import Dialog from './dialog.vue'
import '../../style/dialog.scss'

Dialog.install = (app) => {
  app.component(Dialog.name, Dialog)
}

export default Dialog
