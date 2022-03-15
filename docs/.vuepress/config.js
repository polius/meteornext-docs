// .vuepress/config.js
module.exports = {
  title: 'Meteor Next - Docs',
  description: 'Meteor Next - Official Documentation',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        maxSuggestions: 10,
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
  themeConfig: {
    logo: 'logo.png',
    sidebar: {
      '/': [
        '/',
        '/getting-started',
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
            '/guides/results',
            '/guides/profile',
            '/guides/notifications',
            '/guides/coins',
          ]
        }
      ]
    }
  }
}
  