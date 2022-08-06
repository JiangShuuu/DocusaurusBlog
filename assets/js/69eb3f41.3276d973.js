"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,h=u["".concat(d,".").concat(f)]||u[f]||p[f]||r;return n?a.createElement(h,s(s({ref:t},o),{},{components:n})):a.createElement(h,s({ref:t},o))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2,last_update:{date:"2022/07/25",author:"JohnShuuu"},tags:["JS","DOM"],title:"\u3010\u57fa\u790e\u3011DOM \u7236\u5b50\u95dc\u4fc2",description:"HTML DOM \u6587\u4ef6\u7269\u4ef6\u6a21\u578b\uff0c\u70baJS\u7528\u4f86\u64cd\u4f5cHTML\u7269\u4ef6\u7684\u5fc5\u5099\u529f\u80fd\u3002"},s="DOM \u7236\u5b50\u95dc\u4fc2",l={unversionedId:"JS/DOM \u7236\u5b50\u95dc\u4fc2",id:"JS/DOM \u7236\u5b50\u95dc\u4fc2",title:"\u3010\u57fa\u790e\u3011DOM \u7236\u5b50\u95dc\u4fc2",description:"HTML DOM \u6587\u4ef6\u7269\u4ef6\u6a21\u578b\uff0c\u70baJS\u7528\u4f86\u64cd\u4f5cHTML\u7269\u4ef6\u7684\u5fc5\u5099\u529f\u80fd\u3002",source:"@site/docs/JS/DOM \u7236\u5b50\u95dc\u4fc2.md",sourceDirName:"JS",slug:"/JS/DOM \u7236\u5b50\u95dc\u4fc2",permalink:"/DocusaurusBlog/docs/JS/DOM \u7236\u5b50\u95dc\u4fc2",draft:!1,tags:[{label:"JS",permalink:"/DocusaurusBlog/docs/tags/js"},{label:"DOM",permalink:"/DocusaurusBlog/docs/tags/dom"}],version:"current",lastUpdatedBy:"JohnShuuu",lastUpdatedAt:1658678400,formattedLastUpdatedAt:"2022\u5e747\u670824\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,last_update:{date:"2022/07/25",author:"JohnShuuu"},tags:["JS","DOM"],title:"\u3010\u57fa\u790e\u3011DOM \u7236\u5b50\u95dc\u4fc2",description:"HTML DOM \u6587\u4ef6\u7269\u4ef6\u6a21\u578b\uff0c\u70baJS\u7528\u4f86\u64cd\u4f5cHTML\u7269\u4ef6\u7684\u5fc5\u5099\u529f\u80fd\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u3010\u57fa\u790e\u3011DOM \u57fa\u672c\u64cd\u4f5c",permalink:"/DocusaurusBlog/docs/JS/DOM \u57fa\u672c\u64cd\u4f5c"},next:{title:"NGINX",permalink:"/DocusaurusBlog/docs/category/nginx"}},d={},c=[{value:"\u5be6\u4f8b",id:"\u5be6\u4f8b",level:2},{value:"\u5047\u8a2d\u671f\u671b\u4e0b\u5716\u80fd\u5920\u9054\u6210\u5e7e\u4ef6\u4e8b",id:"\u5047\u8a2d\u671f\u671b\u4e0b\u5716\u80fd\u5920\u9054\u6210\u5e7e\u4ef6\u4e8b",level:3},{value:"1.\u7528\u4e00\u500b\u9663\u5217\u6e32\u67d3\u8868\u55ae\u756b\u9762",id:"1\u7528\u4e00\u500b\u9663\u5217\u6e32\u67d3\u8868\u55ae\u756b\u9762",level:3},{value:"\u6b64\u6642\u7684HTML\u6548\u679c\u5c31\u6703\u8ddf\u9019\u500b\u4e00\u6a23",id:"\u6b64\u6642\u7684html\u6548\u679c\u5c31\u6703\u8ddf\u9019\u500b\u4e00\u6a23",level:4},{value:"2.\u6309\u589e\u52a0\u6e1b\u5c11\u9215\uff0c\u53ef\u4ee5\u64cd\u4f5c\u6578\u5b57",id:"2\u6309\u589e\u52a0\u6e1b\u5c11\u9215\u53ef\u4ee5\u64cd\u4f5c\u6578\u5b57",level:3},{value:"3.\u6309\u5783\u573e\u6876\u53ef\u4ee5\u522a\u9664\u6574\u884c",id:"3\u6309\u5783\u573e\u6876\u53ef\u4ee5\u522a\u9664\u6574\u884c",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],o={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dom-\u7236\u5b50\u95dc\u4fc2"},"DOM \u7236\u5b50\u95dc\u4fc2"),(0,i.kt)("p",null,"DOM\u7684\u64cd\u4f5c\u5728\u7db2\u9801\u975e\u5e38\u7684\u5e38\u898b\uff0c\u8209\u51e1\u5e33\u865f\u5bc6\u78bc\u9a57\u8b49\u3001PO\u6587\u3001\u8ffd\u8e64\u3001\u5bc4\u4fe1\u3001\u52a0\u5165\u6700\u611b\u2026\u7b49\u529f\u80fd\uff0c\u90fd\u662fDOM\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u800c\u7576HTML\u7d50\u69cb\u66f4\u70ba\u8907\u96dc\u6642\uff0c\u5247\u5728\u64cd\u4f5cDOM\u6642\u9700\u6e05\u695a\u7684\u77e5\u9053parent\u8ddfchildren\u7684\u7236\u5b50\u95dc\u4fc2\u3002"),(0,i.kt)("h2",{id:"\u5be6\u4f8b"},"\u5be6\u4f8b"),(0,i.kt)("h3",{id:"\u5047\u8a2d\u671f\u671b\u4e0b\u5716\u80fd\u5920\u9054\u6210\u5e7e\u4ef6\u4e8b"},"\u5047\u8a2d\u671f\u671b\u4e0b\u5716\u80fd\u5920\u9054\u6210\u5e7e\u4ef6\u4e8b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7528\u4e00\u500b\u9663\u5217\u6e32\u67d3\u8868\u55ae\u756b\u9762"),(0,i.kt)("li",{parentName:"ol"},"\u6309\u589e\u52a0\u6e1b\u5c11\u626d\uff0c\u53ef\u4ee5\u64cd\u4f5c\u6578\u5b57"),(0,i.kt)("li",{parentName:"ol"},"\u6309\u5783\u573e\u6876\u53ef\u4ee5\u522a\u9664\u6574\u884c")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"localeDropdown",src:n(846).Z,width:"1271",height:"635"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="HTML"',title:'"HTML"'},'<div class="container">\n  <h1 class="my-5">Big Family</h1>\n  <table class="table table-bordered table-hover text-center">\n    <thead>\n      <tr>\n        <th>\u6210\u54e1</th>\n        <th>\u7537\u751f</th>\n        <th>\u5973\u751f</th>\n        <th>\u5bf5\u7269</th>\n      </tr>\n    </thead>\n    <tbody id="data-panel">\n      \x3c!-- display data here --\x3e\n    </tbody>\n  </table>\n</div>\n')),(0,i.kt)("h3",{id:"1\u7528\u4e00\u500b\u9663\u5217\u6e32\u67d3\u8868\u55ae\u756b\u9762"},"1.\u7528\u4e00\u500b\u9663\u5217\u6e32\u67d3\u8868\u55ae\u756b\u9762"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JS"',title:'"JS"'},'// Step1 : \u8a2d\u5b9a\u8cc7\u6599\u9663\u5217\nlet players = [\n  { name: "\u5bb6\u5ead\u4e00", pts: 0, reb: 0, ast: 0},\n  { name: "\u5bb6\u5ead\u4e8c", pts: 0, reb: 0, ast: 0},\n  { name: "\u5bb6\u5ead\u4e09", pts: 0, reb: 0, ast: 0},\n];\n\n// Step2 : \u6307\u5b9a\u8981\u65b0\u589e\u5340\u57df\u7684class\u6216id\nconst dataPanel = document.querySelector("#data-panel");\n\n// Step3 : \u5b9a\u7fa9\u6e32\u67d3\u8868\u683cfunction\nfunction displayPlayerList(dataList) {\n  // \u8a2d\u5b9a\u7a7a\u5b57\u4e32\n  let dataContent = "";\n    \n  // \u5c07\u50b3\u5165Data\u7528forEach\u904d\u6b77\u6240\u6709\u8cc7\u6599\n  dataList.forEach((dataList) => {\n    dataContent += `<tr>`;\n        \n    // \u5982\u679c\u50b3\u5165\u8cc7\u6599\u7684key\u662fname\uff0c\u5247\u4e0d\u589e\u52a0+-\u7b26\u865f\n    for (let i in dataList) {\n      if (i === "name") {\n        dataContent += `<td>${dataList.name}</td>`;\n      } else {\n        dataContent += `\n          <td><span style="font-size: 25px">${dataList[i]}</span>\n            <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n            <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n          </td>`;\n      }\n    }\n    dataContent += `<th><i class="delete fa fa-trash"></i></th>`\n    dataContent += `<tr>`;\n  });\n\n  // \u6700\u5f8c\u7528innerHTML\u52a0\u5165\u6307\u5b9aid\u5340\u57df(dataPanel)\n  dataPanel.innerHTML = dataContent;\n}\n\n// \u50b3\u5165\u6307\u5b9a\u8cc7\u6599\ndisplayPlayerList(players);\n')),(0,i.kt)("h4",{id:"\u6b64\u6642\u7684html\u6548\u679c\u5c31\u6703\u8ddf\u9019\u500b\u4e00\u6a23"},"\u6b64\u6642\u7684HTML\u6548\u679c\u5c31\u6703\u8ddf\u9019\u500b\u4e00\u6a23"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="\u6b64\u6642\u7684HTML"',title:'"\u6b64\u6642\u7684HTML"'},'<div class="container">\n  <h1 class="my-5">Big Family</h1>\n  <table class="table table-bordered table-hover text-center">\n    <thead>\n      <tr>\n        <th>\u6210\u54e1</th>\n        <th>\u5bb6\u5ead\u4e00</th>\n        <th>\u5bb6\u5ead\u4e8c</th>\n        <th>\u5bb6\u5ead\u4e09</th>\n        <th>\u5bb6\u5ead\u56db</th>\n      </tr>\n    </thead>\n    <tbody id="data-panel">\n      \x3c!-- display data here --\x3e\n      <tr>\n        <td>\u7537\u751f</td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n      </tr> \n      \n      <tr>\n        <td>\u5973\u751f</td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n      </tr> \n      \n      <tr>\n        <td>\u5bf5\u7269</td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n        <td><span style="font-size: 25px">0</span>\n          <i class="fa fa-plus-circle up" aria-hidden="true"></i>\n          <i class="fa fa-minus-circle down" aria-hidden="true"></i>\n        </td>\n      </tr> \n    </tbody>\n  </table>\n</div>\n')),(0,i.kt)("h3",{id:"2\u6309\u589e\u52a0\u6e1b\u5c11\u9215\u53ef\u4ee5\u64cd\u4f5c\u6578\u5b57"},"2.\u6309\u589e\u52a0\u6e1b\u5c11\u9215\uff0c\u53ef\u4ee5\u64cd\u4f5c\u6578\u5b57"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"localeDropdown",src:n(7119).Z,width:"600",height:"322"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JS"',title:'"JS"'},'// \u5728dataPanel\u639b\u4e0a\u76e3\u807d\u5668\ndataPanel.addEventListener("click", (event) => {\n  const target = event.target;\n\n  // \u9ede\u5230 + - \u7b26\u865f\u624d\u57f7\u884c\n  if (target.matches(".up") || target.matches(".down")) {\n    \n    // \u9078\u53d6 "\u5206\u6578" \uff0c\u4e5f\u5c31\u662f\u52a0\u6e1b\u7b26\u865f\u7684\u7236\u5143\u7d20\u88e1\u7684\u7b2c\u4e00\u500b\u5b50\u5143\u7d20\n    let scoreName = target.parentElement.firstElementChild;\n    \n    // \u5b9a\u7fa9 "\u5206\u6578" \u88e1\u7684 text \uff0c\u4e5f\u5c31\u662f\u6578\u5b57\n    let score = +target.parentElement.firstElementChild.innerText;\n    \n    // \u8a2d\u5b9a\u52a0\u6e1b\u5224\u65b7\n    if (target.matches(".up")) {\n      score += 1;\n    } else if (score <= 0) {\n      score = 0; \n    } else {\n      score -= 1;\n    }\n    \n    //\u6700\u5f8c\u67d3\u756b\u9762\u7684\u5206\u6578\n    scoreName.innerText = score;\n  } \n});\n')),(0,i.kt)("h3",{id:"3\u6309\u5783\u573e\u6876\u53ef\u4ee5\u522a\u9664\u6574\u884c"},"3.\u6309\u5783\u573e\u6876\u53ef\u4ee5\u522a\u9664\u6574\u884c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"localeDropdown",src:n(7888).Z,width:"600",height:"322"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="JS"',title:'"JS"'},"// \u4e00\u6a23\u5728dataPanel\u88e1\u52a0\u4e00\u500bif\u5224\u65b7\u5f0f\uff0c\u9078\u53d6\u6574\u500bparent\u5340\u584a\nif (target.classList.contains('delete')) {\n    target.parentElement.parentElement.remove()\n  }\n")),(0,i.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,i.kt)("p",null,"\u5728\u9032\u884cDOM\u64cd\u4f5c\u7684\u6642\u5019\uff0c\u5f88\u5e38\u641e\u4e0d\u6e05\u695a\u73fe\u5728\u5728\u54ea\u500b\u4f4d\u7f6e\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u5728\u76e3\u807d\u5668\u88e1\uff0c\u5584\u7528console.log\u7684\u529f\u80fd\u770b\u770b\u76ee\u524d\u7684\u4f4d\u7f6e\u5728\u54ea\u3002"))}p.isMDXComponent=!0},846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DOMP-d503e0a6a6437850556a7d3fd5bca8cd.jpeg"},7119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DOMP01-f7b87f69cdf6543baf0243935d9befff.gif"},7888:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DOMP02-a04d756c351e16fc1f3e8cebcfa7d8a6.gif"}}]);