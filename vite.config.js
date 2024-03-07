import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/appAventuriPlanet/",
  // publicDir: 'appAventuriPlanet',
  // esbuild: {
  //   loader: 'jsx',
  // },
  build: {
    rollupOptions: {
      external: [
        '/appAventuriPlanet/img/desktop/backgrounImage.png',
        '/appAventuriPlanet/img/desktop/logo.png'
      ],
    }
  }
})