import * as React from 'react';
import PageLayout from '../components/page-layout';
import './text-page.scss';

interface TextPageProps {
	pageContext: {
		text: string;
	};
}

const TextPage: React.FunctionComponent<TextPageProps> = ({ pageContext }) => {
	const { text } = pageContext;
	
	return (
		<PageLayout customPageTitle="License">
			<section id="text-content">
				{text.split('\n\n').map(t => <p>{t}</p>)}
			</section>
		</PageLayout>
	);
};

export default TextPage;
