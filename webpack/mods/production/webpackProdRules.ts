import { loader as MiniCssExtractPluginLoader } from 'mini-css-extract-plugin';
import { getScopedName } from '../../utils';

export const webpackProdRules = [
	{
		test: /\.css$/,
		use: [
			MiniCssExtractPluginLoader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						getLocalIdent: (context: any, localIdentName: string, localName: string) =>
							getScopedName(localName, context.resourcePath),
					},
				},
			},
		],
	},
];
