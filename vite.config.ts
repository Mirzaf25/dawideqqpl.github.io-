import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dawideqqpl.github.io1',
  plugins: [react(), nodePolyfills()],
  build: {
    outDir: '../build',
    // emptyOutDir: true,
  },
});
