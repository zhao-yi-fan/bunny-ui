import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bunny UI',
  description: 'Vue 2 component library docs powered by VitePress.',
  base: '/bunny-ui/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Components', link: '/components/button-group' },
      { text: 'GitHub', link: 'https://github.com/zhao-yi-fan/bunny-ui' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button Group', link: '/components/button-group' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Input', link: '/components/input' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'Watermark', link: '/components/watermark' },
          { text: 'Message', link: '/components/message' }
        ]
      }
    ],
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhao-yi-fan/bunny-ui' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Zhao Yifan'
    }
  }
})
