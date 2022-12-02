"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[9758],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"blocks-component-manifest",title:"Component Manifest"},l=void 0,c={unversionedId:"legacy/v7/basics/blocks-component-manifest",id:"legacy/v7/basics/blocks-component-manifest",title:"Component Manifest",description:"docs-source",source:"@site/docs/legacy/v7/basics/blocks-component-manifest.md",sourceDirName:"legacy/v7/basics",slug:"/legacy/v7/basics/blocks-component-manifest",permalink:"/selfrenew.website/docs/legacy/v7/basics/blocks-component-manifest",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-component-manifest",title:"Component Manifest"},sidebar:"docs",previous:{title:"Block Manifest",permalink:"/selfrenew.website/docs/legacy/v7/basics/block-manifest"},next:{title:"Attributes",permalink:"/selfrenew.website/docs/legacy/v7/basics/blocks-attributes"}},p={},u=[{value:"Example",id:"example",level:3},{value:"componentName",id:"componentname",level:3},{value:"title",id:"title",level:3},{value:"componentClass",id:"componentclass",level:3},{value:"example",id:"example-1",level:3},{value:"attributes",id:"attributes",level:3},{value:"options",id:"options",level:3},{value:"components",id:"components",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"A component manifest is a bit different than the block manifest. The main difference is that the component manifest is a fully custom feature, and it is only here to provide a way to store configuration data and share it with multiple files in your project."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "componentName": "heading",\n  "title": "Heading",\n  "componentClass": "heading",\n  "example": {\n    "attributes": {\n      "headingContent": "This is heading",\n      "headingLevel": 2,\n      "headingSize": "default",\n      "headingUse": true\n    }\n  },\n  "attributes": {\n    "headingContent": {\n      "type": "string"\n    },\n    "headingLevel": {\n      "type": "integer",\n      "default": 2\n    },\n    "headingSize": {\n      "type": "string",\n      "default": "default"\n    },\n    "headingUse": {\n      "type": "boolean",\n      "default": true\n    }\n  },\n  "options": {\n    "sizes": [\n      {\n        "label": "Default (30px)",\n        "value": "default"\n      },\n      {\n        "label": "Big (50px)",\n        "value": "big"\n      }\n    ],\n    "aligns": [\n      "left",\n      "center",\n      "right"\n    ],\n    "colors": [\n      "primary",\n      "black"\n    ]\n  },\n  "components": {}\n}\n')),(0,a.kt)("h3",{id:"componentname"},"componentName"),(0,a.kt)("p",null,"This key is the most important one. We use this key to specify the component attributes prefix. When it's used correctly, we are able to change the attributes prefix depending on the component name passed from the parent component or block."),(0,a.kt)("h3",{id:"title"},"title"),(0,a.kt)("p",null,"This key is used to provide the label for all your component options and provide the storybook's automatic story title."),(0,a.kt)("h3",{id:"componentclass"},"componentClass"),(0,a.kt)("p",null,"These keys are used to provide a single point of reference for a component name. You'll use this key to provide a prefix for all the CSS selectors in your component."),(0,a.kt)("h3",{id:"example-1"},"example"),(0,a.kt)("p",null,"The same as in the blocks manifest. Please check ",(0,a.kt)("a",{parentName:"p",href:"block-manifest"},"this chapter")," for more details."),(0,a.kt)("h3",{id:"attributes"},"attributes"),(0,a.kt)("p",null,"For more details please check ",(0,a.kt)("a",{parentName:"p",href:"blocks-attributes"},"this chapter"),"."),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("p",null,"These keys are used to provide a single point of reference for component options used in the options part. If you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectControl")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"ColorSelector")," component, you can set all your options here and use those options in the options section and story for mocking components. Please check ",(0,a.kt)("a",{parentName:"p",href:"blocks-component-in-block"},"this chapter")," for more details."),(0,a.kt)("h3",{id:"components"},"components"),(0,a.kt)("p",null,"The same as in the blocks manifest. Please check ",(0,a.kt)("a",{parentName:"p",href:"block-manifest"},"this chapter")," for more details."))}f.isMDXComponent=!0}}]);