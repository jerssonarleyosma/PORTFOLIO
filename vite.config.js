import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/PORTFOLIO/' : '/', // MUY IMPORTANTE para GitHub Pages activar para produccion aunque ya lo automatice
  plugins: [react()],
  server: {
    host: 'localhost', // Escuchar el local host para escuchar en todas las interfaces es con 0.0.0.0  
    port: 5173, // El puerto que deseas usar
  },
  resolve: {
    alias: {
      '@atoms': '/src/components/atoms',
      '@context': '/src/context',
      '@molecules': '/src/components/molecules',
      '@organisms': '/src/components/organisms',
      '@pages': '/src/pages',
      '@templates': '/src/components/templates',
      '@tutoriales': '/src/components/Tutoriales',
      '@variables': '/src/_variables.scss',
      '@reset': '/src/_reset.scss',
      '@images': '/src/assets/images',
    }
  },
})
