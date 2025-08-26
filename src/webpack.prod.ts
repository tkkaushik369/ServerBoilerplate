import path from 'path'
import type { Configuration } from 'webpack'

export const production: Configuration = {
	mode: 'production',
	performance: {
		hints: false,
	},
	cache: {
		type: 'filesystem',
		allowCollectingMemory: true,
		cacheDirectory: path.resolve(__dirname, '../.webpack_cache'),
	},
}
