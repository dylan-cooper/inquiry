module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: `pages`,
            },
        },
        {
          resolve: 'gatsby-transformer-remark',
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 590,
                },
              },
              "gatsby-remark-copy-linked-files"
            ],
          },
        },
    ],
    
};
