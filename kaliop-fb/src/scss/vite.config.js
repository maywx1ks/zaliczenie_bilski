import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'), // Set the root directory to 'src'
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Output directory for the production build
    sourcemap: true, // Enable source maps for debugging
  },
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the browser
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'), // Alias for assets folder
      '@styles': path.resolve(__dirname, 'src/styles'), // Alias for styles folder
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`, // Automatically import SCSS variables
      },
    },
  },
});