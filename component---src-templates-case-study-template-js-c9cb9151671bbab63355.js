(self.webpackChunknew_salspot_software_landing=self.webpackChunknew_salspot_software_landing||[]).push([[403],{621:function(e,t,r){const n=r(9852);e.exports={MDXRenderer:n}},9852:function(e,t,r){var n=r(1132),o=r(9646),a=r(3693),l=r(1847);const s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const i=r(6540),{mdx:p}=r(5680),{useMDXScope:m}=r(6842);e.exports=function(e){let{scope:t,children:r}=e,a=l(e,s);const c=m(t),f=i.useMemo((()=>{if(!r)return null;const e=u({React:i,mdx:p},c),t=Object.keys(e),a=t.map((t=>e[t]));return o(Function,["_fn"].concat(t,[`${r}`])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return i.createElement(f,u({},a))}},4901:function(e,t,r){"use strict";var n=r(6540);t.A=e=>{let{message:t,url:r,ctaMessage:o}=e;return n.createElement("section",{className:"splashstrip color"},n.createElement("div",{className:"bg-pattern"}),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-8"},n.createElement("div",{className:"message"},t)),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"button-group"},n.createElement("a",{href:r},n.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},n.createElement("span",{className:"btn-title ng-binding"},o))))))))}},8364:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(6540),o=r(5680),a=r(8007),l=r(3278),s=r(9847),c=r(621);var u=e=>{let{objectives:t,technologies:r}=e;return n.createElement("div",{className:"aside-block post-body stats-block col-lg-2"},n.createElement("aside",null,n.createElement("div",null,n.createElement("div",{className:"stats-section"},n.createElement("div",{className:"icon"},n.createElement("i",{className:"icon-bullseye-arrow"})),n.createElement("h4",null,"Objectives"),n.createElement("ul",null,t&&t.map(((e,t)=>n.createElement("li",{key:t},e))))),n.createElement("div",{className:"stats-section"},n.createElement("div",{className:"icon"},n.createElement("i",{className:"icon-gear"})),n.createElement("h4",null,"Technologies"),n.createElement("ul",null,r&&r.map(((e,t)=>n.createElement("li",{key:t},e))))))))},i=r(4901),p=r(879),m=r(301),f=r(978);const d={Link:a.Link};function x(e){var t,r;let{data:a,children:x}=e;const b=(0,f.c)(null===(t=a.mdx.frontmatter.headerImage)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.gatsbyImageData);return n.createElement(n.Fragment,null,n.createElement(s.A,null,n.createElement(l.A,{className:"navbar-fixed-top"}),n.createElement(m.A,{classNames:"case-studies-template-header",smallTitle:"Case Study",title:a.mdx.frontmatter.title,backgroundImageFlag:a.mdx.frontmatter.headerImage,imageFromContent:b}),n.createElement("section",{className:"case-studies-template post-body"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"post-block col-lg-8 col-md-10"},n.createElement("article",{className:"post"},n.createElement(o.MDXProvider,{components:d},n.createElement(c.MDXRenderer,{frontmatter:a.mdx.frontmatter},a.mdx.body)))),n.createElement(u,{objectives:a.mdx.frontmatter.objectives,technologies:a.mdx.frontmatter.technologies})))),n.createElement(i.A,{message:"Need a development partner?",url:"/contact",ctaMessage:"lets get started"}),n.createElement(p.A,null)))}},79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,r){var n=r(79);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9646:function(e,t,r){var n=r(7550),o=r(5636);e.exports=function(e,t,r){if(n())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,t);var l=new(e.bind.apply(e,a));return r&&o(l,r.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports},3693:function(e,t,r){var n=r(7736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7550:function(e){function t(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(r){}return(e.exports=t=function(){return!!r},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},1847:function(e,t,r){var n=r(4893);e.exports=function(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},4893:function(e){e.exports=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,r){var n=r(5901),o=r(9291),a=r(7122),l=r(1869);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,r){var n=r(3738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,r){var n=r(3738).default,o=r(9045);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,r){var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-templates-case-study-template-js-c9cb9151671bbab63355.js.map