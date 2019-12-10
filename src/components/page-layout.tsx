import * as React from 'react';
import './page-layout.scss';
import Metadata from './site-meta';

interface PageLayoutProps {
	mainId?: string;
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children, mainId }) => {
	// SEO ?
	return (
		<>
			<Metadata/>
			<div id="root">
				<header>
					<a href="/">
						<h1>The Everyday Dev</h1>
						<h4>All the things that true `fullstack` developer should know.</h4>
					</a>
				</header>
				<nav>
					<a href="/all">All articles</a>
					<a href="/about">About</a>
				</nav>
				<main id={mainId}>
					{children}
				</main>
				<footer>
					<section className="content">
					Footer goes here
					</section>
				</footer>
			</div>
		</>
	);
};

export default PageLayout;
