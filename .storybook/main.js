const webpack_config = require("../webpack.config.js");

module.exports = {
	stories: [
		// load the main index file first so it is where a user starts when they hit the instance
		"../src/index.stories.mdx",
		"../src/**/*.stories.(tsx|mdx)"
	],
	addons : [
		"@storybook/addon-knobs/register",
		{
			name : "@storybook/addon-docs",
			options: {
				configureJSX: true,
				babelOptions: {},
				sourceLoaderOptions: null,
			}
		}
	],
	webpackFinal : async (config) => {
		config.module.rules.push({
			test : /\.(ts|tsx)$/,
			use : [
				{
					loader : "ts-loader"
				}
			]
		});

		config.resolve.extensions.push(".ts", ".tsx");

		config.watchOptions = webpack_config.devServer.watchOptions;

		return config;
	}
}