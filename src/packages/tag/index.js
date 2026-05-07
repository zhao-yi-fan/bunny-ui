import Tag from './tag.vue'
import '../../style/tag.scss'

Tag.install = (app) => {
  app.component(Tag.name, Tag)
}

export default Tag
