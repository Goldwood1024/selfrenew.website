"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5582],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return b}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],s={id:"blocks-global-manifest",title:"Global Manifest"},i=void 0,c={unversionedId:"basics/blocks-global-manifest",id:"basics/blocks-global-manifest",title:"Global Manifest",description:"docs-source",source:"@site/docs/basics/blocks-global-manifest.md",sourceDirName:"basics",slug:"/basics/blocks-global-manifest",permalink:"/selfrenew.website/docs/basics/blocks-global-manifest",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-global-manifest",title:"Global Manifest"},sidebar:"docs",previous:{title:"Structure",permalink:"/selfrenew.website/docs/basics/blocks-structure"},next:{title:"Block Structure",permalink:"/selfrenew.website/docs/basics/block-structure"}},u={},b=[{value:"Namespace",id:"namespace",level:3},{value:"Background and foreground",id:"background-and-foreground",level:3},{value:"Global variables",id:"global-variables",level:3},{value:"Attributes",id:"attributes",level:3}],p={toc:b};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"Global manifest is used to provide all the global configuration to the blocks and components, and much more."),(0,a.kt)("p",null,"Currently, our default global manifest looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "eightshift-boilerplate",\n  "background": "#FBF9FF",\n  "foreground": "#9973E3",\n  "globalVariables": {\n    "customBlocksName": "eightshift-block",\n    "maxCols": 12,\n    "baseFont": "Inter",\n    "zIndex": {\n      "header": 100,\n      "drawer": 99,\n      "overlay": 98\n    },\n    "breakpoints": {\n      "mobile": 480,\n      "tablet": 960,\n      "desktop": 1920,\n      "large": 1921\n    },\n    "containers": {\n      "default": "66rem"\n    },\n    "gutters": {\n      "none": "0",\n      "default": "1.25rem",\n      "big": "2.5rem"\n    },\n    "sectionSpacing": {\n      "min": -300,\n      "max": 300,\n      "step": 10\n    },\n    "sectionInSpacing": {\n      "min": 0,\n      "max": 300,\n      "step": 10\n    },\n    "colors": [\n      {\n        "name": "Primary",\n        "slug": "primary",\n        "color": "#9973E3"\n      },\n      {\n        "name": "Black",\n        "slug": "black",\n        "color": "#000000"\n      },\n      {\n        "name": "Light",\n        "slug": "light",\n        "color": "#CCCCCC"\n      },\n      {\n        "name": "White",\n        "slug": "white",\n        "color": "#FFFFFF"\n      },\n      {\n        "name": "Eightshift",\n        "slug": "eightshift",\n        "color": "#0D3636"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"As you can see, we have some global configuration for blocks and some SCSS variables. Along with these default keys, here you can define anything you need for the project."),(0,a.kt)("h3",{id:"namespace"},"Namespace"),(0,a.kt)("p",null,"All blocks must have a valid block name to be registered. A valid block consists of namespace and block name, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"eightshift-boilerplate/heading\n")),(0,a.kt)("p",null,"To remove the need to write namespace multiple times across multiple blocks, we have defined the namespace in the global manifest, and we use it in the block registration process."),(0,a.kt)("p",null,"If you want to define multiple namespaces for your blocks in a single folder, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"block-structure"},"block-structure")," chapter for more details."),(0,a.kt)("h3",{id:"background-and-foreground"},"Background and foreground"),(0,a.kt)("p",null,"Just like a namespace, we use the same logic for icons background and foreground when selecting a block from the list. Here you define global background and foreground for all your custom blocks."),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"block-structure"},"block-structure")," chapter for more details on how to override global background and foreground your blocks icon."),(0,a.kt)("h3",{id:"global-variables"},"Global variables"),(0,a.kt)("p",null,"These are all the global settings you can use in JavaScript, SCSS, and PHP files. We have covered this topic in more detail in the ",(0,a.kt)("a",{parentName:"p",href:"blocks-styles"},"block-styles")," chapter."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"We don't have this key in the example, but you can set the default attributes in this file, and they will be applied to all the blocks."),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"blocks-attributes"},"blocks attributes")," chapter for more details."))}f.isMDXComponent=!0}}]);