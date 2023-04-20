import { Configuration } from 'webpack';
import { devServer } from './devServer';

export const webpackDevConfig: Configuration = {
	mode: 'development',
	target: 'web',
	devtool: 'source-map',
	devServer,
};
