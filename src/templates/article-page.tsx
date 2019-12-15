import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as React from 'react';
import PageLayout from '../components/page-layout';
import SectionTags from '../components/section-tags';
import { MarkdownMeta } from '../types/markdown-meta';
import './article-template.scss';
import './code.scss';

interface ArticlePageProps {
	data: {
		markdownRemark: {
			html: string;
			frontmatter: MarkdownMeta;
		};
	};
}

export const pageQuery = graphql`
query article($path: String!) {
	markdownRemark(frontmatter: { path: { eq: $path } }) {
		html
		frontmatter {
			date(formatString: "MMMM DD, YYYY")
			path
			headliner
			title
			featuredImage {
				childImageSharp {
					fluid(maxWidth: 800) {
						...GatsbyImageSharpFluid
					}
				}
			}
			tags
      	}
    }
}
`;

const ArticlePage: React.FunctionComponent<ArticlePageProps> = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const { title, date, featuredImage, headliner, tags } = frontmatter;
	
	return (
		<PageLayout customPageTitle={title}>
			<article className="post">
				<h1>{title}</h1>
				<h2>{headliner}</h2>
				<h6>{date}</h6>
				{
					featuredImage
						? <Img className="featured-image" fluid={featuredImage.childImageSharp.fluid}/>
						: null
				}
				<section className="post-content" dangerouslySetInnerHTML={{ __html: html }}/>
				<SectionTags tags={tags} hideHeader={true}/>
			</article>
		</PageLayout>
	);
};

export default ArticlePage;
