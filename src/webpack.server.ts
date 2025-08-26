import path from 'path'
import type { Configuration } from 'webpack'

export const config_server: Configuration = {
	target: 'node',
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
