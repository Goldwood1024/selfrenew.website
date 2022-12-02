"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[89],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return f}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={id:"fonts",title:"Fonts"},c=void 0,l={unversionedId:"basics/fonts",id:"basics/fonts",title:"Fonts",description:"docs-source",source:"@site/docs/basics/fonts.md",sourceDirName:"basics",slug:"/basics/fonts",permalink:"/selfrenew.website/docs/basics/fonts",draft:!1,tags:[],version:"current",frontMatter:{id:"fonts",title:"Fonts"},sidebar:"docs",previous:{title:"Writing Styles",permalink:"/selfrenew.website/docs/basics/writing-styles"},next:{title:"Browsersync",permalink:"/selfrenew.website/docs/basics/browser-sync"}},u={},f=[],p={toc:f};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,s.kt)("p",null,"Fonts can be added to your project in multiple ways, depending on your project's needs. In general, if you can use fonts from an external source like Google Fonts, use that approach because the fonts are loaded smartly. On the other hand, if you have fonts that are added to your project, below are the steps to follow to make them available in the project."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Put your font files in this folder: ",(0,s.kt)("inlineCode",{parentName:"li"},"assets/fonts"),"."),(0,s.kt)("li",{parentName:"ul"},"Import each file in the ",(0,s.kt)("inlineCode",{parentName:"li"},"assets/fonts/index.js")," so that Webpack knows how to process these files in its build process."),(0,s.kt)("li",{parentName:"ul"},"In your project, load the font family using font-face ",(0,s.kt)("a",{parentName:"li",href:"/sass"},"method"),". We recommend that you create a new file ",(0,s.kt)("inlineCode",{parentName:"li"},"assets/styles/parts/utils/_defaults.scss")," and put everything in that file.")),(0,s.kt)("p",null,"You can read ",(0,s.kt)("a",{parentName:"p",href:"/blog/adding-fonts"},"Igor's blog post about adding fonts to your project"),"."))}d.isMDXComponent=!0}}]);