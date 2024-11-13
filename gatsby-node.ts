const path = require("path");

exports.createPages = async ({ graphql, actions }: { graphql: any, actions: { createPage: Function } }) => {
  const { createPage } = actions; // Destructure createPage from actions

  // Run a GraphQL query to fetch the data you need for each page
  const result = await graphql(`
    {
      allDataJson {
        nodes {
          name
        }
      }
    }
  `);

  // Check if there was an error in the GraphQL query
  if (result.errors) {
    throw new Error("Failed to fetch data for page creation.");
  }

  // Loop through the data and create a page for each item
  result.data.allDataJson.nodes.forEach((node: { name: string }) => {
    createPage({
      path: `/about/${node.name.toLowerCase()}`, // Path for each page
      component: path.resolve(`./src/pages/about.tsx`),
      context: {
        name: node.name, // Pass the name to template
      },
    });
  });
};
