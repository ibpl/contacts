import path from 'path'
import { createAppConfig } from '@nextcloud/vite-config'
import { defineConfig } from 'vite'

defineConfig({
	//plugins: [ ],
	build: {
		cssCodeSplit: false,
	},
})

const config = createAppConfig({
	'main': path.join(__dirname, 'src', 'main.js'),
	'files-action': path.join(__dirname, 'src', 'files-action.js'),
	'admin-settings': path.join(__dirname, 'src', 'admin-settings.js'),
}, {
	config,
	inlineCSS: false,
	nodePolyfills: {
		//exclude: ['buffer'],
	},
})

export default config
