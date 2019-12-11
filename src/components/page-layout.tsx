import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import './page-layout.scss';
import Metadata from './site-meta';

interface PageLayoutProps {
	mainId?: string;
	customPageTitle?: string;
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children, mainId, customPageTitle }) => {
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
	
	const pageTitle = customPageTitle
		? `${customPageTitle} | ${title}`
		: `${title} - ${description}`;
	
	return (
		<>
			<Metadata pageTitle={pageTitle}/>
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
