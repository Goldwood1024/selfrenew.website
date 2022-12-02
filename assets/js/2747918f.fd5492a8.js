"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[9612],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3205:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Initial setup and first steps",description:"This blog post describes how to set up Eightshift Boilerplate theme, and covers some of the most common issues that may occur",slug:"initial-setup",authors:"obradovic",tags:["eightshift","boilerplate","setup"],hide_table_of_contents:!1},l=void 0,u={permalink:"/selfrenew.website/blog/initial-setup",source:"@site/blog/2022-01-20-initial-setup.md",title:"Initial setup and first steps",description:"This blog post describes how to set up Eightshift Boilerplate theme, and covers some of the most common issues that may occur",date:"2022-01-20T00:00:00.000Z",formattedDate:"January 20, 2022",tags:[{label:"eightshift",permalink:"/selfrenew.website/blog/tags/eightshift"},{label:"boilerplate",permalink:"/selfrenew.website/blog/tags/boilerplate"},{label:"setup",permalink:"/selfrenew.website/blog/tags/setup"}],readingTime:2.585,hasTruncateMarker:!0,authors:[{name:"Igor Obradovi\u0107",title:"WordPress Engineer",url:"https://github.com/iobrado",imageURL:"https://avatars.githubusercontent.com/u/23059501?v=4",key:"obradovic"}],frontMatter:{title:"Initial setup and first steps",description:"This blog post describes how to set up Eightshift Boilerplate theme, and covers some of the most common issues that may occur",slug:"initial-setup",authors:"obradovic",tags:["eightshift","boilerplate","setup"],hide_table_of_contents:!1},prevItem:{title:"Components and blocks",permalink:"/selfrenew.website/blog/components-and-blocks"}},p={authorsImageUrls:[void 0]},c=[{value:"Setup",id:"setup",level:2},{value:"Getting to know Eightshift dev tools",id:"getting-to-know-eightshift-dev-tools",level:2},{value:"What&#39;s next in store?",id:"whats-next-in-store",level:2}],h={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As is often the case when trying out something new, you might encounter some hiccups. You're trying out our Eightshift Boilerplate, but can't get it to work? Worry not, we'll go through the setup and the most common issues that may occur."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Last updated: 23rd August, 2022")))),(0,i.kt)("p",null,"If you haven't already, be sure to read our official ",(0,i.kt)("a",{parentName:"p",href:"/docs/welcome"},"Eightshift Docs"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To create Eightshift theme, navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-content/themes")," in your project and type the following in the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-wp-project\n")),(0,i.kt)("p",null,"Just follow the instructions and wait for the theme to download."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup - initial prompt",src:n(4585).Z,width:"770",height:"674"})),(0,i.kt)("p",null,"OK, you went through the process, filled out all required information, but the theme still isn't working. There are a few more instructions in the terminal on what to do next, but you may have skipped them. While the principle ",(0,i.kt)("strong",{parentName:"p"},'"6 hours of debugging can save you 5 minutes of reading documentation"')," is fun, sometimes it's just not worth it. Here's what you should do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"run ",(0,i.kt)("inlineCode",{parentName:"li"},"wp theme activate your-theme-name")," to activate your new theme"),(0,i.kt)("li",{parentName:"ul"},"navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"wp-content/themes/your-theme-name")),(0,i.kt)("li",{parentName:"ul"},"try running ",(0,i.kt)("inlineCode",{parentName:"li"},"wp boilerplate --help")," to check if our WP CLI boilerplate commands work"),(0,i.kt)("li",{parentName:"ul"},"for easiest initial setup, run ",(0,i.kt)("inlineCode",{parentName:"li"},"wp boilerplate init theme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm start")," should trigger automatically with the previous command. If it doesn't, you can run it manually to finish the theme build process")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup - instructions",src:n(7264).Z,width:"1046",height:"352"})),(0,i.kt)("p",null,"Congratulations, you've set up your Eightshift theme!"),(0,i.kt)("h2",{id:"getting-to-know-eightshift-dev-tools"},"Getting to know Eightshift dev tools"),(0,i.kt)("p",null,'After successfully setting up the theme and going through files, you\'ll notice this file structure is quite different from traditional WordPress themes and you may think to yourself: "Oh wow, what did I get myself into?"'),(0,i.kt)("p",null,"While it may look scary and confusing at first, once you get used to the structure, you'll see the benefits. More about that will be covered in future posts, where we'll walk you through some basics of developing with Eightshift Boilerplate."),(0,i.kt)("p",null,"You may want to try a few of our WP CLI commands to add another component, block, or service class. Running ",(0,i.kt)("inlineCode",{parentName:"p"},"wp boilerplate --help")," will give you a list of commands and their short description. If you need even more details about a specific command, you can type, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"wp boilerplate create post-type --help")),(0,i.kt)("p",null,"The final tip in this post is related to troubleshooting. Maybe you tried to add a new class or a new feature to one of the existing blocks. And now the site has crashed. In tech support, the number 1 question is ",(0,i.kt)("strong",{parentName:"p"},'"Have you tried turning it off and on again?"'),". In our case, the number 1 question is:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Have you tried ",(0,i.kt)("inlineCode",{parentName:"p"},"composer dump-autoload")," and re-running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),"?")),(0,i.kt)("h2",{id:"whats-next-in-store"},"What's next in store?"),(0,i.kt)("p",null,"That's all for this post. In future posts we'll go through some more how-to examples like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the difference between components and blocks"),(0,i.kt)("li",{parentName:"ul"},"downloading components and blocks from our Storybook with WP-CLI"),(0,i.kt)("li",{parentName:"ul"},"adding new features to components and blocks"),(0,i.kt)("li",{parentName:"ul"},"adding custom fonts to your project"),(0,i.kt)("li",{parentName:"ul"},"adding custom queries which we'll use in one of our blocks"),(0,i.kt)("li",{parentName:"ul"},"and many more...")),(0,i.kt)("p",null,"So stay tuned."))}m.isMDXComponent=!0},4585:function(e,t,n){t.Z=n.p+"assets/images/setup-1-77c6f478d2da13e18bce3e75d0fed759.png"},7264:function(e,t,n){t.Z=n.p+"assets/images/setup-2-745acae37073506170213de74ca9bf2a.png"}}]);