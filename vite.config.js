import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/

export default defineConfig( {
	plugins: [ reactRefresh() ]
} );

// turn off "[vite] hot updated: {filename}. obvious, not helpful, distracting

// it'd be nice if i could do something in ide that would cause browser to refresh entirely, so i don't have to < alt-tab cmd-r >
	// changing this config file does it by proxy
