module.exports = {
    plugins: [
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `mortar`,
              path: `${__dirname}/dist/bundle`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `changelog`,
              path: `${__dirname}/CHANGELOG.md`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-copy-files-enhanced',
            options: {
                source: `${__dirname}/dist/bundle`,
                destination: '/',
                purge: true
            }
        },
    ]
}