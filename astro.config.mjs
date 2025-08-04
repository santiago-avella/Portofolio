import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    output: 'static',
    adapter: vercelStatic(),
    vite: {
        server: {
            host: true,
            allowedHosts: [process.env.HOST]
        }
    }
});