import * as React from 'react';
import PageLayout from '../components/page-layout';
import SectionArticlesList from '../components/section-articles-list';
import { ArticleCardProps } from '../types/article-card.props';

const dataContent: ArticleCardProps[] = [
	{ title: 'Title หัวข้อ ลองดูสิถ้ายาวๆจะเป็นยังไง', headliner: 'Headliner ข้อความจั่วหัว', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/San_Lorenzo_desde_El_hombre.jpg/1280px-San_Lorenzo_desde_El_hombre.jpg' },
	{ title: 'Title หัวข้อ', headliner: 'Headliner ข้อความจั่วหัว แล้วถ้าอันนี้ยาวบ้างหล่ะ', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/San_Lorenzo_desde_El_hombre.jpg/1280px-San_Lorenzo_desde_El_hombre.jpg' },
	{ title: 'Title หัวข้อแล้วถ้าสองอันนี้', headliner: 'Headliner ข้อความจั่วหัวมันยาวออกมาทั้งคู่จะทำยังไง', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/San_Lorenzo_desde_El_hombre.jpg/1280px-San_Lorenzo_desde_El_hombre.jpg' },
	{ title: 'Title หัวข้อ', headliner: 'Headliner ข้อความจั่วหัว', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/San_Lorenzo_desde_El_hombre.jpg/1280px-San_Lorenzo_desde_El_hombre.jpg' },
	{ title: 'Title หัวข้อ', headliner: 'Headliner ข้อความจั่วหัว', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/San_Lorenzo_desde_El_hombre.jpg/1280px-San_Lorenzo_desde_El_hombre.jpg' },
];

const Index: React.FunctionComponent = () => (
	<PageLayout>
		<SectionArticlesList sectionName="Featured articles" articles={dataContent}/>
		<SectionArticlesList sectionName="Recent posts" articles={dataContent}/>
	</PageLayout>
);

export default Index;
