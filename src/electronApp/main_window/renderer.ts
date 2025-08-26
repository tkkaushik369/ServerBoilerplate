import '../../client/css/main.css'
import { SetDarkMode, SetLightMode, initPreload } from './preload'
import { AppServer } from '../../server/server'

let appServer: AppServer | null = null

initPreload()
SetLightMode()
SetDarkMode()

appServer = new AppServer(3000)
appServer.Start()
