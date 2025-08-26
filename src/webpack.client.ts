import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration } from 'webpack'

export const config_client: Configuration = {
	target: 'web',
	entry: './src/client/client.ts',
	output: {
		filename: 'client.js',
		path: path.resolve(__dirname, '../dist/client'),
		publicPath: '../client',
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, './client/index.html'),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './client/images'),
					to: path.resolve(__dirname, '../dist/client/images'),
				},
			],
		}),
	],
}
