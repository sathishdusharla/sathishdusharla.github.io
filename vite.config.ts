import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/sathishdusharla.github.io/' : '/', // Set base path only for production
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});