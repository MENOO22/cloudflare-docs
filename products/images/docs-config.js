const fs = require("fs");
const productIconKey = "images";
const path = require("path");

module.exports = {
  product: "Image Resizing",
  pathPrefix: "/images",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/images",
  logoSVGContent: fs.readFileSync(
    path.join(__dirname, `src/content/icons/${productIconKey}.svg`),
    "utf8"
  ),
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:images"]' },
  },
  siteMetadata: {
    title: "Cloudflare Image Resizing docs",
    description: "Run your image optimization logic at the edge.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/images",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
