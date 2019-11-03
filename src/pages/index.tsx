import * as React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/page-layout';
import SectionArticlesList from '../components/section-articles-list';
import { MarkdownMeta } from '../types/markdown-meta';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            headliner
            featuredImage
          }
        }
      }
    }
  }
`;

interface IndexPageProps {
	data: {
		allMarkdownRemark: {
			edges: [{
				node: {
					frontmatter: MarkdownMeta;
				};
			}];
		};
	};
}

const Index: React.FunctionComponent<IndexPageProps> = ({ data }) => {
	const articles = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);
	return (
		<PageLayout>
			<SectionArticlesList sectionName="Featured articles" articles={articles.slice(0, 1)} featured/>
			<SectionArticlesList sectionName="Recent posts" articles={articles}/>
		</PageLayout>
	);
};

export default Index;
