"use strict";
(self["webpackChunknew_salspot_software_landing"] = self["webpackChunknew_salspot_software_landing"] || []).push([[246],{

/***/ 978:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ ae; },
/* harmony export */   L: function() { return /* binding */ A; },
/* harmony export */   M: function() { return /* binding */ U; },
/* harmony export */   P: function() { return /* binding */ F; },
/* harmony export */   _: function() { return /* binding */ c; },
/* harmony export */   a: function() { return /* binding */ u; },
/* harmony export */   b: function() { return /* binding */ j; },
/* harmony export */   c: function() { return /* binding */ W; },
/* harmony export */   g: function() { return /* binding */ O; },
/* harmony export */   h: function() { return /* binding */ N; }
/* harmony export */ });
/* unused harmony exports S, d, e, f, i, j, w */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5147);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},u.apply(this,arguments);}function c(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}const g=(/* unused pure expression or super */ null && ([.25,.5,1,2])),p=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),m=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),f=e=>console.warn(e),w=(e,t)=>e-t,y=e=>e.map(e=>`${e.src} ${e.width}w`).join(",\n");function b(e){const t=e.lastIndexOf(".");if(-1!==t){const a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function v(e){let{layout:t="constrained",width:a,height:i,sourceMetadata:r,breakpoints:n,aspectRatio:s,formats:o=["auto","webp"]}=e;return o=o.map(e=>e.toLowerCase()),t=l(t),a&&i?u({},e,{formats:o,layout:t,aspectRatio:a/i}):(r.width&&r.height&&!s&&(s=r.width/r.height),"fullWidth"===t?(a=a||r.width||n[n.length-1],i=i||Math.round(a/(s||1.3333333333333333))):(a||(a=i&&s?i*s:r.width?r.width:i?Math.round(i/1.3333333333333333):800),s&&!i?i=Math.round(a/s):s||(s=a/i)),u({},e,{width:a,height:i,aspectRatio:s,layout:t,formats:o}));}function E(e,t){if(t===void 0){t=20;}var a;e=v(e);const{generateImageSource:i,filename:r,aspectRatio:n}=e;return null==(a=i(r,t,Math.round(t/n),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function M(e){e=v(e);let{pluginName:t,sourceMetadata:a,generateImageSource:i,layout:r,fit:n,options:s,width:o,height:l,filename:d,reporter:h={warn:f},backgroundColor:c,placeholderURL:m}=e;if(t||h.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof i)throw new Error("generateImageSource must be a function");var w;a&&(a.width||a.height)?a.format||(a.format=b(d)):a={width:o,height:l,format:(null==(w=a)?void 0:w.format)||b(d)||"auto"};const E=new Set(e.formats);(0===E.size||E.has("auto")||E.has(""))&&(E.delete("auto"),E.delete(""),E.add(a.format)),E.has("jpg")&&E.has("png")&&(h.warn(`[${t}] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead`),E.delete("jpg"===a.format?"png":"jpg"));const M=function(e){const{width:t,height:a,filename:i,layout:r="constrained",sourceMetadata:n,reporter:s={warn:f},breakpoints:o=p}=e,l=Object.entries({width:t,height:a}).filter(_ref=>{let[e,t]=_ref;return"number"==typeof t&&t<1;});if(l.length)throw new Error(`Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are ${l.map(e=>e.join(": ")).join(", ")}`);return"fixed"===r?function(_ref2){let{filename:e,sourceMetadata:t,width:a,height:i,fit:r="cover",outputPixelDensities:n=g,reporter:s={warn:f}}=_ref2;let o=t.width/t.height;const l=k(n);if(a&&i){const e=$(t,{width:a,height:i,fit:r});a=e.width,i=e.height,o=e.aspectRatio;}a?i||(i=Math.round(a/o)):a=i?Math.round(i*o):800;const d=a;if(t.width<a||t.height<i){const r=t.width<a?"width":"height";s.warn(`\nThe requested ${r} "${"width"===r?a:i}px" for the image ${e} was larger than the actual image ${r} of ${t[r]}px. If possible, replace the current image with a larger one.`),"width"===r?(a=t.width,i=Math.round(a/o)):a=(i=t.height)*o;}return{sizes:l.filter(e=>e>=1).map(e=>Math.round(e*a)).filter(e=>e<=t.width),aspectRatio:o,presentationWidth:d,presentationHeight:Math.round(d/o),unscaledWidth:a};}(e):"constrained"===r?S(e):"fullWidth"===r?S(u({breakpoints:o},e)):(s.warn(`No valid layout was provided for the image at ${i}. Valid image layouts are fixed, fullWidth, and constrained. Found ${r}`),{sizes:[n.width],presentationWidth:n.width,presentationHeight:n.height,aspectRatio:n.width/n.height,unscaledWidth:n.width});}(u({},e,{sourceMetadata:a})),I={sources:[]};let x=e.sizes;x||(x=((e,t)=>{switch(t){case"constrained":return`(min-width: ${e}px) ${e}px, 100vw`;case"fixed":return`${e}px`;case"fullWidth":return"100vw";default:return;}})(M.presentationWidth,r)),E.forEach(e=>{const a=M.sizes.map(a=>{const r=i(d,a,Math.round(a/M.aspectRatio),e,n,s);if(null!=r&&r.width&&r.height&&r.src&&r.format)return r;h.warn(`[${t}] The resolver for image ${d} returned an invalid value.`);}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){const e=a.find(e=>e.width===M.unscaledWidth)||a[0];e&&(I.fallback={src:e.src,srcSet:y(a),sizes:x});}else{var r;null==(r=I.sources)||r.push({srcSet:y(a),sizes:x,type:`image/${e}`});}});const N={images:I,layout:r,backgroundColor:c};switch(m&&(N.placeholder={fallback:m}),r){case"fixed":N.width=M.presentationWidth,N.height=M.presentationHeight;break;case"fullWidth":N.width=1,N.height=1/M.aspectRatio;break;case"constrained":N.width=e.width||M.presentationWidth||1,N.height=(N.width||1)/M.aspectRatio;}return N;}const k=e=>Array.from(new Set([1].concat(_toConsumableArray(e)))).sort(w);function S(_ref3){let{sourceMetadata:e,width:t,height:a,fit:i="cover",outputPixelDensities:r=g,breakpoints:n,layout:s}=_ref3;let o,l=e.width/e.height;const d=k(r);if(t&&a){const r=$(e,{width:t,height:a,fit:i});t=r.width,a=r.height,l=r.aspectRatio;}t=t&&Math.min(t,e.width),a=a&&Math.min(a,e.height),t||a||(a=(t=Math.min(800,e.width))/l),t||(t=a*l);const h=t;return(e.width<t||e.height<a)&&(t=e.width,a=e.height),t=Math.round(t),(null==n?void 0:n.length)>0?(o=n.filter(t=>t<=e.width),o.length<n.length&&!o.includes(e.width)&&o.push(e.width)):(o=d.map(e=>Math.round(e*t)),o=o.filter(t=>t<=e.width)),"constrained"!==s||o.includes(t)||o.push(t),o=o.sort(w),{sizes:o,aspectRatio:l,presentationWidth:h,presentationHeight:Math.round(h/l),unscaledWidth:t};}function $(e,t){const a=e.width/e.height;let i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":{const e=t.width?t.width:Number.MAX_SAFE_INTEGER,n=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(e,Math.round(n*a)),r=Math.min(n,Math.round(e/a));break;}case"outside":{const e=t.width?t.width:0,n=t.height?t.height:0;i=Math.max(e,Math.round(n*a)),r=Math.max(n,Math.round(e/a));break;}default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}const I=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),x=(/* unused pure expression or super */ null && (["images","placeholder"])),N=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function L(){return true&&true;}const W=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},T=e=>{var t,a,i;return null==(t=W(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},R=e=>{var t,a,i;return null==(t=W(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function _(e){var t;let{baseUrl:a,urlBuilder:i,sourceWidth:r,sourceHeight:n,pluginName:s="getImageData",formats:o=["auto"],breakpoints:l,options:d}=e,h=c(e,I);return null!=(t=l)&&t.length||"fullWidth"!==h.layout&&"FULL_WIDTH"!==h.layout||(l=m),M(u({},h,{pluginName:s,generateImageSource:(e,t,a,r)=>({width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:d,format:r})}),filename:a,formats:o,breakpoints:l,sourceMetadata:{width:r,height:n,format:"auto"}}));}function j(e,t,a,i,r){if(r===void 0){r={};}return L()||(r=u({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),u({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:u({},r,{opacity:t?1:0})});}function O(e,t,a,i,r,n,s,o){const l={};n&&(l.backgroundColor=n,"fixed"===a?(l.width=i,l.height=r,l.backgroundColor=n,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),o&&(l.objectPosition=o);const d=u({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:u({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return L()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}function C(e,t){var _r$images$sources2,_n$sources;const{images:a,placeholder:i}=e,r=u({},c(e,x),{images:u({},a,{sources:[]}),placeholder:i&&u({},i,{sources:[]})});var n;return t.forEach(_ref4=>{var _r$images$sources;let{media:t,image:a}=_ref4;t?(a.layout!==e.layout&&"development"==="production"&&0,(_r$images$sources=r.images.sources).push.apply(_r$images$sources,_toConsumableArray(a.images.sources.map(e=>u({},e,{media:t}))).concat([{media:t,srcSet:a.images.fallback.srcSet}])),r.placeholder&&r.placeholder.sources.push({media:t,srcSet:a.placeholder.fallback})): false&&0;}),(_r$images$sources2=r.images.sources).push.apply(_r$images$sources2,_toConsumableArray(a.sources)),null!=i&&i.sources&&(null==(n=r.placeholder)||(_n$sources=n.sources).push.apply(_n$sources,_toConsumableArray(i.sources))),r;}const z=["children"],D=function(_ref5){let{layout:t,width:a,height:i}=_ref5;return"fullWidth"===t?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{maxWidth:a,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${i}' width='${a}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null;},A=function(a){let{children:i}=a,r=c(a,z);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,u({},r)),i,null);},q=["src","srcSet","loading","alt","shouldLoad"],P=["fallback","sources","shouldLoad"],H=function(t){let{src:a,srcSet:i,loading:r,alt:n="",shouldLoad:s}=t,o=c(t,q);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",u({},o,{decoding:"async",loading:r,src:s?a:void 0,"data-src":s?void 0:a,srcSet:s?i:void 0,"data-srcset":s?void 0:i,alt:n}));},G=function(t){let{fallback:a,sources:i=[],shouldLoad:r=!0}=t,n=c(t,P);const s=n.sizes||(null==a?void 0:a.sizes),o=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(H,u({},n,a,{sizes:s,shouldLoad:r}));return i.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("picture",null,i.map(_ref6=>{let{media:t,srcSet:a,type:i}=_ref6;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:s});}),o):o;};var V;H.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},G.displayName="Picture",G.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};const B=["fallback"],F=function(t){let{fallback:a}=t,i=c(t,B);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(G,u({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",u({},i));};F.displayName="Placeholder",F.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(V=G.propTypes)?void 0:V.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null;}};const U=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(G,u({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(G,u({},t,{shouldLoad:!0}))));};U.displayName="MainImage",U.propTypes=G.propTypes;const Y=function(e,t,a){for(var _len=arguments.length,i=new Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){i[_key-3]=arguments[_key];}return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat(i)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`);},X={image:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,alt:Y},J=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],Z=["style","className"],K=new Set();let Q,ee;const te=function(e){let{as:t="div",image:a,style:l,backgroundColor:d,className:h,class:g,onStartLoad:p,onLoad:m,onError:f}=e,w=c(e,J);const{width:y,height:b,layout:v}=a,E=function(e,t,a){const i={};let r="gatsby-image-wrapper";return L()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(L()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(y,b,v),{style:M,className:k}=E,S=c(E,Z),$=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>JSON.stringify(a.images),[a.images]);g&&(h=g);const x=function(e,t,a){let i="";return"fullWidth"===e&&(i=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(i=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${a}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),i;}(v,y,b);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{Q||(Q=Promise.all(/* import() */[__webpack_require__.e(593), __webpack_require__.e(896)]).then(__webpack_require__.bind(__webpack_require__, 7896)).then(_ref7=>{let{renderImageToString:e,swapPlaceholderImage:t}=_ref7;return ee=e,{renderImageToString:e,swapPlaceholderImage:t};}));const e=$.current.querySelector("[data-gatsby-image-ssr]");if(e&&N())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr");},0)):(null==p||p({wasCached:!0}),e.addEventListener("load",function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr");},0);})),void K.add(I);if(ee&&K.has(I))return;let t,i;return Q.then(_ref8=>{let{renderImageToString:e,swapPlaceholderImage:r}=_ref8;$.current&&($.current.innerHTML=e(u({isLoading:!0,isLoaded:K.has(I),image:a},w)),K.has(I)||(t=requestAnimationFrame(()=>{$.current&&(i=r($.current,I,K,l,p,m,f));})));}),()=>{t&&cancelAnimationFrame(t),i&&i();};},[a]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{K.has(I)&&ee&&($.current.innerHTML=ee(u({isLoading:K.has(I),isLoaded:K.has(I),image:a},w)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}));},[a]),/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t,u({},S,{style:u({},M,l,{backgroundColor:d}),className:`${k}${h?` ${h}`:""}`,ref:$,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}));},ae=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(e){return e.image?(L()||"development"!=="production"||0,/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(te,e)):( false&&0,null);});ae.propTypes=X,ae.displayName="GatsbyImage";const ie=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],re=function(e,t){for(var _len2=arguments.length,a=new Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){a[_key2-2]=arguments[_key2];}return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`);},ne=new Set(["fixed","fullWidth","constrained"]),se={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,alt:Y,width:re,height:re,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:e=>{if(void 0!==e.layout&&!ne.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`);}},oe=function(t){return function(a){let{src:i,__imageData:r,__error:n}=a,s=c(a,ie);return n&&console.warn(n),r?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(t,u({image:r},s)):(console.warn("Image not loaded",i),n||"development"!=="production"||0,null);};}(ae);oe.displayName="StaticImage",oe.propTypes=se;

/***/ }),

/***/ 5147:
/***/ (function(module) {

const preserveCamelCase=string=>{let isLastCharLower=false;let isLastCharUpper=false;let isLastLastCharUpper=false;for(let i=0;i<string.length;i++){const character=string[i];if(isLastCharLower&&/[a-zA-Z]/.test(character)&&character.toUpperCase()===character){string=string.slice(0,i)+'-'+string.slice(i);isLastCharLower=false;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=true;i++;}else if(isLastCharUpper&&isLastLastCharUpper&&/[a-zA-Z]/.test(character)&&character.toLowerCase()===character){string=string.slice(0,i-1)+'-'+string.slice(i-1);isLastLastCharUpper=isLastCharUpper;isLastCharUpper=false;isLastCharLower=true;}else{isLastCharLower=character.toLowerCase()===character&&character.toUpperCase()!==character;isLastLastCharUpper=isLastCharUpper;isLastCharUpper=character.toUpperCase()===character&&character.toLowerCase()!==character;}}return string;};const camelCase=(input,options)=>{if(!(typeof input==='string'||Array.isArray(input))){throw new TypeError('Expected the input to be `string | string[]`');}options=Object.assign({pascalCase:false},options);const postProcess=x=>options.pascalCase?x.charAt(0).toUpperCase()+x.slice(1):x;if(Array.isArray(input)){input=input.map(x=>x.trim()).filter(x=>x.length).join('-');}else{input=input.trim();}if(input.length===0){return'';}if(input.length===1){return options.pascalCase?input.toUpperCase():input.toLowerCase();}const hasUpperCase=input!==input.toLowerCase();if(hasUpperCase){input=preserveCamelCase(input);}input=input.replace(/^[_.\- ]+/,'').toLowerCase().replace(/[_.\- ]+(\w|$)/g,(_,p1)=>p1.toUpperCase()).replace(/\d+(\w|$)/g,m=>m.toUpperCase());return postProcess(input);};module.exports=camelCase;// TODO: Remove this for the next major release
module.exports["default"]=camelCase;

/***/ }),

/***/ 301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(978);
const SecondaryPageHeader=_ref=>{let{classNames,headlineClassNames,smallTitle,title,subtext,textButton,backgroundImageFlag,imageFromContent}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:'header '+`${classNames?classNames:''}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"container-fluid"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"row headline"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`${headlineClassNames?headlineClassNames:"col-12 col-lg-7 col-md-8 col-sm-9 row"}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"title"},smallTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",{className:"page-type"},title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"skayline"}),subtext&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"page-blurb"},subtext)))),backgroundImageFlag&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-overlay"}),imageFromContent?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_1__.G,{className:"hero-image",image:imageFromContent}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:"hero-image"})));};/* harmony default export */ __webpack_exports__.A = (SecondaryPageHeader);

/***/ })

}]);
//# sourceMappingURL=5fe0cd28f1324f050dc6b24ce6151dac0b3cd5f4-c2f042386a2c71ff25f4.js.map