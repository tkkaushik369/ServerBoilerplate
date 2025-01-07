// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ipcRenderer } from 'electron'

export async function SetLightMode() {
	await ipcRenderer.invoke('dark-mode:light').then((data) => {
		console.log(`dark-mode:light = ${data}`)
	})
}
export async function SetDarkMode() {
	await ipcRenderer.invoke('dark-mode:dark').then((data) => {
		console.log(`dark-mode:dark = ${data}`)
	})
}

export function initPreload() {
	ipcRenderer.invoke('ping').then((pong) => console.log(pong))
}
