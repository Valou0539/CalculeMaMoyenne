globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, getHeader, readBody, getQuery as getQuery$1, createError, getResponseStatusText } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/h3/dist/index.mjs';
import { PrismaClient } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/@prisma/client/index.js';
import { compare, hash as hash$1 } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/bcrypt-ts/dist/node.mjs';
import dotenv from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/dotenv/lib/main.js';
import jwt from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/jsonwebtoken/index.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/devalue/index.js';
import { renderToString } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/radix3/dist/index.mjs';
import { fileURLToPath } from 'node:url';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/ipx/dist/index.mjs';
import { isAbsolute } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/pathe/dist/index.mjs';
import { version, unref } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),t=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return t()[o]??r[o]},has(e,o){const i=t();return o in i||o in r},set(e,o,i){const p=t(!0);return p[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=t(!0);return delete i[o],!0},ownKeys(){const e=t(!0);return Object.keys(e)}}),E=typeof process<"u"&&process.env&&"development"||"",d=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"]];function B(){if(globalThis.process?.env)for(const e of d){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const I=B(),P=I.name;function n(e){return e?e!=="false":!1}const l=globalThis.process?.platform||"",T=n(s.CI)||I.ci!==!1,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const c=E==="test"||n(s.TEST);n(s.MINIMAL)||T||c||!a;const C=/^win/i.test(l);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||C&&s.TERM!=="dumb"||a&&s.TERM&&s.TERM==="dumb"||T);const R=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(R?.split(".")[0])||null;const w=globalThis.process||Object.create(null),_={versions:{}};new Proxy(w,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in _)return _[o]}});const L=!!globalThis.Netlify,A=!!globalThis.EdgeRuntime,O=globalThis.navigator?.userAgent==="Cloudflare-Workers",D=!!globalThis.Deno,u=!!globalThis.__lagon__,N=globalThis.process?.release?.name==="node",S=!!globalThis.Bun||!!globalThis.process?.versions?.bun,b=!!globalThis.fastly,G=[[L,"netlify"],[A,"edge-light"],[O,"workerd"],[D,"deno"],[u,"lagon"],[N,"node"],[S,"bun"],[b,"fastly"]];function K(){const e=G.find(o=>o[0]);if(e)return {name:e[1]}}const g=K();g?.name||"";

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "persistedState": {
      "storage": "cookies",
      "debug": false,
      "cookieOptions": {}
    }
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": "C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/public"
    },
    "http": {
      "domains": []
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\valen\\OneDrive\\Documents\\01.BUT\\notes-iut","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\valen\\OneDrive\\Documents\\01.BUT\\notes-iut\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\valen\\OneDrive\\Documents\\01.BUT\\notes-iut\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\valen\\OneDrive\\Documents\\01.BUT\\notes-iut\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\valen\\OneDrive\\Documents\\01.BUT\\notes-iut\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?d():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:d,addColorScheme:i,removeColorScheme:f};function i(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function f(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function d(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _buUCo5MjSK = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _buUCo5MjSK
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const _TQwIRO = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts.fs?.dir ? isAbsolute(opts.fs.dir) ? opts.fs.dir : fileURLToPath(new URL(opts.fs.dir, globalThis._importMeta_.url)) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_nhw5vC = () => Promise.resolve().then(function () { return _____$1; });
const _lazy_JeqJCx = () => Promise.resolve().then(function () { return academic_years_get$1; });
const _lazy_RUTCCY = () => Promise.resolve().then(function () { return create_post$d; });
const _lazy_J7IE81 = () => Promise.resolve().then(function () { return edit_put$d; });
const _lazy_WdmcVJ = () => Promise.resolve().then(function () { return remove_delete$d; });
const _lazy_u6GZ51 = () => Promise.resolve().then(function () { return create_post$b; });
const _lazy_j1vGsK = () => Promise.resolve().then(function () { return edit_put$b; });
const _lazy_C7OqXU = () => Promise.resolve().then(function () { return remove_delete$b; });
const _lazy_uKAmKe = () => Promise.resolve().then(function () { return create_post$9; });
const _lazy_b66Dsf = () => Promise.resolve().then(function () { return edit_put$9; });
const _lazy_cH5KG9 = () => Promise.resolve().then(function () { return remove_delete$9; });
const _lazy_VTodB5 = () => Promise.resolve().then(function () { return create_post$7; });
const _lazy_k21EL7 = () => Promise.resolve().then(function () { return edit_put$7; });
const _lazy_BDexin = () => Promise.resolve().then(function () { return remove_delete$7; });
const _lazy_BxTXz3 = () => Promise.resolve().then(function () { return create_post$5; });
const _lazy_JQKP5y = () => Promise.resolve().then(function () { return edit_put$5; });
const _lazy_YfD3sc = () => Promise.resolve().then(function () { return remove_delete$5; });
const _lazy_lJUGx6 = () => Promise.resolve().then(function () { return create_post$3; });
const _lazy_4J0csm = () => Promise.resolve().then(function () { return edit_put$3; });
const _lazy_CmrSrF = () => Promise.resolve().then(function () { return remove_delete$3; });
const _lazy_QBBBV6 = () => Promise.resolve().then(function () { return create_post$1; });
const _lazy_xbWZ5U = () => Promise.resolve().then(function () { return edit_put$1; });
const _lazy_dJwEOK = () => Promise.resolve().then(function () { return remove_delete$1; });
const _lazy_rItITf = () => Promise.resolve().then(function () { return authorization$1; });
const _lazy_crkz5f = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_S2RFBU = () => Promise.resolve().then(function () { return ownself_delete$1; });
const _lazy_3DRsFm = () => Promise.resolve().then(function () { return ownself_get$1; });
const _lazy_THHT5X = () => Promise.resolve().then(function () { return password_put$1; });
const _lazy_imPHQM = () => Promise.resolve().then(function () { return register_post$1; });
const _lazy_AOiuQf = () => Promise.resolve().then(function () { return rename_put$1; });
const _lazy_F00JOQ = () => Promise.resolve().then(function () { return users_get$1; });
const _lazy_VAHART = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/**', handler: _lazy_nhw5vC, lazy: true, middleware: false, method: undefined },
  { route: '/api/academic_year/academic_years', handler: _lazy_JeqJCx, lazy: true, middleware: false, method: "get" },
  { route: '/api/academic_year/create', handler: _lazy_RUTCCY, lazy: true, middleware: false, method: "post" },
  { route: '/api/academic_year/edit', handler: _lazy_J7IE81, lazy: true, middleware: false, method: "put" },
  { route: '/api/academic_year/remove', handler: _lazy_WdmcVJ, lazy: true, middleware: false, method: "delete" },
  { route: '/api/grade_group/create', handler: _lazy_u6GZ51, lazy: true, middleware: false, method: "post" },
  { route: '/api/grade_group/edit', handler: _lazy_j1vGsK, lazy: true, middleware: false, method: "put" },
  { route: '/api/grade_group/remove', handler: _lazy_C7OqXU, lazy: true, middleware: false, method: "delete" },
  { route: '/api/grade/create', handler: _lazy_uKAmKe, lazy: true, middleware: false, method: "post" },
  { route: '/api/grade/edit', handler: _lazy_b66Dsf, lazy: true, middleware: false, method: "put" },
  { route: '/api/grade/remove', handler: _lazy_cH5KG9, lazy: true, middleware: false, method: "delete" },
  { route: '/api/pole_average/create', handler: _lazy_VTodB5, lazy: true, middleware: false, method: "post" },
  { route: '/api/pole_average/edit', handler: _lazy_k21EL7, lazy: true, middleware: false, method: "put" },
  { route: '/api/pole_average/remove', handler: _lazy_BDexin, lazy: true, middleware: false, method: "delete" },
  { route: '/api/semester/create', handler: _lazy_BxTXz3, lazy: true, middleware: false, method: "post" },
  { route: '/api/semester/edit', handler: _lazy_JQKP5y, lazy: true, middleware: false, method: "put" },
  { route: '/api/semester/remove', handler: _lazy_YfD3sc, lazy: true, middleware: false, method: "delete" },
  { route: '/api/subject/create', handler: _lazy_lJUGx6, lazy: true, middleware: false, method: "post" },
  { route: '/api/subject/edit', handler: _lazy_4J0csm, lazy: true, middleware: false, method: "put" },
  { route: '/api/subject/remove', handler: _lazy_CmrSrF, lazy: true, middleware: false, method: "delete" },
  { route: '/api/unit/create', handler: _lazy_QBBBV6, lazy: true, middleware: false, method: "post" },
  { route: '/api/unit/edit', handler: _lazy_xbWZ5U, lazy: true, middleware: false, method: "put" },
  { route: '/api/unit/remove', handler: _lazy_dJwEOK, lazy: true, middleware: false, method: "delete" },
  { route: '/api/user/authorization', handler: _lazy_rItITf, lazy: true, middleware: false, method: undefined },
  { route: '/api/user/login', handler: _lazy_crkz5f, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/ownself', handler: _lazy_S2RFBU, lazy: true, middleware: false, method: "delete" },
  { route: '/api/user/ownself', handler: _lazy_3DRsFm, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/password', handler: _lazy_THHT5X, lazy: true, middleware: false, method: "put" },
  { route: '/api/user/register', handler: _lazy_imPHQM, lazy: true, middleware: false, method: "post" },
  { route: '/api/user/rename', handler: _lazy_AOiuQf, lazy: true, middleware: false, method: "put" },
  { route: '/api/user/users', handler: _lazy_F00JOQ, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_VAHART, lazy: true, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _TQwIRO, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_VAHART, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (P === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (C) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const _____ = defineEventHandler(async (event) => {
  setResponseStatus(event, 404, "Not found");
  return;
});

const _____$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____
});

var PermissionsEnum = /* @__PURE__ */ ((PermissionsEnum2) => {
  PermissionsEnum2["ReadOwnSelf"] = "read:own_self";
  PermissionsEnum2["ReadUsers"] = "read:users";
  PermissionsEnum2["UpdateOwnSelf"] = "update:own_self";
  PermissionsEnum2["UpdateUsers"] = "update:users";
  PermissionsEnum2["DeleteOwnSelf"] = "delete:own_self";
  PermissionsEnum2["DeleteUsers"] = "delete:users";
  PermissionsEnum2["ReadAcademicYears"] = "read:academic_years";
  PermissionsEnum2["UpdateAcademicYears"] = "update:academic_years";
  PermissionsEnum2["DeleteAcademicYears"] = "delete:academic_years";
  PermissionsEnum2["CreateAcademicYears"] = "create:academic_years";
  PermissionsEnum2["ReadSemesters"] = "read:semesters";
  PermissionsEnum2["UpdateSemesters"] = "update:semesters";
  PermissionsEnum2["DeleteSemesters"] = "delete:semesters";
  PermissionsEnum2["CreateSemesters"] = "create:semesters";
  PermissionsEnum2["ReadUnits"] = "read:units";
  PermissionsEnum2["UpdateUnits"] = "update:units";
  PermissionsEnum2["DeleteUnits"] = "delete:units";
  PermissionsEnum2["CreateUnits"] = "create:units";
  PermissionsEnum2["ReadPoleAverages"] = "read:pole_averages";
  PermissionsEnum2["UpdatePoleAverages"] = "update:pole_averages";
  PermissionsEnum2["DeletePoleAverages"] = "delete:pole_averages";
  PermissionsEnum2["CreatePoleAverages"] = "create:pole_averages";
  PermissionsEnum2["ReadSubjects"] = "read:subjects";
  PermissionsEnum2["UpdateSubjects"] = "update:subjects";
  PermissionsEnum2["DeleteSubjects"] = "delete:subjects";
  PermissionsEnum2["CreateSubjects"] = "create:subjects";
  PermissionsEnum2["ReadOwnSelfGrades"] = "read:own_self_grades";
  PermissionsEnum2["UpdateOwnSelfGrades"] = "update:own_self_grades";
  PermissionsEnum2["DeleteOwnSelfGrades"] = "delete:own_self_grades";
  PermissionsEnum2["CreateOwnSelfGrades"] = "create:own_self_grades";
  PermissionsEnum2["GradesAll"] = "grades:*";
  PermissionsEnum2["ReadAll"] = "read:*";
  PermissionsEnum2["AllPermissions"] = "*";
  return PermissionsEnum2;
})(PermissionsEnum || {});
const Roles = {
  ["user" /* User */]: { name: "user" /* User */, permissions: [
    "read:own_self" /* ReadOwnSelf */,
    "update:own_self" /* UpdateOwnSelf */,
    "delete:own_self" /* DeleteOwnSelf */,
    "create:own_self_grades" /* CreateOwnSelfGrades */,
    "read:own_self_grades" /* ReadOwnSelfGrades */,
    "update:own_self_grades" /* UpdateOwnSelfGrades */,
    "delete:own_self_grades" /* DeleteOwnSelfGrades */
  ] },
  ["admin" /* Admin */]: { name: "admin" /* Admin */, permissions: [
    "*" /* AllPermissions */
  ] }
};
function findRoleByName(roleName) {
  const roleNames = Object.keys(Roles);
  for (const name of roleNames) {
    if (Roles[name].name === roleName) {
      return Roles[name];
    }
  }
  return null;
}

dotenv.config();
const secretKey = process.env.SECRET_KEY;
function generateAuthToken(payload) {
  if (!secretKey) {
    throw new Error("Secret key is not defined");
  }
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
}
function verifyToken(token) {
  try {
    if (!token) {
      return null;
    }
    if (!secretKey) {
      return null;
    }
    return jwt.verify(token, secretKey);
  } catch (error) {
    console.error("Error verifying JWT:", error);
    return null;
  }
}
function checkTokenPermissions(event, permissions) {
  if (!getHeader(event, "Authorization")) {
    return false;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload || !payload.permissions || !payload.user_id || !payload.role) {
    return false;
  }
  if (payload.permissions.includes(PermissionsEnum.AllPermissions)) {
    return true;
  }
  for (const permission of permissions) {
    if (!payload.permissions.includes(permission)) {
      return false;
    }
  }
  return true;
}

const prisma$t = new PrismaClient();
const academic_years_get = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.ReadAll, PermissionsEnum.ReadAcademicYears])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  setResponseStatus(event, 200);
  return prisma$t.academicYear.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      Semester: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
          idAcademicYear: false,
          academicYear: false,
          Unit: {
            select: {
              id: true,
              name: true,
              createdAt: true,
              updatedAt: true,
              idSemester: false,
              semester: false,
              PoleAverage: {
                select: {
                  id: true,
                  name: true,
                  coefficient: true,
                  createdAt: true,
                  updatedAt: true,
                  idUnit: false,
                  unit: false,
                  Subject: {
                    select: {
                      id: true,
                      name: true,
                      coefficient: true,
                      createdAt: true,
                      updatedAt: true,
                      idPoleAverage: false,
                      PoleAverage: false
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
});

const academic_years_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: academic_years_get
});

const prisma$s = new PrismaClient();
const create_post$c = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.CreateAcademicYears])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.name) {
    setResponseStatus(event, 422, "Invalid body error {name}");
    return;
  }
  const academic_year = await prisma$s.academicYear.create({
    data: {
      name: body.name
    }
  });
  if (!academic_year) {
    setResponseStatus(event, 503, "An error occurred while creating the academic year");
    return;
  }
  setResponseStatus(event, 201, "Academic year created");
  return academic_year;
});

const create_post$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post$c
});

const prisma$r = new PrismaClient();
const edit_put$c = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateAcademicYears])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id || !body.name) {
    setResponseStatus(event, 422, "Invalid body error {id, name}");
    return;
  }
  if (!await prisma$r.academicYear.findUnique({
    where: {
      id: body.id
    }
  })) {
    setResponseStatus(event, 404, "Academic year not found");
    return;
  }
  const academic_year = await prisma$r.academicYear.update({
    where: {
      id: body.id
    },
    data: {
      name: body.name
    }
  });
  if (!academic_year) {
    setResponseStatus(event, 503, "An error occurred while updating the academic year");
    return;
  }
  setResponseStatus(event, 204, "Academic year updated");
  return;
});

const edit_put$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_put$c
});

const prisma$q = new PrismaClient();
const remove_delete$c = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeleteAcademicYears])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id) {
    setResponseStatus(event, 422, "Missing body parameter {id}");
    return;
  }
  if (!await prisma$q.academicYear.findUnique({
    where: {
      id: body.id
    }
  })) {
    setResponseStatus(event, 404, "Academic year not found");
    return;
  }
  const academic_year = await prisma$q.academicYear.delete({
    where: {
      id: body.id
    }
  });
  if (!academic_year) {
    setResponseStatus(event, 503, "An error occurred while deleting the academic year");
    return;
  }
  setResponseStatus(event, 204, "Academic year deleted");
  return;
});

const remove_delete$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: remove_delete$c
});

const prisma$p = new PrismaClient();
const create_post$a = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.CreateOwnSelfGrades])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$p.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.name || body.coefficient === void 0 || !body.idSubject) {
    setResponseStatus(event, 422, "Invalid body error (name, coefficient, idSubject)");
    return;
  }
  const gradeGroup = await prisma$p.gradeGroup.create({
    data: {
      name: body.name,
      coefficient: body.coefficient,
      idSubject: body.idSubject,
      idUser: user.id
    }
  });
  if (!gradeGroup) {
    setResponseStatus(event, 503, "An error occurred while creating the grade group");
    return;
  }
  setResponseStatus(event, 201, "Grade group created");
  return gradeGroup;
});

const create_post$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post$a
});

const prisma$o = new PrismaClient();
const edit_put$a = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelfGrades])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id || !body.name && body.coefficient === void 0 && !body.id_subject) {
    setResponseStatus(event, 422, "Invalid body error {id, name?, coefficient?, id_subject?}");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$o.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  if (!await prisma$o.gradeGroup.findUnique({
    where: {
      id: body.id,
      idUser: user.id
    }
  })) {
    setResponseStatus(event, 404, "Grade group not found");
    return;
  }
  const updateData = {};
  if (body.name) {
    updateData.name = body.name;
  }
  if (body.coefficient) {
    updateData.coefficient = body.coefficient;
  }
  if (body.id_subject) {
    updateData.idSubject = body.id_subject;
  }
  const gradeGroup = await prisma$o.gradeGroup.update({
    where: {
      id: body.id
    },
    data: updateData
  });
  if (!gradeGroup) {
    setResponseStatus(event, 503, "An error occurred while updating grade group");
    return;
  }
  setResponseStatus(event, 204, "Grade group updated");
  return;
});

const edit_put$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_put$a
});

const prisma$n = new PrismaClient();
const remove_delete$a = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeleteOwnSelfGrades])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id) {
    setResponseStatus(event, 422, "Invalid body error {id}");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$n.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  if (!await prisma$n.gradeGroup.findUnique({
    where: {
      id: body.id,
      idUser: user.id
    }
  })) {
    setResponseStatus(event, 404, "Grade group not found");
    return;
  }
  const gradeGroup = await prisma$n.gradeGroup.delete({
    where: {
      id: body.id
    }
  });
  if (!gradeGroup) {
    setResponseStatus(event, 503, "An error occurred while deleting grade group");
    return;
  }
  setResponseStatus(event, 204, "Grade group deleted");
  return;
});

const remove_delete$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: remove_delete$a
});

const prisma$m = new PrismaClient();
const create_post$8 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.CreateOwnSelfGrades])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$m.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (body.value === void 0 || body.coefficient === void 0 || !body.idGradeGroup) {
    setResponseStatus(event, 422, "Invalid body error {value, coefficient, idGradeGroup}");
    return;
  }
  const gradeGroup = await prisma$m.gradeGroup.findUnique({
    where: {
      id: body.idGradeGroup,
      idUser: user.id
    }
  });
  if (!gradeGroup) {
    setResponseStatus(event, 404, "Grade group not found");
    return;
  }
  const grade = await prisma$m.grade.create({
    data: {
      value: body.value,
      coefficient: body.coefficient,
      idGradeGroup: gradeGroup.id
    }
  });
  if (!grade) {
    setResponseStatus(event, 503, "An error occurred while creating the grade");
    return;
  }
  setResponseStatus(event, 201, "Grade created");
  return grade;
});

const create_post$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post$8
});

const prisma$l = new PrismaClient();
const edit_put$8 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelfGrades])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$l.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id || body.value === void 0 && body.coefficient === void 0 && !body.idGradeGroup) {
    setResponseStatus(event, 422, "Invalid body error {id, value?, coefficient?, idGradeGroup?}");
    return;
  }
  if (!await prisma$l.grade.findUnique({
    where: {
      id: body.id,
      GradeGroup: {
        idUser: user.id
      }
    }
  })) {
    setResponseStatus(event, 404, "Grade not found");
    return;
  }
  const updateData = {};
  if (body.value) {
    updateData.value = body.value;
  }
  if (body.coefficient) {
    updateData.coefficient = body.coefficient;
  }
  if (body.idGradeGroup) {
    const gradeGroup = await prisma$l.gradeGroup.findUnique({
      where: {
        id: body.idGradeGroup,
        idUser: user.id
      }
    });
    if (!gradeGroup) {
      setResponseStatus(event, 404, "Grade group not found");
      return;
    }
    updateData.idGradeGroup = gradeGroup.id;
  }
  const grade = await prisma$l.grade.update({
    where: {
      id: body.id,
      GradeGroup: {
        idUser: user.id
      }
    },
    data: updateData
  });
  if (!grade) {
    setResponseStatus(event, 503, "An error occurred while updating the grade");
    return;
  }
  setResponseStatus(event, 204, "Grade updated");
  return;
});

const edit_put$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_put$8
});

const prisma$k = new PrismaClient();
const remove_delete$8 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeleteOwnSelfGrades])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id) {
    setResponseStatus(event, 422, "Invalid body error {id}");
    return;
  }
  const user = await prisma$k.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  if (!await prisma$k.grade.findUnique({
    where: {
      id: body.id,
      GradeGroup: {
        idUser: user.id
      }
    }
  })) {
    setResponseStatus(event, 404, "Grade not found");
    return;
  }
  const grade = await prisma$k.grade.delete({
    where: {
      id: body.id
    }
  });
  if (!grade) {
    setResponseStatus(event, 503, "An error occurred while deleting the grade");
    return;
  }
  setResponseStatus(event, 204, "Grade deleted");
  return;
});

const remove_delete$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: remove_delete$8
});

const prisma$j = new PrismaClient();
const create_post$6 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.CreatePoleAverages])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.name || body.coefficient === void 0 || !body.idUnit) {
    setResponseStatus(event, 422, "Invalid body error (name, coefficient, idUnit)");
    return;
  }
  const poleAverage = await prisma$j.poleAverage.create({
    data: {
      name: body.name,
      coefficient: body.coefficient,
      idUnit: body.idUnit
    }
  });
  if (!poleAverage) {
    setResponseStatus(event, 503, "An error occurred while creating the pole average");
    return;
  }
  setResponseStatus(event, 201, "Pole average created");
  return poleAverage;
});

const create_post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post$6
});

const prisma$i = new PrismaClient();
const edit_put$6 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdatePoleAverages])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id || !body.name && !body.id_unit && body.coefficient === void 0) {
    setResponseStatus(event, 422, "Invalid body error {id, name?, id_unit?, coefficient?}");
    return;
  }
  const updateData = {};
  if (body.name) {
    updateData.name = body.name;
  }
  if (body.coefficient) {
    updateData.coefficient = body.coefficient;
  }
  if (body.id_unit) {
    updateData.idUnit = body.id_unit;
  }
  const poleAverage = await prisma$i.poleAverage.update({
    where: {
      id: body.id
    },
    data: updateData
  });
  if (!poleAverage) {
    setResponseStatus(event, 503, "An error occurred while updating the pole average");
    return;
  }
  setResponseStatus(event, 204, "Pole average updated");
  return;
});

const edit_put$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_put$6
});

const prisma$h = new PrismaClient();
const remove_delete$6 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeletePoleAverages])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id) {
    setResponseStatus(event, 422, "Invalid body error {id}");
    return;
  }
  if (!await prisma$h.poleAverage.findUnique({
    where: {
      id: body.id
    }
  })) {
    setResponseStatus(event, 404, "Pole average not found");
    return;
  }
  const poleAverage = await prisma$h.poleAverage.delete({
    where: {
      id: body.id
    }
  });
  if (!poleAverage) {
    setResponseStatus(event, 503, "An error occurred while deleting the pole average");
    return;
  }
  setResponseStatus(event, 204, "Pole average deleted");
  return;
});

const remove_delete$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: remove_delete$6
});

const prisma$g = new PrismaClient();
const create_post$4 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.CreateSemesters])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.name || !body.idAcademicYear) {
    setResponseStatus(event, 422, "Invalid body error {name, idAcademicYear}");
    return;
  }
  const semester = await prisma$g.semester.create({
    data: {
      name: body.name,
      idAcademicYear: body.idAcademicYear
    }
  });
  if (!semester) {
    setResponseStatus(event, 503, "An error occurred while creating the semester");
    return;
  }
  setResponseStatus(event, 201, "Semester created");
  return semester;
});

const create_post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post$4
});

const prisma$f = new PrismaClient();
const edit_put$4 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateSemesters])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id || !body.name && !body.id_academic_year) {
    setResponseStatus(event, 422, "Invalid body error {id, name?, id_academic_year?}");
    return;
  }
  const updateData = {};
  if (body.name) {
    updateData.name = body.name;
  }
  if (body.id_academic_year) {
    updateData.idAcademicYear = body.id_academic_year;
  }
  const semester = await prisma$f.semester.update({
    where: {
      id: body.id
    },
    data: updateData
  });
  if (!semester) {
    setResponseStatus(event, 503, "An error occurred while updating the semester");
    return;
  }
  setResponseStatus(event, 204, "Semester updated");
  return;
});

const edit_put$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_put$4
});

const prisma$e = new PrismaClient();
const remove_delete$4 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeleteSemesters])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id) {
    setResponseStatus(event, 422, "Invalid body error {id}");
    return;
  }
  if (!await prisma$e.semester.findUnique({
    where: {
      id: body.id
    }
  })) {
    setResponseStatus(event, 404, "Semester not found");
    return;
  }
  const semester = await prisma$e.semester.delete({
    where: {
      id: body.id
    }
  });
  if (!semester) {
    setResponseStatus(event, 503, "An error occurred while deleting the semester");
    return;
  }
  setResponseStatus(event, 204, "Semester deleted");
  return;
});

const remove_delete$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: remove_delete$4
});

const prisma$d = new PrismaClient();
const create_post$2 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.CreateSubjects])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.name || !body.idPoleAverage || body.coefficient === void 0) {
    setResponseStatus(event, 422, "Invalid body error {name, idPoleAverage, coefficient}");
    return;
  }
  const subject = await prisma$d.subject.create({
    data: {
      name: body.name,
      coefficient: body.coefficient,
      idPoleAverage: body.idPoleAverage
    }
  });
  if (!subject) {
    setResponseStatus(event, 503, "An error occurred while creating the subject");
    return;
  }
  setResponseStatus(event, 201, "Subject created");
  return subject;
});

const create_post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post$2
});

const prisma$c = new PrismaClient();
const edit_put$2 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateSubjects])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id || !body.name && body.coefficient === void 0 && !body.id_pole_average) {
    setResponseStatus(event, 422, "Invalid body error {id, name?, coefficient?, id_pole_average?}");
    return;
  }
  const updateData = {};
  if (body.name) {
    updateData.name = body.name;
  }
  if (body.coefficient) {
    updateData.coefficient = body.coefficient;
  }
  if (body.id_pole_average) {
    updateData.idPoleAverage = body.id_pole_average;
  }
  const subject = await prisma$c.subject.update({
    where: {
      id: body.id
    },
    data: updateData
  });
  if (!subject) {
    setResponseStatus(event, 503, "An error occurred while updating the subject");
    return;
  }
  setResponseStatus(event, 204, "Subject updated");
  return;
});

const edit_put$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_put$2
});

const prisma$b = new PrismaClient();
const remove_delete$2 = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeleteSubjects])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id) {
    setResponseStatus(event, 422, "Invalid body error {id}");
    return;
  }
  if (!await prisma$b.subject.findUnique({
    where: {
      id: body.id
    }
  })) {
    setResponseStatus(event, 404, "Subject not found");
    return;
  }
  const subject = await prisma$b.subject.delete({
    where: {
      id: body.id
    }
  });
  if (!subject) {
    setResponseStatus(event, 503, "An error occurred while deleting the subject");
    return;
  }
  setResponseStatus(event, 204, "Subject deleted");
  return;
});

const remove_delete$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: remove_delete$2
});

const prisma$a = new PrismaClient();
const create_post = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.CreateUnits])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.name || !body.idSemester) {
    setResponseStatus(event, 422, "Invalid body error {name, idSemester}");
    return;
  }
  const unit = await prisma$a.unit.create({
    data: {
      name: body.name,
      idSemester: body.idSemester
    }
  });
  if (!unit) {
    setResponseStatus(event, 503, "An error occurred while creating the unit");
    return;
  }
  setResponseStatus(event, 201, "Unit created");
  return unit;
});

const create_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: create_post
});

const prisma$9 = new PrismaClient();
const edit_put = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateUnits])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id || !body.name && !body.id_semester) {
    setResponseStatus(event, 422, "Invalid body error {id, name?, id_semester?}");
    return;
  }
  const updateData = {};
  if (body.name) {
    updateData.name = body.name;
  }
  if (body.id_semester) {
    updateData.idSemester = body.id_semester;
  }
  const unit = await prisma$9.unit.update({
    where: {
      id: body.id
    },
    data: updateData
  });
  if (!unit) {
    setResponseStatus(event, 503, "An error occurred while updating the unit");
    return;
  }
  setResponseStatus(event, 204, "Unit updated");
  return;
});

const edit_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: edit_put
});

const prisma$8 = new PrismaClient();
const remove_delete = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeleteUnits])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.id) {
    setResponseStatus(event, 422, "Invalid body error {id}");
    return;
  }
  if (!await prisma$8.unit.findUnique({
    where: {
      id: body.id
    }
  })) {
    setResponseStatus(event, 404, "Unit not found");
    return;
  }
  const unit = await prisma$8.unit.delete({
    where: {
      id: body.id
    }
  });
  if (!unit) {
    setResponseStatus(event, 503, "An error occurred while deleting the unit");
    return;
  }
  setResponseStatus(event, 204, "Unit deleted");
  return;
});

const remove_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: remove_delete
});

const prisma$7 = new PrismaClient();
const authorization = defineEventHandler(async (event) => {
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$7.user.findUnique({
    where: {
      id: payload.user_id
    },
    select: {
      pseudo: false,
      role: true,
      password: false,
      createdAt: false,
      updatedAt: false,
      GradeGroup: false
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  setResponseStatus(event, 200, "Authorized");
  return { role: user.role };
});

const authorization$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: authorization
});

const prisma$6 = new PrismaClient();
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.pseudo || !body.password) {
    setResponseStatus(event, 422, "Invalid body error {pseudo, password}");
    return;
  }
  const user = await prisma$6.user.findUnique({
    where: {
      pseudo: body.pseudo
    }
  });
  if (!user) {
    setResponseStatus(event, 404, "User not found");
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  if (!await compare(body.password, user.password)) {
    setResponseStatus(event, 401, "Unauthorized, invalid password");
    return;
  }
  const user_role = findRoleByName(user.role);
  if (!user_role) {
    setResponseStatus(event, 401, "Unauthorized, invalid user role");
    return;
  }
  setResponseStatus(event, 200, "Authorized");
  return { token: generateAuthToken({ user_id: user.id, role: user.role, permissions: user_role.permissions }) };
});

const login_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: login_post
});

const prisma$5 = new PrismaClient();
const ownself_delete = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.DeleteOwnSelf])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  let user = await prisma$5.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  user = await prisma$5.user.delete({
    where: {
      id: user.id
    }
  });
  if (!user) {
    setResponseStatus(event, 503, "An error occurred while deleting the user");
    return;
  }
  console.log("User deleted");
  setResponseStatus(event, 204, "User deleted");
  return;
});

const ownself_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ownself_delete
});

const prisma$4 = new PrismaClient();
const ownself_get = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.ReadOwnSelf])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$4.user.findUnique({
    where: {
      id: payload.user_id
    },
    select: {
      pseudo: true,
      role: true,
      password: false,
      createdAt: true,
      updatedAt: true,
      GradeGroup: false
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const userAcademicYears = await prisma$4.academicYear.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      Semester: {
        select: {
          id: true,
          name: true,
          idAcademicYear: false,
          createdAt: true,
          updatedAt: true,
          Unit: {
            select: {
              id: true,
              name: true,
              idSemester: false,
              createdAt: true,
              updatedAt: true,
              PoleAverage: {
                select: {
                  id: true,
                  name: true,
                  idUnit: false,
                  coefficient: true,
                  createdAt: true,
                  updatedAt: true,
                  Subject: {
                    select: {
                      id: true,
                      name: true,
                      coefficient: true,
                      idPoleAverage: false,
                      createdAt: true,
                      updatedAt: true,
                      GradeGroup: {
                        select: {
                          id: true,
                          name: true,
                          coefficient: true,
                          idSubject: false,
                          idUser: false,
                          createdAt: true,
                          updatedAt: true,
                          Grade: {
                            select: {
                              id: true,
                              value: true,
                              coefficient: true,
                              idGradeGroup: false,
                              createdAt: true,
                              updatedAt: true
                            }
                          }
                        },
                        where: {
                          idUser: payload.user_id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  userAcademicYears.forEach((academicYear) => {
    academicYear.Semester.forEach((semester) => {
      let unitTotal = 0;
      let unitTotalCoefficient = 0;
      semester.Unit.forEach((unit) => {
        let polesTotal = 0;
        let polesTotalCoefficient = 0;
        unit.PoleAverage.forEach((pole) => {
          let subjectsTotal = 0;
          let subjectsTotalCoefficient = 0;
          pole.Subject.forEach((subject) => {
            let gradeGroupsTotal = 0;
            let gradeGroupsTotalCoefficient = 0;
            subject.GradeGroup.forEach((gradeGroup) => {
              let gradesTotal = 0;
              let gradesTotalCoefficient = 0;
              gradeGroup.Grade.forEach((grade) => {
                if (grade.value !== null && grade.coefficient !== null) {
                  gradesTotal += grade.value * grade.coefficient;
                  gradesTotalCoefficient += grade.coefficient;
                }
              });
              if (gradesTotalCoefficient === 0) {
                gradeGroup.average = null;
              } else {
                gradeGroup.average = gradesTotal / gradesTotalCoefficient;
              }
              if (gradeGroup.average !== null) {
                gradeGroupsTotal += gradeGroup.average * gradeGroup.coefficient;
                gradeGroupsTotalCoefficient += gradeGroup.coefficient;
              }
            });
            if (gradeGroupsTotalCoefficient === 0) {
              subject.average = null;
            } else {
              subject.average = gradeGroupsTotal / gradeGroupsTotalCoefficient;
            }
            if (subject.average !== null) {
              subjectsTotal += subject.average * subject.coefficient;
              subjectsTotalCoefficient += subject.coefficient;
            }
          });
          if (subjectsTotalCoefficient === 0) {
            pole.average = null;
          } else {
            pole.average = subjectsTotal / subjectsTotalCoefficient;
          }
          if (pole.average !== null) {
            polesTotal += pole.average * pole.coefficient;
            polesTotalCoefficient += pole.coefficient;
          }
        });
        if (polesTotalCoefficient === 0) {
          unit.average = null;
        } else {
          unit.average = polesTotal / polesTotalCoefficient;
        }
        if (unit.average !== null) {
          unitTotal += unit.average;
          unitTotalCoefficient += 1;
        }
      });
      if (unitTotalCoefficient === 0) {
        semester.average = null;
      } else {
        semester.average = unitTotal / unitTotalCoefficient;
      }
    });
  });
  setResponseStatus(event, 200, "User data");
  return { user, userAcademicYears };
});

const ownself_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: ownself_get
});

const prisma$3 = new PrismaClient();
const password_put = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelf])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.password || !body.newPassword || body.newPassword.length < 5) {
    setResponseStatus(event, 422, "Invalid body error {password, newPassword}");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$3.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  if (!await compare(body.password, user.password)) {
    setResponseStatus(event, 401, "Unauthorized, invalid password");
    return;
  }
  const hashed_password = await hash$1(body.newPassword, 10);
  const password = await prisma$3.user.update({
    where: {
      id: payload.user_id
    },
    data: {
      password: hashed_password
    }
  });
  if (!password) {
    setResponseStatus(event, 503, "An error occurred while updating the password");
    return;
  }
  setResponseStatus(event, 204, "Password updated");
  return;
});

const password_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: password_put
});

const prisma$2 = new PrismaClient();
const register_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.pseudo || !body.password || body.password.length < 5) {
    setResponseStatus(event, 422, "Invalid body error {pseudo, password}");
    return;
  }
  if (await prisma$2.user.findUnique({
    where: {
      pseudo: body.pseudo
    }
  })) {
    setResponseStatus(event, 401, "Unauthorized, pseudo already exists");
    return;
  }
  const hashed_password = await hash$1(body.password, 10);
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  const user = await prisma$2.user.create({
    data: {
      pseudo: body.pseudo,
      password: hashed_password
    }
  });
  if (!user) {
    setResponseStatus(event, 503, "An error occurred while creating the user");
    return;
  }
  setResponseStatus(event, 201, "User created");
  return { token: generateAuthToken({ user_id: user.id, role: user.role, permissions: Roles.user.permissions }) };
});

const register_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: register_post
});

const prisma$1 = new PrismaClient();
const rename_put = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelf])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const body = await readBody(event);
  if (!body.pseudo) {
    setResponseStatus(event, 422, "Invalid body error {pseudo}");
    return;
  }
  const payload = verifyToken(getHeader(event, "Authorization"));
  if (!payload) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  const user = await prisma$1.user.findUnique({
    where: {
      id: payload.user_id
    }
  });
  if (!user) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  if (await prisma$1.user.findUnique({
    where: {
      pseudo: body.pseudo
    }
  })) {
    setResponseStatus(event, 401, "Unauthorized, pseudo already exists");
    return;
  }
  const renamed_user = await prisma$1.user.update({
    where: {
      id: payload.user_id
    },
    data: {
      pseudo: body.pseudo
    }
  });
  if (!renamed_user) {
    setResponseStatus(event, 503, "An error occurred while updating the pseudo");
    return;
  }
  setResponseStatus(event, 204, "Pseudo updated");
  return;
});

const rename_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: rename_put
});

const prisma = new PrismaClient();
const users_get = defineEventHandler(async (event) => {
  if (!checkTokenPermissions(event, [PermissionsEnum.ReadAll, PermissionsEnum.ReadUsers])) {
    setResponseStatus(event, 401, "Unauthorized");
    return;
  }
  setResponseStatus(event, 200, "Users fetched");
  return prisma.user.findMany({
    select: {
      pseudo: true,
      role: true,
      password: false,
      createdAt: true,
      updatedAt: true,
      GradeGroup: false
    }
  });
});

const users_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: users_get
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[],"htmlAttrs":{"lang":"fr"},"title":"Calcule Ma Moyenne"};

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://C:/Users/valen/OneDrive/Documents/01.BUT/notes-iut/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  head.push(appHead, headEntryOptions);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !islandContext || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  head.push({
    link: Object.values(styles).map(
      (resource) => ({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) })
    )
  }, headEntryOptions);
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: [htmlAttrs],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: [bodyAttrs],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
