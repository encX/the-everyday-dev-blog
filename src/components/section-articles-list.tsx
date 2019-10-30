import * as React from 'react';
import { ArticleCardProps } from '../types/article-card.props';
import { SectionArticlesListProps } from '../types/section-articles-list.props';
import ArticleCard from './article-card';
import './section-articles-list.scss';

function renderArticleCards(articles: ArticleCardProps[]): JSX.Element[] {
	return articles.map((article, i) => <ArticleCard key={`article-${i}`} {...article} />);
}

const SectionArticlesList: React.FunctionComponent<SectionArticlesListProps> = ({ sectionName, articles }) => (
	<section className="articles">
		<h2>{sectionName}</h2>
		{renderArticleCards(articles)}
	</section>
);

export default SectionArticlesList;
