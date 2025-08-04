import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    vite: {
        server: {
            host: true,
            allowedHosts: ['5d0c2e6bb9d4.ngrok-free.app']
        }
    }
});