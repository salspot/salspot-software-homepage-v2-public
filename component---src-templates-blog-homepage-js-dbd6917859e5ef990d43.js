"use strict";
(self["webpackChunknew_salspot_software"] = self["webpackChunknew_salspot_software"] || []).push([[116],{

/***/ 2184:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3723);
const BlogPostCard=_ref=>{let{postDetails}=_ref;console.log('postDetails',postDetails);const{slug,headerImage,category,title,author,shortDescription}=postDetails;const imageObject=(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.c)(headerImage.childImageSharp.gatsbyImageData);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"post-card"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"post-card-image-link",href:slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"post-card-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"gatsby-image-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.G,{alt:"Blog post featured image",image:imageObject})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"post-card-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{className:"post-card-content-link post-card-details",href:slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"post-card-header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"category"},category),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",{className:"post-card-title"},title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"post-card-body"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,shortDescription))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer",{className:"post-card-meta"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"post-card-meta-list"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"author-name"},"@",author))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"read-time"},"1 min read"))));};/* harmony default export */ __webpack_exports__.Z = (BlogPostCard);

/***/ }),

/***/ 2775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const HowCanWeHelpBanner=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"splashstrip color"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-pattern"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"message"},"Need a development partner?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"button-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/contact"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"btn-title ng-binding"},"lets get started"))))))));};/* harmony default export */ __webpack_exports__.Z = (HowCanWeHelpBanner);

/***/ }),

/***/ 6334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
const shortcodes={Link: gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU};// Provide common components that will be available in the MDX files
function BlogHomepage(_ref){let{data,children}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"navbar-fixed-top white-page"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SecondaryPageHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{smallTitle:"Blog",title:"Ideas are great. Results are better.",classNames:"blog",headlineClassNames:"col-xl-8 col-md-8 col-sm-8 col-xs-12 row flex-column",subtext:"We're turning our experience into actionable insights on engineering, design, process and strategy."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"post-body blog"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BlogPostCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{postDetails:data.allMdx.edges[0].node.frontmatter})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Index_HowCanWeHelpBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null)));}const query="2643244201";

/***/ })

}]);
//# sourceMappingURL=component---src-templates-blog-homepage-js-dbd6917859e5ef990d43.js.map