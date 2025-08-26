import type { Configuration } from 'webpack'

export const development: Configuration = {
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
