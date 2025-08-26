// When starting this project by using `npm run dev`, this server script
// will be compiled using tsc and will be running concurrently along side webpack-dev-server
// visit http://127.0.0.1:8080

// In the production environment we don't use the webpack-dev-server, so instead type,
// `npm run build`        (this creates the production version of bundle.js and places it in ./dist/client/)
// `tsc -p ./src/server`  (this compiles ./src/server/server.ts into ./dist/server/server.js)
// `npm start            (this starts nodejs with express and serves the ./dist/client folder)
// visit http://127.0.0.1:3000

import express from 'express'
import path from 'node:path'
import http from 'node:http'

// Set the MIME type explicitly
// express.static.mime.define({ 'application/wasm': ['wasm'] })

if (__dirname.includes('node_modules')) {
	// eslint-disable-next-line no-global-assign
	__dirname = path.resolve(__dirname.split('node_modules')[0], '.webpack/renderer/main_window')
}

const isElectron = process.execPath.includes('electron')

const port: number = Number(process.env.PORT) || 3000
const privateHost = false

export class AppServer extends EventTarget {
	private port: number
	private server: http.Server | null
	private app: express.Express

	constructor(port: number) {
		super()
		// Bind Functions
		this.Start = this.Start.bind(this)
		this.Stop = this.Stop.bind(this)

		// init
		this.port = port
		this.server = null

		console.log(isElectron)
		console.log(__dirname)
		console.log(__filename)
		const client_folder = isElectron ? 'client_window' : 'client'
		const clientPath = path.resolve(__dirname, '..', client_folder)
		this.app = express()
		this.app.use('/' + client_folder, express.static(clientPath))
		this.app.use('/images', express.static(path.join(clientPath, 'images')))
		this.app.get('/', (req, res) => {
			res.sendFile(path.resolve(clientPath, 'index.html'))
		})
	}

	public Start() {
		this.server = new http.Server(this.app)

		this.server.listen(this.port, privateHost ? '127.0.0.1' : '0.0.0.0', () => {
			console.log(`Server listening on port ${this.port}.`)
		})
	}

	public Stop() {
		if (this.server !== null) {
			this.server.close()
			this.server = null
		}
		console.log(`Server closed on port ${port}.`)
	}
}

if (path.basename(process.argv[0]).includes('node')) {
	new AppServer(port).Start()
}
