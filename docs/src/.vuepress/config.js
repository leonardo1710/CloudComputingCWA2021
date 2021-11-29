const { description } = require('../../package')

module.exports = {
  base: '/CloudComputingCWA2021/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cloud Computing - CWA',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    overrideTheme: 'dark',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Lectures',
        link: '/lectures/'
      },
      {
        text: 'Übungen',
        link: '/exercises/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      
      '/lectures/': [
        {
          title: 'Lectures',
          collapsable: false
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ["vuepress-plugin-code-copy", {
        align: "top",
        color: "#3eaf7c",
        backgroundColor: "#5bc595", //#379c6f
        }
    ]
    
  ]
}
