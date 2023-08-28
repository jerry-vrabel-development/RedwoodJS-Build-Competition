import dns from 'dns'
import { defineConfig } from 'vite'
import { VitePWA } from "vite-plugin-pwa";

// See: https://vitejs.dev/config/server-options.html#server-host
// So that Vite will load on local instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim')

import redwood from '@redwoodjs/vite'

const viteConfig = {
  plugins: [
    redwood(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
}

export default defineConfig(viteConfig)
