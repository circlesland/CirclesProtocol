// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "CirclesProtocol",
  icon: {
    favicon: "./src/assets/favicon.png",
    touchicon: "./src/assets/favicon.png",
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://example.com",
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        {
          path: "/docs/",
          title: "",
        },
      ],
    },
    sidebar: [
      {
        name: "docs",
        sections: [
          {
            title: "Whitepaper",
            items: ["/docs/"],
          },
          {
            title: "Tutorials",
            items: ["/tutorials/tutorial1/"],
          },
          {
            title: "Development",
            items: ["/dev/overview/", "/dev/core/", "/dev/contracts/"],
          },
          {
            title: "Contribute to Docs",
            items: [
              "/website/intro/",
              "/website/writing/",
              "/website/development/",
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content/",
        path: "**/*.md",
        typeName: "MarkdownPage",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
          plugins: ["@gridsome/remark-prismjs"],
        },
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {},
    },
  ],
};
