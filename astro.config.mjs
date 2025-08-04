import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    output: 'server',
    adapter: vercel({
        imageService: true,
        webAnalytics: {
            enabled: true,
        },
    }),
});