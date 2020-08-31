const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    // Destructure the createPage function from the actions object
    const { createPage } = actions
    // Query GraphQL for the Markdown data
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: {frontmatter: {include: {eq: true}}}) {
                edges {
                    node {
                        id
                        frontmatter {
                            name
                            type
                        }
                    }
                }
            }
        }
    `)
    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    // Create blog post pages
    // Grab the posts (or "nodes") from the GraphQL "edges"
    const posts = result.data.allMarkdownRemark.edges
    // We'll call `createPage` for each post
    posts.forEach(({ node }, index) => {
        createPage({
            path: `${node.frontmatter.name.toLowerCase()}`,
            // This component will wrap our Markdown content
            component: path.resolve(`./src/site/doc/doc.js`),
            // We can use the values in this context in
            // our page layout component to query GraphQL again
        context: { id: node.id },
      })
    })
}