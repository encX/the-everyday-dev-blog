import * as React from 'react';
import { Helmet } from 'react-helmet';

interface MetadataProps {
	pageTitle: string;
}

const Metadata: React.FunctionComponent<MetadataProps> = ({ pageTitle }) => (
	<Helmet>
		<title>{pageTitle}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"/>
	</Helmet>
);

export default Metadata;
