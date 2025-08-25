// const { merge } = require("webpack-merge")
// const common = require("./webpack.common.js")
// const path = require("path")
// import path from "path"

export const development = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		devMiddleware: {
			writeToDisk: true,
			index: true,
			publicPath: './dist',
			serverSideRender: true,
		},
		historyApiFallback: true,
		compress: true,
	},
	stats: {
		warnings: true,
		errorDetails: true,
	},
	cache: {
		type: 'memory',
	},
}
