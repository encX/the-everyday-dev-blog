import * as React from 'react';
import { Link } from 'gatsby';
import './article-card.scss';
import { MarkdownMeta } from '../types/markdown-meta';

const ArticleCard: React.FunctionComponent<MarkdownMeta> = ({ title, headliner, featuredImage, path }) => (
	<article className="article-card">
		<Link to={path}>
			<img src={featuredImage} alt="Featured image" />
			<h3>{title}</h3>
			<h4>{headliner}</h4>
		</Link>
	</article>
);

export default ArticleCard;
