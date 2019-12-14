const path = require('path');
const fs = require('fs');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;
	const blogPostTemplate = path.resolve('src/templates/article-page.tsx');
	const blogPostPages = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        nodes {
          frontmatter {
            path
            tags
          }
        }
      }
    }
  `);
	// Handle errors
	if (blogPostPages.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return;
	}
	blogPostPages.data.allMarkdownRemark.nodes.forEach(node => {
		createPage({
			path: node.frontmatter.path,
			component: blogPostTemplate,
			context: {}, // additional data can be passed via context
		});
	});

	const tagPageTemplate = path.resolve('src/templates/tag-page.tsx');
	const allTags = [...new Set(blogPostPages.data.allMarkdownRemark.nodes.flatMap(node => node.frontmatter.tags))];

	allTags.forEach(tag => {
		createPage({
			path: `/tag/${tag}`,
			component: tagPageTemplate,
			context: {
				tag,
			}, // additional data can be passed via context
		});
	});

	const textPageTemplate = path.resolve('src/templates/text-page.tsx');
	const licensePageContent = fs.readFileSync(path.resolve('LICENSE'));
	createPage({
		path: '/license',
		component: textPageTemplate,
		context: {
			text: licensePageContent.toString(),
		},
	});
};
