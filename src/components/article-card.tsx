import * as React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import './article-card.scss';
import { MarkdownMeta } from '../types/markdown-meta';

const getRandomColor = (): string => '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

const ArticleCard: React.FunctionComponent<MarkdownMeta> = ({ title, headliner, featuredImage, path }) => (
	<article className="article-card" style={{ backgroundColor: getRandomColor() }}>
		<Link to={path}>
			{ featuredImage ? <Img alt="Featured image" fluid={featuredImage.childImageSharp.fluid}/> : null }
			<div className="article-card__text">
				<h3>{title}</h3>
				<h4>{headliner}</h4>
			</div>
		</Link>
	</article>
);

export default ArticleCard;
