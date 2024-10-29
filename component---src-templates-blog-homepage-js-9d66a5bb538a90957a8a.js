"use strict";
(self["webpackChunknew_salspot_software_landing"] = self["webpackChunknew_salspot_software_landing"] || []).push([[165],{

/***/ 4901:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
const HowCanWeHelpBanner=_ref=>{let{message,url,ctaMessage}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"splashstrip color"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-pattern"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"message"},message)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"button-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:url},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"btn-title ng-binding"},ctaMessage))))))));};/* harmony default export */ __webpack_exports__.A = (HowCanWeHelpBanner);

/***/ }),

/***/ 8176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ BlogHomepage; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(8007);
// EXTERNAL MODULE: ./src/components/App/Navbar.js + 2 modules
var Navbar = __webpack_require__(3278);
// EXTERNAL MODULE: ./src/components/App/Layout.js + 4 modules
var Layout = __webpack_require__(9847);
// EXTERNAL MODULE: ./src/components/Index/HowCanWeHelpBanner.js
var HowCanWeHelpBanner = __webpack_require__(4901);
// EXTERNAL MODULE: ./src/components/App/Footer.js + 1 modules
var Footer = __webpack_require__(879);
// EXTERNAL MODULE: ./src/components/SecondaryPageHeader.js
var SecondaryPageHeader = __webpack_require__(301);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/index.browser-dc34ce8e.js
var index_browser_dc34ce8e = __webpack_require__(978);
;// CONCATENATED MODULE: ./src/components/BlogPostCard.js
const BlogPostCard=_ref=>{let{postDetails}=_ref;const{slug,headerImage,category,title,author,shortDescription,readMinutes}=postDetails;const imageObject=(0,index_browser_dc34ce8e.c)(headerImage.childImageSharp.gatsbyImageData);return/*#__PURE__*/react.createElement("article",{className:"post-card"},/*#__PURE__*/react.createElement("a",{className:"post-card-image-link",href:slug},/*#__PURE__*/react.createElement("div",{className:"post-card-image"},/*#__PURE__*/react.createElement("div",{className:"gatsby-image-wrapper"},/*#__PURE__*/react.createElement(index_browser_dc34ce8e.G,{alt:"Blog post featured image",image:imageObject})))),/*#__PURE__*/react.createElement("div",{className:"post-card-content"},/*#__PURE__*/react.createElement("a",{className:"post-card-content-link post-card-details",href:slug},/*#__PURE__*/react.createElement("header",{className:"post-card-header"},/*#__PURE__*/react.createElement("span",{className:"category"},category),/*#__PURE__*/react.createElement("h2",{className:"post-card-title"},title)),/*#__PURE__*/react.createElement("section",{className:"post-card-body"},/*#__PURE__*/react.createElement("p",null,shortDescription))),/*#__PURE__*/react.createElement("footer",{className:"post-card-meta"},/*#__PURE__*/react.createElement("ul",{className:"post-card-meta-list"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("div",{className:"author-name"},"@",author))),/*#__PURE__*/react.createElement("span",{className:"read-time"},readMinutes," min read"))));};/* harmony default export */ var components_BlogPostCard = (BlogPostCard);
;// CONCATENATED MODULE: ./src/templates/blog-homepage.js
const shortcodes={Link: gatsby_browser_entry.Link};// Provide common components that will be available in the MDX files
function BlogHomepage(_ref){let{data,children}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement(Layout/* default */.A,null,/*#__PURE__*/react.createElement(Navbar/* default */.A,{className:"navbar-fixed-top white-page"}),/*#__PURE__*/react.createElement(SecondaryPageHeader/* default */.A,{smallTitle:"Blog",title:"Ideas are great. Results are better.",classNames:"blog",headlineClassNames:"col-xl-8 col-md-8 col-sm-8 col-xs-12 row flex-column",subtext:"We're turning our experience into actionable insights on engineering."}),/*#__PURE__*/react.createElement("section",{className:"post-body blog"},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"row"},data.allMdx.edges.map(edge=>/*#__PURE__*/react.createElement(components_BlogPostCard,{postDetails:edge.node.frontmatter}))))),/*#__PURE__*/react.createElement(HowCanWeHelpBanner/* default */.A,{message:"Need a development partner?",url:"/contact",ctaMessage:"lets get started"}),/*#__PURE__*/react.createElement(Footer/* default */.A,null)));}const query="1778026464";

/***/ })

}]);
//# sourceMappingURL=component---src-templates-blog-homepage-js-9d66a5bb538a90957a8a.js.map