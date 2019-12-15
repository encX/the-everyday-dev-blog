import * as React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/page-layout';
import SectionArticlesList from '../components/section-articles-list';
import SectionTags from '../components/section-tags';
import { MarkdownMeta } from '../types/markdown-meta';
import './index.scss';

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
            featuredImage {
            	childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
            }
            featured
            tags
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

interface TagObjRepo {
	name: string;
	count: number;
}

const getTagsOrder = (tagList: string[]): string[] => {
	const tagObj: {[key: string]: number} = {};
	tagList.forEach(tag => tagObj[tag] = (tagObj[tag] || 0) + 1);
	
	const tagRepo: TagObjRepo[] = [];
	Object.keys(tagObj).forEach(tag => tagRepo.push({ name: tag, count: tagObj[tag] }));
	
	return tagRepo
		.sort((a: TagObjRepo, b: TagObjRepo): number =>
			a.count > b.count ? 1 : (a.count < b.count ? -1 : (a.name > b.name ? 1 : -1))
		)
		.map(tag => tag.name);
};

const Index: React.FunctionComponent<IndexPageProps> = ({ data }) => {
	const allArticles = data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter);
	const featuredArticles = allArticles.filter(article => article.featured);
	const nonFeaturedArticle = allArticles.filter(article => !article.featured);
	
	const allTags = allArticles.flatMap(article => article.tags);
	const orderedTags = getTagsOrder(allTags);
	
	return (
		<PageLayout>
			{featuredArticles.length > 0
				? <><SectionArticlesList sectionName="Featured articles" articles={featuredArticles} featured/><section><hr/></section></>
				: null
			}
			{nonFeaturedArticle.length > 0
				? <><SectionArticlesList sectionName="Recent posts" articles={nonFeaturedArticle}/><section><hr/></section></>
				: null
			}
			<SectionTags tags={orderedTags}/>
		</PageLayout>
	);
};

export default Index;
