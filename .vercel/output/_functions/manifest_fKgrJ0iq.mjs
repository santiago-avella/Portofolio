import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_By_ucD7A.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_MmC0vvxz.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/santiago/Documentos/Portofolio/","cacheDir":"file:///home/santiago/Documentos/Portofolio/node_modules/.astro/","outDir":"file:///home/santiago/Documentos/Portofolio/dist/","srcDir":"file:///home/santiago/Documentos/Portofolio/src/","publicDir":"file:///home/santiago/Documentos/Portofolio/public/","buildClientDir":"file:///home/santiago/Documentos/Portofolio/dist/client/","buildServerDir":"file:///home/santiago/Documentos/Portofolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/bot","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/bot\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"bot","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/bot.ts","pathname":"/api/bot","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BhOsMmG7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/santiago/Documentos/Portofolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/bot@_@ts":"pages/api/bot.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_fKgrJ0iq.mjs","/home/santiago/Documentos/Portofolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_1L65uP3f.mjs","/home/santiago/Documentos/Portofolio/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DdB6_zzN.js","/home/santiago/Documentos/Portofolio/src/components/Chatbot.astro?astro&type=script&index=0&lang.ts":"_astro/Chatbot.astro_astro_type_script_index_0_lang.N1RiYta3.js","/home/santiago/Documentos/Portofolio/src/components/Chatbot.astro?astro&type=script&index=1&lang.ts":"_astro/Chatbot.astro_astro_type_script_index_1_lang.cY-RI5f9.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/santiago/Documentos/Portofolio/src/pages/index.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"navbar\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?e.classList.replace(\"bg-white/15\",\"bg-greenCustom1\"):e.classList.replace(\"bg-greenCustom1\",\"bg-white/15\")});"],["/home/santiago/Documentos/Portofolio/src/components/Chatbot.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"form_bot\"),s=document.getElementById(\"send_button\"),l=document.getElementById(\"chat_container\"),r=s.querySelector(\"#animate_wait\"),d=s.querySelector(\"#text_button\");a.addEventListener(\"submit\",n=>{n.preventDefault();const e=new FormData(a).get(\"message_user\");if(e){d.classList.add(\"hidden\"),r.classList.remove(\"hidden\"),u(e);const i=c(e);l.appendChild(i),s.disabled=!0,a.elements[0].value=\"\"}});function c(n){const e=document.createElement(\"div\");return e.id=\"bubbleUser-1\",e.className=\"flex gap-3 my-4 text-gray-600 text-sm flex-1\",e.innerHTML=`\n            <span\n              class=\"relative flex shrink-0 overflow-hidden rounded-full w-8 h-8\"\n            >\n              <div class=\"rounded-full bg-gray-100 border p-1\">\n                <svg\n                  stroke=\"none\"\n                  fill=\"black\"\n                  stroke-width=\"0\"\n                  viewBox=\"0 0 16 16\"\n                  height=\"20\"\n                  width=\"20\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                  <path\n                    d=\"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z\"\n                  >\n                  </path>\n                </svg>\n              </div>\n            </span>\n            <p class=\"leading-relaxed\">\n              <span class=\"block font-bold text-gray-700\">You </span>${n}\n            </p>`,e}function o(n){console.log(n);const t=1,e=document.createElement(\"div\");return e.id=`bubbleBot-${t}`,e.className=\"flex gap-3 my-4 text-gray-600 text-sm flex-1\",e.innerHTML=`<span\n              class=\"relative flex shrink-0 overflow-hidden rounded-full w-8 h-8\"\n            >\n              <div class=\"rounded-full bg-gray-100 border p-1\">\n                <svg\n                  stroke=\"none\"\n                  fill=\"black\"\n                  stroke-width=\"1.5\"\n                  viewBox=\"0 0 24 24\"\n                  aria-hidden=\"true\"\n                  height=\"20\"\n                  width=\"20\"\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                >\n                  <path\n                    stroke-linecap=\"round\"\n                    stroke-linejoin=\"round\"\n                    d=\"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z\"\n                  >\n                  </path>\n                </svg>\n              </div>\n            </span>\n            <p class=\"leading-relaxed\">\n              <span class=\"block font-bold text-gray-700\">AI </span>${n}\n                    </p>`,e}function u(n){try{fetch(\"/api/bot\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({answer:n})}).then(t=>t.json()).then(t=>{const e=o(t.reply);l.appendChild(e),e.scrollIntoView({behavior:\"smooth\",block:\"end\"}),s.disabled=!1,r.classList.toggle(\"hidden\"),d.classList.remove(\"hidden\")})}catch(t){o(\"error in request\"),console.log(t)}}"],["/home/santiago/Documentos/Portofolio/src/components/Chatbot.astro?astro&type=script&index=1&lang.ts","const t=document.getElementById(\"chatbot_block\");document.querySelector(\"#chat_button\")?.addEventListener(\"click\",()=>{t?.classList.contains(\"hidden\")?t.classList.remove(\"hidden\"):t?.classList.add(\"hidden\")});"]],"assets":["/_astro/index.BhOsMmG7.css","/favicon.png","/downloads/SantiagoAvellaTorresResume.pdf","/imgs/IEGCE.png","/imgs/acciones1.png","/imgs/bot.png","/imgs/django.svg","/imgs/django_rest.svg","/imgs/gallery.png","/imgs/github.png","/imgs/github.svg","/imgs/ideapro.png","/imgs/linkedin.png","/imgs/me.jpeg","/imgs/me1.jpeg","/imgs/rocket.png","/imgs/whatsapp.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"HgcgA5yL3Afo4/hS5J+nQHSkPAJZeC/bErhUehMsU9M="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
