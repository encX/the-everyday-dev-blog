import * as React from 'react';
import { Link } from 'gatsby';
import './footer.scss';

const Footer: React.FunctionComponent = () => (
	<footer>
		<section className="content">
			<h6 id="license">Content and source code of this website is licensed under <Link to="/license">GNU GPL-3.0-or-later</Link>.</h6>
			<h6 id="company">2019 (c) | <Link to="/">The Everyday Dev</Link></h6>
		</section>
	</footer>
);

export default Footer;
