"use strict";
(self["webpackChunknew_salspot_software_landing"] = self["webpackChunknew_salspot_software_landing"] || []).push([[11],{

/***/ 7815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ Common_PageBanner; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(8007);
;// CONCATENATED MODULE: ./src/assets/images/shape/shape1.svg
/* harmony default export */ var shape1 = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=");
;// CONCATENATED MODULE: ./src/assets/images/shape/shape2.png
/* harmony default export */ var shape2 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/assets/images/shape/shape3.png
/* harmony default export */ var shape3 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACSCAYAAADozTAkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc1MUE5OUFCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc1MUE5OTlCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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");
;// CONCATENATED MODULE: ./src/components/Common/PageBanner.js
const PageBanner=_ref=>{let{pageTitle,homePageUrl,homePageText,activePageText}=_ref;return/*#__PURE__*/react.createElement("div",{className:"page-title-area"},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"page-title-content"},/*#__PURE__*/react.createElement("h2",null,pageTitle),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:homePageUrl},homePageText)),/*#__PURE__*/react.createElement("li",null,activePageText)))),/*#__PURE__*/react.createElement("div",{className:"shape-img1"},/*#__PURE__*/react.createElement("img",{src:shape1,alt:"banner"})),/*#__PURE__*/react.createElement("div",{className:"shape-img2"},/*#__PURE__*/react.createElement("img",{src:shape2,alt:"banner"})),/*#__PURE__*/react.createElement("div",{className:"shape-img3"},/*#__PURE__*/react.createElement("img",{src:shape3,alt:"banner"})));};/* harmony default export */ var Common_PageBanner = (PageBanner);

/***/ }),

/***/ 5854:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ case_studies_details; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/App/Layout.js + 4 modules
var Layout = __webpack_require__(9847);
// EXTERNAL MODULE: ./src/components/App/Navbar.js + 2 modules
var Navbar = __webpack_require__(3278);
// EXTERNAL MODULE: ./src/components/Common/PageBanner.js + 3 modules
var PageBanner = __webpack_require__(7815);
// EXTERNAL MODULE: ./src/components/App/Footer.js + 1 modules
var Footer = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/components/CaseStudiesDetails/CaseStudiesSidebar.js
const CaseStudiesSidebar=()=>{return/*#__PURE__*/react.createElement("div",{className:"case-studies-sidebar-sticky"},/*#__PURE__*/react.createElement("div",{className:"case-studies-details-info"},/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("i",{className:"bx bx-user-pin"})),/*#__PURE__*/react.createElement("span",null,"Client:"),/*#__PURE__*/react.createElement("a",{href:"https://envytheme.com/",target:"_blank",rel:"noreferrer"},"EnvyTheme.com"),/*#__PURE__*/react.createElement("a",{href:"https://themeforest.net/",target:"_blank",rel:"noreferrer"},"ThemeForest.com")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("i",{className:"bx bx-map"})),/*#__PURE__*/react.createElement("span",null,"Location:"),"New York, USA"),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("i",{className:"bx bx-purchase-tag"})),/*#__PURE__*/react.createElement("span",null,"Technologies:"),"Python, Data Science"),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("i",{className:"bx bx-check"})),/*#__PURE__*/react.createElement("span",null,"Completed:"),"28 April 2020"),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("i",{className:"bx bx-globe"})),/*#__PURE__*/react.createElement("span",null,"Website:"),/*#__PURE__*/react.createElement("a",{href:"https://envytheme.com/",target:"_blank",rel:"noreferrer"},"EnvyTheme.com")))));};/* harmony default export */ var CaseStudiesDetails_CaseStudiesSidebar = (CaseStudiesSidebar);
;// CONCATENATED MODULE: ./src/assets/images/projects/projects-details1.jpg
/* harmony default export */ var projects_details1 = (__webpack_require__.p + "static/projects-details1-ac2a3c5fef9a4ce6673d8ee5360d3128.jpg");
// EXTERNAL MODULE: ./src/assets/images/projects/project2.jpg
var project2 = __webpack_require__(7596);
;// CONCATENATED MODULE: ./src/components/CaseStudiesDetails/CaseStudiesDetailsContent.js
const CaseStudiesDetailsContent=()=>{return/*#__PURE__*/react.createElement("section",{className:"case-studies-details-area ptb-100"},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"col-lg-8 col-md-12"},/*#__PURE__*/react.createElement("div",{className:"case-studies-details-image"},/*#__PURE__*/react.createElement("img",{src:projects_details1,alt:"about"})),/*#__PURE__*/react.createElement("div",{className:"case-studies-details-desc"},/*#__PURE__*/react.createElement("span",{className:"sub-title"},"Data Science"),/*#__PURE__*/react.createElement("h3",null,"Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python"),/*#__PURE__*/react.createElement("p",null,"Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python."),/*#__PURE__*/react.createElement("div",{className:"row align-items-center"},/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-md-6"},/*#__PURE__*/react.createElement("div",{className:"image"},/*#__PURE__*/react.createElement("img",{src:project2/* default */.A,alt:"about"}))),/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-md-6"},/*#__PURE__*/react.createElement("div",{className:"content"},/*#__PURE__*/react.createElement("h3",null,"Important Facts"),/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,"The Field of Data Science"),/*#__PURE__*/react.createElement("li",null,"The Problem"),/*#__PURE__*/react.createElement("li",null,"The Solution"),/*#__PURE__*/react.createElement("li",null,"The Skills"),/*#__PURE__*/react.createElement("li",null,"Statistics"),/*#__PURE__*/react.createElement("li",null,"Mathematics"))))),/*#__PURE__*/react.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \u2018Content here, content here\u2019, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."),/*#__PURE__*/react.createElement("p",null,"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\u2019t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\u2019t anything embarrassing hidden in the middle of text."),/*#__PURE__*/react.createElement("h3",null,"Results"),/*#__PURE__*/react.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori."))),/*#__PURE__*/react.createElement("div",{className:"col-lg-4 col-md-12"},/*#__PURE__*/react.createElement(CaseStudiesDetails_CaseStudiesSidebar,null)))));};/* harmony default export */ var CaseStudiesDetails_CaseStudiesDetailsContent = (CaseStudiesDetailsContent);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(8007);
;// CONCATENATED MODULE: ./src/assets/images/services/service-icon1.png
/* harmony default export */ var service_icon1 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABGCAYAAAEV/pLmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNzVlYjdmYy0wZWY0LWJhNDQtOWJhMC0yYWVhNWZjZjA3ZTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIwNTQ1OEY4OTNDMTFFQTlCQzJENTlFNzM3MTkzNjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIwNTQ1OEU4OTNDMTFFQTlCQzJENTlFNzM3MTkzNjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWM1Yjg2YzMtMTA2ZC1kZDQ4LTg5OWQtMjE0Y2E5Yzc5OTE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM3NWViN2ZjLTBlZjQtYmE0NC05YmEwLTJhZWE1ZmNmMDdlNCIv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");
;// CONCATENATED MODULE: ./src/assets/images/services/service-icon2.png
/* harmony default export */ var service_icon2 = (__webpack_require__.p + "static/service-icon2-1347b6760783d379a1cd921ec997eb99.png");
;// CONCATENATED MODULE: ./src/assets/images/services/service-icon3.png
/* harmony default export */ var service_icon3 = (__webpack_require__.p + "static/service-icon3-b801d74af12943b9a8f2b9d96f17885a.png");
;// CONCATENATED MODULE: ./src/components/CaseStudiesDetails/RelatedProjects.js
const RelatedProjects=()=>{return/*#__PURE__*/react.createElement("section",{className:"services-area pt-100 pb-70 bg-f1f8fb"},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"section-title"},/*#__PURE__*/react.createElement("h2",null,"More Services You Might Like")),/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},/*#__PURE__*/react.createElement("div",{className:"single-services-box "},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:service_icon1,alt:"about"})),/*#__PURE__*/react.createElement("h3",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/service-details"},"Data Analytics")),/*#__PURE__*/react.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/service-details",className:"read-more-btn"},"Read More ",/*#__PURE__*/react.createElement("i",{className:"flaticon-right"})))),/*#__PURE__*/react.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},/*#__PURE__*/react.createElement("div",{className:"single-services-box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:service_icon2,alt:"about"})),/*#__PURE__*/react.createElement("h3",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/service-details"},"AI & ML Development")),/*#__PURE__*/react.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/service-details",className:"read-more-btn"},"Read More ",/*#__PURE__*/react.createElement("i",{className:"flaticon-right"})))),/*#__PURE__*/react.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},/*#__PURE__*/react.createElement("div",{className:"single-services-box"},/*#__PURE__*/react.createElement("div",{className:"icon"},/*#__PURE__*/react.createElement("img",{src:service_icon3,alt:"about"})),/*#__PURE__*/react.createElement("h3",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/service-details"},"Data Science")),/*#__PURE__*/react.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."),/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/service-details",className:"read-more-btn"},"Read More ",/*#__PURE__*/react.createElement("i",{className:"flaticon-right"})))))));};/* harmony default export */ var CaseStudiesDetails_RelatedProjects = (RelatedProjects);
;// CONCATENATED MODULE: ./src/pages/case-studies-details.js
const CaseDetails=()=>{return/*#__PURE__*/react.createElement(Layout/* default */.A,null,/*#__PURE__*/react.createElement(Navbar/* default */.A,null),/*#__PURE__*/react.createElement(PageBanner/* default */.A,{pageTitle:"Case Studies Details",homePageText:"Home",homePageUrl:"/",activePageText:"Case Studies Details"}),/*#__PURE__*/react.createElement(CaseStudiesDetails_CaseStudiesDetailsContent,null),/*#__PURE__*/react.createElement(CaseStudiesDetails_RelatedProjects,null),/*#__PURE__*/react.createElement(Footer/* default */.A,null));};/* harmony default export */ var case_studies_details = (CaseDetails);

/***/ }),

/***/ 7596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__.A = (__webpack_require__.p + "static/project2-437d726298924b591efe1f756576b184.jpg");

/***/ })

}]);
//# sourceMappingURL=component---src-pages-case-studies-details-js-37d54af5f87ed92bbd38.js.map