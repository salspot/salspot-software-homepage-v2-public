(self["webpackChunknew_salspot_software"] = self["webpackChunknew_salspot_software"] || []).push([[860],{

/***/ 1955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */const MDXRenderer=__webpack_require__(7927);module.exports={MDXRenderer:MDXRenderer};

/***/ }),

/***/ 7927:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _toConsumableArray=__webpack_require__(861);var _construct=__webpack_require__(3515);var _defineProperty=__webpack_require__(8416);var _objectWithoutProperties=__webpack_require__(215);const _excluded=["scope","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const React=__webpack_require__(7294);const{mdx}=__webpack_require__(4983);const{useMDXScope}=__webpack_require__(2174);module.exports=function MDXRenderer(_ref){let{scope,children}=_ref,props=_objectWithoutProperties(_ref,_excluded);const mdxScope=useMDXScope(scope);// Memoize the compiled component
const End=React.useMemo(()=>{if(!children){return null;}const fullScope=_objectSpread({// React is here just in case the user doesn't pass them in
// in a manual usage of the renderer
React,mdx},mdxScope);const keys=Object.keys(fullScope);const values=keys.map(key=>fullScope[key]);const fn=_construct(Function,["_fn"].concat(keys,[""+children]));return fn.apply(void 0,[{}].concat(_toConsumableArray(values)));},[children,scope]);return React.createElement(End,_objectSpread({},props));};

/***/ }),

/***/ 2184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3723);
const BlogPostCard=_ref=>{let{postDetails}=_ref;console.log('postDetails',postDetails);const{slug,headerImage,category,title,author,shortDescription}=postDetails;const imageObject=(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.c)(headerImage.childImageSharp.gatsbyImageData);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"post-card"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"post-card-image-link",href:slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"post-card-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"gatsby-image-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.G,{alt:"Blog post featured image",image:imageObject})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"post-card-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"post-card-content-link post-card-details",href:slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"post-card-header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"category"},category),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"post-card-title"},title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"post-card-body"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,shortDescription))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",{className:"post-card-meta"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"post-card-meta-list"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"author-name"},"@",author))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"read-time"},"1 min read"))));};/* harmony default export */ __webpack_exports__.Z = (BlogPostCard);

/***/ }),

/***/ 2775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const HowCanWeHelpBanner=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"splashstrip color"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-pattern"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"message"},"Need a development partner?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"button-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/contact"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"btn-title ng-binding"},"lets get started"))))))));};/* harmony default export */ __webpack_exports__.Z = (HowCanWeHelpBanner);

/***/ }),

/***/ 9026:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const CaseStudyAside=_ref=>{let{objectives,technologies}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-lg-4 stats-block post-body stats-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("aside",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stats-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"icon"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",{className:"icon-bullseye-arrow"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",null,"Objectives"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,objectives&&objectives.map((objective,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:index},objective)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"stats-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"icon"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i",{className:"icon-gear"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",null,"Technologies"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,technologies&&technologies.map((technology,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:index},technology)))))));};/* harmony default export */ __webpack_exports__.Z = (CaseStudyAside);

/***/ }),

/***/ 4518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BlogHomepage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1082);
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7196);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3047);
/* harmony import */ var _components_Index_HowCanWeHelpBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2775);
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1126);
/* harmony import */ var _components_SecondaryPageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7587);
/* harmony import */ var _components_BlogPostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2184);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4983);
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1955);
/* harmony import */ var gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_case_study_aside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9026);
const shortcodes={Link: gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU};// Provide common components that will be available in the MDX files
function BlogHomepage(_ref){let{data,children}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"navbar-fixed-top white-page"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SecondaryPageHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{smallTitle:"Blog",title:"Ideas are great. Results are better.",classNames:"blog",headlineClassNames:"col-xl-8 col-md-8 col-sm-8 col-xs-12 row flex-column",subtext:"We're turning our experience into actionable insights on engineering, design, process and strategy."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"case-studies-template post-body"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-lg-8 col-md-12 post-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"post"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_8__.MDXProvider,{components:shortcodes},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_mdx__WEBPACK_IMPORTED_MODULE_9__.MDXRenderer,{frontmatter:data.mdx.frontmatter},data.mdx.body)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_case_study_aside__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{objectives:data.mdx.frontmatter.objectives,technologies:data.mdx.frontmatter.technologies})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Index_HowCanWeHelpBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null)));}const query="882417743";

/***/ }),

/***/ 3897:
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3405:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3897);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3515:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(6015);
var isNativeReflectConstruct = __webpack_require__(9617);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8416:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(4062);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9617:
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9498:
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2281:
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 215:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(7071);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7071:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(3405);
var iterableToArray = __webpack_require__(9498);
var unsupportedIterableToArray = __webpack_require__(6116);
var nonIterableSpread = __webpack_require__(2281);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5036:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(8698)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4062:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(8698)["default"]);
var toPrimitive = __webpack_require__(5036);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8698:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6116:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3897);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-569df5c1e746e942f86e.js.map