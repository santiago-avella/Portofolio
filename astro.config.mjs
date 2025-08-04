import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.HOST)

export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    vite: {
        server: {
            host: true,
            allowedHosts: [process.env.HOST]
        }
    }
});