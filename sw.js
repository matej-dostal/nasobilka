if(!self.define){let i,e={};const n=(n,o)=>(n=new URL(n+".js",o).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(o,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let s={};const a=i=>n(i,r),d={module:{uri:r},exports:s,require:a};e[r]=Promise.all(o.map((i=>d[i]||a(i)))).then((i=>(c(...i),s)))}}define(["./workbox-32a34f02"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"assets/index-5qVXH1_J.css",revision:null},{url:"assets/index-aytb8fDI.js",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"img/bad.svg",revision:"1fa0d137f4634e83b9050b76a4d5b5d0"},{url:"img/gymjes_logo.svg",revision:"ebdc592929abf42a603e4f5d6c3c366d"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/icon-256x256.png",revision:"afe6c5688ffe9afbd0790544c6b30543"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"6de16254d1b4193353e7015f9177535d"},{url:"img/middle.svg",revision:"391e0daf84912a7368f29f3d58ed5d42"},{url:"img/top.svg",revision:"b8a31c03833a310b1d2df865d81d9395"},{url:"index.html",revision:"8bddb19973e9b88b5d47888235ccd2a4"},{url:"registerSW.js",revision:"be3bb43541f033a9f93ad51cc2257bc1"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"manifest.webmanifest",revision:"08c63414b3903397eecda1b54020c1b5"}],{}),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
