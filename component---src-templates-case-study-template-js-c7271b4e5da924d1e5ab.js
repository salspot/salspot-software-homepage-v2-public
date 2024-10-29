(self["webpackChunknew_salspot_software_landing"] = self["webpackChunknew_salspot_software_landing"] || []).push([[403],{

/***/ 621:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Welcome to gatsby-plugin-mdx!
 *
 * Start reading in gatsby-node.js
 */const MDXRenderer=__webpack_require__(9852);module.exports={MDXRenderer:MDXRenderer};

/***/ }),

/***/ 9852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _toConsumableArray=__webpack_require__(1132);var _construct=__webpack_require__(9646);var _defineProperty=__webpack_require__(3693);var _objectWithoutProperties=__webpack_require__(1847);const _excluded=["scope","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){_defineProperty(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}const React=__webpack_require__(6540);const{mdx}=__webpack_require__(5680);const{useMDXScope}=__webpack_require__(6842);module.exports=function MDXRenderer(_ref){let{scope,children}=_ref,props=_objectWithoutProperties(_ref,_excluded);const mdxScope=useMDXScope(scope);// Memoize the compiled component
const End=React.useMemo(()=>{if(!children){return null;}const fullScope=_objectSpread({// React is here just in case the user doesn't pass them in
// in a manual usage of the renderer
React,mdx},mdxScope);const keys=Object.keys(fullScope);const values=keys.map(key=>fullScope[key]);const fn=_construct(Function,[`_fn`].concat(keys,[`${children}`]));return fn.apply(void 0,[{}].concat(_toConsumableArray(values)));},[children,scope]);return React.createElement(End,_objectSpread({},props));};

/***/ }),

/***/ 4901:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
const HowCanWeHelpBanner=_ref=>{let{message,url,ctaMessage}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"splashstrip color"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-pattern"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"message"},message)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"button-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:url},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"btn-title ng-binding"},ctaMessage))))))));};/* harmony default export */ __webpack_exports__.A = (HowCanWeHelpBanner);

/***/ }),

/***/ 8364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ PageTemplate; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(5680);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(8007);
// EXTERNAL MODULE: ./src/components/App/Navbar.js + 2 modules
var Navbar = __webpack_require__(3278);
// EXTERNAL MODULE: ./src/components/App/Layout.js + 4 modules
var Layout = __webpack_require__(9847);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/index.js
var gatsby_plugin_mdx = __webpack_require__(621);
;// CONCATENATED MODULE: ./src/components/case-study-aside.js
const CaseStudyAside=_ref=>{let{objectives,technologies}=_ref;return/*#__PURE__*/react.createElement("div",{className:"aside-block post-body stats-block col-lg-2"},/*#__PURE__*/react.createElement("aside",null,/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement("div",{className:"stats-section"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("i",{className:"icon-bullseye-arrow"})),/*#__PURE__*/react.createElement("h4",null,"Objectives"),/*#__PURE__*/react.createElement("ul",null,objectives&&objectives.map((objective,index)=>/*#__PURE__*/react.createElement("li",{key:index},objective)))),/*#__PURE__*/react.createElement("div",{className:"stats-section"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("i",{className:"icon-gear"})),/*#__PURE__*/react.createElement("h4",null,"Technologies"),/*#__PURE__*/react.createElement("ul",null,technologies&&technologies.map((technology,index)=>/*#__PURE__*/react.createElement("li",{key:index},technology)))))));};/* harmony default export */ var case_study_aside = (CaseStudyAside);
// EXTERNAL MODULE: ./src/components/Index/HowCanWeHelpBanner.js
var HowCanWeHelpBanner = __webpack_require__(4901);
// EXTERNAL MODULE: ./src/components/App/Footer.js + 1 modules
var Footer = __webpack_require__(879);
// EXTERNAL MODULE: ./src/components/SecondaryPageHeader.js
var SecondaryPageHeader = __webpack_require__(301);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/index.browser-dc34ce8e.js
var index_browser_dc34ce8e = __webpack_require__(978);
;// CONCATENATED MODULE: ./src/templates/case-study-template.js
const shortcodes={Link: gatsby_browser_entry.Link};// Provide common components that will be available in the MDX files
function PageTemplate(_ref){var _data$mdx$frontmatter,_data$mdx$frontmatter2;let{data,children}=_ref;const headerImage=(0,index_browser_dc34ce8e.c)((_data$mdx$frontmatter=data.mdx.frontmatter.headerImage)===null||_data$mdx$frontmatter===void 0?void 0:(_data$mdx$frontmatter2=_data$mdx$frontmatter.childImageSharp)===null||_data$mdx$frontmatter2===void 0?void 0:_data$mdx$frontmatter2.gatsbyImageData);return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Layout/* default */.A,null,/*#__PURE__*/react.createElement(Navbar/* default */.A,{className:"navbar-fixed-top"}),/*#__PURE__*/react.createElement(SecondaryPageHeader/* default */.A,{classNames:"case-studies-template-header",smallTitle:"Case Study",title:data.mdx.frontmatter.title,backgroundImageFlag:data.mdx.frontmatter.headerImage,imageFromContent:headerImage}),/*#__PURE__*/react.createElement("section",{className:"case-studies-template post-body"},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"post-block col-lg-8 col-md-10"},/*#__PURE__*/react.createElement("article",{className:"post"},/*#__PURE__*/react.createElement(esm.MDXProvider,{components:shortcodes},/*#__PURE__*/react.createElement(gatsby_plugin_mdx.MDXRenderer,{frontmatter:data.mdx.frontmatter},data.mdx.body)))),/*#__PURE__*/react.createElement(case_study_aside,{objectives:data.mdx.frontmatter.objectives,technologies:data.mdx.frontmatter.technologies})))),/*#__PURE__*/react.createElement(HowCanWeHelpBanner/* default */.A,{message:"Need a development partner?",url:"/contact",ctaMessage:"lets get started"}),/*#__PURE__*/react.createElement(Footer/* default */.A,null)));}const query="410647764";

/***/ }),

/***/ 79:
/***/ (function(module) {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5901:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(79);
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9646:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isNativeReflectConstruct = __webpack_require__(7550);
var setPrototypeOf = __webpack_require__(5636);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3693:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(7736);
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7550:
/***/ (function(module) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9291:
/***/ (function(module) {

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1869:
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1847:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(4893);
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4893:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1132:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(5901);
var iterableToArray = __webpack_require__(9291);
var unsupportedIterableToArray = __webpack_require__(7122);
var nonIterableSpread = __webpack_require__(1869);
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(3738)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7736:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(3738)["default"]);
var toPrimitive = __webpack_require__(9045);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3738:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7122:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(79);
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=component---src-templates-case-study-template-js-c7271b4e5da924d1e5ab.js.map