// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite'
let config = {
    plugins: [sveltekit()],
}
let viteConfigDefault = config
export { viteConfigDefault as default }
