// Desc: Vite config file
// ============================================================

// Import modules
// ============================================================
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// ============================================================

// https://vitejs.dev/config/
// Export config
// ============================================================
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true
    },
});
// ============================================================