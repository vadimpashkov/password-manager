export const webpackDevRules = [
	{
		test: /\.css$/,
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: '[path]_[name]_[local]',
					},
					sourceMap: true,
				},
			},
		],
	},
];
