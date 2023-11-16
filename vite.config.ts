import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
// https://vitejs.dev/config/

function differMuiSourcemapsPlugins() {
  const muiPackages = ['@mui/material', '@emotion/styled', '@emotion/react'];

  return {
    name: 'differ-mui-sourcemap',
    transform(code: string, id: string) {
      if (muiPackages.some((pkg) => id.includes(pkg))) {
        return {
          code: code,
          map: null,
        };
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), differMuiSourcemapsPlugins()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src/'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: true,
  },
});
