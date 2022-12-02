"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[4681],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=o,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8263:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],c={id:"blocks-render-block-view-helper",title:"Render Block View Helper"},a=void 0,s={unversionedId:"legacy/v4/guides/blocks-render-block-view-helper",id:"legacy/v4/guides/blocks-render-block-view-helper",title:"Render Block View Helper",description:"docs-source",source:"@site/docs/legacy/v4/guides/blocks-render-block-view-helper.md",sourceDirName:"legacy/v4/guides",slug:"/legacy/v4/guides/blocks-render-block-view-helper",permalink:"/selfrenew.website/docs/legacy/v4/guides/blocks-render-block-view-helper",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-render-block-view-helper",title:"Render Block View Helper"},sidebar:"docs",previous:{title:"Creating Block from Components",permalink:"/selfrenew.website/docs/legacy/v4/guides/blocks-block-from-components"},next:{title:"GetActions Helper",permalink:"/selfrenew.website/docs/legacy/v4/guides/blocks-get-actions-helper"}},u={},p=[{value:"Usage",id:"usage",level:3}],d={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/blocks/class-blocks.php"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("p",null,"Locate and return template part with passed attributes for a block."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Inside your block view PHP file you'd write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"$this->render_block_view(\n  '/components/heading/heading.php',\n  [\n    'blockClass' => $attributes['blockClass'] ?? '',\n    'heading'    => $attributes['heading'] ?? [],\n  ]\n);\n")),(0,i.kt)("p",null,"In the case you are using libs with dependency injection container, this should be handled by the library and the ",(0,i.kt)("inlineCode",{parentName:"p"},"render_block_view")," method is provided in block view by default."))}b.isMDXComponent=!0}}]);