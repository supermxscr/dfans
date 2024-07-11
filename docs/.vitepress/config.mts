import { defineConfig } from 'vitepress'

export default defineConfig({
  base: './',
  
  title: " ",
  description: "dfans description",
  themeConfig: {
    logo: { src: '/logo.png', height: 24 },
    sidebar: [
      {
        text: 'About dFans',
        items: [
          { text: 'Contact', link: '/contact' },
          { text: 'Cookie notice', link: '/cookie-notice' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
