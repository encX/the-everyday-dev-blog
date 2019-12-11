import * as React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/page-layout';
import SectionArticlesList from '../components/section-articles-list';
import { MarkdownMeta } from '../types/markdown-meta';

interface TagPageProps {
	pageContext: {
		tag: string;
	};
	data: {
		allMarkdownRemark: {
			nodes: [{
				frontmatter: MarkdownMeta;
			}];
		};
	};
}

export const pageQuery = graphql`
query TagPage($tag: String!) {
  allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
    nodes {
      frontmatter {
        featuredImage {
		  childImageSharp {
			fluid(maxWidth: 800) {
			  ...GatsbyImageSharpFluid
			}
		  }
		}
        headliner
        path
        title
      }
    }
  }
}
`;

const TagPage: React.FunctionComponent<TagPageProps> = ({ data, pageContext }) => {
	const { allMarkdownRemark } = data;
	const allArticles = allMarkdownRemark.nodes.map(node => node.frontmatter);
	
	return (
		<PageLayout>
			<SectionArticlesList sectionName={`#${pageContext.tag}`} articles={allArticles}/>
		</PageLayout>
	);
};

export default TagPage;
