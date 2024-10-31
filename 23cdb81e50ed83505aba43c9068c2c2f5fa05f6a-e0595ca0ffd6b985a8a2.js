/*! For license information please see 23cdb81e50ed83505aba43c9068c2c2f5fa05f6a-e0595ca0ffd6b985a8a2.js.LICENSE.txt */
(self.webpackChunknew_salspot_software_landing=self.webpackChunknew_salspot_software_landing||[]).push([[364],{5900:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&t.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&t.push(s)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},50:function(t,e,n){"use strict";n.d(e,{Z:function(){return xt}});var r=n(5900),o=n.n(r),i=n(7294);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n(1143);function c(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function u(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function l(t,e){return Object.keys(e).reduce((function(n,r){var o,l=n,f=l[c(r)],d=l[r],p=s(l,[c(r),r].map(u)),v=e[r],h=function(t,e,n){var r=(0,i.useRef)(void 0!==t),o=(0,i.useState)(e),a=o[0],s=o[1],c=void 0!==t,u=r.current;return r.current=c,!c&&u&&a!==e&&s(e),[c?t:a,(0,i.useCallback)((function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[t].concat(r)),s(t)}),[n])]}(d,f,t[v]),E=h[0],x=h[1];return a({},p,((o={})[r]=E,o[v]=x,o))}),t)}n(9712);var f=n(5893);const d=["xxl","xl","lg","md","sm","xs"],p="xs",v=i.createContext({prefixes:{},breakpoints:d,minBreakpoint:p}),{Consumer:h,Provider:E}=v;function x(t,e){const{prefixes:n}=(0,i.useContext)(v);return t||n[e]||e}function m(t){var e=function(t){return t&&t.ownerDocument||document}(t);return e&&e.defaultView||window}var y=/([A-Z])/g;var g=/^ms-/;function b(t){return function(t){return t.replace(y,"-$1").toLowerCase()}(t).replace(g,"-ms-")}var C=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var w=function(t,e){var n="",r="";if("string"==typeof e)return t.style.getPropertyValue(b(e))||function(t,e){return m(t).getComputedStyle(t,e)}(t).getPropertyValue(b(e));Object.keys(e).forEach((function(o){var i=e[o];i||0===i?!function(t){return!(!t||!C.test(t))}(o)?n+=b(o)+": "+i+";":r+=o+"("+i+") ":t.style.removeProperty(b(o))})),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n},N=n(1721),k=n(3935),S=!1,O=i.createContext(null),j="unmounted",R="exited",A="entering",T="entered",P="exiting",L=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var o,i=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?i?(o=R,r.appearStatus=A):o=T:o=e.unmountOnExit||e.mountOnEnter?j:R,r.state={status:o},r.nextCallback=null,r}(0,N.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===j?{status:R}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==A&&n!==T&&(e=A):n!==A&&n!==T||(e=P)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===A){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===R&&this.setState({status:j})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[k.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!t&&!n||S?this.safeSetState({status:T},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:A},(function(){e.props.onEntering(i,a),e.onTransitionEnd(c,(function(){e.safeSetState({status:T},(function(){e.props.onEntered(i,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:k.findDOMNode(this);e&&!S?(this.props.onExit(r),this.safeSetState({status:P},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:R},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:R},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:k.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===j)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,s(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(O.Provider,{value:null},"function"==typeof n?n(t,r):i.cloneElement(i.Children.only(n),r))},e}(i.Component);function M(){}L.contextType=O,L.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:M,onEntering:M,onEntered:M,onExit:M,onExiting:M,onExited:M},L.UNMOUNTED=j,L.EXITED=R,L.ENTERING=A,L.ENTERED=T,L.EXITING=P;var D=L,_=!("undefined"==typeof window||!window.document||!window.document.createElement),K=!1,I=!1;try{var U={get passive(){return K=!0},get once(){return I=K=!0}};_&&(window.addEventListener("test",U,U),window.removeEventListener("test",U,!0))}catch(mt){}var B=function(t,e,n,r){if(r&&"boolean"!=typeof r&&!I){var o=r.once,i=r.capture,a=n;!I&&o&&(a=n.__once||function t(r){this.removeEventListener(e,t,i),n.call(this,r)},n.__once=a),t.addEventListener(e,a,K?r:i)}t.addEventListener(e,n,r)};var H=function(t,e,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(e,n,o),n.__once&&t.removeEventListener(e,n.__once,o)};var V=function(t,e,n,r){return B(t,e,n,r),function(){H(t,e,n,r)}};function X(t,e,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(t,e,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(e,n,r),t.dispatchEvent(o)}}(t,"transitionend",!0)}),e+n),i=V(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function Z(t,e,n,r){var o,i;null==n&&(o=w(t,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var a=X(t,n,r),s=V(t,"transitionend",e);return function(){a(),s()}}function F(t,e){const n=w(t,e)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function G(t,e){const n=F(t,"transitionDuration"),r=F(t,"transitionDelay"),o=Z(t,(n=>{n.target===t&&(o(),e(n))}),n+r)}var Y=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((t=>null!=t)).reduce(((t,e)=>{if("function"!=typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];t.apply(this,r),e.apply(this,r)}}),null)};const $=t=>t&&"function"!=typeof t?e=>{t.current=e}:t;var z=function(t,e){return(0,i.useMemo)((()=>function(t,e){const n=$(t),r=$(e);return t=>{n&&n(t),r&&r(t)}}(t,e)),[t,e])};var W=i.forwardRef(((t,e)=>{let{onEnter:n,onEntering:r,onEntered:o,onExit:a,onExiting:s,onExited:c,addEndListener:u,children:l,childRef:d,...p}=t;const v=(0,i.useRef)(null),h=z(v,d),E=t=>{var e;h((e=t)&&"setState"in e?k.findDOMNode(e):null!=e?e:null)},x=t=>e=>{t&&v.current&&t(v.current,e)},m=(0,i.useCallback)(x(n),[n]),y=(0,i.useCallback)(x(r),[r]),g=(0,i.useCallback)(x(o),[o]),b=(0,i.useCallback)(x(a),[a]),C=(0,i.useCallback)(x(s),[s]),w=(0,i.useCallback)(x(c),[c]),N=(0,i.useCallback)(x(u),[u]);return(0,f.jsx)(D,{ref:e,...p,onEnter:m,onEntered:g,onEntering:y,onExit:b,onExited:w,onExiting:C,addEndListener:N,nodeRef:v,children:"function"==typeof l?(t,e)=>l(t,{...e,ref:E}):i.cloneElement(l,{ref:E})})}));const q={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function J(t,e){const n=e["offset".concat(t[0].toUpperCase()).concat(t.slice(1))],r=q[t];return n+parseInt(w(e,r[0]),10)+parseInt(w(e,r[1]),10)}const Q={[R]:"collapse",[P]:"collapsing",[A]:"collapsing",[T]:"collapse show"};var tt=i.forwardRef(((t,e)=>{let{onEnter:n,onEntering:r,onEntered:a,onExit:s,onExiting:c,className:u,children:l,dimension:d="height",in:p=!1,timeout:v=300,mountOnEnter:h=!1,unmountOnExit:E=!1,appear:x=!1,getDimensionValue:m=J,...y}=t;const g="function"==typeof d?d():d,b=(0,i.useMemo)((()=>Y((t=>{t.style[g]="0"}),n)),[g,n]),C=(0,i.useMemo)((()=>Y((t=>{const e="scroll".concat(g[0].toUpperCase()).concat(g.slice(1));t.style[g]="".concat(t[e],"px")}),r)),[g,r]),w=(0,i.useMemo)((()=>Y((t=>{t.style[g]=null}),a)),[g,a]),N=(0,i.useMemo)((()=>Y((t=>{t.style[g]="".concat(m(g,t),"px"),t.offsetHeight}),s)),[s,m,g]),k=(0,i.useMemo)((()=>Y((t=>{t.style[g]=null}),c)),[g,c]);return(0,f.jsx)(W,{ref:e,addEndListener:G,...y,"aria-expanded":y.role?p:null,onEnter:b,onEntering:C,onEntered:w,onExit:N,onExiting:k,childRef:l.ref,in:p,timeout:v,mountOnEnter:h,unmountOnExit:E,appear:x,children:(t,e)=>i.cloneElement(l,{...e,className:o()(u,l.props.className,Q[t],"width"===g&&"collapse-horizontal")})})}));function et(t,e){return Array.isArray(t)?t.includes(e):t===e}const nt=i.createContext({});nt.displayName="AccordionContext";var rt=nt;const ot=i.forwardRef(((t,e)=>{let{as:n="div",bsPrefix:r,className:a,children:s,eventKey:c,...u}=t;const{activeEventKey:l}=(0,i.useContext)(rt);return r=x(r,"accordion-collapse"),(0,f.jsx)(tt,{ref:e,in:et(l,c),...u,className:o()(a,r),children:(0,f.jsx)(n,{children:i.Children.only(s)})})}));ot.displayName="AccordionCollapse";var it=ot;const at=i.createContext({eventKey:""});at.displayName="AccordionItemContext";var st=at;const ct=i.forwardRef(((t,e)=>{let{as:n="div",bsPrefix:r,className:a,onEnter:s,onEntering:c,onEntered:u,onExit:l,onExiting:d,onExited:p,...v}=t;r=x(r,"accordion-body");const{eventKey:h}=(0,i.useContext)(st);return(0,f.jsx)(it,{eventKey:h,onEnter:s,onEntering:c,onEntered:u,onExit:l,onExiting:d,onExited:p,children:(0,f.jsx)(n,{ref:e,...v,className:o()(a,r)})})}));ct.displayName="AccordionBody";var ut=ct;const lt=i.forwardRef(((t,e)=>{let{as:n="button",bsPrefix:r,className:a,onClick:s,...c}=t;r=x(r,"accordion-button");const{eventKey:u}=(0,i.useContext)(st),l=function(t,e){const{activeEventKey:n,onSelect:r,alwaysOpen:o}=(0,i.useContext)(rt);return i=>{let a=t===n?null:t;o&&(a=Array.isArray(n)?n.includes(t)?n.filter((e=>e!==t)):[...n,t]:[t]),null==r||r(a,i),null==e||e(i)}}(u,s),{activeEventKey:d}=(0,i.useContext)(rt);return"button"===n&&(c.type="button"),(0,f.jsx)(n,{ref:e,onClick:l,...c,"aria-expanded":Array.isArray(d)?d.includes(u):u===d,className:o()(a,r,!et(d,u)&&"collapsed")})}));lt.displayName="AccordionButton";var ft=lt;const dt=i.forwardRef(((t,e)=>{let{as:n="h2",bsPrefix:r,className:i,children:a,onClick:s,...c}=t;return r=x(r,"accordion-header"),(0,f.jsx)(n,{ref:e,...c,className:o()(i,r),children:(0,f.jsx)(ft,{onClick:s,children:a})})}));dt.displayName="AccordionHeader";var pt=dt;const vt=i.forwardRef(((t,e)=>{let{as:n="div",bsPrefix:r,className:a,eventKey:s,...c}=t;r=x(r,"accordion-item");const u=(0,i.useMemo)((()=>({eventKey:s})),[s]);return(0,f.jsx)(st.Provider,{value:u,children:(0,f.jsx)(n,{ref:e,...c,className:o()(a,r)})})}));vt.displayName="AccordionItem";var ht=vt;const Et=i.forwardRef(((t,e)=>{const{as:n="div",activeKey:r,bsPrefix:a,className:s,onSelect:c,flush:u,alwaysOpen:d,...p}=l(t,{activeKey:"onSelect"}),v=x(a,"accordion"),h=(0,i.useMemo)((()=>({activeEventKey:r,onSelect:c,alwaysOpen:d})),[r,c,d]);return(0,f.jsx)(rt.Provider,{value:h,children:(0,f.jsx)(n,{ref:e,...p,className:o()(s,v,u&&"".concat(v,"-flush"))})})}));Et.displayName="Accordion";var xt=Object.assign(Et,{Button:ft,Collapse:it,Item:ht,Header:pt,Body:ut})}}]);
//# sourceMappingURL=23cdb81e50ed83505aba43c9068c2c2f5fa05f6a-e0595ca0ffd6b985a8a2.js.map