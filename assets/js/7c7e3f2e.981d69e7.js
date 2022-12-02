"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[8925],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1715:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],p={id:"blocks-wrapper",title:"Wrapper"},s=void 0,l={unversionedId:"legacy/v6/basics/blocks-wrapper",id:"legacy/v6/basics/blocks-wrapper",title:"Wrapper",description:"docs-source",source:"@site/docs/legacy/v6/basics/blocks-wrapper.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/blocks-wrapper",permalink:"/selfrenew.website/docs/legacy/v6/basics/blocks-wrapper",draft:!1,tags:[],version:"current",frontMatter:{id:"blocks-wrapper",title:"Wrapper"},sidebar:"docs",previous:{title:"Component in a Block",permalink:"/selfrenew.website/docs/legacy/v6/basics/blocks-component-in-block"},next:{title:"Variations",permalink:"/selfrenew.website/docs/legacy/v6/basics/blocks-variations"}},c={},u=[{value:"Where can I find wrapper options?",id:"where-can-i-find-wrapper-options",level:2},{value:"Additional development options",id:"additional-development-options",level:2},{value:"wrapperUse",id:"wrapperuse",level:3},{value:"wrapperUseShowControl",id:"wrapperuseshowcontrol",level:3},{value:"wrapperUseSimple",id:"wrapperusesimple",level:3},{value:"wrapperUseSimpleShowControl",id:"wrapperusesimpleshowcontrol",level:3},{value:"wrapperDisable",id:"wrapperdisable",level:3},{value:"wrapperParentClass",id:"wrapperparentclass",level:3},{value:"Wrapper limitations",id:"wrapper-limitations",level:2}],d={toc:u};function h(e){var t=e.components,p=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"}))),(0,a.kt)("p",null,"The wrapper is our best and most powerful feature. In a nutshell, the wrapper is nothing more than a high order component (parent component)."),(0,a.kt)("p",null,"When setting up block registration, we made it so that every block view (PHP part) passes through the wrapper component before it is registered. This gives us the ability to set multiple shared attributes in one component."),(0,a.kt)("p",null,"The wrapper is designed to be the ultimate top-level component that controls how your block behaves in the website layout. The wrapper is a sort of a 'section' in traditional builders. By default, you can control a whole lot of stuff, but there is an ability to add your custom attributes and fine-tune the wrapper to your project's needs."),(0,a.kt)("h2",{id:"where-can-i-find-wrapper-options"},"Where can I find wrapper options?"),(0,a.kt)("p",null,"When you open your block editor in the sidebar before every blocks options you will see a ",(0,a.kt)("inlineCode",{parentName:"p"},"layout")," panel that controls the wrapper options:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wrapper Closed",src:o(3374).Z,width:"770",height:"664"})),(0,a.kt)("p",null,"We also made a helper button that describes what each wrapper options does when the layout panel is open:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wrapper Help Button",src:o(1332).Z,width:"315",height:"187"})),(0,a.kt)("p",null,"Here are some of the descriptions that we created but you can add your own icons and options to this modal by providing the additions properties to the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelpModal")," component:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Wrapper Modal",src:o(7685).Z,width:"764",height:"740"})),(0,a.kt)("h2",{id:"additional-development-options"},"Additional development options"),(0,a.kt)("p",null,"Along with the provided details and descriptions for the standard options in the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelpModal")," we have some development specific options for you to check."),(0,a.kt)("h3",{id:"wrapperuse"},"wrapperUse"),(0,a.kt)("p",null,"This attribute controls the usage of the wrapper component. It behaves the same way as described in ",(0,a.kt)("a",{parentName:"p",href:"blocks-component-in-block#i-dont-need-all-the-component-options-in-my-block"},"this chapter"),"."),(0,a.kt)("h3",{id:"wrapperuseshowcontrol"},"wrapperUseShowControl"),(0,a.kt)("p",null,"This attribute controls whether you will see the options for block use in the block editor. It behaves the same way as described in ",(0,a.kt)("a",{parentName:"p",href:"blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-components-options-in-my-block"},"this chapter"),"."),(0,a.kt)("h3",{id:"wrapperusesimple"},"wrapperUseSimple"),(0,a.kt)("p",null,"We wrapped some of the options in a specific condition and we call it ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapperUseSimple"),". In general, this attribute is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," when you only want the simplified options on your block. Natively, it is used inside all of the inner blocks in the column block because we don't need wrappers inside wrappers inside wrappers (and so on). It's a good rule of thumb to use a simple wrapper in all of the inner blocks."),(0,a.kt)("h3",{id:"wrapperusesimpleshowcontrol"},"wrapperUseSimpleShowControl"),(0,a.kt)("p",null,"This attribute controls whether you are going to see options in the block editor to use the simple option. It behaves the same way as described in ",(0,a.kt)("a",{parentName:"p",href:"blocks-component-in-block#i-dont-want-my-editor-to-be-able-to-change-components-options-in-my-block"},"this chapter"),"."),(0,a.kt)("h3",{id:"wrapperdisable"},"wrapperDisable"),(0,a.kt)("p",null,"This attribute disables the wrapper completely. When this attribute is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you will not have any wrapper options in your block."),(0,a.kt)("h3",{id:"wrapperparentclass"},"wrapperParentClass"),(0,a.kt)("p",null,"This attribute is interesting to use if, for example, you have a carousel block with inner blocks. To provide the markup necessary for the carousel script to work, you need to add some items selector (a div). With this key, you can pass a parent item class, and all of your items will be wrapped with this selector and a class."),(0,a.kt)("h2",{id:"wrapper-limitations"},"Wrapper limitations"),(0,a.kt)("p",null,"In wrapper you ",(0,a.kt)("strong",{parentName:"p"},"can't")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," key in the manifest to automaticity add additional components like you can in the blocks or components. If you want to add component to a wrapper you must manually add it the old fashion way."))}h.isMDXComponent=!0},3374:function(e,t,o){t.Z=o.p+"assets/images/wrapper-closed-cf5276dbd44b54931486dc8c63d08743.jpg"},1332:function(e,t,o){t.Z=o.p+"assets/images/wrapper-help-5f70394bd47e204edefd06868bcfd8e9.jpg"},7685:function(e,t,o){t.Z=o.p+"assets/images/wrapper-modal-8c975183699306c5f2665c05b3c6a506.jpg"}}]);