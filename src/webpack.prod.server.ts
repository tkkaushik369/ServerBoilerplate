import { merge } from 'webpack-merge'
import { config_common } from './webpack.common'
import { production } from './webpack.prod'
import { config_server } from './webpack.server'

const config = merge(config_common, config_server, production as any)
export default config
