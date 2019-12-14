import * as React from 'react';
import './footer.scss';

const Footer: React.FunctionComponent = () => (
	<footer>
		<section className="content">
			<h6 id="license">Content and source code of this website are licensed under <a href="/license">GNU GPLv3.</a></h6>
			<h6 id="company">2019 The everyday dev</h6>
		</section>
	</footer>
);

export default Footer;
