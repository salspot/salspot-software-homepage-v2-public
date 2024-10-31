"use strict";
(self["webpackChunknew_salspot_software"] = self["webpackChunknew_salspot_software"] || []).push([[624],{

/***/ 2775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const HowCanWeHelpBanner=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"splashstrip color"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-pattern"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"message"},"Need a development partner?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"col-md-4"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"button-group"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"/contact"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"btn-title ng-binding"},"lets get started"))))))));};/* harmony default export */ __webpack_exports__.Z = (HowCanWeHelpBanner);

/***/ }),

/***/ 1421:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
const NewCaseStudyContainer=_ref=>{let{children}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"services"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section",{className:"approach "},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"study-cases"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"title-block"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6",null,"Our work our pride"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5",null,"Industry case studies")),children)));};/* harmony default export */ __webpack_exports__.Z = (NewCaseStudyContainer);

/***/ }),

/***/ 2718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ CaseStudyStyle; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1082);
const NewCaseStudyDetails=_ref=>{let{style=CaseStudyStyle.LEFT,content,elementIndex}=_ref;const{title,description,accordionList,slug}=content;// styleClasses holds styles for right and left variations. Each list holds a set of classes for different elements in the page.
const styleClasses={right:['col-lg-4 order-lg-last top','col-lg-8'],left:['col-lg-4 top','col-lg-8']};if(!content.title){return'';}const accordionItems=accordionList&&accordionList.map((item,index)=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Item,{key:(elementIndex===null||elementIndex===void 0?void 0:elementIndex.toString())+index.toString(),eventKey:(elementIndex===null||elementIndex===void 0?void 0:elementIndex.toString())+index.toString()},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Header,null,item.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.Body,null,item.body));});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article",{className:"row discovery"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:styleClasses[style][0]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"block-text "+style},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small",null," "),title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{flush:true,alwaysOpen:true},accordionItems),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"case-study-item-cta"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__/* .Link */ .rU,{to:slug,activeClassName:"active",className:"default-btn"},"See more")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:styleClasses[style][1]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"block-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-overlay"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"",alt:"Our Approach - Step 1: Discovery",src:"https://scal.io/assets/images/services/discover-8e11dfe8e7.jpg"}))));};const CaseStudyStyle={LEFT:'left',RIGHT:'right'};/* harmony default export */ __webpack_exports__.Z = (NewCaseStudyDetails);

/***/ }),

/***/ 2735:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const caseStudy={solarBlocks:{title:'Solar Blocks - Blockchain Web3 NFTs',description:'Solar Blocks stands as a cutting-edge startup at the intersection of Blockchain technology and Web3 innovation, focusing on revolutionizing the landscape of solar energy solutions. This forward-thinking company is dedicated to harnessing the power of blockchain and decentralized applications to reshape the way solar energy is generated, utilized, and traded',slug:'/case-studies/solar-blocks',accordionList:[{title:'Decentralized Solar Energy Trading',body:' Solar Blocks offers a peer-to-peer energy trading platform that allows users to buy, sell, or exchange surplus solar energy directly with one another. This system ensures efficient and cost-effective energy transactions while promoting sustainability.'},{title:'Incentivizing Green Energy Production',body:'The platform rewards individuals and businesses for producing excess solar energy, encouraging further participation in the renewable energy ecosystem.'},{title:'Smart Contracts and Automation',body:'Utilizing smart contracts, Solar Blocks automates energy transactions, making the process secure, reliable, and free from intermediaries.'}]},ehx:{title:'Redefining Travel Experience Through Innovative Services',description:'This leading travel support service entity offers a wide array of supplementary travel provisions and essential aids designed to enhance the overall travel experience. Its commitment to improving travel and offering seamless services has positioned it as a prominent provider in the industry.',slug:'/case-studies/holidayextras',accordionList:[{title:'Airport Support Solutions',body:'provides parking options, hotel accommodations, lounge access, and comprehensive insurance coverage, ensuring a comfortable start to travelers\' journeys.'},{title:'Travel Enhancements',body:'It specializes in providing several add-ons, such as transfers, car rentals, and insurance, with a goal to facilitate convenience and flexibility during travel.'},{title:'Parking and Security Solutions',body:'Renowned for providing parking solutions at major airports and seaports, ensuring safe and cost-effective parking options for travelers.'}]},esap:{title:'Field Service Management Solution',description:'Our software development agency proudly contributed to the creation of an innovative Field Service Management (FSM) solution. This powerful platform revolutionizes service operations, offering comprehensive tools for streamlining and enhancing field services.',slug:'/case-studies/sap-fsm',accordionList:[{title:'Dynamic Service Delivery',body:'Our team collaborated to build an FSM tool that optimizes service delivery with real-time insights and dynamic task allocation. It provides a seamless approach for managing, scheduling, and dispatching field service personnel.'},{title:'Robust Resource Management',body:'With our expertise, we contributed to the development of an FSM solution that efficiently manages resources and inventory. This feature ensures that field service personnel have access to the right resources, inventory, and information to accomplish their tasks successfully.'},{title:'Enhanced Customer Experience',body:'We actively participated in creating an FSM platform that elevates the customer experience. Our developed solution offers a user-friendly interface for tracking, reporting, and facilitating communication, enhancing customer satisfaction and overall service efficiency.'}]},emila:{title:'Innovative Service Platform Transformation',description:'We helped develop an innovative service platform operated by a Swiss startup. This versatile platform revolutionizes the service industry, offering an efficient and accessible solution for connecting individuals seeking services with skilled, local experts.',slug:'/case-studies/mila',accordionList:[{title:'Dynamic Service Connectivity',body:'Our team participated in developing a platform that connects users with an array of service providers across various domains. By enabling a seamless connection, it facilitates efficient and accessible solutions for individuals seeking expert services.'},{title:'Enhanced Service Management',body:'We were involved in crafting a platform that offers robust tools for managing services and scheduling tasks. This solution helps service providers manage their resources effectively, optimizing service delivery and customer satisfaction.'},{title:'Optimized User Experience',body:'Our contribution focused on creating a user-centric platform that enhances the overall user experience. By providing a user-friendly interface and improved accessibility, the platform ensures a streamlined connection between service providers and users, enriching the customer journey.'}]},ecore:{},econtrol:{}};/* harmony default export */ __webpack_exports__.Z = (caseStudy);

/***/ }),

/***/ 1407:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3047);
/* harmony import */ var _components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7196);
/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1126);
/* harmony import */ var _components_SecondaryPageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7587);
/* harmony import */ var _components_NewCaseStudyContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1421);
/* harmony import */ var _components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2718);
/* harmony import */ var _content_case_study__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2735);
/* harmony import */ var _components_Index_HowCanWeHelpBanner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2775);
const Contact=()=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{document.body.classList.add('inverse');return()=>{document.body.classList.remove('inverse');};},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"contact body-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{className:"navbar-fixed-top",inverse:true}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SecondaryPageHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{smallTitle:"Our Work",title:"Our portfolio of digital products and services",subtext:"We've completed over 20 projects accross multiple industries in client work. Successfully collaborated with more than 10 partners from countries in the EU and USA. Below are some of the projects we're able to share with you."}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NewCaseStudyContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{style:_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* .CaseStudyStyle */ .j.RIGHT,content:_content_case_study__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.solarBlocks}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{style:_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* .CaseStudyStyle */ .j.LEFT,content:_content_case_study__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.ehx}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{style:_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* .CaseStudyStyle */ .j.RIGHT,content:_content_case_study__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.esap}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{style:_components_NewCaseStudyDetails__WEBPACK_IMPORTED_MODULE_6__/* .CaseStudyStyle */ .j.LEFT,content:_content_case_study__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.emila})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Index_HowCanWeHelpBanner__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,null)));};/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-work-js-db84d8b1df4e789445ec.js.map