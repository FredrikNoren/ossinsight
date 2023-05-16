"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:1,title:"Workshop: OSS Insight Lite",sidebar_label:"Introduction"},s=void 0,a={unversionedId:"workshop/ossinsight-lite/introduction",id:"workshop/ossinsight-lite/introduction",title:"Workshop: OSS Insight Lite",description:"Introduction",source:"@site/docs/workshop/ossinsight-lite/introduction.md",sourceDirName:"workshop/ossinsight-lite",slug:"/workshop/ossinsight-lite/introduction",permalink:"/docs/workshop/ossinsight-lite/introduction",draft:!1,editUrl:"https://github.com/pingcap/ossinsight/tree/main/web/docs/workshop/ossinsight-lite/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Workshop: OSS Insight Lite",sidebar_label:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/workshop"},next:{title:"Step 1: Get TiDB connection info",permalink:"/docs/workshop/ossinsight-lite/get-tidb-connection-info"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Step by Step",id:"step-by-step",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"By joining this workshop, you can get:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A free MySQL-Compatible serverless database with analytical capability"),(0,i.kt)("li",{parentName:"ol"},"A well-designed personal/repos GitHub activities analysis tool")),(0,i.kt)("p",null,"Live Demo: ",(0,i.kt)("a",{parentName:"p",href:"http://ossinsight-lite.vercel.app/"},"http://ossinsight-lite.vercel.app/")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/features/actions"},"GitHub Action")," - free"),(0,i.kt)("li",{parentName:"ol"},"TiDB Serverless - free"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://vercel.com/"},"Vercel")," - free")),(0,i.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,i.kt)("p",null,"It will take about 1 hour to build your own dashboard."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workshop/ossinsight-lite/get-tidb-connection-info"},"Step 1: Get TiDB connection info")," (10 min)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workshop/ossinsight-lite/creating-a-personal-access-token"},"Step 2: Creating a personal access token")," (5 min)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workshop/ossinsight-lite/setting-github-action"},"Step 3: Setting GitHub Action")," (20 min)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/workshop/ossinsight-lite/get-insights-with-sql"},"Step 4: Get Insights with SQL")," (10 min)")))}u.isMDXComponent=!0}}]);