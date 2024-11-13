exports.createPages = async ({ actions, graphql }: { actions: any, graphql: any }) => {

    const { createPage } = actions;
    const result = await graphql(`
      {
        allDataJson {
          edges {
            node {
              name
            }
          }
        }
      }
    `);

    result.data.allDataJson.edges.forEach(({ node }: { node: { name: string } }) => {
        createPage({
            path: `/about/${node.name.toLowerCase()}`,
            component: require.resolve("./src/templates/about.tsx"),
            context: {
                name: node.name,
            },
        });
    });
};
