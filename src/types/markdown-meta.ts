export interface MarkdownMeta {
	date: string;
	path: string;
	title: string;
	headliner: string;
	featuredImage: {
		childImageSharp: {
			fluid: any;
		};
	};
	featured?: boolean;
	tags: [string];
}
