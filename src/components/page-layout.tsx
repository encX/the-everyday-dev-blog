import * as React from 'react';
import './page-layout.scss';

const PageLayout: React.FunctionComponent = ({ children }) => {
	// SEO ?
	return (
		<main>
			<header></header>
			<nav></nav>
			{children}
			<footer></footer>
		</main>
	);
};

export default PageLayout;
