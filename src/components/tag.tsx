import * as React from 'react';
import { Link } from 'gatsby';
import './tag.scss';

interface TagProps {
	name: string;
}

const Tag: React.FunctionComponent<TagProps> = ({ name }) => (
	<div className="tag"><Link to={`/tag/${name}`}><span>#</span> {name}</Link></div>
);

export default Tag;
