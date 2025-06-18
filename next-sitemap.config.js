/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lucascipriani.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
  },
};
