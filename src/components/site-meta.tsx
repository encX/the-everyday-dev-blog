import * as React from 'react';
import { Helmet } from 'react-helmet';

interface MetadataProps {
	pageTitle: string;
	description: string;
}

const Metadata: React.FunctionComponent<MetadataProps> = ({ pageTitle , description}) => (
	<Helmet>
		<title>{pageTitle}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"/>
		<meta property="og:type" content="article"/>
		<meta property="og:title" content={pageTitle}/>
		<meta property="og:description" content={description}/>
	</Helmet>
);

export default Metadata;
