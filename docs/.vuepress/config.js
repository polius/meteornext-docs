// .vuepress/config.js
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

module.exports = {
  title: 'Meteor Next - Docs',
  description: 'Meteor Next - Official Documentation',
  head: [
    ['link', { rel: 'icon', href: 'https://meteornext.io/assets/logo.png' }],
  ],
  plugins: [
    [
      searchPlugin({
        maxSuggestions: 10,
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      }),
    ],
  ],
  theme: defaultTheme({
    logo: 'https://meteornext.io/assets/logo.png',
    sidebar: {
      '/': [
        '/',
        '/getting-started',
        '/requirements',
        {
          text: 'Guides',
          collapsible: true,
          children: [
            '/guides/inventory',
            '/guides/deployments',
            '/guides/monitoring',
            '/guides/utils',
            '/guides/client',
            '/guides/administration',
            '/guides/viewer',
            '/guides/profile',
            '/guides/notifications',
            '/guides/coins',
          ]
        }
      ]
    }
  })
}