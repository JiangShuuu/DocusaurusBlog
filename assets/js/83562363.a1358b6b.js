"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1,last_update:{date:"2022/07/25",author:"JohnShuuu"},tags:["JS","DOM"]},o="DOM \u57fa\u672c\u64cd\u4f5c",i={unversionedId:"JS/DOM \u57fa\u672c\u64cd\u4f5c",id:"JS/DOM \u57fa\u672c\u64cd\u4f5c",title:"DOM \u57fa\u672c\u64cd\u4f5c",description:"DOM \u5168\u540d(Document Object Model)\uff0c\u70baJS\u7528\u4f86\u64cd\u4f5cHTML\u7269\u4ef6\u7684\u5fc5\u5099\u529f\u80fd\u3002",source:"@site/docs/JS/DOM \u57fa\u672c\u64cd\u4f5c.md",sourceDirName:"JS",slug:"/JS/DOM \u57fa\u672c\u64cd\u4f5c",permalink:"/DocusaurusBlog/docs/JS/DOM \u57fa\u672c\u64cd\u4f5c",draft:!1,tags:[{label:"JS",permalink:"/DocusaurusBlog/docs/tags/js"},{label:"DOM",permalink:"/DocusaurusBlog/docs/tags/dom"}],version:"current",lastUpdatedBy:"JohnShuuu",lastUpdatedAt:1658678400,formattedLastUpdatedAt:"2022\u5e747\u670824\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,last_update:{date:"2022/07/25",author:"JohnShuuu"},tags:["JS","DOM"]},sidebar:"tutorialSidebar",previous:{title:"JS",permalink:"/DocusaurusBlog/docs/category/js"},next:{title:"DOM \u7236\u5b50\u95dc\u4fc2",permalink:"/DocusaurusBlog/docs/JS/DOM \u7236\u5b50\u95dc\u4fc2"}},d={},s=[{value:"\u6a39\u72c0\u7d50\u69cb",id:"\u6a39\u72c0\u7d50\u69cb",level:2},{value:"\u7a0b\u5f0f\u78bc\u7bc4\u4f8b",id:"\u7a0b\u5f0f\u78bc\u7bc4\u4f8b",level:3},{value:"\u6848\u4f8b\u5be6\u4f5c",id:"\u6848\u4f8b\u5be6\u4f5c",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dom-\u57fa\u672c\u64cd\u4f5c"},"DOM \u57fa\u672c\u64cd\u4f5c"),(0,a.kt)("p",null,"DOM \u5168\u540d(Document Object Model)\uff0c\u70baJS\u7528\u4f86\u64cd\u4f5cHTML\u7269\u4ef6\u7684\u5fc5\u5099\u529f\u80fd\u3002"),(0,a.kt)("p",null,"DOM \u63d0\u4f9b\u4e86\u6587\u4ef6\uff08\u6a39\uff09\u7684\u7d50\u69cb\u5316\u8868\u793a\u6cd5\u4ee5\u53ca\u64c1\u6709\u5c6c\u6027\u8207\u51fd\u5f0f\u7684\u7bc0\u9ede\u8207\u7269\u4ef6\u7d44\u6210\u7684\u7d50\u69cb\u5316\u8868\u793a\u3002"),(0,a.kt)("p",null,"\u7bc0\u9ede\u4e5f\u53ef\u4ee5\u9644\u52a0\u4e8b\u4ef6\u8655\u7406\u7a0b\u5e8f\uff0c\u4e00\u65e6\u89f8\u767c\u4e8b\u4ef6\u5c31\u6703\u57f7\u884c\u8655\u7406\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u672c\u8cea\u4e0a\uff0c\u5b83\u5c07\u7db2\u9801\u8207\u7a0b\u5f0f\u8a9e\u8a00\u9023\u7d50\u5728\u4e00\u8d77\u3002"),(0,a.kt)("h2",{id:"\u6a39\u72c0\u7d50\u69cb"},"\u6a39\u72c0\u7d50\u69cb"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:n(2268).Z,width:"2298",height:"946"})),(0,a.kt)("h3",{id:"\u7a0b\u5f0f\u78bc\u7bc4\u4f8b"},"\u7a0b\u5f0f\u78bc\u7bc4\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\u4ee5\u4e0a\u5716\u70ba\u4f8b"',title:'"\u4ee5\u4e0a\u5716\u70ba\u4f8b"'},'<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>document</title>\n  </head>\n\n  <body>\n    <h1>Hello, World</h1>\n    <p>this is a <em>simple</em> website</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"\u56e0HTML\u8b80\u53d6\u70ba\u7531\u4e0a\u81f3\u4e0b\uff0cDOM tree\u6703\u628a\u6240\u6709\u7684\u7bc0\u9ede\u62c6\u958b\uff0c\u8b8a\u6210\u4e00\u500b\u6a39\u72c0\u7d50\u69cb\uff0c\u65b9\u4fbf\u7528JavaScript\u4fee\u6539DOM\u7d50\u69cb\u4e2d\u7684\u4efb\u4e00\u7bc0\u9ede\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HTML \u88ab\u700f\u89bd\u5668\u89e3\u6790\u4e4b\u5f8c\uff0c\u8b8a\u6210\u4e00\u53eb\u505a DOM \u7684\u7d50\u69cb"),(0,a.kt)("li",{parentName:"ul"},"JavaScript \u53ef\u4ee5\u4fee\u6539 DOM \u7d50\u69cb\u4e2d\u4efb\u610f\u7bc0\u9ede"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u5011\u5be6\u969b\u5728\u8996\u7a97\u88e1\u770b\u5230\u7684\u7d50\u679c\uff0c\u662f JavaScript \u64cd\u4f5c\u4ee5\u5f8c\u7684\u7d50\u679c")),(0,a.kt)("h2",{id:"\u6848\u4f8b\u5be6\u4f5c"},"\u6848\u4f8b\u5be6\u4f5c"),(0,a.kt)("p",null,"\u5047\u8a2d\u6211\u671f\u671b\u5728\u8f38\u5165\u5b8c\u5f8c\u6309\u4e0bAdd\uff0c\u80fd\u65b0\u589e\u81f3Todo\u4e0b\u3002\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localeDropdown",src:n(2934).Z,width:"480",height:"258"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="m-5">\n  <header class="mb-3">\n    <h4>My Todo</h4>\n    <div class="form-inline">\n      <input type="text" placeholder="add item" id="new-todo" class="form-control mr-2">\n      <button id="add-btn" class="btn btn-info">Add</button>\n      <div class="invalid-feedback">try again!</div>\n    </div>\n  </header>\n\n  <h3>Todo</h3>\n  <ul id="my-todo" class="list-unstyled">\n    \x3c!-- display todos here --\x3e\n  </ul>\n  <h3>Done</h3>\n  <ul id="done" class="list-unstyled">\n    \x3c!-- display todos here --\x3e\n  </ul>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JS\u64cd\u4f5cDOM"',title:'"JS\u64cd\u4f5cDOM"'},'// \u7b2c\u4e00\u6b65\uff0c\u6293\u51faHTML\u6307\u5b9a\u6a19\u7c64\u7684 id \u6216 class\nconst list = document.querySelector("#my-todo");\nconst addBtn = document.querySelector("#add-btn");\nconst input = document.querySelector("#new-todo");\n\n\n// \u7b2c\u4e8c\u6b65\uff0c\u5b9a\u7fa9todo\u88e1\u7684\u9663\u5217\nlet todos = [\n  "Hit the gym",\n  "Read a book",\n];\n\nfor (let todo of todos) {\n  addItem(todo);\n}\n\n// \u7b2c\u4e09\u6b65\uff0c\u5b9a\u7fa9\u65b0\u589efunction\nfunction addItem (text) {\n  let newItem = document.createElement("li");\n  newItem.innerHTML = `\n    <label for="todo">${text}</label>\n    <i class="delete fa fa-trash"></i>\n  `;\n  list.appendChild(newItem);\n    input.value = ""\n}\n\n// \u7b2c\u56db\u6b65\uff0c\u5728\u6307\u5b9a\u6a19\u7c64\u639b\u4e0a addEventListener(\u76e3\u807d\u5668)\naddBtn.addEventListener("click", addItem(inputValue));\n// keypress\u53ef\u4ee5\u64cd\u4f5c\u9375\u76e4\u4e0a\u7684\u6848\u4ef6\uff0c\u4f86\u9054\u6210function\ninput.addEventListener("keypress", (event) => {\n  if (event.key === "Enter") {\n    addItem(inputValue);\n  }\n});\n')),(0,a.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,a.kt)("p",null,"DOM\u7684\u64cd\u4f5c\u5728\u7db2\u9801\u975e\u5e38\u7684\u5e38\u898b\uff0c\u8209\u51e1\u8f38\u5165\u5e33\u865f\u5bc6\u78bc\u3001PO\u6587\u3001\u8ffd\u8e64\u3001\u5bc4\u4fe1\u3001\u52a0\u5165\u6700\u611b...\u7b49\u529f\u80fd\uff0c\u90fd\u662fDOM\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u800c\u7576HTML\u7d50\u69cb\u66f4\u70ba\u8907\u96dc\u6642\uff0c\u5247\u5728\u64cd\u4f5cDOM\u6642\u9700\u6e05\u695a\u7684\u77e5\u9053parent\u8ddfchildren\u7684\u7236\u5b50\u95dc\u4fc2\u3002"))}u.isMDXComponent=!0},2934:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/DOM01-21913ccb18f9ceb70cfa866b2c058d9c.gif"},2268:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/DOM02-901e74a2a83be3914d09575e34a53570.png"}}]);