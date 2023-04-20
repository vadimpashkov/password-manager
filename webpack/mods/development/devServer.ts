import { resolve } from 'path';
import { Configuration } from 'webpack-dev-server';

export const devServer: Configuration = {
	static: {
		directory: resolve(__dirname, '..', 'dist'),
	},
	port: 3001,
};
