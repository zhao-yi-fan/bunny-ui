import Message from './message.vue'
import '../../style/message.scss'

const defaultOptions = {
  duration: 3000
}

// 获取当前组件的实例
let getInstance = () => {
  let vm = new _Vue({
    // MessageComponent这个vue文件会被加载成一个对象
    render: h => h(Message)
  }).$mount(); // 会在内存中进行挂载
  // .$mount('#app') 写了就会挂载到页面，没写就会放到$el中
  document.body.appendChild(vm.$el)

  // 获取他的儿子，就一个儿子
  let component = vm.$children[0]
  return {
    add (options) {
      component.add(options)
    }
  }
}
// 单例模式
let instance;
const getInst = () => { // 返回唯一的实例
  instance = instance || getInstance();
  return instance;
}
const MessageMap = {
  info (options) {
    getInst().add(formatOptions(options, 'info'));
  },
  warn (options) {
    getInst().add(formatOptions(options, 'warn'));
  },
  success (options) {
    getInst().add(formatOptions(options, 'success'));
  },
  error (options) {
    getInst().add(formatOptions(options, 'error'));
  },
}

let _Vue;
let globalOptions = { ...defaultOptions }

const formatOptions = (options, type) => {
  const normalizedOptions = typeof options === 'string' ? { message: options } : options || {}
  return {
    ...globalOptions,
    ...normalizedOptions,
    type
  }
}

export default { // 写插件的原理
  install (Vue, options) { // options 选项代表的是 use的第二个参数
    globalOptions = {
      ...defaultOptions,
      ...options
    }

    if (!_Vue) { // 防止用户多次use
      _Vue = Vue;
      let $message = {}
      Object.keys(MessageMap).forEach(type => {
        $message[type] = MessageMap[type];
      })
      Vue.prototype.$message = $message;
    }
  }
}
