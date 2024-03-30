import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	// base url needed only for deploy to GH Pages
	base: '/test-selsup/',
	plugins: [react()],
})
