import Webpack, { Configuration } from 'webpack'

export const config_common: Configuration = {
	output: {
		library: {
			type: 'global',
			name: '[name]',
			umdNamedDefine: true,
		},
		globalObject: 'globalThis',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new Webpack.ProgressPlugin()],
}
