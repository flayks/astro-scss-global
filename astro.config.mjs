import { defineConfig } from 'astro/config'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

export const globalStyles = `@use "${resolve(fileURLToPath(import.meta.url), '../src/styles/imports')}" as *;`

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: globalStyles,
                    api: 'modern',
                }
            }
        }
    },
})
