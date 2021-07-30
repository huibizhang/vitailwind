//const { path } = require('@vuepress/shared-utils')

module.exports = {
  title: 'Vitawind',
  description: "Vitawind, Install and Setting Tailwindcss automatically for Vite",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    repo: 'huibizhang/vitawind',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
      { text: 'Scaffolding', link: '/scaffolding/', activeMatch: '^/scaffolding/' },
      // {
      //   text: 'Config Reference',
      //   link: '/config/basics',
      //   activeMatch: '^/config/'
      // },
      // {
      //   text: 'Release Notes',
      //   link: 'https://github.com/vuejs/vitepress/releases'
      // }
    ],

    sidebar: {
      '/scaffolding/': getScaffoldingSidebar(),
      '/guide/': getGuideSidebar(),
      '/': getGuideSidebar(),
      // '/advanced/': getConfigSidebar(),
    }
  },
  // alias: {
  //   '@': path.resolve(__dirname, '../.vuepress')
  // },
  // postcss: {
  //   plugins: [
  //     require('tailwindcss'),
  //     require('autoprefixer')
  //   ]
  // },
}

function getGuideSidebar() {
  return [
    {
      text: 'Getting Started',
      children: [
        { text: 'Instruction', link: '/guide/' },
        { text: 'Usage', link: '/guide/usage' },
      ]
    },
    {
      text: 'Advanced',
      children: [
        {
          text: 'Configurations',
          link: '/guide/configurations'
        },
      ]
    }
  ]
}

function getScaffoldingSidebar() {
  return [
    {
      text: 'Create Vitawind',
      children: [
        { text: 'Instruction', link: '/scaffolding/' },
      ]
    },
    {
      text: 'Templates',
      children: [
        {
          text: 'Vue in Vite',
          link: '/scaffolding/templates#vue-in-vite'
        },
        {
          text: 'React in Vite',
          link: '/scaffolding/templates#react-in-vite'
        },
        {
          text: 'Vue + Typescript in Vite',
          link: '/scaffolding/templates#vue-in-vite'
        },
        {
          text: 'React + Typescript in Vite',
          link: '/scaffolding/templates#react-in-vite'
        },
        {
          text: 'Vue CLI',
          link: '/scaffolding/templates#vue-cli'
        },
        {
          text: 'Create React App',
          link: '/scaffolding/templates#create-react-app'
        },
        {
          text: 'Angular CLI',
          link: '/scaffolding/templates#angular'
        },
      ]
    }
  ]
}

// function getConfigSidebar() {
//   return [
//     {
//       text: 'App Config',
//       children: [{ text: 'Basics', link: '/config/basics' }]
//     },
//     {
//       text: 'Theme Config',
//       children: [
//         { text: 'Homepage', link: '/config/homepage' },
//         { text: 'Algolia Search', link: '/config/algolia-search' },
//         { text: 'Carbon Ads', link: '/config/carbon-ads' }
//       ]
//     }
//   ]
// }