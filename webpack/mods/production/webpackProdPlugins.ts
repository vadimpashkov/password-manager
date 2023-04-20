import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const webpackProdPlugins = [
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css',
		chunkFilename: '[name].[contenthash].css',
	}),
];
