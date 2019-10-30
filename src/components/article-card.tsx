import * as React from 'react';
import { ArticleCardProps } from '../types/article-card.props';
import './article-card.scss';

const ArticleCard: React.FunctionComponent<ArticleCardProps> = ({ title, headliner, image }) => (
	<article className="article-card">
		<img src={image} alt="Featured image" />
		<h3>{title}</h3>
		<h4>{headliner}</h4>
	</article>
);

export default ArticleCard;
