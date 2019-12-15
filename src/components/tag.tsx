import * as React from 'react';
import './tag.scss';

interface TagProps {
	name: string;
}

const Tag: React.FunctionComponent<TagProps> = ({ name }) => (
	<div className="tag"><a href={`/tag/${name}`}><span>#</span> {name}</a></div>
);

export default Tag;