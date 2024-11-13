import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql<{
    allDataJson: {
      edges: {
        node: {
          name: string;
        };
      }[];
    };
  }>(`
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

  if (result.errors) {
    throw new Error("Failed to fetch data for page creation.");
  }

  result.data?.allDataJson.edges.forEach(({ node }: { node: { name: string } }) => {
    createPage({
      path: `/about/${node.name.toLowerCase()}`,
      component: path.resolve(`./src/templates/about.tsx`),
      context: {
        name: node.name,
      },
    });
  });
};