"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||u;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,l=new Array(u);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<u;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>o,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const u={id:"automatic-routes",sidebar_position:3,last_update:{date:"2022/08/29",author:"JohnShuuu"},tags:["vue3","vue-router"],title:"\u3010\u5957\u4ef6\u3011\u81ea\u52d5\u751f\u6210 vue-router",description:"\u4f7f\u7528\u5957\u4ef6\u81ea\u52d5\u751f\u6210router\u4ee5\u53ca\u81ea\u8a02layout, \u8ddf Nuxt\u7684Automatic Routes \u6548\u679c\u5e7e\u4e4e\u4e00\u6a23"},l="\u3010\u5957\u4ef6\u3011\u81ea\u52d5\u751f\u6210 vue-router",o={unversionedId:"Vue/automatic-routes",id:"Vue/automatic-routes",title:"\u3010\u5957\u4ef6\u3011\u81ea\u52d5\u751f\u6210 vue-router",description:"\u4f7f\u7528\u5957\u4ef6\u81ea\u52d5\u751f\u6210router\u4ee5\u53ca\u81ea\u8a02layout, \u8ddf Nuxt\u7684Automatic Routes \u6548\u679c\u5e7e\u4e4e\u4e00\u6a23",source:"@site/docs/Vue/\u3010\u5957\u4ef6\u3011\u81ea\u52d5\u751f\u6210 router layout & pages.md",sourceDirName:"Vue",slug:"/Vue/automatic-routes",permalink:"/docs/Vue/automatic-routes",draft:!1,tags:[{label:"vue3",permalink:"/docs/tags/vue-3"},{label:"vue-router",permalink:"/docs/tags/vue-router"}],version:"current",lastUpdatedBy:"JohnShuuu",lastUpdatedAt:1661702400,formattedLastUpdatedAt:"2022\u5e748\u670828\u65e5",sidebarPosition:3,frontMatter:{id:"automatic-routes",sidebar_position:3,last_update:{date:"2022/08/29",author:"JohnShuuu"},tags:["vue3","vue-router"],title:"\u3010\u5957\u4ef6\u3011\u81ea\u52d5\u751f\u6210 vue-router",description:"\u4f7f\u7528\u5957\u4ef6\u81ea\u52d5\u751f\u6210router\u4ee5\u53ca\u81ea\u8a02layout, \u8ddf Nuxt\u7684Automatic Routes \u6548\u679c\u5e7e\u4e4e\u4e00\u6a23"},sidebar:"tutorialSidebar",previous:{title:"\u3010\u72c0\u6cc1\u3011\u5716\u7247\u9023\u7d50\u932f\u8aa4,\u81ea\u8a02\u6307\u4ee4",permalink:"/docs/Vue/vue-directive-image-link"},next:{title:"JS",permalink:"/docs/category/js"}},s={},i=[{value:"\u7bc4\u4f8b",id:"\u7bc4\u4f8b",level:2},{value:"\u5b89\u88dd/\u8a2d\u5b9a",id:"\u5b89\u88dd\u8a2d\u5b9a",level:3},{value:"\u8cc7\u6599\u593e\u7d50\u69cb",id:"\u8cc7\u6599\u593e\u7d50\u69cb",level:3},{value:"404\u9801\u9762",id:"404\u9801\u9762",level:3},{value:"id\u9801\u9762",id:"id\u9801\u9762",level:3},{value:"router-view",id:"router-view",level:3},{value:"\u8def\u7531 layout",id:"\u8def\u7531-layout",level:2},{value:"\u9810\u8a2d layout",id:"\u9810\u8a2d-layout",level:3},{value:"\u81ea\u8a02 layout",id:"\u81ea\u8a02-layout",level:3},{value:"yaml \u5167\u7684 meta",id:"yaml-\u5167\u7684-meta",level:3}],p={toc:i};function c(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5957\u4ef6\u81ea\u52d5\u751f\u6210-vue-router"},"\u3010\u5957\u4ef6\u3011\u81ea\u52d5\u751f\u6210 vue-router"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u74b0\u5883\u70ba vite + vue3")),(0,r.kt)("p",null,"\u4f7f\u7528\u904eNuxt\u958b\u767c\u5f8c, \u5c31\u89ba\u5f97 ",(0,r.kt)("strong",{parentName:"p"},"Nuxt\u7684Automatic Routes")," \u975e\u5e38\u7684\u65b9\u4fbf, "),(0,r.kt)("p",null,"\u4f46\u7531\u65bc\u76ee\u524d\u516c\u53f8\u50be\u5411\u4f7f\u7528Vue3\u958b\u767c, \u4e26\u4e14Nuxt3\u4e5f\u9084\u5728RC\u968e\u6bb5, \u6240\u4ee5\u53ea\u80fd\u91cd\u56de\u57fa\u672c\u7684 vue-router \u61f7\u62b1."),(0,r.kt)("p",null,"\u4e0d\u904e\u7d93\u904e\u4e00\u756a\u641c\u5c0b\u5f8c, \u767c\u73fe\u4e86\u9019\u5169\u500b\u5957\u4ef6 \u300c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JohnCampionJr/vite-plugin-vue-layouts"},"vite-plugin-vue-layouts"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hannoeru/vite-plugin-pages"},"vite-plugin-pages")," \u300d, \u4ed6\u5011\u80fd\u9054\u6210\u7684\u6548\u679c\u8ddf ",(0,r.kt)("strong",{parentName:"p"},"Nuxt\u7684Automatic Routes")," \u5e7e\u4e4e\u4e00\u6a23\u7684\u6548\u679c"),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u5c31\u4f86\u6f14\u793a\u9019\u795e\u5947\u7684\u5957\u4ef6"),(0,r.kt)("h2",{id:"\u7bc4\u4f8b"},"\u7bc4\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/hannoeru/vite-plugin-pages"},"https://github.com/hannoeru/vite-plugin-pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JohnCampionJr/vite-plugin-vue-layouts"},"https://github.com/JohnCampionJr/vite-plugin-vue-layouts"))),(0,r.kt)("h3",{id:"\u5b89\u88dd\u8a2d\u5b9a"},"\u5b89\u88dd/\u8a2d\u5b9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"yarn add -D vite-plugin-pages\nyarn add -D vite-plugin-vue-layouts\nyarn add vue-router\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vite.config.ts \u5f15\u5165\u5957\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// vite.config.ts\n\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// add\nimport Pages from 'vite-plugin-pages'\nimport Layouts from 'vite-plugin-vue-layouts'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [\n    vue(),\n\n    // https://github.com/hannoeru/vite-plugin-pages\n    Pages(),\n\n    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts\n    Layouts(),\n  ]\n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vue-router \u5f15\u5165\u5957\u4ef6\u8a2d\u5b9a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// router/index.ts\nimport { createRouter, createWebHistory } from 'vue-router'\nimport { setupLayouts } from 'virtual:generated-layouts'\nimport generatedRoutes from 'virtual:generated-pages'\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes: setupLayouts(generatedRoutes)\n})\n\nexport default router\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"main.ts \u5f15\u5165 router")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// main.ts\nimport { createApp } from 'vue'\nimport './index.css'\nimport App from './App.vue'\n\n// router\nimport router from './router'\n\ncreateApp(App)\n  .use(router)\n  .mount('#app')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tsconfig.json \u5f15\u5165\u5957\u4ef6\u898f\u5247")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// tsconfig.json\n{\n  "compilerOptions": {\n    "target": "ESNext",\n    "useDefineForClassFields": true,\n    "module": "ESNext",\n    "moduleResolution": "Node",\n    "strict": true,\n    "jsx": "preserve",\n    "sourceMap": true,\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "esModuleInterop": true,\n    "lib": ["ESNext", "DOM"],\n    "skipLibCheck": true,\n    "types": [\n      "vite-plugin-pages/client",\n      "vite-plugin-vue-layouts/client"\n    ]\n  },\n  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],\n  "references": [{ "path": "./tsconfig.node.json" }]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App.vue \u4fee\u6539")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// App.vue\n<template>\n  <router-view />\n</template>\n")),(0,r.kt)("h3",{id:"\u8cc7\u6599\u593e\u7d50\u69cb"},"\u8cc7\u6599\u593e\u7d50\u69cb"),(0,r.kt)("p",null,"\u5f9e\u5b98\u65b9\u8aaa\u660e\u77e5\u9053, \u53ef\u4ee5\u5b9a\u7fa9\u591a\u500b\u8cc7\u6599\u593e\u540d\u7a31\u4f86\u5b9a\u7fa9Route"),(0,r.kt)("p",null,"\u4f46\u9019\u908a\u5148",(0,r.kt)("strong",{parentName:"p"},"fouce\u5728pages\u8cc7\u6599\u593e"),"\u88e1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"src/\n  \u251c\u2500\u2500 features/\n  \u2502  \u2514\u2500\u2500 dashboard/\n  \u2502     \u251c\u2500\u2500 code/\n  \u2502     \u251c\u2500\u2500 components/\n  \u2502     \u2514\u2500\u2500 pages/\n  \u251c\u2500\u2500 admin/\n  \u2502   \u251c\u2500\u2500 code/\n  \u2502   \u251c\u2500\u2500 components/\n  \u2502   \u2514\u2500\u2500 pages/\n  \u2514\u2500\u2500 pages/\n\n// vite.config.js\nexport default {\n  plugins: [\n    Pages({\n      dirs: [\n        { dir: 'src/pages', baseRoute: '' },\n        { dir: 'src/features/**/pages', baseRoute: 'features' },\n        { dir: 'src/admin/pages', baseRoute: 'admin' },\n      ],\n    }),\n  ],\n}\n")),(0,r.kt)("h3",{id:"404\u9801\u9762"},"404\u9801\u9762"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u5957\u4ef6, 404\u9801\u9762\u53ea\u9700\u8981\u958b\u500b\u6a94\u6848\u540d\u7a31\u70ba ","[\u2026all]",".vue \u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// src/pages/[...all].vue\n\n")),(0,r.kt)("h3",{id:"id\u9801\u9762"},"id\u9801\u9762"),(0,r.kt)("p",null,"\u800cid\u9801\u9762\u6709\u5169\u7a2e\u65b9\u5f0f\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"1. src/pages/test-id-page/[id].vue\n\u8def\u7531\u70ba xxxx/test-id-page/:id\n\n2. src/pages/items/index.vue  \n\u8def\u7531\u70ba xxxx/items\n\n2-1. src/pages/items/[id]/index.vue\n\u8def\u7531\u70ba xxxx/items/:id\n\n2-2. src/pages/items/[id]/news.vue\n\u8def\u7531\u70ba xxxx/items/:id/news\n")),(0,r.kt)("h3",{id:"router-view"},"router-view"),(0,r.kt)("p",null,"\u7576\u5728\u7279\u5b9a\u9801\u9762\u5167\u60f3\u505arouter-view\u7684\u5207\u63db\u6642, \u53ef\u4ee5\u9019\u6a23\u505a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// src/pages/router-view-test.vue\n// \u8def\u7531\u70ba xxxx/router-view-test\n\n<template>\n  <h1 class="text-2xl">router-view-test</h>\n  <div class="my-4">\n    <router-view></router-view>\n  </div>\n</template>\n')),(0,r.kt)("p",null,"\u5efa\u7acb\u8cc7\u6599\u593e\u53ca\u9801\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"1. src/router-view-test/index.vue\n\u8def\u7531\u70ba xxxx/router-view-test\n\n2. src/router-view-test/page2.vue\n\u8def\u7531\u70ba xxxx/router-view-test/page2\n\n3. src/router-view-test/page3.vue\n\u8def\u7531\u70ba xxxx/router-view-test/page3\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u8def\u7531-layout"},"\u8def\u7531 layout"),(0,r.kt)("p",null,"\u5728\u6700\u524d\u9762\u6709\u5b89\u88dd layout \u5957\u4ef6\u9084\u6c92\u4f7f\u7528\u5230, \u9019\u500b\u5957\u4ef6\u53ef\u4ee5\u8b93\u6211\u5011\u81ea\u8a02\u6bcf\u4e00\u500b\u9801\u9762\u7684layout"),(0,r.kt)("h3",{id:"\u9810\u8a2d-layout"},"\u9810\u8a2d layout"),(0,r.kt)("p",null,"\u9810\u8a2d\u70ba src/layouts/default.vue, \u8a2d\u5b9a\u597d\u5f8c\u5373\u5957\u7528\u5728\u6240\u6709\u9801\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// src/layouts/default.vue\n<script setup lang="ts">\nimport Menu from "../components/menu.vue"\n<\/script>\n\n<template>\n  <main class="main">\n        <Menu />\n    <section class="w-full mx-auto max-w-[500px]">\n      <h1 class="text-4xl mb-10 mt-5">Layout 1</h1>\n      <router-view />\n    </section>\n  </main>\n</template>\n')),(0,r.kt)("h3",{id:"\u81ea\u8a02-layout"},"\u81ea\u8a02 layout"),(0,r.kt)("p",null,"\u5047\u8a2d\u81ea\u8a02\u70ba src/layouts/Layout2.vue, \u4e26\u4e14\u60f3\u628a\u4ed6\u5957\u7528\u5728404\u9801\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// src/layouts/Layout2.vue\n\n<template>\n  <main class="main">\n    <section class="w-full mx-auto max-w-[500px]">\n      <h1 class="text-4xl mb-10 mt-5">Layout 2</h1>\n      <router-view />\n    </section>\n  </main>\n</template>\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u5728404\u9801\u9762\u5167\u8a2d\u5b9a yaml \u6a94, \u4f86\u6c7a\u5b9a\u8a72\u9801\u4f7f\u7528\u7684 layout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// [...all].vue\n\n<template>\n  <main class="flex flex-col items-center space-y-3">\n    <span class="text-2xl">\n      404\n    </span>\n    <router-link class="text-xl border p-1" to="/">\u56de\u9996\u9801</router-link>\n  </main>\n</template>\n\n<route lang="yaml">\nmeta:\n  layout: Layout2\n</route> \n')),(0,r.kt)("h3",{id:"yaml-\u5167\u7684-meta"},"yaml \u5167\u7684 meta"),(0,r.kt)("p",null,"meta \u9664\u4e86\u7528\u4f86\u505a layout \u7684\u5207\u63db\u4ee5\u5916, \u4e5f\u80fd\u81ea\u8a02\u503c\u4f86\u505a\u5176\u4ed6\u61c9\u7528(ex. \u8def\u7531\u9a57\u8b49)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// member-only.vue\n\n<template>\n  <h1 class="text-2xl">\n    \u6703\u54e1\u9801\n  </h1>\n</template>\n\n<route lang="yaml">\nmeta:\n  layout: Layout2\n    auth: member-page\n    sss: router-is-good\n</route> \n')),(0,r.kt)("p",null,"\u8a72 meta \u7684\u53ef\u4ee5\u5f9e router.beforeEach \u5167\u7684 to.meta \u770b\u5230\u525b\u525b\u6253\u7684\u7269\u4ef6, \u5982"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"localeDropdown",src:n(9268).Z,width:"1178",height:"60"})),(0,r.kt)("p",null,"\u5982\u6b64\u5c31\u80fd\u7528\u9019\u500b\u503c\u4f86\u9054\u6210\u6703\u54e1\u9801\u4ee5\u53ca\u8a2a\u5ba2\u9801\u9762\u7684\u5207\u63db"))}c.isMDXComponent=!0},9268:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-089a3d04bb6d7fd77d254996a1eee733.jpg"}}]);