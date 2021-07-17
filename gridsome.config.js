// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Nasir Khan Blogs',
  siteDescription: 'A minimal site for blogging, powered by Gridsome.',
  siteUrl: 'https://gridsome-netlify-cms-test.netlify.app/',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {},
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        [
          'gridsome-plugin-remark-shiki',
          { theme: 'material-theme-palenight', skipInline: true },
        ],
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    },
  },
};
