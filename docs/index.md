---
layout: home

hero:
  name: dFans
  text: Truly caring for every creator
  tagline: dFans is a decentralized social platform that revolutionizes the way creators connect with fans, ensuring they never have to worry about identity verification, content censorship, or the payout process
  image:
    src: /logo.png
    alt: dFans-logo
  actions:
    - theme: brand
      text: Quickstart
      link: https://dfans.xyz
    - theme: alt
      text: What is dFans?
      link: /contact
features:
  - icon: 📝
    title: 专注内容
    details: 只需 Markdown 即可轻松创建美观的文档站点。
  - icon: 📦
    title: 享受 Vite 无可比拟的体验
    details: 服务器即时启动，闪电般的热更新，还可以使用基于 Vite 生态的插件。
  - icon: 📚
    title: 使用 Vue 自定义
    details: 直接在 Markdown 中使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题。
  - icon: 🚀
    title: 速度真的很快！
    details: 采用静态 HTML 实现快速的页面初次加载，使用客户端路由实现快速的页面切换导航。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #FF64A5 30%, #FCD535);

  --vp-home-hero-image-background-image: linear-gradient(45deg, #FF64A5 50%, #FCD535 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
