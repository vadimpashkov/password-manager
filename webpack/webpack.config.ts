import { resolve } from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { isDev, getModeConfig, getModeRules, getModePlugins } from './utils';

const webpackConfig: Configuration = {
	...getModeConfig(),
	output: {
		path: resolve(__dirname, '..', 'dist'),
		publicPath: '/',
		clean: true,
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			...getModeRules(),
		],
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.json'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, '..', 'src', 'index.html'),
			minify: !isDev,
		}),
		...getModePlugins(),
	],
};

export default webpackConfig;
