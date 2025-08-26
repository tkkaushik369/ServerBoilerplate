import { merge } from 'webpack-merge'
import { config_common } from './webpack.common'
import { production } from './webpack.prod'
import { config_client } from './webpack.client'

const config = merge(config_common, config_client, production)
export default config
