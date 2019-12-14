import * as React from 'react';
import './footer.scss';

const Footer: React.FunctionComponent = () => (
	<footer>
		<section className="content">
			<h6 id="license">Content and source code of this website is licensed under <a href="/license">GNU GPL-3.0-or-later</a>.</h6>
			<h6 id="company">2019 (c) | The Everyday Dev</h6>
		</section>
	</footer>
);

export default Footer;
