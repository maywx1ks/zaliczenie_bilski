import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'), 
  build: {
    outDir: path.resolve(__dirname, 'dist'), 
    sourcemap: true, 
  },
  server: {
    port: 3000, 
    open: true, 
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'), 
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`,
      },
    },
  },
});