(self["webpackChunknew_salspot_software"] = self["webpackChunknew_salspot_software"] || []).push([[278],{

/***/ 2993:
/***/ (function(module) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;
  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
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
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
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
    if ((error.message || '').match(/stack|recursion/i)) {
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

/***/ 4839:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var React = __webpack_require__(7294);
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
    var SideEffect = /*#__PURE__*/
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

/***/ 9483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isConstructor = __webpack_require__(4411);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(4811);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var classof = __webpack_require__(648);
var getBuiltIn = __webpack_require__(5005);
var inspectSource = __webpack_require__(2788);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 8523:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9662);

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 2492:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);

module.exports = global.Promise;


/***/ }),

/***/ 9478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var newPromiseCapability = __webpack_require__(8523);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 6707:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9670);
var aConstructor = __webpack_require__(9483);
var isNullOrUndefined = __webpack_require__(8554);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 4811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 7727:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var IS_PURE = __webpack_require__(1913);
var NativePromiseConstructor = __webpack_require__(2492);
var fails = __webpack_require__(7293);
var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var speciesConstructor = __webpack_require__(6707);
var promiseResolve = __webpack_require__(9478);
var defineBuiltIn = __webpack_require__(8052);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),

/***/ 1126:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ App_Footer; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(1082);
;// CONCATENATED MODULE: ./src/assets/images/footer-map.png
/* harmony default export */ var footer_map = (__webpack_require__.p + "static/footer-map-03228220ebf2de382190bb2dfcc7eae2.png");
;// CONCATENATED MODULE: ./src/components/App/Footer.js
const Footer=()=>{const currentYear=new Date().getFullYear();return/*#__PURE__*/react.createElement("footer",{className:"footer-area bg-color"},/*#__PURE__*/react.createElement("div",{className:"container"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-sm-12 footer-about-us"},/*#__PURE__*/react.createElement("div",{className:"single-footer-widget"},/*#__PURE__*/react.createElement("a",{href:"/",className:"logo"},/*#__PURE__*/react.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZWk2OUNGRTB5OEExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjIwIDQwIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHRleHQgZHg9IjAiIGR5PSIwIiBmb250LWZhbWlseT0iJnF1b3Q7ZWk2OUNGRTB5OEExOjo6TnVuaXRvJnF1b3Q7IiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjQ1MzE0MSAyOS45NDM1MjUpIiBmaWxsPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAiPjx0c3BhbiB5PSIwIiBmb250LXdlaWdodD0iNDAwIiBzdHJva2Utd2lkdGg9IjAiPjwhW0NEQVRBW1NhbHNwb3QgU29mdHdhcmVdXT48L3RzcGFuPjwvdGV4dD48c3R5bGU+PCFbQ0RBVEFbQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6ICdlaTY5Q0ZFMHk4QTE6OjpOdW5pdG8nO2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDogNDAwO3NyYzogdXJsKGRhdGE6Zm9udC90dGY7Y2hhcnNldD11dGYtODtiYXNlNjQsQUFFQUFBQVFBUUFBQkFBQVIwUkZSZ0hnQUNrQUFBSVFBQUFBUWtkUVQxT1JCNW1BQUFBRHhBQUFBWHhIVTFWQ2tBdU1IQUFBQXB3QUFBQmNUMU12TW9RNFpqY0FBQUw0QUFBQVlGTlVRVlRuWnN3MEFBQUNWQUFBQUVoamJXRndBaHNCMEFBQUExZ0FBQUJzWjJGemNBQUFBQkFBQUFFVUFBQUFDR2RzZVdZYUdURklBQUFIY0FBQUJaNW9aV0ZrRzlvcEJRQUFBYUFBQUFBMmFHaGxZUWRzQWs4QUFBRjhBQUFBSkdodGRIZ2F6d0l4QUFBQjJBQUFBRGhzYjJOaERFb0t2Z0FBQVJ3QUFBQWViV0Y0Y0FBZkFOTUFBQUU4QUFBQUlHNWhiV1V3WUZiU0FBQUZRQUFBQWk1d2IzTjAvN01BSEFBQUFWd0FBQUFnY0hKbGNHZ0dqSVVBQUFFTUFBQUFCN2dCLzRXd0JJMEFBQUVBQWYvL0FBOEFBQUFWQUdjQXN3RHpBUzRCVmdHSEFjZ0I5UUpBQW4wQ3d3TFBBczhBQUFBQkFBQUFEZ0JpQUFjQWJ3QUZBQUVBQUFBQUFBQUFBQUFBQUFBQUJBQUJBQU1BQUFBQUFBRC9zQUFjQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUFBL1ArbndBQUJSLytndjZDQlBRQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUE0QUFRQUFBQU9hSFluRUpIVmZEenoxQUFNRDZBQUFBQURiRjZYVkFBQUFBTjR5cFRYK2d2N3NCUFFFRHdBQUFBWUFBZ0FBQUFBQUFBSDBBRElDWndBeEFoSUFOZ0lVQUM0QlRRQURBU2dBVEFJc0FDNENSd0JNQVdZQVRBSGhBQzhCWHYvOUEwa0FKZ0oxQUFNQkFnQUFBQUVBQWdBeUFBQUFIZ0FBQUE0QUFRQUNBQUFBREFBQUFBd0FBUUFBQUFZQUFRQU1BQUVBQVFBTUFBRUFCQUFCQVRvQUFnQUNBQUVBQ3dBQkFBd0FEQUFDQUFBQUFRQUJBQWdBQWdBQUFCUUFBZ0FBQUNRQUFuZG5hSFFCQUFBQWFYUmhiQUVCQUFFQUJBQVVBQU1BQUFBQ0FRUUJrQUFBQXJ3QUFBQURBQUVBQWdFaEFBQUFBQUFCQUFBQUFRQUFBQW9BS2dBNEFBTkVSa3hVQUJSamVYSnNBQlJzWVhSdUFCUUFCQUFBQUFELy93QUJBQUFBQVd4cFoyRUFDQUFBQUFFQUFBQUJBQVFBQkFBSUFBRUFDQUFCQUJJQUFRQUlBQUVBQkFBTUFBSUFCUUFCQUFFQUJBQUVBallCa0FBRkFBQUNpZ0pZQUFBQVN3S0tBbGdBQUFGZUFCd0JJZ0FBQUFBQUFBQUFBQUFBQUtBQUF2OVFBQ0JMQUFBQUFBQUFBQUJPVDA1RkFNQUFBUHNDQS9QK253QUFCRFVCTENBQUFaY0FBQUFBQWVRQ3dRQUFBQ0FBQXdBQUFBSUFBQUFEQUFBQUZBQURBQUVBQUFBVUFBUUFXQUFBQUJJQUVBQURBQUlBSUFCVEFHRUFaZ0JzQUhBQWRBQjMvLzhBQUFBZ0FGTUFZUUJsQUd3QWJ3QnlBSGYvLy8vdC82Ny9vZitlLzVuL2wvK1cvNVFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFDZ0FxQURnQUEwUkdURlFBRkdONWNtd0FGR3hoZEc0QUZBQUVBQUFBQVAvL0FBRUFBQUFCYTJWeWJnQUlBQUFBQVFBQUFBRUFCQUFDQUFnQUFnRW9BQW9BQWdEWUFBUUFBQUVBQU9JQUNnQUtBQUFBQUFBQUFBRC8rUUFBQUFELyt3QUEvL3NBQUFBQUFBQUFBUC82QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy9zQUFBQUFBQUFBQUFBQUFBRC8rUUFBQUFBQUV3QUEvL1lBRFAvMkFBWUFBQUFBQUFBQUFQLzZBQUFBQVAvK0FBRC8vZ0FBQUFBQUFBQUEvL1lBQUFBQS8vc0FBQUFBQUFELyt3QUFBQUQvOVFBQS8vdi85d0FBLy9rQUFQLzZBQUFBQUFBZUFBRC8rd0FhLy9zQUdnQUEvL3NBQmdBQUFBWUFBQUFBLy9NQUFBQUNBQUQvOGdBQUFBRC8rUUFBLy92LzZQLzcvL0FBQWdBQkFBRUFEQUFBQUFFQUFRQU1BQVVBQ0FBQkFBa0FBZ0FCQUFNQUF3QUdBQWNBQkFBSkFBRUFBUUFNQUFRQUFnQUJBQWtBQmdBQUFBQUFCd0FGQUFnQUF3QUdBQUVBREFBRUFBQUFBUUFTQUFFQUFRQUxBQUVBQ2dBS0FBQUFEQUNXQUFNQUFRUUpBQUFBb2dEMkFBTUFBUVFKQUFFQURBRHFBQU1BQVFRSkFBSUFEZ0RjQUFNQUFRUUpBQU1BTWdDcUFBTUFBUVFKQUFRQUhBQ09BQU1BQVFRSkFBVUFHZ0IwQUFNQUFRUUpBQVlBSEFCWUFBTUFBUVFKQUE0QU5nQWlBQU1BQVFRSkFRQUFEQUFXQUFNQUFRUUpBUUVBREFBS0FBTUFBUVFKQVFRQURnRGNBQU1BQVFRSkFTRUFDZ0FBQUZJQWJ3QnRBR0VBYmdCSkFIUUFZUUJzQUdrQVl3QlhBR1VBYVFCbkFHZ0FkQUJvQUhRQWRBQndBSE1BT2dBdkFDOEFjd0JqQUhJQWFRQndBSFFBY3dBdUFITUFhUUJzQUM0QWJ3QnlBR2NBTHdCUEFFWUFUQUJPQUhVQWJnQnBBSFFBYndBdEFGSUFaUUJuQUhVQWJBQmhBSElBVmdCbEFISUFjd0JwQUc4QWJnQWdBRE1BTGdBMkFEQUFNZ0JPQUhVQWJnQnBBSFFBYndBZ0FGSUFaUUJuQUhVQWJBQmhBSElBTXdBdUFEWUFNQUF5QURzQVRnQlBBRTRBUlFBN0FFNEFkUUJ1QUdrQWRBQnZBQzBBVWdCbEFHY0FkUUJzQUdFQWNnQlNBR1VBWndCMUFHd0FZUUJ5QUU0QWRRQnVBR2tBZEFCdkFFTUFid0J3QUhrQWNnQnBBR2NBYUFCMEFDQUFNZ0F3QURFQU5BQWdBRlFBYUFCbEFDQUFUZ0IxQUc0QWFRQjBBRzhBSUFCUUFISUFid0JxQUdVQVl3QjBBQ0FBUVFCMUFIUUFhQUJ2QUhJQWN3QWdBQ2dBYUFCMEFIUUFjQUJ6QURvQUx3QXZBR2NBYVFCMEFHZ0FkUUJpQUM0QVl3QnZBRzBBTHdCbkFHOEFid0JuQUd3QVpRQm1BRzhBYmdCMEFITUFMd0J1QUhVQWJnQnBBSFFBYndBcEFBQUFBZ0F5LzB3QndnTEJBQU1BQndBQUZ4RWhFU1VoRVNFeUFaRCtvZ0VzL3RTMEEzWDhpeklERVFBQUFRQXgvL2NDUHdMS0FEY0FBQVVpSmlZbkppWStBaGNXRmpNeU5qVTBKaWNuSmlZMU5ENENNeklXRnhZV0RnSW5KaVlqSWdZR0ZSUVdGeGNXRmhVVURnSUJPeTlhVFI4TUNRVVBGZzB0WmtCYVZ6OUthRjVkSmtSZU9UOXRMQXNJQmc4WERpaFdORFZOS3p0RGFHVmhKRVJnQ1JBZUZ3a1hGeEFDQ0NBZFF6Y3RNdzhWRkZ0TUwwMDNIaU1qQ1JjVkRnSUpIaHNnUFNnd09BMFdGVlZKTEVvMUhBQUJBRGIvOXdISUFlOEFOZ0FBRnlJbUpqVTBOall6TXhVaklnWUdGUlFXTXpJMk5qVTFOQ1lqSWdZSEJpNENOamMyTmpNeUZoWVZFUlFHSXlJbU5UVXpEZ0xsTWs4dU4zOXVMU3hSWFNVNU1TZzlJekk1STBZbkRoUU1BZ3NNTEZZblAxSW9FeElURkFrSUxVSUpKMFFxTmo0YU5ROGtJU2swSmtJcmNqNDNFaFFIQlJBVkZBWVdGQ2xUUWY3eEZCWVdGRTRtTmg0QUFBRUFMdi8zQWVzQjd3QXJBQUFGSWlZbU5UUTJOak15SGdJVkZBWWpJVFVoQnpRbUppTWlCZ1lWRlJRV016STJOelllQWdZSEJnWUJKMDF2UFR4cFJURk9OeDBTRWY2a0FVa1FJRDB1TTBja1dWSWlReUFPRnc0RkNRMGhXZ2s5Y0U1TWNVQWhQbGczRUE4MURUWkxLQzlUTndaY1lCSVZDUUVORXhZSUdCb0FBUUFELy9rQlhnTEdBQ2dBQUJjaUpqVVJJeUltTlRRMk16TUhOVFEyTnpjMkZoWUdCZ2NIQmdZVkZTY3pNaFlWRkFZakl4RVVqaE1WUUJBVEV4QldGbDFhSFE0UkJRUU9DaGM5Tnd4NEVSSVNFV3dIRmhRQmhCRVBEeEFWSmw5a0NBTUJEQklURGdFQ0JVQStLZzhRRHc4Ui9ud3FBQUVBVFAvM0FTUUN5QUFaQUFBWElpWTFFVFEyTXpJV0ZSRVVGak15TmpNMkZoVVVCZ2NHQnVCSVRCUVVFeFlyS2drT0J3c0pFQklJRWdsWVVnSCtGQlVWRlA0SU5qVUNBUXdTRWhJREFRSUFBZ0F1Ly9jQi9nSHZBQkVBSHdBQUJTSW1KalUwUGdJek1oWVdGUlFPQWljeU5qWTFOQ1lqSWdZR0ZSUVdBUlpIYURrZ1BsVTFSMmc1SUQ1Vk5TMUVKVkZGTGtNbFVnaytjVTA2WFVJalBuRk5PbHhESTBFc1ZEdGJZQ3RUUFZwaEFBQUNBRXovUlFJWkFlOEFIZ0FzQUFBWElpWTFFVFEyTXpJV0ZSVW5Oall6TWhZV0ZSUUdCaU1pSmljekVSUUdOekkyTmpVMEppTWlCZ1lWRkJaMEZCUVVFeFFWQ3hCZlFrRmhOVFZnUWtKZUVRd1dxaTVESlZGRkxVUWxVcnNWRkFKV0ZCVVZGRjhPT1VNOWNVNU5jVDVET1A3OEZCWHpMRlE3VzJBclV6MWFZUUFBQVFCTS8va0JZQUh4QUJ3QUFCY2lKalVSTkRZek1oWVZGU00yTmpjMkZoY1dCZ2NIQmdZVkZSUUdkUlFWRkJNVEZRb1FXa0lQRWdFQkVoTVFSRWtWQnhZVUFhRVVGUlVVVVR0QUFnRVBFaEVVQWdJR1MwSHlGQllBQVFBdi8vY0JzZ0h2QURJQUFCY2lKaWNtSmo0Q0Z4WVdNekkyTlRRbUp5Y21KalUwTmpZek1oWVhGaFlPQWljbUppTWlCaFVVRmhjWEZoWVZGQWJ3TFZzbkNnZ0REUk1NSjBra09Ub21LVnMvUFM5V09TeFBJQW9IQlE0VUN4NCtIamc2SkNaYlFVRnFDUlliQnhNVERnTUdHQk1xSkJ3aENSUU5RRE10UVNRWEdRY1RFdzBDQnhRVExDUWNKQWdURGowMFFrNEFBZi85Ly9jQlpnS0NBQ3dBQUFVaUppWTFOU01pSmpVME5qTXpOVFEyTXpJV0ZSVXpNaFlWRkFZakl4VVVGak15TmpNMkZoVVVCZ2NHQmdFUE9VMG1ReEVTRWhGREZoTVRGWDRSRWhJUmZqQTJFeHNKQ1F3SkN3d25DU2xQT2Y4UkR3OFFjeFFWRlJSekVBOFBFZmM1T3dnQkRoRU1GQVFFQndBQkFDYi8rUU1qQWUwQUtnQUFGeUltSndNbU5qWXpNaFlYRXlNVE5qWXpNaFlYRXlNVE5qWXpNaFlXQndNR0JpTWlKaWNETXdNR0J2UVJHZ2lWQmdVVUR3OFRCb3dZa0FjVkVSQVdCbzBYamdjVURoQVJBZ2FWQnhzUkVSb0hsQ3VUQnhvSEVoUUJsUkVhRGc0VC9uQUJrQklQRUJIK2NBR1NFZzBRR2cvK2F4TVRFeE1CbHY1cUV4TUEvLzhBQS8vM0FuRUN5QUFtQUFRQUFBQUhBQVVCVFFBQUFBQT0pIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XV0+PC9zdHlsZT48L3N2Zz4=",className:"logo logo-white",alt:"logo"})),/*#__PURE__*/react.createElement("p",null,"By seamlessly integrating the latest technology and fostering a culture of excellence, we elevate your business towards unparalleled success"),/*#__PURE__*/react.createElement("ul",{className:"social-link"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-facebook"}))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-twitter"}))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-instagram"}))),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"#",className:"d-block",target:"_blank",rel:"noreferrer"},/*#__PURE__*/react.createElement("i",{className:"bx bxl-linkedin"})))))),/*#__PURE__*/react.createElement("div",{className:"col-lg-2 col-sm-6"},/*#__PURE__*/react.createElement("div",{className:"single-footer-widget pl-5"},/*#__PURE__*/react.createElement("h3",null,"Explore"),/*#__PURE__*/react.createElement("ul",{className:"footer-links-list"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/"},"Home")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/work"},"Our Work")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/careers"},"Careers")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/blog"},"Our Blog")),/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/contact"},"Contact"))))),/*#__PURE__*/react.createElement("div",{className:"col-lg-4 col-sm-6"},/*#__PURE__*/react.createElement("div",{className:"single-footer-widget"},/*#__PURE__*/react.createElement("h3",null,"Address"),/*#__PURE__*/react.createElement("ul",{className:"footer-contact-info"},/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement("i",{className:"bx bx-map"}),"Cluj-Napoca, Transylvania,, ",/*#__PURE__*/react.createElement("br",null)," Romania"))))),/*#__PURE__*/react.createElement("div",{className:"footer-bottom-area"},/*#__PURE__*/react.createElement("div",{className:"row align-items-center"},/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-md-6"},/*#__PURE__*/react.createElement("p",null,"Copyright @",currentYear," ",/*#__PURE__*/react.createElement("strong",{className:"text-strong"},"Salspot Software")," All rights reserved")),/*#__PURE__*/react.createElement("div",{className:"col-lg-6 col-md-6"},/*#__PURE__*/react.createElement("ul",null,/*#__PURE__*/react.createElement("li",null,/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/privacy-policy"},"Privacy Policy"))))))),/*#__PURE__*/react.createElement("div",{className:"footer-map"},/*#__PURE__*/react.createElement("img",{src:footer_map,alt:"footer-logo"})));};/* harmony default export */ var App_Footer = (Footer);

/***/ }),

/***/ 3047:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ App_Layout; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/recoil/es/index.js
var es = __webpack_require__(2653);
;// CONCATENATED MODULE: ./src/components/App/GoTop.js
const GoTop=_ref=>{let{scrollStepInPx,delayInMs}=_ref;const[thePosition,setThePosition]=React.useState(false);const timeoutRef=React.useRef(null);React.useEffect(()=>{if(document){document.addEventListener("scroll",()=>{if(window&&window.scrollY>170){setThePosition(true);}else{setThePosition(false);}});}},[]);const onScrollStep=()=>{if(window&&window.pageYOffset===0){clearInterval(timeoutRef.current);}if(window){window.scroll(0,window.pageYOffset-scrollStepInPx);}};const scrollToTop=()=>{timeoutRef.current=setInterval(onScrollStep,delayInMs);};const renderGoTopIcon=()=>{return/*#__PURE__*/React.createElement("div",{className:"go-top "+(thePosition?'active':''),onClick:scrollToTop,role:"button",tabIndex:"0","aria-hidden":"true"},/*#__PURE__*/React.createElement("i",{className:"flaticon-up"}));};return/*#__PURE__*/React.createElement(React.Fragment,null,renderGoTopIcon());};/* harmony default export */ var App_GoTop = ((/* unused pure expression or super */ null && (GoTop)));
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-side-effect/lib/index.js
var lib = __webpack_require__(4839);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(2993);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
// EXTERNAL MODULE: ./node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js
var object_assign = __webpack_require__(6494);
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
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
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
    title: getMethodsForTag(TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
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

;// CONCATENATED MODULE: ./src/components/App/SEO.js
const SEO=()=>{return/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(HelmetExport,null,/*#__PURE__*/react.createElement("title",null,"Salspot Software - Customer Software Development"),/*#__PURE__*/react.createElement("meta",{name:"description",content:"Salspot Software - Customer Software Development"}),/*#__PURE__*/react.createElement("meta",{name:"og:title",property:"og:title",content:"Salspot Software - Customer Software Development"}),/*#__PURE__*/react.createElement("meta",{name:"twitter:card",content:"Salspot Software -Customer Software Development"}),/*#__PURE__*/react.createElement("link",{rel:"canonical",href:"https://salspot-software.com"}),/*#__PURE__*/react.createElement("meta",{property:"og:image",content:"https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg"})));};/* harmony default export */ var App_SEO = (SEO);
;// CONCATENATED MODULE: ./src/components/App/Layout.js
const Layout=_ref=>{let{children}=_ref;return/*#__PURE__*/react.createElement(es/* RecoilRoot */.Wh,null,/*#__PURE__*/react.createElement(App_SEO,null),children);};/* harmony default export */ var App_Layout = (Layout);

/***/ }),

/***/ 7196:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ App_Navbar; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/recoil/es/index.js
var es = __webpack_require__(2653);
;// CONCATENATED MODULE: ./src/utils/recoil-atoms.js
const collapsedState=(0,es/* atom */.cn)({key:'collapsedState',default:true});
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 1 modules
var gatsby_browser_entry = __webpack_require__(1082);
;// CONCATENATED MODULE: ./src/assets/images/logo-white.svg
/* harmony default export */ var logo_white = ("data:image/svg+xml;base64,PHN2ZyBpZD0iZWk2OUNGRTB5OEExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjIwIDQwIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHRleHQgZHg9IjAiIGR5PSIwIiBmb250LWZhbWlseT0iJnF1b3Q7ZWk2OUNGRTB5OEExOjo6TnVuaXRvJnF1b3Q7IiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjQ1MzE0MSAyOS45NDM1MjUpIiBmaWxsPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAiPjx0c3BhbiB5PSIwIiBmb250LXdlaWdodD0iNDAwIiBzdHJva2Utd2lkdGg9IjAiPjwhW0NEQVRBW1NhbHNwb3QgU29mdHdhcmVdXT48L3RzcGFuPjwvdGV4dD48c3R5bGU+PCFbQ0RBVEFbQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6ICdlaTY5Q0ZFMHk4QTE6OjpOdW5pdG8nO2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDogNDAwO3NyYzogdXJsKGRhdGE6Zm9udC90dGY7Y2hhcnNldD11dGYtODtiYXNlNjQsQUFFQUFBQVFBUUFBQkFBQVIwUkZSZ0hnQUNrQUFBSVFBQUFBUWtkUVQxT1JCNW1BQUFBRHhBQUFBWHhIVTFWQ2tBdU1IQUFBQXB3QUFBQmNUMU12TW9RNFpqY0FBQUw0QUFBQVlGTlVRVlRuWnN3MEFBQUNWQUFBQUVoamJXRndBaHNCMEFBQUExZ0FBQUJzWjJGemNBQUFBQkFBQUFFVUFBQUFDR2RzZVdZYUdURklBQUFIY0FBQUJaNW9aV0ZrRzlvcEJRQUFBYUFBQUFBMmFHaGxZUWRzQWs4QUFBRjhBQUFBSkdodGRIZ2F6d0l4QUFBQjJBQUFBRGhzYjJOaERFb0t2Z0FBQVJ3QUFBQWViV0Y0Y0FBZkFOTUFBQUU4QUFBQUlHNWhiV1V3WUZiU0FBQUZRQUFBQWk1d2IzTjAvN01BSEFBQUFWd0FBQUFnY0hKbGNHZ0dqSVVBQUFFTUFBQUFCN2dCLzRXd0JJMEFBQUVBQWYvL0FBOEFBQUFWQUdjQXN3RHpBUzRCVmdHSEFjZ0I5UUpBQW4wQ3d3TFBBczhBQUFBQkFBQUFEZ0JpQUFjQWJ3QUZBQUVBQUFBQUFBQUFBQUFBQUFBQUJBQUJBQU1BQUFBQUFBRC9zQUFjQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUFBL1ArbndBQUJSLytndjZDQlBRQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUE0QUFRQUFBQU9hSFluRUpIVmZEenoxQUFNRDZBQUFBQURiRjZYVkFBQUFBTjR5cFRYK2d2N3NCUFFFRHdBQUFBWUFBZ0FBQUFBQUFBSDBBRElDWndBeEFoSUFOZ0lVQUM0QlRRQURBU2dBVEFJc0FDNENSd0JNQVdZQVRBSGhBQzhCWHYvOUEwa0FKZ0oxQUFNQkFnQUFBQUVBQWdBeUFBQUFIZ0FBQUE0QUFRQUNBQUFBREFBQUFBd0FBUUFBQUFZQUFRQU1BQUVBQVFBTUFBRUFCQUFCQVRvQUFnQUNBQUVBQ3dBQkFBd0FEQUFDQUFBQUFRQUJBQWdBQWdBQUFCUUFBZ0FBQUNRQUFuZG5hSFFCQUFBQWFYUmhiQUVCQUFFQUJBQVVBQU1BQUFBQ0FRUUJrQUFBQXJ3QUFBQURBQUVBQWdFaEFBQUFBQUFCQUFBQUFRQUFBQW9BS2dBNEFBTkVSa3hVQUJSamVYSnNBQlJzWVhSdUFCUUFCQUFBQUFELy93QUJBQUFBQVd4cFoyRUFDQUFBQUFFQUFBQUJBQVFBQkFBSUFBRUFDQUFCQUJJQUFRQUlBQUVBQkFBTUFBSUFCUUFCQUFFQUJBQUVBallCa0FBRkFBQUNpZ0pZQUFBQVN3S0tBbGdBQUFGZUFCd0JJZ0FBQUFBQUFBQUFBQUFBQUtBQUF2OVFBQ0JMQUFBQUFBQUFBQUJPVDA1RkFNQUFBUHNDQS9QK253QUFCRFVCTENBQUFaY0FBQUFBQWVRQ3dRQUFBQ0FBQXdBQUFBSUFBQUFEQUFBQUZBQURBQUVBQUFBVUFBUUFXQUFBQUJJQUVBQURBQUlBSUFCVEFHRUFaZ0JzQUhBQWRBQjMvLzhBQUFBZ0FGTUFZUUJsQUd3QWJ3QnlBSGYvLy8vdC82Ny9vZitlLzVuL2wvK1cvNVFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFDZ0FxQURnQUEwUkdURlFBRkdONWNtd0FGR3hoZEc0QUZBQUVBQUFBQVAvL0FBRUFBQUFCYTJWeWJnQUlBQUFBQVFBQUFBRUFCQUFDQUFnQUFnRW9BQW9BQWdEWUFBUUFBQUVBQU9JQUNnQUtBQUFBQUFBQUFBRC8rUUFBQUFELyt3QUEvL3NBQUFBQUFBQUFBUC82QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy9zQUFBQUFBQUFBQUFBQUFBRC8rUUFBQUFBQUV3QUEvL1lBRFAvMkFBWUFBQUFBQUFBQUFQLzZBQUFBQVAvK0FBRC8vZ0FBQUFBQUFBQUEvL1lBQUFBQS8vc0FBQUFBQUFELyt3QUFBQUQvOVFBQS8vdi85d0FBLy9rQUFQLzZBQUFBQUFBZUFBRC8rd0FhLy9zQUdnQUEvL3NBQmdBQUFBWUFBQUFBLy9NQUFBQUNBQUQvOGdBQUFBRC8rUUFBLy92LzZQLzcvL0FBQWdBQkFBRUFEQUFBQUFFQUFRQU1BQVVBQ0FBQkFBa0FBZ0FCQUFNQUF3QUdBQWNBQkFBSkFBRUFBUUFNQUFRQUFnQUJBQWtBQmdBQUFBQUFCd0FGQUFnQUF3QUdBQUVBREFBRUFBQUFBUUFTQUFFQUFRQUxBQUVBQ2dBS0FBQUFEQUNXQUFNQUFRUUpBQUFBb2dEMkFBTUFBUVFKQUFFQURBRHFBQU1BQVFRSkFBSUFEZ0RjQUFNQUFRUUpBQU1BTWdDcUFBTUFBUVFKQUFRQUhBQ09BQU1BQVFRSkFBVUFHZ0IwQUFNQUFRUUpBQVlBSEFCWUFBTUFBUVFKQUE0QU5nQWlBQU1BQVFRSkFRQUFEQUFXQUFNQUFRUUpBUUVBREFBS0FBTUFBUVFKQVFRQURnRGNBQU1BQVFRSkFTRUFDZ0FBQUZJQWJ3QnRBR0VBYmdCSkFIUUFZUUJzQUdrQVl3QlhBR1VBYVFCbkFHZ0FkQUJvQUhRQWRBQndBSE1BT2dBdkFDOEFjd0JqQUhJQWFRQndBSFFBY3dBdUFITUFhUUJzQUM0QWJ3QnlBR2NBTHdCUEFFWUFUQUJPQUhVQWJnQnBBSFFBYndBdEFGSUFaUUJuQUhVQWJBQmhBSElBVmdCbEFISUFjd0JwQUc4QWJnQWdBRE1BTGdBMkFEQUFNZ0JPQUhVQWJnQnBBSFFBYndBZ0FGSUFaUUJuQUhVQWJBQmhBSElBTXdBdUFEWUFNQUF5QURzQVRnQlBBRTRBUlFBN0FFNEFkUUJ1QUdrQWRBQnZBQzBBVWdCbEFHY0FkUUJzQUdFQWNnQlNBR1VBWndCMUFHd0FZUUJ5QUU0QWRRQnVBR2tBZEFCdkFFTUFid0J3QUhrQWNnQnBBR2NBYUFCMEFDQUFNZ0F3QURFQU5BQWdBRlFBYUFCbEFDQUFUZ0IxQUc0QWFRQjBBRzhBSUFCUUFISUFid0JxQUdVQVl3QjBBQ0FBUVFCMUFIUUFhQUJ2QUhJQWN3QWdBQ2dBYUFCMEFIUUFjQUJ6QURvQUx3QXZBR2NBYVFCMEFHZ0FkUUJpQUM0QVl3QnZBRzBBTHdCbkFHOEFid0JuQUd3QVpRQm1BRzhBYmdCMEFITUFMd0J1QUhVQWJnQnBBSFFBYndBcEFBQUFBZ0F5LzB3QndnTEJBQU1BQndBQUZ4RWhFU1VoRVNFeUFaRCtvZ0VzL3RTMEEzWDhpeklERVFBQUFRQXgvL2NDUHdMS0FEY0FBQVVpSmlZbkppWStBaGNXRmpNeU5qVTBKaWNuSmlZMU5ENENNeklXRnhZV0RnSW5KaVlqSWdZR0ZSUVdGeGNXRmhVVURnSUJPeTlhVFI4TUNRVVBGZzB0WmtCYVZ6OUthRjVkSmtSZU9UOXRMQXNJQmc4WERpaFdORFZOS3p0RGFHVmhKRVJnQ1JBZUZ3a1hGeEFDQ0NBZFF6Y3RNdzhWRkZ0TUwwMDNIaU1qQ1JjVkRnSUpIaHNnUFNnd09BMFdGVlZKTEVvMUhBQUJBRGIvOXdISUFlOEFOZ0FBRnlJbUpqVTBOall6TXhVaklnWUdGUlFXTXpJMk5qVTFOQ1lqSWdZSEJpNENOamMyTmpNeUZoWVZFUlFHSXlJbU5UVXpEZ0xsTWs4dU4zOXVMU3hSWFNVNU1TZzlJekk1STBZbkRoUU1BZ3NNTEZZblAxSW9FeElURkFrSUxVSUpKMFFxTmo0YU5ROGtJU2swSmtJcmNqNDNFaFFIQlJBVkZBWVdGQ2xUUWY3eEZCWVdGRTRtTmg0QUFBRUFMdi8zQWVzQjd3QXJBQUFGSWlZbU5UUTJOak15SGdJVkZBWWpJVFVoQnpRbUppTWlCZ1lWRlJRV016STJOelllQWdZSEJnWUJKMDF2UFR4cFJURk9OeDBTRWY2a0FVa1FJRDB1TTBja1dWSWlReUFPRnc0RkNRMGhXZ2s5Y0U1TWNVQWhQbGczRUE4MURUWkxLQzlUTndaY1lCSVZDUUVORXhZSUdCb0FBUUFELy9rQlhnTEdBQ2dBQUJjaUpqVVJJeUltTlRRMk16TUhOVFEyTnpjMkZoWUdCZ2NIQmdZVkZTY3pNaFlWRkFZakl4RVVqaE1WUUJBVEV4QldGbDFhSFE0UkJRUU9DaGM5Tnd4NEVSSVNFV3dIRmhRQmhCRVBEeEFWSmw5a0NBTUJEQklURGdFQ0JVQStLZzhRRHc4Ui9ud3FBQUVBVFAvM0FTUUN5QUFaQUFBWElpWTFFVFEyTXpJV0ZSRVVGak15TmpNMkZoVVVCZ2NHQnVCSVRCUVVFeFlyS2drT0J3c0pFQklJRWdsWVVnSCtGQlVWRlA0SU5qVUNBUXdTRWhJREFRSUFBZ0F1Ly9jQi9nSHZBQkVBSHdBQUJTSW1KalUwUGdJek1oWVdGUlFPQWljeU5qWTFOQ1lqSWdZR0ZSUVdBUlpIYURrZ1BsVTFSMmc1SUQ1Vk5TMUVKVkZGTGtNbFVnaytjVTA2WFVJalBuRk5PbHhESTBFc1ZEdGJZQ3RUUFZwaEFBQUNBRXovUlFJWkFlOEFIZ0FzQUFBWElpWTFFVFEyTXpJV0ZSVW5Oall6TWhZV0ZSUUdCaU1pSmljekVSUUdOekkyTmpVMEppTWlCZ1lWRkJaMEZCUVVFeFFWQ3hCZlFrRmhOVFZnUWtKZUVRd1dxaTVESlZGRkxVUWxVcnNWRkFKV0ZCVVZGRjhPT1VNOWNVNU5jVDVET1A3OEZCWHpMRlE3VzJBclV6MWFZUUFBQVFCTS8va0JZQUh4QUJ3QUFCY2lKalVSTkRZek1oWVZGU00yTmpjMkZoY1dCZ2NIQmdZVkZSUUdkUlFWRkJNVEZRb1FXa0lQRWdFQkVoTVFSRWtWQnhZVUFhRVVGUlVVVVR0QUFnRVBFaEVVQWdJR1MwSHlGQllBQVFBdi8vY0JzZ0h2QURJQUFCY2lKaWNtSmo0Q0Z4WVdNekkyTlRRbUp5Y21KalUwTmpZek1oWVhGaFlPQWljbUppTWlCaFVVRmhjWEZoWVZGQWJ3TFZzbkNnZ0REUk1NSjBra09Ub21LVnMvUFM5V09TeFBJQW9IQlE0VUN4NCtIamc2SkNaYlFVRnFDUlliQnhNVERnTUdHQk1xSkJ3aENSUU5RRE10UVNRWEdRY1RFdzBDQnhRVExDUWNKQWdURGowMFFrNEFBZi85Ly9jQlpnS0NBQ3dBQUFVaUppWTFOU01pSmpVME5qTXpOVFEyTXpJV0ZSVXpNaFlWRkFZakl4VVVGak15TmpNMkZoVVVCZ2NHQmdFUE9VMG1ReEVTRWhGREZoTVRGWDRSRWhJUmZqQTJFeHNKQ1F3SkN3d25DU2xQT2Y4UkR3OFFjeFFWRlJSekVBOFBFZmM1T3dnQkRoRU1GQVFFQndBQkFDYi8rUU1qQWUwQUtnQUFGeUltSndNbU5qWXpNaFlYRXlNVE5qWXpNaFlYRXlNVE5qWXpNaFlXQndNR0JpTWlKaWNETXdNR0J2UVJHZ2lWQmdVVUR3OFRCb3dZa0FjVkVSQVdCbzBYamdjVURoQVJBZ2FWQnhzUkVSb0hsQ3VUQnhvSEVoUUJsUkVhRGc0VC9uQUJrQklQRUJIK2NBR1NFZzBRR2cvK2F4TVRFeE1CbHY1cUV4TUEvLzhBQS8vM0FuRUN5QUFtQUFRQUFBQUhBQVVCVFFBQUFBQT0pIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XV0+PC9zdHlsZT48L3N2Zz4=");
;// CONCATENATED MODULE: ./src/assets/images/logo-black.svg
/* harmony default export */ var logo_black = ("data:image/svg+xml;base64,PHN2ZyBpZD0iZWk2OUNGRTB5OEExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjIwIDQwIiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiI+PHRleHQgZHg9IjAiIGR5PSIwIiBmb250LWZhbWlseT0iJnF1b3Q7ZWk2OUNGRTB5OEExOjo6TnVuaXRvJnF1b3Q7IiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjQ1MzE0MSAyOS45NDM1MjUpIiBmaWxsPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAiPjx0c3BhbiB5PSIwIiBmb250LXdlaWdodD0iNDAwIiBzdHJva2Utd2lkdGg9IjAiPjwhW0NEQVRBW1NhbHNwb3QgU29mdHdhcmVdXT48L3RzcGFuPjwvdGV4dD48c3R5bGU+PCFbQ0RBVEFbQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6ICdlaTY5Q0ZFMHk4QTE6OjpOdW5pdG8nO2ZvbnQtc3R5bGU6IG5vcm1hbDtmb250LXdlaWdodDogNDAwO3NyYzogdXJsKGRhdGE6Zm9udC90dGY7Y2hhcnNldD11dGYtODtiYXNlNjQsQUFFQUFBQVFBUUFBQkFBQVIwUkZSZ0hnQUNrQUFBSVFBQUFBUWtkUVQxT1JCNW1BQUFBRHhBQUFBWHhIVTFWQ2tBdU1IQUFBQXB3QUFBQmNUMU12TW9RNFpqY0FBQUw0QUFBQVlGTlVRVlRuWnN3MEFBQUNWQUFBQUVoamJXRndBaHNCMEFBQUExZ0FBQUJzWjJGemNBQUFBQkFBQUFFVUFBQUFDR2RzZVdZYUdURklBQUFIY0FBQUJaNW9aV0ZrRzlvcEJRQUFBYUFBQUFBMmFHaGxZUWRzQWs4QUFBRjhBQUFBSkdodGRIZ2F6d0l4QUFBQjJBQUFBRGhzYjJOaERFb0t2Z0FBQVJ3QUFBQWViV0Y0Y0FBZkFOTUFBQUU4QUFBQUlHNWhiV1V3WUZiU0FBQUZRQUFBQWk1d2IzTjAvN01BSEFBQUFWd0FBQUFnY0hKbGNHZ0dqSVVBQUFFTUFBQUFCN2dCLzRXd0JJMEFBQUVBQWYvL0FBOEFBQUFWQUdjQXN3RHpBUzRCVmdHSEFjZ0I5UUpBQW4wQ3d3TFBBczhBQUFBQkFBQUFEZ0JpQUFjQWJ3QUZBQUVBQUFBQUFBQUFBQUFBQUFBQUJBQUJBQU1BQUFBQUFBRC9zQUFjQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRQUFBL1ArbndBQUJSLytndjZDQlBRQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUE0QUFRQUFBQU9hSFluRUpIVmZEenoxQUFNRDZBQUFBQURiRjZYVkFBQUFBTjR5cFRYK2d2N3NCUFFFRHdBQUFBWUFBZ0FBQUFBQUFBSDBBRElDWndBeEFoSUFOZ0lVQUM0QlRRQURBU2dBVEFJc0FDNENSd0JNQVdZQVRBSGhBQzhCWHYvOUEwa0FKZ0oxQUFNQkFnQUFBQUVBQWdBeUFBQUFIZ0FBQUE0QUFRQUNBQUFBREFBQUFBd0FBUUFBQUFZQUFRQU1BQUVBQVFBTUFBRUFCQUFCQVRvQUFnQUNBQUVBQ3dBQkFBd0FEQUFDQUFBQUFRQUJBQWdBQWdBQUFCUUFBZ0FBQUNRQUFuZG5hSFFCQUFBQWFYUmhiQUVCQUFFQUJBQVVBQU1BQUFBQ0FRUUJrQUFBQXJ3QUFBQURBQUVBQWdFaEFBQUFBQUFCQUFBQUFRQUFBQW9BS2dBNEFBTkVSa3hVQUJSamVYSnNBQlJzWVhSdUFCUUFCQUFBQUFELy93QUJBQUFBQVd4cFoyRUFDQUFBQUFFQUFBQUJBQVFBQkFBSUFBRUFDQUFCQUJJQUFRQUlBQUVBQkFBTUFBSUFCUUFCQUFFQUJBQUVBallCa0FBRkFBQUNpZ0pZQUFBQVN3S0tBbGdBQUFGZUFCd0JJZ0FBQUFBQUFBQUFBQUFBQUtBQUF2OVFBQ0JMQUFBQUFBQUFBQUJPVDA1RkFNQUFBUHNDQS9QK253QUFCRFVCTENBQUFaY0FBQUFBQWVRQ3dRQUFBQ0FBQXdBQUFBSUFBQUFEQUFBQUZBQURBQUVBQUFBVUFBUUFXQUFBQUJJQUVBQURBQUlBSUFCVEFHRUFaZ0JzQUhBQWRBQjMvLzhBQUFBZ0FGTUFZUUJsQUd3QWJ3QnlBSGYvLy8vdC82Ny9vZitlLzVuL2wvK1cvNVFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFDZ0FxQURnQUEwUkdURlFBRkdONWNtd0FGR3hoZEc0QUZBQUVBQUFBQVAvL0FBRUFBQUFCYTJWeWJnQUlBQUFBQVFBQUFBRUFCQUFDQUFnQUFnRW9BQW9BQWdEWUFBUUFBQUVBQU9JQUNnQUtBQUFBQUFBQUFBRC8rUUFBQUFELyt3QUEvL3NBQUFBQUFBQUFBUC82QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLy9zQUFBQUFBQUFBQUFBQUFBRC8rUUFBQUFBQUV3QUEvL1lBRFAvMkFBWUFBQUFBQUFBQUFQLzZBQUFBQVAvK0FBRC8vZ0FBQUFBQUFBQUEvL1lBQUFBQS8vc0FBQUFBQUFELyt3QUFBQUQvOVFBQS8vdi85d0FBLy9rQUFQLzZBQUFBQUFBZUFBRC8rd0FhLy9zQUdnQUEvL3NBQmdBQUFBWUFBQUFBLy9NQUFBQUNBQUQvOGdBQUFBRC8rUUFBLy92LzZQLzcvL0FBQWdBQkFBRUFEQUFBQUFFQUFRQU1BQVVBQ0FBQkFBa0FBZ0FCQUFNQUF3QUdBQWNBQkFBSkFBRUFBUUFNQUFRQUFnQUJBQWtBQmdBQUFBQUFCd0FGQUFnQUF3QUdBQUVBREFBRUFBQUFBUUFTQUFFQUFRQUxBQUVBQ2dBS0FBQUFEQUNXQUFNQUFRUUpBQUFBb2dEMkFBTUFBUVFKQUFFQURBRHFBQU1BQVFRSkFBSUFEZ0RjQUFNQUFRUUpBQU1BTWdDcUFBTUFBUVFKQUFRQUhBQ09BQU1BQVFRSkFBVUFHZ0IwQUFNQUFRUUpBQVlBSEFCWUFBTUFBUVFKQUE0QU5nQWlBQU1BQVFRSkFRQUFEQUFXQUFNQUFRUUpBUUVBREFBS0FBTUFBUVFKQVFRQURnRGNBQU1BQVFRSkFTRUFDZ0FBQUZJQWJ3QnRBR0VBYmdCSkFIUUFZUUJzQUdrQVl3QlhBR1VBYVFCbkFHZ0FkQUJvQUhRQWRBQndBSE1BT2dBdkFDOEFjd0JqQUhJQWFRQndBSFFBY3dBdUFITUFhUUJzQUM0QWJ3QnlBR2NBTHdCUEFFWUFUQUJPQUhVQWJnQnBBSFFBYndBdEFGSUFaUUJuQUhVQWJBQmhBSElBVmdCbEFISUFjd0JwQUc4QWJnQWdBRE1BTGdBMkFEQUFNZ0JPQUhVQWJnQnBBSFFBYndBZ0FGSUFaUUJuQUhVQWJBQmhBSElBTXdBdUFEWUFNQUF5QURzQVRnQlBBRTRBUlFBN0FFNEFkUUJ1QUdrQWRBQnZBQzBBVWdCbEFHY0FkUUJzQUdFQWNnQlNBR1VBWndCMUFHd0FZUUJ5QUU0QWRRQnVBR2tBZEFCdkFFTUFid0J3QUhrQWNnQnBBR2NBYUFCMEFDQUFNZ0F3QURFQU5BQWdBRlFBYUFCbEFDQUFUZ0IxQUc0QWFRQjBBRzhBSUFCUUFISUFid0JxQUdVQVl3QjBBQ0FBUVFCMUFIUUFhQUJ2QUhJQWN3QWdBQ2dBYUFCMEFIUUFjQUJ6QURvQUx3QXZBR2NBYVFCMEFHZ0FkUUJpQUM0QVl3QnZBRzBBTHdCbkFHOEFid0JuQUd3QVpRQm1BRzhBYmdCMEFITUFMd0J1QUhVQWJnQnBBSFFBYndBcEFBQUFBZ0F5LzB3QndnTEJBQU1BQndBQUZ4RWhFU1VoRVNFeUFaRCtvZ0VzL3RTMEEzWDhpeklERVFBQUFRQXgvL2NDUHdMS0FEY0FBQVVpSmlZbkppWStBaGNXRmpNeU5qVTBKaWNuSmlZMU5ENENNeklXRnhZV0RnSW5KaVlqSWdZR0ZSUVdGeGNXRmhVVURnSUJPeTlhVFI4TUNRVVBGZzB0WmtCYVZ6OUthRjVkSmtSZU9UOXRMQXNJQmc4WERpaFdORFZOS3p0RGFHVmhKRVJnQ1JBZUZ3a1hGeEFDQ0NBZFF6Y3RNdzhWRkZ0TUwwMDNIaU1qQ1JjVkRnSUpIaHNnUFNnd09BMFdGVlZKTEVvMUhBQUJBRGIvOXdISUFlOEFOZ0FBRnlJbUpqVTBOall6TXhVaklnWUdGUlFXTXpJMk5qVTFOQ1lqSWdZSEJpNENOamMyTmpNeUZoWVZFUlFHSXlJbU5UVXpEZ0xsTWs4dU4zOXVMU3hSWFNVNU1TZzlJekk1STBZbkRoUU1BZ3NNTEZZblAxSW9FeElURkFrSUxVSUpKMFFxTmo0YU5ROGtJU2swSmtJcmNqNDNFaFFIQlJBVkZBWVdGQ2xUUWY3eEZCWVdGRTRtTmg0QUFBRUFMdi8zQWVzQjd3QXJBQUFGSWlZbU5UUTJOak15SGdJVkZBWWpJVFVoQnpRbUppTWlCZ1lWRlJRV016STJOelllQWdZSEJnWUJKMDF2UFR4cFJURk9OeDBTRWY2a0FVa1FJRDB1TTBja1dWSWlReUFPRnc0RkNRMGhXZ2s5Y0U1TWNVQWhQbGczRUE4MURUWkxLQzlUTndaY1lCSVZDUUVORXhZSUdCb0FBUUFELy9rQlhnTEdBQ2dBQUJjaUpqVVJJeUltTlRRMk16TUhOVFEyTnpjMkZoWUdCZ2NIQmdZVkZTY3pNaFlWRkFZakl4RVVqaE1WUUJBVEV4QldGbDFhSFE0UkJRUU9DaGM5Tnd4NEVSSVNFV3dIRmhRQmhCRVBEeEFWSmw5a0NBTUJEQklURGdFQ0JVQStLZzhRRHc4Ui9ud3FBQUVBVFAvM0FTUUN5QUFaQUFBWElpWTFFVFEyTXpJV0ZSRVVGak15TmpNMkZoVVVCZ2NHQnVCSVRCUVVFeFlyS2drT0J3c0pFQklJRWdsWVVnSCtGQlVWRlA0SU5qVUNBUXdTRWhJREFRSUFBZ0F1Ly9jQi9nSHZBQkVBSHdBQUJTSW1KalUwUGdJek1oWVdGUlFPQWljeU5qWTFOQ1lqSWdZR0ZSUVdBUlpIYURrZ1BsVTFSMmc1SUQ1Vk5TMUVKVkZGTGtNbFVnaytjVTA2WFVJalBuRk5PbHhESTBFc1ZEdGJZQ3RUUFZwaEFBQUNBRXovUlFJWkFlOEFIZ0FzQUFBWElpWTFFVFEyTXpJV0ZSVW5Oall6TWhZV0ZSUUdCaU1pSmljekVSUUdOekkyTmpVMEppTWlCZ1lWRkJaMEZCUVVFeFFWQ3hCZlFrRmhOVFZnUWtKZUVRd1dxaTVESlZGRkxVUWxVcnNWRkFKV0ZCVVZGRjhPT1VNOWNVNU5jVDVET1A3OEZCWHpMRlE3VzJBclV6MWFZUUFBQVFCTS8va0JZQUh4QUJ3QUFCY2lKalVSTkRZek1oWVZGU00yTmpjMkZoY1dCZ2NIQmdZVkZSUUdkUlFWRkJNVEZRb1FXa0lQRWdFQkVoTVFSRWtWQnhZVUFhRVVGUlVVVVR0QUFnRVBFaEVVQWdJR1MwSHlGQllBQVFBdi8vY0JzZ0h2QURJQUFCY2lKaWNtSmo0Q0Z4WVdNekkyTlRRbUp5Y21KalUwTmpZek1oWVhGaFlPQWljbUppTWlCaFVVRmhjWEZoWVZGQWJ3TFZzbkNnZ0REUk1NSjBra09Ub21LVnMvUFM5V09TeFBJQW9IQlE0VUN4NCtIamc2SkNaYlFVRnFDUlliQnhNVERnTUdHQk1xSkJ3aENSUU5RRE10UVNRWEdRY1RFdzBDQnhRVExDUWNKQWdURGowMFFrNEFBZi85Ly9jQlpnS0NBQ3dBQUFVaUppWTFOU01pSmpVME5qTXpOVFEyTXpJV0ZSVXpNaFlWRkFZakl4VVVGak15TmpNMkZoVVVCZ2NHQmdFUE9VMG1ReEVTRWhGREZoTVRGWDRSRWhJUmZqQTJFeHNKQ1F3SkN3d25DU2xQT2Y4UkR3OFFjeFFWRlJSekVBOFBFZmM1T3dnQkRoRU1GQVFFQndBQkFDYi8rUU1qQWUwQUtnQUFGeUltSndNbU5qWXpNaFlYRXlNVE5qWXpNaFlYRXlNVE5qWXpNaFlXQndNR0JpTWlKaWNETXdNR0J2UVJHZ2lWQmdVVUR3OFRCb3dZa0FjVkVSQVdCbzBYamdjVURoQVJBZ2FWQnhzUkVSb0hsQ3VUQnhvSEVoUUJsUkVhRGc0VC9uQUJrQklQRUJIK2NBR1NFZzBRR2cvK2F4TVRFeE1CbHY1cUV4TUEvLzhBQS8vM0FuRUN5QUFtQUFRQUFBQUhBQVVCVFFBQUFBQT0pIGZvcm1hdCgndHJ1ZXR5cGUnKTt9XV0+PC9zdHlsZT48L3N2Zz4K");
;// CONCATENATED MODULE: ./src/components/App/Navbar.js
const Navbar=_ref=>{let{className,inverse}=_ref;const[collapsed,setCollapsed]=(0,es/* useRecoilState */.FV)(collapsedState);const toggleNavbar=()=>{setCollapsed(!collapsed);};react.useEffect(()=>{if(document){let elementId=document.getElementById("navbar");document.addEventListener("scroll",()=>{if(window.scrollY>170){elementId.classList.add("is-sticky");}else{elementId.classList.remove("is-sticky");}});window.scrollTo(0,0);}});const classOne=collapsed?"collapse navbar-collapse":"collapse navbar-collapse show";const classTwo=collapsed?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("div",{id:"navbar",className:"navbar-area "+(className!==null&&className!==void 0?className:'')},/*#__PURE__*/react.createElement("div",{className:"tarn-nav"},/*#__PURE__*/react.createElement("div",{className:"container-fluid"},/*#__PURE__*/react.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/",onClick:()=>setCollapsed(true),className:"navbar-brand"},/*#__PURE__*/react.createElement("img",{src:logo_white,className:"logo logo-white",alt:"logo"}),/*#__PURE__*/react.createElement("img",{src:logo_black,className:"logo logo-black",alt:"logo"})),/*#__PURE__*/react.createElement("button",{//mobile button
onClick:toggleNavbar,className:classTwo,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},/*#__PURE__*/react.createElement("span",{className:"icon-bar top-bar"}),/*#__PURE__*/react.createElement("span",{className:"icon-bar middle-bar"}),/*#__PURE__*/react.createElement("span",{className:"icon-bar bottom-bar"})),/*#__PURE__*/react.createElement("div",{className:classOne,id:"navbarSupportedContent"},/*#__PURE__*/react.createElement("ul",{className:"navbar-nav"},/*#__PURE__*/react.createElement("li",{className:"nav-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/work",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link overline-reveal"},"Our Work")),/*#__PURE__*/react.createElement("li",{className:"nav-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/careers",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link overline-reveal"},"Careers")),/*#__PURE__*/react.createElement("li",{className:"nav-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/blog",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link overline-reveal"},"Blog")),/*#__PURE__*/react.createElement("li",{className:"nav-item only-mobile"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/contact",activeClassName:"active",onClick:()=>setCollapsed(true),className:"nav-link"},"Contact"))),/*#__PURE__*/react.createElement("div",{className:"others-option align-items-center only-desktop"},/*#__PURE__*/react.createElement("div",{className:"option-item"},/*#__PURE__*/react.createElement(gatsby_browser_entry/* Link */.rU,{to:"/contact",activeClassName:"active",onClick:()=>setCollapsed(true),className:"default-btn"},"Contact"," ",/*#__PURE__*/react.createElement("span",null))))))))));};/* harmony default export */ var App_Navbar = (Navbar);

/***/ })

}]);
//# sourceMappingURL=963f387e8d72b2303116bb29676ee6c7e551e550-ad6f86803ac14778a953.js.map