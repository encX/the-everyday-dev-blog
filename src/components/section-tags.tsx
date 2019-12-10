import * as React from 'react';
import './section-tags.scss';
import Tag from './tag';

interface SectionTagsProps {
	hideHeader?: boolean;
 	tags: string[];
}

const SectionTags: React.FunctionComponent<SectionTagsProps> = ({ tags, hideHeader }) => (
	<section className="tags">
		{!hideHeader && <h2>Tags</h2>}
		<div className="tags-list">
			{tags.map(tag => <Tag name={tag} key={tag}/>)}
		</div>
	</section>
);

export default SectionTags;
