import { graphql } from 'gatsby';
import * as React from 'react';
import PageLayout from '../components/page-layout';
import { MarkdownMeta } from '../types/markdown-meta';
import './article-template.scss';

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
			featuredImage
      	}
    }
}
`;

const ArticlePage: React.FunctionComponent<ArticlePageProps> = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const { title, date, featuredImage, headliner } = frontmatter;
	
	return (
		<PageLayout>
			<article className="post">
				<h1>{title}</h1>
				<h2>{headliner}</h2>
				<h6>{date}</h6>
				<img className="featured-image" src={featuredImage} alt={title}/>
				<section className="post-content" dangerouslySetInnerHTML={{ __html: html }}/>
			</article>
		</PageLayout>
	);
};

export default ArticlePage;
