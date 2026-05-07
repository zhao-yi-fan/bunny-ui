# Getting Started

Install the package:

```bash
npm install bunny-ui
```

Register the library in a Vue 2 app:

```js
import Vue from 'vue'
import BunnyUI from 'bunny-ui'
import 'bunny-ui/dist/bunnyUi.css'

Vue.use(BunnyUI)
```

Build commands used in this repository:

```bash
npm run test:unit
npm run lib
npm run docs:serve
npm run docs:build
```

The VitePress docs site embeds live demos from prebuilt library assets. For local docs development, `npm run docs:serve` rebuilds the library before starting the docs server.
