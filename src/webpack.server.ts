// const path = require("path")
// const CopyPlugin = require("copy-webpack-plugin")
// const HtmlWebpackPlugin = require('html-webpack-plugin');
import path from 'path'
// import CopyPlugin from 'copy-webpack-plugin'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration } from 'webpack'

// module.exports = {
export const config_server: Configuration = {
	'target': 'node',
	entry: './src/server/server.ts',
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, '../dist/server'),
	},
	externals: {
		path: 'commonjs path',
		http: 'commonjs http',
		fs: 'commonjs fs',
		ws: 'commonjs ws',
		express: 'commonjs express',
	},
}
