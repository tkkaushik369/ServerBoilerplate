import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { EnvironmentPlugin } from 'webpack'
import path from 'node:path'
import CopyPlugin from 'copy-webpack-plugin'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const renderer_client_dirname = '../renderer/client_window'

export const plugins = [
	new ForkTsCheckerWebpackPlugin({
		logger: 'webpack-infrastructure',
	}),
	new CopyPlugin({
		patterns: [
			{
				from: path.resolve(__dirname, '../../src/client/images'),
				to: path.join(renderer_client_dirname, 'images'),
			},
		],
	}),
	new EnvironmentPlugin({
		PORT: 3000,
	}),
]
