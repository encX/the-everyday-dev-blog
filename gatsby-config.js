module.exports = {
	siteMetadata: {
		title: 'The Everyday Dev',
		description: 'All the things that true fullstack developer should know.',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
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
				name: 'articles',
				path: `${__dirname}/src/articles`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					// {
					// 	resolve: 'gatsby-remark-images',
					// 	options: {
					// 		// todo: customie stying
					// 	},
					// },
					// {
					// 	resolve: 'gatsby-remark-custom-blocks',
					// 	options: {
					// 		blocks: {
					// 			// todo: customize blocks
					// 		},
					// 	},
					// },
				],
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-typescript',
		'gatsby-plugin-sass',
	],
};
