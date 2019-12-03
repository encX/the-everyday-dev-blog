import * as React from 'react';
import './page-layout.scss';

const PageLayout: React.FunctionComponent = ({ children }) => {
	// SEO ?
	return (
		<div id="root">
			<header>
				<a href="/">
					<h1>The Everyday Dev</h1>
					<h4>All the things that true `fullstack` developer should know.</h4>
				</a>
			</header>
			<nav>
				<a href="/all">All articles</a>
				<a href="/tags">Tags</a>
				<a href="/about">About</a>
			</nav>
			<main>
				{children}
			</main>
			<footer>
				<section className="content">
					Footer goes here
				</section>
			</footer>
		</div>
	);
};

export default PageLayout;
