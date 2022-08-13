"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),N=i,m=d["".concat(u,".").concat(N)]||d[N]||p[N]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,last_update:{date:"2022/08/07",author:"JohnShuuu"},tags:["NGINX","ubuntu","server"],title:"\u3010\u5be6\u4f5c\u3011NGINX \u57fa\u790e\u5b89\u88dd",description:"\u4f7f\u7528 NGINX \u505a\u53cd\u5411\u4ee3\u7406\u3002"},l="\u3010\u5be6\u4f5c\u3011NGINX \u57fa\u790e\u5b89\u88dd",o={unversionedId:"NGINX/NGINX \u57fa\u790e\u5b89\u88dd",id:"NGINX/NGINX \u57fa\u790e\u5b89\u88dd",title:"\u3010\u5be6\u4f5c\u3011NGINX \u57fa\u790e\u5b89\u88dd",description:"\u4f7f\u7528 NGINX \u505a\u53cd\u5411\u4ee3\u7406\u3002",source:"@site/docs/NGINX/NGINX \u57fa\u790e\u5b89\u88dd.md",sourceDirName:"NGINX",slug:"/NGINX/NGINX \u57fa\u790e\u5b89\u88dd",permalink:"/DocusaurusBlog/docs/NGINX/NGINX \u57fa\u790e\u5b89\u88dd",draft:!1,tags:[{label:"NGINX",permalink:"/DocusaurusBlog/docs/tags/nginx"},{label:"ubuntu",permalink:"/DocusaurusBlog/docs/tags/ubuntu"},{label:"server",permalink:"/DocusaurusBlog/docs/tags/server"}],version:"current",lastUpdatedBy:"JohnShuuu",lastUpdatedAt:1659801600,formattedLastUpdatedAt:"2022\u5e748\u67086\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,last_update:{date:"2022/08/07",author:"JohnShuuu"},tags:["NGINX","ubuntu","server"],title:"\u3010\u5be6\u4f5c\u3011NGINX \u57fa\u790e\u5b89\u88dd",description:"\u4f7f\u7528 NGINX \u505a\u53cd\u5411\u4ee3\u7406\u3002"},sidebar:"tutorialSidebar",previous:{title:"NGINX",permalink:"/DocusaurusBlog/docs/category/nginx"},next:{title:"Docker",permalink:"/DocusaurusBlog/docs/category/docker"}},u={},s=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u5b89\u88dd NGINX (\u4ee5 Ubuntu \u7cfb\u7d71\u70ba\u4f8b\uff09",id:"\u5b89\u88dd-nginx-\u4ee5-ubuntu-\u7cfb\u7d71\u70ba\u4f8b",level:3},{value:"\u9023\u9032\u4e3b\u6a5f, \u5f9egithub\u6293\u6a94\u6848\u4e0b\u4f86\u5b89\u88dd, \u4e26\u4e14build\u597d",id:"\u9023\u9032\u4e3b\u6a5f-\u5f9egithub\u6293\u6a94\u6848\u4e0b\u4f86\u5b89\u88dd-\u4e26\u4e14build\u597d",level:3},{value:"\u9032\u5165Nginx\u8cc7\u6599\u593e\u8a2d\u5b9a\u6a94\u6848 \u4e26\u5efa\u7acb\u8edf\u9023\u7d50\u5f8c \u91cd\u555f",id:"\u9032\u5165nginx\u8cc7\u6599\u593e\u8a2d\u5b9a\u6a94\u6848-\u4e26\u5efa\u7acb\u8edf\u9023\u7d50\u5f8c-\u91cd\u555f",level:3},{value:"1. cd /etc/nginx/sites-available",id:"1-cd-etcnginxsites-available",level:4},{value:"2. sudo vim new-test.conf",id:"2-sudo-vim-new-testconf",level:4},{value:"3. \u5132\u5b58\u5f8c, \u56de\u5230\u4e0a\u4e00\u9801\u5efa\u7acb\u8edf\u9023\u7d50",id:"3-\u5132\u5b58\u5f8c-\u56de\u5230\u4e0a\u4e00\u9801\u5efa\u7acb\u8edf\u9023\u7d50",level:4},{value:"4. \u6e2c\u8a66\u5f8c\u91cd\u555f",id:"4-\u6e2c\u8a66\u5f8c\u91cd\u555f",level:4},{value:"5. \u8f38\u5165\u7db2\u5740 test.newtest.com \u67e5\u770b",id:"5-\u8f38\u5165\u7db2\u5740-testnewtestcom-\u67e5\u770b",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5be6\u4f5cnginx-\u57fa\u790e\u5b89\u88dd"},"\u3010\u5be6\u4f5c\u3011NGINX \u57fa\u790e\u5b89\u88dd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u74b0\u5883\u70baubuntu")),(0,i.kt)("p",null,"NGINX \u662f\u4e00\u6b3e\u73fe\u5728\u5e38\u898b\u7684 Web Server, \u4e3b\u8981\u529f\u7528\u6709\u53cd\u5411\u4ee3\u7406\u3001\u8ca0\u8f09\u5e73\u8861 (Load Balance)\u3001\u5feb\u53d6\u4ee5\u53ca HTTPS \u6191\u8b49\u7b49\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u60f3\u50cfNGINX\u70ba\u98ef\u5e97\u7684\u6ac3\u6aaf, \u7576\u9867\u5ba2(\u4f7f\u7528\u8005) \u4f86\u5230\u98ef\u5e97(\u4f3a\u670d\u5668IP), \u7d93\u7531\u6ac3\u6aaf(NGINX) \u5f15\u5c0e\u5230\u4e0d\u540c\u7684\u623f\u9593(Server)"),(0,i.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u5b89\u88dd-nginx-\u4ee5-ubuntu-\u7cfb\u7d71\u70ba\u4f8b"},"\u5b89\u88dd NGINX (\u4ee5 Ubuntu \u7cfb\u7d71\u70ba\u4f8b\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// \u66f4\u65b0\u5b89\u88dd\u5957\u4ef6\nsudo apt-get update\n\n// \u5b89\u88dd Nginx\napt-get install nginx\n\n// \u78ba\u8a8d\u5b89\u88dd\nnginx -v\n")),(0,i.kt)("h3",{id:"\u9023\u9032\u4e3b\u6a5f-\u5f9egithub\u6293\u6a94\u6848\u4e0b\u4f86\u5b89\u88dd-\u4e26\u4e14build\u597d"},"\u9023\u9032\u4e3b\u6a5f, \u5f9egithub\u6293\u6a94\u6848\u4e0b\u4f86\u5b89\u88dd, \u4e26\u4e14build\u597d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. cd \u4e0b\u8f09\u4f4d\u7f6e\n2. git clone xxx\n3. cd xxx\n4. npm install\n5. npm run build\n")),(0,i.kt)("h3",{id:"\u9032\u5165nginx\u8cc7\u6599\u593e\u8a2d\u5b9a\u6a94\u6848-\u4e26\u5efa\u7acb\u8edf\u9023\u7d50\u5f8c-\u91cd\u555f"},"\u9032\u5165Nginx\u8cc7\u6599\u593e\u8a2d\u5b9a\u6a94\u6848 \u4e26\u5efa\u7acb\u8edf\u9023\u7d50\u5f8c \u91cd\u555f"),(0,i.kt)("h4",{id:"1-cd-etcnginxsites-available"},"1. cd /etc/nginx/sites-available"),(0,i.kt)("h4",{id:"2-sudo-vim-new-testconf"},"2. sudo vim new-test.conf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="new-test.conf"',title:'"new-test.conf"'},"server {\n  listen 80;\n\n  listen [::]:80;\n \n  server_name test.newtest.com;\n\n  root  /home/new_file/xxx/dist;\n\n  index index.html;\n  \n  gzip            on;\n  gzip_types      text/plain application/xml text/css application/javascript;\n  gzip_min_length 1000;\n \n  location / {\n     try_files $uri $uri/ /index.html;\n  }\n \n  return 301 http://test.newtest.com$request_uri;\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"server_name \u6307\u5b9a\u5c0e\u5411 server domain \u540d\u7a31"),(0,i.kt)("li",{parentName:"ul"},"root \u6307\u5b9a\u8b80\u53d6\u975c\u614b\u6a94\u4f4d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"index \u975c\u614b\u6a94\u540d"),(0,i.kt)("li",{parentName:"ul"},"gzip \u58d3\u7e2e\u6a94\u6848"),(0,i.kt)("li",{parentName:"ul"},"location try_file\u53ef\u4ee5\u8b93Nginx\u9032\u884c\u4e00\u7cfb\u5217\u7684\u6a94\u6848\u6216\u8cc7\u6599\u593e\u7684\u67e5\u627e\uff0c\u4e26\u53ef\u5728\u6700\u5f8c\u653e\u7f6e\u4e00\u500bURI\u8b93Nginx\u9032\u884c\u5167\u90e8\u91cd\u65b0\u5c0e\u5411\u3002"),(0,i.kt)("li",{parentName:"ul"},"return 301 \u8f49\u5740")),(0,i.kt)("h4",{id:"3-\u5132\u5b58\u5f8c-\u56de\u5230\u4e0a\u4e00\u9801\u5efa\u7acb\u8edf\u9023\u7d50"},"3. \u5132\u5b58\u5f8c, \u56de\u5230\u4e0a\u4e00\u9801\u5efa\u7acb\u8edf\u9023\u7d50"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="sudo ln -s \u201c\u751f\u7522\u76ee\u6a19\u201d \u201c\u7522\u751f\u76ee\u7684\u5730\u201d"',title:'"sudo',ln:!0,"-s":!0,"\u201c\u751f\u7522\u76ee\u6a19\u201d":!0,'\u201c\u7522\u751f\u76ee\u7684\u5730\u201d"':!0},"sudo ln -s /etc/nginx/sites-available/new-test.conf /etc/nginx/sites-enable/new-test.conf\n")),(0,i.kt)("h4",{id:"4-\u6e2c\u8a66\u5f8c\u91cd\u555f"},"4. \u6e2c\u8a66\u5f8c\u91cd\u555f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// NGINX \u6e2c\u8a66\nsudo nginx -t \n\n// \u91cd\u555f NGINX\nsudo service nginx restart\n")),(0,i.kt)("h4",{id:"5-\u8f38\u5165\u7db2\u5740-testnewtestcom-\u67e5\u770b"},"5. \u8f38\u5165\u7db2\u5740 test.newtest.com \u67e5\u770b"))}p.isMDXComponent=!0}}]);