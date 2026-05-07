# 快速开始

安装组件库：

```bash
npm install bunny-ui
```

在 Vue 2 项目中注册组件库：

```js
import Vue from 'vue'
import BunnyUI from 'bunny-ui'
import 'bunny-ui/dist/bunnyUi.css'

Vue.use(BunnyUI)
```

仓库中常用的构建命令：

```bash
npm run test:unit
npm run lib
npm run docs:serve
npm run docs:build
```

当前文档站基于 VitePress 构建，交互 demo 直接使用 `lib` 构建产物。执行 `npm run docs:serve` 时，会先重新构建组件库，再启动文档开发服务。
