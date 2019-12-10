import * as React from 'react';
import './section-tags.scss';
import Tag from './tag';

interface SectionTagsProps {
	tags: string[];
}

const SectionTags: React.FunctionComponent<SectionTagsProps> = ({ tags }) => (
	<section className="tags">
		<h2>Tags</h2>
		<div className="tags-list">
			{tags.map(tag => <Tag name={tag} key={tag}/>)}
		</div>
	</section>
);

export default SectionTags;
