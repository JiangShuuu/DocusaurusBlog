"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1368],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(t),k=a,u=s["".concat(c,".").concat(k)]||s[k]||m[k]||i;return t?r.createElement(u,o(o({ref:n},p),{},{components:t})):r.createElement(u,o({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1,last_update:{date:"2022/08/07",author:"JohnShuuu"},tags:["Docker","Nginx","server"],title:"\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",description:"\u4f7f\u7528 Docker \u88fd\u4f5c\u975c\u614b\u7db2\u9801\u4e26\u4e14\u57f7\u884c\u5728 server \u4e0a"},o="\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",l={unversionedId:"Docker/\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",id:"Docker/\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",title:"\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",description:"\u4f7f\u7528 Docker \u88fd\u4f5c\u975c\u614b\u7db2\u9801\u4e26\u4e14\u57f7\u884c\u5728 server \u4e0a",source:"@site/docs/Docker/\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image.md",sourceDirName:"Docker",slug:"/Docker/\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",permalink:"/DocusaurusBlog/docs/Docker/\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",draft:!1,tags:[{label:"Docker",permalink:"/DocusaurusBlog/docs/tags/docker"},{label:"Nginx",permalink:"/DocusaurusBlog/docs/tags/nginx"},{label:"server",permalink:"/DocusaurusBlog/docs/tags/server"}],version:"current",lastUpdatedBy:"JohnShuuu",lastUpdatedAt:1659801600,formattedLastUpdatedAt:"2022\u5e748\u67086\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,last_update:{date:"2022/08/07",author:"JohnShuuu"},tags:["Docker","Nginx","server"],title:"\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image",description:"\u4f7f\u7528 Docker \u88fd\u4f5c\u975c\u614b\u7db2\u9801\u4e26\u4e14\u57f7\u884c\u5728 server \u4e0a"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/DocusaurusBlog/docs/category/docker"},next:{title:"Tutorial Intro",permalink:"/DocusaurusBlog/docs/intro"}},c={},d=[{value:"\u524d\u7f6e\u4f5c\u696d",id:"\u524d\u7f6e\u4f5c\u696d",level:2},{value:"\u4f7f\u7528 Node image \u5efa\u7acb\u5c08\u6848 image",id:"\u4f7f\u7528-node-image-\u5efa\u7acb\u5c08\u6848-image",level:2},{value:"1. \u958b\u555f\u5c08\u6848, \u5728\u6839\u76ee\u9304\u5efa\u7acb Dockerfile",id:"1-\u958b\u555f\u5c08\u6848-\u5728\u6839\u76ee\u9304\u5efa\u7acb-dockerfile",level:3},{value:"2. \u5efa\u7acb .dockerignore",id:"2-\u5efa\u7acb-dockerignore",level:3},{value:"3. \u63a5\u8457\u4f7f\u7528 docker \u6307\u4ee4\u57f7\u884c DockerFile \u8173\u672c",id:"3-\u63a5\u8457\u4f7f\u7528-docker-\u6307\u4ee4\u57f7\u884c-dockerfile-\u8173\u672c",level:3},{value:"4. \u5728 docker \u7a0b\u5f0f\u5167\u639b\u8f09 example image",id:"4-\u5728-docker-\u7a0b\u5f0f\u5167\u639b\u8f09-example-image",level:3},{value:"5. \u8a2d\u5b9a port, \u4f4d\u7f6e\u96a8\u610f, \u56e0\u70ba\u6700\u5f8c\u6703\u5c0e\u5411 container port",id:"5-\u8a2d\u5b9a-port-\u4f4d\u7f6e\u96a8\u610f-\u56e0\u70ba\u6700\u5f8c\u6703\u5c0e\u5411-container-port",level:3},{value:"6. \u5230 docker container \u57f7\u884c example image",id:"6-\u5230-docker-container-\u57f7\u884c-example-image",level:3},{value:"7. \u756b\u9762\u67e5\u770b",id:"7-\u756b\u9762\u67e5\u770b",level:3},{value:"\u4f7f\u7528 docker + NGINX \u5efa\u7acb image",id:"\u4f7f\u7528-docker--nginx-\u5efa\u7acb-image",level:2},{value:"\u5efa\u7acb NGINX conf",id:"\u5efa\u7acb-nginx-conf",level:3},{value:"\u5efa\u7acb Dockerfile",id:"\u5efa\u7acb-dockerfile",level:3},{value:"\u57f7\u884c Dockerfile \u8173\u672c",id:"\u57f7\u884c-dockerfile-\u8173\u672c",level:3},{value:"Docker \u7a0b\u5f0f\u5167\u639b\u8f09 example1 image",id:"docker-\u7a0b\u5f0f\u5167\u639b\u8f09-example1-image",level:3},{value:"\u63a5\u8457\u53c3\u7167node\u6b65\u9a5f5, \u639b\u8f09 image \u4e26\u555f\u52d5",id:"\u63a5\u8457\u53c3\u7167node\u6b65\u9a5f5-\u639b\u8f09-image-\u4e26\u555f\u52d5",level:3},{value:"Server name",id:"server-name",level:2},{value:"\u958b\u555f terminal",id:"\u958b\u555f-terminal",level:3},{value:"\u700f\u89bd\u5668\u770b\u7d50\u679c",id:"\u700f\u89bd\u5668\u770b\u7d50\u679c",level:3}],p={toc:d};function m(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5be6\u4f5cdocker-\u88fd\u4f5c\u7db2\u9801-image"},"\u3010\u5be6\u4f5c\u3011Docker \u88fd\u4f5c\u7db2\u9801 image"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u74b0\u5883\u70baMac")),(0,a.kt)("h2",{id:"\u524d\u7f6e\u4f5c\u696d"},"\u524d\u7f6e\u4f5c\u696d"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u672c\u6a5f\u5b89\u88dddocker")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started/"},"https://www.docker.com/get-started/")),(0,a.kt)("p",null,"\u5148\u5230docker\u5b98\u7db2\u5b89\u88dd\u684c\u6a5f\u7a0b\u5f0f, \u4e26\u958b\u555f"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6e96\u5099\u4e00\u500b build \u7684\u8d77\u4f86\u7684\u5c08\u6848")),(0,a.kt)("h2",{id:"\u4f7f\u7528-node-image-\u5efa\u7acb\u5c08\u6848-image"},"\u4f7f\u7528 Node image \u5efa\u7acb\u5c08\u6848 image"),(0,a.kt)("h3",{id:"1-\u958b\u555f\u5c08\u6848-\u5728\u6839\u76ee\u9304\u5efa\u7acb-dockerfile"},"1. \u958b\u555f\u5c08\u6848, \u5728\u6839\u76ee\u9304\u5efa\u7acb Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u8def\u5f91 ./Dockerfile"',title:'"\u8def\u5f91','./Dockerfile"':!0},'FROM node:lts\n\nWORKDIR /app\n\nCOPY . .\n\nRUN yarn install\n\nEXPOSE 3000\n\nCMD [ "yarn", "dev" ]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FROM \u6307\u5b9adocker hub \u7684image\u6a94"),(0,a.kt)("li",{parentName:"ul"},"WORKDIR \u6307\u5b9a\u8def\u5f91"),(0,a.kt)("li",{parentName:"ul"},"COPY \u672c\u5730 DOCKER\u9060\u7aef"),(0,a.kt)("li",{parentName:"ul"},"RUN \u6307\u4ee4"),(0,a.kt)("li",{parentName:"ul"},"EXPOSE \u6307\u5b9a post \u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"CMD \u57f7\u884c\u6307\u4ee4")),(0,a.kt)("h3",{id:"2-\u5efa\u7acb-dockerignore"},"2. \u5efa\u7acb .dockerignore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u8def\u5f91 ./.dockerignore"',title:'"\u8def\u5f91','./.dockerignore"':!0},"dist\nnode_modules\n")),(0,a.kt)("p",null,"\u4f5c\u7528\u5982\u540c gitignore \u9632\u6b62 docker \u5403\u5230\u672c\u5730\u74b0\u5883\u7684 node_modules \u8ddf dist"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"EXPOST \u4f4d\u7f6e\u8981\u8ddf yarn dev \u958b\u555f\u6642\u7684\u4f4d\u7f6e\u4e00\u6a23\u624d\u80fd\u57f7\u884c,\n\u4ee5vite\u8209\u4f8b, \u5f9e vite 3.0 \u958b\u59cb, \u5b98\u65b9\u9810\u8a2d port\u70ba 4173"),(0,a.kt)("p",{parentName:"admonition"},"EXPOST \u5c31\u8981\u8a2d\u6210 4173 \u624d\u80fd\u5728 image \u57f7\u884c\u6642 \u6307\u5411 4173 \u4f4d\u7f6e"),(0,a.kt)("p",{parentName:"admonition"},"\u4e5f\u53ef\u4ee5\u5728 vite.config.js \u8a2d\u5b9a server \u6307\u56de 3000"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-\u7bc4\u4f8b"},"export default defineConfig({\n  plugins: [vue()],\n    \n  // \u52a0\u5165\u9019\u6bb5\n  server: {\n    host: '0.0.0.0',\n    port: 3000\n  }\n})\n"))),(0,a.kt)("h3",{id:"3-\u63a5\u8457\u4f7f\u7528-docker-\u6307\u4ee4\u57f7\u884c-dockerfile-\u8173\u672c"},"3. \u63a5\u8457\u4f7f\u7528 docker \u6307\u4ee4\u57f7\u884c DockerFile \u8173\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"docker build -t example .\n")),(0,a.kt)("h3",{id:"4-\u5728-docker-\u7a0b\u5f0f\u5167\u639b\u8f09-example-image"},"4. \u5728 docker \u7a0b\u5f0f\u5167\u639b\u8f09 example image"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localeDropdown",src:t(9244).Z,width:"1252",height:"710"})),(0,a.kt)("h3",{id:"5-\u8a2d\u5b9a-port-\u4f4d\u7f6e\u96a8\u610f-\u56e0\u70ba\u6700\u5f8c\u6703\u5c0e\u5411-container-port"},"5. \u8a2d\u5b9a port, \u4f4d\u7f6e\u96a8\u610f, \u56e0\u70ba\u6700\u5f8c\u6703\u5c0e\u5411 container port"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localeDropdown",src:t(5470).Z,width:"1261",height:"710"})),(0,a.kt)("h3",{id:"6-\u5230-docker-container-\u57f7\u884c-example-image"},"6. \u5230 docker container \u57f7\u884c example image"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localeDropdown",src:t(2823).Z,width:"1258",height:"707"})),(0,a.kt)("h3",{id:"7-\u756b\u9762\u67e5\u770b"},"7. \u756b\u9762\u67e5\u770b"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localeDropdown",src:t(2491).Z,width:"1475",height:"915"})),(0,a.kt)("p",null,"\u4f7f\u7528 node \u53ef\u4ee5\u6210\u529f\u555f\u52d5\u6211\u5011\u7684\u5c08\u6848, \u4f46\u53ef\u4ee5\u770b\u5230 image \u7684\u6a94\u6848\u9ad8\u9054 1GB \u4ee5\u4e0a, \u56e0\u70ba node server \u9700\u8981\u6574\u500b node_modules \u624d\u80fd\u57f7\u884c"),(0,a.kt)("h2",{id:"\u4f7f\u7528-docker--nginx-\u5efa\u7acb-image"},"\u4f7f\u7528 docker + NGINX \u5efa\u7acb image"),(0,a.kt)("p",null,"\u800c\u5728 server \u904b\u884c\u9019\u6bb5, \u53ef\u4ee5\u4f7f\u7528 NGINX \u4f86\u4ee3\u66ff node, \u8b93 node \u53ea\u9700\u8981\u70ba\u6211\u5011\u628a\u5c08\u6848\u6253\u5305\u6210\u975c\u614b\u6a94\u6848\u5373\u53ef"),(0,a.kt)("h3",{id:"\u5efa\u7acb-nginx-conf"},"\u5efa\u7acb NGINX conf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u8def\u5f91 ./nginx/docker.conf"',title:'"\u8def\u5f91','./nginx/docker.conf"':!0},"worker_processes 4;\n\nevents { worker_connections 1024; }\n\nhttp {\n    server {\n        listen 80;\n        server_name www.example1234.tw;\n        root  /usr/share/nginx/html;\n        include /etc/nginx/mime.types;\n        location / {\n            try_files $uri /index.html;\n        }\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"listen port\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"server_name domain name"),(0,a.kt)("li",{parentName:"ul"},"root \u6a94\u6848\u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"include \u5403\u7684\u6a94\u6848\u985e\u578b"),(0,a.kt)("li",{parentName:"ul"},"location \u57f7\u884c\u6a94\u6848\u540d\u7a31")),(0,a.kt)("h3",{id:"\u5efa\u7acb-dockerfile"},"\u5efa\u7acb Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u8def\u5f91 ./Dockerfile"',title:'"\u8def\u5f91','./Dockerfile"':!0},'# node\nFROM node:lts\n\nWORKDIR /app\n\nCOPY . .\n\nRUN yarn install\n\nRUN yarn build\n\n# nginx\nFROM nginx:alpine\n\nWORKDIR /usr/share/nginx/html\n\nCOPY --from=0 /app/dist .\n\nCOPY ./nginx/docker.conf /etc/nginx/nginx.conf\n\nENTRYPOINT ["nginx", "-g", "daemon off;"]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FROM \u6307\u5b9adocker hub \u7684image\u6a94"),(0,a.kt)("li",{parentName:"ul"},"WORKDIR \u6307\u5b9a\u8def\u5f91"),(0,a.kt)("li",{parentName:"ul"},"COPY \u672c\u5730 DOCKER\u9060\u7aef"),(0,a.kt)("li",{parentName:"ul"},"RUN \u6307\u4ee4"),(0,a.kt)("li",{parentName:"ul"},"EXPOSE \u6307\u5b9a post \u4f4d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"ENTRYPOINT \u6700\u5f8c\u57f7\u884c\u7684\u6307\u4ee4")),(0,a.kt)("admonition",{title:"\u767d\u8a71",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"node \u968e\u6bb5\uff1a\u5148\u6293 node image, \u5728\u6839\u76ee\u9304/app \u5c07\u5c08\u6848\u5167\u7684\u6240\u6709\u6a94\u6848 COPY \u5230 /app , \u518d\u4f86 yarn install \u7136\u5f8c build \u6210\u975c\u614b\u6a94"),(0,a.kt)("p",{parentName:"admonition"},"nginx \u968e\u6bb5\uff1a \u6293 nginx image, \u6307\u5b9a\u76ee\u9304\u70ba /usr/share/nginx/html, COPY \u525b\u525b build \u597d\u7684\u6240\u6709\u6a94\u6848, \u518d COPY \u5c08\u6848\u5167\u7684 nginx docker.conf \u5230 /etc/nginx \u540d\u7a31\u70ba nginx.conf")),(0,a.kt)("admonition",{title:"\u2014from=0 \u610f\u601d",type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"/COPY --from=0 /app/dist .\n")),(0,a.kt)("p",{parentName:"admonition"},"\u7531\u65bcDockerfile\u5167\u53ea\u6703\u5b58\u5728\u6700\u5f8c\u4e00\u500bFROM Image, \u6240\u4ee5\u4f7f\u7528/COPY --from=0 \u4f86\u8907\u88fd build \u597d\u7684\u6a94\u6848\u5230 .\u6839\u76ee\u9304"),(0,a.kt)("p",{parentName:"admonition"},"\u2014from=\u540d\u7a31  \u53ef\u4ee5\u81ea\u8a02, 0\u70ba\u9810\u8a2d, \u540d\u7a31\u5beb\u5728\u7b2c\u4e00\u500bimage\u7684\u5f8c\u9762"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'# \u9019\u884c\nFROM node:lts AS builder  \n\nWORKDIR /app\n\nCOPY . .\n\nRUN yarn install\n\nRUN yarn build\n\nFROM nginx:alpine\n\nWORKDIR /usr/share/nginx/html\n\n# \u9019\u884c\nCOPY --from=builder /app/dist . \n\nCOPY ./nginx/docker.conf /etc/nginx/nginx.conf\n\nENTRYPOINT ["nginx", "-g", "daemon off;"]\n'))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u57f7\u884c-dockerfile-\u8173\u672c"},"\u57f7\u884c Dockerfile \u8173\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"docker build -t example1 .\n")),(0,a.kt)("h3",{id:"docker-\u7a0b\u5f0f\u5167\u639b\u8f09-example1-image"},"Docker \u7a0b\u5f0f\u5167\u639b\u8f09 example1 image"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localeDropdown",src:t(6347).Z,width:"1259",height:"712"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 image \u6a94\u6848\u6bd4\u525b\u525b\u55ae\u7d14\u7528 node \u505a server \u5c0f\u975e\u5e38\u591a"),(0,a.kt)("p",null,"\u56e0\u70ba Dockerfile \u7279\u6027\u662f\u53ea\u7559\u6700\u5f8c\u4e00\u500b image \u8173\u672c, \u6240\u4ee5\u57f7\u884c\u5230 Nginx image\u5f8c node image \u5c31\u6703\u88ab\u522a\u9664,\u4e0d\u6703\u88ab build\u6210 docker image, \u6240\u4ee5\u9019\u908a\u7684 image \u53ea\u6709 Nginx \u7684\u5927\u5c0f"),(0,a.kt)("h3",{id:"\u63a5\u8457\u53c3\u7167node\u6b65\u9a5f5-\u639b\u8f09-image-\u4e26\u555f\u52d5"},"\u63a5\u8457\u53c3\u7167node\u6b65\u9a5f5, \u639b\u8f09 image \u4e26\u555f\u52d5"),(0,a.kt)("h2",{id:"server-name"},"Server name"),(0,a.kt)("p",null,"\u525b\u525b\u5728 Nginx \u6709\u8a2d\u5b9a server_name, \u4f46\u5728docker\u5bb9\u5668\u555f\u52d5\u5f8c, \u8f38\u5165server_name \u537b\u6c92\u8fa6\u6cd5\u5230\u975c\u614b\u6a94\u4f4d\u7f6e, \u9019\u662f\u56e0\u70ba\u672c\u5730\u7684 hosts \u4e26\u6c92\u6709\u6307\u5411"),(0,a.kt)("h3",{id:"\u958b\u555f-terminal"},"\u958b\u555f terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"sudo vim /etc/hosts\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localeDropdown",src:t(1059).Z,width:"898",height:"598"}),"\n:wq \u5132\u5b58"),(0,a.kt)("h3",{id:"\u700f\u89bd\u5668\u770b\u7d50\u679c"},"\u700f\u89bd\u5668\u770b\u7d50\u679c"),(0,a.kt)("p",null,"\u8f38\u5165 ",(0,a.kt)("a",{parentName:"p",href:"http://www.example1234.tw:port"},"www.example1234.tw:port")),(0,a.kt)("p",null,"port \u70ba\u525b\u525b\u5728 docker \u555f\u52d5image \u8a2d\u5b9a\u7684 port\u4f4d\u7f6e"))}m.isMDXComponent=!0},9244:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/1-619cf7fdfe3cec4c7f03f1a207fb7de2.jpg"},5470:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/2-0bd68f6decbee27065ab0a62a06b0cb8.jpg"},2823:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/3-b29c1e307051c9d15b1ee88baa07d9e1.jpg"},2491:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/4-c659a7882e62b926d6d5dbf40c4ed8e2.jpg"},6347:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/5-28ad947ea60224d8af5b41f7d050bddc.jpg"},1059:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/6-27f833c81f09274fa6b0e5828f30c433.jpg"}}]);