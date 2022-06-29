"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4918],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91435:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_position:0,title:"Overview",sidebar_label:"Overview"},s=void 0,p={unversionedId:"overview",id:"overview",title:"Overview",description:"If you want to build Another Insight tool with another data source rather than GitHub, then you're in the right place. This workshop will tell you it's not too hard to get insights from big data, expecially big data with realtime insert/update.",source:"@site/workshop/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/workshop/overview",editUrl:"https://github.com/pingcap/ossinsight/tree/main/workshop/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Overview",sidebar_label:"Overview"},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/workshop/mini-ossinsight/introduction"}},u=[{value:"What you will learn",id:"what-you-will-learn",children:[{value:"1. Methodology to setup an insight system",id:"1-methodology-to-setup-an-insight-system",children:[],level:3},{value:"2. Knowledge about HTAP database",id:"2-knowledge-about-htap-database",children:[],level:3}],level:2},{value:"Join Online Workshops",id:"join-online-workshops",children:[],level:2},{value:"Join Offline Workshop",id:"join-offline-workshop",children:[],level:2}],h={toc:u};function c(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to build ",(0,a.kt)("strong",{parentName:"p"},"Another Insight")," tool with another data source rather than GitHub, then you're in the right place. This workshop will tell you it's not too hard to get insights from big data, expecially ",(0,a.kt)("strong",{parentName:"p"},"big data with realtime insert/update"),"."),(0,a.kt)("h2",{id:"what-you-will-learn"},"What you will learn"),(0,a.kt)("h3",{id:"1-methodology-to-setup-an-insight-system"},"1. Methodology to setup an insight system"),(0,a.kt)("p",null,"Usually, with enough abstration, there will be 3 steps to setup an insight system like OSS Insight:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find its Data Srouce (both historical data and new realtime data)"),(0,a.kt)("li",{parentName:"ol"},"Load Data to TiDB (or any other HTAP database)"),(0,a.kt)("li",{parentName:"ol"},"Get Insights with SQL")),(0,a.kt)("h3",{id:"2-knowledge-about-htap-database"},"2. Knowledge about HTAP database"),(0,a.kt)("p",null,"Use HTAP database here is suitable. HTAP stands for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/dev/explore-htap"},"Hybrid Transactional and Analytical Processing"),", it is ",(0,a.kt)("strong",{parentName:"p"},"SUPER EASY")," to handle both:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"acting as a ",(0,a.kt)("strong",{parentName:"li"},"primary")," rdbms to ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("u",null,"serve requests in high concurrency"))," and ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("u",null,"insert/update in realtime"))),(0,a.kt)("li",{parentName:"ul"},"providing ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("u",null,"analytical ability to get insights")))),(0,a.kt)("p",null,"There is a 10-minute post to explain ",(0,a.kt)("a",{parentName:"p",href:"/blog/why-we-choose-tidb-to-support-ossinsight"},"why we choose tidb to support ossinsight"),'. but for saving time we put a picture below which shows the architecture difference between "before" and "after" we use TiDB:'),(0,a.kt)("center",null,(0,a.kt)("img",{width:"70%",src:n(23770).Z,alt:"Simplified architecture after we use TiDB"})),(0,a.kt)("center",null,(0,a.kt)("i",null,"before and after we use TiDB")),(0,a.kt)("p",null,"That means, we would never need to learn  traditional ",(0,a.kt)("inlineCode",{parentName:"p"},"big data")," skills such as: MySQL+sharding technologies -> industrail etl tools -> olap databases->MySQL(write back), and then setup/manage these infrastructures, but just get a ",(0,a.kt)("inlineCode",{parentName:"p"},"T+1")," analysis result finally, "),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can load data to MySQL instead of TiDB, but you should will meet with performance issues soon..."))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Well, for saving time, join the bellow workshops asap, each one will follow the above 3 steps!  \ud83c\udfc3\ud83c\udfc3\ud83c\udfc3"),(0,a.kt)("h2",{id:"join-online-workshops"},"Join Online Workshops"),(0,a.kt)("p",null,"We have implemented the ",(0,a.kt)("inlineCode",{parentName:"p"},"mini OSS Insights")," workshop, and found the posibility of the other 3 workshops, you can try them by yourself with their historical and realtime api (a bit of a challenge, but not too hard :-)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/workshop/mini-ossinsight/introduction"},"mini OSS Insight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/workshop/twitter-insight"},"Twitter Insight")," ",(0,a.kt)("em",{parentName:"li"},"Not ready")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/workshop/stackoverflow-insight"},"Stack Overflow Insight")," ",(0,a.kt)("em",{parentName:"li"},"Not ready")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/workshop/cryptocurrency-insight"},"Cryptocurrency Insight")," ",(0,a.kt)("em",{parentName:"li"},"Not ready"))),(0,a.kt)("h2",{id:"join-offline-workshop"},"Join Offline Workshop"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/workshop/offline"},"Learn More ","\xbb")))}c.isMDXComponent=!0},23770:function(e,t,n){t.Z=n.p+"assets/images/how-different-db-handle-github-data-92e620aac66788ec6e978e1cfaeed7dc.jpg"}}]);