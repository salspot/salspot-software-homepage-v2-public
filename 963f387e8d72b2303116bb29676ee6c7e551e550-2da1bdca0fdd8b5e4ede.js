(self["webpackChunknew_salspot_software_landing"] = self["webpackChunknew_salspot_software_landing"] || []).push([[392],{

/***/ 879:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ App_Footer; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(8007);
;// CONCATENATED MODULE: ./src/assets/images/footer-map.png
/* harmony default export */ var footer_map = (__webpack_require__.p + "static/footer-map-03228220ebf2de382190bb2dfcc7eae2.png");
// EXTERNAL MODULE: ./src/assets/images/logo-salspot-white.png
var logo_salspot_white = __webpack_require__(4238);
;// CONCATENATED MODULE: ./src/components/App/Footer.js
const Footer=()=>{const currentYear=new Date().getFullYear();return/*#__PURE__*/react.createElement("footer",{className:"footer-area bg-color"},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-sm-12 footer-about-us"},/*#__PURE__*/react.createElement("div",{className:"single-footer-widget"},/*#__PURE__*/react.createElement("a",{href:"/",className:"logo"},/*#__PURE__*/react.createElement("img",{src:logo_salspot_white/* default */.A,className:"logo logo-white",alt:"logo"})),/*#__PURE__*/react.createElement("p",null,"By seamlessly integrating the latest technology and fostering a culture of excellence, we help your business to get unparalleled success"),/*#__PURE__*/react.createElement("ul",{className:"social-link"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"#",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-facebook"}))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"#",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-twitter"}))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"https://medium.com/@salspot-software",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-medium"}))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"#",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-linkedin"})))))),/*#__PURE__*/react.createElement("div",{className:"col-lg-2 col-sm-6"},/*#__PURE__*/react.createElement("div",{className:"single-footer-widget pl-5"},/*#__PURE__*/react.createElement("h3",null,"Explore"),/*#__PURE__*/react.createElement("ul",{className:"footer-links-list"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/"},"Home")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/work"},"Our Work")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/careers"},"Careers")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/blog"},"Our Blog")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/contact"},"Contact"))))),/*#__PURE__*/react.createElement("div",{className:"col-lg-4 col-sm-6"},/*#__PURE__*/react.createElement("div",{className:"single-footer-widget"},/*#__PURE__*/react.createElement("h3",null,"Address"),/*#__PURE__*/react.createElement("ul",{className:"footer-contact-info"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("i",{className:"bx bx-map"}),"Cluj-Napoca, Transylvania, ",/*#__PURE__*/react.createElement("br",null)," Romania"))))),/*#__PURE__*/react.createElement("div",{className:"footer-bottom-area"},/*#__PURE__*/react.createElement("div",{className:"row align-items-center"},/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-md-6"},/*#__PURE__*/react.createElement("p",null,"Copyright @",currentYear," ",/*#__PURE__*/react.createElement("strong",{className:"text-strong"},"Salspot Software")," All rights reserved")),/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-md-6"},/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/privacy-policy"},"Privacy Policy"))))))),/*#__PURE__*/react.createElement("div",{className:"footer-map"},/*#__PURE__*/react.createElement("img",{src:footer_map,alt:"footer-logo"})));};/* harmony default export */ var App_Footer = (Footer);

/***/ }),

/***/ 9847:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ App_Layout; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/recoil/es/index.js
var es = __webpack_require__(7444);
;// CONCATENATED MODULE: ./src/components/App/GoTop.js
const GoTop=_ref=>{let{scrollStepInPx,delayInMs}=_ref;const[thePosition,setThePosition]=React.useState(false);const timeoutRef=React.useRef(null);React.useEffect(()=>{if(document){document.addEventListener("scroll",()=>{if(window&&window.scrollY>170){setThePosition(true);}else{setThePosition(false);}});}},[]);const onScrollStep=()=>{if(window&&window.pageYOffset===0){clearInterval(timeoutRef.current);}if(window){window.scroll(0,window.pageYOffset-scrollStepInPx);}};const scrollToTop=()=>{timeoutRef.current=setInterval(onScrollStep,delayInMs);};const renderGoTopIcon=()=>{return/*#__PURE__*/React.createElement("div",{className:`go-top ${thePosition?'active':''}`,onClick:scrollToTop,role:"button",tabIndex:"0","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",{className:"flaticon-up"}));};return/*#__PURE__*/React.createElement(React.Fragment,null,renderGoTopIcon());};/* harmony default export */ var App_GoTop = ((/* unused pure expression or super */ null && (GoTop)));
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-side-effect/lib/index.js
var lib = __webpack_require__(2098);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(115);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
// EXTERNAL MODULE: ./node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js
var object_assign = __webpack_require__(8828);
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);
;// CONCATENATED MODULE: ./node_modules/react-helmet/es/Helmet.js






var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = object_assign_default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : __webpack_require__.g.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : __webpack_require__.g.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [react.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return react.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !react_fast_compare_default()(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (false) {}

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            react.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return react.createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }(react.Component), _class.propTypes = {
        base: (prop_types_default()).object,
        bodyAttributes: (prop_types_default()).object,
        children: prop_types_default().oneOfType([prop_types_default().arrayOf((prop_types_default()).node), (prop_types_default()).node]),
        defaultTitle: (prop_types_default()).string,
        defer: (prop_types_default()).bool,
        encodeSpecialCharacters: (prop_types_default()).bool,
        htmlAttributes: (prop_types_default()).object,
        link: prop_types_default().arrayOf((prop_types_default()).object),
        meta: prop_types_default().arrayOf((prop_types_default()).object),
        noscript: prop_types_default().arrayOf((prop_types_default()).object),
        onChangeClientState: (prop_types_default()).func,
        script: prop_types_default().arrayOf((prop_types_default()).object),
        style: prop_types_default().arrayOf((prop_types_default()).object),
        title: (prop_types_default()).string,
        titleAttributes: (prop_types_default()).object,
        titleTemplate: (prop_types_default()).string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = lib_default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

/* harmony default export */ var es_Helmet = ((/* unused pure expression or super */ null && (HelmetExport)));


;// CONCATENATED MODULE: ./src/assets/images/favicon.png
/* harmony default export */ var favicon = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/components/App/SEO.js
const SEO=()=>{return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(HelmetExport,{link:[{rel:'shortcut icon',type:'image/png',href:`${favicon}`}]},/*#__PURE__*/react.createElement("title",null,"Salspot Software - Software Development"),/*#__PURE__*/react.createElement("meta",{name:"description",content:"Salspot Software - Software Development"}),/*#__PURE__*/react.createElement("meta",{name:"og:title",property:"og:title",content:"Salspot Software - Software Development"}),/*#__PURE__*/react.createElement("meta",{name:"twitter:card",content:"Salspot Software -Software Development"}),/*#__PURE__*/react.createElement("link",{rel:"canonical",href:"https://salspot-software.com"}),/*#__PURE__*/react.createElement("meta",{property:"og:image",content:favicon})));};/* harmony default export */ var App_SEO = (SEO);
;// CONCATENATED MODULE: ./src/components/App/Layout.js
const Layout=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement(es/* RecoilRoot */.bi,null,/*#__PURE__*/react.createElement(App_SEO,null),children);};/* harmony default export */ var App_Layout = (Layout);

/***/ }),

/***/ 3278:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ App_Navbar; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/recoil/es/index.js
var es = __webpack_require__(7444);
;// CONCATENATED MODULE: ./src/utils/recoil-atoms.js
const collapsedState=(0,es/* atom */.eU)({key:'collapsedState',default:true});
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(8007);
// EXTERNAL MODULE: ./src/assets/images/logo-salspot-white.png
var logo_salspot_white = __webpack_require__(4238);
;// CONCATENATED MODULE: ./src/assets/images/logo-salspot-black.png
/* harmony default export */ var logo_salspot_black = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/components/App/Navbar.js
const Navbar=_ref=>{let{className,inverse}=_ref;const[collapsed,setCollapsed]=(0,es/* useRecoilState */.L4)(collapsedState);const toggleNavbar=()=>{setCollapsed(!collapsed);};react.useEffect(()=>{if(document){let elementId=document.getElementById("navbar");document.addEventListener("scroll",()=>{if(window.scrollY>170){elementId.classList.add("is-sticky");}else{elementId.classList.remove("is-sticky");}});window.scrollTo(0,0);}});const classOne=collapsed?"collapse navbar-collapse":"collapse navbar-collapse show";const classTwo=collapsed?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{id:"navbar",className:`navbar-area ${className!==null&&className!==void 0?className:''}`},/*#__PURE__*/react.createElement("div",{className:"tarn-nav"},/*#__PURE__*/react.createElement("div",{className:"container-fluid"},/*#__PURE__*/react.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/",onClick:()=>setCollapsed(true),className:"navbar-brand"},/*#__PURE__*/react.createElement("img",{src:logo_salspot_white/* default */.A,className:"logo logo-white",alt:"logo"}),/*#__PURE__*/react.createElement("img",{src:logo_salspot_black,className:"logo logo-black",alt:"logo"})),/*#__PURE__*/react.createElement("button",{//mobile button
onClick:toggleNavbar,className:classTwo,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},/*#__PURE__*/react.createElement("span",{className:"icon-bar top-bar"}),/*#__PURE__*/react.createElement("span",{className:"icon-bar middle-bar"}),/*#__PURE__*/react.createElement("span",{className:"icon-bar bottom-bar"})),/*#__PURE__*/react.createElement("div",{className:classOne,id:"navbarSupportedContent"},/*#__PURE__*/react.createElement("ul",{className:"navbar-nav"},/*#__PURE__*/react.createElement("li",{className:"nav-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/work",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link overline-reveal"},"Our Work")),/*#__PURE__*/react.createElement("li",{className:"nav-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/careers",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link overline-reveal"},"Careers")),/*#__PURE__*/react.createElement("li",{className:"nav-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/blog",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link overline-reveal"},"Blog")),/*#__PURE__*/react.createElement("li",{className:"nav-item only-mobile"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/contact",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link"},"Contact"))),/*#__PURE__*/react.createElement("div",{className:"others-option align-items-center only-desktop"},/*#__PURE__*/react.createElement("div",{className:"option-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry.Link,{to:"/contact",activeClassName:"active",onClick:()=>setCollapsed(true),className:"default-btn"},"Contact"," ",/*#__PURE__*/react.createElement("span",null))))))))));};/* harmony default export */ var App_Navbar = (Navbar);

/***/ }),

/***/ 115:
/***/ (function(module) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 2098:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(6540);
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ 4238:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__.A = ("data:image/png;base64,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");

/***/ })

}]);
//# sourceMappingURL=963f387e8d72b2303116bb29676ee6c7e551e550-2da1bdca0fdd8b5e4ede.js.map