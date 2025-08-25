// const path = require("path")
// const CopyPlugin = require("copy-webpack-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// import path from 'path'
// import CopyPlugin from 'copy-webpack-plugin'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
import Webpack, { Configuration } from 'webpack'

// module.exports = {
export const config_common: Configuration = {
	output: {
		library: {
			// type: 'umd',
			type: 'global',
			name: "[name]",
			umdNamedDefine: true,
		},
		globalObject: "globalThis",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: "ts-loader",
			exclude: /node_modules/,
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},
		],
	},
	plugins: [
		new Webpack.ProgressPlugin(),
	],
}
