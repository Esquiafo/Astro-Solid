module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
          "restaurant",
        ],
        queryLimit: 1000,
      },
    },
  ],
};
