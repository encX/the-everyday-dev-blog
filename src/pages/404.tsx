import * as React from 'react';
import PageLayout from '../components/page-layout';
import './404.scss';

const NotFoundPage: React.FunctionComponent = () => (
	<PageLayout>
		<section id="not-found">Looking for something ?<br/><br/>Try menu above.</section>
	</PageLayout>
);

export default NotFoundPage;
