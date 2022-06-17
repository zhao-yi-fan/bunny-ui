// 总入口
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Message from './message'

const plugins = [
  Button,
  ButtonGroup,
  Icon
]

const install = (app) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  });

  app.use(Message, { duration: 1000 })
}

export default {
  install
}