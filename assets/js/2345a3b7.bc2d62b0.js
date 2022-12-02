"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[7485],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(r),d=l,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4282:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),i=["components"],o={id:"rest-intro",title:"Rest Intro"},s=void 0,p={unversionedId:"legacy/v4/guides/rest-intro",id:"legacy/v4/guides/rest-intro",title:"Rest Intro",description:"docs-source",source:"@site/docs/legacy/v4/guides/rest-intro.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/rest-intro",permalink:"/selfrenew.website/docs/legacy/v4/guides/rest-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"rest-intro",title:"Rest Intro"},sidebar:"docs",previous:{title:"Menu",permalink:"/selfrenew.website/docs/legacy/v4/guides/menu"},next:{title:"Field Example",permalink:"/selfrenew.website/docs/legacy/v4/guides/rest-field-example"}},c={},u=[{value:"Interface-callable-field.php",id:"interface-callable-fieldphp",level:2},{value:"Interface-callable-route.php",id:"interface-callable-routephp",level:2},{value:"Interface-route-security.php",id:"interface-route-securityphp",level:2},{value:"Interface-route.php",id:"interface-routephp",level:2},{value:"Class-base-field.php",id:"class-base-fieldphp",level:2},{value:"Class-base-route.php",id:"class-base-routephp",level:2}],f={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/master/src/rest"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"When you are working on a more complex WordPress project at one point, you will have to make a new Rest API route or add a new API field to the existing route, or something else."),(0,a.kt)("p",null,"We have prepared 4 interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interface-callable-field.php"),(0,a.kt)("li",{parentName:"ul"},"interface-callable-route.php"),(0,a.kt)("li",{parentName:"ul"},"interface-route-security.php"),(0,a.kt)("li",{parentName:"ul"},"interface-route.php")),(0,a.kt)("p",null,"and 2 abstract classes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"class-base-field.php"),(0,a.kt)("li",{parentName:"ul"},"class-base-route.php")),(0,a.kt)("p",null,"In general, you will use only what you need from the provided options."),(0,a.kt)("p",null,"Full details of Rest API implementation can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/rest"},"Eightshift-libs Rest")),(0,a.kt)("h2",{id:"interface-callable-fieldphp"},"Interface-callable-field.php"),(0,a.kt)("p",null,"The interface used in Rest API Field for providing callback method."),(0,a.kt)("h2",{id:"interface-callable-routephp"},"Interface-callable-route.php"),(0,a.kt)("p",null,"The interface used in Rest API Route for providing callback method."),(0,a.kt)("h2",{id:"interface-route-securityphp"},"Interface-route-security.php"),(0,a.kt)("p",null,"The interface used in Rest API Route for providing authentification methods."),(0,a.kt)("h2",{id:"interface-routephp"},"Interface-route.php"),(0,a.kt)("p",null,"The interface used in Rest API Route for providing general options for your route like variables for ",(0,a.kt)("inlineCode",{parentName:"p"},"READABLE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATABLE"),", etc..."),(0,a.kt)("h2",{id:"class-base-fieldphp"},"Class-base-field.php"),(0,a.kt)("p",null,"Abstract class used in Rest API Field for updating existing filed, or providing a new field to the existing Rest API."),(0,a.kt)("p",null,"Please check the implementation details in ",(0,a.kt)("a",{parentName:"p",href:"/selfrenew.website/docs/legacy/v4/guides/rest-field-example"},"this example"),"."),(0,a.kt)("h2",{id:"class-base-routephp"},"Class-base-route.php"),(0,a.kt)("p",null,"Abstract class used in Rest API Route for adding a new Rest API route."),(0,a.kt)("p",null,"Please check the implementation details in ",(0,a.kt)("a",{parentName:"p",href:"/selfrenew.website/docs/legacy/v4/guides/rest-route-example"},"this example"),"."))}d.isMDXComponent=!0}}]);