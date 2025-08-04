import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CSS6HVeS.mjs';
import { manifest } from './manifest_mUYLF_ZO.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/bot.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../.nvm/versions/node/v22.16.0/lib/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/bot.ts", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d903ad42-cbd0-4d5d-aea1-942bc40592ce",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
