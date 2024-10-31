"use strict";
(self["webpackChunknew_salspot_software"] = self["webpackChunknew_salspot_software"] || []).push([[501],{

/***/ 5282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/App/Layout.js + 3 modules
var Layout = __webpack_require__(3047);
// EXTERNAL MODULE: ./src/components/App/Navbar.js + 3 modules
var Navbar = __webpack_require__(7196);
// EXTERNAL MODULE: ./src/components/App/Footer.js + 1 modules
var Footer = __webpack_require__(1126);
// EXTERNAL MODULE: ./src/components/SecondaryPageHeader.js
var SecondaryPageHeader = __webpack_require__(7587);
;// CONCATENATED MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs

var isCheckBoxInput = element => element.type === 'checkbox';
var isDateObject = value => value instanceof Date;
var isNullOrUndefined = value => value == null;
const isObjectType = value => typeof value === 'object';
var isObject = value => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = event => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = name => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = tempObject => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
};
var isWeb = typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy;
}
var compact = value => Array.isArray(value) ? value.filter(Boolean) : [];
var isUndefined = val => val === undefined;
var get = (obj, path, defaultValue) => {
  if (!path || !isObject(obj)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => isNullOrUndefined(result) ? result : result[key], obj);
  return isUndefined(result) || result === obj ? isUndefined(obj[path]) ? defaultValue : obj[path] : result;
};
var isBoolean = value => typeof value === 'boolean';
const EVENTS = {
  BLUR: 'blur',
  FOCUS_OUT: 'focusout',
  CHANGE: 'change'
};
const VALIDATION_MODE = {
  onBlur: 'onBlur',
  onChange: 'onChange',
  onSubmit: 'onSubmit',
  onTouched: 'onTouched',
  all: 'all'
};
const INPUT_VALIDATION_RULES = {
  max: 'max',
  min: 'min',
  maxLength: 'maxLength',
  minLength: 'minLength',
  pattern: 'pattern',
  required: 'required',
  validate: 'validate'
};
const HookFormContext = react.createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const useFormContext = () => React.useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useFrom methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
const FormProvider = props => {
  const {
    children,
    ...data
  } = props;
  return React.createElement(HookFormContext.Provider, {
    value: data
  }, children);
};
var getProxyFormState = function (formState, control, localProxyFormState) {
  let isRoot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var isEmptyObject = value => isObject(value) && !Object.keys(value).length;
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const {
    name,
    ...formState
  } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find(key => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var convertToArrayPayload = value => Array.isArray(value) ? value : [value];
var shouldSubscribeByName = (name, signalName, exact) => !name || !signalName || name === signalName || convertToArrayPayload(name).some(currentName => currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
function useSubscribe(props) {
  const _props = react.useRef(props);
  _props.current = props;
  react.useEffect(() => {
    const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
      next: _props.current.next
    });
    return () => {
      subscription && subscription.unsubscribe();
    };
  }, [props.disabled]);
}

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFormState(props) {
  const methods = useFormContext();
  const {
    control = methods.control,
    disabled,
    name,
    exact
  } = props || {};
  const [formState, updateFormState] = React.useState(control._formState);
  const _mounted = React.useRef(true);
  const _localProxyFormState = React.useRef({
    isDirty: false,
    isLoading: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  });
  const _name = React.useRef(name);
  _name.current = name;
  useSubscribe({
    disabled,
    next: value => _mounted.current && shouldSubscribeByName(_name.current, value.name, exact) && shouldRenderFormState(value, _localProxyFormState.current, control._updateFormState) && updateFormState({
      ...control._formState,
      ...value
    }),
    subject: control._subjects.state
  });
  React.useEffect(() => {
    _mounted.current = true;
    _localProxyFormState.current.isValid && control._updateValid(true);
    return () => {
      _mounted.current = false;
    };
  }, [control]);
  return getProxyFormState(formState, control, _localProxyFormState.current, false);
}
var isString = value => typeof value === 'string';
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map(fieldName => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};

/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { watch } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */
function useWatch(props) {
  const methods = useFormContext();
  const {
    control = methods.control,
    name,
    defaultValue,
    disabled,
    exact
  } = props || {};
  const _name = React.useRef(name);
  _name.current = name;
  useSubscribe({
    disabled,
    subject: control._subjects.values,
    next: formState => {
      if (shouldSubscribeByName(_name.current, formState.name, exact)) {
        updateValue(cloneObject(generateWatchOutput(_name.current, control._names, formState.values || control._formValues, false, defaultValue)));
      }
    }
  });
  const [value, updateValue] = React.useState(control._getWatch(name, defaultValue));
  React.useEffect(() => control._removeUnmounted());
  return value;
}
var isKey = value => /^\w*$/.test(value);
var stringToPath = input => compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
function set(object, path, value) {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    object[key] = newValue;
    object = object[key];
  }
  return object;
}

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
function useController(props) {
  const methods = useFormContext();
  const {
    name,
    disabled,
    control = methods.control,
    shouldUnregister
  } = props;
  const isArrayField = isNameInFieldArray(control._names.array, name);
  const value = useWatch({
    control,
    name,
    defaultValue: get(control._formValues, name, get(control._defaultValues, name, props.defaultValue)),
    exact: true
  });
  const formState = useFormState({
    control,
    name
  });
  const _registerProps = React.useRef(control.register(name, {
    ...props.rules,
    value
  }));
  _registerProps.current = control.register(name, props.rules);
  React.useEffect(() => {
    const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
    const updateMounted = (name, value) => {
      const field = get(control._fields, name);
      if (field) {
        field._f.mount = value;
      }
    };
    updateMounted(name, true);
    if (_shouldUnregisterField) {
      const value = cloneObject(get(control._options.defaultValues, name));
      set(control._defaultValues, name, value);
      if (isUndefined(get(control._formValues, name))) {
        set(control._formValues, name, value);
      }
    }
    return () => {
      (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
    };
  }, [name, control, isArrayField, shouldUnregister]);
  React.useEffect(() => {
    if (get(control._fields, name)) {
      control._updateDisabledField({
        disabled,
        fields: control._fields,
        name
      });
    }
  }, [disabled, name, control]);
  return {
    field: {
      name,
      value,
      ...(isBoolean(disabled) ? {
        disabled
      } : {}),
      onChange: React.useCallback(event => _registerProps.current.onChange({
        target: {
          value: getEventValue(event),
          name: name
        },
        type: EVENTS.CHANGE
      }), [name]),
      onBlur: React.useCallback(() => _registerProps.current.onBlur({
        target: {
          value: get(control._formValues, name),
          name: name
        },
        type: EVENTS.BLUR
      }), [name, control]),
      ref: elm => {
        const field = get(control._fields, name);
        if (field && elm) {
          field._f.ref = {
            focus: () => elm.focus(),
            select: () => elm.select(),
            setCustomValidity: message => elm.setCustomValidity(message),
            reportValidity: () => elm.reportValidity()
          };
        }
      }
    },
    formState,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: true,
        get: () => !!get(formState.errors, name)
      },
      isDirty: {
        enumerable: true,
        get: () => !!get(formState.dirtyFields, name)
      },
      isTouched: {
        enumerable: true,
        get: () => !!get(formState.touchedFields, name)
      },
      error: {
        enumerable: true,
        get: () => get(formState.errors, name)
      }
    })
  };
}

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
const Controller = props => props.render(useController(props));
const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */
function Form(props) {
  const methods = useFormContext();
  const [mounted, setMounted] = React.useState(false);
  const {
    control = methods.control,
    onSubmit,
    children,
    action,
    method = POST_REQUEST,
    headers,
    encType,
    onError,
    render,
    onSuccess,
    validateStatus,
    ...rest
  } = props;
  const submit = async event => {
    let hasError = false;
    let type = '';
    await control.handleSubmit(async data => {
      const formData = new FormData();
      let formDataJson = '';
      try {
        formDataJson = JSON.stringify(data);
      } catch (_a) {}
      for (const name of control._names.mount) {
        formData.append(name, get(data, name));
      }
      if (onSubmit) {
        await onSubmit({
          data,
          event,
          method,
          formData,
          formDataJson
        });
      }
      if (action) {
        try {
          const shouldStringifySubmissionData = [headers && headers['Content-Type'], encType].some(value => value && value.includes('json'));
          const response = await fetch(action, {
            method,
            headers: {
              ...headers,
              ...(encType ? {
                'Content-Type': encType
              } : {})
            },
            body: shouldStringifySubmissionData ? formDataJson : formData
          });
          if (response && (validateStatus ? !validateStatus(response.status) : response.status < 200 || response.status >= 300)) {
            hasError = true;
            onError && onError({
              response
            });
            type = String(response.status);
          } else {
            onSuccess && onSuccess({
              response
            });
          }
        } catch (error) {
          hasError = true;
          onError && onError({
            error
          });
        }
      }
    })(event);
    if (hasError && props.control) {
      props.control._subjects.state.next({
        isSubmitSuccessful: false
      });
      props.control.setError('root.server', {
        type
      });
    }
  };
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return render ? React.createElement(React.Fragment, null, render({
    submit
  })) : React.createElement("form", {
    noValidate: mounted,
    action: action,
    method: method,
    encType: encType,
    onSubmit: submit,
    ...rest
  }, children);
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...(errors[name] && errors[name].types ? errors[name].types : {}),
    [type]: message || true
  }
} : {};
const focusFieldBy = (fields, callback, fieldsNames) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const {
        _f,
        ...currentField
      } = field;
      if (_f && callback(_f.name)) {
        if (_f.ref.focus) {
          _f.ref.focus();
          break;
        } else if (_f.refs && _f.refs[0].focus) {
          _f.refs[0].focus();
          break;
        }
      } else if (isObject(currentField)) {
        focusFieldBy(currentField, callback);
      }
    }
  }
};
var generateId = () => {
  const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16 + d) % 16 | 0;
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
};
var getFocusFieldName = function (name, index) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return options.shouldFocus || isUndefined(options.shouldFocus) ? options.focusName || "".concat(name, ".").concat(isUndefined(options.focusIndex) ? index : options.focusIndex, ".") : '';
};
var getValidationModes = mode => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some(watchName => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = compact(get(errors, name));
  set(fieldArrayErrors, 'root', error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
var isFileInput = element => element.type === 'file';
var isFunction = value => typeof value === 'function';
var isHTMLElement = value => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMessage = value => isString(value);
var isRadioInput = element => element.type === 'radio';
var isRegex = value => value instanceof RegExp;
const defaultResult = {
  value: false,
  isValid: false
};
const validResult = {
  value: true,
  isValid: true
};
var getCheckboxValue = options => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter(option => option && option.checked && !option.disabled).map(option => option.value);
      return {
        value: values,
        isValid: !!values.length
      };
    }
    return options[0].checked && !options[0].disabled ?
    // @ts-expect-error expected to work in the browser
    options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === '' ? validResult : {
      value: options[0].value,
      isValid: true
    } : validResult : defaultResult;
  }
  return defaultResult;
};
const defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = options => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getValidateError(result, ref) {
  let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'validate';
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : '',
      ref
    };
  }
}
var getValueAndMessage = validationData => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ''
};
var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const {
    ref,
    refs,
    required,
    maxLength,
    minLength,
    min,
    max,
    pattern,
    validate,
    name,
    valueAsNumber,
    mount,
    disabled
  } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabled) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = message => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === '' || inputValue === '' || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = function (exceedMax, maxLengthMessage, minLengthMessage) {
    let maxType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : INPUT_VALIDATION_RULES.maxLength;
    let minType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : INPUT_VALIDATION_RULES.minLength;
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const {
      value,
      message
    } = isMessage(required) ? {
      value: !!required,
      message: required
    } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = time => new Date(new Date().toDateString() + ' ' + time);
      const isTime = ref.type == 'time';
      const isWeek = ref.type == 'week';
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const {
      value: patternValue,
      message
    } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
function append(data, value) {
  return [...data, ...convertToArrayPayload(value)];
}
var fillEmptyArray = value => Array.isArray(value) ? value.map(() => undefined) : undefined;
function insert(data, index, value) {
  return [...data.slice(0, index), ...convertToArrayPayload(value), ...data.slice(index)];
}
var moveArrayAt = (data, from, to) => {
  if (!Array.isArray(data)) {
    return [];
  }
  if (isUndefined(data[to])) {
    data[to] = undefined;
  }
  data.splice(to, 0, data.splice(from, 1)[0]);
  return data;
};
function prepend(data, value) {
  return [...convertToArrayPayload(value), ...convertToArrayPayload(data)];
}
function removeAtIndexes(data, indexes) {
  let i = 0;
  const temp = [...data];
  for (const index of indexes) {
    temp.splice(index - i, 1);
    i++;
  }
  return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index) ? [] : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b) => a - b));
var swapArrayAt = (data, indexA, indexB) => {
  data[indexA] = [data[indexB], data[indexB] = data[indexA]][0];
};
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object = isUndefined(object) ? index++ : object[updatePath[index++]];
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
var updateAt = (fieldValues, index, value) => {
  fieldValues[index] = value;
  return fieldValues;
};

/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
function useFieldArray(props) {
  const methods = useFormContext();
  const {
    control = methods.control,
    name,
    keyName = 'id',
    shouldUnregister
  } = props;
  const [fields, setFields] = React.useState(control._getFieldArray(name));
  const ids = React.useRef(control._getFieldArray(name).map(generateId));
  const _fieldIds = React.useRef(fields);
  const _name = React.useRef(name);
  const _actioned = React.useRef(false);
  _name.current = name;
  _fieldIds.current = fields;
  control._names.array.add(name);
  props.rules && control.register(name, props.rules);
  useSubscribe({
    next: _ref => {
      let {
        values,
        name: fieldArrayName
      } = _ref;
      if (fieldArrayName === _name.current || !fieldArrayName) {
        const fieldValues = get(values, _name.current);
        if (Array.isArray(fieldValues)) {
          setFields(fieldValues);
          ids.current = fieldValues.map(generateId);
        }
      }
    },
    subject: control._subjects.array
  });
  const updateValues = React.useCallback(updatedFieldArrayValues => {
    _actioned.current = true;
    control._updateFieldArray(name, updatedFieldArrayValues);
  }, [control, name]);
  const append$1 = (value, options) => {
    const appendValue = convertToArrayPayload(cloneObject(value));
    const updatedFieldArrayValues = append(control._getFieldArray(name), appendValue);
    control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
    ids.current = append(ids.current, appendValue.map(generateId));
    updateValues(updatedFieldArrayValues);
    setFields(updatedFieldArrayValues);
    control._updateFieldArray(name, updatedFieldArrayValues, append, {
      argA: fillEmptyArray(value)
    });
  };
  const prepend$1 = (value, options) => {
    const prependValue = convertToArrayPayload(cloneObject(value));
    const updatedFieldArrayValues = prepend(control._getFieldArray(name), prependValue);
    control._names.focus = getFocusFieldName(name, 0, options);
    ids.current = prepend(ids.current, prependValue.map(generateId));
    updateValues(updatedFieldArrayValues);
    setFields(updatedFieldArrayValues);
    control._updateFieldArray(name, updatedFieldArrayValues, prepend, {
      argA: fillEmptyArray(value)
    });
  };
  const remove = index => {
    const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
    ids.current = removeArrayAt(ids.current, index);
    updateValues(updatedFieldArrayValues);
    setFields(updatedFieldArrayValues);
    control._updateFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
      argA: index
    });
  };
  const insert$1 = (index, value, options) => {
    const insertValue = convertToArrayPayload(cloneObject(value));
    const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
    control._names.focus = getFocusFieldName(name, index, options);
    ids.current = insert(ids.current, index, insertValue.map(generateId));
    updateValues(updatedFieldArrayValues);
    setFields(updatedFieldArrayValues);
    control._updateFieldArray(name, updatedFieldArrayValues, insert, {
      argA: index,
      argB: fillEmptyArray(value)
    });
  };
  const swap = (indexA, indexB) => {
    const updatedFieldArrayValues = control._getFieldArray(name);
    swapArrayAt(updatedFieldArrayValues, indexA, indexB);
    swapArrayAt(ids.current, indexA, indexB);
    updateValues(updatedFieldArrayValues);
    setFields(updatedFieldArrayValues);
    control._updateFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
      argA: indexA,
      argB: indexB
    }, false);
  };
  const move = (from, to) => {
    const updatedFieldArrayValues = control._getFieldArray(name);
    moveArrayAt(updatedFieldArrayValues, from, to);
    moveArrayAt(ids.current, from, to);
    updateValues(updatedFieldArrayValues);
    setFields(updatedFieldArrayValues);
    control._updateFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
      argA: from,
      argB: to
    }, false);
  };
  const update = (index, value) => {
    const updateValue = cloneObject(value);
    const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
    ids.current = [...updatedFieldArrayValues].map((item, i) => !item || i === index ? generateId() : ids.current[i]);
    updateValues(updatedFieldArrayValues);
    setFields([...updatedFieldArrayValues]);
    control._updateFieldArray(name, updatedFieldArrayValues, updateAt, {
      argA: index,
      argB: updateValue
    }, true, false);
  };
  const replace = value => {
    const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value));
    ids.current = updatedFieldArrayValues.map(generateId);
    updateValues([...updatedFieldArrayValues]);
    setFields([...updatedFieldArrayValues]);
    control._updateFieldArray(name, [...updatedFieldArrayValues], data => data, {}, true, false);
  };
  React.useEffect(() => {
    control._state.action = false;
    isWatched(name, control._names) && control._subjects.state.next({
      ...control._formState
    });
    if (_actioned.current && (!getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted)) {
      if (control._options.resolver) {
        control._executeSchema([name]).then(result => {
          const error = get(result.errors, name);
          const existingError = get(control._formState.errors, name);
          if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
            error ? set(control._formState.errors, name, error) : unset(control._formState.errors, name);
            control._subjects.state.next({
              errors: control._formState.errors
            });
          }
        });
      } else {
        const field = get(control._fields, name);
        if (field && field._f) {
          validateField(field, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then(error => !isEmptyObject(error) && control._subjects.state.next({
            errors: updateFieldArrayRootError(control._formState.errors, error, name)
          }));
        }
      }
    }
    control._subjects.values.next({
      name,
      values: {
        ...control._formValues
      }
    });
    control._names.focus && focusFieldBy(control._fields, key => !!key && key.startsWith(control._names.focus || ''));
    control._names.focus = '';
    control._updateValid();
    _actioned.current = false;
  }, [fields, name, control]);
  React.useEffect(() => {
    !get(control._formValues, name) && control._updateFieldArray(name);
    return () => {
      (control._options.shouldUnregister || shouldUnregister) && control.unregister(name);
    };
  }, [name, control, keyName, shouldUnregister]);
  return {
    swap: React.useCallback(swap, [updateValues, name, control]),
    move: React.useCallback(move, [updateValues, name, control]),
    prepend: React.useCallback(prepend$1, [updateValues, name, control]),
    append: React.useCallback(append$1, [updateValues, name, control]),
    remove: React.useCallback(remove, [updateValues, name, control]),
    insert: React.useCallback(insert$1, [updateValues, name, control]),
    update: React.useCallback(update, [updateValues, name, control]),
    replace: React.useCallback(replace, [updateValues, name, control]),
    fields: React.useMemo(() => fields.map((field, index) => ({
      ...field,
      [keyName]: ids.current[index] || generateId()
    })), [fields, keyName])
  };
}
function createSubject() {
  let _observers = [];
  const next = value => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = observer => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter(o => o !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
}
var isPrimitive = value => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== 'ref') {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isMultipleSelect = element => element.type === "select-multiple";
var isRadioOrCheckbox = ref => isRadioInput(ref) || isCheckBoxInput(ref);
var live = ref => isHTMLElement(ref) && ref.isConnected;
var objectHasFunction = data => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data) {
  let fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : {
            ...markFieldsDirty(data[key])
          };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var getFieldValueAs = (value, _ref2) => {
  let {
    valueAsNumber,
    valueAsDate,
    setValueAs
  } = _ref2;
  return isUndefined(value) ? value : valueAsNumber ? value === '' ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
};
function getFieldValue(_f) {
  const ref = _f.ref;
  if (_f.refs ? _f.refs.every(ref => ref.disabled) : ref.disabled) {
    return;
  }
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(_ref3 => {
      let {
        value
      } = _ref3;
      return value;
    });
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var getRuleValue = rule => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var hasValidation = options => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split('.');
  while (names.length) {
    const fieldName = names.join('.');
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return {
        name
      };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
const defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let flushRootRender = arguments.length > 1 ? arguments[1] : undefined;
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: new Set(),
    unMount: new Set(),
    array: new Set(),
    watch: new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _subjects = {
    values: createSubject(),
    array: createSubject(),
    state: createSubject()
  };
  const shouldCaptureDirtyFields = props.resetOptions && props.resetOptions.keepDirtyValues;
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = callback => wait => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _updateValid = async shouldUpdateValid => {
    if (_proxyFormState.isValid || shouldUpdateValid) {
      const isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = value => _proxyFormState.isValidating && _subjects.state.next({
    isValidating: value
  });
  const _updateFieldArray = function (name) {
    let values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let method = arguments.length > 2 ? arguments[2] : undefined;
    let args = arguments.length > 3 ? arguments[3] : undefined;
    let shouldSetValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    let shouldUpdateFieldsAndState = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
    if (args && method) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _updateValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!isBlurEvent || shouldDirty) {
      if (_proxyFormState.isDirty) {
        isPreviousDirty = _formState.isDirty;
        _formState.isDirty = output.isDirty = _getDirty();
        shouldUpdateField = isPreviousDirty !== output.isDirty;
      }
      const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
      isPreviousDirty = get(_formState.dirtyFields, name);
      isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
      output.dirtyFields = _formState.dirtyFields;
      shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
    }
    if (isBlurEvent) {
      const isPreviousFieldTouched = get(_formState.touchedFields, name);
      if (!isPreviousFieldTouched) {
        set(_formState.touchedFields, name, isBlurEvent);
        output.touchedFields = _formState.touchedFields;
        shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
      }
    }
    shouldUpdateField && shouldRender && _subjects.state.next(output);
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = _proxyFormState.isValid && isBoolean(isValid) && _formState.isValid !== isValid;
    if (props.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(props.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...(shouldUpdateValid && isBoolean(isValid) ? {
          isValid
        } : {}),
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
    _updateIsValidating(false);
  };
  const _executeSchema = async name => _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
  const executeSchemaAndUpdateState = async names => {
    const {
      errors
    } = await _executeSchema(names);
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async function (fields, shouldOnlyCheckValid) {
    let context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      valid: true
    };
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const {
          _f,
          ...fieldValue
        } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        fieldValue && (await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context));
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every(ref => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = new Set();
  };
  const _getDirty = (name, data) => (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ...(_state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? {
      [names]: defaultValue
    } : defaultValue)
  }, isGlobal, defaultValue);
  const _getFieldArray = name => compact(get(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = function (name, value) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? '' : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach(optionRef => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach(checkboxRef => (!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find(data => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach(radioRef => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = '';
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.values.next({
              name,
              values: {
                ..._formValues
              }
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = "".concat(name, ".").concat(fieldKey);
      const field = get(_fields, fieldName);
      (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = function (name, value) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: {
          ..._formValues
        }
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({
      ..._formState
    });
    _subjects.values.next({
      name,
      values: {
        ..._formValues
      }
    });
    !_state.mount && flushRootRender();
  };
  const onChange = async event => {
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
    if (field) {
      let error;
      let isValid;
      const fieldValue = getCurrentFieldValue();
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.values.next({
        name,
        type: event.type,
        values: {
          ..._formValues
        }
      });
      if (shouldSkipValidation) {
        _proxyFormState.isValid && _updateValid();
        return shouldRender && _subjects.state.next({
          name,
          ...(watched ? {} : fieldState)
        });
      }
      !isBlurEvent && watched && _subjects.state.next({
        ..._formState
      });
      _updateIsValidating(true);
      if (_options.resolver) {
        const {
          errors
        } = await _executeSchema([name]);
        const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
        const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
        error = errorLookupResult.error;
        name = errorLookupResult.name;
        isValid = isEmptyObject(errors);
      } else {
        error = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        isFieldValueUpdated = Number.isNaN(fieldValue) || fieldValue === get(_formValues, name, fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid) {
            isValid = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const trigger = async function (name) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    _updateIsValidating(true);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some(name => get(errors, name)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async fieldName => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? {
          [fieldName]: field
        } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _updateValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...(!isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : {
        name
      }),
      ...(_options.resolver || !name ? {
        isValid
      } : {}),
      errors: _formState.errors,
      isValidating: false
    });
    options.shouldFocus && !validationResult && focusFieldBy(_fields, key => key && get(_formState.errors, key), name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = fieldNames => {
    const values = {
      ..._defaultValues,
      ...(_state.mount ? _formValues : {})
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map(name => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name),
    error: get((formState || _formState).errors, name)
  });
  const clearErrors = name => {
    name && convertToArrayPayload(name).forEach(inputName => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, {
      _f: {}
    })._f || {}).ref;
    set(_formState.errors, name, {
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.values.subscribe({
    next: payload => name(_getWatch(undefined, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const unregister = function (name) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.values.next({
      values: {
        ..._formValues
      }
    });
    _subjects.state.next({
      ..._formState,
      ...(!options.keepDirty ? {} : {
        isDirty: _getDirty()
      })
    });
    !options.keepIsValid && _updateValid();
  };
  const _updateDisabledField = _ref4 => {
    let {
      disabled,
      name,
      field,
      fields
    } = _ref4;
    if (isBoolean(disabled)) {
      const value = disabled ? undefined : get(_formValues, name, getFieldValue(field ? field._f : get(fields, name)._f));
      set(_formValues, name, value);
      updateTouchAndDirty(name, value, false, false, true);
    }
  };
  const register = function (name) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled);
    set(_fields, name, {
      ...(field || {}),
      _f: {
        ...(field && field._f ? field._f : {
          ref: {
            name
          }
        }),
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field) {
      _updateDisabledField({
        field,
        disabled: options.disabled,
        name
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...(disabledIsDefined ? {
        disabled: options.disabled
      } : {}),
      ...(_options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {}),
      name,
      onChange,
      onBlur: onChange,
      ref: ref => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll('input,select,textarea')[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find(option => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...(radioOrCheckbox ? {
                refs: [...refs.filter(live), fieldRef, ...(Array.isArray(get(_defaultValues, name)) ? [{}] : [])],
                ref: {
                  type: fieldRef.type,
                  name
                }
              } : {
                ref: fieldRef
              })
            }
          });
          updateValidAndValue(name, false, undefined, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && focusFieldBy(_fields, key => key && get(_formState.errors, key), _names.mount);
  const handleSubmit = (onValid, onInvalid) => async e => {
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const {
        errors,
        values
      } = await _executeSchema();
      _formState.errors = errors;
      fieldValues = values;
    } else {
      await executeBuiltInValidation(_fields);
    }
    unset(_formState.errors, 'root');
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      await onValid(fieldValues, e);
    } else {
      if (onInvalid) {
        await onInvalid({
          ..._formState.errors
        }, e);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors),
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
  };
  const resetField = function (name) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, get(_defaultValues, name));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, options.defaultValue);
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, get(_defaultValues, name)) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _updateValid();
      }
      _subjects.state.next({
        ..._formState
      });
    }
  };
  const _reset = function (formValues) {
    let keepStateOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues || shouldCaptureDirtyFields) {
        for (const fieldName of _names.mount) {
          get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest('form');
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        _fields = {};
      }
      _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
      _subjects.array.next({
        values: {
          ...values
        }
      });
      _subjects.values.next({
        values: {
          ...values
        }
      });
    }
    _names = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
      watchAll: false,
      focus: ''
    };
    !_state.mount && flushRootRender();
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
    _state.watch = !!props.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: keepStateOptions.keepDirtyValues ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
      isSubmitting: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = function (name) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && fieldRef.select();
      }
    }
  };
  const _updateFormState = updatedFormState => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then(values => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  return {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _executeSchema,
      _getWatch,
      _getDirty,
      _updateValid,
      _removeUnmounted,
      _updateFieldArray,
      _updateDisabledField,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _updateFormState,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      set _formState(value) {
        _formState = value;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
}

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */
function useForm() {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const _formControl = react.useRef();
  const _values = react.useRef();
  const [formState, updateFormState] = react.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: isFunction(props.defaultValues) ? undefined : props.defaultValues
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props, () => updateFormState(formState => ({
        ...formState
      }))),
      formState
    };
  }
  const control = _formControl.current.control;
  control._options = props;
  useSubscribe({
    subject: control._subjects.state,
    next: value => {
      if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState, true)) {
        updateFormState({
          ...control._formState
        });
      }
    }
  });
  react.useEffect(() => {
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, control._options.resetOptions);
      _values.current = props.values;
    } else {
      control._resetDefaultValues();
    }
  }, [props.values, control]);
  react.useEffect(() => {
    if (!control._state.mount) {
      control._updateValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({
        ...control._formState
      });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}

;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
/* harmony default export */ var clsx_m = (clsx);
;// CONCATENATED MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
'use client';



const u = t => "number" == typeof t && !isNaN(t),
  d = t => "string" == typeof t,
  p = t => "function" == typeof t,
  m = t => d(t) || p(t) ? t : null,
  f = t => (0,react.isValidElement)(t) || d(t) || p(t) || u(t);
function g(t, e, n) {
  void 0 === n && (n = 300);
  const {
    scrollHeight: o,
    style: s
  } = t;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = o + "px", s.transition = "all ".concat(n, "ms"), requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(e, n);
    });
  });
}
function h(e) {
  let {
    enter: a,
    exit: r,
    appendPosition: i = !1,
    collapse: l = !0,
    collapseDuration: c = 300
  } = e;
  return function (e) {
    let {
      children: u,
      position: d,
      preventExitTransition: p,
      done: m,
      nodeRef: f,
      isIn: h
    } = e;
    const y = i ? "".concat(a, "--").concat(d) : a,
      v = i ? "".concat(r, "--").concat(d) : r,
      T = (0,react.useRef)(0);
    return (0,react.useLayoutEffect)(() => {
      const t = f.current,
        e = y.split(" "),
        n = o => {
          o.target === f.current && (t.dispatchEvent(new Event("d")), t.removeEventListener("animationend", n), t.removeEventListener("animationcancel", n), 0 === T.current && "animationcancel" !== o.type && t.classList.remove(...e));
        };
      t.classList.add(...e), t.addEventListener("animationend", n), t.addEventListener("animationcancel", n);
    }, []), (0,react.useEffect)(() => {
      const t = f.current,
        e = () => {
          t.removeEventListener("animationend", e), l ? g(t, m, c) : m();
        };
      h || (p ? e() : (T.current = 1, t.className += " ".concat(v), t.addEventListener("animationend", e)));
    }, [h]), react.createElement(react.Fragment, null, u);
  };
}
function y(t, e) {
  return null != t ? {
    content: t.content,
    containerId: t.props.containerId,
    id: t.props.toastId,
    theme: t.props.theme,
    type: t.props.type,
    data: t.props.data || {},
    isLoading: t.props.isLoading,
    icon: t.props.icon,
    status: e
  } : {};
}
const v = {
    list: new Map(),
    emitQueue: new Map(),
    on(t, e) {
      return this.list.has(t) || this.list.set(t, []), this.list.get(t).push(e), this;
    },
    off(t, e) {
      if (e) {
        const n = this.list.get(t).filter(t => t !== e);
        return this.list.set(t, n), this;
      }
      return this.list.delete(t), this;
    },
    cancelEmit(t) {
      const e = this.emitQueue.get(t);
      return e && (e.forEach(clearTimeout), this.emitQueue.delete(t)), this;
    },
    emit(t) {
      this.list.has(t) && this.list.get(t).forEach(e => {
        const n = setTimeout(() => {
          e(...[].slice.call(arguments, 1));
        }, 0);
        this.emitQueue.has(t) || this.emitQueue.set(t, []), this.emitQueue.get(t).push(n);
      });
    }
  },
  T = e => {
    let {
      theme: n,
      type: o,
      ...s
    } = e;
    return react.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill: "colored" === n ? "currentColor" : "var(--toastify-icon-color-".concat(o, ")"),
      ...s
    });
  },
  E = {
    info: function (e) {
      return react.createElement(T, {
        ...e
      }, react.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
      }));
    },
    warning: function (e) {
      return react.createElement(T, {
        ...e
      }, react.createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
      }));
    },
    success: function (e) {
      return react.createElement(T, {
        ...e
      }, react.createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
      }));
    },
    error: function (e) {
      return react.createElement(T, {
        ...e
      }, react.createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
      }));
    },
    spinner: function () {
      return react.createElement("div", {
        className: "Toastify__spinner"
      });
    }
  };
function C(t) {
  const [, o] = (0,react.useReducer)(t => t + 1, 0),
    [l, c] = (0,react.useState)([]),
    g = (0,react.useRef)(null),
    h = (0,react.useRef)(new Map()).current,
    T = t => -1 !== l.indexOf(t),
    C = (0,react.useRef)({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: t,
      containerId: null,
      isToastActive: T,
      getToast: t => h.get(t)
    }).current;
  function b(t) {
    let {
      containerId: e
    } = t;
    const {
      limit: n
    } = C.props;
    !n || e && C.containerId !== e || (C.count -= C.queue.length, C.queue = []);
  }
  function I(t) {
    c(e => null == t ? [] : e.filter(e => e !== t));
  }
  function _() {
    const {
      toastContent: t,
      toastProps: e,
      staleId: n
    } = C.queue.shift();
    O(t, e, n);
  }
  function L(t, n) {
    let {
      delay: s,
      staleId: r,
      ...i
    } = n;
    if (!f(t) || function (t) {
      return !g.current || C.props.enableMultiContainer && t.containerId !== C.props.containerId || h.has(t.toastId) && null == t.updateId;
    }(i)) return;
    const {
        toastId: l,
        updateId: c,
        data: T
      } = i,
      {
        props: b
      } = C,
      L = () => I(l),
      N = null == c;
    N && C.count++;
    const M = {
      ...b,
      style: b.toastStyle,
      key: C.toastKey++,
      ...Object.fromEntries(Object.entries(i).filter(t => {
        let [e, n] = t;
        return null != n;
      })),
      toastId: l,
      updateId: c,
      data: T,
      closeToast: L,
      isIn: !1,
      className: m(i.className || b.toastClassName),
      bodyClassName: m(i.bodyClassName || b.bodyClassName),
      progressClassName: m(i.progressClassName || b.progressClassName),
      autoClose: !i.isLoading && (R = i.autoClose, w = b.autoClose, !1 === R || u(R) && R > 0 ? R : w),
      deleteToast() {
        const t = y(h.get(l), "removed");
        h.delete(l), v.emit(4, t);
        const e = C.queue.length;
        if (C.count = null == l ? C.count - C.displayedToast : C.count - 1, C.count < 0 && (C.count = 0), e > 0) {
          const t = null == l ? C.props.limit : 1;
          if (1 === e || 1 === t) C.displayedToast++, _();else {
            const n = t > e ? e : t;
            C.displayedToast = n;
            for (let t = 0; t < n; t++) _();
          }
        } else o();
      }
    };
    var R, w;
    M.iconOut = function (t) {
      let {
          theme: n,
          type: o,
          isLoading: s,
          icon: r
        } = t,
        i = null;
      const l = {
        theme: n,
        type: o
      };
      return !1 === r || (p(r) ? i = r(l) : (0,react.isValidElement)(r) ? i = (0,react.cloneElement)(r, l) : d(r) || u(r) ? i = r : s ? i = E.spinner() : (t => t in E)(o) && (i = E[o](l))), i;
    }(M), p(i.onOpen) && (M.onOpen = i.onOpen), p(i.onClose) && (M.onClose = i.onClose), M.closeButton = b.closeButton, !1 === i.closeButton || f(i.closeButton) ? M.closeButton = i.closeButton : !0 === i.closeButton && (M.closeButton = !f(b.closeButton) || b.closeButton);
    let x = t;
    (0,react.isValidElement)(t) && !d(t.type) ? x = (0,react.cloneElement)(t, {
      closeToast: L,
      toastProps: M,
      data: T
    }) : p(t) && (x = t({
      closeToast: L,
      toastProps: M,
      data: T
    })), b.limit && b.limit > 0 && C.count > b.limit && N ? C.queue.push({
      toastContent: x,
      toastProps: M,
      staleId: r
    }) : u(s) ? setTimeout(() => {
      O(x, M, r);
    }, s) : O(x, M, r);
  }
  function O(t, e, n) {
    const {
      toastId: o
    } = e;
    n && h.delete(n);
    const s = {
      content: t,
      props: e
    };
    h.set(o, s), c(t => [...t, o].filter(t => t !== n)), v.emit(4, y(s, null == s.props.updateId ? "added" : "updated"));
  }
  return (0,react.useEffect)(() => (C.containerId = t.containerId, v.cancelEmit(3).on(0, L).on(1, t => g.current && I(t)).on(5, b).emit(2, C), () => {
    h.clear(), v.emit(3, C);
  }), []), (0,react.useEffect)(() => {
    C.props = t, C.isToastActive = T, C.displayedToast = l.length;
  }), {
    getToastToRender: function (e) {
      const n = new Map(),
        o = Array.from(h.values());
      return t.newestOnTop && o.reverse(), o.forEach(t => {
        const {
          position: e
        } = t.props;
        n.has(e) || n.set(e, []), n.get(e).push(t);
      }), Array.from(n, t => e(t[0], t[1]));
    },
    containerRef: g,
    isToastActive: T
  };
}
function b(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
}
function I(t) {
  return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
}
function _(t) {
  const [o, a] = (0,react.useState)(!1),
    [r, l] = (0,react.useState)(!1),
    c = (0,react.useRef)(null),
    u = (0,react.useRef)({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1
    }).current,
    d = (0,react.useRef)(t),
    {
      autoClose: m,
      pauseOnHover: f,
      closeToast: g,
      onClick: h,
      closeOnClick: y
    } = t;
  function v(e) {
    if (t.draggable) {
      "touchstart" === e.nativeEvent.type && e.nativeEvent.preventDefault(), u.didMove = !1, document.addEventListener("mousemove", _), document.addEventListener("mouseup", L), document.addEventListener("touchmove", _), document.addEventListener("touchend", L);
      const n = c.current;
      u.canCloseOnClick = !0, u.canDrag = !0, u.boundingRect = n.getBoundingClientRect(), n.style.transition = "", u.x = b(e.nativeEvent), u.y = I(e.nativeEvent), "x" === t.draggableDirection ? (u.start = u.x, u.removalDistance = n.offsetWidth * (t.draggablePercent / 100)) : (u.start = u.y, u.removalDistance = n.offsetHeight * (80 === t.draggablePercent ? 1.5 * t.draggablePercent : t.draggablePercent / 100));
    }
  }
  function T(e) {
    if (u.boundingRect) {
      const {
        top: n,
        bottom: o,
        left: s,
        right: a
      } = u.boundingRect;
      "touchend" !== e.nativeEvent.type && t.pauseOnHover && u.x >= s && u.x <= a && u.y >= n && u.y <= o ? C() : E();
    }
  }
  function E() {
    a(!0);
  }
  function C() {
    a(!1);
  }
  function _(e) {
    const n = c.current;
    u.canDrag && n && (u.didMove = !0, o && C(), u.x = b(e), u.y = I(e), u.delta = "x" === t.draggableDirection ? u.x - u.start : u.y - u.start, u.start !== u.x && (u.canCloseOnClick = !1), n.style.transform = "translate".concat(t.draggableDirection, "(").concat(u.delta, "px)"), n.style.opacity = "" + (1 - Math.abs(u.delta / u.removalDistance)));
  }
  function L() {
    document.removeEventListener("mousemove", _), document.removeEventListener("mouseup", L), document.removeEventListener("touchmove", _), document.removeEventListener("touchend", L);
    const e = c.current;
    if (u.canDrag && u.didMove && e) {
      if (u.canDrag = !1, Math.abs(u.delta) > u.removalDistance) return l(!0), void t.closeToast();
      e.style.transition = "transform 0.2s, opacity 0.2s", e.style.transform = "translate".concat(t.draggableDirection, "(0)"), e.style.opacity = "1";
    }
  }
  (0,react.useEffect)(() => {
    d.current = t;
  }), (0,react.useEffect)(() => (c.current && c.current.addEventListener("d", E, {
    once: !0
  }), p(t.onOpen) && t.onOpen((0,react.isValidElement)(t.children) && t.children.props), () => {
    const t = d.current;
    p(t.onClose) && t.onClose((0,react.isValidElement)(t.children) && t.children.props);
  }), []), (0,react.useEffect)(() => (t.pauseOnFocusLoss && (document.hasFocus() || C(), window.addEventListener("focus", E), window.addEventListener("blur", C)), () => {
    t.pauseOnFocusLoss && (window.removeEventListener("focus", E), window.removeEventListener("blur", C));
  }), [t.pauseOnFocusLoss]);
  const O = {
    onMouseDown: v,
    onTouchStart: v,
    onMouseUp: T,
    onTouchEnd: T
  };
  return m && f && (O.onMouseEnter = C, O.onMouseLeave = E), y && (O.onClick = t => {
    h && h(t), u.canCloseOnClick && g();
  }), {
    playToast: E,
    pauseToast: C,
    isRunning: o,
    preventExitTransition: r,
    toastRef: c,
    eventHandlers: O
  };
}
function L(e) {
  let {
    closeToast: n,
    theme: o,
    ariaLabel: s = "close"
  } = e;
  return react.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--".concat(o),
    type: "button",
    onClick: t => {
      t.stopPropagation(), n(t);
    },
    "aria-label": s
  }, react.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, react.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}
function O(e) {
  let {
    delay: n,
    isRunning: o,
    closeToast: s,
    type: a = "default",
    hide: r,
    className: i,
    style: l,
    controlledProgress: u,
    progress: d,
    rtl: m,
    isIn: f,
    theme: g
  } = e;
  const h = r || u && 0 === d,
    y = {
      ...l,
      animationDuration: "".concat(n, "ms"),
      animationPlayState: o ? "running" : "paused",
      opacity: h ? 0 : 1
    };
  u && (y.transform = "scaleX(".concat(d, ")"));
  const v = clsx_m("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--".concat(g), "Toastify__progress-bar--".concat(a), {
      "Toastify__progress-bar--rtl": m
    }),
    T = p(i) ? i({
      rtl: m,
      type: a,
      defaultClassName: v
    }) : clsx_m(v, i);
  return react.createElement("div", {
    role: "progressbar",
    "aria-hidden": h ? "true" : "false",
    "aria-label": "notification timer",
    className: T,
    style: y,
    [u && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u && d < 1 ? null : () => {
      f && s();
    }
  });
}
const N = n => {
    const {
        isRunning: o,
        preventExitTransition: s,
        toastRef: r,
        eventHandlers: i
      } = _(n),
      {
        closeButton: l,
        children: u,
        autoClose: d,
        onClick: m,
        type: f,
        hideProgressBar: g,
        closeToast: h,
        transition: y,
        position: v,
        className: T,
        style: E,
        bodyClassName: C,
        bodyStyle: b,
        progressClassName: I,
        progressStyle: N,
        updateId: M,
        role: R,
        progress: w,
        rtl: x,
        toastId: $,
        deleteToast: k,
        isIn: P,
        isLoading: B,
        iconOut: D,
        closeOnClick: A,
        theme: z
      } = n,
      F = clsx_m("Toastify__toast", "Toastify__toast-theme--".concat(z), "Toastify__toast--".concat(f), {
        "Toastify__toast--rtl": x
      }, {
        "Toastify__toast--close-on-click": A
      }),
      H = p(T) ? T({
        rtl: x,
        position: v,
        type: f,
        defaultClassName: F
      }) : clsx_m(F, T),
      S = !!w || !d,
      q = {
        closeToast: h,
        type: f,
        theme: z
      };
    let Q = null;
    return !1 === l || (Q = p(l) ? l(q) : (0,react.isValidElement)(l) ? (0,react.cloneElement)(l, q) : L(q)), react.createElement(y, {
      isIn: P,
      done: k,
      position: v,
      preventExitTransition: s,
      nodeRef: r
    }, react.createElement("div", {
      id: $,
      onClick: m,
      className: H,
      ...i,
      style: E,
      ref: r
    }, react.createElement("div", {
      ...(P && {
        role: R
      }),
      className: p(C) ? C({
        type: f
      }) : clsx_m("Toastify__toast-body", C),
      style: b
    }, null != D && react.createElement("div", {
      className: clsx_m("Toastify__toast-icon", {
        "Toastify--animate-icon Toastify__zoom-enter": !B
      })
    }, D), react.createElement("div", null, u)), Q, react.createElement(O, {
      ...(M && !S ? {
        key: "pb-".concat(M)
      } : {}),
      rtl: x,
      theme: z,
      delay: d,
      isRunning: o,
      isIn: P,
      closeToast: h,
      hide: g,
      type: f,
      style: N,
      className: I,
      controlledProgress: S,
      progress: w || 0
    })));
  },
  M = function (t, e) {
    return void 0 === e && (e = !1), {
      enter: "Toastify--animate Toastify__".concat(t, "-enter"),
      exit: "Toastify--animate Toastify__".concat(t, "-exit"),
      appendPosition: e
    };
  },
  R = h(M("bounce", !0)),
  w = h(M("slide", !0)),
  x = h(M("zoom")),
  $ = h(M("flip")),
  k = (0,react.forwardRef)((e, n) => {
    const {
        getToastToRender: o,
        containerRef: a,
        isToastActive: r
      } = C(e),
      {
        className: i,
        style: l,
        rtl: u,
        containerId: d
      } = e;
    function f(t) {
      const e = clsx_m("Toastify__toast-container", "Toastify__toast-container--".concat(t), {
        "Toastify__toast-container--rtl": u
      });
      return p(i) ? i({
        position: t,
        rtl: u,
        defaultClassName: e
      }) : clsx_m(e, m(i));
    }
    return (0,react.useEffect)(() => {
      n && (n.current = a.current);
    }, []), react.createElement("div", {
      ref: a,
      className: "Toastify",
      id: d
    }, o((e, n) => {
      const o = n.length ? {
        ...l
      } : {
        ...l,
        pointerEvents: "none"
      };
      return react.createElement("div", {
        className: f(e),
        style: o,
        key: "container-".concat(e)
      }, n.map((e, o) => {
        let {
          content: s,
          props: a
        } = e;
        return react.createElement(N, {
          ...a,
          isIn: r(a.toastId),
          style: {
            ...a.style,
            "--nth": o + 1,
            "--len": n.length
          },
          key: "toast-".concat(a.key)
        }, s);
      }));
    }));
  });
k.displayName = "ToastContainer", k.defaultProps = {
  position: "top-right",
  transition: R,
  autoClose: 5e3,
  closeButton: L,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  closeOnClick: !0,
  draggable: !0,
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light"
};
let P,
  B = new Map(),
  D = [],
  A = 1;
function z() {
  return "" + A++;
}
function F(t) {
  return t && (d(t.toastId) || u(t.toastId)) ? t.toastId : z();
}
function H(t, e) {
  return B.size > 0 ? v.emit(0, t, e) : D.push({
    content: t,
    options: e
  }), e.toastId;
}
function S(t, e) {
  return {
    ...e,
    type: e && e.type || t,
    toastId: F(e)
  };
}
function q(t) {
  return (e, n) => H(e, S(t, n));
}
function Q(t, e) {
  return H(t, S("default", e));
}
Q.loading = (t, e) => H(t, S("default", {
  isLoading: !0,
  autoClose: !1,
  closeOnClick: !1,
  closeButton: !1,
  draggable: !1,
  ...e
})), Q.promise = function (t, e, n) {
  let o,
    {
      pending: s,
      error: a,
      success: r
    } = e;
  s && (o = d(s) ? Q.loading(s, n) : Q.loading(s.render, {
    ...n,
    ...s
  }));
  const i = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null
    },
    l = (t, e, s) => {
      if (null == e) return void Q.dismiss(o);
      const a = {
          type: t,
          ...i,
          ...n,
          data: s
        },
        r = d(e) ? {
          render: e
        } : e;
      return o ? Q.update(o, {
        ...a,
        ...r
      }) : Q(r.render, {
        ...a,
        ...r
      }), s;
    },
    c = p(t) ? t() : t;
  return c.then(t => l("success", r, t)).catch(t => l("error", a, t)), c;
}, Q.success = q("success"), Q.info = q("info"), Q.error = q("error"), Q.warning = q("warning"), Q.warn = Q.warning, Q.dark = (t, e) => H(t, S("default", {
  theme: "dark",
  ...e
})), Q.dismiss = t => {
  B.size > 0 ? v.emit(1, t) : D = D.filter(e => null != t && e.options.toastId !== t);
}, Q.clearWaitingQueue = function (t) {
  return void 0 === t && (t = {}), v.emit(5, t);
}, Q.isActive = t => {
  let e = !1;
  return B.forEach(n => {
    n.isToastActive && n.isToastActive(t) && (e = !0);
  }), e;
}, Q.update = function (t, e) {
  void 0 === e && (e = {}), setTimeout(() => {
    const n = function (t, e) {
      let {
        containerId: n
      } = e;
      const o = B.get(n || P);
      return o && o.getToast(t);
    }(t, e);
    if (n) {
      const {
          props: o,
          content: s
        } = n,
        a = {
          delay: 100,
          ...o,
          ...e,
          toastId: e.toastId || t,
          updateId: z()
        };
      a.toastId !== t && (a.staleId = t);
      const r = a.render || s;
      delete a.render, H(r, a);
    }
  }, 0);
}, Q.done = t => {
  Q.update(t, {
    progress: 1
  });
}, Q.onChange = t => (v.on(4, t), () => {
  v.off(4, t);
}), Q.POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
}, Q.TYPE = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
}, v.on(2, t => {
  P = t.containerId || t, B.set(P, t), D.forEach(t => {
    v.emit(0, t.content, t.options);
  }), D = [];
}).on(3, t => {
  B.delete(t.containerId || t), 0 === B.size && v.off(0).off(1).off(5);
});

;// CONCATENATED MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/store/store.js
const store = {
  _origin: 'https://api.emailjs.com'
};
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/init/init.js

/**
 * Initiation
 * @param {string} publicKey - set the EmailJS public key
 * @param {string} origin - set the EmailJS origin
 */
const init = function (publicKey) {
  let origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://api.emailjs.com';
  store._userID = publicKey;
  store._origin = origin;
};
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/utils/validateParams.js
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey) {
    throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
  }
  if (!serviceID) {
    throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
  }
  if (!templateID) {
    throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
  }
  return true;
};
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
class EmailJSResponseStatus {
  constructor(httpResponse) {
    this.status = httpResponse ? httpResponse.status : 0;
    this.text = httpResponse ? httpResponse.responseText : 'Network Error';
  }
}
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/api/sendPost.js


const sendPost = function (url, data) {
  let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', _ref => {
      let {
        target
      } = _ref;
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === 'OK') {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener('error', _ref2 => {
      let {
        target
      } = _ref2;
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open('POST', store._origin + url, true);
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/send/send.js



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, publicKey) => {
  const uID = publicKey || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: '3.11.0',
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost('/api/v1.0/email/send', JSON.stringify(params), {
    'Content-type': 'application/json'
  });
};
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js



const findHTMLForm = form => {
  let currentForm;
  if (typeof form === 'string') {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== 'FORM') {
    throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
  }
  return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, publicKey) => {
  const uID = publicKey || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append('lib_version', '3.11.0');
  formData.append('service_id', serviceID);
  formData.append('template_id', templateID);
  formData.append('user_id', uID);
  return sendPost('/api/v1.0/email/send-form', formData);
};
;// CONCATENATED MODULE: ./node_modules/@emailjs/browser/es/index.js




/* harmony default export */ var es = ({
  init: init,
  send: send,
  sendForm: sendForm
});
;// CONCATENATED MODULE: ./src/components/ContactForm.js
const ContactForm=()=>{const{register,handleSubmit,formState:{errors},reset}=useForm();const{0:buttonDisabled,1:setButtonDisabled}=(0,react.useState)(false);const onSubmit=async data=>{setButtonDisabled(true);console.log(data);const templateParams={from_name:data.name,email:data.email,message:data.message};try{await es.send('service_9qq16vg','template_r4obf0i',templateParams,'ZN_b_0NlTdn4on4mt').then(response=>{console.log('SUCCESS!',response.status,response.text);},err=>{console.log('FAILED...',err);});}catch(e){console.log(e);}finally{Q('Thank you for your message!',{position:"bottom-left",autoClose:5000,hideProgressBar:false,closeOnClick:true,pauseOnHover:true,draggable:true,progress:undefined,theme:"dark"});reset();}};return/*#__PURE__*/react.createElement("section",{className:"contact-form"},/*#__PURE__*/react.createElement("div",{className:"container-fluid"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:"contact-inputs cpanel col-md-6"},/*#__PURE__*/react.createElement("div",{className:"form-block col-md-9 col-xs-12"},/*#__PURE__*/react.createElement("h3",null,"Tell Us About Your Project"),/*#__PURE__*/react.createElement("form",{role:"form",name:"contactForm",onSubmit:handleSubmit(onSubmit),className:""},/*#__PURE__*/react.createElement("div",{className:"form-group"},/*#__PURE__*/react.createElement("input",Object.assign({type:"text",name:"name",id:"name"},register("name",{required:true}),{className:"form-control",placeholder:"Your name"}))),/*#__PURE__*/react.createElement("div",{className:"form-group"},/*#__PURE__*/react.createElement("input",Object.assign({type:"email",name:"email",id:"email"},register("email",{required:true}),{className:"form-control",placeholder:"Your email address",required:true}))),/*#__PURE__*/react.createElement("div",{className:"form-group"},/*#__PURE__*/react.createElement("textarea",Object.assign({name:"message",id:"message"},register("message",{required:true}),{className:"form-control",placeholder:"Tell us more about your project",maxLength:"2000"}))),/*#__PURE__*/react.createElement("div",{className:"button-group"},/*#__PURE__*/react.createElement("button",{type:"submit",className:"btn action-btn red","aria-label":"Submit",disabled:buttonDisabled},/*#__PURE__*/react.createElement("span",{className:"spinner btn-loading__icon"}),/*#__PURE__*/react.createElement("span",{className:"btn-title btn-loading__text"},"Send")),/*#__PURE__*/react.createElement(k,null))))),/*#__PURE__*/react.createElement("div",{className:"contact-info cpanel col-md-6 col-centered"},/*#__PURE__*/react.createElement("div",{className:"info-block"},/*#__PURE__*/react.createElement("h3",null,"Next Steps..."),/*#__PURE__*/react.createElement("ol",{className:"counter-list"},/*#__PURE__*/react.createElement("li",null,"We'll contact you soon with more information. In the meantime, see what we're up to on our ",/*#__PURE__*/react.createElement("a",{href:"/src/templates/blog-homepage"},"blog"),"."),/*#__PURE__*/react.createElement("li",null,"If you're inquiring about our open positions, you can find that information on our ",/*#__PURE__*/react.createElement("a",{href:"/careers"},"careers")," page."),/*#__PURE__*/react.createElement("li",null,"We look forward to working with you!")))))));};/* harmony default export */ var components_ContactForm = (ContactForm);
;// CONCATENATED MODULE: ./src/pages/contact.js
const Contact=()=>{(0,react.useEffect)(()=>{if(document){document.body.classList.add('inverse');}return()=>{if(document){document.body.classList.remove('inverse');}};},[]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("div",{className:"contact body-content"},/*#__PURE__*/react.createElement(Navbar/* default */.Z,{className:"navbar-fixed-top",inverse:true}),/*#__PURE__*/react.createElement(SecondaryPageHeader/* default */.Z,{smallTitle:"Contact Us",title:"Ready to take things to the next level?",subtext:"Tell us a little more about your project or how we can help."}),/*#__PURE__*/react.createElement(components_ContactForm,null),/*#__PURE__*/react.createElement(Footer/* default */.Z,null)));};/* harmony default export */ var contact = (Contact);

/***/ })

}]);
//# sourceMappingURL=component---src-pages-contact-js-c55c16528078b64f3d5e.js.map