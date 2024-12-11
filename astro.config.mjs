// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://anuragparida.com' : 'http://localhost:4321',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
