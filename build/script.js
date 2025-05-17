(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/tslib/tslib.es6.js
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldIn: () => __classPrivateFieldIn,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __read: () => __read,
    __rest: () => __rest,
    __spread: () => __spread,
    __spreadArray: () => __spreadArray,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values
  });
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
    return ar;
  }
  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n]) i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function(v) {
        return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  }
  function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
  }
  var extendStatics, __assign, __createBinding, __setModuleDefault;
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.js"() {
      extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      __assign = function() {
        __assign = Object.assign || function __assign2(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      };
      __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
    }
  });

  // node_modules/hey-listen/dist/index.js
  var require_dist = __commonJS({
    "node_modules/hey-listen/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.warning = function() {
      };
      exports.invariant = function() {
      };
      if (true) {
        exports.warning = function(check, message) {
          if (!check && typeof console !== "undefined") {
            console.warn(message);
          }
        };
        exports.invariant = function(check, message) {
          if (!check) {
            throw new Error(message);
          }
        };
      }
    }
  });

  // node_modules/style-value-types/dist/valueTypes.cjs.js
  var require_valueTypes_cjs = __commonJS({
    "node_modules/style-value-types/dist/valueTypes.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var clamp = (min, max) => (v) => Math.max(Math.min(v, max), min);
      var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
      var floatRegex = /(-)?([\d]*\.?[\d])+/g;
      var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
      var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function isString(v) {
        return typeof v === "string";
      }
      var number = {
        test: (v) => typeof v === "number",
        parse: parseFloat,
        transform: (v) => v
      };
      var alpha = Object.assign(Object.assign({}, number), { transform: clamp(0, 1) });
      var scale = Object.assign(Object.assign({}, number), { default: 1 });
      var createUnitType = (unit) => ({
        test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
        parse: parseFloat,
        transform: (v) => `${v}${unit}`
      });
      var degrees = createUnitType("deg");
      var percent = createUnitType("%");
      var px = createUnitType("px");
      var vh = createUnitType("vh");
      var vw = createUnitType("vw");
      var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });
      var isColorString = (type, testProp) => (v) => {
        return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
      };
      var splitColor = (aName, bName, cName) => (v) => {
        if (!isString(v))
          return v;
        const [a, b, c, alpha2] = v.match(floatRegex);
        return {
          [aName]: parseFloat(a),
          [bName]: parseFloat(b),
          [cName]: parseFloat(c),
          alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
        };
      };
      var hsla = {
        test: isColorString("hsl", "hue"),
        parse: splitColor("hue", "saturation", "lightness"),
        transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
          return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
        }
      };
      var clampRgbUnit = clamp(0, 255);
      var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
      var rgba = {
        test: isColorString("rgb", "red"),
        parse: splitColor("red", "green", "blue"),
        transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
      };
      function parseHex(v) {
        let r = "";
        let g = "";
        let b = "";
        let a = "";
        if (v.length > 5) {
          r = v.substr(1, 2);
          g = v.substr(3, 2);
          b = v.substr(5, 2);
          a = v.substr(7, 2);
        } else {
          r = v.substr(1, 1);
          g = v.substr(2, 1);
          b = v.substr(3, 1);
          a = v.substr(4, 1);
          r += r;
          g += g;
          b += b;
          a += a;
        }
        return {
          red: parseInt(r, 16),
          green: parseInt(g, 16),
          blue: parseInt(b, 16),
          alpha: a ? parseInt(a, 16) / 255 : 1
        };
      }
      var hex = {
        test: isColorString("#"),
        parse: parseHex,
        transform: rgba.transform
      };
      var color = {
        test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
        parse: (v) => {
          if (rgba.test(v)) {
            return rgba.parse(v);
          } else if (hsla.test(v)) {
            return hsla.parse(v);
          } else {
            return hex.parse(v);
          }
        },
        transform: (v) => {
          return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
        }
      };
      var colorToken = "${c}";
      var numberToken = "${n}";
      function test(v) {
        var _a, _b, _c, _d;
        return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
      }
      function analyse(v) {
        if (typeof v === "number")
          v = `${v}`;
        const values = [];
        let numColors = 0;
        const colors = v.match(colorRegex);
        if (colors) {
          numColors = colors.length;
          v = v.replace(colorRegex, colorToken);
          values.push(...colors.map(color.parse));
        }
        const numbers = v.match(floatRegex);
        if (numbers) {
          v = v.replace(floatRegex, numberToken);
          values.push(...numbers.map(number.parse));
        }
        return { values, numColors, tokenised: v };
      }
      function parse(v) {
        return analyse(v).values;
      }
      function createTransformer(v) {
        const { values, numColors, tokenised } = analyse(v);
        const numValues = values.length;
        return (v2) => {
          let output = tokenised;
          for (let i = 0; i < numValues; i++) {
            output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
          }
          return output;
        };
      }
      var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
      function getAnimatableNone(v) {
        const parsed = parse(v);
        const transformer = createTransformer(v);
        return transformer(parsed.map(convertNumbersToZero));
      }
      var complex = { test, parse, createTransformer, getAnimatableNone };
      var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
      function applyDefaultFilter(v) {
        let [name, value] = v.slice(0, -1).split("(");
        if (name === "drop-shadow")
          return v;
        const [number2] = value.match(floatRegex) || [];
        if (!number2)
          return v;
        const unit = value.replace(number2, "");
        let defaultValue = maxDefaults.has(name) ? 1 : 0;
        if (number2 !== value)
          defaultValue *= 100;
        return name + "(" + defaultValue + unit + ")";
      }
      var functionRegex = /([a-z-]*)\(.*?\)/g;
      var filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
      } });
      exports.alpha = alpha;
      exports.color = color;
      exports.complex = complex;
      exports.degrees = degrees;
      exports.filter = filter;
      exports.hex = hex;
      exports.hsla = hsla;
      exports.number = number;
      exports.percent = percent;
      exports.progressPercentage = progressPercentage;
      exports.px = px;
      exports.rgbUnit = rgbUnit;
      exports.rgba = rgba;
      exports.scale = scale;
      exports.vh = vh;
      exports.vw = vw;
    }
  });

  // node_modules/framesync/dist/framesync.cjs.js
  var require_framesync_cjs = __commonJS({
    "node_modules/framesync/dist/framesync.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var defaultTimestep = 1 / 60 * 1e3;
      var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
      var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);
      function createRenderStep(runNextFrame2) {
        let toRun = [];
        let toRunNextFrame = [];
        let numToRun = 0;
        let isProcessing2 = false;
        let flushNextFrame = false;
        const toKeepAlive = /* @__PURE__ */ new WeakSet();
        const step = {
          schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing2;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
              toKeepAlive.add(callback);
            if (buffer.indexOf(callback) === -1) {
              buffer.push(callback);
              if (addToCurrentFrame && isProcessing2)
                numToRun = toRun.length;
            }
            return callback;
          },
          cancel: (callback) => {
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
              toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
          },
          process: (frameData) => {
            if (isProcessing2) {
              flushNextFrame = true;
              return;
            }
            isProcessing2 = true;
            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
            toRunNextFrame.length = 0;
            numToRun = toRun.length;
            if (numToRun) {
              for (let i = 0; i < numToRun; i++) {
                const callback = toRun[i];
                callback(frameData);
                if (toKeepAlive.has(callback)) {
                  step.schedule(callback);
                  runNextFrame2();
                }
              }
            }
            isProcessing2 = false;
            if (flushNextFrame) {
              flushNextFrame = false;
              step.process(frameData);
            }
          }
        };
        return step;
      }
      var maxElapsed = 40;
      var useDefaultElapsed = true;
      var runNextFrame = false;
      var isProcessing = false;
      var frame = {
        delta: 0,
        timestamp: 0
      };
      var stepsOrder = [
        "read",
        "update",
        "preRender",
        "render",
        "postRender"
      ];
      var steps = stepsOrder.reduce((acc, key) => {
        acc[key] = createRenderStep(() => runNextFrame = true);
        return acc;
      }, {});
      var sync = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process2, keepAlive = false, immediate = false) => {
          if (!runNextFrame)
            startLoop();
          return step.schedule(process2, keepAlive, immediate);
        };
        return acc;
      }, {});
      var cancelSync = stepsOrder.reduce((acc, key) => {
        acc[key] = steps[key].cancel;
        return acc;
      }, {});
      var flushSync = stepsOrder.reduce((acc, key) => {
        acc[key] = () => steps[key].process(frame);
        return acc;
      }, {});
      var processStep = (stepId) => steps[stepId].process(frame);
      var processFrame = (timestamp) => {
        runNextFrame = false;
        frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
        frame.timestamp = timestamp;
        isProcessing = true;
        stepsOrder.forEach(processStep);
        isProcessing = false;
        if (runNextFrame) {
          useDefaultElapsed = false;
          onNextFrame(processFrame);
        }
      };
      var startLoop = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!isProcessing)
          onNextFrame(processFrame);
      };
      var getFrameData = () => frame;
      exports.cancelSync = cancelSync;
      exports.default = sync;
      exports.flushSync = flushSync;
      exports.getFrameData = getFrameData;
    }
  });

  // node_modules/popmotion/dist/popmotion.cjs.js
  var require_popmotion_cjs = __commonJS({
    "node_modules/popmotion/dist/popmotion.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      var heyListen = require_dist();
      var styleValueTypes = require_valueTypes_cjs();
      var sync = require_framesync_cjs();
      function _interopDefaultLegacy(e) {
        return e && typeof e === "object" && "default" in e ? e : { "default": e };
      }
      var sync__default = /* @__PURE__ */ _interopDefaultLegacy(sync);
      var clamp = (min, max, v) => Math.min(Math.max(v, min), max);
      var safeMin = 1e-3;
      var minDuration = 0.01;
      var maxDuration = 10;
      var minDamping = 0.05;
      var maxDamping = 1;
      function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
        let envelope;
        let derivative;
        heyListen.warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
        let dampingRatio = 1 - bounce;
        dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
        duration = clamp(minDuration, maxDuration, duration / 1e3);
        if (dampingRatio < 1) {
          envelope = (undampedFreq2) => {
            const exponentialDecay = undampedFreq2 * dampingRatio;
            const delta = exponentialDecay * duration;
            const a2 = exponentialDecay - velocity;
            const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
            const c2 = Math.exp(-delta);
            return safeMin - a2 / b2 * c2;
          };
          derivative = (undampedFreq2) => {
            const exponentialDecay = undampedFreq2 * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
            const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
          };
        } else {
          envelope = (undampedFreq2) => {
            const a2 = Math.exp(-undampedFreq2 * duration);
            const b2 = (undampedFreq2 - velocity) * duration + 1;
            return -safeMin + a2 * b2;
          };
          derivative = (undampedFreq2) => {
            const a2 = Math.exp(-undampedFreq2 * duration);
            const b2 = (velocity - undampedFreq2) * (duration * duration);
            return a2 * b2;
          };
        }
        const initialGuess = 5 / duration;
        const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
        duration = duration * 1e3;
        if (isNaN(undampedFreq)) {
          return {
            stiffness: 100,
            damping: 10,
            duration
          };
        } else {
          const stiffness = Math.pow(undampedFreq, 2) * mass;
          return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration
          };
        }
      }
      var rootIterations = 12;
      function approximateRoot(envelope, derivative, initialGuess) {
        let result = initialGuess;
        for (let i = 1; i < rootIterations; i++) {
          result = result - envelope(result) / derivative(result);
        }
        return result;
      }
      function calcAngularFreq(undampedFreq, dampingRatio) {
        return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
      }
      var durationKeys = ["duration", "bounce"];
      var physicsKeys = ["stiffness", "damping", "mass"];
      function isSpringType(options, keys) {
        return keys.some((key) => options[key] !== void 0);
      }
      function getSpringOptions(options) {
        let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
        if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
          const derived = findSpring(options);
          springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
          springOptions.isResolvedFromDuration = true;
        }
        return springOptions;
      }
      function spring(_a) {
        var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = tslib.__rest(_a, ["from", "to", "restSpeed", "restDelta"]);
        const state = { done: false, value: from };
        let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
        let resolveSpring = zero;
        let resolveVelocity = zero;
        function createSpring() {
          const initialVelocity = velocity ? -(velocity / 1e3) : 0;
          const initialDelta = to - from;
          const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
          const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
          if (restDelta === void 0) {
            restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
          }
          if (dampingRatio < 1) {
            const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
            resolveSpring = (t) => {
              const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
              return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
            };
            resolveVelocity = (t) => {
              const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
              return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
            };
          } else if (dampingRatio === 1) {
            resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
          } else {
            const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = (t) => {
              const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
              const freqForT = Math.min(dampedAngularFreq * t, 300);
              return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
            };
          }
        }
        createSpring();
        return {
          next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
              const currentVelocity = resolveVelocity(t) * 1e3;
              const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
              const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
              state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else {
              state.done = t >= duration;
            }
            state.value = state.done ? to : current;
            return state;
          },
          flipTarget: () => {
            velocity = -velocity;
            [from, to] = [to, from];
            createSpring();
          }
        };
      }
      spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
      var zero = (_t) => 0;
      var progress = (from, to, value) => {
        const toFromDifference = to - from;
        return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
      };
      var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;
      function hueToRgb(p, q, t) {
        if (t < 0)
          t += 1;
        if (t > 1)
          t -= 1;
        if (t < 1 / 6)
          return p + (q - p) * 6 * t;
        if (t < 1 / 2)
          return q;
        if (t < 2 / 3)
          return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }
      function hslaToRgba({ hue, saturation, lightness, alpha }) {
        hue /= 360;
        saturation /= 100;
        lightness /= 100;
        let red = 0;
        let green = 0;
        let blue = 0;
        if (!saturation) {
          red = green = blue = lightness;
        } else {
          const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
          const p = 2 * lightness - q;
          red = hueToRgb(p, q, hue + 1 / 3);
          green = hueToRgb(p, q, hue);
          blue = hueToRgb(p, q, hue - 1 / 3);
        }
        return {
          red: Math.round(red * 255),
          green: Math.round(green * 255),
          blue: Math.round(blue * 255),
          alpha
        };
      }
      var mixLinearColor = (from, to, v) => {
        const fromExpo = from * from;
        const toExpo = to * to;
        return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
      };
      var colorTypes = [styleValueTypes.hex, styleValueTypes.rgba, styleValueTypes.hsla];
      var getColorType = (v) => colorTypes.find((type) => type.test(v));
      var notAnimatable = (color) => `'${color}' is not an animatable color. Use the equivalent color code instead.`;
      var mixColor = (from, to) => {
        let fromColorType = getColorType(from);
        let toColorType = getColorType(to);
        heyListen.invariant(!!fromColorType, notAnimatable(from));
        heyListen.invariant(!!toColorType, notAnimatable(to));
        let fromColor = fromColorType.parse(from);
        let toColor = toColorType.parse(to);
        if (fromColorType === styleValueTypes.hsla) {
          fromColor = hslaToRgba(fromColor);
          fromColorType = styleValueTypes.rgba;
        }
        if (toColorType === styleValueTypes.hsla) {
          toColor = hslaToRgba(toColor);
          toColorType = styleValueTypes.rgba;
        }
        const blended = Object.assign({}, fromColor);
        return (v) => {
          for (const key in blended) {
            if (key !== "alpha") {
              blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
            }
          }
          blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
          return fromColorType.transform(blended);
        };
      };
      var zeroPoint = {
        x: 0,
        y: 0,
        z: 0
      };
      var isNum = (v) => typeof v === "number";
      var combineFunctions = (a2, b2) => (v) => b2(a2(v));
      var pipe = (...transformers) => transformers.reduce(combineFunctions);
      function getMixer(origin, target) {
        if (isNum(origin)) {
          return (v) => mix(origin, target, v);
        } else if (styleValueTypes.color.test(origin)) {
          return mixColor(origin, target);
        } else {
          return mixComplex(origin, target);
        }
      }
      var mixArray = (from, to) => {
        const output = [...from];
        const numValues = output.length;
        const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
        return (v) => {
          for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
          }
          return output;
        };
      };
      var mixObject = (origin, target) => {
        const output = Object.assign(Object.assign({}, origin), target);
        const blendValue = {};
        for (const key in output) {
          if (origin[key] !== void 0 && target[key] !== void 0) {
            blendValue[key] = getMixer(origin[key], target[key]);
          }
        }
        return (v) => {
          for (const key in blendValue) {
            output[key] = blendValue[key](v);
          }
          return output;
        };
      };
      function analyse(value) {
        const parsed = styleValueTypes.complex.parse(value);
        const numValues = parsed.length;
        let numNumbers = 0;
        let numRGB = 0;
        let numHSL = 0;
        for (let i = 0; i < numValues; i++) {
          if (numNumbers || typeof parsed[i] === "number") {
            numNumbers++;
          } else {
            if (parsed[i].hue !== void 0) {
              numHSL++;
            } else {
              numRGB++;
            }
          }
        }
        return { parsed, numNumbers, numRGB, numHSL };
      }
      var mixComplex = (origin, target) => {
        const template = styleValueTypes.complex.createTransformer(target);
        const originStats = analyse(origin);
        const targetStats = analyse(target);
        const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
        if (canInterpolate) {
          return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
        } else {
          heyListen.warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
          return (p) => `${p > 0 ? target : origin}`;
        }
      };
      var mixNumber = (from, to) => (p) => mix(from, to, p);
      function detectMixerFactory(v) {
        if (typeof v === "number") {
          return mixNumber;
        } else if (typeof v === "string") {
          if (styleValueTypes.color.test(v)) {
            return mixColor;
          } else {
            return mixComplex;
          }
        } else if (Array.isArray(v)) {
          return mixArray;
        } else if (typeof v === "object") {
          return mixObject;
        }
      }
      function createMixers(output, ease, customMixer) {
        const mixers = [];
        const mixerFactory = customMixer || detectMixerFactory(output[0]);
        const numMixers = output.length - 1;
        for (let i = 0; i < numMixers; i++) {
          let mixer = mixerFactory(output[i], output[i + 1]);
          if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
          }
          mixers.push(mixer);
        }
        return mixers;
      }
      function fastInterpolate([from, to], [mixer]) {
        return (v) => mixer(progress(from, to, v));
      }
      function slowInterpolate(input, mixers) {
        const inputLength = input.length;
        const lastInputIndex = inputLength - 1;
        return (v) => {
          let mixerIndex = 0;
          let foundMixerIndex = false;
          if (v <= input[0]) {
            foundMixerIndex = true;
          } else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
          }
          if (!foundMixerIndex) {
            let i = 1;
            for (; i < inputLength; i++) {
              if (input[i] > v || i === lastInputIndex) {
                break;
              }
            }
            mixerIndex = i - 1;
          }
          const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
          return mixers[mixerIndex](progressInRange);
        };
      }
      function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
        const inputLength = input.length;
        heyListen.invariant(inputLength === output.length, "Both input and output ranges must be the same length");
        heyListen.invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
        if (input[0] > input[inputLength - 1]) {
          input = [].concat(input);
          output = [].concat(output);
          input.reverse();
          output.reverse();
        }
        const mixers = createMixers(output, ease, mixer);
        const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
        return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
      }
      var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
      var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
      var createExpoIn = (power) => (p) => Math.pow(p, power);
      var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
      var createAnticipate = (power) => {
        const backEasing = createBackIn(power);
        return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
      };
      var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
      var BOUNCE_FIRST_THRESHOLD = 4 / 11;
      var BOUNCE_SECOND_THRESHOLD = 8 / 11;
      var BOUNCE_THIRD_THRESHOLD = 9 / 10;
      var linear = (p) => p;
      var easeIn = createExpoIn(2);
      var easeOut = reverseEasing(easeIn);
      var easeInOut = mirrorEasing(easeIn);
      var circIn = (p) => 1 - Math.sin(Math.acos(p));
      var circOut = reverseEasing(circIn);
      var circInOut = mirrorEasing(circOut);
      var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
      var backOut = reverseEasing(backIn);
      var backInOut = mirrorEasing(backIn);
      var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
      var ca = 4356 / 361;
      var cb = 35442 / 1805;
      var cc = 16061 / 1805;
      var bounceOut = (p) => {
        if (p === 1 || p === 0)
          return p;
        const p2 = p * p;
        return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
      };
      var bounceIn = reverseEasing(bounceOut);
      var bounceInOut = (p) => p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;
      function defaultEasing(values, easing) {
        return values.map(() => easing || easeInOut).splice(0, values.length - 1);
      }
      function defaultOffset(values) {
        const numValues = values.length;
        return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
      }
      function convertOffsetToTimes(offset, duration) {
        return offset.map((o) => o * duration);
      }
      function keyframes({ from = 0, to = 1, ease, offset, duration = 300 }) {
        const state = { done: false, value: from };
        const values = Array.isArray(to) ? to : [from, to];
        const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
        function createInterpolator() {
          return interpolate(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
          });
        }
        let interpolator = createInterpolator();
        return {
          next: (t) => {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
          },
          flipTarget: () => {
            values.reverse();
            interpolator = createInterpolator();
          }
        };
      }
      function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
        const state = { done: false, value: from };
        let amplitude = power * velocity;
        const ideal = from + amplitude;
        const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
        if (target !== ideal)
          amplitude = target - from;
        return {
          next: (t) => {
            const delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
          },
          flipTarget: () => {
          }
        };
      }
      var types = { keyframes, spring, decay };
      function detectAnimationFromOptions(config) {
        if (Array.isArray(config.to)) {
          return keyframes;
        } else if (types[config.type]) {
          return types[config.type];
        }
        const keys = new Set(Object.keys(config));
        if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
          return keyframes;
        } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
          return spring;
        }
        return keyframes;
      }
      function loopElapsed(elapsed, duration, delay = 0) {
        return elapsed - duration - delay;
      }
      function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
        return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
      }
      function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
        return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
      }
      var framesync = (update) => {
        const passTimestamp = ({ delta }) => update(delta);
        return {
          start: () => sync__default["default"].update(passTimestamp, true),
          stop: () => sync.cancelSync.update(passTimestamp)
        };
      };
      function animate(_a) {
        var _b, _c;
        var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = tslib.__rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
        let { to } = options;
        let driverControls;
        let repeatCount = 0;
        let computedDuration = options.duration;
        let latest;
        let isComplete = false;
        let isForwardPlayback = true;
        let interpolateFromNumber;
        const animator = detectAnimationFromOptions(options);
        if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
          interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false
          });
          from = 0;
          to = 100;
        }
        const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
        function repeat() {
          repeatCount++;
          if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
          } else {
            elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror")
              animation.flipTarget();
          }
          isComplete = false;
          onRepeat && onRepeat();
        }
        function complete() {
          driverControls.stop();
          onComplete && onComplete();
        }
        function update(delta) {
          if (!isForwardPlayback)
            delta = -delta;
          elapsed += delta;
          if (!isComplete) {
            const state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber)
              latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
          }
          onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
          if (isComplete) {
            if (repeatCount === 0)
              computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
            if (repeatCount < repeatMax) {
              hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            } else {
              complete();
            }
          }
        }
        function play() {
          onPlay === null || onPlay === void 0 ? void 0 : onPlay();
          driverControls = driver(update);
          driverControls.start();
        }
        autoplay && play();
        return {
          stop: () => {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
          }
        };
      }
      function velocityPerSecond(velocity, frameDuration) {
        return frameDuration ? velocity * (1e3 / frameDuration) : 0;
      }
      function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
        let currentAnimation;
        function isOutOfBounds(v) {
          return min !== void 0 && v < min || max !== void 0 && v > max;
        }
        function boundaryNearest(v) {
          if (min === void 0)
            return max;
          if (max === void 0)
            return min;
          return Math.abs(min - v) < Math.abs(max - v) ? min : max;
        }
        function startAnimation(options) {
          currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
          currentAnimation = animate(Object.assign(Object.assign({}, options), {
            driver,
            onUpdate: (v) => {
              var _a;
              onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
              (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            },
            onComplete,
            onStop
          }));
        }
        function startSpring(options) {
          startAnimation(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
        }
        if (isOutOfBounds(from)) {
          startSpring({ from, velocity, to: boundaryNearest(from) });
        } else {
          let target = power * velocity + from;
          if (typeof modifyTarget !== "undefined")
            target = modifyTarget(target);
          const boundary = boundaryNearest(target);
          const heading = boundary === min ? -1 : 1;
          let prev;
          let current;
          const checkBoundary = (v) => {
            prev = current;
            current = v;
            velocity = velocityPerSecond(v - prev, sync.getFrameData().delta);
            if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
              startSpring({ from: v, to: boundary, velocity });
            }
          };
          startAnimation({
            type: "decay",
            from,
            velocity,
            timeConstant,
            power,
            restDelta,
            modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
          });
        }
        return {
          stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
        };
      }
      var radiansToDegrees = (radians) => radians * 180 / Math.PI;
      var angle = (a2, b2 = zeroPoint) => radiansToDegrees(Math.atan2(b2.y - a2.y, b2.x - a2.x));
      var applyOffset = (from, to) => {
        let hasReceivedFrom = true;
        if (to === void 0) {
          to = from;
          hasReceivedFrom = false;
        }
        return (v) => {
          if (hasReceivedFrom) {
            return v - from + to;
          } else {
            from = v;
            hasReceivedFrom = true;
            return to;
          }
        };
      };
      var identity = (v) => v;
      var createAttractor = (alterDisplacement = identity) => (constant, origin, v) => {
        const displacement = origin - v;
        const springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
      };
      var attract = createAttractor();
      var attractExpo = createAttractor(Math.sqrt);
      var degreesToRadians = (degrees) => degrees * Math.PI / 180;
      var isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");
      var isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");
      var distance1D = (a2, b2) => Math.abs(a2 - b2);
      function distance(a2, b2) {
        if (isNum(a2) && isNum(b2)) {
          return distance1D(a2, b2);
        } else if (isPoint(a2) && isPoint(b2)) {
          const xDelta = distance1D(a2.x, b2.x);
          const yDelta = distance1D(a2.y, b2.y);
          const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
          return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
        }
      }
      var pointFromVector = (origin, angle2, distance2) => {
        angle2 = degreesToRadians(angle2);
        return {
          x: distance2 * Math.cos(angle2) + origin.x,
          y: distance2 * Math.sin(angle2) + origin.y
        };
      };
      var toDecimal = (num, precision = 2) => {
        precision = Math.pow(10, precision);
        return Math.round(num * precision) / precision;
      };
      var smoothFrame = (prevValue, nextValue, duration, smoothing = 0) => toDecimal(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
      var smooth = (strength = 50) => {
        let previousValue = 0;
        let lastUpdated = 0;
        return (v) => {
          const currentFramestamp = sync.getFrameData().timestamp;
          const timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
          const newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
          lastUpdated = currentFramestamp;
          previousValue = newValue;
          return newValue;
        };
      };
      var snap = (points) => {
        if (typeof points === "number") {
          return (v) => Math.round(v / points) * points;
        } else {
          let i = 0;
          const numPoints = points.length;
          return (v) => {
            let lastDistance = Math.abs(points[0] - v);
            for (i = 1; i < numPoints; i++) {
              const point = points[i];
              const distance2 = Math.abs(point - v);
              if (distance2 === 0)
                return point;
              if (distance2 > lastDistance)
                return points[i - 1];
              if (i === numPoints - 1)
                return point;
              lastDistance = distance2;
            }
          };
        }
      };
      function velocityPerFrame(xps, frameDuration) {
        return xps / (1e3 / frameDuration);
      }
      var wrap = (min, max, v) => {
        const rangeSize = max - min;
        return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
      };
      var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
      var b = (a1, a2) => 3 * a2 - 6 * a1;
      var c = (a1) => 3 * a1;
      var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
      var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
      var subdivisionPrecision = 1e-7;
      var subdivisionMaxIterations = 10;
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        let currentX;
        let currentT;
        let i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
        return currentT;
      }
      var newtonIterations = 8;
      var newtonMinSlope = 1e-3;
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (let i = 0; i < newtonIterations; ++i) {
          const currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      function cubicBezier(mX1, mY1, mX2, mY2) {
        if (mX1 === mY1 && mX2 === mY2)
          return linear;
        const sampleValues = new Float32Array(kSplineTableSize);
        for (let i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
        function getTForX(aX) {
          let intervalStart = 0;
          let currentSample = 1;
          const lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          const guessForT = intervalStart + dist * kSampleStepSize;
          const initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
      }
      var steps = (steps2, direction = "end") => (progress2) => {
        progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
        const expanded = progress2 * steps2;
        const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return clamp(0, 1, rounded / steps2);
      };
      exports.angle = angle;
      exports.animate = animate;
      exports.anticipate = anticipate;
      exports.applyOffset = applyOffset;
      exports.attract = attract;
      exports.attractExpo = attractExpo;
      exports.backIn = backIn;
      exports.backInOut = backInOut;
      exports.backOut = backOut;
      exports.bounceIn = bounceIn;
      exports.bounceInOut = bounceInOut;
      exports.bounceOut = bounceOut;
      exports.circIn = circIn;
      exports.circInOut = circInOut;
      exports.circOut = circOut;
      exports.clamp = clamp;
      exports.createAnticipate = createAnticipate;
      exports.createAttractor = createAttractor;
      exports.createBackIn = createBackIn;
      exports.createExpoIn = createExpoIn;
      exports.cubicBezier = cubicBezier;
      exports.decay = decay;
      exports.degreesToRadians = degreesToRadians;
      exports.distance = distance;
      exports.easeIn = easeIn;
      exports.easeInOut = easeInOut;
      exports.easeOut = easeOut;
      exports.inertia = inertia;
      exports.interpolate = interpolate;
      exports.isPoint = isPoint;
      exports.isPoint3D = isPoint3D;
      exports.keyframes = keyframes;
      exports.linear = linear;
      exports.mirrorEasing = mirrorEasing;
      exports.mix = mix;
      exports.mixColor = mixColor;
      exports.mixComplex = mixComplex;
      exports.pipe = pipe;
      exports.pointFromVector = pointFromVector;
      exports.progress = progress;
      exports.radiansToDegrees = radiansToDegrees;
      exports.reverseEasing = reverseEasing;
      exports.smooth = smooth;
      exports.smoothFrame = smoothFrame;
      exports.snap = snap;
      exports.spring = spring;
      exports.steps = steps;
      exports.toDecimal = toDecimal;
      exports.velocityPerFrame = velocityPerFrame;
      exports.velocityPerSecond = velocityPerSecond;
      exports.wrap = wrap;
    }
  });

  // public/script.js
  var popmotion = require_popmotion_cjs();
  var ball = document.querySelector(".ball");
  popmotion.animate({
    from: "0px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate(update) {
      console.log(update);
      ball.style.left = update;
    }
  });
})();
