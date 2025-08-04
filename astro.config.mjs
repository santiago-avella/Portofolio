import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    output: 'server',
    adapter: vercel(),
    vite: {
        server: {
            host: true,
            allowedHosts: [process.env.HOST]
        }
    }
});