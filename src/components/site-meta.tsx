import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Metadata: React.FunctionComponent = () => {
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
		<Helmet>
			<title>{title} - {description}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"/>
		</Helmet>
	);
};

export default Metadata;
