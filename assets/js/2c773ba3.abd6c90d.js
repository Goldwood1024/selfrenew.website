"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[5450],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7489:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],s={id:"helpers-php",title:"PHP"},o=void 0,p={unversionedId:"legacy/v6/basics/helpers-php",id:"legacy/v6/basics/helpers-php",title:"PHP",description:"docs-source",source:"@site/docs/legacy/v6/basics/helpers-php.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/helpers-php",permalink:"/selfrenew.website/docs/legacy/v6/basics/helpers-php",draft:!1,tags:[],version:"current",frontMatter:{id:"helpers-php",title:"PHP"},sidebar:"docs",previous:{title:"Scss",permalink:"/selfrenew.website/docs/legacy/v6/basics/helpers-scss"},next:{title:"Tips & Tricks",permalink:"/selfrenew.website/docs/legacy/v6/basics/tips-tricks"}},u={},c=[{value:"ensureString",id:"ensurestring",level:2},{value:"classnames",id:"classnames",level:2},{value:"render",id:"render",level:2},{value:"getManifest",id:"getmanifest",level:2},{value:"responsiveSelectors",id:"responsiveselectors",level:2},{value:"checkAttr",id:"checkattr",level:2},{value:"checkAttrResponsive",id:"checkattrresponsive",level:2},{value:"selector",id:"selector",level:2},{value:"restResponseHandler",id:"restresponsehandler",level:2},{value:"isValidXml",id:"isvalidxml",level:2},{value:"isJson",id:"isjson",level:2},{value:"flattenArray",id:"flattenarray",level:2},{value:"sanitizeArray",id:"sanitizearray",level:2},{value:"sortArrayByOrderKey",id:"sortarraybyorderkey",level:2},{value:"getShortcode",id:"getshortcode",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/4.0.0"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,i.kt)("h2",{id:"ensurestring"},"ensureString"),(0,i.kt)("p",null,"Makes sure the output is a string. Useful for converting an array of components into a string.\nIf you pass an associative array, it will output strings with keys. Used for generating data-attributes from an array."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param array|string $variable Variable we need to convert into a string."),(0,i.kt)("li",{parentName:"ul"},"@throws ComponentException When $variable is not a string or an array."),(0,i.kt)("li",{parentName:"ul"},"@return string")),(0,i.kt)("h2",{id:"classnames"},"classnames"),(0,i.kt)("p",null,"Converts an array of classes into a string that can be echoed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param array $classes Array of classes."),(0,i.kt)("li",{parentName:"ul"},"@return string")),(0,i.kt)("h2",{id:"render"},"render"),(0,i.kt)("p",null,"Renders a component and (optionally) passes some attributes to it."),(0,i.kt)("p",null,"Note about the ",(0,i.kt)("inlineCode",{parentName:"p"},"parentClass")," attribute: If provided, the component will be wrapped with a parent BEM selector."),(0,i.kt)("p",null,"For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"$attributes['parentClass'] === 'header'")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$component === 'logo'")," are set, the component will be wrapped with a ",(0,i.kt)("inlineCode",{parentName:"p"},'<div class="header__logo"></div>'),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param string $component Component's name or full path (ending with .php)."),(0,i.kt)("li",{parentName:"ul"},"@param array  $attributes Array of attributes that is implicitly passed to the component."),(0,i.kt)("li",{parentName:"ul"},"@param string $parentPath If parent path is provided, it will be appended to the file location. If not, get_template_directory_uri() will be used as a default parent path."),(0,i.kt)("li",{parentName:"ul"},"@throws \\Exception When we're unable to find the component by $component."),(0,i.kt)("li",{parentName:"ul"},"@return string")),(0,i.kt)("h2",{id:"getmanifest"},"getManifest"),(0,i.kt)("p",null,"Get ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest json"),". Used for getting block/components manifest."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param string $path Absolute path to manifest folder."),(0,i.kt)("li",{parentName:"ul"},"@throws \\Exception When we're unable to find the component by $component."),(0,i.kt)("li",{parentName:"ul"},"@return array")),(0,i.kt)("h2",{id:"responsiveselectors"},"responsiveSelectors"),(0,i.kt)("p",null,"This function is the PHP equivalent of the JavaScript function on this ",(0,i.kt)("a",{parentName:"p",href:"helpers-javascript"},"link"),"."),(0,i.kt)("h2",{id:"checkattr"},"checkAttr"),(0,i.kt)("p",null,"This function is the PHP equivalent of ",(0,i.kt)("a",{parentName:"p",href:"helpers-javascript"},"this JavaScript function"),", except there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"undefinedAllowed")," parameter - it's used only on the WordPress admin side."),(0,i.kt)("h2",{id:"checkattrresponsive"},"checkAttrResponsive"),(0,i.kt)("p",null,"This function is the PHP equivalent of ",(0,i.kt)("a",{parentName:"p",href:"helpers-javascript"},"this JavaScript function"),", except there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"undefinedAllowed")," parameter - it's used only on the WordPress admin side."),(0,i.kt)("h2",{id:"selector"},"selector"),(0,i.kt)("p",null,"This function is the PHP equivalent of the JavaScript function on this ",(0,i.kt)("a",{parentName:"p",href:"helpers-javascript"},"link"),"."),(0,i.kt)("h2",{id:"restresponsehandler"},"restResponseHandler"),(0,i.kt)("p",null,"Ensure the correct response for REST using the handler function."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param integer     $code Response Status code."),(0,i.kt)("li",{parentName:"ul"},"@param string      $status Response Status name (success/error)."),(0,i.kt)("li",{parentName:"ul"},"@param string|null $msg Response Message."),(0,i.kt)("li",{parentName:"ul"},"@param array|null  $data Response additional data."),(0,i.kt)("li",{parentName:"ul"},"@return \\WP_REST_Response|\\WP_Error If response generated an error, WP_Error, if response is already an instance, WP_REST_Response, otherwise returns a new WP_REST_Response instance.")),(0,i.kt)("h2",{id:"isvalidxml"},"isValidXml"),(0,i.kt)("p",null,"Check if XML is valid. Used for validating SVG files."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param string $xml Full xml document."),(0,i.kt)("li",{parentName:"ul"},"@return boolean")),(0,i.kt)("h2",{id:"isjson"},"isJson"),(0,i.kt)("p",null,"Check if json is valid."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param string $string String to check."),(0,i.kt)("li",{parentName:"ul"},"@return bool")),(0,i.kt)("h2",{id:"flattenarray"},"flattenArray"),(0,i.kt)("p",null,"Flatten multidimensional array."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param array $array Multidimensional array."),(0,i.kt)("li",{parentName:"ul"},"@return array")),(0,i.kt)("h2",{id:"sanitizearray"},"sanitizeArray"),(0,i.kt)("p",null,"Sanitize all the values in an array."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@link ",(0,i.kt)("a",{parentName:"li",href:"https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/"},"https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/")),(0,i.kt)("li",{parentName:"ul"},"@param array  $array Provided array."),(0,i.kt)("li",{parentName:"ul"},"@param string $sanitizationFunction WordPress function used for sanitization purposes."),(0,i.kt)("li",{parentName:"ul"},"@return array")),(0,i.kt)("h2",{id:"sortarraybyorderkey"},"sortArrayByOrderKey"),(0,i.kt)("p",null,"Sort array by order key. Used to sort terms."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@param array $items Items array to sort. Must have order key."),(0,i.kt)("li",{parentName:"ul"},"@return array")),(0,i.kt)("h2",{id:"getshortcode"},"getShortcode"),(0,i.kt)("p",null,"Call a shortcode function by tag name."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@author J.D. Grimes"),(0,i.kt)("li",{parentName:"ul"},"@link ",(0,i.kt)("a",{parentName:"li",href:"https://codesymphony.co/dont-do_shortcode/"},"https://codesymphony.co/dont-do_shortcode/")),(0,i.kt)("li",{parentName:"ul"},"@param string      $tag The shortcode whose function to call."),(0,i.kt)("li",{parentName:"ul"},"@param array       $attr The attributes to pass to the shortcode function. Optional."),(0,i.kt)("li",{parentName:"ul"},"@param string|null $content The shortcodes content. Default is null (none)."),(0,i.kt)("li",{parentName:"ul"},"@return string|bool False on failure, the result of the shortcode on success.")))}m.isMDXComponent=!0}}]);