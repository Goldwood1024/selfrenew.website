"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5751],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"tips-tricks",title:"Tips & Tricks"},l=void 0,p={unversionedId:"basics/tips-tricks",id:"basics/tips-tricks",title:"Tips & Tricks",description:"Since we are creating our projects using this setup, we are going to share our tips and tricks for faster development, easier debugging and some cool ideas we had along the way.",source:"@site/docs/basics/tips-tricks.md",sourceDirName:"basics",slug:"/basics/tips-tricks",permalink:"/selfrenew.website/docs/basics/tips-tricks",draft:!1,tags:[],version:"current",frontMatter:{id:"tips-tricks",title:"Tips & Tricks"},sidebar:"docs",previous:{title:"PHP",permalink:"/selfrenew.website/docs/basics/helpers-php"},next:{title:"Version 7 to 8",permalink:"/selfrenew.website/docs/migrations/7-8"}},c={},u=[{value:"Always disable cache when you are writing block editor components",id:"always-disable-cache-when-you-are-writing-block-editor-components",level:3},{value:"When to restart your Webpack watch?",id:"when-to-restart-your-webpack-watch",level:3},{value:"Using boilerplate and boilerplate-plugin in the same project",id:"using-boilerplate-and-boilerplate-plugin-in-the-same-project",level:3},{value:"Internationalization (I18n) and localization (L10n)",id:"internationalization-i18n-and-localization-l10n",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Since we are creating our projects using this setup, we are going to share our tips and tricks for faster development, easier debugging and some cool ideas we had along the way."),(0,r.kt)("h3",{id:"always-disable-cache-when-you-are-writing-block-editor-components"},"Always disable cache when you are writing block editor components"),(0,r.kt)("p",null,"When you are writing a JavaScript part of the block you should always have your browser inspector open and checkbox checked for disabling browser cache in the network tab. WordPress core is caching JS files and you may not always get the latest changes of your code in the editor. This way you can be sure that everything is up to date."),(0,r.kt)("h3",{id:"when-to-restart-your-webpack-watch"},"When to restart your Webpack watch?"),(0,r.kt)("p",null,"As we described in the previous chapters Webpack watch is used to monitor all your code changes and update the compiled files with your latest changes. We have set our folder structure in a way so we can have files automatically included in the build. However, there are some times you must restart your Webpack watch:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding a new block/component."),(0,r.kt)("li",{parentName:"ul"},"Changing the block/component folder name."),(0,r.kt)("li",{parentName:"ul"},"Changing any of the file names in the block/component folder."),(0,r.kt)("li",{parentName:"ul"},"Adding/removing a JS package to the project."),(0,r.kt)("li",{parentName:"ul"},"Changing the webpack, babel, eslint, stylelint configuration."),(0,r.kt)("li",{parentName:"ul"},"Changing the project domain name for Browser sync."),(0,r.kt)("li",{parentName:"ul"},"Adding/removing a new JS or SCSS file in the global assets folder.")),(0,r.kt)("h3",{id:"using-boilerplate-and-boilerplate-plugin-in-the-same-project"},"Using boilerplate and boilerplate-plugin in the same project"),(0,r.kt)("p",null,"When you are using one boilerplate for a theme and another for a plugin keep in mind that you will have to do some changes. We would recommend leaving the theme as is and making changes to the plugin. Here are some of the changes you should make:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If using manifest, you should update the ",(0,r.kt)("inlineCode",{parentName:"li"},"MANIFEST_ITEM")," filter name to something else."),(0,r.kt)("li",{parentName:"ul"},"If using blocks, change the default category of all your plugin blocks."),(0,r.kt)("li",{parentName:"ul"},"If using blocks, update all blocks to a new category in each block ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.json")," file."),(0,r.kt)("li",{parentName:"ul"},"If using blocks, update the block namespace in the global block ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.json")," file."),(0,r.kt)("li",{parentName:"ul"},"If using blocks, change the blocks' background and foreground color (Not necessary but it would be a good UX)."),(0,r.kt)("li",{parentName:"ul"},"If using blocks, make your own implementation of the Components::render method so you don't need to pass project location on every usage (example below)."),(0,r.kt)("li",{parentName:"ul"},"Update the default project imposter namespace in the ",(0,r.kt)("inlineCode",{parentName:"li"},"composer.json")," file and run ",(0,r.kt)("inlineCode",{parentName:"li"},"composer install"),"."),(0,r.kt)("li",{parentName:"ul"},"Update all files with the new vendor namespace prefix."),(0,r.kt)("li",{parentName:"ul"},"Update the default WP-CLI command prefix for your plugin located in the root of your plugin.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/Helpers/Components.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Helpers for components\n *\n * @package PluginNamespace\\Helpers\n */\n\ndeclare(strict_types=1);\n\nnamespace PluginNamespace\\Helpers;\n\nuse PluginNamespace\\Config\\Config;\nuse EightshiftLibs\\Helpers\\Components as LibsComponents;\n\n/**\n * Helpers for components\n */\nclass Components extends LibsComponents\n{\n    /**\n     * Local render method.\n     */\n    public static function render(string $component, array $attributes = [], string $parentPath = '', bool $useComponentDefaults = false): string\n    {\n        $parentPath = Config::getProjectPath();\n\n        return parent::render($component, $attributes, $parentPath, $useComponentDefaults);\n    }\n}\n")),(0,r.kt)("h3",{id:"internationalization-i18n-and-localization-l10n"},"Internationalization (I18n) and localization (L10n)"),(0,r.kt)("p",null,"To make sure your project is translatable into other languages, you should use ",(0,r.kt)("a",{parentName:"p",href:"https://codex.wordpress.org/I18n_for_WordPress_Developers"},"WordPress's i18n functions")," every time you output text. This process, called internationalization, is quite simple to implement by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"__")," WordPress function, which is available in both PHP and Gutenberg (in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@wordpress/i18n")," package) and is standard practice in Eightshift Frontend Libs for all text output. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"__")," function accepts a string to translate and a text-domain, which is used to tell WordPress which translation set to use, and returns the translated string (or original string, in case a translation doesn't exist). Note that you can provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"sprintf"),"-parametrized string to ",(0,r.kt)("inlineCode",{parentName:"p"},"__")," and use ",(0,r.kt)("inlineCode",{parentName:"p"},"sprintf")," on its return value to populate the string with certain values. You should also load the text-domain using ",(0,r.kt)("inlineCode",{parentName:"p"},"load_theme_textdomain"),". Using the Eightshift Libs ",(0,r.kt)("inlineCode",{parentName:"p"},"I18n")," class will do this for you by instructing WordPress to look for translations in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/I18n/languages")," with the text-domain defined as your project name."),(0,r.kt)("p",null,"However, there will come a time when ",(0,r.kt)("em",{parentName:"p"},"being able")," to translate won't be enough. You'll actually need to ",(0,r.kt)("em",{parentName:"p"},"do")," that. This happens in a process called localization and is a bit less trivial to do."),(0,r.kt)("p",null,"First, you'll need to prepare the strings for translators. As WordPress i18n is based upon the ",(0,r.kt)("inlineCode",{parentName:"p"},"gettext"),' system, you should generate a POT ("portable object template") file which you can do by running WP-CLI command ',(0,r.kt)("inlineCode",{parentName:"p"},"wp i18n make-pot")," (",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/cli/commands/i18n/make-pot/"},"https://developer.wordpress.org/cli/commands/i18n/make-pot/"),") in your project root. Note that you may need to exclude vendor folders."),(0,r.kt)("p",null,"You can provide this POT file to translators directly, and they can use tools for PO editing such as Poedit to translate the strings. After that, they can export an MO file which you can import into your project. Alternatively, you can set up a translation environment like Glotpress for translations, import your POT file there, and export translations as PO and MO files. You should locate these files into the path defined in your ",(0,r.kt)("inlineCode",{parentName:"p"},"load_theme_textdomain")," call, and they should have the name ",(0,r.kt)("inlineCode",{parentName:"p"},"{textdomain}-{locale}.mo")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"eightshift-boilerplate-hr_HR.mo"),"), that is, ",(0,r.kt)("inlineCode",{parentName:"p"},"{textdomain}-{locale}.po"),"."),(0,r.kt)("p",null,"MO translations are only loaded by PHP code and aren't understood by Gutenberg. To do so, you'll need to generate a JED file from the PO file. You can probably use the WP CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"wp i18n make-json")," file for that (",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/cli/commands/i18n/make-json/"},"https://developer.wordpress.org/cli/commands/i18n/make-json/"),"). If you're using Glotpress, you can simply export the locale as a JED file."),(0,r.kt)("p",null,"To instruct Gutenberg on how to load your JED translations, you'll need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"wp_set_script_translations")," providing a text-domain, handle (script identifier), and locale path. If you're using the Eightshift Libs ",(0,r.kt)("inlineCode",{parentName:"p"},"I18n")," class, this is done for you with the same assumptions as for PHP translations. Furthermore, as we're assuming you're setting translations for block editor scripts, we set the handle to ",(0,r.kt)("inlineCode",{parentName:"p"},"{$assetsPrefix}-block-editor-scripts"),". If you haven't changed how scripts are enqueued, this should be the correct handle and your assets prefix should be your project name."),(0,r.kt)("p",null,"Finally, to make sure WordPress loads the JED translations, you should place them into the path defined by your ",(0,r.kt)("inlineCode",{parentName:"p"},"wp_set_script_translations")," call (",(0,r.kt)("inlineCode",{parentName:"p"},"src/I18n/languages")," by default in the ",(0,r.kt)("inlineCode",{parentName:"p"},"I18n")," class) and make sure they have the name structure ",(0,r.kt)("inlineCode",{parentName:"p"},"{textdomain}-{locale}-{handle}.json"),". (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"eightshift-boilerplate-hr_HR-eightshift-boilerplate-block-editor-scripts.json"),")"),(0,r.kt)("p",null,"After all of this work, you should be able to change the locale on the site, network or user level in the WordPress admin."))}h.isMDXComponent=!0}}]);