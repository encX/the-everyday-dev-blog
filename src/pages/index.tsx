import * as React from 'react';
import ArticleCard from '../components/article-card';
import PageLayout from '../components/page-layout';

const Index: React.FunctionComponent = () => (
	<PageLayout>
		<section className="featured-articles">
			<h2>Featured articles</h2>
			<ArticleCard
				title="Title ภาษาไทย"
				headliner="headliner ภาษาไทย"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/San_Lorenzo_desde_El_hombre.jpg/1280px-San_Lorenzo_desde_El_hombre.jpg"
			/>
		</section>
		<section className="articles">
			<h2>Featured articles</h2>
			<ArticleCard
				title="Title ภาษาไทย"
				headliner="headliner ภาษาไทย"
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/San_Lorenzo_desde_El_hombre.jpg/1280px-San_Lorenzo_desde_El_hombre.jpg"
			/>
		</section>
	</PageLayout>
);

export default Index;
