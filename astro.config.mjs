import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    output: 'server',
    adapter: vercelServerless(),
    vite: {
        server: {
            host: true,
            allowedHosts: [process.env.HOST]
        }
    }
});