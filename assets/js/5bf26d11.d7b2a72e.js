"use strict";(self.webpackChunk_eightshift_docs=self.webpackChunk_eightshift_docs||[]).push([[9555],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8700:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"autowiring",title:"Autowiring"},l=void 0,c={unversionedId:"legacy/v6/basics/autowiring",id:"legacy/v6/basics/autowiring",title:"Autowiring",description:"docs-source",source:"@site/docs/legacy/v6/basics/autowiring.md",sourceDirName:"legacy/v6/basics",slug:"/legacy/v6/basics/autowiring",permalink:"/selfrenew.website/docs/legacy/v6/basics/autowiring",draft:!1,tags:[],version:"current",frontMatter:{id:"autowiring",title:"Autowiring"},sidebar:"docs",previous:{title:"Extending Classes",permalink:"/selfrenew.website/docs/legacy/v6/basics/extending-classes"},next:{title:"Example Class",permalink:"/selfrenew.website/docs/legacy/v6/basics/example-class"}},u={},m=[{value:"How it works",id:"how-it-works",level:2},{value:"What if I have to mock or manually call a class?",id:"what-if-i-have-to-mock-or-manually-call-a-class",level:3},{value:"What if my class doesn&#39;t have anything inside a constructor method? (no dependencies)",id:"what-if-my-class-doesnt-have-anything-inside-a-constructor-method-no-dependencies",level:3},{value:"What if my class has a <strong>primitive parameter</strong> (<code>string</code>, <code>int</code>, etc.) inside a constructor method?",id:"what-if-my-class-has-a-primitive-parameter-string-int-etc-inside-a-constructor-method",level:3},{value:"What if my class does have another class as a parameter inside a constructor method?",id:"what-if-my-class-does-have-another-class-as-a-parameter-inside-a-constructor-method",level:3},{value:"What if my class has an interface parameter inside the constructor method?",id:"what-if-my-class-has-an-interface-parameter-inside-the-constructor-method",level:3},{value:"Example",id:"example",level:4},{value:"To sum it up",id:"to-sum-it-up",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinum/eightshift-libs/tree/4.0.0"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"}))),(0,r.kt)("p",null,"What is autowiring?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Autowiring is an exotic word that represents something very simple: the container's ability to create and inject dependencies automatically.")),(0,r.kt)("p",null,"The quote is taken from the ",(0,r.kt)("a",{parentName:"p",href:"https://php-di.org/doc/autowiring.html"},"PHP-DI")," library that we use."),(0,r.kt)("p",null,"In a nutshell, we use a dependency injection (DI) container to load all your service classes. Alongside the DI container, we also use the PSR-4 coding standard for autoloading. That allows us to predict what your file/folder structure will look like in correlation to the namespace. With that in mind, you don't have to worry about requiring your classes. Our autoloading takes care of everything. All you need to do is follow a few coding standards so that you can automatically inject other classes as dependencies."),(0,r.kt)("p",null,"Autowiring runs inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Main")," service class as an extended class of our ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractMain")," class. You can install the main class using this command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wp boilerplate create_main")),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Here is a quick overview of how this works:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You create a new class manually or using the WP-CLI command."),(0,r.kt)("li",{parentName:"ul"},"PSR-4 should detect your new class if you followed the PSR-4 naming standard."),(0,r.kt)("li",{parentName:"ul"},"The new class is added to the ",(0,r.kt)("inlineCode",{parentName:"li"},"classmap")," array inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"vendor")," folder."),(0,r.kt)("li",{parentName:"ul"},"Autowiring class reads the new class, checks if your class has any class dependencies, and injects them."),(0,r.kt)("li",{parentName:"ul"},"And it just works.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To put it shortly"),": just add a new class (that is PSR-4 compliant) with or without some class dependencies and everything will be automatically resolved/injected."),(0,r.kt)("h3",{id:"what-if-i-have-to-mock-or-manually-call-a-class"},"What if I have to mock or manually call a class?"),(0,r.kt)("p",null,"Before we start with the automatization and autowiring, let's see how service classes are called manually."),(0,r.kt)("p",null,"We can think of these scenarios where you want to load a class manually:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have to write tests and manually provide mocked classes."),(0,r.kt)("li",{parentName:"ul"},"Your classes have a custom structure and autowiring can't resolve it."),(0,r.kt)("li",{parentName:"ul"},"You want to provide a primitive parameter (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"int"),", etc.) inside a constructor method.")),(0,r.kt)("p",null,"In those cases, you can manually provide your DI container with the implementation using the ",(0,r.kt)("inlineCode",{parentName:"p"},"getServiceClasses")," method inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"src>Main>Main.php")," class."),(0,r.kt)("p",null,"Provide the method and add your custom implementation like this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src>Main>Main.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"  /**\n   * Get the list of services to register.\n   *\n   * A list of classes which contain hooks.\n   *\n   * @return array<class-string, string|string[]> Array of fully qualified service class names.\n   */\n  protected function getServiceClasses(): array\n  {\n    return [\n\n      // If you are using a class as a DI.\n      ProjectNamespace\\Rest\\Routes\\DocumentsRoute::class => [\n        ProjectNamespace\\Query\\Documents\\QueryDocuments::class\n      ],\n\n      // If you just want to include a simple class with no DI.\n      ProjectNamespace\\CoolFolder\\CoolClass::class,\n    ];\n  }\n")),(0,r.kt)("h3",{id:"what-if-my-class-doesnt-have-anything-inside-a-constructor-method-no-dependencies"},"What if my class doesn't have anything inside a constructor method? (no dependencies)"),(0,r.kt)("p",null,"If your class ",(0,r.kt)("strong",{parentName:"p"},"doesn't have")," anything defined in the constructor method, autoloading will require your class.\nThis just means that you are not using dependency injection (since you have nothing to inject)."),(0,r.kt)("h3",{id:"what-if-my-class-has-a-primitive-parameter-string-int-etc-inside-a-constructor-method"},"What if my class has a ",(0,r.kt)("strong",{parentName:"h3"},"primitive parameter")," (",(0,r.kt)("inlineCode",{parentName:"h3"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"int"),", etc.) inside a constructor method?"),(0,r.kt)("p",null,"If your class ",(0,r.kt)("strong",{parentName:"p"},"has")," a primitive parameter defined in the constructor method, autowiring will ",(0,r.kt)("strong",{parentName:"p"},"not know")," how to handle this so you must manually provide the primitive parameters at the point of usage. You can find more information about that ",(0,r.kt)("a",{parentName:"p",href:"#what-if-i-have-to-mock-or-manually-call-a-class"},"here"),"."),(0,r.kt)("h3",{id:"what-if-my-class-does-have-another-class-as-a-parameter-inside-a-constructor-method"},"What if my class does have another class as a parameter inside a constructor method?"),(0,r.kt)("p",null,"This works out of the box, but you shouldn't really do this."),(0,r.kt)("p",null,"A good coding practice is that your class should never depend on the concrete class implementation because you have tightly coupled your class to another class. This makes it hard to test and your code becomes hard to modify. Imagine that you have put a concrete implementation as a dependency, only to get feedback from the client that you need to change that implementation for a completely different one. Making the changes means that you'll need to track all the places in your codebase where you have used some functionality from this class, and change it completely."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You should always code against interfaces and not implementation.")),(0,r.kt)("p",null,"We can't stress this enough because as your project grows, so will your headaches. Also, when you start testing your code, that is when your hair will begin to fall off. We recommend reading Uncle Bob Martin's ",(0,r.kt)("a",{parentName:"p",href:"http://cleancoder.com/products"},"Clean Code"),". That will save you a lot of sleepless nights, and you'll learn tons of tips and tricks for writing clean code."),(0,r.kt)("h3",{id:"what-if-my-class-has-an-interface-parameter-inside-the-constructor-method"},"What if my class has an interface parameter inside the constructor method?"),(0,r.kt)("p",null,"This will automatically be resolved (same as with class parameters) if you follow one simple rule:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Variable name in your constructor method needs to match the class name (which implements the interface) in camelCase.")),(0,r.kt)("p",null,"For example, let's say you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"SteeringWheel")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class SteeringWheel implements CarPartInterface\n")),(0,r.kt)("p",null,"and you want to have this as a dependency in Car class. Your Car class has the following constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function __construct(CarPartInterface $steeringWheel)\n{\n  $this->steeringWheel = $steeringWheel;\n}\n")),(0,r.kt)("p",null,"Since the injected variable name ",(0,r.kt)("inlineCode",{parentName:"p"},"$steeringWheel")," is the camelCase version of the class name ",(0,r.kt)("inlineCode",{parentName:"p"},"SteeringWheel")," which implements ",(0,r.kt)("inlineCode",{parentName:"p"},"CarPartInterface"),", autowiring will know to inject the correct class and everything will work fine."),(0,r.kt)("p",null,"If you understand everything from the upper example, you can just skip the next one. However, we recommend checking out the following example for a more detailed overview."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's set a scene. You have created a ",(0,r.kt)("inlineCode",{parentName:"p"},"DocumentsRoute")," class and it needs some functionality from the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryDocuments")," class."),(0,r.kt)("p",null,"Steps you need to follow are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should create an interface with all the methods you need in the ",(0,r.kt)("inlineCode",{parentName:"li"},"DocumentsRoute")," class. Let's call it ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryDocumentsInterface"),". We'll put it inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"src/Query/Documents")," folder."),(0,r.kt)("li",{parentName:"ul"},"Your ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryDocuments")," class should implement your new ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryDocumentsInterface")," class and have all the methods from the interface implemented."),(0,r.kt)("li",{parentName:"ul"},"In your ",(0,r.kt)("inlineCode",{parentName:"li"},"DocumentsRoute")," class, provide the ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryDocumentsInterface")," interface as a parameter inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"__construct")," method with the name of the argument ",(0,r.kt)("inlineCode",{parentName:"li"},"$queryDocuments"),"."),(0,r.kt)("li",{parentName:"ul"},"You can now use the methods defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryDocuments")," class.")),(0,r.kt)("p",null,"Let us provide you with some code examples:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Structure:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Query",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Documents",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"QueryDocumentsInterface.class"),(0,r.kt)("li",{parentName:"ul"},"QueryDocuments.class"))))),(0,r.kt)("li",{parentName:"ul"},"Rest",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Routes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DocumentsRoute.class")))))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src/Query/Documents/QueryDocumentsInterface.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * The file that holds a QueryDocuments interface.\n *\n * @package ProjectNamespace\\Query\\Documents;\n */\n\ndeclare(strict_types=1);\n\nnamespace ProjectNamespace\\Query\\Documents;\n\n/**\n * Interface for querying documents\n */\ninterface QueryDocumentsInterface\n{\n\n  /**\n   * Get structured documents data for documents section.\n   *\n   * @param int $id Id for data.\n   *\n   * @return string\n   */\n  public function getDocumentsData(int $id = 0): string;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src/Query/Documents/QueryDocuments.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * The file for querying all the documents\n *\n * @package ProjectNamespace\\Query\\Documents\n */\n\ndeclare(strict_types=1);\n\nnamespace ProjectNamespace\\Query\\Documents;\n\nuse ProjectNamespaceVendor\\EightshiftLibs\\Services\\ServiceInterface;\n\n/**\n * QueryDocuments class.\n */\nclass QueryDocuments implements ServiceInterface, QueryDocumentsInterface\n{\n    /**\n   * Get structured documents data for documents section.\n   *\n   * @param int $id Id for data.\n   *\n   * @return string\n   */\n  public function getDocumentsData(int $id = 0): string\n  {\n    // here goes the implementation of getDocumentsData method.\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src/Rest/Routes/DocumentsRoute.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * The class register route for DocumentsRoute endpoint\n *\n * @package ProjectNamespace\\Rest\\Routes\n */\n\ndeclare(strict_types=1);\n\nnamespace ProjectNamespace\\Rest\\Routes;\n\nuse ProjectNamespace\\Query\\Documents\\QueryDocumentsInterface;\nuse ProjectNamespaceVendor\\EightshiftLibs\\Rest\\Routes\\AbstractRoute;\nuse ProjectNamespaceVendor\\EightshiftLibs\\Rest\\CallableRouteInterface;\n\n/**\n * Class DocumentsRoute\n */\nclass DocumentsRoute extends AbstractRoute implements CallableRouteInterface\n{\n\n  /**\n   * Instance variable of documents data.\n   *\n   * @var QueryDocumentsInterface\n   */\n  protected $queryDocuments;\n\n  /**\n   * Create a new instance.\n   *\n   * @param QueryDocumentsInterface $queryDocuments Inject documentsData which holds data for documents.\n   */\n  public function __construct(QueryDocumentsInterface $queryDocuments)\n  {\n    $this->queryDocuments = $queryDocuments;\n  }\n\n  // here goes the rest of the DocumentsRoute implementation.\n}\n")),(0,r.kt)("p",null,"And that's it. Autowiring knows how to resolve the dependencies, you didn't tightly couple the code, and you're all set."),(0,r.kt)("h2",{id:"to-sum-it-up"},"To sum it up"),(0,r.kt)("p",null,"This chapter may be a bit long, but we wanted to make sure you understand our motivation behind it. We often work on large projects with lots of third-party integrations, and having a good project structure and architecture makes the projects more durable. It makes them less prone to bugs (if you write tests) and makes implementing new features and removing obsolete ones a lot easier."),(0,r.kt)("p",null,"Do you need to use it? Not really. Especially on really simple projects. Should you? We think you'll benefit from it in the long run."))}d.isMDXComponent=!0}}]);