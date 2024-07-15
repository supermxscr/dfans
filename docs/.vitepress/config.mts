import { defineConfig } from 'vitepress'

export default defineConfig({
   base: '/blog/',
  title: " ",
  lastUpdated: true,
  description: "dfans description",
  themeConfig: {
    // search: {
    //   provider: 'local'
    // },
    logo: { src: '/logo.png', height: 24 },
    sidebar: [
      {
        text: 'About dFans',
        items: [
          { text: 'Cookie notice', link: '/cookie-notice' },
          { text: 'Safety & Transparency Center', link: '/safety-transparency-center'},
          { text: 'About - Contact', link: '/contact' },
          { text: 'Terms of service', link: '/terms-of-service' },
          { text: 'DMCA', link: '/dmca' },
          { text: 'PRIVACY POLICY', link: '/privacy-policy'},
          { text: 'STANDARD CONTRACT', link: '/standard-contract'},
        ]
      }
    ],
    // nav: [
    //   { text: 'Guide', link: '/guide' },
    //   {
    //     text: 'Dropdown Menu',
    //     items: [
    //       {
    //         // 该部分的标题
    //         text: 'Section A Title',
    //         items: [
    //           { text: 'Section A Item A', link: '...' },
    //           { text: 'Section B Item B', link: '...' }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     text: 'Dropdown Menu',
    //     items: [
    //       {
    //         // 也可以省略标题
    //         items: [
    //           { text: 'Section A Item A', link: '...' },
    //           { text: 'Section B Item B', link: '...' }
    //         ]
    //       }
    //     ]
    //   }
    // ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © ' + new Date().getFullYear() + '-dFans'
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
