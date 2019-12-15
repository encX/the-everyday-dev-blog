import { graphql, useStaticQuery, Link } from 'gatsby';
import * as React from 'react';
import './page-layout.scss';
import Footer from './footer';
import Metadata from './site-meta';

interface PageLayoutProps {
	mainId?: string;
	customPageTitle?: string;
	customPageDescription?: string;
}

const PageLayout: React.FunctionComponent<PageLayoutProps> = ({ children, mainId, customPageTitle, customPageDescription }) => {
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
	const { title, description: siteDescription } = site.siteMetadata;
	
	const pageTitle = customPageTitle
		? `${customPageTitle} | ${title}`
		: `${title} - ${siteDescription}`;
	
	return (
		<>
			<Metadata pageTitle={pageTitle} description={customPageDescription || siteDescription}/>
			<div id="root">
				<header>
					<a href="/">
						<h1>{title}</h1>
						<h4>{siteDescription}</h4>
					</a>
				</header>
				<nav>
					<Link to="/" activeClassName="active">Home</Link>
				</nav>
				<main id={mainId}>
					{children}
				</main>
				<Footer/>
			</div>
		</>
	);
};

export default PageLayout;
