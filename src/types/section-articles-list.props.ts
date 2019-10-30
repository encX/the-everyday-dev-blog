import { ArticleCardProps } from './article-card.props';

export interface SectionArticlesListProps {
	sectionName: string;
	featured?: boolean;
	articles: ArticleCardProps[];
}
