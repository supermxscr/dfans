import { defineConfig } from 'vitepress'

export default defineConfig({
  title: " ",
  lastUpdated: true,
  description: "dfans description",
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: { src: '/logo.png', height: 24 },
    sidebar: [
      {
        text: 'About dFans',
        items: [
          { text: 'Contact', link: '/contact' },
          { text: 'Cookie notice', link: '/cookie-notice' },
          { text: 'Team', link: '/team' }
        ]
      }
    ],
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // 该部分的标题
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // 也可以省略标题
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © ' + new Date().getFullYear() + '-present Evan You'
    },
    // 广告
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
