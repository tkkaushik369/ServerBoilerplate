import { merge } from 'webpack-merge'
import { config_common } from './webpack.common'
import { development } from './webpack.dev'
import { config_server } from './webpack.server'
import path from 'path'

const config = merge(config_common, development as any, config_server, {
	devServer: {
		static: {
			directory: path.join(__dirname, '../dist/server'),
		},
		port: 8081,
	},
})

export default config
