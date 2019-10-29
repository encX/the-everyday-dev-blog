import * as React from 'react';
import './page-layout.scss';

const PageLayout: React.FunctionComponent = ({ children }) => {
	// SEO ?
	return (
		<div id="root">
			<header>
				<h1>The Everyday Dev</h1>
				<h4>All the things that true `fullstack` developer should know.</h4>
			</header>
			<nav>
				Nav items goes here
			</nav>
			{/*{children}*/}
			<main>
				Content goes here
			</main>
			<footer>
				Footer goes here
			</footer>
		</div>
	);
};

export default PageLayout;
