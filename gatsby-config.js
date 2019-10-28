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
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-typescript',
		'gatsby-plugin-sass',
	],
};
