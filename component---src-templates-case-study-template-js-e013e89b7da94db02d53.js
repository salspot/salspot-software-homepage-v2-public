(self.webpackChunknew_salspot_software_landing=self.webpackChunknew_salspot_software_landing||[]).push([[725],{1955:function(e,t,r){const n=r(7927);e.exports={MDXRenderer:n}},7927:function(e,t,r){var n=r(861),o=r(3515),a=r(8416),s=r(215);const l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const i=r(7294),{mdx:p}=r(4983),{useMDXScope:m}=r(2174);e.exports=function(e){let{scope:t,children:r}=e,a=s(e,l);const c=m(t),f=i.useMemo((()=>{if(!r)return null;const e=u({React:i,mdx:p},c),t=Object.keys(e),a=t.map((t=>e[t]));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return i.createElement(f,u({},a))}},2775:function(e,t,r){"use strict";var n=r(7294);t.Z=e=>{let{message:t,url:r,ctaMessage:o}=e;return n.createElement("section",{className:"splashstrip color"},n.createElement("div",{className:"bg-pattern"}),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-8"},n.createElement("div",{className:"message"},t)),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"button-group"},n.createElement("a",{href:r},n.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},n.createElement("span",{className:"btn-title ng-binding"},o))))))))}},1783:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7294),o=r(4983),a=r(1082),s=r(3842),l=r(8306),c=r(1955);var u=e=>{let{objectives:t,technologies:r}=e;return n.createElement("div",{className:"aside-block post-body stats-block col-lg-2"},n.createElement("aside",null,n.createElement("div",null,n.createElement("div",{className:"stats-section"},n.createElement("div",{className:"icon"},n.createElement("i",{className:"icon-bullseye-arrow"})),n.createElement("h4",null,"Objectives"),n.createElement("ul",null,t&&t.map(((e,t)=>n.createElement("li",{key:t},e))))),n.createElement("div",{className:"stats-section"},n.createElement("div",{className:"icon"},n.createElement("i",{className:"icon-gear"})),n.createElement("h4",null,"Technologies"),n.createElement("ul",null,r&&r.map(((e,t)=>n.createElement("li",{key:t},e))))))))},i=r(2775),p=r(1126),m=r(7587),f=r(3723);const d={Link:a.Link};function x(e){var t,r;let{data:a,children:x}=e;const b=(0,f.c)(null===(t=a.mdx.frontmatter.headerImage)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.gatsbyImageData);return n.createElement(n.Fragment,null,n.createElement(l.Z,null,n.createElement(s.Z,{className:"navbar-fixed-top"}),n.createElement(m.Z,{classNames:"case-studies-template-header",smallTitle:"Case Study",title:a.mdx.frontmatter.title,backgroundImageFlag:a.mdx.frontmatter.headerImage,imageFromContent:b}),n.createElement("section",{className:"case-studies-template post-body"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"post-block col-lg-8 col-md-10"},n.createElement("article",{className:"post"},n.createElement(o.MDXProvider,{components:d},n.createElement(c.MDXRenderer,{frontmatter:a.mdx.frontmatter},a.mdx.body)))),n.createElement(u,{objectives:a.mdx.frontmatter.objectives,technologies:a.mdx.frontmatter.technologies})))),n.createElement(i.Z,{message:"Need a development partner?",url:"/contact",ctaMessage:"lets get started"}),n.createElement(p.Z,null)))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function a(t,r,s){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,r){var n=r(4062);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},215:function(e,t,r){var n=r(7071);e.exports=function(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),s=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,r){var n=r(8698).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,r){var n=r(8698).default,o=r(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-case-study-template-js-e013e89b7da94db02d53.js.map