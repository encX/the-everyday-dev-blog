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
            featured
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
	const allArticles = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);
	const featuredArticles = allArticles.filter(article => article.featured);
	return (
		<PageLayout>
			{featuredArticles.length > 0
				? <><SectionArticlesList sectionName="Featured articles" articles={featuredArticles} featured/><hr/></>
				: null
			}
			<SectionArticlesList sectionName="Recent posts" articles={allArticles}/>
		</PageLayout>
	);
};

export default Index;
