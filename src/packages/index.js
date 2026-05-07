// 总入口
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Dialog from './dialog'
import Tag from './tag'
import Divider from './divider'
import Watermark from './watermark'
import Message from './message'

const plugins = [
  Button,
  ButtonGroup,
  Icon,
  Input,
  Dialog,
  Tag,
  Divider,
  Watermark
]

const install = (Vue) => {
  plugins.forEach((plugin) => {
    Vue.use(plugin)
  });

  Vue.use(Message, { duration: 1000 })
}

export default {
  install
}

export {
  Button,
  ButtonGroup,
  Icon,
  Input,
  Dialog,
  Tag,
  Divider,
  Watermark,
  Message
}
