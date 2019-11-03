import { MarkdownMeta } from './markdown-meta';

export interface SectionArticlesListProps {
	sectionName: string;
	featured?: boolean;
	articles: MarkdownMeta[];
}
