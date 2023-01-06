(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VueSimpleValidator = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var ErrorBag = /*#__PURE__*/function () {
    /**
     * Validator constructor
     *
     * @param {Object} errors
     */
    function ErrorBag(errors) {
      _classCallCheck(this, ErrorBag);

      this.errors = errors || {};
    }
    /**
     * Add a new error message.
     *
     * @returns {Object}
     */


    _createClass(ErrorBag, [{
      key: "add",
      value: function add(key, message) {
        this.errors[key] = message;
        return this;
      }
      /**
       * Return all error messages.
       *
       * @returns {Object}
       */

    }, {
      key: "all",
      value: function all() {
        return this.errors || {};
      }
      /**
       * Does the bag contains any errors.
       *
       * @returns {Boolean}
       */

    }, {
      key: "any",
      value: function any() {
        return this.count() > 0;
      }
      /**
       * Return the amount of errors in the bag.
       *
       * @returns {Number}
       */

    }, {
      key: "count",
      value: function count() {
        return Object.keys(this.all()).length || 0;
      }
      /**
       * Get the error message for the requested key.
       *
       * @returns {String|null}
       */

    }, {
      key: "get",
      value: function get(key) {
        return this.errors[key] || null;
      }
      /**
       * See if the bag contains a message for the requested key.
       *
       * @returns {Boolean}
       */

    }, {
      key: "has",
      value: function has(key) {
        return this.all().indexOf(key) !== -1;
      }
    }]);

    return ErrorBag;
  }();

  var Helpers = {
    /**
     * @param {Object} context
     * @param {String} fieldName
     *
     * @returns {*}
     */
    getFieldValueFromContext: function getFieldValueFromContext(context, fieldName) {
      var fieldNameParts = fieldName.split('.'),
          result = context;

      var _iterator = _createForOfIteratorHelper(fieldNameParts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fieldNamePart = _step.value;

          if (!result.hasOwnProperty(fieldNamePart)) {
            return null;
          }

          result = result[fieldNamePart];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    }
  };

  var Rule = /*#__PURE__*/function () {
    /**
     * Abstract class constructor
     */
    function Rule() {
      _classCallCheck(this, Rule);

      if ((this instanceof Rule ? this.constructor : void 0) === Rule) {
        throw new TypeError('Cannot construct Rule instances directly.');
      }
    }
    /**
     * @param {*} value
     * @param {Array} ruleParams
     * @param {Object} context
     *
     * @return {Boolean}
     */


    _createClass(Rule, [{
      key: "validate",
      value: function validate(value, ruleParams, context) {
        throw new Error("Method 'validate(value, ruleParams, context)' must be implemented.");
      }
      /**
       * @param {String} message
       * @param {String} field
       * @param {Array} ruleParams
       *
       * @returns {String}
       */

    }, {
      key: "failureMessage",
      value: function failureMessage(message, field, ruleParams) {
        return message.replace('{field}', field);
      }
    }]);

    return Rule;
  }();

  var Alpha = /*#__PURE__*/function (_Rule) {
    _inherits(Alpha, _Rule);

    var _super = _createSuper(Alpha);

    function Alpha() {
      _classCallCheck(this, Alpha);

      return _super.apply(this, arguments);
    }

    _createClass(Alpha, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return value.match(/^[a-zA-Z]+$/);
      }
    }]);

    return Alpha;
  }(Rule);

  var AlphaNumeric = /*#__PURE__*/function (_Rule) {
    _inherits(AlphaNumeric, _Rule);

    var _super = _createSuper(AlphaNumeric);

    function AlphaNumeric() {
      _classCallCheck(this, AlphaNumeric);

      return _super.apply(this, arguments);
    }

    _createClass(AlphaNumeric, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return value.match(/^[0-9a-zA-Z]+$/);
      }
    }]);

    return AlphaNumeric;
  }(Rule);

  var Between = /*#__PURE__*/function (_Rule) {
    _inherits(Between, _Rule);

    var _super = _createSuper(Between);

    function Between() {
      _classCallCheck(this, Between);

      return _super.apply(this, arguments);
    }

    _createClass(Between, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        var minimal = ruleParams[0];
        var maximum = ruleParams[1];
        return value >= minimal && value <= maximum;
      }
      /**
       * @param {String} message
       * @param {String} field
       * @param {Array} ruleParams
       *
       * @returns {String}
       */

    }, {
      key: "failureMessage",
      value: function failureMessage(message, field, ruleParams) {
        var minimum = ruleParams[0];
        var maximum = ruleParams[1];
        return message.replace('{field}', field).replace('{minimum}', minimum).replace('{maximum}', maximum);
      }
    }]);

    return Between;
  }(Rule);

  var Email = /*#__PURE__*/function (_Rule) {
    _inherits(Email, _Rule);

    var _super = _createSuper(Email);

    function Email() {
      _classCallCheck(this, Email);

      return _super.apply(this, arguments);
    }

    _createClass(Email, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        var pattern = new RegExp('^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
        return !!pattern.test(value);
      }
    }]);

    return Email;
  }(Rule);

  var Float = /*#__PURE__*/function (_Rule) {
    _inherits(Float, _Rule);

    var _super = _createSuper(Float);

    function Float() {
      _classCallCheck(this, Float);

      return _super.apply(this, arguments);
    }

    _createClass(Float, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return function (value) {
          return parseFloat(value) === value;
        };
      }
    }]);

    return Float;
  }(Rule);

  var Integer = /*#__PURE__*/function (_Rule) {
    _inherits(Integer, _Rule);

    var _super = _createSuper(Integer);

    function Integer() {
      _classCallCheck(this, Integer);

      return _super.apply(this, arguments);
    }

    _createClass(Integer, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return function (value) {
          return parseInt(value) === value;
        };
      }
    }]);

    return Integer;
  }(Rule);

  var Length = /*#__PURE__*/function (_Rule) {
    _inherits(Length, _Rule);

    var _super = _createSuper(Length);

    function Length() {
      _classCallCheck(this, Length);

      return _super.apply(this, arguments);
    }

    _createClass(Length, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return value.length == length;
      }
      /**
       * @param {String} message
       * @param {String} field
       * @param {Array} ruleParams
       *
       * @returns {String}
       */

    }, {
      key: "failureMessage",
      value: function failureMessage(message, field, ruleParams) {
        var length = ruleParams[0];
        return message.replace('{field}', field).replace('{length}', length);
      }
    }]);

    return Length;
  }(Rule);

  var MaxValue = /*#__PURE__*/function (_Rule) {
    _inherits(MaxValue, _Rule);

    var _super = _createSuper(MaxValue);

    function MaxValue() {
      _classCallCheck(this, MaxValue);

      return _super.apply(this, arguments);
    }

    _createClass(MaxValue, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return !!value;
      }
      /**
       * @param {String} message
       * @param {String} field
       * @param {Array} ruleParams
       *
       * @returns {String}
       */

    }, {
      key: "failureMessage",
      value: function failureMessage(message, field, ruleParams) {
        var maximum = ruleParams[0];
        return message.replace('{field}', field).replace('{maximum}', maximum);
      }
    }]);

    return MaxValue;
  }(Rule);

  var MinValue = /*#__PURE__*/function (_Rule) {
    _inherits(MinValue, _Rule);

    var _super = _createSuper(MinValue);

    function MinValue() {
      _classCallCheck(this, MinValue);

      return _super.apply(this, arguments);
    }

    _createClass(MinValue, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return !!value;
      }
      /**
       * @param {String} message
       * @param {String} field
       * @param {Array} ruleParams
       */

    }, {
      key: "failureMessage",
      value: function failureMessage(message, field, ruleParams) {
        var minimum = ruleParams[0];
        return message.replace('{field}', field).replace('{minimum}', minimum);
      }
    }]);

    return MinValue;
  }(Rule);

  var Numeric = /*#__PURE__*/function (_Rule) {
    _inherits(Numeric, _Rule);

    var _super = _createSuper(Numeric);

    function Numeric() {
      _classCallCheck(this, Numeric);

      return _super.apply(this, arguments);
    }

    _createClass(Numeric, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return function (value) {
          return typeof value === 'number' && value === value && value !== Infinity && value !== -Infinity;
        };
      }
    }]);

    return Numeric;
  }(Rule);

  var Required = /*#__PURE__*/function (_Rule) {
    _inherits(Required, _Rule);

    var _super = _createSuper(Required);

    function Required() {
      _classCallCheck(this, Required);

      return _super.apply(this, arguments);
    }

    _createClass(Required, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return !!value;
      }
    }]);

    return Required;
  }(Rule);

  var RequiredIf = /*#__PURE__*/function (_Rule) {
    _inherits(RequiredIf, _Rule);

    var _super = _createSuper(RequiredIf);

    function RequiredIf() {
      _classCallCheck(this, RequiredIf);

      return _super.apply(this, arguments);
    }

    _createClass(RequiredIf, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        var otherFieldName = ruleParams[0],
            otherFieldValue = Helpers.getFieldValueFromContext(context, otherFieldName);
        return !!otherFieldValue;
      }
      /**
       * @param {String} message
       * @param {String} field
       * @param {Array} ruleParams
       *
       * @returns {String}
       */

    }, {
      key: "failureMessage",
      value: function failureMessage(message, field, ruleParams) {
        var otherFieldName = ruleParams[0];
        return message.replace('{field}', field).replace('{other_field}', otherFieldName);
      }
    }]);

    return RequiredIf;
  }(Rule);

  var RequiredWithout = /*#__PURE__*/function (_Rule) {
    _inherits(RequiredWithout, _Rule);

    var _super = _createSuper(RequiredWithout);

    function RequiredWithout() {
      _classCallCheck(this, RequiredWithout);

      return _super.apply(this, arguments);
    }

    _createClass(RequiredWithout, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        var otherFieldName = ruleParams[0],
            otherFieldValue = Helpers.getFieldValueFromContext(context, otherFieldName);
        return !!otherFieldValue;
      }
      /**
       * @param {String} message
       * @param {String} field
       * @param {Array} ruleParams
       *
       * @returns {String}
       */

    }, {
      key: "failureMessage",
      value: function failureMessage(message, field, ruleParams) {
        var otherFieldName = ruleParams[0];
        return message.replace('{field}', field).replace('{other_field}', otherFieldName);
      }
    }]);

    return RequiredWithout;
  }(Rule);

  var Slug = /*#__PURE__*/function (_Rule) {
    _inherits(Slug, _Rule);

    var _super = _createSuper(Slug);

    function Slug() {
      _classCallCheck(this, Slug);

      return _super.apply(this, arguments);
    }

    _createClass(Slug, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        var pattern = new RegExp('^[a-z](-?[a-z])*$');
        return !!pattern.test(value);
      }
    }]);

    return Slug;
  }(Rule);

  var String = /*#__PURE__*/function (_Rule) {
    _inherits(String, _Rule);

    var _super = _createSuper(String);

    function String() {
      _classCallCheck(this, String);

      return _super.apply(this, arguments);
    }

    _createClass(String, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        return typeof value === 'string';
      }
    }]);

    return String;
  }(Rule);

  var Url = /*#__PURE__*/function (_Rule) {
    _inherits(Url, _Rule);

    var _super = _createSuper(Url);

    function Url() {
      _classCallCheck(this, Url);

      return _super.apply(this, arguments);
    }

    _createClass(Url, [{
      key: "validate",

      /**
       * @param {*} value
       * @param {Array} ruleParams
       * @param {Object} context
       *
       * @returns {Boolean}
       */
      value: function validate(value, ruleParams, context) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

        return !!pattern.test(value);
      }
    }]);

    return Url;
  }(Rule);

  var Validator = /*#__PURE__*/function () {
    /**
     * Validator constructor
     */
    function Validator() {
      _classCallCheck(this, Validator);

      this.errorBag = new ErrorBag({});
      this.ruleInstances = {
        'alpha': new Alpha(),
        'alpha_numeric': new AlphaNumeric(),
        'between': new Between(),
        'decimal': new Float(),
        'email': new Email(),
        'float': new Float(),
        'int': new Integer(),
        'integer': new Integer(),
        'len': new Length(),
        'length': new Length(),
        'max': new MaxValue(),
        'min': new MinValue(),
        'numeric': new Numeric(),
        'required': new Required(),
        'required_if': new RequiredIf(),
        'required_without': new RequiredWithout(),
        'slug': new Slug(),
        'string': new String(),
        'url': new Url()
      };
      this.errorMessages = {
        'alpha': '{field} must only contain alphabetical (A-z) characters.',
        'alpha_numeric': '{field} must only contain alphanumeric (A-z, 0-9) characters.',
        'between': '{field} must be between {minimum} and {maximum}.',
        'decimal': '{field} must be decimal.',
        'email': '{field} must be a valid email addresss.',
        'float': '{field} must be decimal.',
        'int': '{field} must be integer.',
        'integer': '{field} must be integer.',
        'len': '{field} must have a length of {length}.',
        'length': '{field} must have a length of {length}.',
        'max': '{field} must be {maximum} or lower.',
        'min': '{field} must be {minimum} or higher.',
        'numeric': '{field} must be numeric value.',
        'required': '{field} is required',
        'required_if': '{field} is required when {other_field} is given.',
        'required_without': '{field} is required when {other_field} is not given.',
        'slug': '{field} must be a valid slug (a-z, 0-9, -).',
        'string': '{field} must be a valid string',
        'url': '{field} must be a valid url'
      };
    }
    /**
     * @returns {Object}
     */


    _createClass(Validator, [{
      key: "errors",
      value: function errors() {
        return this.errorBag;
      }
      /**
       * See if the current error bag contains any errors.
       *
       * @returns {Boolean}
       */

    }, {
      key: "failed",
      value: function failed() {
        return this.errors().any();
      }
      /**
       * @param {String} ruleName
       *
       * @returns {Object}
       */

    }, {
      key: "getRule",
      value: function getRule(ruleName) {
        var rule = this.ruleInstances[ruleName] || null;

        if (!rule) {
          throw "The rule '".concat(ruleName, "' is not supported.");
        }

        return rule;
      }
      /**
       * @param {String} ruleName
       * @param {Object} rule
       * @param {String|null} errorMessage
       */

    }, {
      key: "registerRule",
      value: function registerRule(ruleName, rule, errorMessage) {
        if (typeof ruleName !== 'string') {
          throw 'The rule name should be a string';
        } // @todo Improve check


        if (_typeof(rule) !== 'object') {
          throw "The rule object must be an object.";
        }

        errorMessage = errorMessage || '{field} is invalid.';
        this.ruleInstances[ruleName] = rule;
        this.errorMessages[ruleName] = errorMessage;
        return true;
      }
      /**
       * @param {String} fieldName
       * @param {String} fieldRule
       */

    }, {
      key: "reportFailure",
      value: function reportFailure(fieldName, fieldRule) {
        // Build and store failure message based on field value + field rule.
        var ruleSequence = fieldRule.split(':'),
            ruleName = ruleSequence[0] || '',
            ruleParams = (ruleSequence[1] || 'null').split(','),
            rule = this.getRule(ruleName),
            rawMessage = this.errorMessages[ruleName] || '{field} is invalid.',
            message = rule ? rule.failureMessage(rawMessage, fieldName, ruleParams) : 'Could not retrieve error message';
        this.errorBag.add(fieldName, message);
      }
      /**
       * @param {Object} errorMessages
       */

    }, {
      key: "setErrorMessages",
      value: function setErrorMessages(errorMessages) {
        Object.assign(this.errorMessages, errorMessages);
      }
      /**
       * @param {Object} context
       * @param {Object} rules
       *
       * @returns {Boolean}
       */

    }, {
      key: "validate",
      value: function validate(context, rules) {
        var _this = this;

        // When validating start with a new ErrorBag
        this.errorBag = new ErrorBag({});
        Object.entries(rules).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              fieldName = _ref2[0],
              fieldRules = _ref2[1];

          var fieldValue = Helpers.getFieldValueFromContext(context, fieldName);
          fieldRules = typeof fieldRules === 'string' ? fieldRules.split('|') : fieldRules;

          var _iterator = _createForOfIteratorHelper(fieldRules),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var fieldRule = _step.value;

              // Validate field rule, report the error and break our of the field rules for loop when an error is found.
              if (!_this.validateValueAgainstRule(fieldValue, fieldRule, context)) {
                _this.reportFailure(fieldName, fieldRule);

                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        return this.errorBag.any();
      }
      /**
       * @param {*} value
       * @param {String} rule
       * @param {Object} context
       *
       * @returns {Boolean}
       */

    }, {
      key: "validateValueAgainstRule",
      value: function validateValueAgainstRule(value, rule, context) {
        var ruleSequence = rule.split(':'),
            ruleName = ruleSequence[0] || null,
            ruleParams = (ruleSequence[1] || 'null').split(','),
            ruleInstance = this.getRule(ruleName);

        if (!rule) {
          return false;
        }

        return ruleInstance.validate(value, ruleParams, context);
      }
    }]);

    return Validator;
  }();

  var index = {
    install: function install(Vue, options) {
      // Instantiate the validator
      var validator = new Validator(); // Apply options

      if (_typeof(options.errorMessages) === 'object') {
        validator.setErrorMessages(options.errorMessages);
      } // Set validator


      Vue.prototype.$validator = validator;
    }
  };

  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
