import { merge } from 'webpack-merge'
import { config_common } from './webpack.common'
import { development } from './webpack.dev'
import { config_client } from './webpack.client'
import path from 'path'

const config = merge(config_common, development, config_client, {
	devServer: {
		static: {
			directory: path.join(__dirname, '../dist/client'),
		},
		port: 8080,
	},
})
export default config
