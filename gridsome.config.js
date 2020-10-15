module.exports = {
  siteName: 'Docc',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com',
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [{ path: '/docs/', title: 'Docs' }]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/installation/',
              '/docs/writing-content/',
              '/docs/deploying/'
            ]
          },
          {
            title: 'Configuration',
            items: ['/docs/settings/', '/docs/sidebar/']
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          plugins: ['@gridsome/remark-prismjs']
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss'
    },

    {
      use: '@gridsome/plugin-sitemap'
    }
  ]
}
