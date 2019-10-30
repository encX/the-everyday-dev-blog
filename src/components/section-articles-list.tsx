import * as React from 'react';
import classnames from 'classnames';
import { ArticleCardProps } from '../types/article-card.props';
import { SectionArticlesListProps } from '../types/section-articles-list.props';
import ArticleCard from './article-card';
import './section-articles-list.scss';

function renderArticleCards(articles: ArticleCardProps[]): JSX.Element[] {
	return articles.map((article, i) => <ArticleCard key={`article-${i}`} {...article} />);
}

const SectionArticlesList: React.FunctionComponent<SectionArticlesListProps> = ({ sectionName, articles, featured }) => (
	<section className={classnames('articles', { featured })}>
		<h2>{sectionName}</h2>
		{renderArticleCards(articles)}
	</section>
);

export default SectionArticlesList;
