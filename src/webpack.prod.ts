// const { merge } = require("webpack-merge")
// const common = require("./webpack.common.js")
import path from 'path'

export const production = {
	mode: "production",
	performance: {
		hints: false,
	},
	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
		cacheDirectory: path.resolve(__dirname, '../.webpack_cache'),
	},
}
