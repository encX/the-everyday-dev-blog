import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import './page-layout.scss';
import Metadata from './site-meta';

interface PageLayoutProps {
	mainId?: string;
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children, mainId }) => {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);
	const { title, description } = site.siteMetadata;
	
	return (
		<>
			<Metadata/>
			<div id="root">
				<header>
					<a href="/">
						<h1>{title}</h1>
						<h4>{description}</h4>
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
