import * as React from 'react';
import { Helmet } from 'react-helmet';

const Metadata: React.FunctionComponent = () => (
	<Helmet>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
	</Helmet>
);

export default Metadata;
