import * as React from 'react';
import './page-layout.scss';

const PageLayout: React.FunctionComponent = ({ children }) => {
	// Header -> meta seo keyword title
	// Title + Subtitle
	// Nav
	// Content
	// Foot
	return (
		<div id="root">
			{children}
		</div>
	);
};

export default PageLayout;
