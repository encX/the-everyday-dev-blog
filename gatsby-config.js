module.exports = {
	siteMetadata: {
		title: 'The Everyday Dev',
		description: 'All the things that `fullstack` developer should know.',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-prismjs',
					},
					{
						resolve: 'gatsby-remark-custom-blocks',
						options: {
							blocks: {
								ppic: {
									classes: 'ppic',
									title: 'optional',
								},
								'ppic-rev': {
									classes: 'ppic reverse',
									title: 'optional',
								},
							},
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'articles',
				path: `${__dirname}/src/articles`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'license',
				path: `${__dirname}/LICENSE`,
			},
		},
		'gatsby-plugin-typescript',
		'gatsby-plugin-sass',
		'gatsby-plugin-netlify',
	],
};
