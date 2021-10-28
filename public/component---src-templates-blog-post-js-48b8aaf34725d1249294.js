webpackJsonp([107818501498521],{

/***/ 71:
/***/ (function(module, exports) {

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return self;
	}
	
	module.exports = _assertThisInitialized;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
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
	
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _extends.apply(this, arguments);
	}
	
	module.exports = _extends;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	var setPrototypeOf = __webpack_require__(72);
	
	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  setPrototypeOf(subClass, superClass);
	}
	
	module.exports = _inheritsLoose;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}
	
	module.exports = _interopRequireDefault;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

	var _typeof = __webpack_require__(73)["default"];
	
	function _getRequireWildcardCache(nodeInterop) {
	  if (typeof WeakMap !== "function") return null;
	  var cacheBabelInterop = new WeakMap();
	  var cacheNodeInterop = new WeakMap();
	  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
	    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
	  })(nodeInterop);
	}
	
	function _interopRequireWildcard(obj, nodeInterop) {
	  if (!nodeInterop && obj && obj.__esModule) {
	    return obj;
	  }
	
	  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
	    return {
	      "default": obj
	    };
	  }
	
	  var cache = _getRequireWildcardCache(nodeInterop);
	
	  if (cache && cache.has(obj)) {
	    return cache.get(obj);
	  }
	
	  var newObj = {};
	  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
	
	  for (var key in obj) {
	    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
	      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
	
	      if (desc && (desc.get || desc.set)) {
	        Object.defineProperty(newObj, key, desc);
	      } else {
	        newObj[key] = obj[key];
	      }
	    }
	  }
	
	  newObj["default"] = obj;
	
	  if (cache) {
	    cache.set(obj, newObj);
	  }
	
	  return newObj;
	}
	
	module.exports = _interopRequireWildcard;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	
	  return target;
	}
	
	module.exports = _objectWithoutPropertiesLoose;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };
	
	  module.exports["default"] = module.exports, module.exports.__esModule = true;
	  return _setPrototypeOf(o, p);
	}
	
	module.exports = _setPrototypeOf;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

	function _typeof(obj) {
	  "@babel/helpers - typeof";
	
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	
	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    module.exports["default"] = module.exports, module.exports.__esModule = true;
	  }
	
	  return _typeof(obj);
	}
	
	module.exports = _typeof;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function getLens (b64) {
	  var len = b64.length
	
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=')
	  if (validLen === -1) validLen = len
	
	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4)
	
	  return [validLen, placeHoldersLen]
	}
	
	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function toByteArray (b64) {
	  var tmp
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	
	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
	
	  var curByte = 0
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen
	
	  var i
	  for (i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)]
	    arr[curByte++] = (tmp >> 16) & 0xFF
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF)
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    )
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    )
	  }
	
	  return parts.join('')
	}


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(80)
	var ieee754 = __webpack_require__(88)
	var customInspectSymbol =
	  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
	    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
	    : null
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	var K_MAX_LENGTH = 0x7fffffff
	exports.kMaxLength = K_MAX_LENGTH
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
	 *               implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * We report that the browser does not support typed arrays if the are not subclassable
	 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
	 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
	 * for __proto__ and has a buggy typed array implementation.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
	
	if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
	    typeof console.error === 'function') {
	  console.error(
	    'This browser lacks typed array (Uint8Array) support which is required by ' +
	    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
	  )
	}
	
	function typedArraySupport () {
	  // Can typed array instances can be augmented?
	  try {
	    var arr = new Uint8Array(1)
	    var proto = { foo: function () { return 42 } }
	    Object.setPrototypeOf(proto, Uint8Array.prototype)
	    Object.setPrototypeOf(arr, proto)
	    return arr.foo() === 42
	  } catch (e) {
	    return false
	  }
	}
	
	Object.defineProperty(Buffer.prototype, 'parent', {
	  enumerable: true,
	  get: function () {
	    if (!Buffer.isBuffer(this)) return undefined
	    return this.buffer
	  }
	})
	
	Object.defineProperty(Buffer.prototype, 'offset', {
	  enumerable: true,
	  get: function () {
	    if (!Buffer.isBuffer(this)) return undefined
	    return this.byteOffset
	  }
	})
	
	function createBuffer (length) {
	  if (length > K_MAX_LENGTH) {
	    throw new RangeError('The value "' + length + '" is invalid for option "size"')
	  }
	  // Return an augmented `Uint8Array` instance
	  var buf = new Uint8Array(length)
	  Object.setPrototypeOf(buf, Buffer.prototype)
	  return buf
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new TypeError(
	        'The "string" argument must be of type string. Received type number'
	      )
	    }
	    return allocUnsafe(arg)
	  }
	  return from(arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	function from (value, encodingOrOffset, length) {
	  if (typeof value === 'string') {
	    return fromString(value, encodingOrOffset)
	  }
	
	  if (ArrayBuffer.isView(value)) {
	    return fromArrayView(value)
	  }
	
	  if (value == null) {
	    throw new TypeError(
	      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
	      'or Array-like Object. Received type ' + (typeof value)
	    )
	  }
	
	  if (isInstance(value, ArrayBuffer) ||
	      (value && isInstance(value.buffer, ArrayBuffer))) {
	    return fromArrayBuffer(value, encodingOrOffset, length)
	  }
	
	  if (typeof SharedArrayBuffer !== 'undefined' &&
	      (isInstance(value, SharedArrayBuffer) ||
	      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
	    return fromArrayBuffer(value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'number') {
	    throw new TypeError(
	      'The "value" argument must not be of type number. Received type number'
	    )
	  }
	
	  var valueOf = value.valueOf && value.valueOf()
	  if (valueOf != null && valueOf !== value) {
	    return Buffer.from(valueOf, encodingOrOffset, length)
	  }
	
	  var b = fromObject(value)
	  if (b) return b
	
	  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
	      typeof value[Symbol.toPrimitive] === 'function') {
	    return Buffer.from(
	      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
	    )
	  }
	
	  throw new TypeError(
	    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
	    'or Array-like Object. Received type ' + (typeof value)
	  )
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(value, encodingOrOffset, length)
	}
	
	// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
	// https://github.com/feross/buffer/pull/148
	Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
	Object.setPrototypeOf(Buffer, Uint8Array)
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be of type number')
	  } else if (size < 0) {
	    throw new RangeError('The value "' + size + '" is invalid for option "size"')
	  }
	}
	
	function alloc (size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpreted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(size).fill(fill, encoding)
	      : createBuffer(size).fill(fill)
	  }
	  return createBuffer(size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(size, fill, encoding)
	}
	
	function allocUnsafe (size) {
	  assertSize(size)
	  return createBuffer(size < 0 ? 0 : checked(size) | 0)
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(size)
	}
	
	function fromString (string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('Unknown encoding: ' + encoding)
	  }
	
	  var length = byteLength(string, encoding) | 0
	  var buf = createBuffer(length)
	
	  var actual = buf.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    buf = buf.slice(0, actual)
	  }
	
	  return buf
	}
	
	function fromArrayLike (array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  var buf = createBuffer(length)
	  for (var i = 0; i < length; i += 1) {
	    buf[i] = array[i] & 255
	  }
	  return buf
	}
	
	function fromArrayView (arrayView) {
	  if (isInstance(arrayView, Uint8Array)) {
	    var copy = new Uint8Array(arrayView)
	    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
	  }
	  return fromArrayLike(arrayView)
	}
	
	function fromArrayBuffer (array, byteOffset, length) {
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('"offset" is outside of buffer bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('"length" is outside of buffer bounds')
	  }
	
	  var buf
	  if (byteOffset === undefined && length === undefined) {
	    buf = new Uint8Array(array)
	  } else if (length === undefined) {
	    buf = new Uint8Array(array, byteOffset)
	  } else {
	    buf = new Uint8Array(array, byteOffset, length)
	  }
	
	  // Return an augmented `Uint8Array` instance
	  Object.setPrototypeOf(buf, Buffer.prototype)
	
	  return buf
	}
	
	function fromObject (obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    var buf = createBuffer(len)
	
	    if (buf.length === 0) {
	      return buf
	    }
	
	    obj.copy(buf, 0, 0, len)
	    return buf
	  }
	
	  if (obj.length !== undefined) {
	    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
	      return createBuffer(0)
	    }
	    return fromArrayLike(obj)
	  }
	
	  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
	    return fromArrayLike(obj.data)
	  }
	}
	
	function checked (length) {
	  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= K_MAX_LENGTH) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return b != null && b._isBuffer === true &&
	    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
	}
	
	Buffer.compare = function compare (a, b) {
	  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
	  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError(
	      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
	    )
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!Array.isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (isInstance(buf, Uint8Array)) {
	      if (pos + buf.length > buffer.length) {
	        Buffer.from(buf).copy(buffer, pos)
	      } else {
	        Uint8Array.prototype.set.call(
	          buffer,
	          buf,
	          pos
	        )
	      }
	    } else if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    } else {
	      buf.copy(buffer, pos)
	    }
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    throw new TypeError(
	      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
	      'Received type ' + typeof string
	    )
	  }
	
	  var len = string.length
	  var mustMatch = (arguments.length > 2 && arguments[2] === true)
	  if (!mustMatch && len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) {
	          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
	        }
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
	// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
	// reliably in a browserify context because there could be multiple different
	// copies of the 'buffer' package in use. This method works even for Buffer
	// instances that were created from another copy of the `buffer` package.
	// See: https://github.com/feross/buffer/issues/154
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.toLocaleString = Buffer.prototype.toString
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
	  if (this.length > max) str += ' ... '
	  return '<Buffer ' + str + '>'
	}
	if (customInspectSymbol) {
	  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (isInstance(target, Uint8Array)) {
	    target = Buffer.from(target, target.offset, target.byteLength)
	  }
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError(
	      'The "target" argument must be one of type Buffer or Uint8Array. ' +
	      'Received type ' + (typeof target)
	    )
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset // Coerce to Number.
	  if (numberIsNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  var strLen = string.length
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (numberIsNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset >>> 0
	    if (isFinite(length)) {
	      length = length >>> 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return asciiWrite(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF)
	      ? 4
	      : (firstByte > 0xDF)
	          ? 3
	          : (firstByte > 0xBF)
	              ? 2
	              : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += hexSliceLookupTable[buf[i]]
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
	  for (var i = 0; i < bytes.length - 1; i += 2) {
	    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf = this.subarray(start, end)
	  // Return an augmented `Uint8Array` instance
	  Object.setPrototypeOf(newBuf, Buffer.prototype)
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUintLE =
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUintBE =
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUint8 =
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUint16LE =
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUint16BE =
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUint32LE =
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUint32BE =
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUintLE =
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUintBE =
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUint8 =
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeUint16LE =
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}
	
	Buffer.prototype.writeUint16BE =
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}
	
	Buffer.prototype.writeUint32LE =
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset + 3] = (value >>> 24)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 1] = (value >>> 8)
	  this[offset] = (value & 0xff)
	  return offset + 4
	}
	
	Buffer.prototype.writeUint32BE =
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    var limit = Math.pow(2, (8 * byteLength) - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    var limit = Math.pow(2, (8 * byteLength) - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 3] = (value >>> 24)
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	
	  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
	    // Use built-in when available, missing from IE11
	    this.copyWithin(targetStart, start, end)
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, end),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if ((encoding === 'utf8' && code < 128) ||
	          encoding === 'latin1') {
	        // Fast path: If `val` fits into a single byte, use that numeric value.
	        val = code
	      }
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  } else if (typeof val === 'boolean') {
	    val = Number(val)
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : Buffer.from(val, encoding)
	    var len = bytes.length
	    if (len === 0) {
	      throw new TypeError('The value "' + val +
	        '" is invalid for argument "value"')
	    }
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node takes equal signs as end of the Base64 encoding
	  str = str.split('=')[0]
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = str.trim().replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
	// the `instanceof` check but they should be treated as of that type.
	// See: https://github.com/feross/buffer/issues/166
	function isInstance (obj, type) {
	  return obj instanceof type ||
	    (obj != null && obj.constructor != null && obj.constructor.name != null &&
	      obj.constructor.name === type.name)
	}
	function numberIsNaN (obj) {
	  // For IE11 support
	  return obj !== obj // eslint-disable-line no-self-compare
	}
	
	// Create lookup table for `toString('hex')`
	// See: https://github.com/feross/buffer/issues/219
	var hexSliceLookupTable = (function () {
	  var alphabet = '0123456789abcdef'
	  var table = new Array(256)
	  for (var i = 0; i < 16; ++i) {
	    var i16 = i * 16
	    for (var j = 0; j < 16; ++j) {
	      table[i16 + j] = alphabet[i] + alphabet[j]
	    }
	  }
	  return table
	})()
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(275).Buffer))

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  function listen(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function () {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  function emit() {
	    currentListeners = nextListeners;
	    var listeners = currentListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i].apply(listeners, arguments);
	    }
	  }
	
	  return {
	    listen: listen,
	    emit: emit
	  };
	};

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(3));
	
	// istanbul ignore next
	var statusDiv = typeof document === 'undefined' ? null : document.getElementById('a11y-status-message');
	
	var statuses = [];
	
	function setStatus(status) {
	  var isSameAsLast = statuses[statuses.length - 1] === status;
	  if (isSameAsLast) {
	    statuses = [].concat(statuses, [status]);
	  } else {
	    statuses = [status];
	  }
	  var div = getStatusDiv();
	
	  // Remove previous children
	  while (div.lastChild) {
	    div.removeChild(div.firstChild);
	  }
	
	  statuses.filter(Boolean).forEach(function (statusItem, index) {
	    div.appendChild(getStatusChildDiv(statusItem, index));
	  });
	}
	
	function getStatusChildDiv(status, index) {
	  var display = index === statuses.length - 1 ? 'block' : 'none';
	
	  var childDiv = document.createElement('div');
	  childDiv.style.display = display;
	  childDiv.textContent = status;
	
	  return childDiv;
	}
	
	function getStatusDiv() {
	  if (statusDiv) {
	    return statusDiv;
	  }
	  statusDiv = document.createElement('div');
	  statusDiv.setAttribute('id', 'a11y-status-message');
	  statusDiv.setAttribute('role', 'status');
	  statusDiv.setAttribute('aria-live', 'assertive');
	  statusDiv.setAttribute('aria-relevant', 'additions text');
	  Object.assign(statusDiv.style, {
	    border: '0',
	    clip: 'rect(0 0 0 0)',
	    height: '1px',
	    margin: '-1px',
	    overflow: 'hidden',
	    padding: '0',
	    position: 'absolute',
	    width: '1px'
	  });
	  document.body.appendChild(statusDiv);
	  return statusDiv;
	}
	
	var idCounter = 0;
	
	/**
	 * Accepts a parameter and returns it if it's a function
	 * or a noop function if it's not. This allows us to
	 * accept a callback, but not worry about it if it's not
	 * passed.
	 * @param {Function} cb the callback
	 * @return {Function} a function
	 */
	function cbToCb(cb) {
	  return typeof cb === 'function' ? cb : noop;
	}
	function noop() {}
	
	function findParent(finder, node, rootNode) {
	  if (node !== null && node !== rootNode.parentNode) {
	    if (finder(node)) {
	      if (node === document.body && node.scrollTop === 0) {
	        // in chrome body.scrollTop always return 0
	        return document.documentElement;
	      }
	      return node;
	    } else {
	      return findParent(finder, node.parentNode, rootNode);
	    }
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Get the closest element that scrolls
	 * @param {HTMLElement} node - the child element to start searching for scroll parent at
	 * @param {HTMLElement} rootNode - the root element of the component
	 * @return {HTMLElement} the closest parentNode that scrolls
	 */
	var getClosestScrollParent = findParent.bind(null, function (node) {
	  return node.scrollHeight > node.clientHeight;
	});
	
	/**
	 * Scroll node into view if necessary
	 * @param {HTMLElement} node - the element that should scroll into view
	 * @param {HTMLElement} rootNode - the root element of the component
	 * @param {Boolean} alignToTop - align element to the top of the visible area of the scrollable ancestor
	 */
	// eslint-disable-next-line complexity
	function scrollIntoView(node, rootNode) {
	  var scrollParent = getClosestScrollParent(node, rootNode);
	  if (scrollParent === null) {
	    return;
	  }
	  var scrollParentStyles = getComputedStyle(scrollParent);
	  var scrollParentRect = scrollParent.getBoundingClientRect();
	  var scrollParentBorderTopWidth = parseInt(scrollParentStyles.borderTopWidth, 10);
	  var scrollParentBorderBottomWidth = parseInt(scrollParentStyles.borderBottomWidth, 10);
	  var bordersWidth = scrollParentBorderTopWidth + scrollParentBorderBottomWidth;
	  var scrollParentTop = scrollParentRect.top + scrollParentBorderTopWidth;
	  var nodeRect = node.getBoundingClientRect();
	
	  if (nodeRect.top < 0 && scrollParentRect.top < 0) {
	    scrollParent.scrollTop += nodeRect.top;
	    return;
	  }
	
	  if (nodeRect.top < 0) {
	    // the item is above the viewport and the parent is not above the viewport
	    scrollParent.scrollTop += nodeRect.top - scrollParentTop;
	    return;
	  }
	
	  if (nodeRect.top > 0 && scrollParentRect.top < 0) {
	    if (scrollParentRect.bottom > 0 && nodeRect.bottom + bordersWidth > scrollParentRect.bottom) {
	      // the item is below scrollable area
	      scrollParent.scrollTop += nodeRect.bottom - scrollParentRect.bottom + bordersWidth;
	    }
	    // item and parent top are on different sides of view top border (do nothing)
	    return;
	  }
	
	  var nodeOffsetTop = nodeRect.top + scrollParent.scrollTop;
	  var nodeTop = nodeOffsetTop - scrollParentTop;
	  if (nodeTop < scrollParent.scrollTop) {
	    // the item is above the scrollable area
	    scrollParent.scrollTop = nodeTop;
	  } else if (nodeTop + nodeRect.height + bordersWidth > scrollParent.scrollTop + scrollParentRect.height) {
	    // the item is below the scrollable area
	    scrollParent.scrollTop = nodeTop + nodeRect.height - scrollParentRect.height + bordersWidth;
	  }
	  // the item is within the scrollable area (do nothing)
	}
	
	/**
	 * @param {HTMLElement} parent the parent node
	 * @param {HTMLElement} child the child node
	 * @return {Boolean} whether the parent is the child or the child is in the parent
	 */
	function isOrContainsNode(parent, child) {
	  return parent === child || parent.contains(child);
	}
	
	/**
	 * Simple debounce implementation. Will call the given
	 * function once after the time given has passed since
	 * it was last called.
	 * @param {Function} fn the function to call after the time
	 * @param {Number} time the time to wait
	 * @return {Function} the debounced function
	 */
	function debounce(fn, time) {
	  var timeoutId = void 0;
	  return wrapper;
	  function wrapper() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    timeoutId = setTimeout(function () {
	      timeoutId = null;
	      fn.apply(undefined, args);
	    }, time);
	  }
	}
	
	/**
	 * This is intended to be used to compose event handlers.
	 * They are executed in order until one of them sets
	 * `event.preventDownshiftDefault = true`.
	 * @param {Function} fns the event handler functions
	 * @return {Function} the event handler to add to an element
	 */
	function composeEventHandlers() {
	  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    fns[_key2] = arguments[_key2];
	  }
	
	  return function (event) {
	    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	      args[_key3 - 1] = arguments[_key3];
	    }
	
	    return fns.some(function (fn) {
	      fn && fn.apply(undefined, [event].concat(args));
	      // TODO: remove everything after the || in the next breaking change
	      return event.preventDownshiftDefault || event.defaultPrevented;
	    });
	  };
	}
	
	/**
	 * This generates a unique ID for an instance of Downshift
	 * @return {String} the unique ID
	 */
	function generateId() {
	  return String(idCounter++);
	}
	
	/**
	 * Resets idCounter to 0. Used for SSR.
	 */
	function resetIdCounter() {
	  idCounter = 0;
	}
	
	/**
	 * Returns the first argument that is not undefined
	 * @param {...*} args the arguments
	 * @return {*} the defined value
	 */
	function firstDefined() {
	  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    args[_key4] = arguments[_key4];
	  }
	
	  return args.find(function (a) {
	    return typeof a !== 'undefined';
	  });
	}
	
	// eslint-disable-next-line complexity
	function getA11yStatusMessage(_ref) {
	  var isOpen = _ref.isOpen,
	      highlightedItem = _ref.highlightedItem,
	      selectedItem = _ref.selectedItem,
	      resultCount = _ref.resultCount,
	      previousResultCount = _ref.previousResultCount,
	      itemToString = _ref.itemToString;
	
	  if (!isOpen) {
	    if (selectedItem) {
	      return itemToString(selectedItem);
	    } else {
	      return '';
	    }
	  }
	
	  if (!resultCount) {
	    return 'No results.';
	  } else if (!highlightedItem || resultCount !== previousResultCount) {
	    return resultCount + ' ' + (resultCount === 1 ? 'result is' : 'results are') + ' available, use up and down arrow keys to navigate.';
	  }
	  return itemToString(highlightedItem);
	}
	
	/**
	 * Takes an argument and if it's an array, returns the first item in the array
	 * otherwise returns the argument
	 * @param {*} arg the maybe-array
	 * @param {*} defaultValue the value if arg is falsey not defined
	 * @return {*} the arg or it's first item
	 */
	function unwrapArray(arg, defaultValue) {
	  arg = Array.isArray(arg) ? /* istanbul ignore next (preact) */arg[0] : arg;
	  if (!arg && defaultValue) {
	    return defaultValue;
	  } else {
	    return arg;
	  }
	}
	
	/**
	 * @param {Object} element (P)react element
	 * @return {Boolean} whether it's a DOM element
	 */
	function isDOMElement(element) {
	  /* istanbul ignore if */
	  if (element.nodeName) {
	    // then this is preact
	    return typeof element.nodeName === 'string';
	  } else {
	    // then we assume this is react
	    return typeof element.type === 'string';
	  }
	}
	
	/**
	 * @param {Object} element (P)react element
	 * @return {Object} the props
	 */
	function getElementProps(element) {
	  // props for react, attributes for preact
	  return element.props || /* istanbul ignore next (preact) */element.attributes;
	}
	
	/**
	 * Throws a helpful error message for required properties. Useful
	 * to be used as a default in destructuring or object params.
	 * @param {String} fnName the function name
	 * @param {String} propName the prop name
	 */
	function requiredProp(fnName, propName) {
	  throw new Error('The property "' + propName + '" is required in "' + fnName + '"');
	}
	
	var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
	/**
	 * @param {Object} state The state object
	 * @return {Object} State that is relevant to downshift
	 */
	function pickState() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var result = {};
	  stateKeys.forEach(function (k) {
	    if (state.hasOwnProperty(k)) {
	      result[k] = state[k];
	    }
	  });
	  return result;
	}
	
	/**
	 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
	 * @param {Object} event a KeyboardEvent object
	 * @return {String} keyboard key
	 */
	function normalizeArrowKey(event) {
	  var key = event.key,
	      keyCode = event.keyCode;
	  /* istanbul ignore next (ie) */
	
	  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
	    return 'Arrow' + key;
	  }
	  return key;
	}
	
	/**
	 * Simple check if the value passed is object literal
	 * @param {*} obj any things
	 * @return {Boolean} whether it's object literal
	 */
	function isPlainObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	}
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
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
	
	/* eslint camelcase:0 */
	
	var Downshift = function (_Component) {
	  inherits(Downshift, _Component);
	
	  function Downshift() {
	    classCallCheck(this, Downshift);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));
	
	    _initialiseProps.call(_this);
	
	    var state = _this.getState({
	      highlightedIndex: _this.props.defaultHighlightedIndex,
	      isOpen: _this.props.defaultIsOpen,
	      inputValue: _this.props.defaultInputValue,
	      selectedItem: _this.props.defaultSelectedItem
	    });
	    if (state.selectedItem != null) {
	      state.inputValue = _this.props.itemToString(state.selectedItem);
	    }
	    _this.state = state;
	    _this.id = _this.props.id || 'downshift-' + generateId();
	    return _this;
	  }
	  // itemCount can be changed asynchronously
	  // from within downshift (so it can't come from a prop)
	  // this is why we store it as an instance and use
	  // getItemCount rather than just use items.length
	  // (to support windowing + async)
	
	
	  /**
	   * Gets the state based on internal state or props
	   * If a state value is passed via props, then that
	   * is the value given, otherwise it's retrieved from
	   * stateToMerge
	   *
	   * This will perform a shallow merge of the given state object
	   * with the state coming from props
	   * (for the controlled component scenario)
	   * This is used in state updater functions so they're referencing
	   * the right state regardless of where it comes from.
	   *
	   * @param {Object} stateToMerge defaults to this.state
	   * @return {Object} the state
	   */
	  Downshift.prototype.getState = function getState() {
	    var _this2 = this;
	
	    var stateToMerge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
	
	    return Object.keys(stateToMerge).reduce(function (state, key) {
	      state[key] = _this2.isControlledProp(key) ? _this2.props[key] : stateToMerge[key];
	      return state;
	    }, {});
	  };
	
	  /**
	   * This determines whether a prop is a "controlled prop" meaning it is
	   * state which is controlled by the outside of this component rather
	   * than within this component.
	   * @param {String} key the key to check
	   * @return {Boolean} whether it is a controlled controlled prop
	   */
	
	
	  Downshift.prototype.isControlledProp = function isControlledProp(key) {
	    return this.props[key] !== undefined;
	  };
	
	  Downshift.prototype.getItemCount = function getItemCount() {
	    // things read better this way. They're in priority order:
	    // 1. `this.itemCount`
	    // 2. `this.props.itemCount`
	    // 3. `this.items.length`
	    /* eslint-disable no-negated-condition */
	    if (this.itemCount != null) {
	      return this.itemCount;
	    } else if (this.props.itemCount !== undefined) {
	      return this.props.itemCount;
	    } else {
	      return this.items.length;
	    }
	    /* eslint-enable no-negated-condition */
	  };
	
	  Downshift.prototype.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
	    return this.props.environment.document.getElementById(this.getItemId(index));
	  };
	
	  Downshift.prototype.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
	    /* istanbul ignore else (react-native) */
	    {
	      var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
	      scrollIntoView(node, this._rootNode);
	    }
	  };
	
	  Downshift.prototype.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
	    if (this.getState().isOpen) {
	      this.changeHighlightedIndex(amount, otherStateToSet);
	    } else {
	      this.setHighlightedIndex(undefined, _extends({ isOpen: true }, otherStateToSet));
	    }
	  };
	
	  // eslint-disable-next-line complexity
	
	
	  Downshift.prototype.changeHighlightedIndex = function changeHighlightedIndex(moveAmount, otherStateToSet) {
	    var itemsLastIndex = this.getItemCount() - 1;
	    if (itemsLastIndex < 0) {
	      return;
	    }
	
	    var _getState = this.getState(),
	        highlightedIndex = _getState.highlightedIndex;
	
	    var baseIndex = highlightedIndex;
	    if (baseIndex === null) {
	      baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
	    }
	    var newIndex = baseIndex + moveAmount;
	    if (newIndex < 0) {
	      newIndex = itemsLastIndex;
	    } else if (newIndex > itemsLastIndex) {
	      newIndex = 0;
	    }
	    this.setHighlightedIndex(newIndex, otherStateToSet);
	  };
	
	  // any piece of our state can live in two places:
	  // 1. Uncontrolled: it's internal (this.state)
	  //    We will call this.setState to update that state
	  // 2. Controlled: it's external (this.props)
	  //    We will call this.props.onStateChange to update that state
	  //
	  // In addition, we'll call this.props.onChange if the
	  // selectedItem is changed.
	
	
	  Downshift.prototype.getStateAndHelpers = function getStateAndHelpers() {
	    var _getState2 = this.getState(),
	        highlightedIndex = _getState2.highlightedIndex,
	        inputValue = _getState2.inputValue,
	        selectedItem = _getState2.selectedItem,
	        isOpen = _getState2.isOpen;
	
	    var itemToString = this.props.itemToString;
	    var id = this.id;
	    var getRootProps = this.getRootProps,
	        getButtonProps = this.getButtonProps,
	        getToggleButtonProps = this.getToggleButtonProps,
	        getLabelProps = this.getLabelProps,
	        getInputProps = this.getInputProps,
	        getItemProps = this.getItemProps,
	        openMenu = this.openMenu,
	        closeMenu = this.closeMenu,
	        toggleMenu = this.toggleMenu,
	        selectItem = this.selectItem,
	        selectItemAtIndex = this.selectItemAtIndex,
	        selectHighlightedItem = this.selectHighlightedItem,
	        setHighlightedIndex = this.setHighlightedIndex,
	        clearSelection = this.clearSelection,
	        clearItems = this.clearItems,
	        reset = this.reset,
	        setItemCount = this.setItemCount,
	        unsetItemCount = this.unsetItemCount,
	        setState = this.internalSetState;
	
	    return {
	      // prop getters
	      getRootProps: getRootProps,
	      getButtonProps: getButtonProps,
	      getToggleButtonProps: getToggleButtonProps,
	      getLabelProps: getLabelProps,
	      getInputProps: getInputProps,
	      getItemProps: getItemProps,
	
	      // actions
	      reset: reset,
	      openMenu: openMenu,
	      closeMenu: closeMenu,
	      toggleMenu: toggleMenu,
	      selectItem: selectItem,
	      selectItemAtIndex: selectItemAtIndex,
	      selectHighlightedItem: selectHighlightedItem,
	      setHighlightedIndex: setHighlightedIndex,
	      clearSelection: clearSelection,
	      clearItems: clearItems,
	      setItemCount: setItemCount,
	      unsetItemCount: unsetItemCount,
	      setState: setState,
	
	      //props
	      itemToString: itemToString,
	
	      //derived
	      id: id,
	
	      // state
	      highlightedIndex: highlightedIndex,
	      inputValue: inputValue,
	      isOpen: isOpen,
	      selectedItem: selectedItem
	    };
	  };
	
	  //////////////////////////// ROOT
	
	  //\\\\\\\\\\\\\\\\\\\\\\\\\\ ROOT
	
	  //////////////////////////// BUTTON
	
	  // TODO: remove this in 2.0.0 and just call it `getToggleButtonProps`
	
	
	  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ BUTTON
	
	  /////////////////////////////// LABEL
	
	  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ LABEL
	
	  /////////////////////////////// INPUT
	
	  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ INPUT
	
	  /////////////////////////////// ITEM
	  Downshift.prototype.getItemId = function getItemId(index) {
	    return this.id + '-item-' + index;
	  };
	  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ITEM
	
	  Downshift.prototype.componentDidMount = function componentDidMount() {
	    var _this3 = this;
	
	    // the _isMounted property is because we have `updateStatus` in a `debounce`
	    // and we don't want to update the status if the component has been umounted
	    this._isMounted = true;
	    /* istanbul ignore if (react-native) */
	    {
	      // this.isMouseDown helps us track whether the mouse is currently held down.
	      // This is useful when the user clicks on an item in the list, but holds the mouse
	      // down long enough for the list to disappear (because the blur event fires on the input)
	      // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
	      // trigger hiding the menu.
	      var onMouseDown = function () {
	        _this3.isMouseDown = true;
	      };
	      var onMouseUp = function (event) {
	        var document = _this3.props.environment.document;
	
	        _this3.isMouseDown = false;
	        var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
	        var activeElementInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, document.activeElement);
	        if (!targetInDownshift && !activeElementInDownshift && _this3.getState().isOpen) {
	          _this3.reset({ type: Downshift.stateChangeTypes.mouseUp }, function () {
	            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
	          });
	        }
	      };
	      // Touching an element in iOS gives focus and hover states, but touching out of
	      // the element will remove hover, and persist the focus state, resulting in the
	      // blur event not being triggered.
	      var onTouchStart = function (event) {
	        var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
	        if (!targetInDownshift && _this3.getState().isOpen) {
	          _this3.reset({ type: Downshift.stateChangeTypes.touchStart }, function () {
	            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
	          });
	        }
	      };
	
	      this.props.environment.addEventListener('mousedown', onMouseDown);
	      this.props.environment.addEventListener('mouseup', onMouseUp);
	      this.props.environment.addEventListener('touchstart', onTouchStart);
	
	      this.cleanup = function () {
	        _this3._isMounted = false;
	        _this3.props.environment.removeEventListener('mousedown', onMouseDown);
	        _this3.props.environment.removeEventListener('mouseup', onMouseUp);
	        _this3.props.environment.removeEventListener('touchstart', onTouchStart);
	      };
	    }
	  };
	
	  Downshift.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    if (this.isControlledProp('selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
	      this.internalSetState({
	        type: Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem,
	        inputValue: this.props.itemToString(this.props.selectedItem)
	      });
	    }
	
	    var current = this.props.highlightedIndex === undefined ? this.state : this.props;
	    var prev = prevProps.highlightedIndex === undefined ? prevState : prevProps;
	
	    if (current.highlightedIndex !== prev.highlightedIndex && !this.avoidScrolling) {
	      this.scrollHighlightedItemIntoView();
	    }
	
	    this.updateStatus();
	  };
	
	  Downshift.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cleanup(); // avoids memory leak
	  };
	
	  // eslint-disable-next-line complexity
	
	
	  Downshift.prototype.render = function render() {
	    var children = unwrapArray(this.props.render || this.props.children, noop);
	    // because the items are rerendered every time we call the children
	    // we clear this out each render and
	    this.clearItems();
	    // we reset this so we know whether the user calls getRootProps during
	    // this render. If they do then we don't need to do anything,
	    // if they don't then we need to clone the element they return and
	    // apply the props for them.
	    this.getRootProps.called = false;
	    this.getRootProps.refKey = undefined;
	    this.getRootProps.suppressRefError = undefined;
	    // we do something similar for getLabelProps
	    this.getLabelProps.called = false;
	    // and something similar for getInputProps
	    this.getInputProps.called = false;
	    var element = unwrapArray(children(this.getStateAndHelpers()));
	    if (!element) {
	      return null;
	    }
	    if (this.getRootProps.called) {
	      if (!this.getRootProps.suppressRefError) {
	        validateGetRootPropsCalledCorrectly(element, this.getRootProps);
	      }
	      return element;
	    } else if (isDOMElement(element)) {
	      // they didn't apply the root props, but we can clone
	      // this and apply the props ourselves
	      return React__default.cloneElement(element, this.getRootProps(getElementProps(element)));
	    } else {
	      // they didn't apply the root props, but they need to
	      // otherwise we can't query around the autocomplete
	      throw new Error('downshift: If you return a non-DOM element, you must use apply the getRootProps function');
	    }
	  };
	
	  return Downshift;
	}(React.Component);
	
	Downshift.defaultProps = {
	  defaultHighlightedIndex: null,
	  defaultSelectedItem: null,
	  defaultInputValue: '',
	  defaultIsOpen: false,
	  getA11yStatusMessage: getA11yStatusMessage,
	  itemToString: function itemToString(i) {
	    if (i == null) {
	      return '';
	    }
	    if (false) {
	      //eslint-disable-next-line no-console
	      console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
	    }
	    return String(i);
	  },
	  onStateChange: function onStateChange() {},
	  onInputValueChange: function onInputValueChange() {},
	  onUserAction: function onUserAction() {},
	  onChange: function onChange() {},
	  onSelect: function onSelect() {},
	  onOuterClick: function onOuterClick() {},
	  selectedItemChanged: function selectedItemChanged(prevItem, item) {
	    return prevItem !== item;
	  },
	  environment: typeof window === 'undefined' /* istanbul ignore next (ssr) */
	  ? {} : window,
	  stateReducer: function stateReducer(state, stateToSet) {
	    return stateToSet;
	  },
	  breakingChanges: {}
	};
	Downshift.stateChangeTypes = {
	  unknown: '__autocomplete_unknown__',
	  mouseUp: '__autocomplete_mouseup__',
	  itemMouseEnter: '__autocomplete_item_mouseenter__',
	  keyDownArrowUp: '__autocomplete_keydown_arrow_up__',
	  keyDownArrowDown: '__autocomplete_keydown_arrow_down__',
	  keyDownEscape: '__autocomplete_keydown_escape__',
	  keyDownEnter: '__autocomplete_keydown_enter__',
	  clickItem: '__autocomplete_click_item__',
	  blurInput: '__autocomplete_blur_input__',
	  changeInput: '__autocomplete_change_input__',
	  keyDownSpaceButton: '__autocomplete_keydown_space_button__',
	  clickButton: '__autocomplete_click_button__',
	  blurButton: '__autocomplete_blur_button__',
	  controlledPropUpdatedSelectedItem: '__autocomplete_controlled_prop_updated_selected_item__',
	  touchStart: '__autocomplete_touchstart__'
	};
	
	var _initialiseProps = function () {
	  var _this4 = this;
	
	  this.input = null;
	  this.items = [];
	  this.itemCount = null;
	  this.previousResultCount = 0;
	
	  this.setItemCount = function (count) {
	    return _this4.itemCount = count;
	  };
	
	  this.unsetItemCount = function () {
	    return _this4.itemCount = null;
	  };
	
	  this.setHighlightedIndex = function () {
	    var highlightedIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.props.defaultHighlightedIndex;
	    var otherStateToSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    otherStateToSet = pickState(otherStateToSet);
	    _this4.internalSetState(_extends({ highlightedIndex: highlightedIndex }, otherStateToSet));
	  };
	
	  this.clearSelection = function (cb) {
	    _this4.internalSetState({
	      selectedItem: null,
	      inputValue: '',
	      isOpen: false
	    }, cb);
	  };
	
	  this.selectItem = function (item, otherStateToSet, cb) {
	    otherStateToSet = pickState(otherStateToSet);
	    _this4.internalSetState(_extends({
	      isOpen: false,
	      highlightedIndex: _this4.props.defaultHighlightedIndex,
	      selectedItem: item,
	      inputValue: _this4.isControlledProp('selectedItem') && _this4.props.breakingChanges.resetInputOnSelection ? _this4.props.defaultInputValue : _this4.props.itemToString(item)
	    }, otherStateToSet), cb);
	  };
	
	  this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
	    var item = _this4.items[itemIndex];
	    if (item == null) {
	      return;
	    }
	    _this4.selectItem(item, otherStateToSet, cb);
	  };
	
	  this.selectHighlightedItem = function (otherStateToSet, cb) {
	    return _this4.selectItemAtIndex(_this4.getState().highlightedIndex, otherStateToSet, cb);
	  };
	
	  this.internalSetState = function (stateToSet, cb) {
	    var isItemSelected = void 0,
	        onChangeArg = void 0;
	
	    var onStateChangeArg = {};
	    var isStateToSetFunction = typeof stateToSet === 'function';
	
	    // we want to call `onInputValueChange` before the `setState` call
	    // so someone controlling the `inputValue` state gets notified of
	    // the input change as soon as possible. This avoids issues with
	    // preserving the cursor position.
	    // See https://github.com/paypal/downshift/issues/217 for more info.
	    if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
	      _this4.props.onInputValueChange(stateToSet.inputValue, _extends({}, _this4.getStateAndHelpers(), stateToSet));
	    }
	    return _this4.setState(function (state) {
	      state = _this4.getState(state);
	      var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;
	
	      // Your own function that could modify the state that will be set.
	      newStateToSet = _this4.props.stateReducer(state, newStateToSet);
	
	      // checks if an item is selected, regardless of if it's different from
	      // what was selected before
	      // used to determine if onSelect and onChange callbacks should be called
	      isItemSelected = newStateToSet.hasOwnProperty('selectedItem');
	      // this keeps track of the object we want to call with setState
	      var nextState = {};
	      // this is just used to tell whether the state changed
	      var nextFullState = {};
	      // we need to call on change if the outside world is controlling any of our state
	      // and we're trying to update that state. OR if the selection has changed and we're
	      // trying to update the selection
	      if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
	        onChangeArg = newStateToSet.selectedItem;
	      }
	      newStateToSet.type = newStateToSet.type || Downshift.stateChangeTypes.unknown;
	
	      Object.keys(newStateToSet).forEach(function (key) {
	        // onStateChangeArg should only have the state that is
	        // actually changing
	        if (state[key] !== newStateToSet[key]) {
	          onStateChangeArg[key] = newStateToSet[key];
	        }
	        // the type is useful for the onStateChangeArg
	        // but we don't actually want to set it in internal state.
	        // this is an undocumented feature for now... Not all internalSetState
	        // calls support it and I'm not certain we want them to yet.
	        // But it enables users controlling the isOpen state to know when
	        // the isOpen state changes due to mouseup events which is quite handy.
	        if (key === 'type') {
	          return;
	        }
	        nextFullState[key] = newStateToSet[key];
	        // if it's coming from props, then we don't care to set it internally
	        if (!_this4.isControlledProp(key)) {
	          nextState[key] = newStateToSet[key];
	        }
	      });
	
	      // if stateToSet is a function, then we weren't able to call onInputValueChange
	      // earlier, so we'll call it now that we know what the inputValue state will be.
	      if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
	        _this4.props.onInputValueChange(newStateToSet.inputValue, _extends({}, _this4.getStateAndHelpers(), newStateToSet));
	      }
	
	      return nextState;
	    }, function () {
	      // call the provided callback if it's a callback
	      cbToCb(cb)();
	
	      // only call the onStateChange and onChange callbacks if
	      // we have relevant information to pass them.
	      var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
	      if (hasMoreStateThanType) {
	        _this4.props.onStateChange(onStateChangeArg, _this4.getStateAndHelpers());
	      }
	
	      if (isItemSelected) {
	        _this4.props.onSelect(stateToSet.selectedItem, _this4.getStateAndHelpers());
	      }
	
	      if (onChangeArg !== undefined) {
	        _this4.props.onChange(onChangeArg, _this4.getStateAndHelpers());
	      }
	      // this is currently undocumented and therefore subject to change
	      // We'll try to not break it, but just be warned.
	      _this4.props.onUserAction(onStateChangeArg, _this4.getStateAndHelpers());
	    });
	  };
	
	  this.rootRef = function (node) {
	    return _this4._rootNode = node;
	  };
	
	  this.getRootProps = function () {
	    var _babelHelpers$extends;
	
	    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        _ref3$suppressRefErro = _ref3.suppressRefError,
	        suppressRefError = _ref3$suppressRefErro === undefined ? false : _ref3$suppressRefErro;
	
	    var _ref2$refKey = _ref2.refKey,
	        refKey = _ref2$refKey === undefined ? 'ref' : _ref2$refKey,
	        rest = objectWithoutProperties(_ref2, ['refKey']);
	
	    // this is used in the render to know whether the user has called getRootProps.
	    // It uses that to know whether to apply the props automatically
	    _this4.getRootProps.called = true;
	    _this4.getRootProps.refKey = refKey;
	    _this4.getRootProps.suppressRefError = suppressRefError;
	    return _extends((_babelHelpers$extends = {}, _babelHelpers$extends[refKey] = _this4.rootRef, _babelHelpers$extends), rest);
	  };
	
	  this.keyDownHandlers = {
	    ArrowDown: function ArrowDown(event) {
	      event.preventDefault();
	      var amount = event.shiftKey ? 5 : 1;
	      this.moveHighlightedIndex(amount, {
	        type: Downshift.stateChangeTypes.keyDownArrowDown
	      });
	    },
	    ArrowUp: function ArrowUp(event) {
	      event.preventDefault();
	      var amount = event.shiftKey ? -5 : -1;
	      this.moveHighlightedIndex(amount, {
	        type: Downshift.stateChangeTypes.keyDownArrowUp
	      });
	    },
	    Enter: function Enter(event) {
	      if (this.getState().isOpen) {
	        event.preventDefault();
	        var itemIndex = this.getState().highlightedIndex;
	        var item = this.items[itemIndex];
	        var itemNode = this.getItemNodeFromIndex(itemIndex);
	        if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
	          return;
	        }
	        this.selectHighlightedItem({
	          type: Downshift.stateChangeTypes.keyDownEnter
	        });
	      }
	    },
	    Escape: function Escape(event) {
	      event.preventDefault();
	      this.reset({ type: Downshift.stateChangeTypes.keyDownEscape });
	    }
	  };
	  this.buttonKeyDownHandlers = _extends({}, this.keyDownHandlers, {
	    ' ': function _(event) {
	      event.preventDefault();
	      this.toggleMenu({ type: Downshift.stateChangeTypes.keyDownSpaceButton });
	    }
	  });
	
	  this.getToggleButtonProps = function () {
	    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var onClick = _ref4.onClick,
	        onKeyDown = _ref4.onKeyDown,
	        onBlur = _ref4.onBlur,
	        rest = objectWithoutProperties(_ref4, ['onClick', 'onKeyDown', 'onBlur']);
	
	    var _getState3 = _this4.getState(),
	        isOpen = _getState3.isOpen;
	
	    var enabledEventHandlers = {
	      onClick: composeEventHandlers(onClick, _this4.button_handleClick),
	      onKeyDown: composeEventHandlers(onKeyDown, _this4.button_handleKeyDown),
	      onBlur: composeEventHandlers(onBlur, _this4.button_handleBlur)
	    };
	    var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
	    return _extends({
	      type: 'button',
	      role: 'button',
	      'aria-label': isOpen ? 'close menu' : 'open menu',
	      'aria-expanded': isOpen,
	      'aria-haspopup': true,
	      'data-toggle': true
	    }, eventHandlers, rest);
	  };
	
	  this.getButtonProps = this.getToggleButtonProps;
	
	  this.button_handleKeyDown = function (event) {
	    var key = normalizeArrowKey(event);
	    if (_this4.buttonKeyDownHandlers[key]) {
	      _this4.buttonKeyDownHandlers[key].call(_this4, event);
	    }
	  };
	
	  this.button_handleClick = function (event) {
	    event.preventDefault();
	    // handle odd case for Safari and Firefox which
	    // don't give the button the focus properly.
	    /* istanbul ignore if (can't reasonably test this) */
	    if (_this4.props.environment.document.activeElement === _this4.props.environment.document.body) {
	      event.target.focus();
	    }
	    // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
	    // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
	    // when building for production and should therefore have no impact on production code.
	    if (false) {
	      _this4.toggleMenu({ type: Downshift.stateChangeTypes.clickButton });
	    } else {
	      // Ensure that toggle of menu occurs after the potential blur event in iOS
	      setTimeout(function () {
	        return _this4.toggleMenu({ type: Downshift.stateChangeTypes.clickButton });
	      });
	    }
	  };
	
	  this.button_handleBlur = function (event) {
	    var blurTarget = event.target; // Save blur target for comparison with activeElement later
	    // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element
	    setTimeout(function () {
	      if (!_this4.isMouseDown && (_this4.props.environment.document.activeElement == null || _this4.props.environment.document.activeElement.id !== _this4.inputId) && _this4.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
	      ) {
	          _this4.reset({ type: Downshift.stateChangeTypes.blurButton });
	        }
	    });
	  };
	
	  this.getLabelProps = function () {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _this4.getLabelProps.called = true;
	    if (_this4.getInputProps.called && props.htmlFor && props.htmlFor !== _this4.inputId) {
	      throw new Error('downshift: You provided the htmlFor of "' + props.htmlFor + '" for your label, but the id of your input is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
	    }
	    _this4.inputId = firstDefined(_this4.inputId, props.htmlFor, _this4.id + '-input');
	    return _extends({}, props, {
	      htmlFor: _this4.inputId
	    });
	  };
	
	  this.getInputProps = function () {
	    var _ref6;
	
	    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var onKeyDown = _ref5.onKeyDown,
	        onBlur = _ref5.onBlur,
	        onChange = _ref5.onChange,
	        onInput = _ref5.onInput,
	        rest = objectWithoutProperties(_ref5, ['onKeyDown', 'onBlur', 'onChange', 'onInput']);
	
	    _this4.getInputProps.called = true;
	    if (_this4.getLabelProps.called && rest.id && rest.id !== _this4.inputId) {
	      throw new Error('downshift: You provided the id of "' + rest.id + '" for your input, but the htmlFor of your label is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
	    }
	    _this4.inputId = firstDefined(_this4.inputId, rest.id, _this4.id + '-input');
	    var onChangeKey = void 0;
	    /* istanbul ignore next (preact) */
	    onChangeKey = 'onChange';
	
	    var _getState4 = _this4.getState(),
	        inputValue = _getState4.inputValue,
	        isOpen = _getState4.isOpen,
	        highlightedIndex = _getState4.highlightedIndex;
	
	    var eventHandlers = rest.disabled ? {} : (_ref6 = {}, _ref6[onChangeKey] = composeEventHandlers(onChange, onInput, _this4.input_handleChange), _ref6.onKeyDown = composeEventHandlers(onKeyDown, _this4.input_handleKeyDown), _ref6.onBlur = composeEventHandlers(onBlur, _this4.input_handleBlur), _ref6);
	    return _extends({
	      role: 'combobox',
	      'aria-autocomplete': 'list',
	      'aria-expanded': isOpen,
	      'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this4.getItemId(highlightedIndex) : null,
	      autoComplete: 'off',
	      value: inputValue
	    }, eventHandlers, rest, {
	      id: _this4.inputId
	    });
	  };
	
	  this.input_handleKeyDown = function (event) {
	    var key = normalizeArrowKey(event);
	    if (key && _this4.keyDownHandlers[key]) {
	      _this4.keyDownHandlers[key].call(_this4, event);
	    }
	  };
	
	  this.input_handleChange = function (event) {
	    _this4.internalSetState({
	      type: Downshift.stateChangeTypes.changeInput,
	      isOpen: true,
	      inputValue: event.target.value
	    });
	  };
	
	  this.input_handleBlur = function () {
	    // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
	    setTimeout(function () {
	      var downshiftButtonIsActive = _this4.props.environment.document.activeElement.dataset.toggle && _this4._rootNode && _this4._rootNode.contains(_this4.props.environment.document.activeElement);
	      if (!_this4.isMouseDown && !downshiftButtonIsActive) {
	        _this4.reset({ type: Downshift.stateChangeTypes.blurInput });
	      }
	    });
	  };
	
	  this.getItemProps = function () {
	    var _enabledEventHandlers;
	
	    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var onMouseMove = _ref7.onMouseMove,
	        onMouseDown = _ref7.onMouseDown,
	        onClick = _ref7.onClick,
	        index = _ref7.index,
	        _ref7$item = _ref7.item,
	        item = _ref7$item === undefined ? requiredProp('getItemProps', 'item') : _ref7$item,
	        rest = objectWithoutProperties(_ref7, ['onMouseMove', 'onMouseDown', 'onClick', 'index', 'item']);
	
	    if (index === undefined) {
	      _this4.items.push(item);
	      index = _this4.items.indexOf(item);
	    } else {
	      _this4.items[index] = item;
	    }
	
	    var onSelectKey = 'onClick';
	
	    var enabledEventHandlers = (_enabledEventHandlers = {
	      // onMouseMove is used over onMouseEnter here. onMouseMove
	      // is only triggered on actual mouse movement while onMouseEnter
	      // can fire on DOM changes, interrupting keyboard navigation
	      onMouseMove: composeEventHandlers(onMouseMove, function () {
	        if (index === _this4.getState().highlightedIndex) {
	          return;
	        }
	        _this4.setHighlightedIndex(index, {
	          type: Downshift.stateChangeTypes.itemMouseEnter
	        });
	
	        // We never want to manually scroll when changing state based
	        // on `onMouseMove` because we will be moving the element out
	        // from under the user which is currently scrolling/moving the
	        // cursor
	        _this4.avoidScrolling = true;
	        setTimeout(function () {
	          return _this4.avoidScrolling = false;
	        }, 250);
	      }),
	      onMouseDown: composeEventHandlers(onMouseDown, function (event) {
	        // This prevents the activeElement from being changed
	        // to the item so it can remain with the current activeElement
	        // which is a more common use case.
	        event.preventDefault();
	      })
	    }, _enabledEventHandlers[onSelectKey] = composeEventHandlers(onClick, function () {
	      _this4.selectItemAtIndex(index, {
	        type: Downshift.stateChangeTypes.clickItem
	      });
	    }), _enabledEventHandlers);
	
	    var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
	
	    return _extends({
	      id: _this4.getItemId(index)
	    }, eventHandlers, rest);
	  };
	
	  this.clearItems = function () {
	    _this4.items = [];
	  };
	
	  this.reset = function () {
	    var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var cb = arguments[1];
	
	    otherStateToSet = pickState(otherStateToSet);
	    _this4.internalSetState(function (_ref8) {
	      var selectedItem = _ref8.selectedItem;
	      return _extends({
	        isOpen: false,
	        highlightedIndex: _this4.props.defaultHighlightedIndex,
	        inputValue: _this4.props.itemToString(selectedItem)
	      }, otherStateToSet);
	    }, cbToCb(cb));
	  };
	
	  this.toggleMenu = function () {
	    var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var cb = arguments[1];
	
	    otherStateToSet = pickState(otherStateToSet);
	    _this4.internalSetState(function (_ref9) {
	      var isOpen = _ref9.isOpen;
	
	      return _extends({ isOpen: !isOpen }, otherStateToSet);
	    }, function () {
	      var _getState5 = _this4.getState(),
	          isOpen = _getState5.isOpen;
	
	      if (isOpen) {
	        // highlight default index
	        _this4.setHighlightedIndex(undefined, otherStateToSet);
	      }
	      cbToCb(cb)();
	    });
	  };
	
	  this.openMenu = function (cb) {
	    _this4.internalSetState({ isOpen: true }, cbToCb(cb));
	  };
	
	  this.closeMenu = function (cb) {
	    _this4.internalSetState({ isOpen: false }, cbToCb(cb));
	  };
	
	  this.updateStatus = debounce(function () {
	    if (!_this4._isMounted) {
	      return;
	    }
	    var state = _this4.getState();
	    var item = _this4.items[state.highlightedIndex];
	    var resultCount = _this4.getItemCount();
	    var status = _this4.props.getA11yStatusMessage(_extends({
	      itemToString: _this4.props.itemToString,
	      previousResultCount: _this4.previousResultCount,
	      resultCount: resultCount,
	      highlightedItem: item
	    }, state));
	    _this4.previousResultCount = resultCount;
	    /* istanbul ignore else (react-native) */
	    setStatus(status);
	  }, 200);
	};
	
	 false ? Downshift.propTypes = {
	  children: PropTypes.func,
	  render: PropTypes.func,
	  defaultHighlightedIndex: PropTypes.number,
	  defaultSelectedItem: PropTypes.any,
	  defaultInputValue: PropTypes.string,
	  defaultIsOpen: PropTypes.bool,
	  getA11yStatusMessage: PropTypes.func,
	  itemToString: PropTypes.func,
	  onChange: PropTypes.func,
	  onSelect: PropTypes.func,
	  onStateChange: PropTypes.func,
	  onInputValueChange: PropTypes.func,
	  onUserAction: PropTypes.func,
	  onOuterClick: PropTypes.func,
	  selectedItemChanged: PropTypes.func,
	  stateReducer: PropTypes.func,
	  itemCount: PropTypes.number,
	  id: PropTypes.string,
	  environment: PropTypes.shape({
	    addEventListener: PropTypes.func,
	    removeEventListener: PropTypes.func,
	    document: PropTypes.shape({
	      getElementById: PropTypes.func,
	      activeElement: PropTypes.any,
	      body: PropTypes.any
	    })
	  }),
	  // things we keep in state for uncontrolled components
	  // but can accept as props for controlled components
	  /* eslint-disable react/no-unused-prop-types */
	  selectedItem: PropTypes.any,
	  isOpen: PropTypes.bool,
	  inputValue: PropTypes.string,
	  highlightedIndex: PropTypes.number,
	  breakingChanges: PropTypes.shape({
	    resetInputOnSelection: PropTypes.bool
	  })
	  /* eslint-enable */
	} : void 0;
	
	function validateGetRootPropsCalledCorrectly(element, _ref) {
	  var refKey = _ref.refKey;
	
	  var refKeySpecified = refKey !== 'ref';
	  var isComposite = !isDOMElement(element);
	  if (isComposite && !refKeySpecified) {
	    throw new Error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
	  } else if (!isComposite && refKeySpecified) {
	    throw new Error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + refKey + '"');
	  }
	  if (!getElementProps(element)[refKey]) {
	    throw new Error('downshift: You must apply the ref prop "' + refKey + '" from getRootProps onto your root element.');
	  }
	}
	
	/*
	 * Fix importing in typescript after rollup compilation
	 * https://github.com/rollup/rollup/issues/1156
	 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
	 */
	Downshift.default = Downshift;
	Downshift.resetIdCounter = resetIdCounter;
	
	module.exports = Downshift;


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
	/* istanbul ignore next */
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
	/* istanbul ignore next */
		else if(typeof exports === 'object')
			exports["esprima"] = factory();
		else
			root["esprima"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/* istanbul ignore if */
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		/*
		  Copyright JS Foundation and other contributors, https://js.foundation/
	
		  Redistribution and use in source and binary forms, with or without
		  modification, are permitted provided that the following conditions are met:
	
		    * Redistributions of source code must retain the above copyright
		      notice, this list of conditions and the following disclaimer.
		    * Redistributions in binary form must reproduce the above copyright
		      notice, this list of conditions and the following disclaimer in the
		      documentation and/or other materials provided with the distribution.
	
		  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
		  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
		  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
		  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
		  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
		  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
		  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
		  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		*/
		Object.defineProperty(exports, "__esModule", { value: true });
		var comment_handler_1 = __webpack_require__(1);
		var jsx_parser_1 = __webpack_require__(3);
		var parser_1 = __webpack_require__(8);
		var tokenizer_1 = __webpack_require__(15);
		function parse(code, options, delegate) {
		    var commentHandler = null;
		    var proxyDelegate = function (node, metadata) {
		        if (delegate) {
		            delegate(node, metadata);
		        }
		        if (commentHandler) {
		            commentHandler.visit(node, metadata);
		        }
		    };
		    var parserDelegate = (typeof delegate === 'function') ? proxyDelegate : null;
		    var collectComment = false;
		    if (options) {
		        collectComment = (typeof options.comment === 'boolean' && options.comment);
		        var attachComment = (typeof options.attachComment === 'boolean' && options.attachComment);
		        if (collectComment || attachComment) {
		            commentHandler = new comment_handler_1.CommentHandler();
		            commentHandler.attach = attachComment;
		            options.comment = true;
		            parserDelegate = proxyDelegate;
		        }
		    }
		    var isModule = false;
		    if (options && typeof options.sourceType === 'string') {
		        isModule = (options.sourceType === 'module');
		    }
		    var parser;
		    if (options && typeof options.jsx === 'boolean' && options.jsx) {
		        parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
		    }
		    else {
		        parser = new parser_1.Parser(code, options, parserDelegate);
		    }
		    var program = isModule ? parser.parseModule() : parser.parseScript();
		    var ast = program;
		    if (collectComment && commentHandler) {
		        ast.comments = commentHandler.comments;
		    }
		    if (parser.config.tokens) {
		        ast.tokens = parser.tokens;
		    }
		    if (parser.config.tolerant) {
		        ast.errors = parser.errorHandler.errors;
		    }
		    return ast;
		}
		exports.parse = parse;
		function parseModule(code, options, delegate) {
		    var parsingOptions = options || {};
		    parsingOptions.sourceType = 'module';
		    return parse(code, parsingOptions, delegate);
		}
		exports.parseModule = parseModule;
		function parseScript(code, options, delegate) {
		    var parsingOptions = options || {};
		    parsingOptions.sourceType = 'script';
		    return parse(code, parsingOptions, delegate);
		}
		exports.parseScript = parseScript;
		function tokenize(code, options, delegate) {
		    var tokenizer = new tokenizer_1.Tokenizer(code, options);
		    var tokens;
		    tokens = [];
		    try {
		        while (true) {
		            var token = tokenizer.getNextToken();
		            if (!token) {
		                break;
		            }
		            if (delegate) {
		                token = delegate(token);
		            }
		            tokens.push(token);
		        }
		    }
		    catch (e) {
		        tokenizer.errorHandler.tolerate(e);
		    }
		    if (tokenizer.errorHandler.tolerant) {
		        tokens.errors = tokenizer.errors();
		    }
		    return tokens;
		}
		exports.tokenize = tokenize;
		var syntax_1 = __webpack_require__(2);
		exports.Syntax = syntax_1.Syntax;
		// Sync with *.json manifests.
		exports.version = '4.0.1';
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		var syntax_1 = __webpack_require__(2);
		var CommentHandler = (function () {
		    function CommentHandler() {
		        this.attach = false;
		        this.comments = [];
		        this.stack = [];
		        this.leading = [];
		        this.trailing = [];
		    }
		    CommentHandler.prototype.insertInnerComments = function (node, metadata) {
		        //  innnerComments for properties empty block
		        //  `function a() {/** comments **\/}`
		        if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
		            var innerComments = [];
		            for (var i = this.leading.length - 1; i >= 0; --i) {
		                var entry = this.leading[i];
		                if (metadata.end.offset >= entry.start) {
		                    innerComments.unshift(entry.comment);
		                    this.leading.splice(i, 1);
		                    this.trailing.splice(i, 1);
		                }
		            }
		            if (innerComments.length) {
		                node.innerComments = innerComments;
		            }
		        }
		    };
		    CommentHandler.prototype.findTrailingComments = function (metadata) {
		        var trailingComments = [];
		        if (this.trailing.length > 0) {
		            for (var i = this.trailing.length - 1; i >= 0; --i) {
		                var entry_1 = this.trailing[i];
		                if (entry_1.start >= metadata.end.offset) {
		                    trailingComments.unshift(entry_1.comment);
		                }
		            }
		            this.trailing.length = 0;
		            return trailingComments;
		        }
		        var entry = this.stack[this.stack.length - 1];
		        if (entry && entry.node.trailingComments) {
		            var firstComment = entry.node.trailingComments[0];
		            if (firstComment && firstComment.range[0] >= metadata.end.offset) {
		                trailingComments = entry.node.trailingComments;
		                delete entry.node.trailingComments;
		            }
		        }
		        return trailingComments;
		    };
		    CommentHandler.prototype.findLeadingComments = function (metadata) {
		        var leadingComments = [];
		        var target;
		        while (this.stack.length > 0) {
		            var entry = this.stack[this.stack.length - 1];
		            if (entry && entry.start >= metadata.start.offset) {
		                target = entry.node;
		                this.stack.pop();
		            }
		            else {
		                break;
		            }
		        }
		        if (target) {
		            var count = target.leadingComments ? target.leadingComments.length : 0;
		            for (var i = count - 1; i >= 0; --i) {
		                var comment = target.leadingComments[i];
		                if (comment.range[1] <= metadata.start.offset) {
		                    leadingComments.unshift(comment);
		                    target.leadingComments.splice(i, 1);
		                }
		            }
		            if (target.leadingComments && target.leadingComments.length === 0) {
		                delete target.leadingComments;
		            }
		            return leadingComments;
		        }
		        for (var i = this.leading.length - 1; i >= 0; --i) {
		            var entry = this.leading[i];
		            if (entry.start <= metadata.start.offset) {
		                leadingComments.unshift(entry.comment);
		                this.leading.splice(i, 1);
		            }
		        }
		        return leadingComments;
		    };
		    CommentHandler.prototype.visitNode = function (node, metadata) {
		        if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
		            return;
		        }
		        this.insertInnerComments(node, metadata);
		        var trailingComments = this.findTrailingComments(metadata);
		        var leadingComments = this.findLeadingComments(metadata);
		        if (leadingComments.length > 0) {
		            node.leadingComments = leadingComments;
		        }
		        if (trailingComments.length > 0) {
		            node.trailingComments = trailingComments;
		        }
		        this.stack.push({
		            node: node,
		            start: metadata.start.offset
		        });
		    };
		    CommentHandler.prototype.visitComment = function (node, metadata) {
		        var type = (node.type[0] === 'L') ? 'Line' : 'Block';
		        var comment = {
		            type: type,
		            value: node.value
		        };
		        if (node.range) {
		            comment.range = node.range;
		        }
		        if (node.loc) {
		            comment.loc = node.loc;
		        }
		        this.comments.push(comment);
		        if (this.attach) {
		            var entry = {
		                comment: {
		                    type: type,
		                    value: node.value,
		                    range: [metadata.start.offset, metadata.end.offset]
		                },
		                start: metadata.start.offset
		            };
		            if (node.loc) {
		                entry.comment.loc = node.loc;
		            }
		            node.type = type;
		            this.leading.push(entry);
		            this.trailing.push(entry);
		        }
		    };
		    CommentHandler.prototype.visit = function (node, metadata) {
		        if (node.type === 'LineComment') {
		            this.visitComment(node, metadata);
		        }
		        else if (node.type === 'BlockComment') {
		            this.visitComment(node, metadata);
		        }
		        else if (this.attach) {
		            this.visitNode(node, metadata);
		        }
		    };
		    return CommentHandler;
		}());
		exports.CommentHandler = CommentHandler;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Syntax = {
		    AssignmentExpression: 'AssignmentExpression',
		    AssignmentPattern: 'AssignmentPattern',
		    ArrayExpression: 'ArrayExpression',
		    ArrayPattern: 'ArrayPattern',
		    ArrowFunctionExpression: 'ArrowFunctionExpression',
		    AwaitExpression: 'AwaitExpression',
		    BlockStatement: 'BlockStatement',
		    BinaryExpression: 'BinaryExpression',
		    BreakStatement: 'BreakStatement',
		    CallExpression: 'CallExpression',
		    CatchClause: 'CatchClause',
		    ClassBody: 'ClassBody',
		    ClassDeclaration: 'ClassDeclaration',
		    ClassExpression: 'ClassExpression',
		    ConditionalExpression: 'ConditionalExpression',
		    ContinueStatement: 'ContinueStatement',
		    DoWhileStatement: 'DoWhileStatement',
		    DebuggerStatement: 'DebuggerStatement',
		    EmptyStatement: 'EmptyStatement',
		    ExportAllDeclaration: 'ExportAllDeclaration',
		    ExportDefaultDeclaration: 'ExportDefaultDeclaration',
		    ExportNamedDeclaration: 'ExportNamedDeclaration',
		    ExportSpecifier: 'ExportSpecifier',
		    ExpressionStatement: 'ExpressionStatement',
		    ForStatement: 'ForStatement',
		    ForOfStatement: 'ForOfStatement',
		    ForInStatement: 'ForInStatement',
		    FunctionDeclaration: 'FunctionDeclaration',
		    FunctionExpression: 'FunctionExpression',
		    Identifier: 'Identifier',
		    IfStatement: 'IfStatement',
		    ImportDeclaration: 'ImportDeclaration',
		    ImportDefaultSpecifier: 'ImportDefaultSpecifier',
		    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
		    ImportSpecifier: 'ImportSpecifier',
		    Literal: 'Literal',
		    LabeledStatement: 'LabeledStatement',
		    LogicalExpression: 'LogicalExpression',
		    MemberExpression: 'MemberExpression',
		    MetaProperty: 'MetaProperty',
		    MethodDefinition: 'MethodDefinition',
		    NewExpression: 'NewExpression',
		    ObjectExpression: 'ObjectExpression',
		    ObjectPattern: 'ObjectPattern',
		    Program: 'Program',
		    Property: 'Property',
		    RestElement: 'RestElement',
		    ReturnStatement: 'ReturnStatement',
		    SequenceExpression: 'SequenceExpression',
		    SpreadElement: 'SpreadElement',
		    Super: 'Super',
		    SwitchCase: 'SwitchCase',
		    SwitchStatement: 'SwitchStatement',
		    TaggedTemplateExpression: 'TaggedTemplateExpression',
		    TemplateElement: 'TemplateElement',
		    TemplateLiteral: 'TemplateLiteral',
		    ThisExpression: 'ThisExpression',
		    ThrowStatement: 'ThrowStatement',
		    TryStatement: 'TryStatement',
		    UnaryExpression: 'UnaryExpression',
		    UpdateExpression: 'UpdateExpression',
		    VariableDeclaration: 'VariableDeclaration',
		    VariableDeclarator: 'VariableDeclarator',
		    WhileStatement: 'WhileStatement',
		    WithStatement: 'WithStatement',
		    YieldExpression: 'YieldExpression'
		};
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	/* istanbul ignore next */
		var __extends = (this && this.__extends) || (function () {
		    var extendStatics = Object.setPrototypeOf ||
		        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
		        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
		    return function (d, b) {
		        extendStatics(d, b);
		        function __() { this.constructor = d; }
		        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
		    };
		})();
		Object.defineProperty(exports, "__esModule", { value: true });
		var character_1 = __webpack_require__(4);
		var JSXNode = __webpack_require__(5);
		var jsx_syntax_1 = __webpack_require__(6);
		var Node = __webpack_require__(7);
		var parser_1 = __webpack_require__(8);
		var token_1 = __webpack_require__(13);
		var xhtml_entities_1 = __webpack_require__(14);
		token_1.TokenName[100 /* Identifier */] = 'JSXIdentifier';
		token_1.TokenName[101 /* Text */] = 'JSXText';
		// Fully qualified element name, e.g. <svg:path> returns "svg:path"
		function getQualifiedElementName(elementName) {
		    var qualifiedName;
		    switch (elementName.type) {
		        case jsx_syntax_1.JSXSyntax.JSXIdentifier:
		            var id = elementName;
		            qualifiedName = id.name;
		            break;
		        case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
		            var ns = elementName;
		            qualifiedName = getQualifiedElementName(ns.namespace) + ':' +
		                getQualifiedElementName(ns.name);
		            break;
		        case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
		            var expr = elementName;
		            qualifiedName = getQualifiedElementName(expr.object) + '.' +
		                getQualifiedElementName(expr.property);
		            break;
		        /* istanbul ignore next */
		        default:
		            break;
		    }
		    return qualifiedName;
		}
		var JSXParser = (function (_super) {
		    __extends(JSXParser, _super);
		    function JSXParser(code, options, delegate) {
		        return _super.call(this, code, options, delegate) || this;
		    }
		    JSXParser.prototype.parsePrimaryExpression = function () {
		        return this.match('<') ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
		    };
		    JSXParser.prototype.startJSX = function () {
		        // Unwind the scanner before the lookahead token.
		        this.scanner.index = this.startMarker.index;
		        this.scanner.lineNumber = this.startMarker.line;
		        this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
		    };
		    JSXParser.prototype.finishJSX = function () {
		        // Prime the next lookahead.
		        this.nextToken();
		    };
		    JSXParser.prototype.reenterJSX = function () {
		        this.startJSX();
		        this.expectJSX('}');
		        // Pop the closing '}' added from the lookahead.
		        if (this.config.tokens) {
		            this.tokens.pop();
		        }
		    };
		    JSXParser.prototype.createJSXNode = function () {
		        this.collectComments();
		        return {
		            index: this.scanner.index,
		            line: this.scanner.lineNumber,
		            column: this.scanner.index - this.scanner.lineStart
		        };
		    };
		    JSXParser.prototype.createJSXChildNode = function () {
		        return {
		            index: this.scanner.index,
		            line: this.scanner.lineNumber,
		            column: this.scanner.index - this.scanner.lineStart
		        };
		    };
		    JSXParser.prototype.scanXHTMLEntity = function (quote) {
		        var result = '&';
		        var valid = true;
		        var terminated = false;
		        var numeric = false;
		        var hex = false;
		        while (!this.scanner.eof() && valid && !terminated) {
		            var ch = this.scanner.source[this.scanner.index];
		            if (ch === quote) {
		                break;
		            }
		            terminated = (ch === ';');
		            result += ch;
		            ++this.scanner.index;
		            if (!terminated) {
		                switch (result.length) {
		                    case 2:
		                        // e.g. '&#123;'
		                        numeric = (ch === '#');
		                        break;
		                    case 3:
		                        if (numeric) {
		                            // e.g. '&#x41;'
		                            hex = (ch === 'x');
		                            valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
		                            numeric = numeric && !hex;
		                        }
		                        break;
		                    default:
		                        valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
		                        valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
		                        break;
		                }
		            }
		        }
		        if (valid && terminated && result.length > 2) {
		            // e.g. '&#x41;' becomes just '#x41'
		            var str = result.substr(1, result.length - 2);
		            if (numeric && str.length > 1) {
		                result = String.fromCharCode(parseInt(str.substr(1), 10));
		            }
		            else if (hex && str.length > 2) {
		                result = String.fromCharCode(parseInt('0' + str.substr(1), 16));
		            }
		            else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
		                result = xhtml_entities_1.XHTMLEntities[str];
		            }
		        }
		        return result;
		    };
		    // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.
		    JSXParser.prototype.lexJSX = function () {
		        var cp = this.scanner.source.charCodeAt(this.scanner.index);
		        // < > / : = { }
		        if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
		            var value = this.scanner.source[this.scanner.index++];
		            return {
		                type: 7 /* Punctuator */,
		                value: value,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: this.scanner.index - 1,
		                end: this.scanner.index
		            };
		        }
		        // " '
		        if (cp === 34 || cp === 39) {
		            var start = this.scanner.index;
		            var quote = this.scanner.source[this.scanner.index++];
		            var str = '';
		            while (!this.scanner.eof()) {
		                var ch = this.scanner.source[this.scanner.index++];
		                if (ch === quote) {
		                    break;
		                }
		                else if (ch === '&') {
		                    str += this.scanXHTMLEntity(quote);
		                }
		                else {
		                    str += ch;
		                }
		            }
		            return {
		                type: 8 /* StringLiteral */,
		                value: str,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: start,
		                end: this.scanner.index
		            };
		        }
		        // ... or .
		        if (cp === 46) {
		            var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
		            var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
		            var value = (n1 === 46 && n2 === 46) ? '...' : '.';
		            var start = this.scanner.index;
		            this.scanner.index += value.length;
		            return {
		                type: 7 /* Punctuator */,
		                value: value,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: start,
		                end: this.scanner.index
		            };
		        }
		        // `
		        if (cp === 96) {
		            // Only placeholder, since it will be rescanned as a real assignment expression.
		            return {
		                type: 10 /* Template */,
		                value: '',
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: this.scanner.index,
		                end: this.scanner.index
		            };
		        }
		        // Identifer can not contain backslash (char code 92).
		        if (character_1.Character.isIdentifierStart(cp) && (cp !== 92)) {
		            var start = this.scanner.index;
		            ++this.scanner.index;
		            while (!this.scanner.eof()) {
		                var ch = this.scanner.source.charCodeAt(this.scanner.index);
		                if (character_1.Character.isIdentifierPart(ch) && (ch !== 92)) {
		                    ++this.scanner.index;
		                }
		                else if (ch === 45) {
		                    // Hyphen (char code 45) can be part of an identifier.
		                    ++this.scanner.index;
		                }
		                else {
		                    break;
		                }
		            }
		            var id = this.scanner.source.slice(start, this.scanner.index);
		            return {
		                type: 100 /* Identifier */,
		                value: id,
		                lineNumber: this.scanner.lineNumber,
		                lineStart: this.scanner.lineStart,
		                start: start,
		                end: this.scanner.index
		            };
		        }
		        return this.scanner.lex();
		    };
		    JSXParser.prototype.nextJSXToken = function () {
		        this.collectComments();
		        this.startMarker.index = this.scanner.index;
		        this.startMarker.line = this.scanner.lineNumber;
		        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
		        var token = this.lexJSX();
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.line = this.scanner.lineNumber;
		        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
		        if (this.config.tokens) {
		            this.tokens.push(this.convertToken(token));
		        }
		        return token;
		    };
		    JSXParser.prototype.nextJSXText = function () {
		        this.startMarker.index = this.scanner.index;
		        this.startMarker.line = this.scanner.lineNumber;
		        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
		        var start = this.scanner.index;
		        var text = '';
		        while (!this.scanner.eof()) {
		            var ch = this.scanner.source[this.scanner.index];
		            if (ch === '{' || ch === '<') {
		                break;
		            }
		            ++this.scanner.index;
		            text += ch;
		            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                ++this.scanner.lineNumber;
		                if (ch === '\r' && this.scanner.source[this.scanner.index] === '\n') {
		                    ++this.scanner.index;
		                }
		                this.scanner.lineStart = this.scanner.index;
		            }
		        }
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.line = this.scanner.lineNumber;
		        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
		        var token = {
		            type: 101 /* Text */,
		            value: text,
		            lineNumber: this.scanner.lineNumber,
		            lineStart: this.scanner.lineStart,
		            start: start,
		            end: this.scanner.index
		        };
		        if ((text.length > 0) && this.config.tokens) {
		            this.tokens.push(this.convertToken(token));
		        }
		        return token;
		    };
		    JSXParser.prototype.peekJSXToken = function () {
		        var state = this.scanner.saveState();
		        this.scanner.scanComments();
		        var next = this.lexJSX();
		        this.scanner.restoreState(state);
		        return next;
		    };
		    // Expect the next JSX token to match the specified punctuator.
		    // If not, an exception will be thrown.
		    JSXParser.prototype.expectJSX = function (value) {
		        var token = this.nextJSXToken();
		        if (token.type !== 7 /* Punctuator */ || token.value !== value) {
		            this.throwUnexpectedToken(token);
		        }
		    };
		    // Return true if the next JSX token matches the specified punctuator.
		    JSXParser.prototype.matchJSX = function (value) {
		        var next = this.peekJSXToken();
		        return next.type === 7 /* Punctuator */ && next.value === value;
		    };
		    JSXParser.prototype.parseJSXIdentifier = function () {
		        var node = this.createJSXNode();
		        var token = this.nextJSXToken();
		        if (token.type !== 100 /* Identifier */) {
		            this.throwUnexpectedToken(token);
		        }
		        return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
		    };
		    JSXParser.prototype.parseJSXElementName = function () {
		        var node = this.createJSXNode();
		        var elementName = this.parseJSXIdentifier();
		        if (this.matchJSX(':')) {
		            var namespace = elementName;
		            this.expectJSX(':');
		            var name_1 = this.parseJSXIdentifier();
		            elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
		        }
		        else if (this.matchJSX('.')) {
		            while (this.matchJSX('.')) {
		                var object = elementName;
		                this.expectJSX('.');
		                var property = this.parseJSXIdentifier();
		                elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
		            }
		        }
		        return elementName;
		    };
		    JSXParser.prototype.parseJSXAttributeName = function () {
		        var node = this.createJSXNode();
		        var attributeName;
		        var identifier = this.parseJSXIdentifier();
		        if (this.matchJSX(':')) {
		            var namespace = identifier;
		            this.expectJSX(':');
		            var name_2 = this.parseJSXIdentifier();
		            attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
		        }
		        else {
		            attributeName = identifier;
		        }
		        return attributeName;
		    };
		    JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
		        var node = this.createJSXNode();
		        var token = this.nextJSXToken();
		        if (token.type !== 8 /* StringLiteral */) {
		            this.throwUnexpectedToken(token);
		        }
		        var raw = this.getTokenRaw(token);
		        return this.finalize(node, new Node.Literal(token.value, raw));
		    };
		    JSXParser.prototype.parseJSXExpressionAttribute = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('{');
		        this.finishJSX();
		        if (this.match('}')) {
		            this.tolerateError('JSX attributes must only be assigned a non-empty expression');
		        }
		        var expression = this.parseAssignmentExpression();
		        this.reenterJSX();
		        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
		    };
		    JSXParser.prototype.parseJSXAttributeValue = function () {
		        return this.matchJSX('{') ? this.parseJSXExpressionAttribute() :
		            this.matchJSX('<') ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
		    };
		    JSXParser.prototype.parseJSXNameValueAttribute = function () {
		        var node = this.createJSXNode();
		        var name = this.parseJSXAttributeName();
		        var value = null;
		        if (this.matchJSX('=')) {
		            this.expectJSX('=');
		            value = this.parseJSXAttributeValue();
		        }
		        return this.finalize(node, new JSXNode.JSXAttribute(name, value));
		    };
		    JSXParser.prototype.parseJSXSpreadAttribute = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('{');
		        this.expectJSX('...');
		        this.finishJSX();
		        var argument = this.parseAssignmentExpression();
		        this.reenterJSX();
		        return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
		    };
		    JSXParser.prototype.parseJSXAttributes = function () {
		        var attributes = [];
		        while (!this.matchJSX('/') && !this.matchJSX('>')) {
		            var attribute = this.matchJSX('{') ? this.parseJSXSpreadAttribute() :
		                this.parseJSXNameValueAttribute();
		            attributes.push(attribute);
		        }
		        return attributes;
		    };
		    JSXParser.prototype.parseJSXOpeningElement = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('<');
		        var name = this.parseJSXElementName();
		        var attributes = this.parseJSXAttributes();
		        var selfClosing = this.matchJSX('/');
		        if (selfClosing) {
		            this.expectJSX('/');
		        }
		        this.expectJSX('>');
		        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
		    };
		    JSXParser.prototype.parseJSXBoundaryElement = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('<');
		        if (this.matchJSX('/')) {
		            this.expectJSX('/');
		            var name_3 = this.parseJSXElementName();
		            this.expectJSX('>');
		            return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
		        }
		        var name = this.parseJSXElementName();
		        var attributes = this.parseJSXAttributes();
		        var selfClosing = this.matchJSX('/');
		        if (selfClosing) {
		            this.expectJSX('/');
		        }
		        this.expectJSX('>');
		        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
		    };
		    JSXParser.prototype.parseJSXEmptyExpression = function () {
		        var node = this.createJSXChildNode();
		        this.collectComments();
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.line = this.scanner.lineNumber;
		        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
		        return this.finalize(node, new JSXNode.JSXEmptyExpression());
		    };
		    JSXParser.prototype.parseJSXExpressionContainer = function () {
		        var node = this.createJSXNode();
		        this.expectJSX('{');
		        var expression;
		        if (this.matchJSX('}')) {
		            expression = this.parseJSXEmptyExpression();
		            this.expectJSX('}');
		        }
		        else {
		            this.finishJSX();
		            expression = this.parseAssignmentExpression();
		            this.reenterJSX();
		        }
		        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
		    };
		    JSXParser.prototype.parseJSXChildren = function () {
		        var children = [];
		        while (!this.scanner.eof()) {
		            var node = this.createJSXChildNode();
		            var token = this.nextJSXText();
		            if (token.start < token.end) {
		                var raw = this.getTokenRaw(token);
		                var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
		                children.push(child);
		            }
		            if (this.scanner.source[this.scanner.index] === '{') {
		                var container = this.parseJSXExpressionContainer();
		                children.push(container);
		            }
		            else {
		                break;
		            }
		        }
		        return children;
		    };
		    JSXParser.prototype.parseComplexJSXElement = function (el) {
		        var stack = [];
		        while (!this.scanner.eof()) {
		            el.children = el.children.concat(this.parseJSXChildren());
		            var node = this.createJSXChildNode();
		            var element = this.parseJSXBoundaryElement();
		            if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
		                var opening = element;
		                if (opening.selfClosing) {
		                    var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
		                    el.children.push(child);
		                }
		                else {
		                    stack.push(el);
		                    el = { node: node, opening: opening, closing: null, children: [] };
		                }
		            }
		            if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
		                el.closing = element;
		                var open_1 = getQualifiedElementName(el.opening.name);
		                var close_1 = getQualifiedElementName(el.closing.name);
		                if (open_1 !== close_1) {
		                    this.tolerateError('Expected corresponding JSX closing tag for %0', open_1);
		                }
		                if (stack.length > 0) {
		                    var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
		                    el = stack[stack.length - 1];
		                    el.children.push(child);
		                    stack.pop();
		                }
		                else {
		                    break;
		                }
		            }
		        }
		        return el;
		    };
		    JSXParser.prototype.parseJSXElement = function () {
		        var node = this.createJSXNode();
		        var opening = this.parseJSXOpeningElement();
		        var children = [];
		        var closing = null;
		        if (!opening.selfClosing) {
		            var el = this.parseComplexJSXElement({ node: node, opening: opening, closing: closing, children: children });
		            children = el.children;
		            closing = el.closing;
		        }
		        return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
		    };
		    JSXParser.prototype.parseJSXRoot = function () {
		        // Pop the opening '<' added from the lookahead.
		        if (this.config.tokens) {
		            this.tokens.pop();
		        }
		        this.startJSX();
		        var element = this.parseJSXElement();
		        this.finishJSX();
		        return element;
		    };
		    JSXParser.prototype.isStartOfExpression = function () {
		        return _super.prototype.isStartOfExpression.call(this) || this.match('<');
		    };
		    return JSXParser;
		}(parser_1.Parser));
		exports.JSXParser = JSXParser;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		// See also tools/generate-unicode-regex.js.
		var Regex = {
		    // Unicode v8.0.0 NonAsciiIdentifierStart:
		    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
		    // Unicode v8.0.0 NonAsciiIdentifierPart:
		    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
		};
		exports.Character = {
		    /* tslint:disable:no-bitwise */
		    fromCodePoint: function (cp) {
		        return (cp < 0x10000) ? String.fromCharCode(cp) :
		            String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) +
		                String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
		    },
		    // https://tc39.github.io/ecma262/#sec-white-space
		    isWhiteSpace: function (cp) {
		        return (cp === 0x20) || (cp === 0x09) || (cp === 0x0B) || (cp === 0x0C) || (cp === 0xA0) ||
		            (cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0);
		    },
		    // https://tc39.github.io/ecma262/#sec-line-terminators
		    isLineTerminator: function (cp) {
		        return (cp === 0x0A) || (cp === 0x0D) || (cp === 0x2028) || (cp === 0x2029);
		    },
		    // https://tc39.github.io/ecma262/#sec-names-and-keywords
		    isIdentifierStart: function (cp) {
		        return (cp === 0x24) || (cp === 0x5F) ||
		            (cp >= 0x41 && cp <= 0x5A) ||
		            (cp >= 0x61 && cp <= 0x7A) ||
		            (cp === 0x5C) ||
		            ((cp >= 0x80) && Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp)));
		    },
		    isIdentifierPart: function (cp) {
		        return (cp === 0x24) || (cp === 0x5F) ||
		            (cp >= 0x41 && cp <= 0x5A) ||
		            (cp >= 0x61 && cp <= 0x7A) ||
		            (cp >= 0x30 && cp <= 0x39) ||
		            (cp === 0x5C) ||
		            ((cp >= 0x80) && Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp)));
		    },
		    // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
		    isDecimalDigit: function (cp) {
		        return (cp >= 0x30 && cp <= 0x39); // 0..9
		    },
		    isHexDigit: function (cp) {
		        return (cp >= 0x30 && cp <= 0x39) ||
		            (cp >= 0x41 && cp <= 0x46) ||
		            (cp >= 0x61 && cp <= 0x66); // a..f
		    },
		    isOctalDigit: function (cp) {
		        return (cp >= 0x30 && cp <= 0x37); // 0..7
		    }
		};
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		var jsx_syntax_1 = __webpack_require__(6);
		/* tslint:disable:max-classes-per-file */
		var JSXClosingElement = (function () {
		    function JSXClosingElement(name) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
		        this.name = name;
		    }
		    return JSXClosingElement;
		}());
		exports.JSXClosingElement = JSXClosingElement;
		var JSXElement = (function () {
		    function JSXElement(openingElement, children, closingElement) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXElement;
		        this.openingElement = openingElement;
		        this.children = children;
		        this.closingElement = closingElement;
		    }
		    return JSXElement;
		}());
		exports.JSXElement = JSXElement;
		var JSXEmptyExpression = (function () {
		    function JSXEmptyExpression() {
		        this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
		    }
		    return JSXEmptyExpression;
		}());
		exports.JSXEmptyExpression = JSXEmptyExpression;
		var JSXExpressionContainer = (function () {
		    function JSXExpressionContainer(expression) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
		        this.expression = expression;
		    }
		    return JSXExpressionContainer;
		}());
		exports.JSXExpressionContainer = JSXExpressionContainer;
		var JSXIdentifier = (function () {
		    function JSXIdentifier(name) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
		        this.name = name;
		    }
		    return JSXIdentifier;
		}());
		exports.JSXIdentifier = JSXIdentifier;
		var JSXMemberExpression = (function () {
		    function JSXMemberExpression(object, property) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
		        this.object = object;
		        this.property = property;
		    }
		    return JSXMemberExpression;
		}());
		exports.JSXMemberExpression = JSXMemberExpression;
		var JSXAttribute = (function () {
		    function JSXAttribute(name, value) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
		        this.name = name;
		        this.value = value;
		    }
		    return JSXAttribute;
		}());
		exports.JSXAttribute = JSXAttribute;
		var JSXNamespacedName = (function () {
		    function JSXNamespacedName(namespace, name) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
		        this.namespace = namespace;
		        this.name = name;
		    }
		    return JSXNamespacedName;
		}());
		exports.JSXNamespacedName = JSXNamespacedName;
		var JSXOpeningElement = (function () {
		    function JSXOpeningElement(name, selfClosing, attributes) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
		        this.name = name;
		        this.selfClosing = selfClosing;
		        this.attributes = attributes;
		    }
		    return JSXOpeningElement;
		}());
		exports.JSXOpeningElement = JSXOpeningElement;
		var JSXSpreadAttribute = (function () {
		    function JSXSpreadAttribute(argument) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
		        this.argument = argument;
		    }
		    return JSXSpreadAttribute;
		}());
		exports.JSXSpreadAttribute = JSXSpreadAttribute;
		var JSXText = (function () {
		    function JSXText(value, raw) {
		        this.type = jsx_syntax_1.JSXSyntax.JSXText;
		        this.value = value;
		        this.raw = raw;
		    }
		    return JSXText;
		}());
		exports.JSXText = JSXText;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.JSXSyntax = {
		    JSXAttribute: 'JSXAttribute',
		    JSXClosingElement: 'JSXClosingElement',
		    JSXElement: 'JSXElement',
		    JSXEmptyExpression: 'JSXEmptyExpression',
		    JSXExpressionContainer: 'JSXExpressionContainer',
		    JSXIdentifier: 'JSXIdentifier',
		    JSXMemberExpression: 'JSXMemberExpression',
		    JSXNamespacedName: 'JSXNamespacedName',
		    JSXOpeningElement: 'JSXOpeningElement',
		    JSXSpreadAttribute: 'JSXSpreadAttribute',
		    JSXText: 'JSXText'
		};
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		var syntax_1 = __webpack_require__(2);
		/* tslint:disable:max-classes-per-file */
		var ArrayExpression = (function () {
		    function ArrayExpression(elements) {
		        this.type = syntax_1.Syntax.ArrayExpression;
		        this.elements = elements;
		    }
		    return ArrayExpression;
		}());
		exports.ArrayExpression = ArrayExpression;
		var ArrayPattern = (function () {
		    function ArrayPattern(elements) {
		        this.type = syntax_1.Syntax.ArrayPattern;
		        this.elements = elements;
		    }
		    return ArrayPattern;
		}());
		exports.ArrayPattern = ArrayPattern;
		var ArrowFunctionExpression = (function () {
		    function ArrowFunctionExpression(params, body, expression) {
		        this.type = syntax_1.Syntax.ArrowFunctionExpression;
		        this.id = null;
		        this.params = params;
		        this.body = body;
		        this.generator = false;
		        this.expression = expression;
		        this.async = false;
		    }
		    return ArrowFunctionExpression;
		}());
		exports.ArrowFunctionExpression = ArrowFunctionExpression;
		var AssignmentExpression = (function () {
		    function AssignmentExpression(operator, left, right) {
		        this.type = syntax_1.Syntax.AssignmentExpression;
		        this.operator = operator;
		        this.left = left;
		        this.right = right;
		    }
		    return AssignmentExpression;
		}());
		exports.AssignmentExpression = AssignmentExpression;
		var AssignmentPattern = (function () {
		    function AssignmentPattern(left, right) {
		        this.type = syntax_1.Syntax.AssignmentPattern;
		        this.left = left;
		        this.right = right;
		    }
		    return AssignmentPattern;
		}());
		exports.AssignmentPattern = AssignmentPattern;
		var AsyncArrowFunctionExpression = (function () {
		    function AsyncArrowFunctionExpression(params, body, expression) {
		        this.type = syntax_1.Syntax.ArrowFunctionExpression;
		        this.id = null;
		        this.params = params;
		        this.body = body;
		        this.generator = false;
		        this.expression = expression;
		        this.async = true;
		    }
		    return AsyncArrowFunctionExpression;
		}());
		exports.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
		var AsyncFunctionDeclaration = (function () {
		    function AsyncFunctionDeclaration(id, params, body) {
		        this.type = syntax_1.Syntax.FunctionDeclaration;
		        this.id = id;
		        this.params = params;
		        this.body = body;
		        this.generator = false;
		        this.expression = false;
		        this.async = true;
		    }
		    return AsyncFunctionDeclaration;
		}());
		exports.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
		var AsyncFunctionExpression = (function () {
		    function AsyncFunctionExpression(id, params, body) {
		        this.type = syntax_1.Syntax.FunctionExpression;
		        this.id = id;
		        this.params = params;
		        this.body = body;
		        this.generator = false;
		        this.expression = false;
		        this.async = true;
		    }
		    return AsyncFunctionExpression;
		}());
		exports.AsyncFunctionExpression = AsyncFunctionExpression;
		var AwaitExpression = (function () {
		    function AwaitExpression(argument) {
		        this.type = syntax_1.Syntax.AwaitExpression;
		        this.argument = argument;
		    }
		    return AwaitExpression;
		}());
		exports.AwaitExpression = AwaitExpression;
		var BinaryExpression = (function () {
		    function BinaryExpression(operator, left, right) {
		        var logical = (operator === '||' || operator === '&&');
		        this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
		        this.operator = operator;
		        this.left = left;
		        this.right = right;
		    }
		    return BinaryExpression;
		}());
		exports.BinaryExpression = BinaryExpression;
		var BlockStatement = (function () {
		    function BlockStatement(body) {
		        this.type = syntax_1.Syntax.BlockStatement;
		        this.body = body;
		    }
		    return BlockStatement;
		}());
		exports.BlockStatement = BlockStatement;
		var BreakStatement = (function () {
		    function BreakStatement(label) {
		        this.type = syntax_1.Syntax.BreakStatement;
		        this.label = label;
		    }
		    return BreakStatement;
		}());
		exports.BreakStatement = BreakStatement;
		var CallExpression = (function () {
		    function CallExpression(callee, args) {
		        this.type = syntax_1.Syntax.CallExpression;
		        this.callee = callee;
		        this.arguments = args;
		    }
		    return CallExpression;
		}());
		exports.CallExpression = CallExpression;
		var CatchClause = (function () {
		    function CatchClause(param, body) {
		        this.type = syntax_1.Syntax.CatchClause;
		        this.param = param;
		        this.body = body;
		    }
		    return CatchClause;
		}());
		exports.CatchClause = CatchClause;
		var ClassBody = (function () {
		    function ClassBody(body) {
		        this.type = syntax_1.Syntax.ClassBody;
		        this.body = body;
		    }
		    return ClassBody;
		}());
		exports.ClassBody = ClassBody;
		var ClassDeclaration = (function () {
		    function ClassDeclaration(id, superClass, body) {
		        this.type = syntax_1.Syntax.ClassDeclaration;
		        this.id = id;
		        this.superClass = superClass;
		        this.body = body;
		    }
		    return ClassDeclaration;
		}());
		exports.ClassDeclaration = ClassDeclaration;
		var ClassExpression = (function () {
		    function ClassExpression(id, superClass, body) {
		        this.type = syntax_1.Syntax.ClassExpression;
		        this.id = id;
		        this.superClass = superClass;
		        this.body = body;
		    }
		    return ClassExpression;
		}());
		exports.ClassExpression = ClassExpression;
		var ComputedMemberExpression = (function () {
		    function ComputedMemberExpression(object, property) {
		        this.type = syntax_1.Syntax.MemberExpression;
		        this.computed = true;
		        this.object = object;
		        this.property = property;
		    }
		    return ComputedMemberExpression;
		}());
		exports.ComputedMemberExpression = ComputedMemberExpression;
		var ConditionalExpression = (function () {
		    function ConditionalExpression(test, consequent, alternate) {
		        this.type = syntax_1.Syntax.ConditionalExpression;
		        this.test = test;
		        this.consequent = consequent;
		        this.alternate = alternate;
		    }
		    return ConditionalExpression;
		}());
		exports.ConditionalExpression = ConditionalExpression;
		var ContinueStatement = (function () {
		    function ContinueStatement(label) {
		        this.type = syntax_1.Syntax.ContinueStatement;
		        this.label = label;
		    }
		    return ContinueStatement;
		}());
		exports.ContinueStatement = ContinueStatement;
		var DebuggerStatement = (function () {
		    function DebuggerStatement() {
		        this.type = syntax_1.Syntax.DebuggerStatement;
		    }
		    return DebuggerStatement;
		}());
		exports.DebuggerStatement = DebuggerStatement;
		var Directive = (function () {
		    function Directive(expression, directive) {
		        this.type = syntax_1.Syntax.ExpressionStatement;
		        this.expression = expression;
		        this.directive = directive;
		    }
		    return Directive;
		}());
		exports.Directive = Directive;
		var DoWhileStatement = (function () {
		    function DoWhileStatement(body, test) {
		        this.type = syntax_1.Syntax.DoWhileStatement;
		        this.body = body;
		        this.test = test;
		    }
		    return DoWhileStatement;
		}());
		exports.DoWhileStatement = DoWhileStatement;
		var EmptyStatement = (function () {
		    function EmptyStatement() {
		        this.type = syntax_1.Syntax.EmptyStatement;
		    }
		    return EmptyStatement;
		}());
		exports.EmptyStatement = EmptyStatement;
		var ExportAllDeclaration = (function () {
		    function ExportAllDeclaration(source) {
		        this.type = syntax_1.Syntax.ExportAllDeclaration;
		        this.source = source;
		    }
		    return ExportAllDeclaration;
		}());
		exports.ExportAllDeclaration = ExportAllDeclaration;
		var ExportDefaultDeclaration = (function () {
		    function ExportDefaultDeclaration(declaration) {
		        this.type = syntax_1.Syntax.ExportDefaultDeclaration;
		        this.declaration = declaration;
		    }
		    return ExportDefaultDeclaration;
		}());
		exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
		var ExportNamedDeclaration = (function () {
		    function ExportNamedDeclaration(declaration, specifiers, source) {
		        this.type = syntax_1.Syntax.ExportNamedDeclaration;
		        this.declaration = declaration;
		        this.specifiers = specifiers;
		        this.source = source;
		    }
		    return ExportNamedDeclaration;
		}());
		exports.ExportNamedDeclaration = ExportNamedDeclaration;
		var ExportSpecifier = (function () {
		    function ExportSpecifier(local, exported) {
		        this.type = syntax_1.Syntax.ExportSpecifier;
		        this.exported = exported;
		        this.local = local;
		    }
		    return ExportSpecifier;
		}());
		exports.ExportSpecifier = ExportSpecifier;
		var ExpressionStatement = (function () {
		    function ExpressionStatement(expression) {
		        this.type = syntax_1.Syntax.ExpressionStatement;
		        this.expression = expression;
		    }
		    return ExpressionStatement;
		}());
		exports.ExpressionStatement = ExpressionStatement;
		var ForInStatement = (function () {
		    function ForInStatement(left, right, body) {
		        this.type = syntax_1.Syntax.ForInStatement;
		        this.left = left;
		        this.right = right;
		        this.body = body;
		        this.each = false;
		    }
		    return ForInStatement;
		}());
		exports.ForInStatement = ForInStatement;
		var ForOfStatement = (function () {
		    function ForOfStatement(left, right, body) {
		        this.type = syntax_1.Syntax.ForOfStatement;
		        this.left = left;
		        this.right = right;
		        this.body = body;
		    }
		    return ForOfStatement;
		}());
		exports.ForOfStatement = ForOfStatement;
		var ForStatement = (function () {
		    function ForStatement(init, test, update, body) {
		        this.type = syntax_1.Syntax.ForStatement;
		        this.init = init;
		        this.test = test;
		        this.update = update;
		        this.body = body;
		    }
		    return ForStatement;
		}());
		exports.ForStatement = ForStatement;
		var FunctionDeclaration = (function () {
		    function FunctionDeclaration(id, params, body, generator) {
		        this.type = syntax_1.Syntax.FunctionDeclaration;
		        this.id = id;
		        this.params = params;
		        this.body = body;
		        this.generator = generator;
		        this.expression = false;
		        this.async = false;
		    }
		    return FunctionDeclaration;
		}());
		exports.FunctionDeclaration = FunctionDeclaration;
		var FunctionExpression = (function () {
		    function FunctionExpression(id, params, body, generator) {
		        this.type = syntax_1.Syntax.FunctionExpression;
		        this.id = id;
		        this.params = params;
		        this.body = body;
		        this.generator = generator;
		        this.expression = false;
		        this.async = false;
		    }
		    return FunctionExpression;
		}());
		exports.FunctionExpression = FunctionExpression;
		var Identifier = (function () {
		    function Identifier(name) {
		        this.type = syntax_1.Syntax.Identifier;
		        this.name = name;
		    }
		    return Identifier;
		}());
		exports.Identifier = Identifier;
		var IfStatement = (function () {
		    function IfStatement(test, consequent, alternate) {
		        this.type = syntax_1.Syntax.IfStatement;
		        this.test = test;
		        this.consequent = consequent;
		        this.alternate = alternate;
		    }
		    return IfStatement;
		}());
		exports.IfStatement = IfStatement;
		var ImportDeclaration = (function () {
		    function ImportDeclaration(specifiers, source) {
		        this.type = syntax_1.Syntax.ImportDeclaration;
		        this.specifiers = specifiers;
		        this.source = source;
		    }
		    return ImportDeclaration;
		}());
		exports.ImportDeclaration = ImportDeclaration;
		var ImportDefaultSpecifier = (function () {
		    function ImportDefaultSpecifier(local) {
		        this.type = syntax_1.Syntax.ImportDefaultSpecifier;
		        this.local = local;
		    }
		    return ImportDefaultSpecifier;
		}());
		exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
		var ImportNamespaceSpecifier = (function () {
		    function ImportNamespaceSpecifier(local) {
		        this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
		        this.local = local;
		    }
		    return ImportNamespaceSpecifier;
		}());
		exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
		var ImportSpecifier = (function () {
		    function ImportSpecifier(local, imported) {
		        this.type = syntax_1.Syntax.ImportSpecifier;
		        this.local = local;
		        this.imported = imported;
		    }
		    return ImportSpecifier;
		}());
		exports.ImportSpecifier = ImportSpecifier;
		var LabeledStatement = (function () {
		    function LabeledStatement(label, body) {
		        this.type = syntax_1.Syntax.LabeledStatement;
		        this.label = label;
		        this.body = body;
		    }
		    return LabeledStatement;
		}());
		exports.LabeledStatement = LabeledStatement;
		var Literal = (function () {
		    function Literal(value, raw) {
		        this.type = syntax_1.Syntax.Literal;
		        this.value = value;
		        this.raw = raw;
		    }
		    return Literal;
		}());
		exports.Literal = Literal;
		var MetaProperty = (function () {
		    function MetaProperty(meta, property) {
		        this.type = syntax_1.Syntax.MetaProperty;
		        this.meta = meta;
		        this.property = property;
		    }
		    return MetaProperty;
		}());
		exports.MetaProperty = MetaProperty;
		var MethodDefinition = (function () {
		    function MethodDefinition(key, computed, value, kind, isStatic) {
		        this.type = syntax_1.Syntax.MethodDefinition;
		        this.key = key;
		        this.computed = computed;
		        this.value = value;
		        this.kind = kind;
		        this.static = isStatic;
		    }
		    return MethodDefinition;
		}());
		exports.MethodDefinition = MethodDefinition;
		var Module = (function () {
		    function Module(body) {
		        this.type = syntax_1.Syntax.Program;
		        this.body = body;
		        this.sourceType = 'module';
		    }
		    return Module;
		}());
		exports.Module = Module;
		var NewExpression = (function () {
		    function NewExpression(callee, args) {
		        this.type = syntax_1.Syntax.NewExpression;
		        this.callee = callee;
		        this.arguments = args;
		    }
		    return NewExpression;
		}());
		exports.NewExpression = NewExpression;
		var ObjectExpression = (function () {
		    function ObjectExpression(properties) {
		        this.type = syntax_1.Syntax.ObjectExpression;
		        this.properties = properties;
		    }
		    return ObjectExpression;
		}());
		exports.ObjectExpression = ObjectExpression;
		var ObjectPattern = (function () {
		    function ObjectPattern(properties) {
		        this.type = syntax_1.Syntax.ObjectPattern;
		        this.properties = properties;
		    }
		    return ObjectPattern;
		}());
		exports.ObjectPattern = ObjectPattern;
		var Property = (function () {
		    function Property(kind, key, computed, value, method, shorthand) {
		        this.type = syntax_1.Syntax.Property;
		        this.key = key;
		        this.computed = computed;
		        this.value = value;
		        this.kind = kind;
		        this.method = method;
		        this.shorthand = shorthand;
		    }
		    return Property;
		}());
		exports.Property = Property;
		var RegexLiteral = (function () {
		    function RegexLiteral(value, raw, pattern, flags) {
		        this.type = syntax_1.Syntax.Literal;
		        this.value = value;
		        this.raw = raw;
		        this.regex = { pattern: pattern, flags: flags };
		    }
		    return RegexLiteral;
		}());
		exports.RegexLiteral = RegexLiteral;
		var RestElement = (function () {
		    function RestElement(argument) {
		        this.type = syntax_1.Syntax.RestElement;
		        this.argument = argument;
		    }
		    return RestElement;
		}());
		exports.RestElement = RestElement;
		var ReturnStatement = (function () {
		    function ReturnStatement(argument) {
		        this.type = syntax_1.Syntax.ReturnStatement;
		        this.argument = argument;
		    }
		    return ReturnStatement;
		}());
		exports.ReturnStatement = ReturnStatement;
		var Script = (function () {
		    function Script(body) {
		        this.type = syntax_1.Syntax.Program;
		        this.body = body;
		        this.sourceType = 'script';
		    }
		    return Script;
		}());
		exports.Script = Script;
		var SequenceExpression = (function () {
		    function SequenceExpression(expressions) {
		        this.type = syntax_1.Syntax.SequenceExpression;
		        this.expressions = expressions;
		    }
		    return SequenceExpression;
		}());
		exports.SequenceExpression = SequenceExpression;
		var SpreadElement = (function () {
		    function SpreadElement(argument) {
		        this.type = syntax_1.Syntax.SpreadElement;
		        this.argument = argument;
		    }
		    return SpreadElement;
		}());
		exports.SpreadElement = SpreadElement;
		var StaticMemberExpression = (function () {
		    function StaticMemberExpression(object, property) {
		        this.type = syntax_1.Syntax.MemberExpression;
		        this.computed = false;
		        this.object = object;
		        this.property = property;
		    }
		    return StaticMemberExpression;
		}());
		exports.StaticMemberExpression = StaticMemberExpression;
		var Super = (function () {
		    function Super() {
		        this.type = syntax_1.Syntax.Super;
		    }
		    return Super;
		}());
		exports.Super = Super;
		var SwitchCase = (function () {
		    function SwitchCase(test, consequent) {
		        this.type = syntax_1.Syntax.SwitchCase;
		        this.test = test;
		        this.consequent = consequent;
		    }
		    return SwitchCase;
		}());
		exports.SwitchCase = SwitchCase;
		var SwitchStatement = (function () {
		    function SwitchStatement(discriminant, cases) {
		        this.type = syntax_1.Syntax.SwitchStatement;
		        this.discriminant = discriminant;
		        this.cases = cases;
		    }
		    return SwitchStatement;
		}());
		exports.SwitchStatement = SwitchStatement;
		var TaggedTemplateExpression = (function () {
		    function TaggedTemplateExpression(tag, quasi) {
		        this.type = syntax_1.Syntax.TaggedTemplateExpression;
		        this.tag = tag;
		        this.quasi = quasi;
		    }
		    return TaggedTemplateExpression;
		}());
		exports.TaggedTemplateExpression = TaggedTemplateExpression;
		var TemplateElement = (function () {
		    function TemplateElement(value, tail) {
		        this.type = syntax_1.Syntax.TemplateElement;
		        this.value = value;
		        this.tail = tail;
		    }
		    return TemplateElement;
		}());
		exports.TemplateElement = TemplateElement;
		var TemplateLiteral = (function () {
		    function TemplateLiteral(quasis, expressions) {
		        this.type = syntax_1.Syntax.TemplateLiteral;
		        this.quasis = quasis;
		        this.expressions = expressions;
		    }
		    return TemplateLiteral;
		}());
		exports.TemplateLiteral = TemplateLiteral;
		var ThisExpression = (function () {
		    function ThisExpression() {
		        this.type = syntax_1.Syntax.ThisExpression;
		    }
		    return ThisExpression;
		}());
		exports.ThisExpression = ThisExpression;
		var ThrowStatement = (function () {
		    function ThrowStatement(argument) {
		        this.type = syntax_1.Syntax.ThrowStatement;
		        this.argument = argument;
		    }
		    return ThrowStatement;
		}());
		exports.ThrowStatement = ThrowStatement;
		var TryStatement = (function () {
		    function TryStatement(block, handler, finalizer) {
		        this.type = syntax_1.Syntax.TryStatement;
		        this.block = block;
		        this.handler = handler;
		        this.finalizer = finalizer;
		    }
		    return TryStatement;
		}());
		exports.TryStatement = TryStatement;
		var UnaryExpression = (function () {
		    function UnaryExpression(operator, argument) {
		        this.type = syntax_1.Syntax.UnaryExpression;
		        this.operator = operator;
		        this.argument = argument;
		        this.prefix = true;
		    }
		    return UnaryExpression;
		}());
		exports.UnaryExpression = UnaryExpression;
		var UpdateExpression = (function () {
		    function UpdateExpression(operator, argument, prefix) {
		        this.type = syntax_1.Syntax.UpdateExpression;
		        this.operator = operator;
		        this.argument = argument;
		        this.prefix = prefix;
		    }
		    return UpdateExpression;
		}());
		exports.UpdateExpression = UpdateExpression;
		var VariableDeclaration = (function () {
		    function VariableDeclaration(declarations, kind) {
		        this.type = syntax_1.Syntax.VariableDeclaration;
		        this.declarations = declarations;
		        this.kind = kind;
		    }
		    return VariableDeclaration;
		}());
		exports.VariableDeclaration = VariableDeclaration;
		var VariableDeclarator = (function () {
		    function VariableDeclarator(id, init) {
		        this.type = syntax_1.Syntax.VariableDeclarator;
		        this.id = id;
		        this.init = init;
		    }
		    return VariableDeclarator;
		}());
		exports.VariableDeclarator = VariableDeclarator;
		var WhileStatement = (function () {
		    function WhileStatement(test, body) {
		        this.type = syntax_1.Syntax.WhileStatement;
		        this.test = test;
		        this.body = body;
		    }
		    return WhileStatement;
		}());
		exports.WhileStatement = WhileStatement;
		var WithStatement = (function () {
		    function WithStatement(object, body) {
		        this.type = syntax_1.Syntax.WithStatement;
		        this.object = object;
		        this.body = body;
		    }
		    return WithStatement;
		}());
		exports.WithStatement = WithStatement;
		var YieldExpression = (function () {
		    function YieldExpression(argument, delegate) {
		        this.type = syntax_1.Syntax.YieldExpression;
		        this.argument = argument;
		        this.delegate = delegate;
		    }
		    return YieldExpression;
		}());
		exports.YieldExpression = YieldExpression;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		var assert_1 = __webpack_require__(9);
		var error_handler_1 = __webpack_require__(10);
		var messages_1 = __webpack_require__(11);
		var Node = __webpack_require__(7);
		var scanner_1 = __webpack_require__(12);
		var syntax_1 = __webpack_require__(2);
		var token_1 = __webpack_require__(13);
		var ArrowParameterPlaceHolder = 'ArrowParameterPlaceHolder';
		var Parser = (function () {
		    function Parser(code, options, delegate) {
		        if (options === void 0) { options = {}; }
		        this.config = {
		            range: (typeof options.range === 'boolean') && options.range,
		            loc: (typeof options.loc === 'boolean') && options.loc,
		            source: null,
		            tokens: (typeof options.tokens === 'boolean') && options.tokens,
		            comment: (typeof options.comment === 'boolean') && options.comment,
		            tolerant: (typeof options.tolerant === 'boolean') && options.tolerant
		        };
		        if (this.config.loc && options.source && options.source !== null) {
		            this.config.source = String(options.source);
		        }
		        this.delegate = delegate;
		        this.errorHandler = new error_handler_1.ErrorHandler();
		        this.errorHandler.tolerant = this.config.tolerant;
		        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
		        this.scanner.trackComment = this.config.comment;
		        this.operatorPrecedence = {
		            ')': 0,
		            ';': 0,
		            ',': 0,
		            '=': 0,
		            ']': 0,
		            '||': 1,
		            '&&': 2,
		            '|': 3,
		            '^': 4,
		            '&': 5,
		            '==': 6,
		            '!=': 6,
		            '===': 6,
		            '!==': 6,
		            '<': 7,
		            '>': 7,
		            '<=': 7,
		            '>=': 7,
		            '<<': 8,
		            '>>': 8,
		            '>>>': 8,
		            '+': 9,
		            '-': 9,
		            '*': 11,
		            '/': 11,
		            '%': 11
		        };
		        this.lookahead = {
		            type: 2 /* EOF */,
		            value: '',
		            lineNumber: this.scanner.lineNumber,
		            lineStart: 0,
		            start: 0,
		            end: 0
		        };
		        this.hasLineTerminator = false;
		        this.context = {
		            isModule: false,
		            await: false,
		            allowIn: true,
		            allowStrictDirective: true,
		            allowYield: true,
		            firstCoverInitializedNameError: null,
		            isAssignmentTarget: false,
		            isBindingElement: false,
		            inFunctionBody: false,
		            inIteration: false,
		            inSwitch: false,
		            labelSet: {},
		            strict: false
		        };
		        this.tokens = [];
		        this.startMarker = {
		            index: 0,
		            line: this.scanner.lineNumber,
		            column: 0
		        };
		        this.lastMarker = {
		            index: 0,
		            line: this.scanner.lineNumber,
		            column: 0
		        };
		        this.nextToken();
		        this.lastMarker = {
		            index: this.scanner.index,
		            line: this.scanner.lineNumber,
		            column: this.scanner.index - this.scanner.lineStart
		        };
		    }
		    Parser.prototype.throwError = function (messageFormat) {
		        var values = [];
		        for (var _i = 1; _i < arguments.length; _i++) {
		            values[_i - 1] = arguments[_i];
		        }
		        var args = Array.prototype.slice.call(arguments, 1);
		        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
		            assert_1.assert(idx < args.length, 'Message reference must be in range');
		            return args[idx];
		        });
		        var index = this.lastMarker.index;
		        var line = this.lastMarker.line;
		        var column = this.lastMarker.column + 1;
		        throw this.errorHandler.createError(index, line, column, msg);
		    };
		    Parser.prototype.tolerateError = function (messageFormat) {
		        var values = [];
		        for (var _i = 1; _i < arguments.length; _i++) {
		            values[_i - 1] = arguments[_i];
		        }
		        var args = Array.prototype.slice.call(arguments, 1);
		        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
		            assert_1.assert(idx < args.length, 'Message reference must be in range');
		            return args[idx];
		        });
		        var index = this.lastMarker.index;
		        var line = this.scanner.lineNumber;
		        var column = this.lastMarker.column + 1;
		        this.errorHandler.tolerateError(index, line, column, msg);
		    };
		    // Throw an exception because of the token.
		    Parser.prototype.unexpectedTokenError = function (token, message) {
		        var msg = message || messages_1.Messages.UnexpectedToken;
		        var value;
		        if (token) {
		            if (!message) {
		                msg = (token.type === 2 /* EOF */) ? messages_1.Messages.UnexpectedEOS :
		                    (token.type === 3 /* Identifier */) ? messages_1.Messages.UnexpectedIdentifier :
		                        (token.type === 6 /* NumericLiteral */) ? messages_1.Messages.UnexpectedNumber :
		                            (token.type === 8 /* StringLiteral */) ? messages_1.Messages.UnexpectedString :
		                                (token.type === 10 /* Template */) ? messages_1.Messages.UnexpectedTemplate :
		                                    messages_1.Messages.UnexpectedToken;
		                if (token.type === 4 /* Keyword */) {
		                    if (this.scanner.isFutureReservedWord(token.value)) {
		                        msg = messages_1.Messages.UnexpectedReserved;
		                    }
		                    else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
		                        msg = messages_1.Messages.StrictReservedWord;
		                    }
		                }
		            }
		            value = token.value;
		        }
		        else {
		            value = 'ILLEGAL';
		        }
		        msg = msg.replace('%0', value);
		        if (token && typeof token.lineNumber === 'number') {
		            var index = token.start;
		            var line = token.lineNumber;
		            var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
		            var column = token.start - lastMarkerLineStart + 1;
		            return this.errorHandler.createError(index, line, column, msg);
		        }
		        else {
		            var index = this.lastMarker.index;
		            var line = this.lastMarker.line;
		            var column = this.lastMarker.column + 1;
		            return this.errorHandler.createError(index, line, column, msg);
		        }
		    };
		    Parser.prototype.throwUnexpectedToken = function (token, message) {
		        throw this.unexpectedTokenError(token, message);
		    };
		    Parser.prototype.tolerateUnexpectedToken = function (token, message) {
		        this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
		    };
		    Parser.prototype.collectComments = function () {
		        if (!this.config.comment) {
		            this.scanner.scanComments();
		        }
		        else {
		            var comments = this.scanner.scanComments();
		            if (comments.length > 0 && this.delegate) {
		                for (var i = 0; i < comments.length; ++i) {
		                    var e = comments[i];
		                    var node = void 0;
		                    node = {
		                        type: e.multiLine ? 'BlockComment' : 'LineComment',
		                        value: this.scanner.source.slice(e.slice[0], e.slice[1])
		                    };
		                    if (this.config.range) {
		                        node.range = e.range;
		                    }
		                    if (this.config.loc) {
		                        node.loc = e.loc;
		                    }
		                    var metadata = {
		                        start: {
		                            line: e.loc.start.line,
		                            column: e.loc.start.column,
		                            offset: e.range[0]
		                        },
		                        end: {
		                            line: e.loc.end.line,
		                            column: e.loc.end.column,
		                            offset: e.range[1]
		                        }
		                    };
		                    this.delegate(node, metadata);
		                }
		            }
		        }
		    };
		    // From internal representation to an external structure
		    Parser.prototype.getTokenRaw = function (token) {
		        return this.scanner.source.slice(token.start, token.end);
		    };
		    Parser.prototype.convertToken = function (token) {
		        var t = {
		            type: token_1.TokenName[token.type],
		            value: this.getTokenRaw(token)
		        };
		        if (this.config.range) {
		            t.range = [token.start, token.end];
		        }
		        if (this.config.loc) {
		            t.loc = {
		                start: {
		                    line: this.startMarker.line,
		                    column: this.startMarker.column
		                },
		                end: {
		                    line: this.scanner.lineNumber,
		                    column: this.scanner.index - this.scanner.lineStart
		                }
		            };
		        }
		        if (token.type === 9 /* RegularExpression */) {
		            var pattern = token.pattern;
		            var flags = token.flags;
		            t.regex = { pattern: pattern, flags: flags };
		        }
		        return t;
		    };
		    Parser.prototype.nextToken = function () {
		        var token = this.lookahead;
		        this.lastMarker.index = this.scanner.index;
		        this.lastMarker.line = this.scanner.lineNumber;
		        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
		        this.collectComments();
		        if (this.scanner.index !== this.startMarker.index) {
		            this.startMarker.index = this.scanner.index;
		            this.startMarker.line = this.scanner.lineNumber;
		            this.startMarker.column = this.scanner.index - this.scanner.lineStart;
		        }
		        var next = this.scanner.lex();
		        this.hasLineTerminator = (token.lineNumber !== next.lineNumber);
		        if (next && this.context.strict && next.type === 3 /* Identifier */) {
		            if (this.scanner.isStrictModeReservedWord(next.value)) {
		                next.type = 4 /* Keyword */;
		            }
		        }
		        this.lookahead = next;
		        if (this.config.tokens && next.type !== 2 /* EOF */) {
		            this.tokens.push(this.convertToken(next));
		        }
		        return token;
		    };
		    Parser.prototype.nextRegexToken = function () {
		        this.collectComments();
		        var token = this.scanner.scanRegExp();
		        if (this.config.tokens) {
		            // Pop the previous token, '/' or '/='
		            // This is added from the lookahead token.
		            this.tokens.pop();
		            this.tokens.push(this.convertToken(token));
		        }
		        // Prime the next lookahead.
		        this.lookahead = token;
		        this.nextToken();
		        return token;
		    };
		    Parser.prototype.createNode = function () {
		        return {
		            index: this.startMarker.index,
		            line: this.startMarker.line,
		            column: this.startMarker.column
		        };
		    };
		    Parser.prototype.startNode = function (token, lastLineStart) {
		        if (lastLineStart === void 0) { lastLineStart = 0; }
		        var column = token.start - token.lineStart;
		        var line = token.lineNumber;
		        if (column < 0) {
		            column += lastLineStart;
		            line--;
		        }
		        return {
		            index: token.start,
		            line: line,
		            column: column
		        };
		    };
		    Parser.prototype.finalize = function (marker, node) {
		        if (this.config.range) {
		            node.range = [marker.index, this.lastMarker.index];
		        }
		        if (this.config.loc) {
		            node.loc = {
		                start: {
		                    line: marker.line,
		                    column: marker.column,
		                },
		                end: {
		                    line: this.lastMarker.line,
		                    column: this.lastMarker.column
		                }
		            };
		            if (this.config.source) {
		                node.loc.source = this.config.source;
		            }
		        }
		        if (this.delegate) {
		            var metadata = {
		                start: {
		                    line: marker.line,
		                    column: marker.column,
		                    offset: marker.index
		                },
		                end: {
		                    line: this.lastMarker.line,
		                    column: this.lastMarker.column,
		                    offset: this.lastMarker.index
		                }
		            };
		            this.delegate(node, metadata);
		        }
		        return node;
		    };
		    // Expect the next token to match the specified punctuator.
		    // If not, an exception will be thrown.
		    Parser.prototype.expect = function (value) {
		        var token = this.nextToken();
		        if (token.type !== 7 /* Punctuator */ || token.value !== value) {
		            this.throwUnexpectedToken(token);
		        }
		    };
		    // Quietly expect a comma when in tolerant mode, otherwise delegates to expect().
		    Parser.prototype.expectCommaSeparator = function () {
		        if (this.config.tolerant) {
		            var token = this.lookahead;
		            if (token.type === 7 /* Punctuator */ && token.value === ',') {
		                this.nextToken();
		            }
		            else if (token.type === 7 /* Punctuator */ && token.value === ';') {
		                this.nextToken();
		                this.tolerateUnexpectedToken(token);
		            }
		            else {
		                this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
		            }
		        }
		        else {
		            this.expect(',');
		        }
		    };
		    // Expect the next token to match the specified keyword.
		    // If not, an exception will be thrown.
		    Parser.prototype.expectKeyword = function (keyword) {
		        var token = this.nextToken();
		        if (token.type !== 4 /* Keyword */ || token.value !== keyword) {
		            this.throwUnexpectedToken(token);
		        }
		    };
		    // Return true if the next token matches the specified punctuator.
		    Parser.prototype.match = function (value) {
		        return this.lookahead.type === 7 /* Punctuator */ && this.lookahead.value === value;
		    };
		    // Return true if the next token matches the specified keyword
		    Parser.prototype.matchKeyword = function (keyword) {
		        return this.lookahead.type === 4 /* Keyword */ && this.lookahead.value === keyword;
		    };
		    // Return true if the next token matches the specified contextual keyword
		    // (where an identifier is sometimes a keyword depending on the context)
		    Parser.prototype.matchContextualKeyword = function (keyword) {
		        return this.lookahead.type === 3 /* Identifier */ && this.lookahead.value === keyword;
		    };
		    // Return true if the next token is an assignment operator
		    Parser.prototype.matchAssign = function () {
		        if (this.lookahead.type !== 7 /* Punctuator */) {
		            return false;
		        }
		        var op = this.lookahead.value;
		        return op === '=' ||
		            op === '*=' ||
		            op === '**=' ||
		            op === '/=' ||
		            op === '%=' ||
		            op === '+=' ||
		            op === '-=' ||
		            op === '<<=' ||
		            op === '>>=' ||
		            op === '>>>=' ||
		            op === '&=' ||
		            op === '^=' ||
		            op === '|=';
		    };
		    // Cover grammar support.
		    //
		    // When an assignment expression position starts with an left parenthesis, the determination of the type
		    // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
		    // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
		    //
		    // There are three productions that can be parsed in a parentheses pair that needs to be determined
		    // after the outermost pair is closed. They are:
		    //
		    //   1. AssignmentExpression
		    //   2. BindingElements
		    //   3. AssignmentTargets
		    //
		    // In order to avoid exponential backtracking, we use two flags to denote if the production can be
		    // binding element or assignment target.
		    //
		    // The three productions have the relationship:
		    //
		    //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
		    //
		    // with a single exception that CoverInitializedName when used directly in an Expression, generates
		    // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
		    // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
		    //
		    // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
		    // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
		    // the CoverInitializedName check is conducted.
		    //
		    // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
		    // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
		    // pattern. The CoverInitializedName check is deferred.
		    Parser.prototype.isolateCoverGrammar = function (parseFunction) {
		        var previousIsBindingElement = this.context.isBindingElement;
		        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
		        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
		        this.context.isBindingElement = true;
		        this.context.isAssignmentTarget = true;
		        this.context.firstCoverInitializedNameError = null;
		        var result = parseFunction.call(this);
		        if (this.context.firstCoverInitializedNameError !== null) {
		            this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
		        }
		        this.context.isBindingElement = previousIsBindingElement;
		        this.context.isAssignmentTarget = previousIsAssignmentTarget;
		        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
		        return result;
		    };
		    Parser.prototype.inheritCoverGrammar = function (parseFunction) {
		        var previousIsBindingElement = this.context.isBindingElement;
		        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
		        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
		        this.context.isBindingElement = true;
		        this.context.isAssignmentTarget = true;
		        this.context.firstCoverInitializedNameError = null;
		        var result = parseFunction.call(this);
		        this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
		        this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
		        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
		        return result;
		    };
		    Parser.prototype.consumeSemicolon = function () {
		        if (this.match(';')) {
		            this.nextToken();
		        }
		        else if (!this.hasLineTerminator) {
		            if (this.lookahead.type !== 2 /* EOF */ && !this.match('}')) {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		            this.lastMarker.index = this.startMarker.index;
		            this.lastMarker.line = this.startMarker.line;
		            this.lastMarker.column = this.startMarker.column;
		        }
		    };
		    // https://tc39.github.io/ecma262/#sec-primary-expression
		    Parser.prototype.parsePrimaryExpression = function () {
		        var node = this.createNode();
		        var expr;
		        var token, raw;
		        switch (this.lookahead.type) {
		            case 3 /* Identifier */:
		                if ((this.context.isModule || this.context.await) && this.lookahead.value === 'await') {
		                    this.tolerateUnexpectedToken(this.lookahead);
		                }
		                expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
		                break;
		            case 6 /* NumericLiteral */:
		            case 8 /* StringLiteral */:
		                if (this.context.strict && this.lookahead.octal) {
		                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
		                }
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                token = this.nextToken();
		                raw = this.getTokenRaw(token);
		                expr = this.finalize(node, new Node.Literal(token.value, raw));
		                break;
		            case 1 /* BooleanLiteral */:
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                token = this.nextToken();
		                raw = this.getTokenRaw(token);
		                expr = this.finalize(node, new Node.Literal(token.value === 'true', raw));
		                break;
		            case 5 /* NullLiteral */:
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                token = this.nextToken();
		                raw = this.getTokenRaw(token);
		                expr = this.finalize(node, new Node.Literal(null, raw));
		                break;
		            case 10 /* Template */:
		                expr = this.parseTemplateLiteral();
		                break;
		            case 7 /* Punctuator */:
		                switch (this.lookahead.value) {
		                    case '(':
		                        this.context.isBindingElement = false;
		                        expr = this.inheritCoverGrammar(this.parseGroupExpression);
		                        break;
		                    case '[':
		                        expr = this.inheritCoverGrammar(this.parseArrayInitializer);
		                        break;
		                    case '{':
		                        expr = this.inheritCoverGrammar(this.parseObjectInitializer);
		                        break;
		                    case '/':
		                    case '/=':
		                        this.context.isAssignmentTarget = false;
		                        this.context.isBindingElement = false;
		                        this.scanner.index = this.startMarker.index;
		                        token = this.nextRegexToken();
		                        raw = this.getTokenRaw(token);
		                        expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
		                        break;
		                    default:
		                        expr = this.throwUnexpectedToken(this.nextToken());
		                }
		                break;
		            case 4 /* Keyword */:
		                if (!this.context.strict && this.context.allowYield && this.matchKeyword('yield')) {
		                    expr = this.parseIdentifierName();
		                }
		                else if (!this.context.strict && this.matchKeyword('let')) {
		                    expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
		                }
		                else {
		                    this.context.isAssignmentTarget = false;
		                    this.context.isBindingElement = false;
		                    if (this.matchKeyword('function')) {
		                        expr = this.parseFunctionExpression();
		                    }
		                    else if (this.matchKeyword('this')) {
		                        this.nextToken();
		                        expr = this.finalize(node, new Node.ThisExpression());
		                    }
		                    else if (this.matchKeyword('class')) {
		                        expr = this.parseClassExpression();
		                    }
		                    else {
		                        expr = this.throwUnexpectedToken(this.nextToken());
		                    }
		                }
		                break;
		            default:
		                expr = this.throwUnexpectedToken(this.nextToken());
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-array-initializer
		    Parser.prototype.parseSpreadElement = function () {
		        var node = this.createNode();
		        this.expect('...');
		        var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
		        return this.finalize(node, new Node.SpreadElement(arg));
		    };
		    Parser.prototype.parseArrayInitializer = function () {
		        var node = this.createNode();
		        var elements = [];
		        this.expect('[');
		        while (!this.match(']')) {
		            if (this.match(',')) {
		                this.nextToken();
		                elements.push(null);
		            }
		            else if (this.match('...')) {
		                var element = this.parseSpreadElement();
		                if (!this.match(']')) {
		                    this.context.isAssignmentTarget = false;
		                    this.context.isBindingElement = false;
		                    this.expect(',');
		                }
		                elements.push(element);
		            }
		            else {
		                elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
		                if (!this.match(']')) {
		                    this.expect(',');
		                }
		            }
		        }
		        this.expect(']');
		        return this.finalize(node, new Node.ArrayExpression(elements));
		    };
		    // https://tc39.github.io/ecma262/#sec-object-initializer
		    Parser.prototype.parsePropertyMethod = function (params) {
		        this.context.isAssignmentTarget = false;
		        this.context.isBindingElement = false;
		        var previousStrict = this.context.strict;
		        var previousAllowStrictDirective = this.context.allowStrictDirective;
		        this.context.allowStrictDirective = params.simple;
		        var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
		        if (this.context.strict && params.firstRestricted) {
		            this.tolerateUnexpectedToken(params.firstRestricted, params.message);
		        }
		        if (this.context.strict && params.stricted) {
		            this.tolerateUnexpectedToken(params.stricted, params.message);
		        }
		        this.context.strict = previousStrict;
		        this.context.allowStrictDirective = previousAllowStrictDirective;
		        return body;
		    };
		    Parser.prototype.parsePropertyMethodFunction = function () {
		        var isGenerator = false;
		        var node = this.createNode();
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = true;
		        var params = this.parseFormalParameters();
		        var method = this.parsePropertyMethod(params);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
		    };
		    Parser.prototype.parsePropertyMethodAsyncFunction = function () {
		        var node = this.createNode();
		        var previousAllowYield = this.context.allowYield;
		        var previousAwait = this.context.await;
		        this.context.allowYield = false;
		        this.context.await = true;
		        var params = this.parseFormalParameters();
		        var method = this.parsePropertyMethod(params);
		        this.context.allowYield = previousAllowYield;
		        this.context.await = previousAwait;
		        return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
		    };
		    Parser.prototype.parseObjectPropertyKey = function () {
		        var node = this.createNode();
		        var token = this.nextToken();
		        var key;
		        switch (token.type) {
		            case 8 /* StringLiteral */:
		            case 6 /* NumericLiteral */:
		                if (this.context.strict && token.octal) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
		                }
		                var raw = this.getTokenRaw(token);
		                key = this.finalize(node, new Node.Literal(token.value, raw));
		                break;
		            case 3 /* Identifier */:
		            case 1 /* BooleanLiteral */:
		            case 5 /* NullLiteral */:
		            case 4 /* Keyword */:
		                key = this.finalize(node, new Node.Identifier(token.value));
		                break;
		            case 7 /* Punctuator */:
		                if (token.value === '[') {
		                    key = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    this.expect(']');
		                }
		                else {
		                    key = this.throwUnexpectedToken(token);
		                }
		                break;
		            default:
		                key = this.throwUnexpectedToken(token);
		        }
		        return key;
		    };
		    Parser.prototype.isPropertyKey = function (key, value) {
		        return (key.type === syntax_1.Syntax.Identifier && key.name === value) ||
		            (key.type === syntax_1.Syntax.Literal && key.value === value);
		    };
		    Parser.prototype.parseObjectProperty = function (hasProto) {
		        var node = this.createNode();
		        var token = this.lookahead;
		        var kind;
		        var key = null;
		        var value = null;
		        var computed = false;
		        var method = false;
		        var shorthand = false;
		        var isAsync = false;
		        if (token.type === 3 /* Identifier */) {
		            var id = token.value;
		            this.nextToken();
		            computed = this.match('[');
		            isAsync = !this.hasLineTerminator && (id === 'async') &&
		                !this.match(':') && !this.match('(') && !this.match('*') && !this.match(',');
		            key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
		        }
		        else if (this.match('*')) {
		            this.nextToken();
		        }
		        else {
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		        }
		        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
		        if (token.type === 3 /* Identifier */ && !isAsync && token.value === 'get' && lookaheadPropertyKey) {
		            kind = 'get';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            this.context.allowYield = false;
		            value = this.parseGetterMethod();
		        }
		        else if (token.type === 3 /* Identifier */ && !isAsync && token.value === 'set' && lookaheadPropertyKey) {
		            kind = 'set';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            value = this.parseSetterMethod();
		        }
		        else if (token.type === 7 /* Punctuator */ && token.value === '*' && lookaheadPropertyKey) {
		            kind = 'init';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            value = this.parseGeneratorMethod();
		            method = true;
		        }
		        else {
		            if (!key) {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		            kind = 'init';
		            if (this.match(':') && !isAsync) {
		                if (!computed && this.isPropertyKey(key, '__proto__')) {
		                    if (hasProto.value) {
		                        this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
		                    }
		                    hasProto.value = true;
		                }
		                this.nextToken();
		                value = this.inheritCoverGrammar(this.parseAssignmentExpression);
		            }
		            else if (this.match('(')) {
		                value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
		                method = true;
		            }
		            else if (token.type === 3 /* Identifier */) {
		                var id = this.finalize(node, new Node.Identifier(token.value));
		                if (this.match('=')) {
		                    this.context.firstCoverInitializedNameError = this.lookahead;
		                    this.nextToken();
		                    shorthand = true;
		                    var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    value = this.finalize(node, new Node.AssignmentPattern(id, init));
		                }
		                else {
		                    shorthand = true;
		                    value = id;
		                }
		            }
		            else {
		                this.throwUnexpectedToken(this.nextToken());
		            }
		        }
		        return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
		    };
		    Parser.prototype.parseObjectInitializer = function () {
		        var node = this.createNode();
		        this.expect('{');
		        var properties = [];
		        var hasProto = { value: false };
		        while (!this.match('}')) {
		            properties.push(this.parseObjectProperty(hasProto));
		            if (!this.match('}')) {
		                this.expectCommaSeparator();
		            }
		        }
		        this.expect('}');
		        return this.finalize(node, new Node.ObjectExpression(properties));
		    };
		    // https://tc39.github.io/ecma262/#sec-template-literals
		    Parser.prototype.parseTemplateHead = function () {
		        assert_1.assert(this.lookahead.head, 'Template literal must start with a template head');
		        var node = this.createNode();
		        var token = this.nextToken();
		        var raw = token.value;
		        var cooked = token.cooked;
		        return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
		    };
		    Parser.prototype.parseTemplateElement = function () {
		        if (this.lookahead.type !== 10 /* Template */) {
		            this.throwUnexpectedToken();
		        }
		        var node = this.createNode();
		        var token = this.nextToken();
		        var raw = token.value;
		        var cooked = token.cooked;
		        return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
		    };
		    Parser.prototype.parseTemplateLiteral = function () {
		        var node = this.createNode();
		        var expressions = [];
		        var quasis = [];
		        var quasi = this.parseTemplateHead();
		        quasis.push(quasi);
		        while (!quasi.tail) {
		            expressions.push(this.parseExpression());
		            quasi = this.parseTemplateElement();
		            quasis.push(quasi);
		        }
		        return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
		    };
		    // https://tc39.github.io/ecma262/#sec-grouping-operator
		    Parser.prototype.reinterpretExpressionAsPattern = function (expr) {
		        switch (expr.type) {
		            case syntax_1.Syntax.Identifier:
		            case syntax_1.Syntax.MemberExpression:
		            case syntax_1.Syntax.RestElement:
		            case syntax_1.Syntax.AssignmentPattern:
		                break;
		            case syntax_1.Syntax.SpreadElement:
		                expr.type = syntax_1.Syntax.RestElement;
		                this.reinterpretExpressionAsPattern(expr.argument);
		                break;
		            case syntax_1.Syntax.ArrayExpression:
		                expr.type = syntax_1.Syntax.ArrayPattern;
		                for (var i = 0; i < expr.elements.length; i++) {
		                    if (expr.elements[i] !== null) {
		                        this.reinterpretExpressionAsPattern(expr.elements[i]);
		                    }
		                }
		                break;
		            case syntax_1.Syntax.ObjectExpression:
		                expr.type = syntax_1.Syntax.ObjectPattern;
		                for (var i = 0; i < expr.properties.length; i++) {
		                    this.reinterpretExpressionAsPattern(expr.properties[i].value);
		                }
		                break;
		            case syntax_1.Syntax.AssignmentExpression:
		                expr.type = syntax_1.Syntax.AssignmentPattern;
		                delete expr.operator;
		                this.reinterpretExpressionAsPattern(expr.left);
		                break;
		            default:
		                // Allow other node type for tolerant parsing.
		                break;
		        }
		    };
		    Parser.prototype.parseGroupExpression = function () {
		        var expr;
		        this.expect('(');
		        if (this.match(')')) {
		            this.nextToken();
		            if (!this.match('=>')) {
		                this.expect('=>');
		            }
		            expr = {
		                type: ArrowParameterPlaceHolder,
		                params: [],
		                async: false
		            };
		        }
		        else {
		            var startToken = this.lookahead;
		            var params = [];
		            if (this.match('...')) {
		                expr = this.parseRestElement(params);
		                this.expect(')');
		                if (!this.match('=>')) {
		                    this.expect('=>');
		                }
		                expr = {
		                    type: ArrowParameterPlaceHolder,
		                    params: [expr],
		                    async: false
		                };
		            }
		            else {
		                var arrow = false;
		                this.context.isBindingElement = true;
		                expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
		                if (this.match(',')) {
		                    var expressions = [];
		                    this.context.isAssignmentTarget = false;
		                    expressions.push(expr);
		                    while (this.lookahead.type !== 2 /* EOF */) {
		                        if (!this.match(',')) {
		                            break;
		                        }
		                        this.nextToken();
		                        if (this.match(')')) {
		                            this.nextToken();
		                            for (var i = 0; i < expressions.length; i++) {
		                                this.reinterpretExpressionAsPattern(expressions[i]);
		                            }
		                            arrow = true;
		                            expr = {
		                                type: ArrowParameterPlaceHolder,
		                                params: expressions,
		                                async: false
		                            };
		                        }
		                        else if (this.match('...')) {
		                            if (!this.context.isBindingElement) {
		                                this.throwUnexpectedToken(this.lookahead);
		                            }
		                            expressions.push(this.parseRestElement(params));
		                            this.expect(')');
		                            if (!this.match('=>')) {
		                                this.expect('=>');
		                            }
		                            this.context.isBindingElement = false;
		                            for (var i = 0; i < expressions.length; i++) {
		                                this.reinterpretExpressionAsPattern(expressions[i]);
		                            }
		                            arrow = true;
		                            expr = {
		                                type: ArrowParameterPlaceHolder,
		                                params: expressions,
		                                async: false
		                            };
		                        }
		                        else {
		                            expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
		                        }
		                        if (arrow) {
		                            break;
		                        }
		                    }
		                    if (!arrow) {
		                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
		                    }
		                }
		                if (!arrow) {
		                    this.expect(')');
		                    if (this.match('=>')) {
		                        if (expr.type === syntax_1.Syntax.Identifier && expr.name === 'yield') {
		                            arrow = true;
		                            expr = {
		                                type: ArrowParameterPlaceHolder,
		                                params: [expr],
		                                async: false
		                            };
		                        }
		                        if (!arrow) {
		                            if (!this.context.isBindingElement) {
		                                this.throwUnexpectedToken(this.lookahead);
		                            }
		                            if (expr.type === syntax_1.Syntax.SequenceExpression) {
		                                for (var i = 0; i < expr.expressions.length; i++) {
		                                    this.reinterpretExpressionAsPattern(expr.expressions[i]);
		                                }
		                            }
		                            else {
		                                this.reinterpretExpressionAsPattern(expr);
		                            }
		                            var parameters = (expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr]);
		                            expr = {
		                                type: ArrowParameterPlaceHolder,
		                                params: parameters,
		                                async: false
		                            };
		                        }
		                    }
		                    this.context.isBindingElement = false;
		                }
		            }
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-left-hand-side-expressions
		    Parser.prototype.parseArguments = function () {
		        this.expect('(');
		        var args = [];
		        if (!this.match(')')) {
		            while (true) {
		                var expr = this.match('...') ? this.parseSpreadElement() :
		                    this.isolateCoverGrammar(this.parseAssignmentExpression);
		                args.push(expr);
		                if (this.match(')')) {
		                    break;
		                }
		                this.expectCommaSeparator();
		                if (this.match(')')) {
		                    break;
		                }
		            }
		        }
		        this.expect(')');
		        return args;
		    };
		    Parser.prototype.isIdentifierName = function (token) {
		        return token.type === 3 /* Identifier */ ||
		            token.type === 4 /* Keyword */ ||
		            token.type === 1 /* BooleanLiteral */ ||
		            token.type === 5 /* NullLiteral */;
		    };
		    Parser.prototype.parseIdentifierName = function () {
		        var node = this.createNode();
		        var token = this.nextToken();
		        if (!this.isIdentifierName(token)) {
		            this.throwUnexpectedToken(token);
		        }
		        return this.finalize(node, new Node.Identifier(token.value));
		    };
		    Parser.prototype.parseNewExpression = function () {
		        var node = this.createNode();
		        var id = this.parseIdentifierName();
		        assert_1.assert(id.name === 'new', 'New expression must start with `new`');
		        var expr;
		        if (this.match('.')) {
		            this.nextToken();
		            if (this.lookahead.type === 3 /* Identifier */ && this.context.inFunctionBody && this.lookahead.value === 'target') {
		                var property = this.parseIdentifierName();
		                expr = new Node.MetaProperty(id, property);
		            }
		            else {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		        }
		        else {
		            var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
		            var args = this.match('(') ? this.parseArguments() : [];
		            expr = new Node.NewExpression(callee, args);
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        return this.finalize(node, expr);
		    };
		    Parser.prototype.parseAsyncArgument = function () {
		        var arg = this.parseAssignmentExpression();
		        this.context.firstCoverInitializedNameError = null;
		        return arg;
		    };
		    Parser.prototype.parseAsyncArguments = function () {
		        this.expect('(');
		        var args = [];
		        if (!this.match(')')) {
		            while (true) {
		                var expr = this.match('...') ? this.parseSpreadElement() :
		                    this.isolateCoverGrammar(this.parseAsyncArgument);
		                args.push(expr);
		                if (this.match(')')) {
		                    break;
		                }
		                this.expectCommaSeparator();
		                if (this.match(')')) {
		                    break;
		                }
		            }
		        }
		        this.expect(')');
		        return args;
		    };
		    Parser.prototype.parseLeftHandSideExpressionAllowCall = function () {
		        var startToken = this.lookahead;
		        var maybeAsync = this.matchContextualKeyword('async');
		        var previousAllowIn = this.context.allowIn;
		        this.context.allowIn = true;
		        var expr;
		        if (this.matchKeyword('super') && this.context.inFunctionBody) {
		            expr = this.createNode();
		            this.nextToken();
		            expr = this.finalize(expr, new Node.Super());
		            if (!this.match('(') && !this.match('.') && !this.match('[')) {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		        }
		        else {
		            expr = this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
		        }
		        while (true) {
		            if (this.match('.')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('.');
		                var property = this.parseIdentifierName();
		                expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
		            }
		            else if (this.match('(')) {
		                var asyncArrow = maybeAsync && (startToken.lineNumber === this.lookahead.lineNumber);
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = false;
		                var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
		                expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
		                if (asyncArrow && this.match('=>')) {
		                    for (var i = 0; i < args.length; ++i) {
		                        this.reinterpretExpressionAsPattern(args[i]);
		                    }
		                    expr = {
		                        type: ArrowParameterPlaceHolder,
		                        params: args,
		                        async: true
		                    };
		                }
		            }
		            else if (this.match('[')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('[');
		                var property = this.isolateCoverGrammar(this.parseExpression);
		                this.expect(']');
		                expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
		            }
		            else if (this.lookahead.type === 10 /* Template */ && this.lookahead.head) {
		                var quasi = this.parseTemplateLiteral();
		                expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
		            }
		            else {
		                break;
		            }
		        }
		        this.context.allowIn = previousAllowIn;
		        return expr;
		    };
		    Parser.prototype.parseSuper = function () {
		        var node = this.createNode();
		        this.expectKeyword('super');
		        if (!this.match('[') && !this.match('.')) {
		            this.throwUnexpectedToken(this.lookahead);
		        }
		        return this.finalize(node, new Node.Super());
		    };
		    Parser.prototype.parseLeftHandSideExpression = function () {
		        assert_1.assert(this.context.allowIn, 'callee of new expression always allow in keyword.');
		        var node = this.startNode(this.lookahead);
		        var expr = (this.matchKeyword('super') && this.context.inFunctionBody) ? this.parseSuper() :
		            this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
		        while (true) {
		            if (this.match('[')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('[');
		                var property = this.isolateCoverGrammar(this.parseExpression);
		                this.expect(']');
		                expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
		            }
		            else if (this.match('.')) {
		                this.context.isBindingElement = false;
		                this.context.isAssignmentTarget = true;
		                this.expect('.');
		                var property = this.parseIdentifierName();
		                expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
		            }
		            else if (this.lookahead.type === 10 /* Template */ && this.lookahead.head) {
		                var quasi = this.parseTemplateLiteral();
		                expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
		            }
		            else {
		                break;
		            }
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-update-expressions
		    Parser.prototype.parseUpdateExpression = function () {
		        var expr;
		        var startToken = this.lookahead;
		        if (this.match('++') || this.match('--')) {
		            var node = this.startNode(startToken);
		            var token = this.nextToken();
		            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
		            if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
		                this.tolerateError(messages_1.Messages.StrictLHSPrefix);
		            }
		            if (!this.context.isAssignmentTarget) {
		                this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
		            }
		            var prefix = true;
		            expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        else {
		            expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
		            if (!this.hasLineTerminator && this.lookahead.type === 7 /* Punctuator */) {
		                if (this.match('++') || this.match('--')) {
		                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
		                        this.tolerateError(messages_1.Messages.StrictLHSPostfix);
		                    }
		                    if (!this.context.isAssignmentTarget) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
		                    }
		                    this.context.isAssignmentTarget = false;
		                    this.context.isBindingElement = false;
		                    var operator = this.nextToken().value;
		                    var prefix = false;
		                    expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
		                }
		            }
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-unary-operators
		    Parser.prototype.parseAwaitExpression = function () {
		        var node = this.createNode();
		        this.nextToken();
		        var argument = this.parseUnaryExpression();
		        return this.finalize(node, new Node.AwaitExpression(argument));
		    };
		    Parser.prototype.parseUnaryExpression = function () {
		        var expr;
		        if (this.match('+') || this.match('-') || this.match('~') || this.match('!') ||
		            this.matchKeyword('delete') || this.matchKeyword('void') || this.matchKeyword('typeof')) {
		            var node = this.startNode(this.lookahead);
		            var token = this.nextToken();
		            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
		            expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
		            if (this.context.strict && expr.operator === 'delete' && expr.argument.type === syntax_1.Syntax.Identifier) {
		                this.tolerateError(messages_1.Messages.StrictDelete);
		            }
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        else if (this.context.await && this.matchContextualKeyword('await')) {
		            expr = this.parseAwaitExpression();
		        }
		        else {
		            expr = this.parseUpdateExpression();
		        }
		        return expr;
		    };
		    Parser.prototype.parseExponentiationExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
		        if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match('**')) {
		            this.nextToken();
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		            var left = expr;
		            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
		            expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression('**', left, right));
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-exp-operator
		    // https://tc39.github.io/ecma262/#sec-multiplicative-operators
		    // https://tc39.github.io/ecma262/#sec-additive-operators
		    // https://tc39.github.io/ecma262/#sec-bitwise-shift-operators
		    // https://tc39.github.io/ecma262/#sec-relational-operators
		    // https://tc39.github.io/ecma262/#sec-equality-operators
		    // https://tc39.github.io/ecma262/#sec-binary-bitwise-operators
		    // https://tc39.github.io/ecma262/#sec-binary-logical-operators
		    Parser.prototype.binaryPrecedence = function (token) {
		        var op = token.value;
		        var precedence;
		        if (token.type === 7 /* Punctuator */) {
		            precedence = this.operatorPrecedence[op] || 0;
		        }
		        else if (token.type === 4 /* Keyword */) {
		            precedence = (op === 'instanceof' || (this.context.allowIn && op === 'in')) ? 7 : 0;
		        }
		        else {
		            precedence = 0;
		        }
		        return precedence;
		    };
		    Parser.prototype.parseBinaryExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
		        var token = this.lookahead;
		        var prec = this.binaryPrecedence(token);
		        if (prec > 0) {
		            this.nextToken();
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		            var markers = [startToken, this.lookahead];
		            var left = expr;
		            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
		            var stack = [left, token.value, right];
		            var precedences = [prec];
		            while (true) {
		                prec = this.binaryPrecedence(this.lookahead);
		                if (prec <= 0) {
		                    break;
		                }
		                // Reduce: make a binary expression from the three topmost entries.
		                while ((stack.length > 2) && (prec <= precedences[precedences.length - 1])) {
		                    right = stack.pop();
		                    var operator = stack.pop();
		                    precedences.pop();
		                    left = stack.pop();
		                    markers.pop();
		                    var node = this.startNode(markers[markers.length - 1]);
		                    stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
		                }
		                // Shift.
		                stack.push(this.nextToken().value);
		                precedences.push(prec);
		                markers.push(this.lookahead);
		                stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
		            }
		            // Final reduce to clean-up the stack.
		            var i = stack.length - 1;
		            expr = stack[i];
		            var lastMarker = markers.pop();
		            while (i > 1) {
		                var marker = markers.pop();
		                var lastLineStart = lastMarker && lastMarker.lineStart;
		                var node = this.startNode(marker, lastLineStart);
		                var operator = stack[i - 1];
		                expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
		                i -= 2;
		                lastMarker = marker;
		            }
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-conditional-operator
		    Parser.prototype.parseConditionalExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
		        if (this.match('?')) {
		            this.nextToken();
		            var previousAllowIn = this.context.allowIn;
		            this.context.allowIn = true;
		            var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
		            this.context.allowIn = previousAllowIn;
		            this.expect(':');
		            var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
		            expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
		            this.context.isAssignmentTarget = false;
		            this.context.isBindingElement = false;
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-assignment-operators
		    Parser.prototype.checkPatternParam = function (options, param) {
		        switch (param.type) {
		            case syntax_1.Syntax.Identifier:
		                this.validateParam(options, param, param.name);
		                break;
		            case syntax_1.Syntax.RestElement:
		                this.checkPatternParam(options, param.argument);
		                break;
		            case syntax_1.Syntax.AssignmentPattern:
		                this.checkPatternParam(options, param.left);
		                break;
		            case syntax_1.Syntax.ArrayPattern:
		                for (var i = 0; i < param.elements.length; i++) {
		                    if (param.elements[i] !== null) {
		                        this.checkPatternParam(options, param.elements[i]);
		                    }
		                }
		                break;
		            case syntax_1.Syntax.ObjectPattern:
		                for (var i = 0; i < param.properties.length; i++) {
		                    this.checkPatternParam(options, param.properties[i].value);
		                }
		                break;
		            default:
		                break;
		        }
		        options.simple = options.simple && (param instanceof Node.Identifier);
		    };
		    Parser.prototype.reinterpretAsCoverFormalsList = function (expr) {
		        var params = [expr];
		        var options;
		        var asyncArrow = false;
		        switch (expr.type) {
		            case syntax_1.Syntax.Identifier:
		                break;
		            case ArrowParameterPlaceHolder:
		                params = expr.params;
		                asyncArrow = expr.async;
		                break;
		            default:
		                return null;
		        }
		        options = {
		            simple: true,
		            paramSet: {}
		        };
		        for (var i = 0; i < params.length; ++i) {
		            var param = params[i];
		            if (param.type === syntax_1.Syntax.AssignmentPattern) {
		                if (param.right.type === syntax_1.Syntax.YieldExpression) {
		                    if (param.right.argument) {
		                        this.throwUnexpectedToken(this.lookahead);
		                    }
		                    param.right.type = syntax_1.Syntax.Identifier;
		                    param.right.name = 'yield';
		                    delete param.right.argument;
		                    delete param.right.delegate;
		                }
		            }
		            else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === 'await') {
		                this.throwUnexpectedToken(this.lookahead);
		            }
		            this.checkPatternParam(options, param);
		            params[i] = param;
		        }
		        if (this.context.strict || !this.context.allowYield) {
		            for (var i = 0; i < params.length; ++i) {
		                var param = params[i];
		                if (param.type === syntax_1.Syntax.YieldExpression) {
		                    this.throwUnexpectedToken(this.lookahead);
		                }
		            }
		        }
		        if (options.message === messages_1.Messages.StrictParamDupe) {
		            var token = this.context.strict ? options.stricted : options.firstRestricted;
		            this.throwUnexpectedToken(token, options.message);
		        }
		        return {
		            simple: options.simple,
		            params: params,
		            stricted: options.stricted,
		            firstRestricted: options.firstRestricted,
		            message: options.message
		        };
		    };
		    Parser.prototype.parseAssignmentExpression = function () {
		        var expr;
		        if (!this.context.allowYield && this.matchKeyword('yield')) {
		            expr = this.parseYieldExpression();
		        }
		        else {
		            var startToken = this.lookahead;
		            var token = startToken;
		            expr = this.parseConditionalExpression();
		            if (token.type === 3 /* Identifier */ && (token.lineNumber === this.lookahead.lineNumber) && token.value === 'async') {
		                if (this.lookahead.type === 3 /* Identifier */ || this.matchKeyword('yield')) {
		                    var arg = this.parsePrimaryExpression();
		                    this.reinterpretExpressionAsPattern(arg);
		                    expr = {
		                        type: ArrowParameterPlaceHolder,
		                        params: [arg],
		                        async: true
		                    };
		                }
		            }
		            if (expr.type === ArrowParameterPlaceHolder || this.match('=>')) {
		                // https://tc39.github.io/ecma262/#sec-arrow-function-definitions
		                this.context.isAssignmentTarget = false;
		                this.context.isBindingElement = false;
		                var isAsync = expr.async;
		                var list = this.reinterpretAsCoverFormalsList(expr);
		                if (list) {
		                    if (this.hasLineTerminator) {
		                        this.tolerateUnexpectedToken(this.lookahead);
		                    }
		                    this.context.firstCoverInitializedNameError = null;
		                    var previousStrict = this.context.strict;
		                    var previousAllowStrictDirective = this.context.allowStrictDirective;
		                    this.context.allowStrictDirective = list.simple;
		                    var previousAllowYield = this.context.allowYield;
		                    var previousAwait = this.context.await;
		                    this.context.allowYield = true;
		                    this.context.await = isAsync;
		                    var node = this.startNode(startToken);
		                    this.expect('=>');
		                    var body = void 0;
		                    if (this.match('{')) {
		                        var previousAllowIn = this.context.allowIn;
		                        this.context.allowIn = true;
		                        body = this.parseFunctionSourceElements();
		                        this.context.allowIn = previousAllowIn;
		                    }
		                    else {
		                        body = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    }
		                    var expression = body.type !== syntax_1.Syntax.BlockStatement;
		                    if (this.context.strict && list.firstRestricted) {
		                        this.throwUnexpectedToken(list.firstRestricted, list.message);
		                    }
		                    if (this.context.strict && list.stricted) {
		                        this.tolerateUnexpectedToken(list.stricted, list.message);
		                    }
		                    expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) :
		                        this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
		                    this.context.strict = previousStrict;
		                    this.context.allowStrictDirective = previousAllowStrictDirective;
		                    this.context.allowYield = previousAllowYield;
		                    this.context.await = previousAwait;
		                }
		            }
		            else {
		                if (this.matchAssign()) {
		                    if (!this.context.isAssignmentTarget) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
		                    }
		                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
		                        var id = expr;
		                        if (this.scanner.isRestrictedWord(id.name)) {
		                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
		                        }
		                        if (this.scanner.isStrictModeReservedWord(id.name)) {
		                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
		                        }
		                    }
		                    if (!this.match('=')) {
		                        this.context.isAssignmentTarget = false;
		                        this.context.isBindingElement = false;
		                    }
		                    else {
		                        this.reinterpretExpressionAsPattern(expr);
		                    }
		                    token = this.nextToken();
		                    var operator = token.value;
		                    var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                    expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
		                    this.context.firstCoverInitializedNameError = null;
		                }
		            }
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-comma-operator
		    Parser.prototype.parseExpression = function () {
		        var startToken = this.lookahead;
		        var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
		        if (this.match(',')) {
		            var expressions = [];
		            expressions.push(expr);
		            while (this.lookahead.type !== 2 /* EOF */) {
		                if (!this.match(',')) {
		                    break;
		                }
		                this.nextToken();
		                expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
		            }
		            expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
		        }
		        return expr;
		    };
		    // https://tc39.github.io/ecma262/#sec-block
		    Parser.prototype.parseStatementListItem = function () {
		        var statement;
		        this.context.isAssignmentTarget = true;
		        this.context.isBindingElement = true;
		        if (this.lookahead.type === 4 /* Keyword */) {
		            switch (this.lookahead.value) {
		                case 'export':
		                    if (!this.context.isModule) {
		                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
		                    }
		                    statement = this.parseExportDeclaration();
		                    break;
		                case 'import':
		                    if (!this.context.isModule) {
		                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
		                    }
		                    statement = this.parseImportDeclaration();
		                    break;
		                case 'const':
		                    statement = this.parseLexicalDeclaration({ inFor: false });
		                    break;
		                case 'function':
		                    statement = this.parseFunctionDeclaration();
		                    break;
		                case 'class':
		                    statement = this.parseClassDeclaration();
		                    break;
		                case 'let':
		                    statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
		                    break;
		                default:
		                    statement = this.parseStatement();
		                    break;
		            }
		        }
		        else {
		            statement = this.parseStatement();
		        }
		        return statement;
		    };
		    Parser.prototype.parseBlock = function () {
		        var node = this.createNode();
		        this.expect('{');
		        var block = [];
		        while (true) {
		            if (this.match('}')) {
		                break;
		            }
		            block.push(this.parseStatementListItem());
		        }
		        this.expect('}');
		        return this.finalize(node, new Node.BlockStatement(block));
		    };
		    // https://tc39.github.io/ecma262/#sec-let-and-const-declarations
		    Parser.prototype.parseLexicalBinding = function (kind, options) {
		        var node = this.createNode();
		        var params = [];
		        var id = this.parsePattern(params, kind);
		        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
		            if (this.scanner.isRestrictedWord(id.name)) {
		                this.tolerateError(messages_1.Messages.StrictVarName);
		            }
		        }
		        var init = null;
		        if (kind === 'const') {
		            if (!this.matchKeyword('in') && !this.matchContextualKeyword('of')) {
		                if (this.match('=')) {
		                    this.nextToken();
		                    init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		                }
		                else {
		                    this.throwError(messages_1.Messages.DeclarationMissingInitializer, 'const');
		                }
		            }
		        }
		        else if ((!options.inFor && id.type !== syntax_1.Syntax.Identifier) || this.match('=')) {
		            this.expect('=');
		            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		        }
		        return this.finalize(node, new Node.VariableDeclarator(id, init));
		    };
		    Parser.prototype.parseBindingList = function (kind, options) {
		        var list = [this.parseLexicalBinding(kind, options)];
		        while (this.match(',')) {
		            this.nextToken();
		            list.push(this.parseLexicalBinding(kind, options));
		        }
		        return list;
		    };
		    Parser.prototype.isLexicalDeclaration = function () {
		        var state = this.scanner.saveState();
		        this.scanner.scanComments();
		        var next = this.scanner.lex();
		        this.scanner.restoreState(state);
		        return (next.type === 3 /* Identifier */) ||
		            (next.type === 7 /* Punctuator */ && next.value === '[') ||
		            (next.type === 7 /* Punctuator */ && next.value === '{') ||
		            (next.type === 4 /* Keyword */ && next.value === 'let') ||
		            (next.type === 4 /* Keyword */ && next.value === 'yield');
		    };
		    Parser.prototype.parseLexicalDeclaration = function (options) {
		        var node = this.createNode();
		        var kind = this.nextToken().value;
		        assert_1.assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
		        var declarations = this.parseBindingList(kind, options);
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
		    };
		    // https://tc39.github.io/ecma262/#sec-destructuring-binding-patterns
		    Parser.prototype.parseBindingRestElement = function (params, kind) {
		        var node = this.createNode();
		        this.expect('...');
		        var arg = this.parsePattern(params, kind);
		        return this.finalize(node, new Node.RestElement(arg));
		    };
		    Parser.prototype.parseArrayPattern = function (params, kind) {
		        var node = this.createNode();
		        this.expect('[');
		        var elements = [];
		        while (!this.match(']')) {
		            if (this.match(',')) {
		                this.nextToken();
		                elements.push(null);
		            }
		            else {
		                if (this.match('...')) {
		                    elements.push(this.parseBindingRestElement(params, kind));
		                    break;
		                }
		                else {
		                    elements.push(this.parsePatternWithDefault(params, kind));
		                }
		                if (!this.match(']')) {
		                    this.expect(',');
		                }
		            }
		        }
		        this.expect(']');
		        return this.finalize(node, new Node.ArrayPattern(elements));
		    };
		    Parser.prototype.parsePropertyPattern = function (params, kind) {
		        var node = this.createNode();
		        var computed = false;
		        var shorthand = false;
		        var method = false;
		        var key;
		        var value;
		        if (this.lookahead.type === 3 /* Identifier */) {
		            var keyToken = this.lookahead;
		            key = this.parseVariableIdentifier();
		            var init = this.finalize(node, new Node.Identifier(keyToken.value));
		            if (this.match('=')) {
		                params.push(keyToken);
		                shorthand = true;
		                this.nextToken();
		                var expr = this.parseAssignmentExpression();
		                value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
		            }
		            else if (!this.match(':')) {
		                params.push(keyToken);
		                shorthand = true;
		                value = init;
		            }
		            else {
		                this.expect(':');
		                value = this.parsePatternWithDefault(params, kind);
		            }
		        }
		        else {
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            this.expect(':');
		            value = this.parsePatternWithDefault(params, kind);
		        }
		        return this.finalize(node, new Node.Property('init', key, computed, value, method, shorthand));
		    };
		    Parser.prototype.parseObjectPattern = function (params, kind) {
		        var node = this.createNode();
		        var properties = [];
		        this.expect('{');
		        while (!this.match('}')) {
		            properties.push(this.parsePropertyPattern(params, kind));
		            if (!this.match('}')) {
		                this.expect(',');
		            }
		        }
		        this.expect('}');
		        return this.finalize(node, new Node.ObjectPattern(properties));
		    };
		    Parser.prototype.parsePattern = function (params, kind) {
		        var pattern;
		        if (this.match('[')) {
		            pattern = this.parseArrayPattern(params, kind);
		        }
		        else if (this.match('{')) {
		            pattern = this.parseObjectPattern(params, kind);
		        }
		        else {
		            if (this.matchKeyword('let') && (kind === 'const' || kind === 'let')) {
		                this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
		            }
		            params.push(this.lookahead);
		            pattern = this.parseVariableIdentifier(kind);
		        }
		        return pattern;
		    };
		    Parser.prototype.parsePatternWithDefault = function (params, kind) {
		        var startToken = this.lookahead;
		        var pattern = this.parsePattern(params, kind);
		        if (this.match('=')) {
		            this.nextToken();
		            var previousAllowYield = this.context.allowYield;
		            this.context.allowYield = true;
		            var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
		            this.context.allowYield = previousAllowYield;
		            pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
		        }
		        return pattern;
		    };
		    // https://tc39.github.io/ecma262/#sec-variable-statement
		    Parser.prototype.parseVariableIdentifier = function (kind) {
		        var node = this.createNode();
		        var token = this.nextToken();
		        if (token.type === 4 /* Keyword */ && token.value === 'yield') {
		            if (this.context.strict) {
		                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
		            }
		            else if (!this.context.allowYield) {
		                this.throwUnexpectedToken(token);
		            }
		        }
		        else if (token.type !== 3 /* Identifier */) {
		            if (this.context.strict && token.type === 4 /* Keyword */ && this.scanner.isStrictModeReservedWord(token.value)) {
		                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
		            }
		            else {
		                if (this.context.strict || token.value !== 'let' || kind !== 'var') {
		                    this.throwUnexpectedToken(token);
		                }
		            }
		        }
		        else if ((this.context.isModule || this.context.await) && token.type === 3 /* Identifier */ && token.value === 'await') {
		            this.tolerateUnexpectedToken(token);
		        }
		        return this.finalize(node, new Node.Identifier(token.value));
		    };
		    Parser.prototype.parseVariableDeclaration = function (options) {
		        var node = this.createNode();
		        var params = [];
		        var id = this.parsePattern(params, 'var');
		        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
		            if (this.scanner.isRestrictedWord(id.name)) {
		                this.tolerateError(messages_1.Messages.StrictVarName);
		            }
		        }
		        var init = null;
		        if (this.match('=')) {
		            this.nextToken();
		            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
		        }
		        else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
		            this.expect('=');
		        }
		        return this.finalize(node, new Node.VariableDeclarator(id, init));
		    };
		    Parser.prototype.parseVariableDeclarationList = function (options) {
		        var opt = { inFor: options.inFor };
		        var list = [];
		        list.push(this.parseVariableDeclaration(opt));
		        while (this.match(',')) {
		            this.nextToken();
		            list.push(this.parseVariableDeclaration(opt));
		        }
		        return list;
		    };
		    Parser.prototype.parseVariableStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('var');
		        var declarations = this.parseVariableDeclarationList({ inFor: false });
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.VariableDeclaration(declarations, 'var'));
		    };
		    // https://tc39.github.io/ecma262/#sec-empty-statement
		    Parser.prototype.parseEmptyStatement = function () {
		        var node = this.createNode();
		        this.expect(';');
		        return this.finalize(node, new Node.EmptyStatement());
		    };
		    // https://tc39.github.io/ecma262/#sec-expression-statement
		    Parser.prototype.parseExpressionStatement = function () {
		        var node = this.createNode();
		        var expr = this.parseExpression();
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ExpressionStatement(expr));
		    };
		    // https://tc39.github.io/ecma262/#sec-if-statement
		    Parser.prototype.parseIfClause = function () {
		        if (this.context.strict && this.matchKeyword('function')) {
		            this.tolerateError(messages_1.Messages.StrictFunction);
		        }
		        return this.parseStatement();
		    };
		    Parser.prototype.parseIfStatement = function () {
		        var node = this.createNode();
		        var consequent;
		        var alternate = null;
		        this.expectKeyword('if');
		        this.expect('(');
		        var test = this.parseExpression();
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		            consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
		        }
		        else {
		            this.expect(')');
		            consequent = this.parseIfClause();
		            if (this.matchKeyword('else')) {
		                this.nextToken();
		                alternate = this.parseIfClause();
		            }
		        }
		        return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
		    };
		    // https://tc39.github.io/ecma262/#sec-do-while-statement
		    Parser.prototype.parseDoWhileStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('do');
		        var previousInIteration = this.context.inIteration;
		        this.context.inIteration = true;
		        var body = this.parseStatement();
		        this.context.inIteration = previousInIteration;
		        this.expectKeyword('while');
		        this.expect('(');
		        var test = this.parseExpression();
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		        }
		        else {
		            this.expect(')');
		            if (this.match(';')) {
		                this.nextToken();
		            }
		        }
		        return this.finalize(node, new Node.DoWhileStatement(body, test));
		    };
		    // https://tc39.github.io/ecma262/#sec-while-statement
		    Parser.prototype.parseWhileStatement = function () {
		        var node = this.createNode();
		        var body;
		        this.expectKeyword('while');
		        this.expect('(');
		        var test = this.parseExpression();
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		            body = this.finalize(this.createNode(), new Node.EmptyStatement());
		        }
		        else {
		            this.expect(')');
		            var previousInIteration = this.context.inIteration;
		            this.context.inIteration = true;
		            body = this.parseStatement();
		            this.context.inIteration = previousInIteration;
		        }
		        return this.finalize(node, new Node.WhileStatement(test, body));
		    };
		    // https://tc39.github.io/ecma262/#sec-for-statement
		    // https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements
		    Parser.prototype.parseForStatement = function () {
		        var init = null;
		        var test = null;
		        var update = null;
		        var forIn = true;
		        var left, right;
		        var node = this.createNode();
		        this.expectKeyword('for');
		        this.expect('(');
		        if (this.match(';')) {
		            this.nextToken();
		        }
		        else {
		            if (this.matchKeyword('var')) {
		                init = this.createNode();
		                this.nextToken();
		                var previousAllowIn = this.context.allowIn;
		                this.context.allowIn = false;
		                var declarations = this.parseVariableDeclarationList({ inFor: true });
		                this.context.allowIn = previousAllowIn;
		                if (declarations.length === 1 && this.matchKeyword('in')) {
		                    var decl = declarations[0];
		                    if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
		                        this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, 'for-in');
		                    }
		                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
		                    this.nextToken();
		                    left = init;
		                    right = this.parseExpression();
		                    init = null;
		                }
		                else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
		                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
		                    this.nextToken();
		                    left = init;
		                    right = this.parseAssignmentExpression();
		                    init = null;
		                    forIn = false;
		                }
		                else {
		                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
		                    this.expect(';');
		                }
		            }
		            else if (this.matchKeyword('const') || this.matchKeyword('let')) {
		                init = this.createNode();
		                var kind = this.nextToken().value;
		                if (!this.context.strict && this.lookahead.value === 'in') {
		                    init = this.finalize(init, new Node.Identifier(kind));
		                    this.nextToken();
		                    left = init;
		                    right = this.parseExpression();
		                    init = null;
		                }
		                else {
		                    var previousAllowIn = this.context.allowIn;
		                    this.context.allowIn = false;
		                    var declarations = this.parseBindingList(kind, { inFor: true });
		                    this.context.allowIn = previousAllowIn;
		                    if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword('in')) {
		                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
		                        this.nextToken();
		                        left = init;
		                        right = this.parseExpression();
		                        init = null;
		                    }
		                    else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
		                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
		                        this.nextToken();
		                        left = init;
		                        right = this.parseAssignmentExpression();
		                        init = null;
		                        forIn = false;
		                    }
		                    else {
		                        this.consumeSemicolon();
		                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
		                    }
		                }
		            }
		            else {
		                var initStartToken = this.lookahead;
		                var previousAllowIn = this.context.allowIn;
		                this.context.allowIn = false;
		                init = this.inheritCoverGrammar(this.parseAssignmentExpression);
		                this.context.allowIn = previousAllowIn;
		                if (this.matchKeyword('in')) {
		                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
		                    }
		                    this.nextToken();
		                    this.reinterpretExpressionAsPattern(init);
		                    left = init;
		                    right = this.parseExpression();
		                    init = null;
		                }
		                else if (this.matchContextualKeyword('of')) {
		                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
		                        this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
		                    }
		                    this.nextToken();
		                    this.reinterpretExpressionAsPattern(init);
		                    left = init;
		                    right = this.parseAssignmentExpression();
		                    init = null;
		                    forIn = false;
		                }
		                else {
		                    if (this.match(',')) {
		                        var initSeq = [init];
		                        while (this.match(',')) {
		                            this.nextToken();
		                            initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
		                        }
		                        init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
		                    }
		                    this.expect(';');
		                }
		            }
		        }
		        if (typeof left === 'undefined') {
		            if (!this.match(';')) {
		                test = this.parseExpression();
		            }
		            this.expect(';');
		            if (!this.match(')')) {
		                update = this.parseExpression();
		            }
		        }
		        var body;
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		            body = this.finalize(this.createNode(), new Node.EmptyStatement());
		        }
		        else {
		            this.expect(')');
		            var previousInIteration = this.context.inIteration;
		            this.context.inIteration = true;
		            body = this.isolateCoverGrammar(this.parseStatement);
		            this.context.inIteration = previousInIteration;
		        }
		        return (typeof left === 'undefined') ?
		            this.finalize(node, new Node.ForStatement(init, test, update, body)) :
		            forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) :
		                this.finalize(node, new Node.ForOfStatement(left, right, body));
		    };
		    // https://tc39.github.io/ecma262/#sec-continue-statement
		    Parser.prototype.parseContinueStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('continue');
		        var label = null;
		        if (this.lookahead.type === 3 /* Identifier */ && !this.hasLineTerminator) {
		            var id = this.parseVariableIdentifier();
		            label = id;
		            var key = '$' + id.name;
		            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
		                this.throwError(messages_1.Messages.UnknownLabel, id.name);
		            }
		        }
		        this.consumeSemicolon();
		        if (label === null && !this.context.inIteration) {
		            this.throwError(messages_1.Messages.IllegalContinue);
		        }
		        return this.finalize(node, new Node.ContinueStatement(label));
		    };
		    // https://tc39.github.io/ecma262/#sec-break-statement
		    Parser.prototype.parseBreakStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('break');
		        var label = null;
		        if (this.lookahead.type === 3 /* Identifier */ && !this.hasLineTerminator) {
		            var id = this.parseVariableIdentifier();
		            var key = '$' + id.name;
		            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
		                this.throwError(messages_1.Messages.UnknownLabel, id.name);
		            }
		            label = id;
		        }
		        this.consumeSemicolon();
		        if (label === null && !this.context.inIteration && !this.context.inSwitch) {
		            this.throwError(messages_1.Messages.IllegalBreak);
		        }
		        return this.finalize(node, new Node.BreakStatement(label));
		    };
		    // https://tc39.github.io/ecma262/#sec-return-statement
		    Parser.prototype.parseReturnStatement = function () {
		        if (!this.context.inFunctionBody) {
		            this.tolerateError(messages_1.Messages.IllegalReturn);
		        }
		        var node = this.createNode();
		        this.expectKeyword('return');
		        var hasArgument = (!this.match(';') && !this.match('}') &&
		            !this.hasLineTerminator && this.lookahead.type !== 2 /* EOF */) ||
		            this.lookahead.type === 8 /* StringLiteral */ ||
		            this.lookahead.type === 10 /* Template */;
		        var argument = hasArgument ? this.parseExpression() : null;
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ReturnStatement(argument));
		    };
		    // https://tc39.github.io/ecma262/#sec-with-statement
		    Parser.prototype.parseWithStatement = function () {
		        if (this.context.strict) {
		            this.tolerateError(messages_1.Messages.StrictModeWith);
		        }
		        var node = this.createNode();
		        var body;
		        this.expectKeyword('with');
		        this.expect('(');
		        var object = this.parseExpression();
		        if (!this.match(')') && this.config.tolerant) {
		            this.tolerateUnexpectedToken(this.nextToken());
		            body = this.finalize(this.createNode(), new Node.EmptyStatement());
		        }
		        else {
		            this.expect(')');
		            body = this.parseStatement();
		        }
		        return this.finalize(node, new Node.WithStatement(object, body));
		    };
		    // https://tc39.github.io/ecma262/#sec-switch-statement
		    Parser.prototype.parseSwitchCase = function () {
		        var node = this.createNode();
		        var test;
		        if (this.matchKeyword('default')) {
		            this.nextToken();
		            test = null;
		        }
		        else {
		            this.expectKeyword('case');
		            test = this.parseExpression();
		        }
		        this.expect(':');
		        var consequent = [];
		        while (true) {
		            if (this.match('}') || this.matchKeyword('default') || this.matchKeyword('case')) {
		                break;
		            }
		            consequent.push(this.parseStatementListItem());
		        }
		        return this.finalize(node, new Node.SwitchCase(test, consequent));
		    };
		    Parser.prototype.parseSwitchStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('switch');
		        this.expect('(');
		        var discriminant = this.parseExpression();
		        this.expect(')');
		        var previousInSwitch = this.context.inSwitch;
		        this.context.inSwitch = true;
		        var cases = [];
		        var defaultFound = false;
		        this.expect('{');
		        while (true) {
		            if (this.match('}')) {
		                break;
		            }
		            var clause = this.parseSwitchCase();
		            if (clause.test === null) {
		                if (defaultFound) {
		                    this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
		                }
		                defaultFound = true;
		            }
		            cases.push(clause);
		        }
		        this.expect('}');
		        this.context.inSwitch = previousInSwitch;
		        return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
		    };
		    // https://tc39.github.io/ecma262/#sec-labelled-statements
		    Parser.prototype.parseLabelledStatement = function () {
		        var node = this.createNode();
		        var expr = this.parseExpression();
		        var statement;
		        if ((expr.type === syntax_1.Syntax.Identifier) && this.match(':')) {
		            this.nextToken();
		            var id = expr;
		            var key = '$' + id.name;
		            if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
		                this.throwError(messages_1.Messages.Redeclaration, 'Label', id.name);
		            }
		            this.context.labelSet[key] = true;
		            var body = void 0;
		            if (this.matchKeyword('class')) {
		                this.tolerateUnexpectedToken(this.lookahead);
		                body = this.parseClassDeclaration();
		            }
		            else if (this.matchKeyword('function')) {
		                var token = this.lookahead;
		                var declaration = this.parseFunctionDeclaration();
		                if (this.context.strict) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
		                }
		                else if (declaration.generator) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
		                }
		                body = declaration;
		            }
		            else {
		                body = this.parseStatement();
		            }
		            delete this.context.labelSet[key];
		            statement = new Node.LabeledStatement(id, body);
		        }
		        else {
		            this.consumeSemicolon();
		            statement = new Node.ExpressionStatement(expr);
		        }
		        return this.finalize(node, statement);
		    };
		    // https://tc39.github.io/ecma262/#sec-throw-statement
		    Parser.prototype.parseThrowStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('throw');
		        if (this.hasLineTerminator) {
		            this.throwError(messages_1.Messages.NewlineAfterThrow);
		        }
		        var argument = this.parseExpression();
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ThrowStatement(argument));
		    };
		    // https://tc39.github.io/ecma262/#sec-try-statement
		    Parser.prototype.parseCatchClause = function () {
		        var node = this.createNode();
		        this.expectKeyword('catch');
		        this.expect('(');
		        if (this.match(')')) {
		            this.throwUnexpectedToken(this.lookahead);
		        }
		        var params = [];
		        var param = this.parsePattern(params);
		        var paramMap = {};
		        for (var i = 0; i < params.length; i++) {
		            var key = '$' + params[i].value;
		            if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
		                this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
		            }
		            paramMap[key] = true;
		        }
		        if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
		            if (this.scanner.isRestrictedWord(param.name)) {
		                this.tolerateError(messages_1.Messages.StrictCatchVariable);
		            }
		        }
		        this.expect(')');
		        var body = this.parseBlock();
		        return this.finalize(node, new Node.CatchClause(param, body));
		    };
		    Parser.prototype.parseFinallyClause = function () {
		        this.expectKeyword('finally');
		        return this.parseBlock();
		    };
		    Parser.prototype.parseTryStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('try');
		        var block = this.parseBlock();
		        var handler = this.matchKeyword('catch') ? this.parseCatchClause() : null;
		        var finalizer = this.matchKeyword('finally') ? this.parseFinallyClause() : null;
		        if (!handler && !finalizer) {
		            this.throwError(messages_1.Messages.NoCatchOrFinally);
		        }
		        return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
		    };
		    // https://tc39.github.io/ecma262/#sec-debugger-statement
		    Parser.prototype.parseDebuggerStatement = function () {
		        var node = this.createNode();
		        this.expectKeyword('debugger');
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.DebuggerStatement());
		    };
		    // https://tc39.github.io/ecma262/#sec-ecmascript-language-statements-and-declarations
		    Parser.prototype.parseStatement = function () {
		        var statement;
		        switch (this.lookahead.type) {
		            case 1 /* BooleanLiteral */:
		            case 5 /* NullLiteral */:
		            case 6 /* NumericLiteral */:
		            case 8 /* StringLiteral */:
		            case 10 /* Template */:
		            case 9 /* RegularExpression */:
		                statement = this.parseExpressionStatement();
		                break;
		            case 7 /* Punctuator */:
		                var value = this.lookahead.value;
		                if (value === '{') {
		                    statement = this.parseBlock();
		                }
		                else if (value === '(') {
		                    statement = this.parseExpressionStatement();
		                }
		                else if (value === ';') {
		                    statement = this.parseEmptyStatement();
		                }
		                else {
		                    statement = this.parseExpressionStatement();
		                }
		                break;
		            case 3 /* Identifier */:
		                statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
		                break;
		            case 4 /* Keyword */:
		                switch (this.lookahead.value) {
		                    case 'break':
		                        statement = this.parseBreakStatement();
		                        break;
		                    case 'continue':
		                        statement = this.parseContinueStatement();
		                        break;
		                    case 'debugger':
		                        statement = this.parseDebuggerStatement();
		                        break;
		                    case 'do':
		                        statement = this.parseDoWhileStatement();
		                        break;
		                    case 'for':
		                        statement = this.parseForStatement();
		                        break;
		                    case 'function':
		                        statement = this.parseFunctionDeclaration();
		                        break;
		                    case 'if':
		                        statement = this.parseIfStatement();
		                        break;
		                    case 'return':
		                        statement = this.parseReturnStatement();
		                        break;
		                    case 'switch':
		                        statement = this.parseSwitchStatement();
		                        break;
		                    case 'throw':
		                        statement = this.parseThrowStatement();
		                        break;
		                    case 'try':
		                        statement = this.parseTryStatement();
		                        break;
		                    case 'var':
		                        statement = this.parseVariableStatement();
		                        break;
		                    case 'while':
		                        statement = this.parseWhileStatement();
		                        break;
		                    case 'with':
		                        statement = this.parseWithStatement();
		                        break;
		                    default:
		                        statement = this.parseExpressionStatement();
		                        break;
		                }
		                break;
		            default:
		                statement = this.throwUnexpectedToken(this.lookahead);
		        }
		        return statement;
		    };
		    // https://tc39.github.io/ecma262/#sec-function-definitions
		    Parser.prototype.parseFunctionSourceElements = function () {
		        var node = this.createNode();
		        this.expect('{');
		        var body = this.parseDirectivePrologues();
		        var previousLabelSet = this.context.labelSet;
		        var previousInIteration = this.context.inIteration;
		        var previousInSwitch = this.context.inSwitch;
		        var previousInFunctionBody = this.context.inFunctionBody;
		        this.context.labelSet = {};
		        this.context.inIteration = false;
		        this.context.inSwitch = false;
		        this.context.inFunctionBody = true;
		        while (this.lookahead.type !== 2 /* EOF */) {
		            if (this.match('}')) {
		                break;
		            }
		            body.push(this.parseStatementListItem());
		        }
		        this.expect('}');
		        this.context.labelSet = previousLabelSet;
		        this.context.inIteration = previousInIteration;
		        this.context.inSwitch = previousInSwitch;
		        this.context.inFunctionBody = previousInFunctionBody;
		        return this.finalize(node, new Node.BlockStatement(body));
		    };
		    Parser.prototype.validateParam = function (options, param, name) {
		        var key = '$' + name;
		        if (this.context.strict) {
		            if (this.scanner.isRestrictedWord(name)) {
		                options.stricted = param;
		                options.message = messages_1.Messages.StrictParamName;
		            }
		            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
		                options.stricted = param;
		                options.message = messages_1.Messages.StrictParamDupe;
		            }
		        }
		        else if (!options.firstRestricted) {
		            if (this.scanner.isRestrictedWord(name)) {
		                options.firstRestricted = param;
		                options.message = messages_1.Messages.StrictParamName;
		            }
		            else if (this.scanner.isStrictModeReservedWord(name)) {
		                options.firstRestricted = param;
		                options.message = messages_1.Messages.StrictReservedWord;
		            }
		            else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
		                options.stricted = param;
		                options.message = messages_1.Messages.StrictParamDupe;
		            }
		        }
		        /* istanbul ignore next */
		        if (typeof Object.defineProperty === 'function') {
		            Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
		        }
		        else {
		            options.paramSet[key] = true;
		        }
		    };
		    Parser.prototype.parseRestElement = function (params) {
		        var node = this.createNode();
		        this.expect('...');
		        var arg = this.parsePattern(params);
		        if (this.match('=')) {
		            this.throwError(messages_1.Messages.DefaultRestParameter);
		        }
		        if (!this.match(')')) {
		            this.throwError(messages_1.Messages.ParameterAfterRestParameter);
		        }
		        return this.finalize(node, new Node.RestElement(arg));
		    };
		    Parser.prototype.parseFormalParameter = function (options) {
		        var params = [];
		        var param = this.match('...') ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
		        for (var i = 0; i < params.length; i++) {
		            this.validateParam(options, params[i], params[i].value);
		        }
		        options.simple = options.simple && (param instanceof Node.Identifier);
		        options.params.push(param);
		    };
		    Parser.prototype.parseFormalParameters = function (firstRestricted) {
		        var options;
		        options = {
		            simple: true,
		            params: [],
		            firstRestricted: firstRestricted
		        };
		        this.expect('(');
		        if (!this.match(')')) {
		            options.paramSet = {};
		            while (this.lookahead.type !== 2 /* EOF */) {
		                this.parseFormalParameter(options);
		                if (this.match(')')) {
		                    break;
		                }
		                this.expect(',');
		                if (this.match(')')) {
		                    break;
		                }
		            }
		        }
		        this.expect(')');
		        return {
		            simple: options.simple,
		            params: options.params,
		            stricted: options.stricted,
		            firstRestricted: options.firstRestricted,
		            message: options.message
		        };
		    };
		    Parser.prototype.matchAsyncFunction = function () {
		        var match = this.matchContextualKeyword('async');
		        if (match) {
		            var state = this.scanner.saveState();
		            this.scanner.scanComments();
		            var next = this.scanner.lex();
		            this.scanner.restoreState(state);
		            match = (state.lineNumber === next.lineNumber) && (next.type === 4 /* Keyword */) && (next.value === 'function');
		        }
		        return match;
		    };
		    Parser.prototype.parseFunctionDeclaration = function (identifierIsOptional) {
		        var node = this.createNode();
		        var isAsync = this.matchContextualKeyword('async');
		        if (isAsync) {
		            this.nextToken();
		        }
		        this.expectKeyword('function');
		        var isGenerator = isAsync ? false : this.match('*');
		        if (isGenerator) {
		            this.nextToken();
		        }
		        var message;
		        var id = null;
		        var firstRestricted = null;
		        if (!identifierIsOptional || !this.match('(')) {
		            var token = this.lookahead;
		            id = this.parseVariableIdentifier();
		            if (this.context.strict) {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
		                }
		            }
		            else {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictFunctionName;
		                }
		                else if (this.scanner.isStrictModeReservedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictReservedWord;
		                }
		            }
		        }
		        var previousAllowAwait = this.context.await;
		        var previousAllowYield = this.context.allowYield;
		        this.context.await = isAsync;
		        this.context.allowYield = !isGenerator;
		        var formalParameters = this.parseFormalParameters(firstRestricted);
		        var params = formalParameters.params;
		        var stricted = formalParameters.stricted;
		        firstRestricted = formalParameters.firstRestricted;
		        if (formalParameters.message) {
		            message = formalParameters.message;
		        }
		        var previousStrict = this.context.strict;
		        var previousAllowStrictDirective = this.context.allowStrictDirective;
		        this.context.allowStrictDirective = formalParameters.simple;
		        var body = this.parseFunctionSourceElements();
		        if (this.context.strict && firstRestricted) {
		            this.throwUnexpectedToken(firstRestricted, message);
		        }
		        if (this.context.strict && stricted) {
		            this.tolerateUnexpectedToken(stricted, message);
		        }
		        this.context.strict = previousStrict;
		        this.context.allowStrictDirective = previousAllowStrictDirective;
		        this.context.await = previousAllowAwait;
		        this.context.allowYield = previousAllowYield;
		        return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) :
		            this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
		    };
		    Parser.prototype.parseFunctionExpression = function () {
		        var node = this.createNode();
		        var isAsync = this.matchContextualKeyword('async');
		        if (isAsync) {
		            this.nextToken();
		        }
		        this.expectKeyword('function');
		        var isGenerator = isAsync ? false : this.match('*');
		        if (isGenerator) {
		            this.nextToken();
		        }
		        var message;
		        var id = null;
		        var firstRestricted;
		        var previousAllowAwait = this.context.await;
		        var previousAllowYield = this.context.allowYield;
		        this.context.await = isAsync;
		        this.context.allowYield = !isGenerator;
		        if (!this.match('(')) {
		            var token = this.lookahead;
		            id = (!this.context.strict && !isGenerator && this.matchKeyword('yield')) ? this.parseIdentifierName() : this.parseVariableIdentifier();
		            if (this.context.strict) {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
		                }
		            }
		            else {
		                if (this.scanner.isRestrictedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictFunctionName;
		                }
		                else if (this.scanner.isStrictModeReservedWord(token.value)) {
		                    firstRestricted = token;
		                    message = messages_1.Messages.StrictReservedWord;
		                }
		            }
		        }
		        var formalParameters = this.parseFormalParameters(firstRestricted);
		        var params = formalParameters.params;
		        var stricted = formalParameters.stricted;
		        firstRestricted = formalParameters.firstRestricted;
		        if (formalParameters.message) {
		            message = formalParameters.message;
		        }
		        var previousStrict = this.context.strict;
		        var previousAllowStrictDirective = this.context.allowStrictDirective;
		        this.context.allowStrictDirective = formalParameters.simple;
		        var body = this.parseFunctionSourceElements();
		        if (this.context.strict && firstRestricted) {
		            this.throwUnexpectedToken(firstRestricted, message);
		        }
		        if (this.context.strict && stricted) {
		            this.tolerateUnexpectedToken(stricted, message);
		        }
		        this.context.strict = previousStrict;
		        this.context.allowStrictDirective = previousAllowStrictDirective;
		        this.context.await = previousAllowAwait;
		        this.context.allowYield = previousAllowYield;
		        return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) :
		            this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
		    };
		    // https://tc39.github.io/ecma262/#sec-directive-prologues-and-the-use-strict-directive
		    Parser.prototype.parseDirective = function () {
		        var token = this.lookahead;
		        var node = this.createNode();
		        var expr = this.parseExpression();
		        var directive = (expr.type === syntax_1.Syntax.Literal) ? this.getTokenRaw(token).slice(1, -1) : null;
		        this.consumeSemicolon();
		        return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
		    };
		    Parser.prototype.parseDirectivePrologues = function () {
		        var firstRestricted = null;
		        var body = [];
		        while (true) {
		            var token = this.lookahead;
		            if (token.type !== 8 /* StringLiteral */) {
		                break;
		            }
		            var statement = this.parseDirective();
		            body.push(statement);
		            var directive = statement.directive;
		            if (typeof directive !== 'string') {
		                break;
		            }
		            if (directive === 'use strict') {
		                this.context.strict = true;
		                if (firstRestricted) {
		                    this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
		                }
		                if (!this.context.allowStrictDirective) {
		                    this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
		                }
		            }
		            else {
		                if (!firstRestricted && token.octal) {
		                    firstRestricted = token;
		                }
		            }
		        }
		        return body;
		    };
		    // https://tc39.github.io/ecma262/#sec-method-definitions
		    Parser.prototype.qualifiedPropertyName = function (token) {
		        switch (token.type) {
		            case 3 /* Identifier */:
		            case 8 /* StringLiteral */:
		            case 1 /* BooleanLiteral */:
		            case 5 /* NullLiteral */:
		            case 6 /* NumericLiteral */:
		            case 4 /* Keyword */:
		                return true;
		            case 7 /* Punctuator */:
		                return token.value === '[';
		            default:
		                break;
		        }
		        return false;
		    };
		    Parser.prototype.parseGetterMethod = function () {
		        var node = this.createNode();
		        var isGenerator = false;
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = !isGenerator;
		        var formalParameters = this.parseFormalParameters();
		        if (formalParameters.params.length > 0) {
		            this.tolerateError(messages_1.Messages.BadGetterArity);
		        }
		        var method = this.parsePropertyMethod(formalParameters);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
		    };
		    Parser.prototype.parseSetterMethod = function () {
		        var node = this.createNode();
		        var isGenerator = false;
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = !isGenerator;
		        var formalParameters = this.parseFormalParameters();
		        if (formalParameters.params.length !== 1) {
		            this.tolerateError(messages_1.Messages.BadSetterArity);
		        }
		        else if (formalParameters.params[0] instanceof Node.RestElement) {
		            this.tolerateError(messages_1.Messages.BadSetterRestParameter);
		        }
		        var method = this.parsePropertyMethod(formalParameters);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
		    };
		    Parser.prototype.parseGeneratorMethod = function () {
		        var node = this.createNode();
		        var isGenerator = true;
		        var previousAllowYield = this.context.allowYield;
		        this.context.allowYield = true;
		        var params = this.parseFormalParameters();
		        this.context.allowYield = false;
		        var method = this.parsePropertyMethod(params);
		        this.context.allowYield = previousAllowYield;
		        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
		    };
		    // https://tc39.github.io/ecma262/#sec-generator-function-definitions
		    Parser.prototype.isStartOfExpression = function () {
		        var start = true;
		        var value = this.lookahead.value;
		        switch (this.lookahead.type) {
		            case 7 /* Punctuator */:
		                start = (value === '[') || (value === '(') || (value === '{') ||
		                    (value === '+') || (value === '-') ||
		                    (value === '!') || (value === '~') ||
		                    (value === '++') || (value === '--') ||
		                    (value === '/') || (value === '/='); // regular expression literal
		                break;
		            case 4 /* Keyword */:
		                start = (value === 'class') || (value === 'delete') ||
		                    (value === 'function') || (value === 'let') || (value === 'new') ||
		                    (value === 'super') || (value === 'this') || (value === 'typeof') ||
		                    (value === 'void') || (value === 'yield');
		                break;
		            default:
		                break;
		        }
		        return start;
		    };
		    Parser.prototype.parseYieldExpression = function () {
		        var node = this.createNode();
		        this.expectKeyword('yield');
		        var argument = null;
		        var delegate = false;
		        if (!this.hasLineTerminator) {
		            var previousAllowYield = this.context.allowYield;
		            this.context.allowYield = false;
		            delegate = this.match('*');
		            if (delegate) {
		                this.nextToken();
		                argument = this.parseAssignmentExpression();
		            }
		            else if (this.isStartOfExpression()) {
		                argument = this.parseAssignmentExpression();
		            }
		            this.context.allowYield = previousAllowYield;
		        }
		        return this.finalize(node, new Node.YieldExpression(argument, delegate));
		    };
		    // https://tc39.github.io/ecma262/#sec-class-definitions
		    Parser.prototype.parseClassElement = function (hasConstructor) {
		        var token = this.lookahead;
		        var node = this.createNode();
		        var kind = '';
		        var key = null;
		        var value = null;
		        var computed = false;
		        var method = false;
		        var isStatic = false;
		        var isAsync = false;
		        if (this.match('*')) {
		            this.nextToken();
		        }
		        else {
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            var id = key;
		            if (id.name === 'static' && (this.qualifiedPropertyName(this.lookahead) || this.match('*'))) {
		                token = this.lookahead;
		                isStatic = true;
		                computed = this.match('[');
		                if (this.match('*')) {
		                    this.nextToken();
		                }
		                else {
		                    key = this.parseObjectPropertyKey();
		                }
		            }
		            if ((token.type === 3 /* Identifier */) && !this.hasLineTerminator && (token.value === 'async')) {
		                var punctuator = this.lookahead.value;
		                if (punctuator !== ':' && punctuator !== '(' && punctuator !== '*') {
		                    isAsync = true;
		                    token = this.lookahead;
		                    key = this.parseObjectPropertyKey();
		                    if (token.type === 3 /* Identifier */ && token.value === 'constructor') {
		                        this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
		                    }
		                }
		            }
		        }
		        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
		        if (token.type === 3 /* Identifier */) {
		            if (token.value === 'get' && lookaheadPropertyKey) {
		                kind = 'get';
		                computed = this.match('[');
		                key = this.parseObjectPropertyKey();
		                this.context.allowYield = false;
		                value = this.parseGetterMethod();
		            }
		            else if (token.value === 'set' && lookaheadPropertyKey) {
		                kind = 'set';
		                computed = this.match('[');
		                key = this.parseObjectPropertyKey();
		                value = this.parseSetterMethod();
		            }
		        }
		        else if (token.type === 7 /* Punctuator */ && token.value === '*' && lookaheadPropertyKey) {
		            kind = 'init';
		            computed = this.match('[');
		            key = this.parseObjectPropertyKey();
		            value = this.parseGeneratorMethod();
		            method = true;
		        }
		        if (!kind && key && this.match('(')) {
		            kind = 'init';
		            value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
		            method = true;
		        }
		        if (!kind) {
		            this.throwUnexpectedToken(this.lookahead);
		        }
		        if (kind === 'init') {
		            kind = 'method';
		        }
		        if (!computed) {
		            if (isStatic && this.isPropertyKey(key, 'prototype')) {
		                this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
		            }
		            if (!isStatic && this.isPropertyKey(key, 'constructor')) {
		                if (kind !== 'method' || !method || (value && value.generator)) {
		                    this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
		                }
		                if (hasConstructor.value) {
		                    this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
		                }
		                else {
		                    hasConstructor.value = true;
		                }
		                kind = 'constructor';
		            }
		        }
		        return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
		    };
		    Parser.prototype.parseClassElementList = function () {
		        var body = [];
		        var hasConstructor = { value: false };
		        this.expect('{');
		        while (!this.match('}')) {
		            if (this.match(';')) {
		                this.nextToken();
		            }
		            else {
		                body.push(this.parseClassElement(hasConstructor));
		            }
		        }
		        this.expect('}');
		        return body;
		    };
		    Parser.prototype.parseClassBody = function () {
		        var node = this.createNode();
		        var elementList = this.parseClassElementList();
		        return this.finalize(node, new Node.ClassBody(elementList));
		    };
		    Parser.prototype.parseClassDeclaration = function (identifierIsOptional) {
		        var node = this.createNode();
		        var previousStrict = this.context.strict;
		        this.context.strict = true;
		        this.expectKeyword('class');
		        var id = (identifierIsOptional && (this.lookahead.type !== 3 /* Identifier */)) ? null : this.parseVariableIdentifier();
		        var superClass = null;
		        if (this.matchKeyword('extends')) {
		            this.nextToken();
		            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
		        }
		        var classBody = this.parseClassBody();
		        this.context.strict = previousStrict;
		        return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
		    };
		    Parser.prototype.parseClassExpression = function () {
		        var node = this.createNode();
		        var previousStrict = this.context.strict;
		        this.context.strict = true;
		        this.expectKeyword('class');
		        var id = (this.lookahead.type === 3 /* Identifier */) ? this.parseVariableIdentifier() : null;
		        var superClass = null;
		        if (this.matchKeyword('extends')) {
		            this.nextToken();
		            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
		        }
		        var classBody = this.parseClassBody();
		        this.context.strict = previousStrict;
		        return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
		    };
		    // https://tc39.github.io/ecma262/#sec-scripts
		    // https://tc39.github.io/ecma262/#sec-modules
		    Parser.prototype.parseModule = function () {
		        this.context.strict = true;
		        this.context.isModule = true;
		        this.scanner.isModule = true;
		        var node = this.createNode();
		        var body = this.parseDirectivePrologues();
		        while (this.lookahead.type !== 2 /* EOF */) {
		            body.push(this.parseStatementListItem());
		        }
		        return this.finalize(node, new Node.Module(body));
		    };
		    Parser.prototype.parseScript = function () {
		        var node = this.createNode();
		        var body = this.parseDirectivePrologues();
		        while (this.lookahead.type !== 2 /* EOF */) {
		            body.push(this.parseStatementListItem());
		        }
		        return this.finalize(node, new Node.Script(body));
		    };
		    // https://tc39.github.io/ecma262/#sec-imports
		    Parser.prototype.parseModuleSpecifier = function () {
		        var node = this.createNode();
		        if (this.lookahead.type !== 8 /* StringLiteral */) {
		            this.throwError(messages_1.Messages.InvalidModuleSpecifier);
		        }
		        var token = this.nextToken();
		        var raw = this.getTokenRaw(token);
		        return this.finalize(node, new Node.Literal(token.value, raw));
		    };
		    // import {<foo as bar>} ...;
		    Parser.prototype.parseImportSpecifier = function () {
		        var node = this.createNode();
		        var imported;
		        var local;
		        if (this.lookahead.type === 3 /* Identifier */) {
		            imported = this.parseVariableIdentifier();
		            local = imported;
		            if (this.matchContextualKeyword('as')) {
		                this.nextToken();
		                local = this.parseVariableIdentifier();
		            }
		        }
		        else {
		            imported = this.parseIdentifierName();
		            local = imported;
		            if (this.matchContextualKeyword('as')) {
		                this.nextToken();
		                local = this.parseVariableIdentifier();
		            }
		            else {
		                this.throwUnexpectedToken(this.nextToken());
		            }
		        }
		        return this.finalize(node, new Node.ImportSpecifier(local, imported));
		    };
		    // {foo, bar as bas}
		    Parser.prototype.parseNamedImports = function () {
		        this.expect('{');
		        var specifiers = [];
		        while (!this.match('}')) {
		            specifiers.push(this.parseImportSpecifier());
		            if (!this.match('}')) {
		                this.expect(',');
		            }
		        }
		        this.expect('}');
		        return specifiers;
		    };
		    // import <foo> ...;
		    Parser.prototype.parseImportDefaultSpecifier = function () {
		        var node = this.createNode();
		        var local = this.parseIdentifierName();
		        return this.finalize(node, new Node.ImportDefaultSpecifier(local));
		    };
		    // import <* as foo> ...;
		    Parser.prototype.parseImportNamespaceSpecifier = function () {
		        var node = this.createNode();
		        this.expect('*');
		        if (!this.matchContextualKeyword('as')) {
		            this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
		        }
		        this.nextToken();
		        var local = this.parseIdentifierName();
		        return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
		    };
		    Parser.prototype.parseImportDeclaration = function () {
		        if (this.context.inFunctionBody) {
		            this.throwError(messages_1.Messages.IllegalImportDeclaration);
		        }
		        var node = this.createNode();
		        this.expectKeyword('import');
		        var src;
		        var specifiers = [];
		        if (this.lookahead.type === 8 /* StringLiteral */) {
		            // import 'foo';
		            src = this.parseModuleSpecifier();
		        }
		        else {
		            if (this.match('{')) {
		                // import {bar}
		                specifiers = specifiers.concat(this.parseNamedImports());
		            }
		            else if (this.match('*')) {
		                // import * as foo
		                specifiers.push(this.parseImportNamespaceSpecifier());
		            }
		            else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword('default')) {
		                // import foo
		                specifiers.push(this.parseImportDefaultSpecifier());
		                if (this.match(',')) {
		                    this.nextToken();
		                    if (this.match('*')) {
		                        // import foo, * as foo
		                        specifiers.push(this.parseImportNamespaceSpecifier());
		                    }
		                    else if (this.match('{')) {
		                        // import foo, {bar}
		                        specifiers = specifiers.concat(this.parseNamedImports());
		                    }
		                    else {
		                        this.throwUnexpectedToken(this.lookahead);
		                    }
		                }
		            }
		            else {
		                this.throwUnexpectedToken(this.nextToken());
		            }
		            if (!this.matchContextualKeyword('from')) {
		                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
		                this.throwError(message, this.lookahead.value);
		            }
		            this.nextToken();
		            src = this.parseModuleSpecifier();
		        }
		        this.consumeSemicolon();
		        return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
		    };
		    // https://tc39.github.io/ecma262/#sec-exports
		    Parser.prototype.parseExportSpecifier = function () {
		        var node = this.createNode();
		        var local = this.parseIdentifierName();
		        var exported = local;
		        if (this.matchContextualKeyword('as')) {
		            this.nextToken();
		            exported = this.parseIdentifierName();
		        }
		        return this.finalize(node, new Node.ExportSpecifier(local, exported));
		    };
		    Parser.prototype.parseExportDeclaration = function () {
		        if (this.context.inFunctionBody) {
		            this.throwError(messages_1.Messages.IllegalExportDeclaration);
		        }
		        var node = this.createNode();
		        this.expectKeyword('export');
		        var exportDeclaration;
		        if (this.matchKeyword('default')) {
		            // export default ...
		            this.nextToken();
		            if (this.matchKeyword('function')) {
		                // export default function foo () {}
		                // export default function () {}
		                var declaration = this.parseFunctionDeclaration(true);
		                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
		            }
		            else if (this.matchKeyword('class')) {
		                // export default class foo {}
		                var declaration = this.parseClassDeclaration(true);
		                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
		            }
		            else if (this.matchContextualKeyword('async')) {
		                // export default async function f () {}
		                // export default async function () {}
		                // export default async x => x
		                var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
		                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
		            }
		            else {
		                if (this.matchContextualKeyword('from')) {
		                    this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
		                }
		                // export default {};
		                // export default [];
		                // export default (1 + 2);
		                var declaration = this.match('{') ? this.parseObjectInitializer() :
		                    this.match('[') ? this.parseArrayInitializer() : this.parseAssignmentExpression();
		                this.consumeSemicolon();
		                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
		            }
		        }
		        else if (this.match('*')) {
		            // export * from 'foo';
		            this.nextToken();
		            if (!this.matchContextualKeyword('from')) {
		                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
		                this.throwError(message, this.lookahead.value);
		            }
		            this.nextToken();
		            var src = this.parseModuleSpecifier();
		            this.consumeSemicolon();
		            exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
		        }
		        else if (this.lookahead.type === 4 /* Keyword */) {
		            // export var f = 1;
		            var declaration = void 0;
		            switch (this.lookahead.value) {
		                case 'let':
		                case 'const':
		                    declaration = this.parseLexicalDeclaration({ inFor: false });
		                    break;
		                case 'var':
		                case 'class':
		                case 'function':
		                    declaration = this.parseStatementListItem();
		                    break;
		                default:
		                    this.throwUnexpectedToken(this.lookahead);
		            }
		            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
		        }
		        else if (this.matchAsyncFunction()) {
		            var declaration = this.parseFunctionDeclaration();
		            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
		        }
		        else {
		            var specifiers = [];
		            var source = null;
		            var isExportFromIdentifier = false;
		            this.expect('{');
		            while (!this.match('}')) {
		                isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword('default');
		                specifiers.push(this.parseExportSpecifier());
		                if (!this.match('}')) {
		                    this.expect(',');
		                }
		            }
		            this.expect('}');
		            if (this.matchContextualKeyword('from')) {
		                // export {default} from 'foo';
		                // export {foo} from 'foo';
		                this.nextToken();
		                source = this.parseModuleSpecifier();
		                this.consumeSemicolon();
		            }
		            else if (isExportFromIdentifier) {
		                // export {default}; // missing fromClause
		                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
		                this.throwError(message, this.lookahead.value);
		            }
		            else {
		                // export {foo};
		                this.consumeSemicolon();
		            }
		            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
		        }
		        return exportDeclaration;
		    };
		    return Parser;
		}());
		exports.Parser = Parser;
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		"use strict";
		// Ensure the condition is true, otherwise throw an error.
		// This is only to have a better contract semantic, i.e. another safety net
		// to catch a logic error. The condition shall be fulfilled in normal case.
		// Do NOT use this to enforce a certain condition on any user input.
		Object.defineProperty(exports, "__esModule", { value: true });
		function assert(condition, message) {
		    /* istanbul ignore if */
		    if (!condition) {
		        throw new Error('ASSERT: ' + message);
		    }
		}
		exports.assert = assert;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports) {
	
		"use strict";
		/* tslint:disable:max-classes-per-file */
		Object.defineProperty(exports, "__esModule", { value: true });
		var ErrorHandler = (function () {
		    function ErrorHandler() {
		        this.errors = [];
		        this.tolerant = false;
		    }
		    ErrorHandler.prototype.recordError = function (error) {
		        this.errors.push(error);
		    };
		    ErrorHandler.prototype.tolerate = function (error) {
		        if (this.tolerant) {
		            this.recordError(error);
		        }
		        else {
		            throw error;
		        }
		    };
		    ErrorHandler.prototype.constructError = function (msg, column) {
		        var error = new Error(msg);
		        try {
		            throw error;
		        }
		        catch (base) {
		            /* istanbul ignore else */
		            if (Object.create && Object.defineProperty) {
		                error = Object.create(base);
		                Object.defineProperty(error, 'column', { value: column });
		            }
		        }
		        /* istanbul ignore next */
		        return error;
		    };
		    ErrorHandler.prototype.createError = function (index, line, col, description) {
		        var msg = 'Line ' + line + ': ' + description;
		        var error = this.constructError(msg, col);
		        error.index = index;
		        error.lineNumber = line;
		        error.description = description;
		        return error;
		    };
		    ErrorHandler.prototype.throwError = function (index, line, col, description) {
		        throw this.createError(index, line, col, description);
		    };
		    ErrorHandler.prototype.tolerateError = function (index, line, col, description) {
		        var error = this.createError(index, line, col, description);
		        if (this.tolerant) {
		            this.recordError(error);
		        }
		        else {
		            throw error;
		        }
		    };
		    return ErrorHandler;
		}());
		exports.ErrorHandler = ErrorHandler;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		// Error messages should be identical to V8.
		exports.Messages = {
		    BadGetterArity: 'Getter must not have any formal parameters',
		    BadSetterArity: 'Setter must have exactly one formal parameter',
		    BadSetterRestParameter: 'Setter function argument must not be a rest parameter',
		    ConstructorIsAsync: 'Class constructor may not be an async method',
		    ConstructorSpecialMethod: 'Class constructor may not be an accessor',
		    DeclarationMissingInitializer: 'Missing initializer in %0 declaration',
		    DefaultRestParameter: 'Unexpected token =',
		    DuplicateBinding: 'Duplicate binding %0',
		    DuplicateConstructor: 'A class may only have one constructor',
		    DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
		    ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer',
		    GeneratorInLegacyContext: 'Generator declarations are not allowed in legacy contexts',
		    IllegalBreak: 'Illegal break statement',
		    IllegalContinue: 'Illegal continue statement',
		    IllegalExportDeclaration: 'Unexpected token',
		    IllegalImportDeclaration: 'Unexpected token',
		    IllegalLanguageModeDirective: 'Illegal \'use strict\' directive in function with non-simple parameter list',
		    IllegalReturn: 'Illegal return statement',
		    InvalidEscapedReservedWord: 'Keyword must not contain escaped characters',
		    InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
		    InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
		    InvalidLHSInForIn: 'Invalid left-hand side in for-in',
		    InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
		    InvalidModuleSpecifier: 'Unexpected token',
		    InvalidRegExp: 'Invalid regular expression',
		    LetInLexicalBinding: 'let is disallowed as a lexically bound name',
		    MissingFromClause: 'Unexpected token',
		    MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
		    NewlineAfterThrow: 'Illegal newline after throw',
		    NoAsAfterImportNamespace: 'Unexpected token',
		    NoCatchOrFinally: 'Missing catch or finally after try',
		    ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
		    Redeclaration: '%0 \'%1\' has already been declared',
		    StaticPrototype: 'Classes may not have static property named prototype',
		    StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
		    StrictDelete: 'Delete of an unqualified identifier in strict mode.',
		    StrictFunction: 'In strict mode code, functions can only be declared at top level or inside a block',
		    StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
		    StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
		    StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
		    StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
		    StrictModeWith: 'Strict mode code may not include a with statement',
		    StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
		    StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
		    StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
		    StrictReservedWord: 'Use of future reserved word in strict mode',
		    StrictVarName: 'Variable name may not be eval or arguments in strict mode',
		    TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
		    UnexpectedEOS: 'Unexpected end of input',
		    UnexpectedIdentifier: 'Unexpected identifier',
		    UnexpectedNumber: 'Unexpected number',
		    UnexpectedReserved: 'Unexpected reserved word',
		    UnexpectedString: 'Unexpected string',
		    UnexpectedTemplate: 'Unexpected quasi %0',
		    UnexpectedToken: 'Unexpected token %0',
		    UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
		    UnknownLabel: 'Undefined label \'%0\'',
		    UnterminatedRegExp: 'Invalid regular expression: missing /'
		};
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		var assert_1 = __webpack_require__(9);
		var character_1 = __webpack_require__(4);
		var messages_1 = __webpack_require__(11);
		function hexValue(ch) {
		    return '0123456789abcdef'.indexOf(ch.toLowerCase());
		}
		function octalValue(ch) {
		    return '01234567'.indexOf(ch);
		}
		var Scanner = (function () {
		    function Scanner(code, handler) {
		        this.source = code;
		        this.errorHandler = handler;
		        this.trackComment = false;
		        this.isModule = false;
		        this.length = code.length;
		        this.index = 0;
		        this.lineNumber = (code.length > 0) ? 1 : 0;
		        this.lineStart = 0;
		        this.curlyStack = [];
		    }
		    Scanner.prototype.saveState = function () {
		        return {
		            index: this.index,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart
		        };
		    };
		    Scanner.prototype.restoreState = function (state) {
		        this.index = state.index;
		        this.lineNumber = state.lineNumber;
		        this.lineStart = state.lineStart;
		    };
		    Scanner.prototype.eof = function () {
		        return this.index >= this.length;
		    };
		    Scanner.prototype.throwUnexpectedToken = function (message) {
		        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
		        return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
		    };
		    Scanner.prototype.tolerateUnexpectedToken = function (message) {
		        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
		        this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
		    };
		    // https://tc39.github.io/ecma262/#sec-comments
		    Scanner.prototype.skipSingleLineComment = function (offset) {
		        var comments = [];
		        var start, loc;
		        if (this.trackComment) {
		            comments = [];
		            start = this.index - offset;
		            loc = {
		                start: {
		                    line: this.lineNumber,
		                    column: this.index - this.lineStart - offset
		                },
		                end: {}
		            };
		        }
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            ++this.index;
		            if (character_1.Character.isLineTerminator(ch)) {
		                if (this.trackComment) {
		                    loc.end = {
		                        line: this.lineNumber,
		                        column: this.index - this.lineStart - 1
		                    };
		                    var entry = {
		                        multiLine: false,
		                        slice: [start + offset, this.index - 1],
		                        range: [start, this.index - 1],
		                        loc: loc
		                    };
		                    comments.push(entry);
		                }
		                if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
		                    ++this.index;
		                }
		                ++this.lineNumber;
		                this.lineStart = this.index;
		                return comments;
		            }
		        }
		        if (this.trackComment) {
		            loc.end = {
		                line: this.lineNumber,
		                column: this.index - this.lineStart
		            };
		            var entry = {
		                multiLine: false,
		                slice: [start + offset, this.index],
		                range: [start, this.index],
		                loc: loc
		            };
		            comments.push(entry);
		        }
		        return comments;
		    };
		    Scanner.prototype.skipMultiLineComment = function () {
		        var comments = [];
		        var start, loc;
		        if (this.trackComment) {
		            comments = [];
		            start = this.index - 2;
		            loc = {
		                start: {
		                    line: this.lineNumber,
		                    column: this.index - this.lineStart - 2
		                },
		                end: {}
		            };
		        }
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            if (character_1.Character.isLineTerminator(ch)) {
		                if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
		                    ++this.index;
		                }
		                ++this.lineNumber;
		                ++this.index;
		                this.lineStart = this.index;
		            }
		            else if (ch === 0x2A) {
		                // Block comment ends with '*/'.
		                if (this.source.charCodeAt(this.index + 1) === 0x2F) {
		                    this.index += 2;
		                    if (this.trackComment) {
		                        loc.end = {
		                            line: this.lineNumber,
		                            column: this.index - this.lineStart
		                        };
		                        var entry = {
		                            multiLine: true,
		                            slice: [start + 2, this.index - 2],
		                            range: [start, this.index],
		                            loc: loc
		                        };
		                        comments.push(entry);
		                    }
		                    return comments;
		                }
		                ++this.index;
		            }
		            else {
		                ++this.index;
		            }
		        }
		        // Ran off the end of the file - the whole thing is a comment
		        if (this.trackComment) {
		            loc.end = {
		                line: this.lineNumber,
		                column: this.index - this.lineStart
		            };
		            var entry = {
		                multiLine: true,
		                slice: [start + 2, this.index],
		                range: [start, this.index],
		                loc: loc
		            };
		            comments.push(entry);
		        }
		        this.tolerateUnexpectedToken();
		        return comments;
		    };
		    Scanner.prototype.scanComments = function () {
		        var comments;
		        if (this.trackComment) {
		            comments = [];
		        }
		        var start = (this.index === 0);
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            if (character_1.Character.isWhiteSpace(ch)) {
		                ++this.index;
		            }
		            else if (character_1.Character.isLineTerminator(ch)) {
		                ++this.index;
		                if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
		                    ++this.index;
		                }
		                ++this.lineNumber;
		                this.lineStart = this.index;
		                start = true;
		            }
		            else if (ch === 0x2F) {
		                ch = this.source.charCodeAt(this.index + 1);
		                if (ch === 0x2F) {
		                    this.index += 2;
		                    var comment = this.skipSingleLineComment(2);
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                    start = true;
		                }
		                else if (ch === 0x2A) {
		                    this.index += 2;
		                    var comment = this.skipMultiLineComment();
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                }
		                else {
		                    break;
		                }
		            }
		            else if (start && ch === 0x2D) {
		                // U+003E is '>'
		                if ((this.source.charCodeAt(this.index + 1) === 0x2D) && (this.source.charCodeAt(this.index + 2) === 0x3E)) {
		                    // '-->' is a single-line comment
		                    this.index += 3;
		                    var comment = this.skipSingleLineComment(3);
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                }
		                else {
		                    break;
		                }
		            }
		            else if (ch === 0x3C && !this.isModule) {
		                if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
		                    this.index += 4; // `<!--`
		                    var comment = this.skipSingleLineComment(4);
		                    if (this.trackComment) {
		                        comments = comments.concat(comment);
		                    }
		                }
		                else {
		                    break;
		                }
		            }
		            else {
		                break;
		            }
		        }
		        return comments;
		    };
		    // https://tc39.github.io/ecma262/#sec-future-reserved-words
		    Scanner.prototype.isFutureReservedWord = function (id) {
		        switch (id) {
		            case 'enum':
		            case 'export':
		            case 'import':
		            case 'super':
		                return true;
		            default:
		                return false;
		        }
		    };
		    Scanner.prototype.isStrictModeReservedWord = function (id) {
		        switch (id) {
		            case 'implements':
		            case 'interface':
		            case 'package':
		            case 'private':
		            case 'protected':
		            case 'public':
		            case 'static':
		            case 'yield':
		            case 'let':
		                return true;
		            default:
		                return false;
		        }
		    };
		    Scanner.prototype.isRestrictedWord = function (id) {
		        return id === 'eval' || id === 'arguments';
		    };
		    // https://tc39.github.io/ecma262/#sec-keywords
		    Scanner.prototype.isKeyword = function (id) {
		        switch (id.length) {
		            case 2:
		                return (id === 'if') || (id === 'in') || (id === 'do');
		            case 3:
		                return (id === 'var') || (id === 'for') || (id === 'new') ||
		                    (id === 'try') || (id === 'let');
		            case 4:
		                return (id === 'this') || (id === 'else') || (id === 'case') ||
		                    (id === 'void') || (id === 'with') || (id === 'enum');
		            case 5:
		                return (id === 'while') || (id === 'break') || (id === 'catch') ||
		                    (id === 'throw') || (id === 'const') || (id === 'yield') ||
		                    (id === 'class') || (id === 'super');
		            case 6:
		                return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
		                    (id === 'switch') || (id === 'export') || (id === 'import');
		            case 7:
		                return (id === 'default') || (id === 'finally') || (id === 'extends');
		            case 8:
		                return (id === 'function') || (id === 'continue') || (id === 'debugger');
		            case 10:
		                return (id === 'instanceof');
		            default:
		                return false;
		        }
		    };
		    Scanner.prototype.codePointAt = function (i) {
		        var cp = this.source.charCodeAt(i);
		        if (cp >= 0xD800 && cp <= 0xDBFF) {
		            var second = this.source.charCodeAt(i + 1);
		            if (second >= 0xDC00 && second <= 0xDFFF) {
		                var first = cp;
		                cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
		            }
		        }
		        return cp;
		    };
		    Scanner.prototype.scanHexEscape = function (prefix) {
		        var len = (prefix === 'u') ? 4 : 2;
		        var code = 0;
		        for (var i = 0; i < len; ++i) {
		            if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
		                code = code * 16 + hexValue(this.source[this.index++]);
		            }
		            else {
		                return null;
		            }
		        }
		        return String.fromCharCode(code);
		    };
		    Scanner.prototype.scanUnicodeCodePointEscape = function () {
		        var ch = this.source[this.index];
		        var code = 0;
		        // At least, one hex digit is required.
		        if (ch === '}') {
		            this.throwUnexpectedToken();
		        }
		        while (!this.eof()) {
		            ch = this.source[this.index++];
		            if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
		                break;
		            }
		            code = code * 16 + hexValue(ch);
		        }
		        if (code > 0x10FFFF || ch !== '}') {
		            this.throwUnexpectedToken();
		        }
		        return character_1.Character.fromCodePoint(code);
		    };
		    Scanner.prototype.getIdentifier = function () {
		        var start = this.index++;
		        while (!this.eof()) {
		            var ch = this.source.charCodeAt(this.index);
		            if (ch === 0x5C) {
		                // Blackslash (U+005C) marks Unicode escape sequence.
		                this.index = start;
		                return this.getComplexIdentifier();
		            }
		            else if (ch >= 0xD800 && ch < 0xDFFF) {
		                // Need to handle surrogate pairs.
		                this.index = start;
		                return this.getComplexIdentifier();
		            }
		            if (character_1.Character.isIdentifierPart(ch)) {
		                ++this.index;
		            }
		            else {
		                break;
		            }
		        }
		        return this.source.slice(start, this.index);
		    };
		    Scanner.prototype.getComplexIdentifier = function () {
		        var cp = this.codePointAt(this.index);
		        var id = character_1.Character.fromCodePoint(cp);
		        this.index += id.length;
		        // '\u' (U+005C, U+0075) denotes an escaped character.
		        var ch;
		        if (cp === 0x5C) {
		            if (this.source.charCodeAt(this.index) !== 0x75) {
		                this.throwUnexpectedToken();
		            }
		            ++this.index;
		            if (this.source[this.index] === '{') {
		                ++this.index;
		                ch = this.scanUnicodeCodePointEscape();
		            }
		            else {
		                ch = this.scanHexEscape('u');
		                if (ch === null || ch === '\\' || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
		                    this.throwUnexpectedToken();
		                }
		            }
		            id = ch;
		        }
		        while (!this.eof()) {
		            cp = this.codePointAt(this.index);
		            if (!character_1.Character.isIdentifierPart(cp)) {
		                break;
		            }
		            ch = character_1.Character.fromCodePoint(cp);
		            id += ch;
		            this.index += ch.length;
		            // '\u' (U+005C, U+0075) denotes an escaped character.
		            if (cp === 0x5C) {
		                id = id.substr(0, id.length - 1);
		                if (this.source.charCodeAt(this.index) !== 0x75) {
		                    this.throwUnexpectedToken();
		                }
		                ++this.index;
		                if (this.source[this.index] === '{') {
		                    ++this.index;
		                    ch = this.scanUnicodeCodePointEscape();
		                }
		                else {
		                    ch = this.scanHexEscape('u');
		                    if (ch === null || ch === '\\' || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
		                        this.throwUnexpectedToken();
		                    }
		                }
		                id += ch;
		            }
		        }
		        return id;
		    };
		    Scanner.prototype.octalToDecimal = function (ch) {
		        // \0 is not octal escape sequence
		        var octal = (ch !== '0');
		        var code = octalValue(ch);
		        if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
		            octal = true;
		            code = code * 8 + octalValue(this.source[this.index++]);
		            // 3 digits are only allowed when string starts
		            // with 0, 1, 2, 3
		            if ('0123'.indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
		                code = code * 8 + octalValue(this.source[this.index++]);
		            }
		        }
		        return {
		            code: code,
		            octal: octal
		        };
		    };
		    // https://tc39.github.io/ecma262/#sec-names-and-keywords
		    Scanner.prototype.scanIdentifier = function () {
		        var type;
		        var start = this.index;
		        // Backslash (U+005C) starts an escaped character.
		        var id = (this.source.charCodeAt(start) === 0x5C) ? this.getComplexIdentifier() : this.getIdentifier();
		        // There is no keyword or literal with only one character.
		        // Thus, it must be an identifier.
		        if (id.length === 1) {
		            type = 3 /* Identifier */;
		        }
		        else if (this.isKeyword(id)) {
		            type = 4 /* Keyword */;
		        }
		        else if (id === 'null') {
		            type = 5 /* NullLiteral */;
		        }
		        else if (id === 'true' || id === 'false') {
		            type = 1 /* BooleanLiteral */;
		        }
		        else {
		            type = 3 /* Identifier */;
		        }
		        if (type !== 3 /* Identifier */ && (start + id.length !== this.index)) {
		            var restore = this.index;
		            this.index = start;
		            this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
		            this.index = restore;
		        }
		        return {
		            type: type,
		            value: id,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    // https://tc39.github.io/ecma262/#sec-punctuators
		    Scanner.prototype.scanPunctuator = function () {
		        var start = this.index;
		        // Check for most common single-character punctuators.
		        var str = this.source[this.index];
		        switch (str) {
		            case '(':
		            case '{':
		                if (str === '{') {
		                    this.curlyStack.push('{');
		                }
		                ++this.index;
		                break;
		            case '.':
		                ++this.index;
		                if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
		                    // Spread operator: ...
		                    this.index += 2;
		                    str = '...';
		                }
		                break;
		            case '}':
		                ++this.index;
		                this.curlyStack.pop();
		                break;
		            case ')':
		            case ';':
		            case ',':
		            case '[':
		            case ']':
		            case ':':
		            case '?':
		            case '~':
		                ++this.index;
		                break;
		            default:
		                // 4-character punctuator.
		                str = this.source.substr(this.index, 4);
		                if (str === '>>>=') {
		                    this.index += 4;
		                }
		                else {
		                    // 3-character punctuators.
		                    str = str.substr(0, 3);
		                    if (str === '===' || str === '!==' || str === '>>>' ||
		                        str === '<<=' || str === '>>=' || str === '**=') {
		                        this.index += 3;
		                    }
		                    else {
		                        // 2-character punctuators.
		                        str = str.substr(0, 2);
		                        if (str === '&&' || str === '||' || str === '==' || str === '!=' ||
		                            str === '+=' || str === '-=' || str === '*=' || str === '/=' ||
		                            str === '++' || str === '--' || str === '<<' || str === '>>' ||
		                            str === '&=' || str === '|=' || str === '^=' || str === '%=' ||
		                            str === '<=' || str === '>=' || str === '=>' || str === '**') {
		                            this.index += 2;
		                        }
		                        else {
		                            // 1-character punctuators.
		                            str = this.source[this.index];
		                            if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
		                                ++this.index;
		                            }
		                        }
		                    }
		                }
		        }
		        if (this.index === start) {
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: 7 /* Punctuator */,
		            value: str,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
		    Scanner.prototype.scanHexLiteral = function (start) {
		        var num = '';
		        while (!this.eof()) {
		            if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
		                break;
		            }
		            num += this.source[this.index++];
		        }
		        if (num.length === 0) {
		            this.throwUnexpectedToken();
		        }
		        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: 6 /* NumericLiteral */,
		            value: parseInt('0x' + num, 16),
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    Scanner.prototype.scanBinaryLiteral = function (start) {
		        var num = '';
		        var ch;
		        while (!this.eof()) {
		            ch = this.source[this.index];
		            if (ch !== '0' && ch !== '1') {
		                break;
		            }
		            num += this.source[this.index++];
		        }
		        if (num.length === 0) {
		            // only 0b or 0B
		            this.throwUnexpectedToken();
		        }
		        if (!this.eof()) {
		            ch = this.source.charCodeAt(this.index);
		            /* istanbul ignore else */
		            if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
		                this.throwUnexpectedToken();
		            }
		        }
		        return {
		            type: 6 /* NumericLiteral */,
		            value: parseInt(num, 2),
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    Scanner.prototype.scanOctalLiteral = function (prefix, start) {
		        var num = '';
		        var octal = false;
		        if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
		            octal = true;
		            num = '0' + this.source[this.index++];
		        }
		        else {
		            ++this.index;
		        }
		        while (!this.eof()) {
		            if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
		                break;
		            }
		            num += this.source[this.index++];
		        }
		        if (!octal && num.length === 0) {
		            // only 0o or 0O
		            this.throwUnexpectedToken();
		        }
		        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: 6 /* NumericLiteral */,
		            value: parseInt(num, 8),
		            octal: octal,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    Scanner.prototype.isImplicitOctalLiteral = function () {
		        // Implicit octal, unless there is a non-octal digit.
		        // (Annex B.1.1 on Numeric Literals)
		        for (var i = this.index + 1; i < this.length; ++i) {
		            var ch = this.source[i];
		            if (ch === '8' || ch === '9') {
		                return false;
		            }
		            if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                return true;
		            }
		        }
		        return true;
		    };
		    Scanner.prototype.scanNumericLiteral = function () {
		        var start = this.index;
		        var ch = this.source[start];
		        assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
		        var num = '';
		        if (ch !== '.') {
		            num = this.source[this.index++];
		            ch = this.source[this.index];
		            // Hex number starts with '0x'.
		            // Octal number starts with '0'.
		            // Octal number in ES6 starts with '0o'.
		            // Binary number in ES6 starts with '0b'.
		            if (num === '0') {
		                if (ch === 'x' || ch === 'X') {
		                    ++this.index;
		                    return this.scanHexLiteral(start);
		                }
		                if (ch === 'b' || ch === 'B') {
		                    ++this.index;
		                    return this.scanBinaryLiteral(start);
		                }
		                if (ch === 'o' || ch === 'O') {
		                    return this.scanOctalLiteral(ch, start);
		                }
		                if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                    if (this.isImplicitOctalLiteral()) {
		                        return this.scanOctalLiteral(ch, start);
		                    }
		                }
		            }
		            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                num += this.source[this.index++];
		            }
		            ch = this.source[this.index];
		        }
		        if (ch === '.') {
		            num += this.source[this.index++];
		            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                num += this.source[this.index++];
		            }
		            ch = this.source[this.index];
		        }
		        if (ch === 'e' || ch === 'E') {
		            num += this.source[this.index++];
		            ch = this.source[this.index];
		            if (ch === '+' || ch === '-') {
		                num += this.source[this.index++];
		            }
		            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                    num += this.source[this.index++];
		                }
		            }
		            else {
		                this.throwUnexpectedToken();
		            }
		        }
		        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: 6 /* NumericLiteral */,
		            value: parseFloat(num),
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    // https://tc39.github.io/ecma262/#sec-literals-string-literals
		    Scanner.prototype.scanStringLiteral = function () {
		        var start = this.index;
		        var quote = this.source[start];
		        assert_1.assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
		        ++this.index;
		        var octal = false;
		        var str = '';
		        while (!this.eof()) {
		            var ch = this.source[this.index++];
		            if (ch === quote) {
		                quote = '';
		                break;
		            }
		            else if (ch === '\\') {
		                ch = this.source[this.index++];
		                if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                    switch (ch) {
		                        case 'u':
		                            if (this.source[this.index] === '{') {
		                                ++this.index;
		                                str += this.scanUnicodeCodePointEscape();
		                            }
		                            else {
		                                var unescaped_1 = this.scanHexEscape(ch);
		                                if (unescaped_1 === null) {
		                                    this.throwUnexpectedToken();
		                                }
		                                str += unescaped_1;
		                            }
		                            break;
		                        case 'x':
		                            var unescaped = this.scanHexEscape(ch);
		                            if (unescaped === null) {
		                                this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
		                            }
		                            str += unescaped;
		                            break;
		                        case 'n':
		                            str += '\n';
		                            break;
		                        case 'r':
		                            str += '\r';
		                            break;
		                        case 't':
		                            str += '\t';
		                            break;
		                        case 'b':
		                            str += '\b';
		                            break;
		                        case 'f':
		                            str += '\f';
		                            break;
		                        case 'v':
		                            str += '\x0B';
		                            break;
		                        case '8':
		                        case '9':
		                            str += ch;
		                            this.tolerateUnexpectedToken();
		                            break;
		                        default:
		                            if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                                var octToDec = this.octalToDecimal(ch);
		                                octal = octToDec.octal || octal;
		                                str += String.fromCharCode(octToDec.code);
		                            }
		                            else {
		                                str += ch;
		                            }
		                            break;
		                    }
		                }
		                else {
		                    ++this.lineNumber;
		                    if (ch === '\r' && this.source[this.index] === '\n') {
		                        ++this.index;
		                    }
		                    this.lineStart = this.index;
		                }
		            }
		            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                break;
		            }
		            else {
		                str += ch;
		            }
		        }
		        if (quote !== '') {
		            this.index = start;
		            this.throwUnexpectedToken();
		        }
		        return {
		            type: 8 /* StringLiteral */,
		            value: str,
		            octal: octal,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    // https://tc39.github.io/ecma262/#sec-template-literal-lexical-components
		    Scanner.prototype.scanTemplate = function () {
		        var cooked = '';
		        var terminated = false;
		        var start = this.index;
		        var head = (this.source[start] === '`');
		        var tail = false;
		        var rawOffset = 2;
		        ++this.index;
		        while (!this.eof()) {
		            var ch = this.source[this.index++];
		            if (ch === '`') {
		                rawOffset = 1;
		                tail = true;
		                terminated = true;
		                break;
		            }
		            else if (ch === '$') {
		                if (this.source[this.index] === '{') {
		                    this.curlyStack.push('${');
		                    ++this.index;
		                    terminated = true;
		                    break;
		                }
		                cooked += ch;
		            }
		            else if (ch === '\\') {
		                ch = this.source[this.index++];
		                if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                    switch (ch) {
		                        case 'n':
		                            cooked += '\n';
		                            break;
		                        case 'r':
		                            cooked += '\r';
		                            break;
		                        case 't':
		                            cooked += '\t';
		                            break;
		                        case 'u':
		                            if (this.source[this.index] === '{') {
		                                ++this.index;
		                                cooked += this.scanUnicodeCodePointEscape();
		                            }
		                            else {
		                                var restore = this.index;
		                                var unescaped_2 = this.scanHexEscape(ch);
		                                if (unescaped_2 !== null) {
		                                    cooked += unescaped_2;
		                                }
		                                else {
		                                    this.index = restore;
		                                    cooked += ch;
		                                }
		                            }
		                            break;
		                        case 'x':
		                            var unescaped = this.scanHexEscape(ch);
		                            if (unescaped === null) {
		                                this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
		                            }
		                            cooked += unescaped;
		                            break;
		                        case 'b':
		                            cooked += '\b';
		                            break;
		                        case 'f':
		                            cooked += '\f';
		                            break;
		                        case 'v':
		                            cooked += '\v';
		                            break;
		                        default:
		                            if (ch === '0') {
		                                if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
		                                    // Illegal: \01 \02 and so on
		                                    this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
		                                }
		                                cooked += '\0';
		                            }
		                            else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
		                                // Illegal: \1 \2
		                                this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
		                            }
		                            else {
		                                cooked += ch;
		                            }
		                            break;
		                    }
		                }
		                else {
		                    ++this.lineNumber;
		                    if (ch === '\r' && this.source[this.index] === '\n') {
		                        ++this.index;
		                    }
		                    this.lineStart = this.index;
		                }
		            }
		            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                ++this.lineNumber;
		                if (ch === '\r' && this.source[this.index] === '\n') {
		                    ++this.index;
		                }
		                this.lineStart = this.index;
		                cooked += '\n';
		            }
		            else {
		                cooked += ch;
		            }
		        }
		        if (!terminated) {
		            this.throwUnexpectedToken();
		        }
		        if (!head) {
		            this.curlyStack.pop();
		        }
		        return {
		            type: 10 /* Template */,
		            value: this.source.slice(start + 1, this.index - rawOffset),
		            cooked: cooked,
		            head: head,
		            tail: tail,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
		    Scanner.prototype.testRegExp = function (pattern, flags) {
		        // The BMP character to use as a replacement for astral symbols when
		        // translating an ES6 "u"-flagged pattern to an ES5-compatible
		        // approximation.
		        // Note: replacing with '\uFFFF' enables false positives in unlikely
		        // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
		        // pattern that would not be detected by this substitution.
		        var astralSubstitute = '\uFFFF';
		        var tmp = pattern;
		        var self = this;
		        if (flags.indexOf('u') >= 0) {
		            tmp = tmp
		                .replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
		                var codePoint = parseInt($1 || $2, 16);
		                if (codePoint > 0x10FFFF) {
		                    self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
		                }
		                if (codePoint <= 0xFFFF) {
		                    return String.fromCharCode(codePoint);
		                }
		                return astralSubstitute;
		            })
		                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
		        }
		        // First, detect invalid regular expressions.
		        try {
		            RegExp(tmp);
		        }
		        catch (e) {
		            this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
		        }
		        // Return a regular expression object for this pattern-flag pair, or
		        // `null` in case the current environment doesn't support the flags it
		        // uses.
		        try {
		            return new RegExp(pattern, flags);
		        }
		        catch (exception) {
		            /* istanbul ignore next */
		            return null;
		        }
		    };
		    Scanner.prototype.scanRegExpBody = function () {
		        var ch = this.source[this.index];
		        assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
		        var str = this.source[this.index++];
		        var classMarker = false;
		        var terminated = false;
		        while (!this.eof()) {
		            ch = this.source[this.index++];
		            str += ch;
		            if (ch === '\\') {
		                ch = this.source[this.index++];
		                // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
		                if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
		                }
		                str += ch;
		            }
		            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
		                this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
		            }
		            else if (classMarker) {
		                if (ch === ']') {
		                    classMarker = false;
		                }
		            }
		            else {
		                if (ch === '/') {
		                    terminated = true;
		                    break;
		                }
		                else if (ch === '[') {
		                    classMarker = true;
		                }
		            }
		        }
		        if (!terminated) {
		            this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
		        }
		        // Exclude leading and trailing slash.
		        return str.substr(1, str.length - 2);
		    };
		    Scanner.prototype.scanRegExpFlags = function () {
		        var str = '';
		        var flags = '';
		        while (!this.eof()) {
		            var ch = this.source[this.index];
		            if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
		                break;
		            }
		            ++this.index;
		            if (ch === '\\' && !this.eof()) {
		                ch = this.source[this.index];
		                if (ch === 'u') {
		                    ++this.index;
		                    var restore = this.index;
		                    var char = this.scanHexEscape('u');
		                    if (char !== null) {
		                        flags += char;
		                        for (str += '\\u'; restore < this.index; ++restore) {
		                            str += this.source[restore];
		                        }
		                    }
		                    else {
		                        this.index = restore;
		                        flags += 'u';
		                        str += '\\u';
		                    }
		                    this.tolerateUnexpectedToken();
		                }
		                else {
		                    str += '\\';
		                    this.tolerateUnexpectedToken();
		                }
		            }
		            else {
		                flags += ch;
		                str += ch;
		            }
		        }
		        return flags;
		    };
		    Scanner.prototype.scanRegExp = function () {
		        var start = this.index;
		        var pattern = this.scanRegExpBody();
		        var flags = this.scanRegExpFlags();
		        var value = this.testRegExp(pattern, flags);
		        return {
		            type: 9 /* RegularExpression */,
		            value: '',
		            pattern: pattern,
		            flags: flags,
		            regex: value,
		            lineNumber: this.lineNumber,
		            lineStart: this.lineStart,
		            start: start,
		            end: this.index
		        };
		    };
		    Scanner.prototype.lex = function () {
		        if (this.eof()) {
		            return {
		                type: 2 /* EOF */,
		                value: '',
		                lineNumber: this.lineNumber,
		                lineStart: this.lineStart,
		                start: this.index,
		                end: this.index
		            };
		        }
		        var cp = this.source.charCodeAt(this.index);
		        if (character_1.Character.isIdentifierStart(cp)) {
		            return this.scanIdentifier();
		        }
		        // Very common: ( and ) and ;
		        if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
		            return this.scanPunctuator();
		        }
		        // String literal starts with single quote (U+0027) or double quote (U+0022).
		        if (cp === 0x27 || cp === 0x22) {
		            return this.scanStringLiteral();
		        }
		        // Dot (.) U+002E can also start a floating-point number, hence the need
		        // to check the next character.
		        if (cp === 0x2E) {
		            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
		                return this.scanNumericLiteral();
		            }
		            return this.scanPunctuator();
		        }
		        if (character_1.Character.isDecimalDigit(cp)) {
		            return this.scanNumericLiteral();
		        }
		        // Template literals start with ` (U+0060) for template head
		        // or } (U+007D) for template middle or template tail.
		        if (cp === 0x60 || (cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${')) {
		            return this.scanTemplate();
		        }
		        // Possible identifier start in a surrogate pair.
		        if (cp >= 0xD800 && cp < 0xDFFF) {
		            if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
		                return this.scanIdentifier();
		            }
		        }
		        return this.scanPunctuator();
		    };
		    return Scanner;
		}());
		exports.Scanner = Scanner;
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.TokenName = {};
		exports.TokenName[1 /* BooleanLiteral */] = 'Boolean';
		exports.TokenName[2 /* EOF */] = '<end>';
		exports.TokenName[3 /* Identifier */] = 'Identifier';
		exports.TokenName[4 /* Keyword */] = 'Keyword';
		exports.TokenName[5 /* NullLiteral */] = 'Null';
		exports.TokenName[6 /* NumericLiteral */] = 'Numeric';
		exports.TokenName[7 /* Punctuator */] = 'Punctuator';
		exports.TokenName[8 /* StringLiteral */] = 'String';
		exports.TokenName[9 /* RegularExpression */] = 'RegularExpression';
		exports.TokenName[10 /* Template */] = 'Template';
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		"use strict";
		// Generated by generate-xhtml-entities.js. DO NOT MODIFY!
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.XHTMLEntities = {
		    quot: '\u0022',
		    amp: '\u0026',
		    apos: '\u0027',
		    gt: '\u003E',
		    nbsp: '\u00A0',
		    iexcl: '\u00A1',
		    cent: '\u00A2',
		    pound: '\u00A3',
		    curren: '\u00A4',
		    yen: '\u00A5',
		    brvbar: '\u00A6',
		    sect: '\u00A7',
		    uml: '\u00A8',
		    copy: '\u00A9',
		    ordf: '\u00AA',
		    laquo: '\u00AB',
		    not: '\u00AC',
		    shy: '\u00AD',
		    reg: '\u00AE',
		    macr: '\u00AF',
		    deg: '\u00B0',
		    plusmn: '\u00B1',
		    sup2: '\u00B2',
		    sup3: '\u00B3',
		    acute: '\u00B4',
		    micro: '\u00B5',
		    para: '\u00B6',
		    middot: '\u00B7',
		    cedil: '\u00B8',
		    sup1: '\u00B9',
		    ordm: '\u00BA',
		    raquo: '\u00BB',
		    frac14: '\u00BC',
		    frac12: '\u00BD',
		    frac34: '\u00BE',
		    iquest: '\u00BF',
		    Agrave: '\u00C0',
		    Aacute: '\u00C1',
		    Acirc: '\u00C2',
		    Atilde: '\u00C3',
		    Auml: '\u00C4',
		    Aring: '\u00C5',
		    AElig: '\u00C6',
		    Ccedil: '\u00C7',
		    Egrave: '\u00C8',
		    Eacute: '\u00C9',
		    Ecirc: '\u00CA',
		    Euml: '\u00CB',
		    Igrave: '\u00CC',
		    Iacute: '\u00CD',
		    Icirc: '\u00CE',
		    Iuml: '\u00CF',
		    ETH: '\u00D0',
		    Ntilde: '\u00D1',
		    Ograve: '\u00D2',
		    Oacute: '\u00D3',
		    Ocirc: '\u00D4',
		    Otilde: '\u00D5',
		    Ouml: '\u00D6',
		    times: '\u00D7',
		    Oslash: '\u00D8',
		    Ugrave: '\u00D9',
		    Uacute: '\u00DA',
		    Ucirc: '\u00DB',
		    Uuml: '\u00DC',
		    Yacute: '\u00DD',
		    THORN: '\u00DE',
		    szlig: '\u00DF',
		    agrave: '\u00E0',
		    aacute: '\u00E1',
		    acirc: '\u00E2',
		    atilde: '\u00E3',
		    auml: '\u00E4',
		    aring: '\u00E5',
		    aelig: '\u00E6',
		    ccedil: '\u00E7',
		    egrave: '\u00E8',
		    eacute: '\u00E9',
		    ecirc: '\u00EA',
		    euml: '\u00EB',
		    igrave: '\u00EC',
		    iacute: '\u00ED',
		    icirc: '\u00EE',
		    iuml: '\u00EF',
		    eth: '\u00F0',
		    ntilde: '\u00F1',
		    ograve: '\u00F2',
		    oacute: '\u00F3',
		    ocirc: '\u00F4',
		    otilde: '\u00F5',
		    ouml: '\u00F6',
		    divide: '\u00F7',
		    oslash: '\u00F8',
		    ugrave: '\u00F9',
		    uacute: '\u00FA',
		    ucirc: '\u00FB',
		    uuml: '\u00FC',
		    yacute: '\u00FD',
		    thorn: '\u00FE',
		    yuml: '\u00FF',
		    OElig: '\u0152',
		    oelig: '\u0153',
		    Scaron: '\u0160',
		    scaron: '\u0161',
		    Yuml: '\u0178',
		    fnof: '\u0192',
		    circ: '\u02C6',
		    tilde: '\u02DC',
		    Alpha: '\u0391',
		    Beta: '\u0392',
		    Gamma: '\u0393',
		    Delta: '\u0394',
		    Epsilon: '\u0395',
		    Zeta: '\u0396',
		    Eta: '\u0397',
		    Theta: '\u0398',
		    Iota: '\u0399',
		    Kappa: '\u039A',
		    Lambda: '\u039B',
		    Mu: '\u039C',
		    Nu: '\u039D',
		    Xi: '\u039E',
		    Omicron: '\u039F',
		    Pi: '\u03A0',
		    Rho: '\u03A1',
		    Sigma: '\u03A3',
		    Tau: '\u03A4',
		    Upsilon: '\u03A5',
		    Phi: '\u03A6',
		    Chi: '\u03A7',
		    Psi: '\u03A8',
		    Omega: '\u03A9',
		    alpha: '\u03B1',
		    beta: '\u03B2',
		    gamma: '\u03B3',
		    delta: '\u03B4',
		    epsilon: '\u03B5',
		    zeta: '\u03B6',
		    eta: '\u03B7',
		    theta: '\u03B8',
		    iota: '\u03B9',
		    kappa: '\u03BA',
		    lambda: '\u03BB',
		    mu: '\u03BC',
		    nu: '\u03BD',
		    xi: '\u03BE',
		    omicron: '\u03BF',
		    pi: '\u03C0',
		    rho: '\u03C1',
		    sigmaf: '\u03C2',
		    sigma: '\u03C3',
		    tau: '\u03C4',
		    upsilon: '\u03C5',
		    phi: '\u03C6',
		    chi: '\u03C7',
		    psi: '\u03C8',
		    omega: '\u03C9',
		    thetasym: '\u03D1',
		    upsih: '\u03D2',
		    piv: '\u03D6',
		    ensp: '\u2002',
		    emsp: '\u2003',
		    thinsp: '\u2009',
		    zwnj: '\u200C',
		    zwj: '\u200D',
		    lrm: '\u200E',
		    rlm: '\u200F',
		    ndash: '\u2013',
		    mdash: '\u2014',
		    lsquo: '\u2018',
		    rsquo: '\u2019',
		    sbquo: '\u201A',
		    ldquo: '\u201C',
		    rdquo: '\u201D',
		    bdquo: '\u201E',
		    dagger: '\u2020',
		    Dagger: '\u2021',
		    bull: '\u2022',
		    hellip: '\u2026',
		    permil: '\u2030',
		    prime: '\u2032',
		    Prime: '\u2033',
		    lsaquo: '\u2039',
		    rsaquo: '\u203A',
		    oline: '\u203E',
		    frasl: '\u2044',
		    euro: '\u20AC',
		    image: '\u2111',
		    weierp: '\u2118',
		    real: '\u211C',
		    trade: '\u2122',
		    alefsym: '\u2135',
		    larr: '\u2190',
		    uarr: '\u2191',
		    rarr: '\u2192',
		    darr: '\u2193',
		    harr: '\u2194',
		    crarr: '\u21B5',
		    lArr: '\u21D0',
		    uArr: '\u21D1',
		    rArr: '\u21D2',
		    dArr: '\u21D3',
		    hArr: '\u21D4',
		    forall: '\u2200',
		    part: '\u2202',
		    exist: '\u2203',
		    empty: '\u2205',
		    nabla: '\u2207',
		    isin: '\u2208',
		    notin: '\u2209',
		    ni: '\u220B',
		    prod: '\u220F',
		    sum: '\u2211',
		    minus: '\u2212',
		    lowast: '\u2217',
		    radic: '\u221A',
		    prop: '\u221D',
		    infin: '\u221E',
		    ang: '\u2220',
		    and: '\u2227',
		    or: '\u2228',
		    cap: '\u2229',
		    cup: '\u222A',
		    int: '\u222B',
		    there4: '\u2234',
		    sim: '\u223C',
		    cong: '\u2245',
		    asymp: '\u2248',
		    ne: '\u2260',
		    equiv: '\u2261',
		    le: '\u2264',
		    ge: '\u2265',
		    sub: '\u2282',
		    sup: '\u2283',
		    nsub: '\u2284',
		    sube: '\u2286',
		    supe: '\u2287',
		    oplus: '\u2295',
		    otimes: '\u2297',
		    perp: '\u22A5',
		    sdot: '\u22C5',
		    lceil: '\u2308',
		    rceil: '\u2309',
		    lfloor: '\u230A',
		    rfloor: '\u230B',
		    loz: '\u25CA',
		    spades: '\u2660',
		    clubs: '\u2663',
		    hearts: '\u2665',
		    diams: '\u2666',
		    lang: '\u27E8',
		    rang: '\u27E9'
		};
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		var error_handler_1 = __webpack_require__(10);
		var scanner_1 = __webpack_require__(12);
		var token_1 = __webpack_require__(13);
		var Reader = (function () {
		    function Reader() {
		        this.values = [];
		        this.curly = this.paren = -1;
		    }
		    // A function following one of those tokens is an expression.
		    Reader.prototype.beforeFunctionExpression = function (t) {
		        return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
		            'return', 'case', 'delete', 'throw', 'void',
		            // assignment operators
		            '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=',
		            '&=', '|=', '^=', ',',
		            // binary/unary operators
		            '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
		            '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
		            '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
		    };
		    // Determine if forward slash (/) is an operator or part of a regular expression
		    // https://github.com/mozilla/sweet.js/wiki/design
		    Reader.prototype.isRegexStart = function () {
		        var previous = this.values[this.values.length - 1];
		        var regex = (previous !== null);
		        switch (previous) {
		            case 'this':
		            case ']':
		                regex = false;
		                break;
		            case ')':
		                var keyword = this.values[this.paren - 1];
		                regex = (keyword === 'if' || keyword === 'while' || keyword === 'for' || keyword === 'with');
		                break;
		            case '}':
		                // Dividing a function by anything makes little sense,
		                // but we have to check for that.
		                regex = false;
		                if (this.values[this.curly - 3] === 'function') {
		                    // Anonymous function, e.g. function(){} /42
		                    var check = this.values[this.curly - 4];
		                    regex = check ? !this.beforeFunctionExpression(check) : false;
		                }
		                else if (this.values[this.curly - 4] === 'function') {
		                    // Named function, e.g. function f(){} /42/
		                    var check = this.values[this.curly - 5];
		                    regex = check ? !this.beforeFunctionExpression(check) : true;
		                }
		                break;
		            default:
		                break;
		        }
		        return regex;
		    };
		    Reader.prototype.push = function (token) {
		        if (token.type === 7 /* Punctuator */ || token.type === 4 /* Keyword */) {
		            if (token.value === '{') {
		                this.curly = this.values.length;
		            }
		            else if (token.value === '(') {
		                this.paren = this.values.length;
		            }
		            this.values.push(token.value);
		        }
		        else {
		            this.values.push(null);
		        }
		    };
		    return Reader;
		}());
		var Tokenizer = (function () {
		    function Tokenizer(code, config) {
		        this.errorHandler = new error_handler_1.ErrorHandler();
		        this.errorHandler.tolerant = config ? (typeof config.tolerant === 'boolean' && config.tolerant) : false;
		        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
		        this.scanner.trackComment = config ? (typeof config.comment === 'boolean' && config.comment) : false;
		        this.trackRange = config ? (typeof config.range === 'boolean' && config.range) : false;
		        this.trackLoc = config ? (typeof config.loc === 'boolean' && config.loc) : false;
		        this.buffer = [];
		        this.reader = new Reader();
		    }
		    Tokenizer.prototype.errors = function () {
		        return this.errorHandler.errors;
		    };
		    Tokenizer.prototype.getNextToken = function () {
		        if (this.buffer.length === 0) {
		            var comments = this.scanner.scanComments();
		            if (this.scanner.trackComment) {
		                for (var i = 0; i < comments.length; ++i) {
		                    var e = comments[i];
		                    var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
		                    var comment = {
		                        type: e.multiLine ? 'BlockComment' : 'LineComment',
		                        value: value
		                    };
		                    if (this.trackRange) {
		                        comment.range = e.range;
		                    }
		                    if (this.trackLoc) {
		                        comment.loc = e.loc;
		                    }
		                    this.buffer.push(comment);
		                }
		            }
		            if (!this.scanner.eof()) {
		                var loc = void 0;
		                if (this.trackLoc) {
		                    loc = {
		                        start: {
		                            line: this.scanner.lineNumber,
		                            column: this.scanner.index - this.scanner.lineStart
		                        },
		                        end: {}
		                    };
		                }
		                var startRegex = (this.scanner.source[this.scanner.index] === '/') && this.reader.isRegexStart();
		                var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
		                this.reader.push(token);
		                var entry = {
		                    type: token_1.TokenName[token.type],
		                    value: this.scanner.source.slice(token.start, token.end)
		                };
		                if (this.trackRange) {
		                    entry.range = [token.start, token.end];
		                }
		                if (this.trackLoc) {
		                    loc.end = {
		                        line: this.scanner.lineNumber,
		                        column: this.scanner.index - this.scanner.lineStart
		                    };
		                    entry.loc = loc;
		                }
		                if (token.type === 9 /* RegularExpression */) {
		                    var pattern = token.pattern;
		                    var flags = token.flags;
		                    entry.regex = { pattern: pattern, flags: flags };
		                }
		                this.buffer.push(entry);
		            }
		        }
		        return this.buffer.shift();
		    };
		    return Tokenizer;
		}());
		exports.Tokenizer = Tokenizer;
	
	
	/***/ }
	/******/ ])
	});
	;

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	  var Query, pathScorer, pluckCandidates, scorer, sortCandidates;
	
	  scorer = __webpack_require__(129);
	
	  pathScorer = __webpack_require__(201);
	
	  Query = __webpack_require__(301);
	
	  pluckCandidates = function(a) {
	    return a.candidate;
	  };
	
	  sortCandidates = function(a, b) {
	    return b.score - a.score;
	  };
	
	  module.exports = function(candidates, query, options) {
	    var bKey, candidate, key, maxInners, maxResults, score, scoreProvider, scoredCandidates, spotLeft, string, usePathScoring, _i, _len;
	    scoredCandidates = [];
	    key = options.key, maxResults = options.maxResults, maxInners = options.maxInners, usePathScoring = options.usePathScoring;
	    spotLeft = (maxInners != null) && maxInners > 0 ? maxInners : candidates.length + 1;
	    bKey = key != null;
	    scoreProvider = usePathScoring ? pathScorer : scorer;
	    for (_i = 0, _len = candidates.length; _i < _len; _i++) {
	      candidate = candidates[_i];
	      string = bKey ? candidate[key] : candidate;
	      if (!string) {
	        continue;
	      }
	      score = scoreProvider.score(string, query, options);
	      if (score > 0) {
	        scoredCandidates.push({
	          candidate: candidate,
	          score: score
	        });
	        if (!--spotLeft) {
	          break;
	        }
	      }
	    }
	    scoredCandidates.sort(sortCandidates);
	    candidates = scoredCandidates.map(pluckCandidates);
	    if (maxResults != null) {
	      candidates = candidates.slice(0, maxResults);
	    }
	    return candidates;
	  };
	
	}).call(this);


/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {(function() {
	  var Query, defaultPathSeparator, filter, matcher, parseOptions, pathScorer, preparedQueryCache, scorer;
	
	  filter = __webpack_require__(471);
	
	  matcher = __webpack_require__(473);
	
	  scorer = __webpack_require__(129);
	
	  pathScorer = __webpack_require__(201);
	
	  Query = __webpack_require__(301);
	
	  preparedQueryCache = null;
	
	  defaultPathSeparator = (typeof process !== "undefined" && process !== null ? process.platform : void 0) === "win32" ? '\\' : '/';
	
	  module.exports = {
	    filter: function(candidates, query, options) {
	      if (options == null) {
	        options = {};
	      }
	      if (!((query != null ? query.length : void 0) && (candidates != null ? candidates.length : void 0))) {
	        return [];
	      }
	      options = parseOptions(options, query);
	      return filter(candidates, query, options);
	    },
	    score: function(string, query, options) {
	      if (options == null) {
	        options = {};
	      }
	      if (!((string != null ? string.length : void 0) && (query != null ? query.length : void 0))) {
	        return 0;
	      }
	      options = parseOptions(options, query);
	      if (options.usePathScoring) {
	        return pathScorer.score(string, query, options);
	      } else {
	        return scorer.score(string, query, options);
	      }
	    },
	    match: function(string, query, options) {
	      var _i, _ref, _results;
	      if (options == null) {
	        options = {};
	      }
	      if (!string) {
	        return [];
	      }
	      if (!query) {
	        return [];
	      }
	      if (string === query) {
	        return (function() {
	          _results = [];
	          for (var _i = 0, _ref = string.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
	          return _results;
	        }).apply(this);
	      }
	      options = parseOptions(options, query);
	      return matcher.match(string, query, options);
	    },
	    wrap: function(string, query, options) {
	      if (options == null) {
	        options = {};
	      }
	      if (!string) {
	        return [];
	      }
	      if (!query) {
	        return [];
	      }
	      options = parseOptions(options, query);
	      return matcher.wrap(string, query, options);
	    },
	    prepareQuery: function(query, options) {
	      if (options == null) {
	        options = {};
	      }
	      options = parseOptions(options, query);
	      return options.preparedQuery;
	    }
	  };
	
	  parseOptions = function(options, query) {
	    if (options.allowErrors == null) {
	      options.allowErrors = false;
	    }
	    if (options.usePathScoring == null) {
	      options.usePathScoring = true;
	    }
	    if (options.useExtensionBonus == null) {
	      options.useExtensionBonus = false;
	    }
	    if (options.pathSeparator == null) {
	      options.pathSeparator = defaultPathSeparator;
	    }
	    if (options.optCharRegEx == null) {
	      options.optCharRegEx = null;
	    }
	    if (options.wrap == null) {
	      options.wrap = null;
	    }
	    if (options.preparedQuery == null) {
	      options.preparedQuery = preparedQueryCache && preparedQueryCache.query === query ? preparedQueryCache : (preparedQueryCache = new Query(query, options));
	    }
	    return options;
	  };
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(255)))

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	  var basenameMatch, computeMatch, isMatch, isWordStart, match, mergeMatches, scoreAcronyms, scoreCharacter, scoreConsecutives, _ref;
	
	  _ref = __webpack_require__(129), isMatch = _ref.isMatch, isWordStart = _ref.isWordStart, scoreConsecutives = _ref.scoreConsecutives, scoreCharacter = _ref.scoreCharacter, scoreAcronyms = _ref.scoreAcronyms;
	
	  exports.match = match = function(string, query, options) {
	    var allowErrors, baseMatches, matches, pathSeparator, preparedQuery, string_lw;
	    allowErrors = options.allowErrors, preparedQuery = options.preparedQuery, pathSeparator = options.pathSeparator;
	    if (!(allowErrors || isMatch(string, preparedQuery.core_lw, preparedQuery.core_up))) {
	      return [];
	    }
	    string_lw = string.toLowerCase();
	    matches = computeMatch(string, string_lw, preparedQuery);
	    if (matches.length === 0) {
	      return matches;
	    }
	    if (string.indexOf(pathSeparator) > -1) {
	      baseMatches = basenameMatch(string, string_lw, preparedQuery, pathSeparator);
	      matches = mergeMatches(matches, baseMatches);
	    }
	    return matches;
	  };
	
	  exports.wrap = function(string, query, options) {
	    var matchIndex, matchPos, matchPositions, output, strPos, tagClass, tagClose, tagOpen, _ref1;
	    if ((options.wrap != null)) {
	      _ref1 = options.wrap, tagClass = _ref1.tagClass, tagOpen = _ref1.tagOpen, tagClose = _ref1.tagClose;
	    }
	    if (tagClass == null) {
	      tagClass = 'highlight';
	    }
	    if (tagOpen == null) {
	      tagOpen = '<strong class="' + tagClass + '">';
	    }
	    if (tagClose == null) {
	      tagClose = '</strong>';
	    }
	    if (string === query) {
	      return tagOpen + string + tagClose;
	    }
	    matchPositions = match(string, query, options);
	    if (matchPositions.length === 0) {
	      return string;
	    }
	    output = '';
	    matchIndex = -1;
	    strPos = 0;
	    while (++matchIndex < matchPositions.length) {
	      matchPos = matchPositions[matchIndex];
	      if (matchPos > strPos) {
	        output += string.substring(strPos, matchPos);
	        strPos = matchPos;
	      }
	      while (++matchIndex < matchPositions.length) {
	        if (matchPositions[matchIndex] === matchPos + 1) {
	          matchPos++;
	        } else {
	          matchIndex--;
	          break;
	        }
	      }
	      matchPos++;
	      if (matchPos > strPos) {
	        output += tagOpen;
	        output += string.substring(strPos, matchPos);
	        output += tagClose;
	        strPos = matchPos;
	      }
	    }
	    if (strPos <= string.length - 1) {
	      output += string.substring(strPos);
	    }
	    return output;
	  };
	
	  basenameMatch = function(subject, subject_lw, preparedQuery, pathSeparator) {
	    var basePos, depth, end;
	    end = subject.length - 1;
	    while (subject[end] === pathSeparator) {
	      end--;
	    }
	    basePos = subject.lastIndexOf(pathSeparator, end);
	    if (basePos === -1) {
	      return [];
	    }
	    depth = preparedQuery.depth;
	    while (depth-- > 0) {
	      basePos = subject.lastIndexOf(pathSeparator, basePos - 1);
	      if (basePos === -1) {
	        return [];
	      }
	    }
	    basePos++;
	    end++;
	    return computeMatch(subject.slice(basePos, end), subject_lw.slice(basePos, end), preparedQuery, basePos);
	  };
	
	  mergeMatches = function(a, b) {
	    var ai, bj, i, j, m, n, out;
	    m = a.length;
	    n = b.length;
	    if (n === 0) {
	      return a.slice();
	    }
	    if (m === 0) {
	      return b.slice();
	    }
	    i = -1;
	    j = 0;
	    bj = b[j];
	    out = [];
	    while (++i < m) {
	      ai = a[i];
	      while (bj <= ai && ++j < n) {
	        if (bj < ai) {
	          out.push(bj);
	        }
	        bj = b[j];
	      }
	      out.push(ai);
	    }
	    while (j < n) {
	      out.push(b[j++]);
	    }
	    return out;
	  };
	
	  computeMatch = function(subject, subject_lw, preparedQuery, offset) {
	    var DIAGONAL, LEFT, STOP, UP, acro_score, align, backtrack, csc_diag, csc_row, csc_score, i, j, m, matches, move, n, pos, query, query_lw, score, score_diag, score_row, score_up, si_lw, start, trace;
	    if (offset == null) {
	      offset = 0;
	    }
	    query = preparedQuery.query;
	    query_lw = preparedQuery.query_lw;
	    m = subject.length;
	    n = query.length;
	    acro_score = scoreAcronyms(subject, subject_lw, query, query_lw).score;
	    score_row = new Array(n);
	    csc_row = new Array(n);
	    STOP = 0;
	    UP = 1;
	    LEFT = 2;
	    DIAGONAL = 3;
	    trace = new Array(m * n);
	    pos = -1;
	    j = -1;
	    while (++j < n) {
	      score_row[j] = 0;
	      csc_row[j] = 0;
	    }
	    i = -1;
	    while (++i < m) {
	      score = 0;
	      score_up = 0;
	      csc_diag = 0;
	      si_lw = subject_lw[i];
	      j = -1;
	      while (++j < n) {
	        csc_score = 0;
	        align = 0;
	        score_diag = score_up;
	        if (query_lw[j] === si_lw) {
	          start = isWordStart(i, subject, subject_lw);
	          csc_score = csc_diag > 0 ? csc_diag : scoreConsecutives(subject, subject_lw, query, query_lw, i, j, start);
	          align = score_diag + scoreCharacter(i, j, start, acro_score, csc_score);
	        }
	        score_up = score_row[j];
	        csc_diag = csc_row[j];
	        if (score > score_up) {
	          move = LEFT;
	        } else {
	          score = score_up;
	          move = UP;
	        }
	        if (align > score) {
	          score = align;
	          move = DIAGONAL;
	        } else {
	          csc_score = 0;
	        }
	        score_row[j] = score;
	        csc_row[j] = csc_score;
	        trace[++pos] = score > 0 ? move : STOP;
	      }
	    }
	    i = m - 1;
	    j = n - 1;
	    pos = i * n + j;
	    backtrack = true;
	    matches = [];
	    while (backtrack && i >= 0 && j >= 0) {
	      switch (trace[pos]) {
	        case UP:
	          i--;
	          pos -= n;
	          break;
	        case LEFT:
	          j--;
	          pos--;
	          break;
	        case DIAGONAL:
	          matches.push(i + offset);
	          j--;
	          i--;
	          pos -= n + 1;
	          break;
	        default:
	          backtrack = false;
	      }
	    }
	    matches.reverse();
	    return matches;
	  };
	
	}).call(this);


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	  var computeScore, countDir, file_coeff, getExtension, getExtensionScore, isMatch, scorePath, scoreSize, tau_depth, _ref;
	
	  _ref = __webpack_require__(129), isMatch = _ref.isMatch, computeScore = _ref.computeScore, scoreSize = _ref.scoreSize;
	
	  tau_depth = 13;
	
	  file_coeff = 1.2;
	
	  exports.score = function(string, query, options) {
	    var allowErrors, preparedQuery, score, string_lw;
	    preparedQuery = options.preparedQuery, allowErrors = options.allowErrors;
	    if (!(allowErrors || isMatch(string, preparedQuery.core_lw, preparedQuery.core_up))) {
	      return 0;
	    }
	    string_lw = string.toLowerCase();
	    score = computeScore(string, string_lw, preparedQuery);
	    score = scorePath(string, string_lw, score, options);
	    return Math.ceil(score);
	  };
	
	  scorePath = function(subject, subject_lw, fullPathScore, options) {
	    var alpha, basePathScore, basePos, depth, end, extAdjust, fileLength, pathSeparator, preparedQuery, useExtensionBonus;
	    if (fullPathScore === 0) {
	      return 0;
	    }
	    preparedQuery = options.preparedQuery, useExtensionBonus = options.useExtensionBonus, pathSeparator = options.pathSeparator;
	    end = subject.length - 1;
	    while (subject[end] === pathSeparator) {
	      end--;
	    }
	    basePos = subject.lastIndexOf(pathSeparator, end);
	    fileLength = end - basePos;
	    extAdjust = 1.0;
	    if (useExtensionBonus) {
	      extAdjust += getExtensionScore(subject_lw, preparedQuery.ext, basePos, end, 2);
	      fullPathScore *= extAdjust;
	    }
	    if (basePos === -1) {
	      return fullPathScore;
	    }
	    depth = preparedQuery.depth;
	    while (basePos > -1 && depth-- > 0) {
	      basePos = subject.lastIndexOf(pathSeparator, basePos - 1);
	    }
	    basePathScore = basePos === -1 ? fullPathScore : extAdjust * computeScore(subject.slice(basePos + 1, end + 1), subject_lw.slice(basePos + 1, end + 1), preparedQuery);
	    alpha = 0.5 * tau_depth / (tau_depth + countDir(subject, end + 1, pathSeparator));
	    return alpha * basePathScore + (1 - alpha) * fullPathScore * scoreSize(0, file_coeff * fileLength);
	  };
	
	  exports.countDir = countDir = function(path, end, pathSeparator) {
	    var count, i;
	    if (end < 1) {
	      return 0;
	    }
	    count = 0;
	    i = -1;
	    while (++i < end && path[i] === pathSeparator) {
	      continue;
	    }
	    while (++i < end) {
	      if (path[i] === pathSeparator) {
	        count++;
	        while (++i < end && path[i] === pathSeparator) {
	          continue;
	        }
	      }
	    }
	    return count;
	  };
	
	  exports.getExtension = getExtension = function(str) {
	    var pos;
	    pos = str.lastIndexOf(".");
	    if (pos < 0) {
	      return "";
	    } else {
	      return str.substr(pos + 1);
	    }
	  };
	
	  getExtensionScore = function(candidate, ext, startPos, endPos, maxDepth) {
	    var m, matched, n, pos;
	    if (!ext.length) {
	      return 0;
	    }
	    pos = candidate.lastIndexOf(".", endPos);
	    if (!(pos > startPos)) {
	      return 0;
	    }
	    n = ext.length;
	    m = endPos - pos;
	    if (m < n) {
	      n = m;
	      m = ext.length;
	    }
	    pos++;
	    matched = -1;
	    while (++matched < n) {
	      if (candidate[pos + matched] !== ext[matched]) {
	        break;
	      }
	    }
	    if (matched === 0 && maxDepth > 0) {
	      return 0.9 * getExtensionScore(candidate, ext, startPos, pos - 2, maxDepth - 1);
	    }
	    return matched / m;
	  };
	
	}).call(this);


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

	(function() {
	  var Query, coreChars, countDir, getCharCodes, getExtension, opt_char_re, truncatedUpperCase, _ref;
	
	  _ref = __webpack_require__(201), countDir = _ref.countDir, getExtension = _ref.getExtension;
	
	  module.exports = Query = (function() {
	    function Query(query, _arg) {
	      var optCharRegEx, pathSeparator, _ref1;
	      _ref1 = _arg != null ? _arg : {}, optCharRegEx = _ref1.optCharRegEx, pathSeparator = _ref1.pathSeparator;
	      if (!(query && query.length)) {
	        return null;
	      }
	      this.query = query;
	      this.query_lw = query.toLowerCase();
	      this.core = coreChars(query, optCharRegEx);
	      this.core_lw = this.core.toLowerCase();
	      this.core_up = truncatedUpperCase(this.core);
	      this.depth = countDir(query, query.length, pathSeparator);
	      this.ext = getExtension(this.query_lw);
	      this.charCodes = getCharCodes(this.query_lw);
	    }
	
	    return Query;
	
	  })();
	
	  opt_char_re = /[ _\-:\/\\]/g;
	
	  coreChars = function(query, optCharRegEx) {
	    if (optCharRegEx == null) {
	      optCharRegEx = opt_char_re;
	    }
	    return query.replace(optCharRegEx, '');
	  };
	
	  truncatedUpperCase = function(str) {
	    var char, upper, _i, _len;
	    upper = "";
	    for (_i = 0, _len = str.length; _i < _len; _i++) {
	      char = str[_i];
	      upper += char.toUpperCase()[0];
	    }
	    return upper;
	  };
	
	  getCharCodes = function(str) {
	    var charCodes, i, len;
	    len = str.length;
	    i = -1;
	    charCodes = [];
	    while (++i < len) {
	      charCodes[str.charCodeAt(i)] = true;
	    }
	    return charCodes;
	  };
	
	}).call(this);


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

	(function() {
	  var AcronymResult, computeScore, emptyAcronymResult, isAcronymFullWord, isMatch, isSeparator, isWordEnd, isWordStart, miss_coeff, pos_bonus, scoreAcronyms, scoreCharacter, scoreConsecutives, scoreExact, scoreExactMatch, scorePattern, scorePosition, scoreSize, tau_size, wm;
	
	  wm = 150;
	
	  pos_bonus = 20;
	
	  tau_size = 85;
	
	  miss_coeff = 0.75;
	
	  exports.score = function(string, query, options) {
	    var allowErrors, preparedQuery, score, string_lw;
	    preparedQuery = options.preparedQuery, allowErrors = options.allowErrors;
	    if (!(allowErrors || isMatch(string, preparedQuery.core_lw, preparedQuery.core_up))) {
	      return 0;
	    }
	    string_lw = string.toLowerCase();
	    score = computeScore(string, string_lw, preparedQuery);
	    return Math.ceil(score);
	  };
	
	  exports.isMatch = isMatch = function(subject, query_lw, query_up) {
	    var i, j, m, n, qj_lw, qj_up, si;
	    m = subject.length;
	    n = query_lw.length;
	    if (!m || n > m) {
	      return false;
	    }
	    i = -1;
	    j = -1;
	    while (++j < n) {
	      qj_lw = query_lw.charCodeAt(j);
	      qj_up = query_up.charCodeAt(j);
	      while (++i < m) {
	        si = subject.charCodeAt(i);
	        if (si === qj_lw || si === qj_up) {
	          break;
	        }
	      }
	      if (i === m) {
	        return false;
	      }
	    }
	    return true;
	  };
	
	  exports.computeScore = computeScore = function(subject, subject_lw, preparedQuery) {
	    var acro, acro_score, align, csc_diag, csc_row, csc_score, csc_should_rebuild, i, j, m, miss_budget, miss_left, n, pos, query, query_lw, record_miss, score, score_diag, score_row, score_up, si_lw, start, sz;
	    query = preparedQuery.query;
	    query_lw = preparedQuery.query_lw;
	    m = subject.length;
	    n = query.length;
	    acro = scoreAcronyms(subject, subject_lw, query, query_lw);
	    acro_score = acro.score;
	    if (acro.count === n) {
	      return scoreExact(n, m, acro_score, acro.pos);
	    }
	    pos = subject_lw.indexOf(query_lw);
	    if (pos > -1) {
	      return scoreExactMatch(subject, subject_lw, query, query_lw, pos, n, m);
	    }
	    score_row = new Array(n);
	    csc_row = new Array(n);
	    sz = scoreSize(n, m);
	    miss_budget = Math.ceil(miss_coeff * n) + 5;
	    miss_left = miss_budget;
	    csc_should_rebuild = true;
	    j = -1;
	    while (++j < n) {
	      score_row[j] = 0;
	      csc_row[j] = 0;
	    }
	    i = -1;
	    while (++i < m) {
	      si_lw = subject_lw[i];
	      if (!si_lw.charCodeAt(0) in preparedQuery.charCodes) {
	        if (csc_should_rebuild) {
	          j = -1;
	          while (++j < n) {
	            csc_row[j] = 0;
	          }
	          csc_should_rebuild = false;
	        }
	        continue;
	      }
	      score = 0;
	      score_diag = 0;
	      csc_diag = 0;
	      record_miss = true;
	      csc_should_rebuild = true;
	      j = -1;
	      while (++j < n) {
	        score_up = score_row[j];
	        if (score_up > score) {
	          score = score_up;
	        }
	        csc_score = 0;
	        if (query_lw[j] === si_lw) {
	          start = isWordStart(i, subject, subject_lw);
	          csc_score = csc_diag > 0 ? csc_diag : scoreConsecutives(subject, subject_lw, query, query_lw, i, j, start);
	          align = score_diag + scoreCharacter(i, j, start, acro_score, csc_score);
	          if (align > score) {
	            score = align;
	            miss_left = miss_budget;
	          } else {
	            if (record_miss && --miss_left <= 0) {
	              return Math.max(score, score_row[n - 1]) * sz;
	            }
	            record_miss = false;
	          }
	        }
	        score_diag = score_up;
	        csc_diag = csc_row[j];
	        csc_row[j] = csc_score;
	        score_row[j] = score;
	      }
	    }
	    score = score_row[n - 1];
	    return score * sz;
	  };
	
	  exports.isWordStart = isWordStart = function(pos, subject, subject_lw) {
	    var curr_s, prev_s;
	    if (pos === 0) {
	      return true;
	    }
	    curr_s = subject[pos];
	    prev_s = subject[pos - 1];
	    return isSeparator(prev_s) || (curr_s !== subject_lw[pos] && prev_s === subject_lw[pos - 1]);
	  };
	
	  exports.isWordEnd = isWordEnd = function(pos, subject, subject_lw, len) {
	    var curr_s, next_s;
	    if (pos === len - 1) {
	      return true;
	    }
	    curr_s = subject[pos];
	    next_s = subject[pos + 1];
	    return isSeparator(next_s) || (curr_s === subject_lw[pos] && next_s !== subject_lw[pos + 1]);
	  };
	
	  isSeparator = function(c) {
	    return c === ' ' || c === '.' || c === '-' || c === '_' || c === '/' || c === '\\';
	  };
	
	  scorePosition = function(pos) {
	    var sc;
	    if (pos < pos_bonus) {
	      sc = pos_bonus - pos;
	      return 100 + sc * sc;
	    } else {
	      return Math.max(100 + pos_bonus - pos, 0);
	    }
	  };
	
	  exports.scoreSize = scoreSize = function(n, m) {
	    return tau_size / (tau_size + Math.abs(m - n));
	  };
	
	  scoreExact = function(n, m, quality, pos) {
	    return 2 * n * (wm * quality + scorePosition(pos)) * scoreSize(n, m);
	  };
	
	  exports.scorePattern = scorePattern = function(count, len, sameCase, start, end) {
	    var bonus, sz;
	    sz = count;
	    bonus = 6;
	    if (sameCase === count) {
	      bonus += 2;
	    }
	    if (start) {
	      bonus += 3;
	    }
	    if (end) {
	      bonus += 1;
	    }
	    if (count === len) {
	      if (start) {
	        if (sameCase === len) {
	          sz += 2;
	        } else {
	          sz += 1;
	        }
	      }
	      if (end) {
	        bonus += 1;
	      }
	    }
	    return sameCase + sz * (sz + bonus);
	  };
	
	  exports.scoreCharacter = scoreCharacter = function(i, j, start, acro_score, csc_score) {
	    var posBonus;
	    posBonus = scorePosition(i);
	    if (start) {
	      return posBonus + wm * ((acro_score > csc_score ? acro_score : csc_score) + 10);
	    }
	    return posBonus + wm * csc_score;
	  };
	
	  exports.scoreConsecutives = scoreConsecutives = function(subject, subject_lw, query, query_lw, i, j, startOfWord) {
	    var k, m, mi, n, nj, sameCase, sz;
	    m = subject.length;
	    n = query.length;
	    mi = m - i;
	    nj = n - j;
	    k = mi < nj ? mi : nj;
	    sameCase = 0;
	    sz = 0;
	    if (query[j] === subject[i]) {
	      sameCase++;
	    }
	    while (++sz < k && query_lw[++j] === subject_lw[++i]) {
	      if (query[j] === subject[i]) {
	        sameCase++;
	      }
	    }
	    if (sz === 1) {
	      return 1 + 2 * sameCase;
	    }
	    return scorePattern(sz, n, sameCase, startOfWord, isWordEnd(i, subject, subject_lw, m));
	  };
	
	  exports.scoreExactMatch = scoreExactMatch = function(subject, subject_lw, query, query_lw, pos, n, m) {
	    var end, i, pos2, sameCase, start;
	    start = isWordStart(pos, subject, subject_lw);
	    if (!start) {
	      pos2 = subject_lw.indexOf(query_lw, pos + 1);
	      if (pos2 > -1) {
	        start = isWordStart(pos2, subject, subject_lw);
	        if (start) {
	          pos = pos2;
	        }
	      }
	    }
	    i = -1;
	    sameCase = 0;
	    while (++i < n) {
	      if (query[pos + i] === subject[i]) {
	        sameCase++;
	      }
	    }
	    end = isWordEnd(pos + n - 1, subject, subject_lw, m);
	    return scoreExact(n, m, scorePattern(n, n, sameCase, start, end), pos);
	  };
	
	  AcronymResult = (function() {
	    function AcronymResult(score, pos, count) {
	      this.score = score;
	      this.pos = pos;
	      this.count = count;
	    }
	
	    return AcronymResult;
	
	  })();
	
	  emptyAcronymResult = new AcronymResult(0, 0.1, 0);
	
	  exports.scoreAcronyms = scoreAcronyms = function(subject, subject_lw, query, query_lw) {
	    var count, fullWord, i, j, m, n, qj_lw, sameCase, score, sepCount, sumPos;
	    m = subject.length;
	    n = query.length;
	    if (!(m > 1 && n > 1)) {
	      return emptyAcronymResult;
	    }
	    count = 0;
	    sepCount = 0;
	    sumPos = 0;
	    sameCase = 0;
	    i = -1;
	    j = -1;
	    while (++j < n) {
	      qj_lw = query_lw[j];
	      if (isSeparator(qj_lw)) {
	        i = subject_lw.indexOf(qj_lw, i + 1);
	        if (i > -1) {
	          sepCount++;
	          continue;
	        } else {
	          break;
	        }
	      }
	      while (++i < m) {
	        if (qj_lw === subject_lw[i] && isWordStart(i, subject, subject_lw)) {
	          if (query[j] === subject[i]) {
	            sameCase++;
	          }
	          sumPos += i;
	          count++;
	          break;
	        }
	      }
	      if (i === m) {
	        break;
	      }
	    }
	    if (count < 2) {
	      return emptyAcronymResult;
	    }
	    fullWord = count === n ? isAcronymFullWord(subject, subject_lw, query, count) : false;
	    score = scorePattern(count, n, sameCase, true, fullWord);
	    return new AcronymResult(score, sumPos / count, count + sepCount);
	  };
	
	  isAcronymFullWord = function(subject, subject_lw, query, nbAcronymInQuery) {
	    var count, i, m, n;
	    m = subject.length;
	    n = query.length;
	    count = 0;
	    if (m > 12 * n) {
	      return false;
	    }
	    i = -1;
	    while (++i < m) {
	      if (isWordStart(i, subject, subject_lw) && ++count > nbAcronymInQuery) {
	        return false;
	      }
	    }
	    return true;
	  };
	
	}).call(this);


/***/ }),

/***/ 88:
/***/ (function(module, exports) {

	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = ((value * c) - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var yaml = __webpack_require__(204);
	
	
	module.exports = yaml;


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var loader = __webpack_require__(206);
	var dumper = __webpack_require__(205);
	
	
	function deprecated(name) {
	  return function () {
	    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
	  };
	}
	
	
	module.exports.Type                = __webpack_require__(6);
	module.exports.Schema              = __webpack_require__(16);
	module.exports.FAILSAFE_SCHEMA     = __webpack_require__(56);
	module.exports.JSON_SCHEMA         = __webpack_require__(90);
	module.exports.CORE_SCHEMA         = __webpack_require__(89);
	module.exports.DEFAULT_SAFE_SCHEMA = __webpack_require__(23);
	module.exports.DEFAULT_FULL_SCHEMA = __webpack_require__(29);
	module.exports.load                = loader.load;
	module.exports.loadAll             = loader.loadAll;
	module.exports.safeLoad            = loader.safeLoad;
	module.exports.safeLoadAll         = loader.safeLoadAll;
	module.exports.dump                = dumper.dump;
	module.exports.safeDump            = dumper.safeDump;
	module.exports.YAMLException       = __webpack_require__(22);
	
	// Deprecated schema names from JS-YAML 2.0.x
	module.exports.MINIMAL_SCHEMA = __webpack_require__(56);
	module.exports.SAFE_SCHEMA    = __webpack_require__(23);
	module.exports.DEFAULT_SCHEMA = __webpack_require__(29);
	
	// Deprecated functions from JS-YAML 1.x.x
	module.exports.scan           = deprecated('scan');
	module.exports.parse          = deprecated('parse');
	module.exports.compose        = deprecated('compose');
	module.exports.addConstructor = deprecated('addConstructor');


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	'use strict';
	
	
	function isNothing(subject) {
	  return (typeof subject === 'undefined') || (subject === null);
	}
	
	
	function isObject(subject) {
	  return (typeof subject === 'object') && (subject !== null);
	}
	
	
	function toArray(sequence) {
	  if (Array.isArray(sequence)) return sequence;
	  else if (isNothing(sequence)) return [];
	
	  return [ sequence ];
	}
	
	
	function extend(target, source) {
	  var index, length, key, sourceKeys;
	
	  if (source) {
	    sourceKeys = Object.keys(source);
	
	    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
	      key = sourceKeys[index];
	      target[key] = source[key];
	    }
	  }
	
	  return target;
	}
	
	
	function repeat(string, count) {
	  var result = '', cycle;
	
	  for (cycle = 0; cycle < count; cycle += 1) {
	    result += string;
	  }
	
	  return result;
	}
	
	
	function isNegativeZero(number) {
	  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
	}
	
	
	module.exports.isNothing      = isNothing;
	module.exports.isObject       = isObject;
	module.exports.toArray        = toArray;
	module.exports.repeat         = repeat;
	module.exports.isNegativeZero = isNegativeZero;
	module.exports.extend         = extend;


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*eslint-disable no-use-before-define*/
	
	var common              = __webpack_require__(15);
	var YAMLException       = __webpack_require__(22);
	var DEFAULT_FULL_SCHEMA = __webpack_require__(29);
	var DEFAULT_SAFE_SCHEMA = __webpack_require__(23);
	
	var _toString       = Object.prototype.toString;
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var CHAR_TAB                  = 0x09; /* Tab */
	var CHAR_LINE_FEED            = 0x0A; /* LF */
	var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
	var CHAR_SPACE                = 0x20; /* Space */
	var CHAR_EXCLAMATION          = 0x21; /* ! */
	var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
	var CHAR_SHARP                = 0x23; /* # */
	var CHAR_PERCENT              = 0x25; /* % */
	var CHAR_AMPERSAND            = 0x26; /* & */
	var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
	var CHAR_ASTERISK             = 0x2A; /* * */
	var CHAR_COMMA                = 0x2C; /* , */
	var CHAR_MINUS                = 0x2D; /* - */
	var CHAR_COLON                = 0x3A; /* : */
	var CHAR_EQUALS               = 0x3D; /* = */
	var CHAR_GREATER_THAN         = 0x3E; /* > */
	var CHAR_QUESTION             = 0x3F; /* ? */
	var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
	var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
	var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
	var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
	var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
	var CHAR_VERTICAL_LINE        = 0x7C; /* | */
	var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */
	
	var ESCAPE_SEQUENCES = {};
	
	ESCAPE_SEQUENCES[0x00]   = '\\0';
	ESCAPE_SEQUENCES[0x07]   = '\\a';
	ESCAPE_SEQUENCES[0x08]   = '\\b';
	ESCAPE_SEQUENCES[0x09]   = '\\t';
	ESCAPE_SEQUENCES[0x0A]   = '\\n';
	ESCAPE_SEQUENCES[0x0B]   = '\\v';
	ESCAPE_SEQUENCES[0x0C]   = '\\f';
	ESCAPE_SEQUENCES[0x0D]   = '\\r';
	ESCAPE_SEQUENCES[0x1B]   = '\\e';
	ESCAPE_SEQUENCES[0x22]   = '\\"';
	ESCAPE_SEQUENCES[0x5C]   = '\\\\';
	ESCAPE_SEQUENCES[0x85]   = '\\N';
	ESCAPE_SEQUENCES[0xA0]   = '\\_';
	ESCAPE_SEQUENCES[0x2028] = '\\L';
	ESCAPE_SEQUENCES[0x2029] = '\\P';
	
	var DEPRECATED_BOOLEANS_SYNTAX = [
	  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
	  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
	];
	
	function compileStyleMap(schema, map) {
	  var result, keys, index, length, tag, style, type;
	
	  if (map === null) return {};
	
	  result = {};
	  keys = Object.keys(map);
	
	  for (index = 0, length = keys.length; index < length; index += 1) {
	    tag = keys[index];
	    style = String(map[tag]);
	
	    if (tag.slice(0, 2) === '!!') {
	      tag = 'tag:yaml.org,2002:' + tag.slice(2);
	    }
	    type = schema.compiledTypeMap['fallback'][tag];
	
	    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
	      style = type.styleAliases[style];
	    }
	
	    result[tag] = style;
	  }
	
	  return result;
	}
	
	function encodeHex(character) {
	  var string, handle, length;
	
	  string = character.toString(16).toUpperCase();
	
	  if (character <= 0xFF) {
	    handle = 'x';
	    length = 2;
	  } else if (character <= 0xFFFF) {
	    handle = 'u';
	    length = 4;
	  } else if (character <= 0xFFFFFFFF) {
	    handle = 'U';
	    length = 8;
	  } else {
	    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
	  }
	
	  return '\\' + handle + common.repeat('0', length - string.length) + string;
	}
	
	function State(options) {
	  this.schema        = options['schema'] || DEFAULT_FULL_SCHEMA;
	  this.indent        = Math.max(1, (options['indent'] || 2));
	  this.noArrayIndent = options['noArrayIndent'] || false;
	  this.skipInvalid   = options['skipInvalid'] || false;
	  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
	  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
	  this.sortKeys      = options['sortKeys'] || false;
	  this.lineWidth     = options['lineWidth'] || 80;
	  this.noRefs        = options['noRefs'] || false;
	  this.noCompatMode  = options['noCompatMode'] || false;
	  this.condenseFlow  = options['condenseFlow'] || false;
	
	  this.implicitTypes = this.schema.compiledImplicit;
	  this.explicitTypes = this.schema.compiledExplicit;
	
	  this.tag = null;
	  this.result = '';
	
	  this.duplicates = [];
	  this.usedDuplicates = null;
	}
	
	// Indents every line in a string. Empty lines (\n only) are not indented.
	function indentString(string, spaces) {
	  var ind = common.repeat(' ', spaces),
	      position = 0,
	      next = -1,
	      result = '',
	      line,
	      length = string.length;
	
	  while (position < length) {
	    next = string.indexOf('\n', position);
	    if (next === -1) {
	      line = string.slice(position);
	      position = length;
	    } else {
	      line = string.slice(position, next + 1);
	      position = next + 1;
	    }
	
	    if (line.length && line !== '\n') result += ind;
	
	    result += line;
	  }
	
	  return result;
	}
	
	function generateNextLine(state, level) {
	  return '\n' + common.repeat(' ', state.indent * level);
	}
	
	function testImplicitResolving(state, str) {
	  var index, length, type;
	
	  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
	    type = state.implicitTypes[index];
	
	    if (type.resolve(str)) {
	      return true;
	    }
	  }
	
	  return false;
	}
	
	// [33] s-white ::= s-space | s-tab
	function isWhitespace(c) {
	  return c === CHAR_SPACE || c === CHAR_TAB;
	}
	
	// Returns true if the character can be printed without escaping.
	// From YAML 1.2: "any allowed characters known to be non-printable
	// should also be escaped. [However,] This isn’t mandatory"
	// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
	function isPrintable(c) {
	  return  (0x00020 <= c && c <= 0x00007E)
	      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
	      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
	      ||  (0x10000 <= c && c <= 0x10FFFF);
	}
	
	// [34] ns-char ::= nb-char - s-white
	// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
	// [26] b-char  ::= b-line-feed | b-carriage-return
	// [24] b-line-feed       ::=     #xA    /* LF */
	// [25] b-carriage-return ::=     #xD    /* CR */
	// [3]  c-byte-order-mark ::=     #xFEFF
	function isNsChar(c) {
	  return isPrintable(c) && !isWhitespace(c)
	    // byte-order-mark
	    && c !== 0xFEFF
	    // b-char
	    && c !== CHAR_CARRIAGE_RETURN
	    && c !== CHAR_LINE_FEED;
	}
	
	// Simplified test for values allowed after the first character in plain style.
	function isPlainSafe(c, prev) {
	  // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
	  // where nb-char ::= c-printable - b-char - c-byte-order-mark.
	  return isPrintable(c) && c !== 0xFEFF
	    // - c-flow-indicator
	    && c !== CHAR_COMMA
	    && c !== CHAR_LEFT_SQUARE_BRACKET
	    && c !== CHAR_RIGHT_SQUARE_BRACKET
	    && c !== CHAR_LEFT_CURLY_BRACKET
	    && c !== CHAR_RIGHT_CURLY_BRACKET
	    // - ":" - "#"
	    // /* An ns-char preceding */ "#"
	    && c !== CHAR_COLON
	    && ((c !== CHAR_SHARP) || (prev && isNsChar(prev)));
	}
	
	// Simplified test for values allowed as the first character in plain style.
	function isPlainSafeFirst(c) {
	  // Uses a subset of ns-char - c-indicator
	  // where ns-char = nb-char - s-white.
	  return isPrintable(c) && c !== 0xFEFF
	    && !isWhitespace(c) // - s-white
	    // - (c-indicator ::=
	    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
	    && c !== CHAR_MINUS
	    && c !== CHAR_QUESTION
	    && c !== CHAR_COLON
	    && c !== CHAR_COMMA
	    && c !== CHAR_LEFT_SQUARE_BRACKET
	    && c !== CHAR_RIGHT_SQUARE_BRACKET
	    && c !== CHAR_LEFT_CURLY_BRACKET
	    && c !== CHAR_RIGHT_CURLY_BRACKET
	    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
	    && c !== CHAR_SHARP
	    && c !== CHAR_AMPERSAND
	    && c !== CHAR_ASTERISK
	    && c !== CHAR_EXCLAMATION
	    && c !== CHAR_VERTICAL_LINE
	    && c !== CHAR_EQUALS
	    && c !== CHAR_GREATER_THAN
	    && c !== CHAR_SINGLE_QUOTE
	    && c !== CHAR_DOUBLE_QUOTE
	    // | “%” | “@” | “`”)
	    && c !== CHAR_PERCENT
	    && c !== CHAR_COMMERCIAL_AT
	    && c !== CHAR_GRAVE_ACCENT;
	}
	
	// Determines whether block indentation indicator is required.
	function needIndentIndicator(string) {
	  var leadingSpaceRe = /^\n* /;
	  return leadingSpaceRe.test(string);
	}
	
	var STYLE_PLAIN   = 1,
	    STYLE_SINGLE  = 2,
	    STYLE_LITERAL = 3,
	    STYLE_FOLDED  = 4,
	    STYLE_DOUBLE  = 5;
	
	// Determines which scalar styles are possible and returns the preferred style.
	// lineWidth = -1 => no limit.
	// Pre-conditions: str.length > 0.
	// Post-conditions:
	//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
	//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
	//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
	function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
	  var i;
	  var char, prev_char;
	  var hasLineBreak = false;
	  var hasFoldableLine = false; // only checked if shouldTrackWidth
	  var shouldTrackWidth = lineWidth !== -1;
	  var previousLineBreak = -1; // count the first line correctly
	  var plain = isPlainSafeFirst(string.charCodeAt(0))
	          && !isWhitespace(string.charCodeAt(string.length - 1));
	
	  if (singleLineOnly) {
	    // Case: no block styles.
	    // Check for disallowed characters to rule out plain and single.
	    for (i = 0; i < string.length; i++) {
	      char = string.charCodeAt(i);
	      if (!isPrintable(char)) {
	        return STYLE_DOUBLE;
	      }
	      prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
	      plain = plain && isPlainSafe(char, prev_char);
	    }
	  } else {
	    // Case: block styles permitted.
	    for (i = 0; i < string.length; i++) {
	      char = string.charCodeAt(i);
	      if (char === CHAR_LINE_FEED) {
	        hasLineBreak = true;
	        // Check if any line can be folded.
	        if (shouldTrackWidth) {
	          hasFoldableLine = hasFoldableLine ||
	            // Foldable line = too long, and not more-indented.
	            (i - previousLineBreak - 1 > lineWidth &&
	             string[previousLineBreak + 1] !== ' ');
	          previousLineBreak = i;
	        }
	      } else if (!isPrintable(char)) {
	        return STYLE_DOUBLE;
	      }
	      prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
	      plain = plain && isPlainSafe(char, prev_char);
	    }
	    // in case the end is missing a \n
	    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
	      (i - previousLineBreak - 1 > lineWidth &&
	       string[previousLineBreak + 1] !== ' '));
	  }
	  // Although every style can represent \n without escaping, prefer block styles
	  // for multiline, since they're more readable and they don't add empty lines.
	  // Also prefer folding a super-long line.
	  if (!hasLineBreak && !hasFoldableLine) {
	    // Strings interpretable as another type have to be quoted;
	    // e.g. the string 'true' vs. the boolean true.
	    return plain && !testAmbiguousType(string)
	      ? STYLE_PLAIN : STYLE_SINGLE;
	  }
	  // Edge case: block indentation indicator can only have one digit.
	  if (indentPerLevel > 9 && needIndentIndicator(string)) {
	    return STYLE_DOUBLE;
	  }
	  // At this point we know block styles are valid.
	  // Prefer literal style unless we want to fold.
	  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
	}
	
	// Note: line breaking/folding is implemented for only the folded style.
	// NB. We drop the last trailing newline (if any) of a returned block scalar
	//  since the dumper adds its own newline. This always works:
	//    • No ending newline => unaffected; already using strip "-" chomping.
	//    • Ending newline    => removed then restored.
	//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
	function writeScalar(state, string, level, iskey) {
	  state.dump = (function () {
	    if (string.length === 0) {
	      return "''";
	    }
	    if (!state.noCompatMode &&
	        DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
	      return "'" + string + "'";
	    }
	
	    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
	    // As indentation gets deeper, let the width decrease monotonically
	    // to the lower bound min(state.lineWidth, 40).
	    // Note that this implies
	    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
	    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
	    // This behaves better than a constant minimum width which disallows narrower options,
	    // or an indent threshold which causes the width to suddenly increase.
	    var lineWidth = state.lineWidth === -1
	      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
	
	    // Without knowing if keys are implicit/explicit, assume implicit for safety.
	    var singleLineOnly = iskey
	      // No block styles in flow mode.
	      || (state.flowLevel > -1 && level >= state.flowLevel);
	    function testAmbiguity(string) {
	      return testImplicitResolving(state, string);
	    }
	
	    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
	      case STYLE_PLAIN:
	        return string;
	      case STYLE_SINGLE:
	        return "'" + string.replace(/'/g, "''") + "'";
	      case STYLE_LITERAL:
	        return '|' + blockHeader(string, state.indent)
	          + dropEndingNewline(indentString(string, indent));
	      case STYLE_FOLDED:
	        return '>' + blockHeader(string, state.indent)
	          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
	      case STYLE_DOUBLE:
	        return '"' + escapeString(string, lineWidth) + '"';
	      default:
	        throw new YAMLException('impossible error: invalid scalar style');
	    }
	  }());
	}
	
	// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
	function blockHeader(string, indentPerLevel) {
	  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';
	
	  // note the special case: the string '\n' counts as a "trailing" empty line.
	  var clip =          string[string.length - 1] === '\n';
	  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
	  var chomp = keep ? '+' : (clip ? '' : '-');
	
	  return indentIndicator + chomp + '\n';
	}
	
	// (See the note for writeScalar.)
	function dropEndingNewline(string) {
	  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
	}
	
	// Note: a long line without a suitable break point will exceed the width limit.
	// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
	function foldString(string, width) {
	  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
	  // unless they're before or after a more-indented line, or at the very
	  // beginning or end, in which case $k$ maps to $k$.
	  // Therefore, parse each chunk as newline(s) followed by a content line.
	  var lineRe = /(\n+)([^\n]*)/g;
	
	  // first line (possibly an empty line)
	  var result = (function () {
	    var nextLF = string.indexOf('\n');
	    nextLF = nextLF !== -1 ? nextLF : string.length;
	    lineRe.lastIndex = nextLF;
	    return foldLine(string.slice(0, nextLF), width);
	  }());
	  // If we haven't reached the first content line yet, don't add an extra \n.
	  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
	  var moreIndented;
	
	  // rest of the lines
	  var match;
	  while ((match = lineRe.exec(string))) {
	    var prefix = match[1], line = match[2];
	    moreIndented = (line[0] === ' ');
	    result += prefix
	      + (!prevMoreIndented && !moreIndented && line !== ''
	        ? '\n' : '')
	      + foldLine(line, width);
	    prevMoreIndented = moreIndented;
	  }
	
	  return result;
	}
	
	// Greedy line breaking.
	// Picks the longest line under the limit each time,
	// otherwise settles for the shortest line over the limit.
	// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
	function foldLine(line, width) {
	  if (line === '' || line[0] === ' ') return line;
	
	  // Since a more-indented line adds a \n, breaks can't be followed by a space.
	  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
	  var match;
	  // start is an inclusive index. end, curr, and next are exclusive.
	  var start = 0, end, curr = 0, next = 0;
	  var result = '';
	
	  // Invariants: 0 <= start <= length-1.
	  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
	  // Inside the loop:
	  //   A match implies length >= 2, so curr and next are <= length-2.
	  while ((match = breakRe.exec(line))) {
	    next = match.index;
	    // maintain invariant: curr - start <= width
	    if (next - start > width) {
	      end = (curr > start) ? curr : next; // derive end <= length-2
	      result += '\n' + line.slice(start, end);
	      // skip the space that was output as \n
	      start = end + 1;                    // derive start <= length-1
	    }
	    curr = next;
	  }
	
	  // By the invariants, start <= length-1, so there is something left over.
	  // It is either the whole string or a part starting from non-whitespace.
	  result += '\n';
	  // Insert a break if the remainder is too long and there is a break available.
	  if (line.length - start > width && curr > start) {
	    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
	  } else {
	    result += line.slice(start);
	  }
	
	  return result.slice(1); // drop extra \n joiner
	}
	
	// Escapes a double-quoted string.
	function escapeString(string) {
	  var result = '';
	  var char, nextChar;
	  var escapeSeq;
	
	  for (var i = 0; i < string.length; i++) {
	    char = string.charCodeAt(i);
	    // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
	    if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
	      nextChar = string.charCodeAt(i + 1);
	      if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
	        // Combine the surrogate pair and store it escaped.
	        result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
	        // Advance index one extra since we already used that char here.
	        i++; continue;
	      }
	    }
	    escapeSeq = ESCAPE_SEQUENCES[char];
	    result += !escapeSeq && isPrintable(char)
	      ? string[i]
	      : escapeSeq || encodeHex(char);
	  }
	
	  return result;
	}
	
	function writeFlowSequence(state, level, object) {
	  var _result = '',
	      _tag    = state.tag,
	      index,
	      length;
	
	  for (index = 0, length = object.length; index < length; index += 1) {
	    // Write only valid elements.
	    if (writeNode(state, level, object[index], false, false)) {
	      if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
	      _result += state.dump;
	    }
	  }
	
	  state.tag = _tag;
	  state.dump = '[' + _result + ']';
	}
	
	function writeBlockSequence(state, level, object, compact) {
	  var _result = '',
	      _tag    = state.tag,
	      index,
	      length;
	
	  for (index = 0, length = object.length; index < length; index += 1) {
	    // Write only valid elements.
	    if (writeNode(state, level + 1, object[index], true, true)) {
	      if (!compact || index !== 0) {
	        _result += generateNextLine(state, level);
	      }
	
	      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
	        _result += '-';
	      } else {
	        _result += '- ';
	      }
	
	      _result += state.dump;
	    }
	  }
	
	  state.tag = _tag;
	  state.dump = _result || '[]'; // Empty sequence if no valid values.
	}
	
	function writeFlowMapping(state, level, object) {
	  var _result       = '',
	      _tag          = state.tag,
	      objectKeyList = Object.keys(object),
	      index,
	      length,
	      objectKey,
	      objectValue,
	      pairBuffer;
	
	  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
	
	    pairBuffer = '';
	    if (index !== 0) pairBuffer += ', ';
	
	    if (state.condenseFlow) pairBuffer += '"';
	
	    objectKey = objectKeyList[index];
	    objectValue = object[objectKey];
	
	    if (!writeNode(state, level, objectKey, false, false)) {
	      continue; // Skip this pair because of invalid key;
	    }
	
	    if (state.dump.length > 1024) pairBuffer += '? ';
	
	    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');
	
	    if (!writeNode(state, level, objectValue, false, false)) {
	      continue; // Skip this pair because of invalid value.
	    }
	
	    pairBuffer += state.dump;
	
	    // Both key and value are valid.
	    _result += pairBuffer;
	  }
	
	  state.tag = _tag;
	  state.dump = '{' + _result + '}';
	}
	
	function writeBlockMapping(state, level, object, compact) {
	  var _result       = '',
	      _tag          = state.tag,
	      objectKeyList = Object.keys(object),
	      index,
	      length,
	      objectKey,
	      objectValue,
	      explicitPair,
	      pairBuffer;
	
	  // Allow sorting keys so that the output file is deterministic
	  if (state.sortKeys === true) {
	    // Default sorting
	    objectKeyList.sort();
	  } else if (typeof state.sortKeys === 'function') {
	    // Custom sort function
	    objectKeyList.sort(state.sortKeys);
	  } else if (state.sortKeys) {
	    // Something is wrong
	    throw new YAMLException('sortKeys must be a boolean or a function');
	  }
	
	  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
	    pairBuffer = '';
	
	    if (!compact || index !== 0) {
	      pairBuffer += generateNextLine(state, level);
	    }
	
	    objectKey = objectKeyList[index];
	    objectValue = object[objectKey];
	
	    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
	      continue; // Skip this pair because of invalid key.
	    }
	
	    explicitPair = (state.tag !== null && state.tag !== '?') ||
	                   (state.dump && state.dump.length > 1024);
	
	    if (explicitPair) {
	      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
	        pairBuffer += '?';
	      } else {
	        pairBuffer += '? ';
	      }
	    }
	
	    pairBuffer += state.dump;
	
	    if (explicitPair) {
	      pairBuffer += generateNextLine(state, level);
	    }
	
	    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
	      continue; // Skip this pair because of invalid value.
	    }
	
	    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
	      pairBuffer += ':';
	    } else {
	      pairBuffer += ': ';
	    }
	
	    pairBuffer += state.dump;
	
	    // Both key and value are valid.
	    _result += pairBuffer;
	  }
	
	  state.tag = _tag;
	  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
	}
	
	function detectType(state, object, explicit) {
	  var _result, typeList, index, length, type, style;
	
	  typeList = explicit ? state.explicitTypes : state.implicitTypes;
	
	  for (index = 0, length = typeList.length; index < length; index += 1) {
	    type = typeList[index];
	
	    if ((type.instanceOf  || type.predicate) &&
	        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
	        (!type.predicate  || type.predicate(object))) {
	
	      state.tag = explicit ? type.tag : '?';
	
	      if (type.represent) {
	        style = state.styleMap[type.tag] || type.defaultStyle;
	
	        if (_toString.call(type.represent) === '[object Function]') {
	          _result = type.represent(object, style);
	        } else if (_hasOwnProperty.call(type.represent, style)) {
	          _result = type.represent[style](object, style);
	        } else {
	          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
	        }
	
	        state.dump = _result;
	      }
	
	      return true;
	    }
	  }
	
	  return false;
	}
	
	// Serializes `object` and writes it to global `result`.
	// Returns true on success, or false on invalid object.
	//
	function writeNode(state, level, object, block, compact, iskey) {
	  state.tag = null;
	  state.dump = object;
	
	  if (!detectType(state, object, false)) {
	    detectType(state, object, true);
	  }
	
	  var type = _toString.call(state.dump);
	
	  if (block) {
	    block = (state.flowLevel < 0 || state.flowLevel > level);
	  }
	
	  var objectOrArray = type === '[object Object]' || type === '[object Array]',
	      duplicateIndex,
	      duplicate;
	
	  if (objectOrArray) {
	    duplicateIndex = state.duplicates.indexOf(object);
	    duplicate = duplicateIndex !== -1;
	  }
	
	  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
	    compact = false;
	  }
	
	  if (duplicate && state.usedDuplicates[duplicateIndex]) {
	    state.dump = '*ref_' + duplicateIndex;
	  } else {
	    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
	      state.usedDuplicates[duplicateIndex] = true;
	    }
	    if (type === '[object Object]') {
	      if (block && (Object.keys(state.dump).length !== 0)) {
	        writeBlockMapping(state, level, state.dump, compact);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + state.dump;
	        }
	      } else {
	        writeFlowMapping(state, level, state.dump);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
	        }
	      }
	    } else if (type === '[object Array]') {
	      var arrayLevel = (state.noArrayIndent && (level > 0)) ? level - 1 : level;
	      if (block && (state.dump.length !== 0)) {
	        writeBlockSequence(state, arrayLevel, state.dump, compact);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + state.dump;
	        }
	      } else {
	        writeFlowSequence(state, arrayLevel, state.dump);
	        if (duplicate) {
	          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
	        }
	      }
	    } else if (type === '[object String]') {
	      if (state.tag !== '?') {
	        writeScalar(state, state.dump, level, iskey);
	      }
	    } else {
	      if (state.skipInvalid) return false;
	      throw new YAMLException('unacceptable kind of an object to dump ' + type);
	    }
	
	    if (state.tag !== null && state.tag !== '?') {
	      state.dump = '!<' + state.tag + '> ' + state.dump;
	    }
	  }
	
	  return true;
	}
	
	function getDuplicateReferences(object, state) {
	  var objects = [],
	      duplicatesIndexes = [],
	      index,
	      length;
	
	  inspectNode(object, objects, duplicatesIndexes);
	
	  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
	    state.duplicates.push(objects[duplicatesIndexes[index]]);
	  }
	  state.usedDuplicates = new Array(length);
	}
	
	function inspectNode(object, objects, duplicatesIndexes) {
	  var objectKeyList,
	      index,
	      length;
	
	  if (object !== null && typeof object === 'object') {
	    index = objects.indexOf(object);
	    if (index !== -1) {
	      if (duplicatesIndexes.indexOf(index) === -1) {
	        duplicatesIndexes.push(index);
	      }
	    } else {
	      objects.push(object);
	
	      if (Array.isArray(object)) {
	        for (index = 0, length = object.length; index < length; index += 1) {
	          inspectNode(object[index], objects, duplicatesIndexes);
	        }
	      } else {
	        objectKeyList = Object.keys(object);
	
	        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
	          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
	        }
	      }
	    }
	  }
	}
	
	function dump(input, options) {
	  options = options || {};
	
	  var state = new State(options);
	
	  if (!state.noRefs) getDuplicateReferences(input, state);
	
	  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';
	
	  return '';
	}
	
	function safeDump(input, options) {
	  return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}
	
	module.exports.dump     = dump;
	module.exports.safeDump = safeDump;


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

	// YAML error class. http://stackoverflow.com/questions/8458984
	//
	'use strict';
	
	function YAMLException(reason, mark) {
	  // Super constructor
	  Error.call(this);
	
	  this.name = 'YAMLException';
	  this.reason = reason;
	  this.mark = mark;
	  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');
	
	  // Include stack trace in error object
	  if (Error.captureStackTrace) {
	    // Chrome and NodeJS
	    Error.captureStackTrace(this, this.constructor);
	  } else {
	    // FF, IE 10+ and Safari 6+. Fallback for others
	    this.stack = (new Error()).stack || '';
	  }
	}
	
	
	// Inherit from Error
	YAMLException.prototype = Object.create(Error.prototype);
	YAMLException.prototype.constructor = YAMLException;
	
	
	YAMLException.prototype.toString = function toString(compact) {
	  var result = this.name + ': ';
	
	  result += this.reason || '(unknown reason)';
	
	  if (!compact && this.mark) {
	    result += ' ' + this.mark.toString();
	  }
	
	  return result;
	};
	
	
	module.exports = YAMLException;


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*eslint-disable max-len,no-use-before-define*/
	
	var common              = __webpack_require__(15);
	var YAMLException       = __webpack_require__(22);
	var Mark                = __webpack_require__(207);
	var DEFAULT_SAFE_SCHEMA = __webpack_require__(23);
	var DEFAULT_FULL_SCHEMA = __webpack_require__(29);
	
	
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	
	
	var CONTEXT_FLOW_IN   = 1;
	var CONTEXT_FLOW_OUT  = 2;
	var CONTEXT_BLOCK_IN  = 3;
	var CONTEXT_BLOCK_OUT = 4;
	
	
	var CHOMPING_CLIP  = 1;
	var CHOMPING_STRIP = 2;
	var CHOMPING_KEEP  = 3;
	
	
	var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
	var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
	var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
	var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
	var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
	
	
	function _class(obj) { return Object.prototype.toString.call(obj); }
	
	function is_EOL(c) {
	  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
	}
	
	function is_WHITE_SPACE(c) {
	  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
	}
	
	function is_WS_OR_EOL(c) {
	  return (c === 0x09/* Tab */) ||
	         (c === 0x20/* Space */) ||
	         (c === 0x0A/* LF */) ||
	         (c === 0x0D/* CR */);
	}
	
	function is_FLOW_INDICATOR(c) {
	  return c === 0x2C/* , */ ||
	         c === 0x5B/* [ */ ||
	         c === 0x5D/* ] */ ||
	         c === 0x7B/* { */ ||
	         c === 0x7D/* } */;
	}
	
	function fromHexCode(c) {
	  var lc;
	
	  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
	    return c - 0x30;
	  }
	
	  /*eslint-disable no-bitwise*/
	  lc = c | 0x20;
	
	  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
	    return lc - 0x61 + 10;
	  }
	
	  return -1;
	}
	
	function escapedHexLen(c) {
	  if (c === 0x78/* x */) { return 2; }
	  if (c === 0x75/* u */) { return 4; }
	  if (c === 0x55/* U */) { return 8; }
	  return 0;
	}
	
	function fromDecimalCode(c) {
	  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
	    return c - 0x30;
	  }
	
	  return -1;
	}
	
	function simpleEscapeSequence(c) {
	  /* eslint-disable indent */
	  return (c === 0x30/* 0 */) ? '\x00' :
	        (c === 0x61/* a */) ? '\x07' :
	        (c === 0x62/* b */) ? '\x08' :
	        (c === 0x74/* t */) ? '\x09' :
	        (c === 0x09/* Tab */) ? '\x09' :
	        (c === 0x6E/* n */) ? '\x0A' :
	        (c === 0x76/* v */) ? '\x0B' :
	        (c === 0x66/* f */) ? '\x0C' :
	        (c === 0x72/* r */) ? '\x0D' :
	        (c === 0x65/* e */) ? '\x1B' :
	        (c === 0x20/* Space */) ? ' ' :
	        (c === 0x22/* " */) ? '\x22' :
	        (c === 0x2F/* / */) ? '/' :
	        (c === 0x5C/* \ */) ? '\x5C' :
	        (c === 0x4E/* N */) ? '\x85' :
	        (c === 0x5F/* _ */) ? '\xA0' :
	        (c === 0x4C/* L */) ? '\u2028' :
	        (c === 0x50/* P */) ? '\u2029' : '';
	}
	
	function charFromCodepoint(c) {
	  if (c <= 0xFFFF) {
	    return String.fromCharCode(c);
	  }
	  // Encode UTF-16 surrogate pair
	  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
	  return String.fromCharCode(
	    ((c - 0x010000) >> 10) + 0xD800,
	    ((c - 0x010000) & 0x03FF) + 0xDC00
	  );
	}
	
	var simpleEscapeCheck = new Array(256); // integer, for fast access
	var simpleEscapeMap = new Array(256);
	for (var i = 0; i < 256; i++) {
	  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
	  simpleEscapeMap[i] = simpleEscapeSequence(i);
	}
	
	
	function State(input, options) {
	  this.input = input;
	
	  this.filename  = options['filename']  || null;
	  this.schema    = options['schema']    || DEFAULT_FULL_SCHEMA;
	  this.onWarning = options['onWarning'] || null;
	  this.legacy    = options['legacy']    || false;
	  this.json      = options['json']      || false;
	  this.listener  = options['listener']  || null;
	
	  this.implicitTypes = this.schema.compiledImplicit;
	  this.typeMap       = this.schema.compiledTypeMap;
	
	  this.length     = input.length;
	  this.position   = 0;
	  this.line       = 0;
	  this.lineStart  = 0;
	  this.lineIndent = 0;
	
	  this.documents = [];
	
	  /*
	  this.version;
	  this.checkLineBreaks;
	  this.tagMap;
	  this.anchorMap;
	  this.tag;
	  this.anchor;
	  this.kind;
	  this.result;*/
	
	}
	
	
	function generateError(state, message) {
	  return new YAMLException(
	    message,
	    new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
	}
	
	function throwError(state, message) {
	  throw generateError(state, message);
	}
	
	function throwWarning(state, message) {
	  if (state.onWarning) {
	    state.onWarning.call(null, generateError(state, message));
	  }
	}
	
	
	var directiveHandlers = {
	
	  YAML: function handleYamlDirective(state, name, args) {
	
	    var match, major, minor;
	
	    if (state.version !== null) {
	      throwError(state, 'duplication of %YAML directive');
	    }
	
	    if (args.length !== 1) {
	      throwError(state, 'YAML directive accepts exactly one argument');
	    }
	
	    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
	
	    if (match === null) {
	      throwError(state, 'ill-formed argument of the YAML directive');
	    }
	
	    major = parseInt(match[1], 10);
	    minor = parseInt(match[2], 10);
	
	    if (major !== 1) {
	      throwError(state, 'unacceptable YAML version of the document');
	    }
	
	    state.version = args[0];
	    state.checkLineBreaks = (minor < 2);
	
	    if (minor !== 1 && minor !== 2) {
	      throwWarning(state, 'unsupported YAML version of the document');
	    }
	  },
	
	  TAG: function handleTagDirective(state, name, args) {
	
	    var handle, prefix;
	
	    if (args.length !== 2) {
	      throwError(state, 'TAG directive accepts exactly two arguments');
	    }
	
	    handle = args[0];
	    prefix = args[1];
	
	    if (!PATTERN_TAG_HANDLE.test(handle)) {
	      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
	    }
	
	    if (_hasOwnProperty.call(state.tagMap, handle)) {
	      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
	    }
	
	    if (!PATTERN_TAG_URI.test(prefix)) {
	      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
	    }
	
	    state.tagMap[handle] = prefix;
	  }
	};
	
	
	function captureSegment(state, start, end, checkJson) {
	  var _position, _length, _character, _result;
	
	  if (start < end) {
	    _result = state.input.slice(start, end);
	
	    if (checkJson) {
	      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
	        _character = _result.charCodeAt(_position);
	        if (!(_character === 0x09 ||
	              (0x20 <= _character && _character <= 0x10FFFF))) {
	          throwError(state, 'expected valid JSON character');
	        }
	      }
	    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
	      throwError(state, 'the stream contains non-printable characters');
	    }
	
	    state.result += _result;
	  }
	}
	
	function mergeMappings(state, destination, source, overridableKeys) {
	  var sourceKeys, key, index, quantity;
	
	  if (!common.isObject(source)) {
	    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
	  }
	
	  sourceKeys = Object.keys(source);
	
	  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
	    key = sourceKeys[index];
	
	    if (!_hasOwnProperty.call(destination, key)) {
	      destination[key] = source[key];
	      overridableKeys[key] = true;
	    }
	  }
	}
	
	function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
	  var index, quantity;
	
	  // The output is a plain object here, so keys can only be strings.
	  // We need to convert keyNode to a string, but doing so can hang the process
	  // (deeply nested arrays that explode exponentially using aliases).
	  if (Array.isArray(keyNode)) {
	    keyNode = Array.prototype.slice.call(keyNode);
	
	    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
	      if (Array.isArray(keyNode[index])) {
	        throwError(state, 'nested arrays are not supported inside keys');
	      }
	
	      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
	        keyNode[index] = '[object Object]';
	      }
	    }
	  }
	
	  // Avoid code execution in load() via toString property
	  // (still use its own toString for arrays, timestamps,
	  // and whatever user schema extensions happen to have @@toStringTag)
	  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
	    keyNode = '[object Object]';
	  }
	
	
	  keyNode = String(keyNode);
	
	  if (_result === null) {
	    _result = {};
	  }
	
	  if (keyTag === 'tag:yaml.org,2002:merge') {
	    if (Array.isArray(valueNode)) {
	      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
	        mergeMappings(state, _result, valueNode[index], overridableKeys);
	      }
	    } else {
	      mergeMappings(state, _result, valueNode, overridableKeys);
	    }
	  } else {
	    if (!state.json &&
	        !_hasOwnProperty.call(overridableKeys, keyNode) &&
	        _hasOwnProperty.call(_result, keyNode)) {
	      state.line = startLine || state.line;
	      state.position = startPos || state.position;
	      throwError(state, 'duplicated mapping key');
	    }
	    _result[keyNode] = valueNode;
	    delete overridableKeys[keyNode];
	  }
	
	  return _result;
	}
	
	function readLineBreak(state) {
	  var ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch === 0x0A/* LF */) {
	    state.position++;
	  } else if (ch === 0x0D/* CR */) {
	    state.position++;
	    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
	      state.position++;
	    }
	  } else {
	    throwError(state, 'a line break is expected');
	  }
	
	  state.line += 1;
	  state.lineStart = state.position;
	}
	
	function skipSeparationSpace(state, allowComments, checkIndent) {
	  var lineBreaks = 0,
	      ch = state.input.charCodeAt(state.position);
	
	  while (ch !== 0) {
	    while (is_WHITE_SPACE(ch)) {
	      ch = state.input.charCodeAt(++state.position);
	    }
	
	    if (allowComments && ch === 0x23/* # */) {
	      do {
	        ch = state.input.charCodeAt(++state.position);
	      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
	    }
	
	    if (is_EOL(ch)) {
	      readLineBreak(state);
	
	      ch = state.input.charCodeAt(state.position);
	      lineBreaks++;
	      state.lineIndent = 0;
	
	      while (ch === 0x20/* Space */) {
	        state.lineIndent++;
	        ch = state.input.charCodeAt(++state.position);
	      }
	    } else {
	      break;
	    }
	  }
	
	  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
	    throwWarning(state, 'deficient indentation');
	  }
	
	  return lineBreaks;
	}
	
	function testDocumentSeparator(state) {
	  var _position = state.position,
	      ch;
	
	  ch = state.input.charCodeAt(_position);
	
	  // Condition state.position === state.lineStart is tested
	  // in parent on each call, for efficiency. No needs to test here again.
	  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
	      ch === state.input.charCodeAt(_position + 1) &&
	      ch === state.input.charCodeAt(_position + 2)) {
	
	    _position += 3;
	
	    ch = state.input.charCodeAt(_position);
	
	    if (ch === 0 || is_WS_OR_EOL(ch)) {
	      return true;
	    }
	  }
	
	  return false;
	}
	
	function writeFoldedLines(state, count) {
	  if (count === 1) {
	    state.result += ' ';
	  } else if (count > 1) {
	    state.result += common.repeat('\n', count - 1);
	  }
	}
	
	
	function readPlainScalar(state, nodeIndent, withinFlowCollection) {
	  var preceding,
	      following,
	      captureStart,
	      captureEnd,
	      hasPendingContent,
	      _line,
	      _lineStart,
	      _lineIndent,
	      _kind = state.kind,
	      _result = state.result,
	      ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (is_WS_OR_EOL(ch)      ||
	      is_FLOW_INDICATOR(ch) ||
	      ch === 0x23/* # */    ||
	      ch === 0x26/* & */    ||
	      ch === 0x2A/* * */    ||
	      ch === 0x21/* ! */    ||
	      ch === 0x7C/* | */    ||
	      ch === 0x3E/* > */    ||
	      ch === 0x27/* ' */    ||
	      ch === 0x22/* " */    ||
	      ch === 0x25/* % */    ||
	      ch === 0x40/* @ */    ||
	      ch === 0x60/* ` */) {
	    return false;
	  }
	
	  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
	    following = state.input.charCodeAt(state.position + 1);
	
	    if (is_WS_OR_EOL(following) ||
	        withinFlowCollection && is_FLOW_INDICATOR(following)) {
	      return false;
	    }
	  }
	
	  state.kind = 'scalar';
	  state.result = '';
	  captureStart = captureEnd = state.position;
	  hasPendingContent = false;
	
	  while (ch !== 0) {
	    if (ch === 0x3A/* : */) {
	      following = state.input.charCodeAt(state.position + 1);
	
	      if (is_WS_OR_EOL(following) ||
	          withinFlowCollection && is_FLOW_INDICATOR(following)) {
	        break;
	      }
	
	    } else if (ch === 0x23/* # */) {
	      preceding = state.input.charCodeAt(state.position - 1);
	
	      if (is_WS_OR_EOL(preceding)) {
	        break;
	      }
	
	    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
	               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
	      break;
	
	    } else if (is_EOL(ch)) {
	      _line = state.line;
	      _lineStart = state.lineStart;
	      _lineIndent = state.lineIndent;
	      skipSeparationSpace(state, false, -1);
	
	      if (state.lineIndent >= nodeIndent) {
	        hasPendingContent = true;
	        ch = state.input.charCodeAt(state.position);
	        continue;
	      } else {
	        state.position = captureEnd;
	        state.line = _line;
	        state.lineStart = _lineStart;
	        state.lineIndent = _lineIndent;
	        break;
	      }
	    }
	
	    if (hasPendingContent) {
	      captureSegment(state, captureStart, captureEnd, false);
	      writeFoldedLines(state, state.line - _line);
	      captureStart = captureEnd = state.position;
	      hasPendingContent = false;
	    }
	
	    if (!is_WHITE_SPACE(ch)) {
	      captureEnd = state.position + 1;
	    }
	
	    ch = state.input.charCodeAt(++state.position);
	  }
	
	  captureSegment(state, captureStart, captureEnd, false);
	
	  if (state.result) {
	    return true;
	  }
	
	  state.kind = _kind;
	  state.result = _result;
	  return false;
	}
	
	function readSingleQuotedScalar(state, nodeIndent) {
	  var ch,
	      captureStart, captureEnd;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch !== 0x27/* ' */) {
	    return false;
	  }
	
	  state.kind = 'scalar';
	  state.result = '';
	  state.position++;
	  captureStart = captureEnd = state.position;
	
	  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
	    if (ch === 0x27/* ' */) {
	      captureSegment(state, captureStart, state.position, true);
	      ch = state.input.charCodeAt(++state.position);
	
	      if (ch === 0x27/* ' */) {
	        captureStart = state.position;
	        state.position++;
	        captureEnd = state.position;
	      } else {
	        return true;
	      }
	
	    } else if (is_EOL(ch)) {
	      captureSegment(state, captureStart, captureEnd, true);
	      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
	      captureStart = captureEnd = state.position;
	
	    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
	      throwError(state, 'unexpected end of the document within a single quoted scalar');
	
	    } else {
	      state.position++;
	      captureEnd = state.position;
	    }
	  }
	
	  throwError(state, 'unexpected end of the stream within a single quoted scalar');
	}
	
	function readDoubleQuotedScalar(state, nodeIndent) {
	  var captureStart,
	      captureEnd,
	      hexLength,
	      hexResult,
	      tmp,
	      ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch !== 0x22/* " */) {
	    return false;
	  }
	
	  state.kind = 'scalar';
	  state.result = '';
	  state.position++;
	  captureStart = captureEnd = state.position;
	
	  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
	    if (ch === 0x22/* " */) {
	      captureSegment(state, captureStart, state.position, true);
	      state.position++;
	      return true;
	
	    } else if (ch === 0x5C/* \ */) {
	      captureSegment(state, captureStart, state.position, true);
	      ch = state.input.charCodeAt(++state.position);
	
	      if (is_EOL(ch)) {
	        skipSeparationSpace(state, false, nodeIndent);
	
	        // TODO: rework to inline fn with no type cast?
	      } else if (ch < 256 && simpleEscapeCheck[ch]) {
	        state.result += simpleEscapeMap[ch];
	        state.position++;
	
	      } else if ((tmp = escapedHexLen(ch)) > 0) {
	        hexLength = tmp;
	        hexResult = 0;
	
	        for (; hexLength > 0; hexLength--) {
	          ch = state.input.charCodeAt(++state.position);
	
	          if ((tmp = fromHexCode(ch)) >= 0) {
	            hexResult = (hexResult << 4) + tmp;
	
	          } else {
	            throwError(state, 'expected hexadecimal character');
	          }
	        }
	
	        state.result += charFromCodepoint(hexResult);
	
	        state.position++;
	
	      } else {
	        throwError(state, 'unknown escape sequence');
	      }
	
	      captureStart = captureEnd = state.position;
	
	    } else if (is_EOL(ch)) {
	      captureSegment(state, captureStart, captureEnd, true);
	      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
	      captureStart = captureEnd = state.position;
	
	    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
	      throwError(state, 'unexpected end of the document within a double quoted scalar');
	
	    } else {
	      state.position++;
	      captureEnd = state.position;
	    }
	  }
	
	  throwError(state, 'unexpected end of the stream within a double quoted scalar');
	}
	
	function readFlowCollection(state, nodeIndent) {
	  var readNext = true,
	      _line,
	      _tag     = state.tag,
	      _result,
	      _anchor  = state.anchor,
	      following,
	      terminator,
	      isPair,
	      isExplicitPair,
	      isMapping,
	      overridableKeys = {},
	      keyNode,
	      keyTag,
	      valueNode,
	      ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch === 0x5B/* [ */) {
	    terminator = 0x5D;/* ] */
	    isMapping = false;
	    _result = [];
	  } else if (ch === 0x7B/* { */) {
	    terminator = 0x7D;/* } */
	    isMapping = true;
	    _result = {};
	  } else {
	    return false;
	  }
	
	  if (state.anchor !== null) {
	    state.anchorMap[state.anchor] = _result;
	  }
	
	  ch = state.input.charCodeAt(++state.position);
	
	  while (ch !== 0) {
	    skipSeparationSpace(state, true, nodeIndent);
	
	    ch = state.input.charCodeAt(state.position);
	
	    if (ch === terminator) {
	      state.position++;
	      state.tag = _tag;
	      state.anchor = _anchor;
	      state.kind = isMapping ? 'mapping' : 'sequence';
	      state.result = _result;
	      return true;
	    } else if (!readNext) {
	      throwError(state, 'missed comma between flow collection entries');
	    }
	
	    keyTag = keyNode = valueNode = null;
	    isPair = isExplicitPair = false;
	
	    if (ch === 0x3F/* ? */) {
	      following = state.input.charCodeAt(state.position + 1);
	
	      if (is_WS_OR_EOL(following)) {
	        isPair = isExplicitPair = true;
	        state.position++;
	        skipSeparationSpace(state, true, nodeIndent);
	      }
	    }
	
	    _line = state.line;
	    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
	    keyTag = state.tag;
	    keyNode = state.result;
	    skipSeparationSpace(state, true, nodeIndent);
	
	    ch = state.input.charCodeAt(state.position);
	
	    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
	      isPair = true;
	      ch = state.input.charCodeAt(++state.position);
	      skipSeparationSpace(state, true, nodeIndent);
	      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
	      valueNode = state.result;
	    }
	
	    if (isMapping) {
	      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
	    } else if (isPair) {
	      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
	    } else {
	      _result.push(keyNode);
	    }
	
	    skipSeparationSpace(state, true, nodeIndent);
	
	    ch = state.input.charCodeAt(state.position);
	
	    if (ch === 0x2C/* , */) {
	      readNext = true;
	      ch = state.input.charCodeAt(++state.position);
	    } else {
	      readNext = false;
	    }
	  }
	
	  throwError(state, 'unexpected end of the stream within a flow collection');
	}
	
	function readBlockScalar(state, nodeIndent) {
	  var captureStart,
	      folding,
	      chomping       = CHOMPING_CLIP,
	      didReadContent = false,
	      detectedIndent = false,
	      textIndent     = nodeIndent,
	      emptyLines     = 0,
	      atMoreIndented = false,
	      tmp,
	      ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch === 0x7C/* | */) {
	    folding = false;
	  } else if (ch === 0x3E/* > */) {
	    folding = true;
	  } else {
	    return false;
	  }
	
	  state.kind = 'scalar';
	  state.result = '';
	
	  while (ch !== 0) {
	    ch = state.input.charCodeAt(++state.position);
	
	    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
	      if (CHOMPING_CLIP === chomping) {
	        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
	      } else {
	        throwError(state, 'repeat of a chomping mode identifier');
	      }
	
	    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
	      if (tmp === 0) {
	        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
	      } else if (!detectedIndent) {
	        textIndent = nodeIndent + tmp - 1;
	        detectedIndent = true;
	      } else {
	        throwError(state, 'repeat of an indentation width identifier');
	      }
	
	    } else {
	      break;
	    }
	  }
	
	  if (is_WHITE_SPACE(ch)) {
	    do { ch = state.input.charCodeAt(++state.position); }
	    while (is_WHITE_SPACE(ch));
	
	    if (ch === 0x23/* # */) {
	      do { ch = state.input.charCodeAt(++state.position); }
	      while (!is_EOL(ch) && (ch !== 0));
	    }
	  }
	
	  while (ch !== 0) {
	    readLineBreak(state);
	    state.lineIndent = 0;
	
	    ch = state.input.charCodeAt(state.position);
	
	    while ((!detectedIndent || state.lineIndent < textIndent) &&
	           (ch === 0x20/* Space */)) {
	      state.lineIndent++;
	      ch = state.input.charCodeAt(++state.position);
	    }
	
	    if (!detectedIndent && state.lineIndent > textIndent) {
	      textIndent = state.lineIndent;
	    }
	
	    if (is_EOL(ch)) {
	      emptyLines++;
	      continue;
	    }
	
	    // End of the scalar.
	    if (state.lineIndent < textIndent) {
	
	      // Perform the chomping.
	      if (chomping === CHOMPING_KEEP) {
	        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
	      } else if (chomping === CHOMPING_CLIP) {
	        if (didReadContent) { // i.e. only if the scalar is not empty.
	          state.result += '\n';
	        }
	      }
	
	      // Break this `while` cycle and go to the funciton's epilogue.
	      break;
	    }
	
	    // Folded style: use fancy rules to handle line breaks.
	    if (folding) {
	
	      // Lines starting with white space characters (more-indented lines) are not folded.
	      if (is_WHITE_SPACE(ch)) {
	        atMoreIndented = true;
	        // except for the first content line (cf. Example 8.1)
	        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
	
	      // End of more-indented block.
	      } else if (atMoreIndented) {
	        atMoreIndented = false;
	        state.result += common.repeat('\n', emptyLines + 1);
	
	      // Just one line break - perceive as the same line.
	      } else if (emptyLines === 0) {
	        if (didReadContent) { // i.e. only if we have already read some scalar content.
	          state.result += ' ';
	        }
	
	      // Several line breaks - perceive as different lines.
	      } else {
	        state.result += common.repeat('\n', emptyLines);
	      }
	
	    // Literal style: just add exact number of line breaks between content lines.
	    } else {
	      // Keep all line breaks except the header line break.
	      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
	    }
	
	    didReadContent = true;
	    detectedIndent = true;
	    emptyLines = 0;
	    captureStart = state.position;
	
	    while (!is_EOL(ch) && (ch !== 0)) {
	      ch = state.input.charCodeAt(++state.position);
	    }
	
	    captureSegment(state, captureStart, state.position, false);
	  }
	
	  return true;
	}
	
	function readBlockSequence(state, nodeIndent) {
	  var _line,
	      _tag      = state.tag,
	      _anchor   = state.anchor,
	      _result   = [],
	      following,
	      detected  = false,
	      ch;
	
	  if (state.anchor !== null) {
	    state.anchorMap[state.anchor] = _result;
	  }
	
	  ch = state.input.charCodeAt(state.position);
	
	  while (ch !== 0) {
	
	    if (ch !== 0x2D/* - */) {
	      break;
	    }
	
	    following = state.input.charCodeAt(state.position + 1);
	
	    if (!is_WS_OR_EOL(following)) {
	      break;
	    }
	
	    detected = true;
	    state.position++;
	
	    if (skipSeparationSpace(state, true, -1)) {
	      if (state.lineIndent <= nodeIndent) {
	        _result.push(null);
	        ch = state.input.charCodeAt(state.position);
	        continue;
	      }
	    }
	
	    _line = state.line;
	    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
	    _result.push(state.result);
	    skipSeparationSpace(state, true, -1);
	
	    ch = state.input.charCodeAt(state.position);
	
	    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
	      throwError(state, 'bad indentation of a sequence entry');
	    } else if (state.lineIndent < nodeIndent) {
	      break;
	    }
	  }
	
	  if (detected) {
	    state.tag = _tag;
	    state.anchor = _anchor;
	    state.kind = 'sequence';
	    state.result = _result;
	    return true;
	  }
	  return false;
	}
	
	function readBlockMapping(state, nodeIndent, flowIndent) {
	  var following,
	      allowCompact,
	      _line,
	      _pos,
	      _tag          = state.tag,
	      _anchor       = state.anchor,
	      _result       = {},
	      overridableKeys = {},
	      keyTag        = null,
	      keyNode       = null,
	      valueNode     = null,
	      atExplicitKey = false,
	      detected      = false,
	      ch;
	
	  if (state.anchor !== null) {
	    state.anchorMap[state.anchor] = _result;
	  }
	
	  ch = state.input.charCodeAt(state.position);
	
	  while (ch !== 0) {
	    following = state.input.charCodeAt(state.position + 1);
	    _line = state.line; // Save the current line.
	    _pos = state.position;
	
	    //
	    // Explicit notation case. There are two separate blocks:
	    // first for the key (denoted by "?") and second for the value (denoted by ":")
	    //
	    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {
	
	      if (ch === 0x3F/* ? */) {
	        if (atExplicitKey) {
	          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
	          keyTag = keyNode = valueNode = null;
	        }
	
	        detected = true;
	        atExplicitKey = true;
	        allowCompact = true;
	
	      } else if (atExplicitKey) {
	        // i.e. 0x3A/* : */ === character after the explicit key.
	        atExplicitKey = false;
	        allowCompact = true;
	
	      } else {
	        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
	      }
	
	      state.position += 1;
	      ch = following;
	
	    //
	    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
	    //
	    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
	
	      if (state.line === _line) {
	        ch = state.input.charCodeAt(state.position);
	
	        while (is_WHITE_SPACE(ch)) {
	          ch = state.input.charCodeAt(++state.position);
	        }
	
	        if (ch === 0x3A/* : */) {
	          ch = state.input.charCodeAt(++state.position);
	
	          if (!is_WS_OR_EOL(ch)) {
	            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
	          }
	
	          if (atExplicitKey) {
	            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
	            keyTag = keyNode = valueNode = null;
	          }
	
	          detected = true;
	          atExplicitKey = false;
	          allowCompact = false;
	          keyTag = state.tag;
	          keyNode = state.result;
	
	        } else if (detected) {
	          throwError(state, 'can not read an implicit mapping pair; a colon is missed');
	
	        } else {
	          state.tag = _tag;
	          state.anchor = _anchor;
	          return true; // Keep the result of `composeNode`.
	        }
	
	      } else if (detected) {
	        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
	
	      } else {
	        state.tag = _tag;
	        state.anchor = _anchor;
	        return true; // Keep the result of `composeNode`.
	      }
	
	    } else {
	      break; // Reading is done. Go to the epilogue.
	    }
	
	    //
	    // Common reading code for both explicit and implicit notations.
	    //
	    if (state.line === _line || state.lineIndent > nodeIndent) {
	      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
	        if (atExplicitKey) {
	          keyNode = state.result;
	        } else {
	          valueNode = state.result;
	        }
	      }
	
	      if (!atExplicitKey) {
	        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
	        keyTag = keyNode = valueNode = null;
	      }
	
	      skipSeparationSpace(state, true, -1);
	      ch = state.input.charCodeAt(state.position);
	    }
	
	    if (state.lineIndent > nodeIndent && (ch !== 0)) {
	      throwError(state, 'bad indentation of a mapping entry');
	    } else if (state.lineIndent < nodeIndent) {
	      break;
	    }
	  }
	
	  //
	  // Epilogue.
	  //
	
	  // Special case: last mapping's node contains only the key in explicit notation.
	  if (atExplicitKey) {
	    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
	  }
	
	  // Expose the resulting mapping.
	  if (detected) {
	    state.tag = _tag;
	    state.anchor = _anchor;
	    state.kind = 'mapping';
	    state.result = _result;
	  }
	
	  return detected;
	}
	
	function readTagProperty(state) {
	  var _position,
	      isVerbatim = false,
	      isNamed    = false,
	      tagHandle,
	      tagName,
	      ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch !== 0x21/* ! */) return false;
	
	  if (state.tag !== null) {
	    throwError(state, 'duplication of a tag property');
	  }
	
	  ch = state.input.charCodeAt(++state.position);
	
	  if (ch === 0x3C/* < */) {
	    isVerbatim = true;
	    ch = state.input.charCodeAt(++state.position);
	
	  } else if (ch === 0x21/* ! */) {
	    isNamed = true;
	    tagHandle = '!!';
	    ch = state.input.charCodeAt(++state.position);
	
	  } else {
	    tagHandle = '!';
	  }
	
	  _position = state.position;
	
	  if (isVerbatim) {
	    do { ch = state.input.charCodeAt(++state.position); }
	    while (ch !== 0 && ch !== 0x3E/* > */);
	
	    if (state.position < state.length) {
	      tagName = state.input.slice(_position, state.position);
	      ch = state.input.charCodeAt(++state.position);
	    } else {
	      throwError(state, 'unexpected end of the stream within a verbatim tag');
	    }
	  } else {
	    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
	
	      if (ch === 0x21/* ! */) {
	        if (!isNamed) {
	          tagHandle = state.input.slice(_position - 1, state.position + 1);
	
	          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
	            throwError(state, 'named tag handle cannot contain such characters');
	          }
	
	          isNamed = true;
	          _position = state.position + 1;
	        } else {
	          throwError(state, 'tag suffix cannot contain exclamation marks');
	        }
	      }
	
	      ch = state.input.charCodeAt(++state.position);
	    }
	
	    tagName = state.input.slice(_position, state.position);
	
	    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
	      throwError(state, 'tag suffix cannot contain flow indicator characters');
	    }
	  }
	
	  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
	    throwError(state, 'tag name cannot contain such characters: ' + tagName);
	  }
	
	  if (isVerbatim) {
	    state.tag = tagName;
	
	  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
	    state.tag = state.tagMap[tagHandle] + tagName;
	
	  } else if (tagHandle === '!') {
	    state.tag = '!' + tagName;
	
	  } else if (tagHandle === '!!') {
	    state.tag = 'tag:yaml.org,2002:' + tagName;
	
	  } else {
	    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
	  }
	
	  return true;
	}
	
	function readAnchorProperty(state) {
	  var _position,
	      ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch !== 0x26/* & */) return false;
	
	  if (state.anchor !== null) {
	    throwError(state, 'duplication of an anchor property');
	  }
	
	  ch = state.input.charCodeAt(++state.position);
	  _position = state.position;
	
	  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
	    ch = state.input.charCodeAt(++state.position);
	  }
	
	  if (state.position === _position) {
	    throwError(state, 'name of an anchor node must contain at least one character');
	  }
	
	  state.anchor = state.input.slice(_position, state.position);
	  return true;
	}
	
	function readAlias(state) {
	  var _position, alias,
	      ch;
	
	  ch = state.input.charCodeAt(state.position);
	
	  if (ch !== 0x2A/* * */) return false;
	
	  ch = state.input.charCodeAt(++state.position);
	  _position = state.position;
	
	  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
	    ch = state.input.charCodeAt(++state.position);
	  }
	
	  if (state.position === _position) {
	    throwError(state, 'name of an alias node must contain at least one character');
	  }
	
	  alias = state.input.slice(_position, state.position);
	
	  if (!_hasOwnProperty.call(state.anchorMap, alias)) {
	    throwError(state, 'unidentified alias "' + alias + '"');
	  }
	
	  state.result = state.anchorMap[alias];
	  skipSeparationSpace(state, true, -1);
	  return true;
	}
	
	function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
	  var allowBlockStyles,
	      allowBlockScalars,
	      allowBlockCollections,
	      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
	      atNewLine  = false,
	      hasContent = false,
	      typeIndex,
	      typeQuantity,
	      type,
	      flowIndent,
	      blockIndent;
	
	  if (state.listener !== null) {
	    state.listener('open', state);
	  }
	
	  state.tag    = null;
	  state.anchor = null;
	  state.kind   = null;
	  state.result = null;
	
	  allowBlockStyles = allowBlockScalars = allowBlockCollections =
	    CONTEXT_BLOCK_OUT === nodeContext ||
	    CONTEXT_BLOCK_IN  === nodeContext;
	
	  if (allowToSeek) {
	    if (skipSeparationSpace(state, true, -1)) {
	      atNewLine = true;
	
	      if (state.lineIndent > parentIndent) {
	        indentStatus = 1;
	      } else if (state.lineIndent === parentIndent) {
	        indentStatus = 0;
	      } else if (state.lineIndent < parentIndent) {
	        indentStatus = -1;
	      }
	    }
	  }
	
	  if (indentStatus === 1) {
	    while (readTagProperty(state) || readAnchorProperty(state)) {
	      if (skipSeparationSpace(state, true, -1)) {
	        atNewLine = true;
	        allowBlockCollections = allowBlockStyles;
	
	        if (state.lineIndent > parentIndent) {
	          indentStatus = 1;
	        } else if (state.lineIndent === parentIndent) {
	          indentStatus = 0;
	        } else if (state.lineIndent < parentIndent) {
	          indentStatus = -1;
	        }
	      } else {
	        allowBlockCollections = false;
	      }
	    }
	  }
	
	  if (allowBlockCollections) {
	    allowBlockCollections = atNewLine || allowCompact;
	  }
	
	  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
	    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
	      flowIndent = parentIndent;
	    } else {
	      flowIndent = parentIndent + 1;
	    }
	
	    blockIndent = state.position - state.lineStart;
	
	    if (indentStatus === 1) {
	      if (allowBlockCollections &&
	          (readBlockSequence(state, blockIndent) ||
	           readBlockMapping(state, blockIndent, flowIndent)) ||
	          readFlowCollection(state, flowIndent)) {
	        hasContent = true;
	      } else {
	        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
	            readSingleQuotedScalar(state, flowIndent) ||
	            readDoubleQuotedScalar(state, flowIndent)) {
	          hasContent = true;
	
	        } else if (readAlias(state)) {
	          hasContent = true;
	
	          if (state.tag !== null || state.anchor !== null) {
	            throwError(state, 'alias node should not have any properties');
	          }
	
	        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
	          hasContent = true;
	
	          if (state.tag === null) {
	            state.tag = '?';
	          }
	        }
	
	        if (state.anchor !== null) {
	          state.anchorMap[state.anchor] = state.result;
	        }
	      }
	    } else if (indentStatus === 0) {
	      // Special case: block sequences are allowed to have same indentation level as the parent.
	      // http://www.yaml.org/spec/1.2/spec.html#id2799784
	      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
	    }
	  }
	
	  if (state.tag !== null && state.tag !== '!') {
	    if (state.tag === '?') {
	      // Implicit resolving is not allowed for non-scalar types, and '?'
	      // non-specific tag is only automatically assigned to plain scalars.
	      //
	      // We only need to check kind conformity in case user explicitly assigns '?'
	      // tag, for example like this: "!<?> [0]"
	      //
	      if (state.result !== null && state.kind !== 'scalar') {
	        throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
	      }
	
	      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
	        type = state.implicitTypes[typeIndex];
	
	        if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
	          state.result = type.construct(state.result);
	          state.tag = type.tag;
	          if (state.anchor !== null) {
	            state.anchorMap[state.anchor] = state.result;
	          }
	          break;
	        }
	      }
	    } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
	      type = state.typeMap[state.kind || 'fallback'][state.tag];
	
	      if (state.result !== null && type.kind !== state.kind) {
	        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
	      }
	
	      if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
	        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
	      } else {
	        state.result = type.construct(state.result);
	        if (state.anchor !== null) {
	          state.anchorMap[state.anchor] = state.result;
	        }
	      }
	    } else {
	      throwError(state, 'unknown tag !<' + state.tag + '>');
	    }
	  }
	
	  if (state.listener !== null) {
	    state.listener('close', state);
	  }
	  return state.tag !== null ||  state.anchor !== null || hasContent;
	}
	
	function readDocument(state) {
	  var documentStart = state.position,
	      _position,
	      directiveName,
	      directiveArgs,
	      hasDirectives = false,
	      ch;
	
	  state.version = null;
	  state.checkLineBreaks = state.legacy;
	  state.tagMap = {};
	  state.anchorMap = {};
	
	  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
	    skipSeparationSpace(state, true, -1);
	
	    ch = state.input.charCodeAt(state.position);
	
	    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
	      break;
	    }
	
	    hasDirectives = true;
	    ch = state.input.charCodeAt(++state.position);
	    _position = state.position;
	
	    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
	      ch = state.input.charCodeAt(++state.position);
	    }
	
	    directiveName = state.input.slice(_position, state.position);
	    directiveArgs = [];
	
	    if (directiveName.length < 1) {
	      throwError(state, 'directive name must not be less than one character in length');
	    }
	
	    while (ch !== 0) {
	      while (is_WHITE_SPACE(ch)) {
	        ch = state.input.charCodeAt(++state.position);
	      }
	
	      if (ch === 0x23/* # */) {
	        do { ch = state.input.charCodeAt(++state.position); }
	        while (ch !== 0 && !is_EOL(ch));
	        break;
	      }
	
	      if (is_EOL(ch)) break;
	
	      _position = state.position;
	
	      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
	        ch = state.input.charCodeAt(++state.position);
	      }
	
	      directiveArgs.push(state.input.slice(_position, state.position));
	    }
	
	    if (ch !== 0) readLineBreak(state);
	
	    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
	      directiveHandlers[directiveName](state, directiveName, directiveArgs);
	    } else {
	      throwWarning(state, 'unknown document directive "' + directiveName + '"');
	    }
	  }
	
	  skipSeparationSpace(state, true, -1);
	
	  if (state.lineIndent === 0 &&
	      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
	      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
	      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
	    state.position += 3;
	    skipSeparationSpace(state, true, -1);
	
	  } else if (hasDirectives) {
	    throwError(state, 'directives end mark is expected');
	  }
	
	  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
	  skipSeparationSpace(state, true, -1);
	
	  if (state.checkLineBreaks &&
	      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
	    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
	  }
	
	  state.documents.push(state.result);
	
	  if (state.position === state.lineStart && testDocumentSeparator(state)) {
	
	    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
	      state.position += 3;
	      skipSeparationSpace(state, true, -1);
	    }
	    return;
	  }
	
	  if (state.position < (state.length - 1)) {
	    throwError(state, 'end of the stream or a document separator is expected');
	  } else {
	    return;
	  }
	}
	
	
	function loadDocuments(input, options) {
	  input = String(input);
	  options = options || {};
	
	  if (input.length !== 0) {
	
	    // Add tailing `\n` if not exists
	    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
	        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
	      input += '\n';
	    }
	
	    // Strip BOM
	    if (input.charCodeAt(0) === 0xFEFF) {
	      input = input.slice(1);
	    }
	  }
	
	  var state = new State(input, options);
	
	  var nullpos = input.indexOf('\0');
	
	  if (nullpos !== -1) {
	    state.position = nullpos;
	    throwError(state, 'null byte is not allowed in input');
	  }
	
	  // Use 0 as string terminator. That significantly simplifies bounds check.
	  state.input += '\0';
	
	  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
	    state.lineIndent += 1;
	    state.position += 1;
	  }
	
	  while (state.position < (state.length - 1)) {
	    readDocument(state);
	  }
	
	  return state.documents;
	}
	
	
	function loadAll(input, iterator, options) {
	  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
	    options = iterator;
	    iterator = null;
	  }
	
	  var documents = loadDocuments(input, options);
	
	  if (typeof iterator !== 'function') {
	    return documents;
	  }
	
	  for (var index = 0, length = documents.length; index < length; index += 1) {
	    iterator(documents[index]);
	  }
	}
	
	
	function load(input, options) {
	  var documents = loadDocuments(input, options);
	
	  if (documents.length === 0) {
	    /*eslint-disable no-undefined*/
	    return undefined;
	  } else if (documents.length === 1) {
	    return documents[0];
	  }
	  throw new YAMLException('expected a single document in the stream, but found more');
	}
	
	
	function safeLoadAll(input, iterator, options) {
	  if (typeof iterator === 'object' && iterator !== null && typeof options === 'undefined') {
	    options = iterator;
	    iterator = null;
	  }
	
	  return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}
	
	
	function safeLoad(input, options) {
	  return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
	}
	
	
	module.exports.loadAll     = loadAll;
	module.exports.load        = load;
	module.exports.safeLoadAll = safeLoadAll;
	module.exports.safeLoad    = safeLoad;


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var common = __webpack_require__(15);
	
	
	function Mark(name, buffer, position, line, column) {
	  this.name     = name;
	  this.buffer   = buffer;
	  this.position = position;
	  this.line     = line;
	  this.column   = column;
	}
	
	
	Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
	  var head, start, tail, end, snippet;
	
	  if (!this.buffer) return null;
	
	  indent = indent || 4;
	  maxLength = maxLength || 75;
	
	  head = '';
	  start = this.position;
	
	  while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
	    start -= 1;
	    if (this.position - start > (maxLength / 2 - 1)) {
	      head = ' ... ';
	      start += 5;
	      break;
	    }
	  }
	
	  tail = '';
	  end = this.position;
	
	  while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
	    end += 1;
	    if (end - this.position > (maxLength / 2 - 1)) {
	      tail = ' ... ';
	      end -= 5;
	      break;
	    }
	  }
	
	  snippet = this.buffer.slice(start, end);
	
	  return common.repeat(' ', indent) + head + snippet + tail + '\n' +
	         common.repeat(' ', indent + this.position - start + head.length) + '^';
	};
	
	
	Mark.prototype.toString = function toString(compact) {
	  var snippet, where = '';
	
	  if (this.name) {
	    where += 'in "' + this.name + '" ';
	  }
	
	  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);
	
	  if (!compact) {
	    snippet = this.getSnippet();
	
	    if (snippet) {
	      where += ':\n' + snippet;
	    }
	  }
	
	  return where;
	};
	
	
	module.exports = Mark;


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*eslint-disable max-len*/
	
	var common        = __webpack_require__(15);
	var YAMLException = __webpack_require__(22);
	var Type          = __webpack_require__(6);
	
	
	function compileList(schema, name, result) {
	  var exclude = [];
	
	  schema.include.forEach(function (includedSchema) {
	    result = compileList(includedSchema, name, result);
	  });
	
	  schema[name].forEach(function (currentType) {
	    result.forEach(function (previousType, previousIndex) {
	      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
	        exclude.push(previousIndex);
	      }
	    });
	
	    result.push(currentType);
	  });
	
	  return result.filter(function (type, index) {
	    return exclude.indexOf(index) === -1;
	  });
	}
	
	
	function compileMap(/* lists... */) {
	  var result = {
	        scalar: {},
	        sequence: {},
	        mapping: {},
	        fallback: {}
	      }, index, length;
	
	  function collectType(type) {
	    result[type.kind][type.tag] = result['fallback'][type.tag] = type;
	  }
	
	  for (index = 0, length = arguments.length; index < length; index += 1) {
	    arguments[index].forEach(collectType);
	  }
	  return result;
	}
	
	
	function Schema(definition) {
	  this.include  = definition.include  || [];
	  this.implicit = definition.implicit || [];
	  this.explicit = definition.explicit || [];
	
	  this.implicit.forEach(function (type) {
	    if (type.loadKind && type.loadKind !== 'scalar') {
	      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
	    }
	  });
	
	  this.compiledImplicit = compileList(this, 'implicit', []);
	  this.compiledExplicit = compileList(this, 'explicit', []);
	  this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
	}
	
	
	Schema.DEFAULT = null;
	
	
	Schema.create = function createSchema() {
	  var schemas, types;
	
	  switch (arguments.length) {
	    case 1:
	      schemas = Schema.DEFAULT;
	      types = arguments[0];
	      break;
	
	    case 2:
	      schemas = arguments[0];
	      types = arguments[1];
	      break;
	
	    default:
	      throw new YAMLException('Wrong number of arguments for Schema.create function');
	  }
	
	  schemas = common.toArray(schemas);
	  types = common.toArray(types);
	
	  if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
	    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
	  }
	
	  if (!types.every(function (type) { return type instanceof Type; })) {
	    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
	  }
	
	  return new Schema({
	    include: schemas,
	    explicit: types
	  });
	};
	
	
	module.exports = Schema;


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	// Standard YAML's Core schema.
	// http://www.yaml.org/spec/1.2/spec.html#id2804923
	//
	// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
	// So, Core schema has no distinctions from JSON schema is JS-YAML.
	
	
	'use strict';
	
	
	var Schema = __webpack_require__(16);
	
	
	module.exports = new Schema({
	  include: [
	    __webpack_require__(90)
	  ]
	});


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

	// JS-YAML's default schema for `load` function.
	// It is not described in the YAML specification.
	//
	// This schema is based on JS-YAML's default safe schema and includes
	// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
	//
	// Also this schema is used as default base schema at `Schema.create` function.
	
	
	'use strict';
	
	
	var Schema = __webpack_require__(16);
	
	
	module.exports = Schema.DEFAULT = new Schema({
	  include: [
	    __webpack_require__(23)
	  ],
	  explicit: [
	    __webpack_require__(214),
	    __webpack_require__(213),
	    __webpack_require__(212)
	  ]
	});


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

	// JS-YAML's default schema for `safeLoad` function.
	// It is not described in the YAML specification.
	//
	// This schema is based on standard YAML's Core schema and includes most of
	// extra types described at YAML tag repository. (http://yaml.org/type/)
	
	
	'use strict';
	
	
	var Schema = __webpack_require__(16);
	
	
	module.exports = new Schema({
	  include: [
	    __webpack_require__(89)
	  ],
	  implicit: [
	    __webpack_require__(223),
	    __webpack_require__(216)
	  ],
	  explicit: [
	    __webpack_require__(208),
	    __webpack_require__(218),
	    __webpack_require__(219),
	    __webpack_require__(221)
	  ]
	});


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

	// Standard YAML's Failsafe schema.
	// http://www.yaml.org/spec/1.2/spec.html#id2802346
	
	
	'use strict';
	
	
	var Schema = __webpack_require__(16);
	
	
	module.exports = new Schema({
	  explicit: [
	    __webpack_require__(222),
	    __webpack_require__(220),
	    __webpack_require__(215)
	  ]
	});


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	// Standard YAML's JSON schema.
	// http://www.yaml.org/spec/1.2/spec.html#id2803231
	//
	// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
	// So, this schema is not such strict as defined in the YAML specification.
	// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.
	
	
	'use strict';
	
	
	var Schema = __webpack_require__(16);
	
	
	module.exports = new Schema({
	  include: [
	    __webpack_require__(56)
	  ],
	  implicit: [
	    __webpack_require__(217),
	    __webpack_require__(209),
	    __webpack_require__(211),
	    __webpack_require__(210)
	  ]
	});


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var YAMLException = __webpack_require__(22);
	
	var TYPE_CONSTRUCTOR_OPTIONS = [
	  'kind',
	  'resolve',
	  'construct',
	  'instanceOf',
	  'predicate',
	  'represent',
	  'defaultStyle',
	  'styleAliases'
	];
	
	var YAML_NODE_KINDS = [
	  'scalar',
	  'sequence',
	  'mapping'
	];
	
	function compileStyleAliases(map) {
	  var result = {};
	
	  if (map !== null) {
	    Object.keys(map).forEach(function (style) {
	      map[style].forEach(function (alias) {
	        result[String(alias)] = style;
	      });
	    });
	  }
	
	  return result;
	}
	
	function Type(tag, options) {
	  options = options || {};
	
	  Object.keys(options).forEach(function (name) {
	    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
	      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
	    }
	  });
	
	  // TODO: Add tag format check.
	  this.tag          = tag;
	  this.kind         = options['kind']         || null;
	  this.resolve      = options['resolve']      || function () { return true; };
	  this.construct    = options['construct']    || function (data) { return data; };
	  this.instanceOf   = options['instanceOf']   || null;
	  this.predicate    = options['predicate']    || null;
	  this.represent    = options['represent']    || null;
	  this.defaultStyle = options['defaultStyle'] || null;
	  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);
	
	  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
	    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
	  }
	}
	
	module.exports = Type;


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

	var require;'use strict';
	
	/*eslint-disable no-bitwise*/
	
	var NodeBuffer;
	
	try {
	  // A trick for browserified version, to not include `Buffer` shim
	  var _require = require;
	  NodeBuffer = __webpack_require__(173).Buffer;
	} catch (__) {}
	
	var Type       = __webpack_require__(6);
	
	
	// [ 64, 65, 66 ] -> [ padding, CR, LF ]
	var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';
	
	
	function resolveYamlBinary(data) {
	  if (data === null) return false;
	
	  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
	
	  // Convert one by one.
	  for (idx = 0; idx < max; idx++) {
	    code = map.indexOf(data.charAt(idx));
	
	    // Skip CR/LF
	    if (code > 64) continue;
	
	    // Fail on illegal characters
	    if (code < 0) return false;
	
	    bitlen += 6;
	  }
	
	  // If there are any bits left, source was corrupted
	  return (bitlen % 8) === 0;
	}
	
	function constructYamlBinary(data) {
	  var idx, tailbits,
	      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
	      max = input.length,
	      map = BASE64_MAP,
	      bits = 0,
	      result = [];
	
	  // Collect by 6*4 bits (3 bytes)
	
	  for (idx = 0; idx < max; idx++) {
	    if ((idx % 4 === 0) && idx) {
	      result.push((bits >> 16) & 0xFF);
	      result.push((bits >> 8) & 0xFF);
	      result.push(bits & 0xFF);
	    }
	
	    bits = (bits << 6) | map.indexOf(input.charAt(idx));
	  }
	
	  // Dump tail
	
	  tailbits = (max % 4) * 6;
	
	  if (tailbits === 0) {
	    result.push((bits >> 16) & 0xFF);
	    result.push((bits >> 8) & 0xFF);
	    result.push(bits & 0xFF);
	  } else if (tailbits === 18) {
	    result.push((bits >> 10) & 0xFF);
	    result.push((bits >> 2) & 0xFF);
	  } else if (tailbits === 12) {
	    result.push((bits >> 4) & 0xFF);
	  }
	
	  // Wrap into Buffer for NodeJS and leave Array for browser
	  if (NodeBuffer) {
	    // Support node 6.+ Buffer API when available
	    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
	  }
	
	  return result;
	}
	
	function representYamlBinary(object /*, style*/) {
	  var result = '', bits = 0, idx, tail,
	      max = object.length,
	      map = BASE64_MAP;
	
	  // Convert every three bytes to 4 ASCII characters.
	
	  for (idx = 0; idx < max; idx++) {
	    if ((idx % 3 === 0) && idx) {
	      result += map[(bits >> 18) & 0x3F];
	      result += map[(bits >> 12) & 0x3F];
	      result += map[(bits >> 6) & 0x3F];
	      result += map[bits & 0x3F];
	    }
	
	    bits = (bits << 8) + object[idx];
	  }
	
	  // Dump tail
	
	  tail = max % 3;
	
	  if (tail === 0) {
	    result += map[(bits >> 18) & 0x3F];
	    result += map[(bits >> 12) & 0x3F];
	    result += map[(bits >> 6) & 0x3F];
	    result += map[bits & 0x3F];
	  } else if (tail === 2) {
	    result += map[(bits >> 10) & 0x3F];
	    result += map[(bits >> 4) & 0x3F];
	    result += map[(bits << 2) & 0x3F];
	    result += map[64];
	  } else if (tail === 1) {
	    result += map[(bits >> 2) & 0x3F];
	    result += map[(bits << 4) & 0x3F];
	    result += map[64];
	    result += map[64];
	  }
	
	  return result;
	}
	
	function isBinary(object) {
	  return NodeBuffer && NodeBuffer.isBuffer(object);
	}
	
	module.exports = new Type('tag:yaml.org,2002:binary', {
	  kind: 'scalar',
	  resolve: resolveYamlBinary,
	  construct: constructYamlBinary,
	  predicate: isBinary,
	  represent: representYamlBinary
	});


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	function resolveYamlBoolean(data) {
	  if (data === null) return false;
	
	  var max = data.length;
	
	  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
	         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
	}
	
	function constructYamlBoolean(data) {
	  return data === 'true' ||
	         data === 'True' ||
	         data === 'TRUE';
	}
	
	function isBoolean(object) {
	  return Object.prototype.toString.call(object) === '[object Boolean]';
	}
	
	module.exports = new Type('tag:yaml.org,2002:bool', {
	  kind: 'scalar',
	  resolve: resolveYamlBoolean,
	  construct: constructYamlBoolean,
	  predicate: isBoolean,
	  represent: {
	    lowercase: function (object) { return object ? 'true' : 'false'; },
	    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
	    camelcase: function (object) { return object ? 'True' : 'False'; }
	  },
	  defaultStyle: 'lowercase'
	});


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var common = __webpack_require__(15);
	var Type   = __webpack_require__(6);
	
	var YAML_FLOAT_PATTERN = new RegExp(
	  // 2.5e4, 2.5 and integers
	  '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
	  // .2e4, .2
	  // special case, seems not from spec
	  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
	  // 20:59
	  '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
	  // .inf
	  '|[-+]?\\.(?:inf|Inf|INF)' +
	  // .nan
	  '|\\.(?:nan|NaN|NAN))$');
	
	function resolveYamlFloat(data) {
	  if (data === null) return false;
	
	  if (!YAML_FLOAT_PATTERN.test(data) ||
	      // Quick hack to not allow integers end with `_`
	      // Probably should update regexp & check speed
	      data[data.length - 1] === '_') {
	    return false;
	  }
	
	  return true;
	}
	
	function constructYamlFloat(data) {
	  var value, sign, base, digits;
	
	  value  = data.replace(/_/g, '').toLowerCase();
	  sign   = value[0] === '-' ? -1 : 1;
	  digits = [];
	
	  if ('+-'.indexOf(value[0]) >= 0) {
	    value = value.slice(1);
	  }
	
	  if (value === '.inf') {
	    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
	
	  } else if (value === '.nan') {
	    return NaN;
	
	  } else if (value.indexOf(':') >= 0) {
	    value.split(':').forEach(function (v) {
	      digits.unshift(parseFloat(v, 10));
	    });
	
	    value = 0.0;
	    base = 1;
	
	    digits.forEach(function (d) {
	      value += d * base;
	      base *= 60;
	    });
	
	    return sign * value;
	
	  }
	  return sign * parseFloat(value, 10);
	}
	
	
	var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
	
	function representYamlFloat(object, style) {
	  var res;
	
	  if (isNaN(object)) {
	    switch (style) {
	      case 'lowercase': return '.nan';
	      case 'uppercase': return '.NAN';
	      case 'camelcase': return '.NaN';
	    }
	  } else if (Number.POSITIVE_INFINITY === object) {
	    switch (style) {
	      case 'lowercase': return '.inf';
	      case 'uppercase': return '.INF';
	      case 'camelcase': return '.Inf';
	    }
	  } else if (Number.NEGATIVE_INFINITY === object) {
	    switch (style) {
	      case 'lowercase': return '-.inf';
	      case 'uppercase': return '-.INF';
	      case 'camelcase': return '-.Inf';
	    }
	  } else if (common.isNegativeZero(object)) {
	    return '-0.0';
	  }
	
	  res = object.toString(10);
	
	  // JS stringifier can build scientific format without dots: 5e-100,
	  // while YAML requres dot: 5.e-100. Fix it with simple hack
	
	  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
	}
	
	function isFloat(object) {
	  return (Object.prototype.toString.call(object) === '[object Number]') &&
	         (object % 1 !== 0 || common.isNegativeZero(object));
	}
	
	module.exports = new Type('tag:yaml.org,2002:float', {
	  kind: 'scalar',
	  resolve: resolveYamlFloat,
	  construct: constructYamlFloat,
	  predicate: isFloat,
	  represent: representYamlFloat,
	  defaultStyle: 'lowercase'
	});


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var common = __webpack_require__(15);
	var Type   = __webpack_require__(6);
	
	function isHexCode(c) {
	  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
	         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
	         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
	}
	
	function isOctCode(c) {
	  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
	}
	
	function isDecCode(c) {
	  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
	}
	
	function resolveYamlInteger(data) {
	  if (data === null) return false;
	
	  var max = data.length,
	      index = 0,
	      hasDigits = false,
	      ch;
	
	  if (!max) return false;
	
	  ch = data[index];
	
	  // sign
	  if (ch === '-' || ch === '+') {
	    ch = data[++index];
	  }
	
	  if (ch === '0') {
	    // 0
	    if (index + 1 === max) return true;
	    ch = data[++index];
	
	    // base 2, base 8, base 16
	
	    if (ch === 'b') {
	      // base 2
	      index++;
	
	      for (; index < max; index++) {
	        ch = data[index];
	        if (ch === '_') continue;
	        if (ch !== '0' && ch !== '1') return false;
	        hasDigits = true;
	      }
	      return hasDigits && ch !== '_';
	    }
	
	
	    if (ch === 'x') {
	      // base 16
	      index++;
	
	      for (; index < max; index++) {
	        ch = data[index];
	        if (ch === '_') continue;
	        if (!isHexCode(data.charCodeAt(index))) return false;
	        hasDigits = true;
	      }
	      return hasDigits && ch !== '_';
	    }
	
	    // base 8
	    for (; index < max; index++) {
	      ch = data[index];
	      if (ch === '_') continue;
	      if (!isOctCode(data.charCodeAt(index))) return false;
	      hasDigits = true;
	    }
	    return hasDigits && ch !== '_';
	  }
	
	  // base 10 (except 0) or base 60
	
	  // value should not start with `_`;
	  if (ch === '_') return false;
	
	  for (; index < max; index++) {
	    ch = data[index];
	    if (ch === '_') continue;
	    if (ch === ':') break;
	    if (!isDecCode(data.charCodeAt(index))) {
	      return false;
	    }
	    hasDigits = true;
	  }
	
	  // Should have digits and should not end with `_`
	  if (!hasDigits || ch === '_') return false;
	
	  // if !base60 - done;
	  if (ch !== ':') return true;
	
	  // base60 almost not used, no needs to optimize
	  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
	}
	
	function constructYamlInteger(data) {
	  var value = data, sign = 1, ch, base, digits = [];
	
	  if (value.indexOf('_') !== -1) {
	    value = value.replace(/_/g, '');
	  }
	
	  ch = value[0];
	
	  if (ch === '-' || ch === '+') {
	    if (ch === '-') sign = -1;
	    value = value.slice(1);
	    ch = value[0];
	  }
	
	  if (value === '0') return 0;
	
	  if (ch === '0') {
	    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
	    if (value[1] === 'x') return sign * parseInt(value, 16);
	    return sign * parseInt(value, 8);
	  }
	
	  if (value.indexOf(':') !== -1) {
	    value.split(':').forEach(function (v) {
	      digits.unshift(parseInt(v, 10));
	    });
	
	    value = 0;
	    base = 1;
	
	    digits.forEach(function (d) {
	      value += (d * base);
	      base *= 60;
	    });
	
	    return sign * value;
	
	  }
	
	  return sign * parseInt(value, 10);
	}
	
	function isInteger(object) {
	  return (Object.prototype.toString.call(object)) === '[object Number]' &&
	         (object % 1 === 0 && !common.isNegativeZero(object));
	}
	
	module.exports = new Type('tag:yaml.org,2002:int', {
	  kind: 'scalar',
	  resolve: resolveYamlInteger,
	  construct: constructYamlInteger,
	  predicate: isInteger,
	  represent: {
	    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
	    octal:       function (obj) { return obj >= 0 ? '0'  + obj.toString(8) : '-0'  + obj.toString(8).slice(1); },
	    decimal:     function (obj) { return obj.toString(10); },
	    /* eslint-disable max-len */
	    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
	  },
	  defaultStyle: 'decimal',
	  styleAliases: {
	    binary:      [ 2,  'bin' ],
	    octal:       [ 8,  'oct' ],
	    decimal:     [ 10, 'dec' ],
	    hexadecimal: [ 16, 'hex' ]
	  }
	});


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

	var require;'use strict';
	
	var esprima;
	
	// Browserified version does not have esprima
	//
	// 1. For node.js just require module as deps
	// 2. For browser try to require mudule via external AMD system.
	//    If not found - try to fallback to window.esprima. If not
	//    found too - then fail to parse.
	//
	try {
	  // workaround to exclude package from browserify list.
	  var _require = require;
	  esprima = __webpack_require__(198);
	} catch (_) {
	  /* eslint-disable no-redeclare */
	  /* global window */
	  if (typeof window !== 'undefined') esprima = window.esprima;
	}
	
	var Type = __webpack_require__(6);
	
	function resolveJavascriptFunction(data) {
	  if (data === null) return false;
	
	  try {
	    var source = '(' + data + ')',
	        ast    = esprima.parse(source, { range: true });
	
	    if (ast.type                    !== 'Program'             ||
	        ast.body.length             !== 1                     ||
	        ast.body[0].type            !== 'ExpressionStatement' ||
	        (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
	          ast.body[0].expression.type !== 'FunctionExpression')) {
	      return false;
	    }
	
	    return true;
	  } catch (err) {
	    return false;
	  }
	}
	
	function constructJavascriptFunction(data) {
	  /*jslint evil:true*/
	
	  var source = '(' + data + ')',
	      ast    = esprima.parse(source, { range: true }),
	      params = [],
	      body;
	
	  if (ast.type                    !== 'Program'             ||
	      ast.body.length             !== 1                     ||
	      ast.body[0].type            !== 'ExpressionStatement' ||
	      (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
	        ast.body[0].expression.type !== 'FunctionExpression')) {
	    throw new Error('Failed to resolve function');
	  }
	
	  ast.body[0].expression.params.forEach(function (param) {
	    params.push(param.name);
	  });
	
	  body = ast.body[0].expression.body.range;
	
	  // Esprima's ranges include the first '{' and the last '}' characters on
	  // function expressions. So cut them out.
	  if (ast.body[0].expression.body.type === 'BlockStatement') {
	    /*eslint-disable no-new-func*/
	    return new Function(params, source.slice(body[0] + 1, body[1] - 1));
	  }
	  // ES6 arrow functions can omit the BlockStatement. In that case, just return
	  // the body.
	  /*eslint-disable no-new-func*/
	  return new Function(params, 'return ' + source.slice(body[0], body[1]));
	}
	
	function representJavascriptFunction(object /*, style*/) {
	  return object.toString();
	}
	
	function isFunction(object) {
	  return Object.prototype.toString.call(object) === '[object Function]';
	}
	
	module.exports = new Type('tag:yaml.org,2002:js/function', {
	  kind: 'scalar',
	  resolve: resolveJavascriptFunction,
	  construct: constructJavascriptFunction,
	  predicate: isFunction,
	  represent: representJavascriptFunction
	});


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	function resolveJavascriptRegExp(data) {
	  if (data === null) return false;
	  if (data.length === 0) return false;
	
	  var regexp = data,
	      tail   = /\/([gim]*)$/.exec(data),
	      modifiers = '';
	
	  // if regexp starts with '/' it can have modifiers and must be properly closed
	  // `/foo/gim` - modifiers tail can be maximum 3 chars
	  if (regexp[0] === '/') {
	    if (tail) modifiers = tail[1];
	
	    if (modifiers.length > 3) return false;
	    // if expression starts with /, is should be properly terminated
	    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
	  }
	
	  return true;
	}
	
	function constructJavascriptRegExp(data) {
	  var regexp = data,
	      tail   = /\/([gim]*)$/.exec(data),
	      modifiers = '';
	
	  // `/foo/gim` - tail can be maximum 4 chars
	  if (regexp[0] === '/') {
	    if (tail) modifiers = tail[1];
	    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
	  }
	
	  return new RegExp(regexp, modifiers);
	}
	
	function representJavascriptRegExp(object /*, style*/) {
	  var result = '/' + object.source + '/';
	
	  if (object.global) result += 'g';
	  if (object.multiline) result += 'm';
	  if (object.ignoreCase) result += 'i';
	
	  return result;
	}
	
	function isRegExp(object) {
	  return Object.prototype.toString.call(object) === '[object RegExp]';
	}
	
	module.exports = new Type('tag:yaml.org,2002:js/regexp', {
	  kind: 'scalar',
	  resolve: resolveJavascriptRegExp,
	  construct: constructJavascriptRegExp,
	  predicate: isRegExp,
	  represent: representJavascriptRegExp
	});


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	function resolveJavascriptUndefined() {
	  return true;
	}
	
	function constructJavascriptUndefined() {
	  /*eslint-disable no-undefined*/
	  return undefined;
	}
	
	function representJavascriptUndefined() {
	  return '';
	}
	
	function isUndefined(object) {
	  return typeof object === 'undefined';
	}
	
	module.exports = new Type('tag:yaml.org,2002:js/undefined', {
	  kind: 'scalar',
	  resolve: resolveJavascriptUndefined,
	  construct: constructJavascriptUndefined,
	  predicate: isUndefined,
	  represent: representJavascriptUndefined
	});


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	module.exports = new Type('tag:yaml.org,2002:map', {
	  kind: 'mapping',
	  construct: function (data) { return data !== null ? data : {}; }
	});


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	function resolveYamlMerge(data) {
	  return data === '<<' || data === null;
	}
	
	module.exports = new Type('tag:yaml.org,2002:merge', {
	  kind: 'scalar',
	  resolve: resolveYamlMerge
	});


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	function resolveYamlNull(data) {
	  if (data === null) return true;
	
	  var max = data.length;
	
	  return (max === 1 && data === '~') ||
	         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
	}
	
	function constructYamlNull() {
	  return null;
	}
	
	function isNull(object) {
	  return object === null;
	}
	
	module.exports = new Type('tag:yaml.org,2002:null', {
	  kind: 'scalar',
	  resolve: resolveYamlNull,
	  construct: constructYamlNull,
	  predicate: isNull,
	  represent: {
	    canonical: function () { return '~';    },
	    lowercase: function () { return 'null'; },
	    uppercase: function () { return 'NULL'; },
	    camelcase: function () { return 'Null'; }
	  },
	  defaultStyle: 'lowercase'
	});


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	var _toString       = Object.prototype.toString;
	
	function resolveYamlOmap(data) {
	  if (data === null) return true;
	
	  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
	      object = data;
	
	  for (index = 0, length = object.length; index < length; index += 1) {
	    pair = object[index];
	    pairHasKey = false;
	
	    if (_toString.call(pair) !== '[object Object]') return false;
	
	    for (pairKey in pair) {
	      if (_hasOwnProperty.call(pair, pairKey)) {
	        if (!pairHasKey) pairHasKey = true;
	        else return false;
	      }
	    }
	
	    if (!pairHasKey) return false;
	
	    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
	    else return false;
	  }
	
	  return true;
	}
	
	function constructYamlOmap(data) {
	  return data !== null ? data : [];
	}
	
	module.exports = new Type('tag:yaml.org,2002:omap', {
	  kind: 'sequence',
	  resolve: resolveYamlOmap,
	  construct: constructYamlOmap
	});


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	var _toString = Object.prototype.toString;
	
	function resolveYamlPairs(data) {
	  if (data === null) return true;
	
	  var index, length, pair, keys, result,
	      object = data;
	
	  result = new Array(object.length);
	
	  for (index = 0, length = object.length; index < length; index += 1) {
	    pair = object[index];
	
	    if (_toString.call(pair) !== '[object Object]') return false;
	
	    keys = Object.keys(pair);
	
	    if (keys.length !== 1) return false;
	
	    result[index] = [ keys[0], pair[keys[0]] ];
	  }
	
	  return true;
	}
	
	function constructYamlPairs(data) {
	  if (data === null) return [];
	
	  var index, length, pair, keys, result,
	      object = data;
	
	  result = new Array(object.length);
	
	  for (index = 0, length = object.length; index < length; index += 1) {
	    pair = object[index];
	
	    keys = Object.keys(pair);
	
	    result[index] = [ keys[0], pair[keys[0]] ];
	  }
	
	  return result;
	}
	
	module.exports = new Type('tag:yaml.org,2002:pairs', {
	  kind: 'sequence',
	  resolve: resolveYamlPairs,
	  construct: constructYamlPairs
	});


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	module.exports = new Type('tag:yaml.org,2002:seq', {
	  kind: 'sequence',
	  construct: function (data) { return data !== null ? data : []; }
	});


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	var _hasOwnProperty = Object.prototype.hasOwnProperty;
	
	function resolveYamlSet(data) {
	  if (data === null) return true;
	
	  var key, object = data;
	
	  for (key in object) {
	    if (_hasOwnProperty.call(object, key)) {
	      if (object[key] !== null) return false;
	    }
	  }
	
	  return true;
	}
	
	function constructYamlSet(data) {
	  return data !== null ? data : {};
	}
	
	module.exports = new Type('tag:yaml.org,2002:set', {
	  kind: 'mapping',
	  resolve: resolveYamlSet,
	  construct: constructYamlSet
	});


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	module.exports = new Type('tag:yaml.org,2002:str', {
	  kind: 'scalar',
	  construct: function (data) { return data !== null ? data : ''; }
	});


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Type = __webpack_require__(6);
	
	var YAML_DATE_REGEXP = new RegExp(
	  '^([0-9][0-9][0-9][0-9])'          + // [1] year
	  '-([0-9][0-9])'                    + // [2] month
	  '-([0-9][0-9])$');                   // [3] day
	
	var YAML_TIMESTAMP_REGEXP = new RegExp(
	  '^([0-9][0-9][0-9][0-9])'          + // [1] year
	  '-([0-9][0-9]?)'                   + // [2] month
	  '-([0-9][0-9]?)'                   + // [3] day
	  '(?:[Tt]|[ \\t]+)'                 + // ...
	  '([0-9][0-9]?)'                    + // [4] hour
	  ':([0-9][0-9])'                    + // [5] minute
	  ':([0-9][0-9])'                    + // [6] second
	  '(?:\\.([0-9]*))?'                 + // [7] fraction
	  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
	  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute
	
	function resolveYamlTimestamp(data) {
	  if (data === null) return false;
	  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
	  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
	  return false;
	}
	
	function constructYamlTimestamp(data) {
	  var match, year, month, day, hour, minute, second, fraction = 0,
	      delta = null, tz_hour, tz_minute, date;
	
	  match = YAML_DATE_REGEXP.exec(data);
	  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
	
	  if (match === null) throw new Error('Date resolve error');
	
	  // match: [1] year [2] month [3] day
	
	  year = +(match[1]);
	  month = +(match[2]) - 1; // JS month starts with 0
	  day = +(match[3]);
	
	  if (!match[4]) { // no hour
	    return new Date(Date.UTC(year, month, day));
	  }
	
	  // match: [4] hour [5] minute [6] second [7] fraction
	
	  hour = +(match[4]);
	  minute = +(match[5]);
	  second = +(match[6]);
	
	  if (match[7]) {
	    fraction = match[7].slice(0, 3);
	    while (fraction.length < 3) { // milli-seconds
	      fraction += '0';
	    }
	    fraction = +fraction;
	  }
	
	  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute
	
	  if (match[9]) {
	    tz_hour = +(match[10]);
	    tz_minute = +(match[11] || 0);
	    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
	    if (match[9] === '-') delta = -delta;
	  }
	
	  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
	
	  if (delta) date.setTime(date.getTime() - delta);
	
	  return date;
	}
	
	function representYamlTimestamp(object /*, style*/) {
	  return object.toISOString();
	}
	
	module.exports = new Type('tag:yaml.org,2002:timestamp', {
	  kind: 'scalar',
	  resolve: resolveYamlTimestamp,
	  construct: constructYamlTimestamp,
	  instanceOf: Date,
	  represent: representYamlTimestamp
	});


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(68);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(30),
	    getPrototype = __webpack_require__(58),
	    isObjectLike = __webpack_require__(17);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/markedjs/marked
	 */
	
	;(function(root) {
	'use strict';
	
	/**
	 * Block-Level Grammar
	 */
	
	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
	  table: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
	  text: /^[^\n]+/
	};
	
	block._label = /(?:\\[\[\]]|[^\[\]])+/;
	block._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
	block.def = edit(block.def)
	  .replace('label', block._label)
	  .replace('title', block._title)
	  .getRegex();
	
	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = edit(block.item, 'gm')
	  .replace(/bull/g, block.bullet)
	  .getRegex();
	
	block.list = edit(block.list)
	  .replace(/bull/g, block.bullet)
	  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
	  .replace('def', '\\n+(?=' + block.def.source + ')')
	  .getRegex();
	
	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';
	
	block.html = edit(block.html)
	  .replace('comment', /<!--[\s\S]*?-->/)
	  .replace('closed', /<(tag)[\s\S]+?<\/\1>/)
	  .replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
	  .replace(/tag/g, block._tag)
	  .getRegex();
	
	block.paragraph = edit(block.paragraph)
	  .replace('hr', block.hr)
	  .replace('heading', block.heading)
	  .replace('lheading', block.lheading)
	  .replace('tag', '<' + block._tag)
	  .getRegex();
	
	block.blockquote = edit(block.blockquote)
	  .replace('paragraph', block.paragraph)
	  .getRegex();
	
	/**
	 * Normal Block Grammar
	 */
	
	block.normal = merge({}, block);
	
	/**
	 * GFM Block Grammar
	 */
	
	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});
	
	block.gfm.paragraph = edit(block.paragraph)
	  .replace('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  .getRegex();
	
	/**
	 * GFM + Tables Block Grammar
	 */
	
	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});
	
	/**
	 * Block Lexer
	 */
	
	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;
	
	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}
	
	/**
	 * Expose Block Rules
	 */
	
	Lexer.rules = block;
	
	/**
	 * Static Lex Method
	 */
	
	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};
	
	/**
	 * Preprocessing
	 */
	
	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');
	
	  return this.token(src, true);
	};
	
	/**
	 * Lexing
	 */
	
	Lexer.prototype.token = function(src, top) {
	  src = src.replace(/^ +$/gm, '');
	  var next,
	      loose,
	      cap,
	      bull,
	      b,
	      item,
	      space,
	      i,
	      tag,
	      l,
	      isordered;
	
	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }
	
	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }
	
	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }
	
	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }
	
	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);
	
	      this.tokens.push({
	        type: 'blockquote_start'
	      });
	
	      cap = cap[0].replace(/^ *> ?/gm, '');
	
	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top);
	
	      this.tokens.push({
	        type: 'blockquote_end'
	      });
	
	      continue;
	    }
	
	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];
	      isordered = bull.length > 1;
	
	      this.tokens.push({
	        type: 'list_start',
	        ordered: isordered,
	        start: isordered ? +bull : ''
	      });
	
	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);
	
	      next = false;
	      l = cap.length;
	      i = 0;
	
	      for (; i < l; i++) {
	        item = cap[i];
	
	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	
	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }
	
	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }
	
	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }
	
	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });
	
	        // Recurse.
	        this.token(item, false);
	
	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }
	
	      this.tokens.push({
	        type: 'list_end'
	      });
	
	      continue;
	    }
	
	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }
	
	    // def
	    if (top && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
	      tag = cap[1].toLowerCase();
	      if (!this.tokens.links[tag]) {
	        this.tokens.links[tag] = {
	          href: cap[2],
	          title: cap[3]
	        };
	      }
	      continue;
	    }
	
	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }
	
	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }
	
	    if (src) {
	      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return this.tokens;
	};
	
	/**
	 * Inline-Level Grammar
	 */
	
	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
	};
	
	inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
	inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
	
	inline.autolink = edit(inline.autolink)
	  .replace('scheme', inline._scheme)
	  .replace('email', inline._email)
	  .getRegex()
	
	inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	
	inline.link = edit(inline.link)
	  .replace('inside', inline._inside)
	  .replace('href', inline._href)
	  .getRegex();
	
	inline.reflink = edit(inline.reflink)
	  .replace('inside', inline._inside)
	  .getRegex();
	
	/**
	 * Normal Inline Grammar
	 */
	
	inline.normal = merge({}, inline);
	
	/**
	 * Pedantic Inline Grammar
	 */
	
	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});
	
	/**
	 * GFM Inline Grammar
	 */
	
	inline.gfm = merge({}, inline.normal, {
	  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
	  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
	    .replace('email', inline._email)
	    .getRegex(),
	  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: edit(inline.text)
	    .replace(']|', '~]|')
	    .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
	    .getRegex()
	});
	
	/**
	 * GFM + Line Breaks Inline Grammar
	 */
	
	inline.breaks = merge({}, inline.gfm, {
	  br: edit(inline.br).replace('{2,}', '*').getRegex(),
	  text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
	});
	
	/**
	 * Inline Lexer & Compiler
	 */
	
	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer();
	  this.renderer.options = this.options;
	
	  if (!this.links) {
	    throw new Error('Tokens array requires a `links` property.');
	  }
	
	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}
	
	/**
	 * Expose Inline Rules
	 */
	
	InlineLexer.rules = inline;
	
	/**
	 * Static Lexing/Compiling Method
	 */
	
	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};
	
	/**
	 * Lexing/Compiling
	 */
	
	InlineLexer.prototype.output = function(src) {
	  var out = '',
	      link,
	      text,
	      href,
	      cap;
	
	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }
	
	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = escape(this.mangle(cap[1]));
	        href = 'mailto:' + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      cap[0] = this.rules._backpedal.exec(cap[0])[0];
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = escape(cap[0]);
	        href = 'mailto:' + text;
	      } else {
	        text = escape(cap[0]);
	        if (cap[1] === 'www.') {
	          href = 'http://' + text;
	        } else {
	          href = text;
	        }
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }
	
	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }
	
	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }
	
	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2].trim(), true));
	      continue;
	    }
	
	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }
	
	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }
	
	    if (src) {
	      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return out;
	};
	
	/**
	 * Compile Link
	 */
	
	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href),
	      title = link.title ? escape(link.title) : null;
	
	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};
	
	/**
	 * Smartypants Transformations
	 */
	
	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};
	
	/**
	 * Mangle Links
	 */
	
	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = '',
	      l = text.length,
	      i = 0,
	      ch;
	
	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }
	
	  return out;
	};
	
	/**
	 * Renderer
	 */
	
	function Renderer(options) {
	  this.options = options || {};
	}
	
	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }
	
	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }
	
	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};
	
	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};
	
	Renderer.prototype.html = function(html) {
	  return html;
	};
	
	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};
	
	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};
	
	Renderer.prototype.list = function(body, ordered, start) {
	  var type = ordered ? 'ol' : 'ul',
	      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
	  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
	};
	
	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};
	
	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};
	
	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};
	
	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};
	
	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};
	
	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};
	
	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};
	
	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};
	
	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};
	
	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};
	
	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return text;
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
	      return text;
	    }
	  }
	  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	    href = resolveUrl(this.options.baseUrl, href);
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};
	
	Renderer.prototype.image = function(href, title, text) {
	  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
	    href = resolveUrl(this.options.baseUrl, href);
	  }
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};
	
	Renderer.prototype.text = function(text) {
	  return text;
	};
	
	/**
	 * TextRenderer
	 * returns only the textual part of the token
	 */
	
	function TextRenderer() {}
	
	// no need for block level renderers
	
	TextRenderer.prototype.strong =
	TextRenderer.prototype.em =
	TextRenderer.prototype.codespan =
	TextRenderer.prototype.del =
	TextRenderer.prototype.text = function (text) {
	  return text;
	}
	
	TextRenderer.prototype.link =
	TextRenderer.prototype.image = function(href, title, text) {
	  return '' + text;
	}
	
	TextRenderer.prototype.br = function() {
	  return '';
	}
	
	/**
	 * Parsing & Compiling
	 */
	
	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer();
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}
	
	/**
	 * Static Parse Method
	 */
	
	Parser.parse = function(src, options) {
	  var parser = new Parser(options);
	  return parser.parse(src);
	};
	
	/**
	 * Parse Loop
	 */
	
	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options);
	  // use an InlineLexer with a TextRenderer to extract pure text
	  this.inlineText = new InlineLexer(
	    src.links,
	    merge({}, this.options, {renderer: new TextRenderer()})
	  );
	  this.tokens = src.reverse();
	
	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }
	
	  return out;
	};
	
	/**
	 * Next Token
	 */
	
	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};
	
	/**
	 * Preview Next Token
	 */
	
	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};
	
	/**
	 * Parse Text Tokens
	 */
	
	Parser.prototype.parseText = function() {
	  var body = this.token.text;
	
	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }
	
	  return this.inline.output(body);
	};
	
	/**
	 * Parse Current Token
	 */
	
	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        unescape(this.inlineText.output(this.token.text)));
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = '',
	          body = '',
	          i,
	          row,
	          cell,
	          j;
	
	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);
	
	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];
	
	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }
	
	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      body = '';
	
	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      body = '';
	      var ordered = this.token.ordered,
	          start = this.token.start;
	
	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.list(body, ordered, start);
	    }
	    case 'list_item_start': {
	      body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};
	
	/**
	 * Helpers
	 */
	
	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}
	
	function unescape(html) {
	  // explicitly match decimal, hex, and named HTML entities
	  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}
	
	function edit(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return {
	    replace: function(name, val) {
	      val = val.source || val;
	      val = val.replace(/(^|[^\[])\^/g, '$1');
	      regex = regex.replace(name, val);
	      return this;
	    },
	    getRegex: function() {
	      return new RegExp(regex, opt);
	    }
	  };
	}
	
	function resolveUrl(base, href) {
	  if (!baseUrls[' ' + base]) {
	    // we can ignore everything in base after the last slash of its path component,
	    // but we might need to add _that_
	    // https://tools.ietf.org/html/rfc3986#section-3
	    if (/^[^:]+:\/*[^/]*$/.test(base)) {
	      baseUrls[' ' + base] = base + '/';
	    } else {
	      baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
	    }
	  }
	  base = baseUrls[' ' + base];
	
	  if (href.slice(0, 2) === '//') {
	    return base.replace(/:[\s\S]*/, ':') + href;
	  } else if (href.charAt(0) === '/') {
	    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
	  } else {
	    return base + href;
	  }
	}
	var baseUrls = {};
	var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
	
	function noop() {}
	noop.exec = noop;
	
	function merge(obj) {
	  var i = 1,
	      target,
	      key;
	
	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Marked
	 */
	
	function marked(src, opt, callback) {
	  // throw error in case of non string input
	  if (typeof src === 'undefined' || src === null) {
	    throw new Error('marked(): input parameter is undefined or null');
	  }
	  if (typeof src !== 'string') {
	    throw new Error('marked(): input parameter is of type '
	      + Object.prototype.toString.call(src) + ', string expected');
	  }
	
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }
	
	    opt = merge({}, marked.defaults, opt || {});
	
	    var highlight = opt.highlight,
	        tokens,
	        pending,
	        i = 0;
	
	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }
	
	    pending = tokens.length;
	
	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }
	
	      var out;
	
	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }
	
	      opt.highlight = highlight;
	
	      return err
	        ? callback(err)
	        : callback(null, out);
	    };
	
	    if (!highlight || highlight.length < 3) {
	      return done();
	    }
	
	    delete opt.highlight;
	
	    if (!pending) return done();
	
	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }
	
	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occurred:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}
	
	/**
	 * Options
	 */
	
	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};
	
	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer(),
	  xhtml: false,
	  baseUrl: null
	};
	
	/**
	 * Expose
	 */
	
	marked.Parser = Parser;
	marked.parser = Parser.parse;
	
	marked.Renderer = Renderer;
	marked.TextRenderer = TextRenderer;
	
	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;
	
	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;
	
	marked.parse = marked;
	
	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  root.marked = marked;
	}
	})(this || (typeof window !== 'undefined' ? window : global));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

	// This file replaces `format.js` in bundlers like webpack or Rollup,
	// according to `browser` config in `package.json`.
	
	module.exports = function (random, alphabet, size) {
	  // We can’t use bytes bigger than the alphabet. To make bytes values closer
	  // to the alphabet, we apply bitmask on them. We look for the closest
	  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
	  // 30 symbols in the alphabet, we will take 31 (00011111).
	  // We do not use faster Math.clz32, because it is not available in browsers.
	  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
	  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
	  // which is bigger than the alphabet). As a result, we will need more bytes,
	  // than ID size, because we will refuse bytes bigger than the alphabet.
	
	  // Every hardware random generator call is costly,
	  // because we need to wait for entropy collection. This is why often it will
	  // be faster to ask for few extra bytes in advance, to avoid additional calls.
	
	  // Here we calculate how many random bytes should we call in advance.
	  // It depends on ID length, mask / alphabet size and magic number 1.6
	  // (which was selected according benchmarks).
	
	  // -~f => Math.ceil(f) if n is float number
	  // -~i => i + 1 if n is integer number
	  var step = -~(1.6 * mask * size / alphabet.length)
	  var id = ''
	
	  while (true) {
	    var bytes = random(step)
	    // Compact alternative for `for (var i = 0; i < step; i++)`
	    var i = step
	    while (i--) {
	      // If random byte is bigger than alphabet even after bitmask,
	      // we refuse it by `|| ''`.
	      id += alphabet[bytes[i] & mask] || ''
	      // More compact than `id.length + 1 === size`
	      if (id.length === +size) return id
	    }
	  }
	}


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _templateObject = _taggedTemplateLiteral(['\n  list-style: none;\n  padding: 5px;\n  margin: 0;\n  font-size: 0.75em;\n'], ['\n  list-style: none;\n  padding: 5px;\n  margin: 0;\n  font-size: 0.75em;\n']),
	    _templateObject2 = _taggedTemplateLiteral([''], ['']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  margin-left: 5px;\n'], ['\n  margin-left: 5px;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var UL = _styledComponents2.default.ul(_templateObject);
	
	var COMMAND = _styledComponents2.default.li(_templateObject2);
	
	var PARAMETER = _styledComponents2.default.li(_templateObject3);
	
	var Buildup = function (_Component) {
	  _inherits(Buildup, _Component);
	
	  function Buildup() {
	    _classCallCheck(this, Buildup);
	
	    return _possibleConstructorReturn(this, (Buildup.__proto__ || Object.getPrototypeOf(Buildup)).apply(this, arguments));
	  }
	
	  _createClass(Buildup, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        UL,
	        null,
	        this.props.enteredCommands.map(function (_ref) {
	          var phase = _ref.phase,
	              copy = _ref.copy;
	          return phase === 'command' ? _react2.default.createElement(
	            COMMAND,
	            { key: copy },
	            copy
	          ) : _react2.default.createElement(
	            PARAMETER,
	            { key: copy },
	            copy
	          );
	        })
	      );
	    }
	  }]);
	
	  return Buildup;
	}(_react.Component);
	
	exports.default = Buildup;

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactModal = __webpack_require__(847);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	var _regeneratorRuntime = __webpack_require__(868);
	
	var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);
	
	var _SimplePrompt = __webpack_require__(834);
	
	var _SimplePrompt2 = _interopRequireDefault(_SimplePrompt);
	
	var _FuzzyAutocomplete = __webpack_require__(833);
	
	var _FuzzyAutocomplete2 = _interopRequireDefault(_FuzzyAutocomplete);
	
	var _StyledDiv = __webpack_require__(835);
	
	var _StyledDiv2 = _interopRequireDefault(_StyledDiv);
	
	var _Buildup = __webpack_require__(831);
	
	var _Buildup2 = _interopRequireDefault(_Buildup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// 🔮 might not want to rely on a modal
	
	
	var Commander = function (_Component) {
	  _inherits(Commander, _Component);
	
	  function Commander(props) {
	    _classCallCheck(this, Commander);
	
	    var _this = _possibleConstructorReturn(this, (Commander.__proto__ || Object.getPrototypeOf(Commander)).call(this, props));
	
	    _this.state = {
	      phase: 'command',
	      parameter: {},
	      parameterItems: {},
	      enteredCommands: []
	    };
	
	    _this.selectParameterItem = function (item) {
	      _this.enterParameter(_this.state.parameter.itemReturnKey ? item[_this.state.parameter.itemReturnKey] : item);
	    };
	
	    _this.enterParameter = function (val) {
	      _this.setState({
	        enteredCommands: [].concat(_toConsumableArray(_this.state.enteredCommands), [{
	          phase: _this.state.phase,
	          copy: (_this.state.parameter.placeholder ? _this.state.parameter.placeholder : _this.state.parameter.key) + ': ' + val
	        }])
	      });
	      _this.runner.next(val);
	    };
	
	    _this.reset = function () {
	      _this.props.hideCommander();
	      _this.setState({ phase: 'command', parameter: {}, enteredCommands: [] });
	    };
	
	    _this.enterCommand = _this.enterCommand.bind(_this);
	    return _this;
	  }
	
	  _createClass(Commander, [{
	    key: 'parameterRunner',
	    value: /*#__PURE__*/_regeneratorRuntime2.default.mark(function parameterRunner(commandItem) {
	      var loadedItem, i, parameterItems;
	      return _regeneratorRuntime2.default.wrap(function parameterRunner$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              /** 💁 loaded as in loaded up, bogged down, made heavy */
	              loadedItem = _extends({}, commandItem);
	              i = 0;
	
	            case 2:
	              if (!(i < commandItem.parameters.length)) {
	                _context.next = 19;
	                break;
	              }
	
	              // mehhhhh
	              parameterItems = commandItem.parameters[i].selector ? this.props.getItems(commandItem.parameters[i].selector) : null;
	
	              this.setState({ parameter: commandItem.parameters[i], parameterItems: parameterItems });
	
	              _context.t0 = _extends;
	              _context.t1 = {};
	              _context.t2 = loadedItem;
	              _context.t3 = _defineProperty;
	              _context.t4 = {};
	              _context.t5 = commandItem.parameters[i].key;
	              _context.next = 13;
	              return commandItem.parameters[i];
	
	            case 13:
	              _context.t6 = _context.sent;
	              _context.t7 = (0, _context.t3)(_context.t4, _context.t5, _context.t6);
	              loadedItem = (0, _context.t0)(_context.t1, _context.t2, _context.t7);
	
	            case 16:
	              i++;
	              _context.next = 2;
	              break;
	
	            case 19:
	
	              this.reset();
	              this.props.onSubmit(loadedItem);
	
	            case 21:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, parameterRunner, this);
	    })
	  }, {
	    key: 'enterCommand',
	    value: function enterCommand(commandItem) {
	      if (commandItem.parameters) {
	        this.setState({ phase: 'parameters' });
	
	        this.setState({
	          enteredCommands: [].concat(_toConsumableArray(this.state.enteredCommands), [{ phase: this.state.phase, copy: commandItem.copy }])
	        });
	
	        this.runner = this.parameterRunner(commandItem);
	        this.runner.next();
	      } else {
	        this.reset();
	        this.props.onSubmit(commandItem);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactModal2.default,
	        {
	          appElement: this.props.appElement,
	          style: {
	            overlay: { zIndex: 20 },
	            content: {
	              padding: 0,
	              border: 'none',
	              borderRadius: 0,
	              background: 'none',
	              overflow: 'unset',
	              right: 'unset',
	              bottom: 'unset',
	              position: 'unset'
	            }
	          },
	          isOpen: this.props.isOpen,
	          onRequestClose: this.reset,
	          onAfterOpen: this.onAfterOpen
	        },
	        _react2.default.createElement(
	          _StyledDiv2.default,
	          null,
	          this.props.withBuildup && this.state.enteredCommands.length > 0 && _react2.default.createElement(_Buildup2.default, { enteredCommands: this.state.enteredCommands }),
	          this.state.phase === 'command' ? _react2.default.createElement(_FuzzyAutocomplete2.default, {
	            itemStringKey: 'copy',
	            onChange: this.enterCommand,
	            placeholder: this.props.placeholder,
	            items: this.props.commands
	          }) : this.state.parameter.selector ? _react2.default.createElement(_FuzzyAutocomplete2.default, {
	            itemStringKey: this.state.parameter.itemStringKey,
	            items: this.state.parameterItems,
	            onChange: this.selectParameterItem,
	            placeholder: this.state.parameter.placeholder ? this.state.parameter.placeholder : this.state.parameter.key
	          }) : _react2.default.createElement(_SimplePrompt2.default, {
	            placeholder: this.state.parameter.placeholder ? this.state.parameter.placeholder : this.state.parameter.key,
	            initialValue: '',
	            onSubmit: this.enterParameter
	          })
	        )
	      );
	    }
	  }]);
	
	  return Commander;
	}(_react.Component);
	
	Commander.propTypes = {
	  commands: _propTypes2.default.arrayOf(_propTypes2.default.shape({
	    action: _propTypes2.default.string,
	    copy: _propTypes2.default.string
	  })),
	  onSubmit: _propTypes2.default.func.isRequired,
	  placeholder: _propTypes2.default.string
	};
	
	Commander.defaultProps = {
	  commands: null,
	  placeholder: 'Type ? to see available commands'
	};
	
	exports.default = Commander;
	
	// export default connect(null, dispatch => ({
	//   dispatchAction: type => dispatch({ type }),
	// }))(Commander);

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _templateObject = _taggedTemplateLiteral(['\n  .commander-result {\n    padding: 5px;\n    display: flex;\n\n    &:first-child {\n      border-top: 1px solid #ccc;\n    }\n  }\n\n  .commander-result-item {\n    flex: auto;\n  }\n'], ['\n  .commander-result {\n    padding: 5px;\n    display: flex;\n\n    &:first-child {\n      border-top: 1px solid #ccc;\n    }\n  }\n\n  .commander-result-item {\n    flex: auto;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _fuzzaldrinPlus = __webpack_require__(472);
	
	var _fuzzaldrinPlus2 = _interopRequireDefault(_fuzzaldrinPlus);
	
	var _downshift = __webpack_require__(467);
	
	var _downshift2 = _interopRequireDefault(_downshift);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var StyledResults = _styledComponents2.default.div(_templateObject);
	var FuzzyAutocomplete = function FuzzyAutocomplete(_ref) {
	  var _onChange = _ref.onChange,
	      placeholder = _ref.placeholder,
	      items = _ref.items,
	      itemStringKey = _ref.itemStringKey,
	      _ref$itemReturnKey = _ref.itemReturnKey,
	      itemReturnKey = _ref$itemReturnKey === undefined ? null : _ref$itemReturnKey,
	      onInputChange = _ref.onInputChange;
	
	  return _react2.default.createElement(
	    _downshift2.default
	    // defaultIsOpen={true}
	    ,
	    { isOpen: true,
	      onChange: function onChange(item) {
	        _onChange(item);
	      },
	      defaultInputValue: '',
	      selectedItem: '',
	      defaultHighlightedIndex: 0,
	      itemToString: function itemToString(i) {
	        return i ? i[itemStringKey] : '';
	      },
	      breakingChanges: { resetInputOnSelection: true }
	    },
	    function (_ref2) {
	      var getInputProps = _ref2.getInputProps,
	          getItemProps = _ref2.getItemProps,
	          getLabelProps = _ref2.getLabelProps,
	          highlightedIndex = _ref2.highlightedIndex,
	          inputValue = _ref2.inputValue,
	          isOpen = _ref2.isOpen,
	          selectedItem = _ref2.selectedItem;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('label', getLabelProps()),
	        _react2.default.createElement('input', _extends({
	          autoFocus: true
	        }, getInputProps({
	          placeholder: placeholder
	        }))),
	        _react2.default.createElement(
	          StyledResults,
	          null,
	          (!inputValue || inputValue.length === 0 ? items : _fuzzaldrinPlus2.default.filter(items, inputValue, {
	            key: itemStringKey
	          })).map(function (item, index) {
	            return _react2.default.createElement(
	              'div',
	              _extends({
	                className: 'commander-result'
	              }, getItemProps({
	                key: itemStringKey ? item[itemStringKey] : item,
	                index: index,
	                item: item,
	                style: {
	                  backgroundColor: highlightedIndex === index ? '#f5f5f5' : 'white'
	                }
	              })),
	              _react2.default.createElement(
	                'div',
	                { className: 'commander-result-item' },
	                item.label && _react2.default.createElement(
	                  'span',
	                  {
	                    className: 'item-label',
	                    style: {
	                      background: item.label.background,
	                      color: 'white',
	                      padding: '1px 3px',
	                      borderRadius: '2px',
	                      marginRight: '5px'
	                    }
	                  },
	                  item.label.copy
	                ),
	                inputValue.length === 0 ? _react2.default.createElement(
	                  'span',
	                  null,
	                  item[itemStringKey]
	                ) : _react2.default.createElement('span', {
	                  dangerouslySetInnerHTML: {
	                    __html: _fuzzaldrinPlus2.default.wrap(item[itemStringKey], inputValue)
	                  }
	                })
	              ),
	              item.shortcut && _react2.default.createElement(
	                'div',
	                { className: 'item-shortcut' },
	                _react2.default.createElement(
	                  'span',
	                  {
	                    className: 'item-shortcut',
	                    style: {
	                      textAlign: 'right',
	                      color: 'steelblue'
	                    }
	                  },
	                  item.shortcut
	                )
	              )
	            );
	          })
	        )
	      );
	    }
	  );
	};
	
	exports.default = FuzzyAutocomplete;

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SimplePrompt = function (_React$Component) {
	  _inherits(SimplePrompt, _React$Component);
	
	  function SimplePrompt(props) {
	    _classCallCheck(this, SimplePrompt);
	
	    var _this = _possibleConstructorReturn(this, (SimplePrompt.__proto__ || Object.getPrototypeOf(SimplePrompt)).call(this, props));
	
	    _this.handleChange = function (event) {
	      _this.setState({ value: event.target.value });
	    };
	
	    _this.maybeSubmit = function (event) {
	      if (event.key === 'Enter') {
	        _this.setState({ value: '' });
	        _this.props.onSubmit(event.target.value);
	      }
	    };
	
	    _this.state = { value: props.initialValue };
	    return _this;
	  }
	
	  _createClass(SimplePrompt, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', {
	        autoFocus: true,
	        type: 'text',
	        value: this.state.value,
	        onChange: this.handleChange,
	        onKeyDown: this.maybeSubmit,
	        placeholder: this.props.placeholder
	      });
	    }
	  }]);
	
	  return SimplePrompt;
	}(_react2.default.Component);
	
	SimplePrompt.propTypes = {
	  onSubmit: _propTypes2.default.func.isRequired,
	  placeholder: _propTypes2.default.string.isRequired,
	  initialValue: _propTypes2.default.string
	};
	
	SimplePrompt.defaultProps = {
	  initialValue: ''
	};
	
	exports.default = SimplePrompt;

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['\n  width: 400px;\n  margin: 0 auto;\n  background: white;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.2),\n    0 2px 6px rgba(0, 0, 0, 0.1);\n  font-size: small;\n  border: 1px solid #ddd;\n\n  input {\n    width: 100%;\n    padding: 5px;\n    font-size: 1em;\n    border: none;\n\n    &:focus {\n      outline: none;\n    }\n\n    &::placeholder {\n      color: #bababa;\n    }\n  }\n'], ['\n  width: 400px;\n  margin: 0 auto;\n  background: white;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.2),\n    0 2px 6px rgba(0, 0, 0, 0.1);\n  font-size: small;\n  border: 1px solid #ddd;\n\n  input {\n    width: 100%;\n    padding: 5px;\n    font-size: 1em;\n    border: none;\n\n    &:focus {\n      outline: none;\n    }\n\n    &::placeholder {\n      color: #bababa;\n    }\n  }\n']);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var StyledDiv = _styledComponents2.default.div(_templateObject);
	
	exports.default = StyledDiv;

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Commander = __webpack_require__(832);
	
	var _Commander2 = _interopRequireDefault(_Commander);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Commander2.default;

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
	exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
	exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(97);
	} else {
	  module.exports = require('./cjs/react-is.development.js');
	}


/***/ }),

/***/ 840:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}
	
	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}
	
	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}
	
	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;
	
	function polyfill(Component) {
	  var prototype = Component.prototype;
	
	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }
	
	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }
	
	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';
	
	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }
	
	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }
	
	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }
	
	    prototype.componentWillUpdate = componentWillUpdate;
	
	    var componentDidUpdate = prototype.componentDidUpdate;
	
	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;
	
	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }
	
	  return Component;
	}
	
	exports.polyfill = polyfill;


/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bodyOpenClassName = exports.portalClassName = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(256);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ModalPortal = __webpack_require__(842);
	
	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
	
	var _ariaAppHider = __webpack_require__(346);
	
	var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
	
	var _safeHTMLElement = __webpack_require__(257);
	
	var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
	
	var _reactLifecyclesCompat = __webpack_require__(840);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var portalClassName = exports.portalClassName = "ReactModalPortal";
	var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
	
	var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;
	
	var createHTMLElement = function createHTMLElement(name) {
	  return document.createElement(name);
	};
	
	var getCreatePortal = function getCreatePortal() {
	  return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
	};
	
	function getParentElement(parentSelector) {
	  return parentSelector();
	}
	
	var Modal = function (_Component) {
	  _inherits(Modal, _Component);
	
	  function Modal() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Modal);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
	      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
	      var parent = getParentElement(_this.props.parentSelector);
	      if (parent && parent.contains(_this.node)) {
	        parent.removeChild(_this.node);
	      } else {
	        // eslint-disable-next-line no-console
	        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
	      }
	    }, _this.portalRef = function (ref) {
	      _this.portal = ref;
	    }, _this.renderPortal = function (props) {
	      var createPortal = getCreatePortal();
	      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
	      _this.portalRef(portal);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Modal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (!_safeHTMLElement.canUseDOM) return;
	
	      if (!isReact16) {
	        this.node = createHTMLElement("div");
	      }
	      this.node.className = this.props.portalClassName;
	
	      var parent = getParentElement(this.props.parentSelector);
	      parent.appendChild(this.node);
	
	      !isReact16 && this.renderPortal(this.props);
	    }
	  }, {
	    key: "getSnapshotBeforeUpdate",
	    value: function getSnapshotBeforeUpdate(prevProps) {
	      var prevParent = getParentElement(prevProps.parentSelector);
	      var nextParent = getParentElement(this.props.parentSelector);
	      return { prevParent: prevParent, nextParent: nextParent };
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, _, snapshot) {
	      if (!_safeHTMLElement.canUseDOM) return;
	      var _props = this.props,
	          isOpen = _props.isOpen,
	          portalClassName = _props.portalClassName;
	
	
	      if (prevProps.portalClassName !== portalClassName) {
	        this.node.className = portalClassName;
	      }
	
	      var prevParent = snapshot.prevParent,
	          nextParent = snapshot.nextParent;
	
	      if (nextParent !== prevParent) {
	        prevParent.removeChild(this.node);
	        nextParent.appendChild(this.node);
	      }
	
	      // Stop unnecessary renders if modal is remaining closed
	      if (!prevProps.isOpen && !isOpen) return;
	
	      !isReact16 && this.renderPortal(this.props);
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;
	
	      var state = this.portal.state;
	      var now = Date.now();
	      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
	
	      if (closesAt) {
	        if (!state.beforeClose) {
	          this.portal.closeWithTimeout();
	        }
	
	        setTimeout(this.removePortal, closesAt - now);
	      } else {
	        this.removePortal();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (!_safeHTMLElement.canUseDOM || !isReact16) {
	        return null;
	      }
	
	      if (!this.node && isReact16) {
	        this.node = createHTMLElement("div");
	      }
	
	      var createPortal = getCreatePortal();
	      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
	        ref: this.portalRef,
	        defaultStyles: Modal.defaultStyles
	      }, this.props)), this.node);
	    }
	  }], [{
	    key: "setAppElement",
	    value: function setAppElement(element) {
	      ariaAppHider.setElement(element);
	    }
	
	    /* eslint-disable react/no-unused-prop-types */
	
	    /* eslint-enable react/no-unused-prop-types */
	
	  }]);
	
	  return Modal;
	}(_react.Component);
	
	Modal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  portalClassName: _propTypes2.default.string,
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    base: _propTypes2.default.string.isRequired,
	    afterOpen: _propTypes2.default.string.isRequired,
	    beforeClose: _propTypes2.default.string.isRequired
	  })]),
	  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
	  onAfterOpen: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  ariaHideApp: _propTypes2.default.bool,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  preventScroll: _propTypes2.default.bool,
	  parentSelector: _propTypes2.default.func,
	  aria: _propTypes2.default.object,
	  data: _propTypes2.default.object,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func,
	  id: _propTypes2.default.string,
	  overlayElement: _propTypes2.default.func,
	  contentElement: _propTypes2.default.func
	};
	Modal.defaultProps = {
	  isOpen: false,
	  portalClassName: portalClassName,
	  bodyOpenClassName: bodyOpenClassName,
	  role: "dialog",
	  ariaHideApp: true,
	  closeTimeoutMS: 0,
	  shouldFocusAfterRender: true,
	  shouldCloseOnEsc: true,
	  shouldCloseOnOverlayClick: true,
	  shouldReturnFocusAfterClose: true,
	  preventScroll: false,
	  parentSelector: function parentSelector() {
	    return document.body;
	  },
	  overlayElement: function overlayElement(props, contentEl) {
	    return _react2.default.createElement(
	      "div",
	      props,
	      contentEl
	    );
	  },
	  contentElement: function contentElement(props, children) {
	    return _react2.default.createElement(
	      "div",
	      props,
	      children
	    );
	  }
	};
	Modal.defaultStyles = {
	  overlay: {
	    position: "fixed",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    backgroundColor: "rgba(255, 255, 255, 0.75)"
	  },
	  content: {
	    position: "absolute",
	    top: "40px",
	    left: "40px",
	    right: "40px",
	    bottom: "40px",
	    border: "1px solid #ccc",
	    background: "#fff",
	    overflow: "auto",
	    WebkitOverflowScrolling: "touch",
	    borderRadius: "4px",
	    outline: "none",
	    padding: "20px"
	  }
	};
	
	
	(0, _reactLifecyclesCompat.polyfill)(Modal);
	
	if (false) {
	  Modal.setCreateHTMLElement = function (fn) {
	    return createHTMLElement = fn;
	  };
	}
	
	exports.default = Modal;

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _focusManager = __webpack_require__(845);
	
	var focusManager = _interopRequireWildcard(_focusManager);
	
	var _scopeTab = __webpack_require__(846);
	
	var _scopeTab2 = _interopRequireDefault(_scopeTab);
	
	var _ariaAppHider = __webpack_require__(346);
	
	var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
	
	var _classList = __webpack_require__(844);
	
	var classList = _interopRequireWildcard(_classList);
	
	var _safeHTMLElement = __webpack_require__(257);
	
	var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
	
	var _portalOpenInstances = __webpack_require__(347);
	
	var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
	
	__webpack_require__(843);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: "ReactModal__Overlay",
	  content: "ReactModal__Content"
	};
	
	var TAB_KEY = 9;
	var ESC_KEY = 27;
	
	var ariaHiddenInstances = 0;
	
	var ModalPortal = function (_Component) {
	  _inherits(ModalPortal, _Component);
	
	  function ModalPortal(props) {
	    _classCallCheck(this, ModalPortal);
	
	    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));
	
	    _this.setOverlayRef = function (overlay) {
	      _this.overlay = overlay;
	      _this.props.overlayRef && _this.props.overlayRef(overlay);
	    };
	
	    _this.setContentRef = function (content) {
	      _this.content = content;
	      _this.props.contentRef && _this.props.contentRef(content);
	    };
	
	    _this.afterClose = function () {
	      var _this$props = _this.props,
	          appElement = _this$props.appElement,
	          ariaHideApp = _this$props.ariaHideApp,
	          htmlOpenClassName = _this$props.htmlOpenClassName,
	          bodyOpenClassName = _this$props.bodyOpenClassName;
	
	      // Remove classes.
	
	      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);
	
	      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);
	
	      // Reset aria-hidden attribute if all modals have been removed
	      if (ariaHideApp && ariaHiddenInstances > 0) {
	        ariaHiddenInstances -= 1;
	
	        if (ariaHiddenInstances === 0) {
	          ariaAppHider.show(appElement);
	        }
	      }
	
	      if (_this.props.shouldFocusAfterRender) {
	        if (_this.props.shouldReturnFocusAfterClose) {
	          focusManager.returnFocus(_this.props.preventScroll);
	          focusManager.teardownScopedFocus();
	        } else {
	          focusManager.popWithoutFocus();
	        }
	      }
	
	      if (_this.props.onAfterClose) {
	        _this.props.onAfterClose();
	      }
	
	      _portalOpenInstances2.default.deregister(_this);
	    };
	
	    _this.open = function () {
	      _this.beforeOpen();
	      if (_this.state.afterOpen && _this.state.beforeClose) {
	        clearTimeout(_this.closeTimer);
	        _this.setState({ beforeClose: false });
	      } else {
	        if (_this.props.shouldFocusAfterRender) {
	          focusManager.setupScopedFocus(_this.node);
	          focusManager.markForFocusLater();
	        }
	
	        _this.setState({ isOpen: true }, function () {
	          _this.openAnimationFrame = requestAnimationFrame(function () {
	            _this.setState({ afterOpen: true });
	
	            if (_this.props.isOpen && _this.props.onAfterOpen) {
	              _this.props.onAfterOpen({
	                overlayEl: _this.overlay,
	                contentEl: _this.content
	              });
	            }
	          });
	        });
	      }
	    };
	
	    _this.close = function () {
	      if (_this.props.closeTimeoutMS > 0) {
	        _this.closeWithTimeout();
	      } else {
	        _this.closeWithoutTimeout();
	      }
	    };
	
	    _this.focusContent = function () {
	      return _this.content && !_this.contentHasFocus() && _this.content.focus({ preventScroll: true });
	    };
	
	    _this.closeWithTimeout = function () {
	      var closesAt = Date.now() + _this.props.closeTimeoutMS;
	      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
	        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
	      });
	    };
	
	    _this.closeWithoutTimeout = function () {
	      _this.setState({
	        beforeClose: false,
	        isOpen: false,
	        afterOpen: false,
	        closesAt: null
	      }, _this.afterClose);
	    };
	
	    _this.handleKeyDown = function (event) {
	      if (event.keyCode === TAB_KEY) {
	        (0, _scopeTab2.default)(_this.content, event);
	      }
	
	      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
	        event.stopPropagation();
	        _this.requestClose(event);
	      }
	    };
	
	    _this.handleOverlayOnClick = function (event) {
	      if (_this.shouldClose === null) {
	        _this.shouldClose = true;
	      }
	
	      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
	        if (_this.ownerHandlesClose()) {
	          _this.requestClose(event);
	        } else {
	          _this.focusContent();
	        }
	      }
	      _this.shouldClose = null;
	    };
	
	    _this.handleContentOnMouseUp = function () {
	      _this.shouldClose = false;
	    };
	
	    _this.handleOverlayOnMouseDown = function (event) {
	      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
	        event.preventDefault();
	      }
	    };
	
	    _this.handleContentOnClick = function () {
	      _this.shouldClose = false;
	    };
	
	    _this.handleContentOnMouseDown = function () {
	      _this.shouldClose = false;
	    };
	
	    _this.requestClose = function (event) {
	      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
	    };
	
	    _this.ownerHandlesClose = function () {
	      return _this.props.onRequestClose;
	    };
	
	    _this.shouldBeClosed = function () {
	      return !_this.state.isOpen && !_this.state.beforeClose;
	    };
	
	    _this.contentHasFocus = function () {
	      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
	    };
	
	    _this.buildClassName = function (which, additional) {
	      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
	        base: CLASS_NAMES[which],
	        afterOpen: CLASS_NAMES[which] + "--after-open",
	        beforeClose: CLASS_NAMES[which] + "--before-close"
	      };
	      var className = classNames.base;
	      if (_this.state.afterOpen) {
	        className = className + " " + classNames.afterOpen;
	      }
	      if (_this.state.beforeClose) {
	        className = className + " " + classNames.beforeClose;
	      }
	      return typeof additional === "string" && additional ? className + " " + additional : className;
	    };
	
	    _this.attributesFromObject = function (prefix, items) {
	      return Object.keys(items).reduce(function (acc, name) {
	        acc[prefix + "-" + name] = items[name];
	        return acc;
	      }, {});
	    };
	
	    _this.state = {
	      afterOpen: false,
	      beforeClose: false
	    };
	
	    _this.shouldClose = null;
	    _this.moveFromContentToOverlay = null;
	    return _this;
	  }
	
	  _createClass(ModalPortal, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      if (this.props.isOpen) {
	        this.open();
	      }
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (false) {
	        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
	          // eslint-disable-next-line no-console
	          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
	        }
	        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
	          // eslint-disable-next-line no-console
	          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
	        }
	      }
	
	      if (this.props.isOpen && !prevProps.isOpen) {
	        this.open();
	      } else if (!this.props.isOpen && prevProps.isOpen) {
	        this.close();
	      }
	
	      // Focus only needs to be set once when the modal is being opened
	      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
	        this.focusContent();
	      }
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      if (this.state.isOpen) {
	        this.afterClose();
	      }
	      clearTimeout(this.closeTimer);
	      cancelAnimationFrame(this.openAnimationFrame);
	    }
	  }, {
	    key: "beforeOpen",
	    value: function beforeOpen() {
	      var _props = this.props,
	          appElement = _props.appElement,
	          ariaHideApp = _props.ariaHideApp,
	          htmlOpenClassName = _props.htmlOpenClassName,
	          bodyOpenClassName = _props.bodyOpenClassName;
	
	      // Add classes.
	
	      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);
	
	      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);
	
	      if (ariaHideApp) {
	        ariaHiddenInstances += 1;
	        ariaAppHider.hide(appElement);
	      }
	
	      _portalOpenInstances2.default.register(this);
	    }
	
	    // Don't steal focus from inner elements
	
	  }, {
	    key: "render",
	    value: function render() {
	      var _props2 = this.props,
	          id = _props2.id,
	          className = _props2.className,
	          overlayClassName = _props2.overlayClassName,
	          defaultStyles = _props2.defaultStyles,
	          children = _props2.children;
	
	      var contentStyles = className ? {} : defaultStyles.content;
	      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
	
	      if (this.shouldBeClosed()) {
	        return null;
	      }
	
	      var overlayProps = {
	        ref: this.setOverlayRef,
	        className: this.buildClassName("overlay", overlayClassName),
	        style: _extends({}, overlayStyles, this.props.style.overlay),
	        onClick: this.handleOverlayOnClick,
	        onMouseDown: this.handleOverlayOnMouseDown
	      };
	
	      var contentProps = _extends({
	        id: id,
	        ref: this.setContentRef,
	        style: _extends({}, contentStyles, this.props.style.content),
	        className: this.buildClassName("content", className),
	        tabIndex: "-1",
	        onKeyDown: this.handleKeyDown,
	        onMouseDown: this.handleContentOnMouseDown,
	        onMouseUp: this.handleContentOnMouseUp,
	        onClick: this.handleContentOnClick,
	        role: this.props.role,
	        "aria-label": this.props.contentLabel
	      }, this.attributesFromObject("aria", _extends({ modal: true }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
	        "data-testid": this.props.testId
	      });
	
	      var contentElement = this.props.contentElement(contentProps, children);
	      return this.props.overlayElement(overlayProps, contentElement);
	    }
	  }]);
	
	  return ModalPortal;
	}(_react.Component);
	
	ModalPortal.defaultProps = {
	  style: {
	    overlay: {},
	    content: {}
	  },
	  defaultStyles: {}
	};
	ModalPortal.propTypes = {
	  isOpen: _propTypes2.default.bool.isRequired,
	  defaultStyles: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  style: _propTypes2.default.shape({
	    content: _propTypes2.default.object,
	    overlay: _propTypes2.default.object
	  }),
	  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	  bodyOpenClassName: _propTypes2.default.string,
	  htmlOpenClassName: _propTypes2.default.string,
	  ariaHideApp: _propTypes2.default.bool,
	  appElement: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(_safeHTMLElement2.default), _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection), _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList), _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))]),
	  onAfterOpen: _propTypes2.default.func,
	  onAfterClose: _propTypes2.default.func,
	  onRequestClose: _propTypes2.default.func,
	  closeTimeoutMS: _propTypes2.default.number,
	  shouldFocusAfterRender: _propTypes2.default.bool,
	  shouldCloseOnOverlayClick: _propTypes2.default.bool,
	  shouldReturnFocusAfterClose: _propTypes2.default.bool,
	  preventScroll: _propTypes2.default.bool,
	  role: _propTypes2.default.string,
	  contentLabel: _propTypes2.default.string,
	  aria: _propTypes2.default.object,
	  data: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  shouldCloseOnEsc: _propTypes2.default.bool,
	  overlayRef: _propTypes2.default.func,
	  contentRef: _propTypes2.default.func,
	  id: _propTypes2.default.string,
	  overlayElement: _propTypes2.default.func,
	  contentElement: _propTypes2.default.func,
	  testId: _propTypes2.default.string
	};
	exports.default = ModalPortal;
	module.exports = exports["default"];

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetState = resetState;
	exports.log = log;
	exports.assertNodeList = assertNodeList;
	exports.setElement = setElement;
	exports.validateElement = validateElement;
	exports.hide = hide;
	exports.show = show;
	exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
	
	var _warning = __webpack_require__(35);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _safeHTMLElement = __webpack_require__(257);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var globalElement = null;
	
	/* eslint-disable no-console */
	/* istanbul ignore next */
	function resetState() {
	  if (globalElement) {
	    if (globalElement.removeAttribute) {
	      globalElement.removeAttribute("aria-hidden");
	    } else if (globalElement.length != null) {
	      globalElement.forEach(function (element) {
	        return element.removeAttribute("aria-hidden");
	      });
	    } else {
	      document.querySelectorAll(globalElement).forEach(function (element) {
	        return element.removeAttribute("aria-hidden");
	      });
	    }
	  }
	  globalElement = null;
	}
	
	/* istanbul ignore next */
	function log() {
	  if (true) return;
	  var check = globalElement || {};
	  console.log("ariaAppHider ----------");
	  console.log(check.nodeName, check.className, check.id);
	  console.log("end ariaAppHider ----------");
	}
	/* eslint-enable no-console */
	
	function assertNodeList(nodeList, selector) {
	  if (!nodeList || !nodeList.length) {
	    throw new Error("react-modal: No elements were found for selector " + selector + ".");
	  }
	}
	
	function setElement(element) {
	  var useElement = element;
	  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
	    var el = document.querySelectorAll(useElement);
	    assertNodeList(el, useElement);
	    useElement = el;
	  }
	  globalElement = useElement || globalElement;
	  return globalElement;
	}
	
	function validateElement(appElement) {
	  var el = appElement || globalElement;
	  if (el) {
	    return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [el];
	  } else {
	    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
	
	    return [];
	  }
	}
	
	function hide(appElement) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var el = _step.value;
	
	      el.setAttribute("aria-hidden", "true");
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	
	function show(appElement) {
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var el = _step2.value;
	
	      el.removeAttribute("aria-hidden");
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	}
	
	function documentNotReadyOrSSRTesting() {
	  globalElement = null;
	}

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetState = resetState;
	exports.log = log;
	
	var _portalOpenInstances = __webpack_require__(347);
	
	var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Body focus trap see Issue #742
	
	var before = void 0,
	    after = void 0,
	    instances = [];
	
	/* eslint-disable no-console */
	/* istanbul ignore next */
	function resetState() {
	  var _arr = [before, after];
	
	  for (var _i = 0; _i < _arr.length; _i++) {
	    var item = _arr[_i];
	    if (!item) continue;
	    item.parentNode && item.parentNode.removeChild(item);
	  }
	  before = after = null;
	  instances = [];
	}
	
	/* istanbul ignore next */
	function log() {
	  console.log("bodyTrap ----------");
	  console.log(instances.length);
	  var _arr2 = [before, after];
	  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
	    var item = _arr2[_i2];
	    var check = item || {};
	    console.log(check.nodeName, check.className, check.id);
	  }
	  console.log("edn bodyTrap ----------");
	}
	/* eslint-enable no-console */
	
	function focusContent() {
	  if (instances.length === 0) {
	    if (false) {
	      // eslint-disable-next-line no-console
	      console.warn("React-Modal: Open instances > 0 expected");
	    }
	    return;
	  }
	  instances[instances.length - 1].focusContent();
	}
	
	function bodyTrap(eventType, openInstances) {
	  if (!before && !after) {
	    before = document.createElement("div");
	    before.setAttribute("data-react-modal-body-trap", "");
	    before.style.position = "absolute";
	    before.style.opacity = "0";
	    before.setAttribute("tabindex", "0");
	    before.addEventListener("focus", focusContent);
	    after = before.cloneNode();
	    after.addEventListener("focus", focusContent);
	  }
	
	  instances = openInstances;
	
	  if (instances.length > 0) {
	    // Add focus trap
	    if (document.body.firstChild !== before) {
	      document.body.insertBefore(before, document.body.firstChild);
	    }
	    if (document.body.lastChild !== after) {
	      document.body.appendChild(after);
	    }
	  } else {
	    // Remove focus trap
	    if (before.parentElement) {
	      before.parentElement.removeChild(before);
	    }
	    if (after.parentElement) {
	      after.parentElement.removeChild(after);
	    }
	  }
	}
	
	_portalOpenInstances2.default.subscribe(bodyTrap);

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetState = resetState;
	exports.log = log;
	var htmlClassList = {};
	var docBodyClassList = {};
	
	/* eslint-disable no-console */
	/* istanbul ignore next */
	function removeClass(at, cls) {
	  at.classList.remove(cls);
	}
	
	/* istanbul ignore next */
	function resetState() {
	  var htmlElement = document.getElementsByTagName("html")[0];
	  for (var cls in htmlClassList) {
	    removeClass(htmlElement, htmlClassList[cls]);
	  }
	
	  var body = document.body;
	  for (var _cls in docBodyClassList) {
	    removeClass(body, docBodyClassList[_cls]);
	  }
	
	  htmlClassList = {};
	  docBodyClassList = {};
	}
	
	/* istanbul ignore next */
	function log() {
	  if (true) return;
	
	  var classes = document.getElementsByTagName("html")[0].className;
	  var buffer = "Show tracked classes:\n\n";
	
	  buffer += "<html /> (" + classes + "):\n";
	  for (var x in htmlClassList) {
	    buffer += "  " + x + " " + htmlClassList[x] + "\n";
	  }
	
	  classes = document.body.className;
	
	  buffer += "\n\ndoc.body (" + classes + "):\n";
	  for (var _x in docBodyClassList) {
	    buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
	  }
	
	  buffer += "\n";
	
	  console.log(buffer);
	}
	/* eslint-enable no-console */
	
	/**
	 * Track the number of reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var incrementReference = function incrementReference(poll, className) {
	  if (!poll[className]) {
	    poll[className] = 0;
	  }
	  poll[className] += 1;
	  return className;
	};
	
	/**
	 * Drop the reference of a class.
	 * @param {object} poll The poll to receive the reference.
	 * @param {string} className The class name.
	 * @return {string}
	 */
	var decrementReference = function decrementReference(poll, className) {
	  if (poll[className]) {
	    poll[className] -= 1;
	  }
	  return className;
	};
	
	/**
	 * Track a class and add to the given class list.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be tracked.
	 */
	var trackClass = function trackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    incrementReference(poll, className);
	    classListRef.add(className);
	  });
	};
	
	/**
	 * Untrack a class and remove from the given class list if the reference
	 * reaches 0.
	 * @param {Object} classListRef A class list of an element.
	 * @param {Object} poll         The poll to be used.
	 * @param {Array}  classes      The list of classes to be untracked.
	 */
	var untrackClass = function untrackClass(classListRef, poll, classes) {
	  classes.forEach(function (className) {
	    decrementReference(poll, className);
	    poll[className] === 0 && classListRef.remove(className);
	  });
	};
	
	/**
	 * Public inferface to add classes to the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var add = exports.add = function add(element, classString) {
	  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};
	
	/**
	 * Public inferface to remove classes from the document.body.
	 * @param {string} bodyClass The class string to be added.
	 *                           It may contain more then one class
	 *                           with ' ' as separator.
	 */
	var remove = exports.remove = function remove(element, classString) {
	  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
	};

/***/ }),

/***/ 845:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.resetState = resetState;
	exports.log = log;
	exports.handleBlur = handleBlur;
	exports.handleFocus = handleFocus;
	exports.markForFocusLater = markForFocusLater;
	exports.returnFocus = returnFocus;
	exports.popWithoutFocus = popWithoutFocus;
	exports.setupScopedFocus = setupScopedFocus;
	exports.teardownScopedFocus = teardownScopedFocus;
	
	var _tabbable = __webpack_require__(348);
	
	var _tabbable2 = _interopRequireDefault(_tabbable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var focusLaterElements = [];
	var modalElement = null;
	var needToFocus = false;
	
	/* eslint-disable no-console */
	/* istanbul ignore next */
	function resetState() {
	  focusLaterElements = [];
	}
	
	/* istanbul ignore next */
	function log() {
	  if (true) return;
	  console.log("focusManager ----------");
	  focusLaterElements.forEach(function (f) {
	    var check = f || {};
	    console.log(check.nodeName, check.className, check.id);
	  });
	  console.log("end focusManager ----------");
	}
	/* eslint-enable no-console */
	
	function handleBlur() {
	  needToFocus = true;
	}
	
	function handleFocus() {
	  if (needToFocus) {
	    needToFocus = false;
	    if (!modalElement) {
	      return;
	    }
	    // need to see how jQuery shims document.on('focusin') so we don't need the
	    // setTimeout, firefox doesn't support focusin, if it did, we could focus
	    // the element outside of a setTimeout. Side-effect of this implementation
	    // is that the document.body gets focus, and then we focus our element right
	    // after, seems fine.
	    setTimeout(function () {
	      if (modalElement.contains(document.activeElement)) {
	        return;
	      }
	      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
	      el.focus();
	    }, 0);
	  }
	}
	
	function markForFocusLater() {
	  focusLaterElements.push(document.activeElement);
	}
	
	/* eslint-disable no-console */
	function returnFocus() {
	  var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	  var toFocus = null;
	  try {
	    if (focusLaterElements.length !== 0) {
	      toFocus = focusLaterElements.pop();
	      toFocus.focus({ preventScroll: preventScroll });
	    }
	    return;
	  } catch (e) {
	    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
	  }
	}
	/* eslint-enable no-console */
	
	function popWithoutFocus() {
	  focusLaterElements.length > 0 && focusLaterElements.pop();
	}
	
	function setupScopedFocus(element) {
	  modalElement = element;
	
	  if (window.addEventListener) {
	    window.addEventListener("blur", handleBlur, false);
	    document.addEventListener("focus", handleFocus, true);
	  } else {
	    window.attachEvent("onBlur", handleBlur);
	    document.attachEvent("onFocus", handleFocus);
	  }
	}
	
	function teardownScopedFocus() {
	  modalElement = null;
	
	  if (window.addEventListener) {
	    window.removeEventListener("blur", handleBlur);
	    document.removeEventListener("focus", handleFocus);
	  } else {
	    window.detachEvent("onBlur", handleBlur);
	    document.detachEvent("onFocus", handleFocus);
	  }
	}

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.log = log;
	exports.resetState = resetState;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Tracks portals that are open and emits events to subscribers
	
	var PortalOpenInstances = function PortalOpenInstances() {
	  var _this = this;
	
	  _classCallCheck(this, PortalOpenInstances);
	
	  this.register = function (openInstance) {
	    if (_this.openInstances.indexOf(openInstance) !== -1) {
	      if (false) {
	        // eslint-disable-next-line no-console
	        console.warn("React-Modal: Cannot register modal instance that's already open");
	      }
	      return;
	    }
	    _this.openInstances.push(openInstance);
	    _this.emit("register");
	  };
	
	  this.deregister = function (openInstance) {
	    var index = _this.openInstances.indexOf(openInstance);
	    if (index === -1) {
	      if (false) {
	        // eslint-disable-next-line no-console
	        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
	      }
	      return;
	    }
	    _this.openInstances.splice(index, 1);
	    _this.emit("deregister");
	  };
	
	  this.subscribe = function (callback) {
	    _this.subscribers.push(callback);
	  };
	
	  this.emit = function (eventType) {
	    _this.subscribers.forEach(function (subscriber) {
	      return subscriber(eventType,
	      // shallow copy to avoid accidental mutation
	      _this.openInstances.slice());
	    });
	  };
	
	  this.openInstances = [];
	  this.subscribers = [];
	};
	
	var portalOpenInstances = new PortalOpenInstances();
	
	/* eslint-disable no-console */
	/* istanbul ignore next */
	function log() {
	  console.log("portalOpenInstances ----------");
	  console.log(portalOpenInstances.openInstances.length);
	  portalOpenInstances.openInstances.forEach(function (p) {
	    return console.log(p);
	  });
	  console.log("end portalOpenInstances ----------");
	}
	
	/* istanbul ignore next */
	function resetState() {
	  portalOpenInstances = new PortalOpenInstances();
	}
	/* eslint-enable no-console */
	
	exports.default = portalOpenInstances;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = undefined;
	
	var _exenv = __webpack_require__(468);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EE = _exenv2.default;
	
	var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
	
	var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};
	
	var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};
	
	var canUseDOM = exports.canUseDOM = EE.canUseDOM;
	
	exports.default = SafeHTMLElement;

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scopeTab;
	
	var _tabbable = __webpack_require__(348);
	
	var _tabbable2 = _interopRequireDefault(_tabbable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function scopeTab(node, event) {
	  var tabbable = (0, _tabbable2.default)(node);
	
	  if (!tabbable.length) {
	    // Do nothing, since there are no elements that can receive focus.
	    event.preventDefault();
	    return;
	  }
	
	  var target = void 0;
	
	  var shiftKey = event.shiftKey;
	  var head = tabbable[0];
	  var tail = tabbable[tabbable.length - 1];
	
	  // proceed with default browser behavior on tab.
	  // Focus on last element on shift + tab.
	  if (node === document.activeElement) {
	    if (!shiftKey) return;
	    target = tail;
	  }
	
	  if (tail === document.activeElement && !shiftKey) {
	    target = head;
	  }
	
	  if (head === document.activeElement && shiftKey) {
	    target = tail;
	  }
	
	  if (target) {
	    event.preventDefault();
	    target.focus();
	    return;
	  }
	
	  // Safari radio issue.
	  //
	  // Safari does not move the focus to the radio button,
	  // so we need to force it to really walk through all elements.
	  //
	  // This is very error prone, since we are trying to guess
	  // if it is a safari browser from the first occurence between
	  // chrome or safari.
	  //
	  // The chrome user agent contains the first ocurrence
	  // as the 'chrome/version' and later the 'safari/version'.
	  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
	  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
	
	  // If we are not in safari desktop, let the browser control
	  // the focus
	  if (!isSafariDesktop) return;
	
	  var x = tabbable.indexOf(document.activeElement);
	
	  if (x > -1) {
	    x += shiftKey ? -1 : 1;
	  }
	
	  target = tabbable[x];
	
	  // If the tabbable element does not exist,
	  // focus head/tail based on shiftKey
	  if (typeof target === "undefined") {
	    event.preventDefault();
	    target = shiftKey ? tail : head;
	    target.focus();
	    return;
	  }
	
	  event.preventDefault();
	
	  target.focus();
	}
	module.exports = exports["default"];

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findTabbableDescendants;
	/*!
	 * Adapted from jQuery UI core
	 *
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */
	
	var tabbableNode = /input|select|textarea|button|object/;
	
	function hidesContents(element) {
	  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
	
	  // If the node is empty, this is good enough
	  if (zeroSize && !element.innerHTML) return true;
	
	  try {
	    // Otherwise we need to check some styles
	    var style = window.getComputedStyle(element);
	    return zeroSize ? style.getPropertyValue("overflow") !== "visible" ||
	    // if 'overflow: visible' set, check if there is actually any overflow
	    element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
	  } catch (exception) {
	    // eslint-disable-next-line no-console
	    console.warn("Failed to inspect element style");
	    return false;
	  }
	}
	
	function visible(element) {
	  var parentElement = element;
	  while (parentElement) {
	    if (parentElement === document.body) break;
	    if (hidesContents(parentElement)) return false;
	    parentElement = parentElement.parentNode;
	  }
	  return true;
	}
	
	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
	  return res && visible(element);
	}
	
	function tabbable(element) {
	  var tabIndex = element.getAttribute("tabindex");
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}
	
	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
	}
	module.exports = exports["default"];

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(841);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Modal2.default;
	module.exports = exports["default"];

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = __webpack_require__(19);
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.createProvider = createProvider;
	exports.default = void 0;
	
	var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(36));
	
	var _react = _interopRequireWildcard(__webpack_require__(1));
	
	var _propTypes = _interopRequireDefault(__webpack_require__(3));
	
	var _PropTypes = __webpack_require__(43);
	
	var _warning = _interopRequireDefault(__webpack_require__(24));
	
	var prefixUnsafeLifecycleMethods = typeof _react.default.forwardRef !== "undefined";
	var didWarnAboutReceivingStore = false;
	
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	
	  didWarnAboutReceivingStore = true;
	  (0, _warning.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reduxjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	function createProvider(storeKey) {
	  var _Provider$childContex;
	
	  if (storeKey === void 0) {
	    storeKey = 'store';
	  }
	
	  var subscriptionKey = storeKey + "Subscription";
	
	  var Provider =
	  /*#__PURE__*/
	  function (_Component) {
	    (0, _inheritsLoose2.default)(Provider, _Component);
	    var _proto = Provider.prototype;
	
	    _proto.getChildContext = function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
	    };
	
	    function Provider(props, context) {
	      var _this;
	
	      _this = _Component.call(this, props, context) || this;
	      _this[storeKey] = props.store;
	      return _this;
	    }
	
	    _proto.render = function render() {
	      return _react.Children.only(this.props.children);
	    };
	
	    return Provider;
	  }(_react.Component);
	
	  if (false) {
	    // Use UNSAFE_ event name where supported
	    var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillReceiveProps' : 'componentWillReceiveProps';
	
	    Provider.prototype[eventName] = function (nextProps) {
	      if (this[storeKey] !== nextProps.store) {
	        warnAboutReceivingStore();
	      }
	    };
	  }
	
	  Provider.propTypes = {
	    store: _PropTypes.storeShape.isRequired,
	    children: _propTypes.default.element.isRequired
	  };
	  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
	  return Provider;
	}
	
	var _default = createProvider();
	
	exports.default = _default;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireWildcard = __webpack_require__(19);
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.default = connectAdvanced;
	
	var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(36));
	
	var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(71));
	
	var _extends2 = _interopRequireDefault(__webpack_require__(18));
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20));
	
	var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(38));
	
	var _invariant = _interopRequireDefault(__webpack_require__(21));
	
	var _react = _interopRequireWildcard(__webpack_require__(1));
	
	var _reactIs = __webpack_require__(98);
	
	var _Subscription = _interopRequireDefault(__webpack_require__(106));
	
	var _PropTypes = __webpack_require__(43);
	
	var prefixUnsafeLifecycleMethods = typeof _react.default.forwardRef !== "undefined";
	var hotReloadingVersion = 0;
	var dummyState = {};
	
	function noop() {}
	
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };
	  return selector;
	}
	
	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory, // options object:
	_ref) {
	  var _contextTypes, _childContextTypes;
	
	  if (_ref === void 0) {
	    _ref = {};
	  }
	
	  var _ref2 = _ref,
	      _ref2$getDisplayName = _ref2.getDisplayName,
	      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
	    return "ConnectAdvanced(" + name + ")";
	  } : _ref2$getDisplayName,
	      _ref2$methodName = _ref2.methodName,
	      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
	      _ref2$renderCountProp = _ref2.renderCountProp,
	      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
	      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
	      _ref2$storeKey = _ref2.storeKey,
	      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
	      _ref2$withRef = _ref2.withRef,
	      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
	      connectOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]);
	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;
	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);
	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant.default)((0, _reactIs.isValidElementType)(WrappedComponent), "You must pass a component to the function returned by " + (methodName + ". Instead received " + JSON.stringify(WrappedComponent)));
	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
	    var displayName = getDisplayName(wrappedComponentName);
	    var selectorFactoryOptions = (0, _extends2.default)({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent // TODO Actually fix our use of componentWillReceiveProps
	
	      /* eslint-disable react/no-deprecated */
	
	    });
	
	    var Connect =
	    /*#__PURE__*/
	    function (_Component) {
	      (0, _inheritsLoose2.default)(Connect, _Component);
	
	      function Connect(props, context) {
	        var _this;
	
	        _this = _Component.call(this, props, context) || this;
	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
	        (0, _invariant.default)(_this.store, "Could not find \"" + storeKey + "\" in either the context or props of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + ("or explicitly pass \"" + storeKey + "\" as a prop to \"" + displayName + "\"."));
	
	        _this.initSelector();
	
	        _this.initSubscription();
	
	        return _this;
	      }
	
	      var _proto = Connect.prototype;
	
	      _proto.getChildContext = function getChildContext() {
	        var _ref3;
	
	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref3 = {}, _ref3[subscriptionKey] = subscription || this.context[subscriptionKey], _ref3;
	      };
	
	      _proto.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return; // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      }; // Note: this is renamed below to the UNSAFE_ version in React >=16.3.0
	
	
	      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };
	
	      _proto.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };
	
	      _proto.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };
	
	      _proto.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant.default)(withRef, "To access the wrapped instance, you need to specify " + ("{ withRef: true } in the options argument of the " + methodName + "() call."));
	        return this.wrappedInstance;
	      };
	
	      _proto.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };
	
	      _proto.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };
	
	      _proto.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return; // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription.default(this.store, parentSub, this.onStateChange.bind(this)); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };
	
	      _proto.onStateChange = function onStateChange() {
	        this.selector.run(this.props);
	
	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };
	
	      _proto.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };
	
	      _proto.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };
	
	      _proto.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props; // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	
	        var withExtras = (0, _extends2.default)({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };
	
	      _proto.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;
	
	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    if (prefixUnsafeLifecycleMethods) {
	      // Use UNSAFE_ event name where supported
	      Connect.prototype.UNSAFE_componentWillReceiveProps = Connect.prototype.componentWillReceiveProps;
	      delete Connect.prototype.componentWillReceiveProps;
	    }
	    /* eslint-enable react/no-deprecated */
	
	
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;
	
	    if (false) {
	      // Use UNSAFE_ event name where supported
	      var eventName = prefixUnsafeLifecycleMethods ? 'UNSAFE_componentWillUpdate' : 'componentWillUpdate';
	
	      Connect.prototype[eventName] = function componentWillUpdate() {
	        var _this2 = this;
	
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector(); // If any connected descendants don't hot reload (and resubscribe in the process), their
	          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
	          // listeners, this does mean that the old versions of connected descendants will still be
	          // notified of state changes; however, their onStateChange function is a no-op so this
	          // isn't a huge deal.
	
	          var oldListeners = [];
	
	          if (this.subscription) {
	            oldListeners = this.subscription.listeners.get();
	            this.subscription.tryUnsubscribe();
	          }
	
	          this.initSubscription();
	
	          if (shouldHandleStateChanges) {
	            this.subscription.trySubscribe();
	            oldListeners.forEach(function (listener) {
	              return _this2.subscription.listeners.subscribe(listener);
	            });
	          }
	        }
	      };
	    }
	
	    return (0, _hoistNonReactStatics.default)(Connect, WrappedComponent);
	  };
	}

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.createConnect = createConnect;
	exports.default = void 0;
	
	var _extends2 = _interopRequireDefault(__webpack_require__(18));
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20));
	
	var _connectAdvanced = _interopRequireDefault(__webpack_require__(41));
	
	var _shallowEqual = _interopRequireDefault(__webpack_require__(108));
	
	var _mapDispatchToProps = _interopRequireDefault(__webpack_require__(101));
	
	var _mapStateToProps = _interopRequireDefault(__webpack_require__(102));
	
	var _mergeProps = _interopRequireDefault(__webpack_require__(103));
	
	var _selectorFactory = _interopRequireDefault(__webpack_require__(104));
	
	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:
	
	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.
	
	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.
	
	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */
	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }
	
	  return function (dispatch, options) {
	    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
	  };
	}
	
	function strictEqual(a, b) {
	  return a === b;
	} // createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	
	
	function createConnect(_temp) {
	  var _ref = _temp === void 0 ? {} : _temp,
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === void 0 ? _connectAdvanced.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory.default : _ref$selectorFactory;
	
	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
	    if (_ref2 === void 0) {
	      _ref2 = {};
	    }
	
	    var _ref3 = _ref2,
	        _ref3$pure = _ref3.pure,
	        pure = _ref3$pure === void 0 ? true : _ref3$pure,
	        _ref3$areStatesEqual = _ref3.areStatesEqual,
	        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
	        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
	        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _shallowEqual.default : _ref3$areOwnPropsEqua,
	        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
	        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _shallowEqual.default : _ref3$areStatePropsEq,
	        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
	        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _shallowEqual.default : _ref3$areMergedPropsE,
	        extraOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
	    return connectHOC(selectorFactory, (0, _extends2.default)({
	      // used in error messages
	      methodName: 'connect',
	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return "Connect(" + name + ")";
	      },
	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),
	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual
	    }, extraOptions));
	  };
	}
	
	var _default = createConnect();
	
	exports.default = _default;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;
	exports.default = void 0;
	
	var _redux = __webpack_require__(47);
	
	var _wrapMapToProps = __webpack_require__(42);
	
	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}
	
	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return {
	      dispatch: dispatch
	    };
	  }) : undefined;
	}
	
	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}
	
	var _default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
	exports.default = _default;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;
	exports.default = void 0;
	
	var _wrapMapToProps = __webpack_require__(42);
	
	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}
	
	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}
	
	var _default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
	exports.default = _default;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;
	exports.default = void 0;
	
	var _extends2 = _interopRequireDefault(__webpack_require__(18));
	
	var _verifyPlainObject = _interopRequireDefault(__webpack_require__(44));
	
	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return (0, _extends2.default)({}, ownProps, stateProps, dispatchProps);
	}
	
	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;
	    var hasRunOnce = false;
	    var mergedProps;
	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	
	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;
	        if (false) (0, _verifyPlainObject.default)(mergedProps, displayName, 'mergeProps');
	      }
	
	      return mergedProps;
	    };
	  };
	}
	
	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}
	
	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}
	
	var _default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	exports.default = _default;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;
	
	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20));
	
	var _verifySubselectors = _interopRequireDefault(__webpack_require__(105));
	
	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}
	
	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;
	  var hasRunAtLeastOnce = false;
	  var state;
	  var ownProps;
	  var stateProps;
	  var dispatchProps;
	  var mergedProps;
	
	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }
	
	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;
	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }
	
	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;
	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }
	
	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	} // TODO: Add more comments
	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.
	
	
	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);
	
	  if (false) {
	    (0, _verifySubselectors.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }
	
	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.default = verifySubselectors;
	
	var _warning = _interopRequireDefault(__webpack_require__(24));
	
	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning.default)("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
	    }
	  }
	}
	
	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;
	
	var _verifyPlainObject = _interopRequireDefault(__webpack_require__(44));
	
	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);
	
	    function constantSelector() {
	      return constant;
	    }
	
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	
	
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	
	
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;
	
	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    }; // allow detectFactoryAndVerify to get ownProps
	
	
	    proxy.dependsOnOwnProps = true;
	
	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);
	
	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }
	
	      if (false) (0, _verifyPlainObject.default)(props, displayName, methodName);
	      return props;
	    };
	
	    return proxy;
	  };
	}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	var _interopRequireWildcard = __webpack_require__(19);
	
	exports.__esModule = true;
	
	var _Provider = _interopRequireWildcard(__webpack_require__(99));
	
	exports.Provider = _Provider.default;
	exports.createProvider = _Provider.createProvider;
	
	var _connectAdvanced = _interopRequireDefault(__webpack_require__(41));
	
	exports.connectAdvanced = _connectAdvanced.default;
	
	var _connect = _interopRequireDefault(__webpack_require__(100));
	
	exports.connect = _connect.default;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = void 0;
	
	var _propTypes = _interopRequireDefault(__webpack_require__(3));
	
	var subscriptionShape = _propTypes.default.shape({
	  trySubscribe: _propTypes.default.func.isRequired,
	  tryUnsubscribe: _propTypes.default.func.isRequired,
	  notifyNestedSubs: _propTypes.default.func.isRequired,
	  isSubscribed: _propTypes.default.func.isRequired
	});
	
	exports.subscriptionShape = subscriptionShape;
	
	var storeShape = _propTypes.default.shape({
	  subscribe: _propTypes.default.func.isRequired,
	  dispatch: _propTypes.default.func.isRequired,
	  getState: _propTypes.default.func.isRequired
	});
	
	exports.storeShape = storeShape;

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants
	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};
	
	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];
	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    get: function get() {
	      return next;
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);
	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;
	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}
	
	var Subscription =
	/*#__PURE__*/
	function () {
	  function Subscription(store, parentSub, onStateChange) {
	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }
	
	  var _proto = Subscription.prototype;
	
	  _proto.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };
	
	  _proto.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };
	
	  _proto.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };
	
	  _proto.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
	      this.listeners = createListenerCollection();
	    }
	  };
	
	  _proto.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };
	
	  return Subscription;
	}();
	
	exports.default = Subscription;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = isPlainObject;
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = Object.getPrototypeOf(obj);
	  if (proto === null) return true;
	  var baseProto = proto;
	
	  while (Object.getPrototypeOf(baseProto) !== null) {
	    baseProto = Object.getPrototypeOf(baseProto);
	  }
	
	  return proto === baseProto;
	}

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}
	
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(5);
	
	exports.__esModule = true;
	exports.default = verifyPlainObject;
	
	var _isPlainObject = _interopRequireDefault(__webpack_require__(107));
	
	var _warning = _interopRequireDefault(__webpack_require__(24));
	
	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject.default)(value)) {
	    (0, _warning.default)(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
	  }
	}

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = warning;
	
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	
	
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	
	}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var shallowEqual = _interopDefault(__webpack_require__(199));
	var hoistNonReactStatics = _interopDefault(__webpack_require__(38));
	var changeEmitter = __webpack_require__(81);
	var $$observable = _interopDefault(__webpack_require__(69));
	
	var setStatic = function setStatic(key, value) {
	  return function (BaseComponent) {
	    /* eslint-disable no-param-reassign */
	    BaseComponent[key] = value;
	    /* eslint-enable no-param-reassign */
	    return BaseComponent;
	  };
	};
	
	var setDisplayName = function setDisplayName(displayName) {
	  return setStatic('displayName', displayName);
	};
	
	var getDisplayName = function getDisplayName(Component$$1) {
	  if (typeof Component$$1 === 'string') {
	    return Component$$1;
	  }
	
	  if (!Component$$1) {
	    return undefined;
	  }
	
	  return Component$$1.displayName || Component$$1.name || 'Component';
	};
	
	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + getDisplayName(BaseComponent) + ')';
	};
	
	var mapProps = function mapProps(propsMapper) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	    var MapProps = function MapProps(props) {
	      return factory(propsMapper(props));
	    };
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps);
	    }
	    return MapProps;
	  };
	};
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	
	
	
	
	
	
	
	
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
	
	var withProps = function withProps(input) {
	  var hoc = mapProps(function (props) {
	    return _extends({}, props, typeof input === 'function' ? input(props) : input);
	  });
	  if (false) {
	    return function (BaseComponent) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc(BaseComponent));
	    };
	  }
	  return hoc;
	};
	
	var pick = function pick(obj, keys) {
	  var result = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (obj.hasOwnProperty(key)) {
	      result[key] = obj[key];
	    }
	  }
	  return result;
	};
	
	var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
	      return !shallowEqual(pick(props, shouldMapOrKeys), pick(nextProps, shouldMapOrKeys));
	    };
	
	    var WithPropsOnChange = function (_Component) {
	      inherits(WithPropsOnChange, _Component);
	
	      function WithPropsOnChange() {
	        var _temp, _this, _ret;
	
	        classCallCheck(this, WithPropsOnChange);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.computedProps = propsMapper(_this.props), _temp), possibleConstructorReturn(_this, _ret);
	      }
	
	      WithPropsOnChange.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (shouldMap(this.props, nextProps)) {
	          this.computedProps = propsMapper(nextProps);
	        }
	      };
	
	      WithPropsOnChange.prototype.render = function render() {
	        return factory(_extends({}, this.props, this.computedProps));
	      };
	
	      return WithPropsOnChange;
	    }(React.Component);
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'withPropsOnChange'))(WithPropsOnChange);
	    }
	    return WithPropsOnChange;
	  };
	};
	
	var mapValues = function mapValues(obj, func) {
	  var result = {};
	  /* eslint-disable no-restricted-syntax */
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      result[key] = func(obj[key], key);
	    }
	  }
	  /* eslint-enable no-restricted-syntax */
	  return result;
	};
	
	/* eslint-disable no-console */
	var withHandlers = function withHandlers(handlers) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	
	    var WithHandlers = function (_Component) {
	      inherits(WithHandlers, _Component);
	
	      function WithHandlers() {
	        var _temp, _this, _ret;
	
	        classCallCheck(this, WithHandlers);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
	      }
	
	      WithHandlers.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
	        this.cachedHandlers = {};
	      };
	
	      WithHandlers.prototype.render = function render() {
	        return factory(_extends({}, this.props, this.handlers));
	      };
	
	      return WithHandlers;
	    }(React.Component);
	
	    var _initialiseProps = function _initialiseProps() {
	      var _this2 = this;
	
	      this.cachedHandlers = {};
	      this.handlers = mapValues(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
	        return function () {
	          var cachedHandler = _this2.cachedHandlers[handlerName];
	          if (cachedHandler) {
	            return cachedHandler.apply(undefined, arguments);
	          }
	
	          var handler = createHandler(_this2.props);
	          _this2.cachedHandlers[handlerName] = handler;
	
	          if (false) {
	            console.error(
	            // eslint-disable-line no-console
	            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
	          }
	
	          return handler.apply(undefined, arguments);
	        };
	      });
	    };
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'withHandlers'))(WithHandlers);
	    }
	    return WithHandlers;
	  };
	};
	
	var defaultProps = function defaultProps(props) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	    var DefaultProps = function DefaultProps(ownerProps) {
	      return factory(ownerProps);
	    };
	    DefaultProps.defaultProps = props;
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'defaultProps'))(DefaultProps);
	    }
	    return DefaultProps;
	  };
	};
	
	var omit = function omit(obj, keys) {
	  var rest = objectWithoutProperties(obj, []);
	
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (rest.hasOwnProperty(key)) {
	      delete rest[key];
	    }
	  }
	  return rest;
	};
	
	var renameProp = function renameProp(oldName, newName) {
	  var hoc = mapProps(function (props) {
	    var _babelHelpers$extends;
	
	    return _extends({}, omit(props, [oldName]), (_babelHelpers$extends = {}, _babelHelpers$extends[newName] = props[oldName], _babelHelpers$extends));
	  });
	  if (false) {
	    return function (BaseComponent) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProp'))(hoc(BaseComponent));
	    };
	  }
	  return hoc;
	};
	
	var keys = Object.keys;
	
	
	var mapKeys = function mapKeys(obj, func) {
	  return keys(obj).reduce(function (result, key) {
	    var val = obj[key];
	    /* eslint-disable no-param-reassign */
	    result[func(val, key)] = val;
	    /* eslint-enable no-param-reassign */
	    return result;
	  }, {});
	};
	
	var renameProps = function renameProps(nameMap) {
	  var hoc = mapProps(function (props) {
	    return _extends({}, omit(props, keys(nameMap)), mapKeys(pick(props, keys(nameMap)), function (_, oldName) {
	      return nameMap[oldName];
	    }));
	  });
	  if (false) {
	    return function (BaseComponent) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProps'))(hoc(BaseComponent));
	    };
	  }
	  return hoc;
	};
	
	var flattenProp = function flattenProp(propName) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	    var FlattenProp = function FlattenProp(props) {
	      return factory(_extends({}, props, props[propName]));
	    };
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'flattenProp'))(FlattenProp);
	    }
	    return FlattenProp;
	  };
	};
	
	var withState = function withState(stateName, stateUpdaterName, initialState) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	
	    var WithState = function (_Component) {
	      inherits(WithState, _Component);
	
	      function WithState() {
	        var _temp, _this, _ret;
	
	        classCallCheck(this, WithState);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
	        }, _this.updateStateValue = function (updateFn, callback) {
	          return _this.setState(function (_ref) {
	            var stateValue = _ref.stateValue;
	            return {
	              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
	            };
	          }, callback);
	        }, _temp), possibleConstructorReturn(_this, _ret);
	      }
	
	      WithState.prototype.render = function render() {
	        var _babelHelpers$extends;
	
	        return factory(_extends({}, this.props, (_babelHelpers$extends = {}, _babelHelpers$extends[stateName] = this.state.stateValue, _babelHelpers$extends[stateUpdaterName] = this.updateStateValue, _babelHelpers$extends)));
	      };
	
	      return WithState;
	    }(React.Component);
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'withState'))(WithState);
	    }
	    return WithState;
	  };
	};
	
	var withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	
	    var WithStateHandlers = function (_Component) {
	      inherits(WithStateHandlers, _Component);
	
	      function WithStateHandlers() {
	        var _temp, _this, _ret;
	
	        classCallCheck(this, WithStateHandlers);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
	      }
	
	      WithStateHandlers.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        var propsChanged = nextProps !== this.props;
	        // the idea is to skip render if stateUpdater handler return undefined
	        // this allows to create no state update handlers with access to state and props
	        var stateChanged = !shallowEqual(nextState, this.state);
	        return propsChanged || stateChanged;
	      };
	
	      WithStateHandlers.prototype.render = function render() {
	        return factory(_extends({}, this.props, this.state, this.stateUpdaters));
	      };
	
	      return WithStateHandlers;
	    }(React.Component);
	
	    var _initialiseProps = function _initialiseProps() {
	      var _this2 = this;
	
	      this.state = typeof initialState === 'function' ? initialState(this.props) : initialState;
	      this.stateUpdaters = mapValues(stateUpdaters, function (handler) {
	        return function (mayBeEvent) {
	          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	          }
	
	          // Having that functional form of setState can be called async
	          // we need to persist SyntheticEvent
	          if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
	            mayBeEvent.persist();
	          }
	
	          _this2.setState(function (state, props) {
	            return handler(state, props).apply(undefined, [mayBeEvent].concat(args));
	          });
	        };
	      });
	    };
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'withStateHandlers'))(WithStateHandlers);
	    }
	    return WithStateHandlers;
	  };
	};
	
	var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	
	    var WithReducer = function (_Component) {
	      inherits(WithReducer, _Component);
	
	      function WithReducer() {
	        var _temp, _this, _ret;
	
	        classCallCheck(this, WithReducer);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	          stateValue: _this.initializeStateValue()
	        }, _this.dispatch = function (action) {
	          return _this.setState(function (_ref) {
	            var stateValue = _ref.stateValue;
	            return {
	              stateValue: reducer(stateValue, action)
	            };
	          });
	        }, _temp), possibleConstructorReturn(_this, _ret);
	      }
	
	      WithReducer.prototype.initializeStateValue = function initializeStateValue() {
	        if (initialState !== undefined) {
	          return typeof initialState === 'function' ? initialState(this.props) : initialState;
	        }
	        return reducer(undefined, { type: '@@recompose/INIT' });
	      };
	
	      WithReducer.prototype.render = function render() {
	        var _babelHelpers$extends;
	
	        return factory(_extends({}, this.props, (_babelHelpers$extends = {}, _babelHelpers$extends[stateName] = this.state.stateValue, _babelHelpers$extends[dispatchName] = this.dispatch, _babelHelpers$extends)));
	      };
	
	      return WithReducer;
	    }(React.Component);
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'withReducer'))(WithReducer);
	    }
	    return WithReducer;
	  };
	};
	
	var identity = function identity(Component$$1) {
	  return Component$$1;
	};
	
	var branch = function branch(test, left) {
	  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
	  return function (BaseComponent) {
	    var leftFactory = void 0;
	    var rightFactory = void 0;
	    var Branch = function Branch(props) {
	      if (test(props)) {
	        leftFactory = leftFactory || React.createFactory(left(BaseComponent));
	        return leftFactory(props);
	      }
	      rightFactory = rightFactory || React.createFactory(right(BaseComponent));
	      return rightFactory(props);
	    };
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'branch'))(Branch);
	    }
	    return Branch;
	  };
	};
	
	var renderComponent = function renderComponent(Component$$1) {
	  return function (_) {
	    var factory = React.createFactory(Component$$1);
	    var RenderComponent = function RenderComponent(props) {
	      return factory(props);
	    };
	    if (false) {
	      RenderComponent.displayName = wrapDisplayName(Component$$1, 'renderComponent');
	    }
	    return RenderComponent;
	  };
	};
	
	var Nothing = function (_Component) {
	  inherits(Nothing, _Component);
	
	  function Nothing() {
	    classCallCheck(this, Nothing);
	    return possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Nothing.prototype.render = function render() {
	    return null;
	  };
	
	  return Nothing;
	}(React.Component);
	
	var renderNothing = function renderNothing(_) {
	  return Nothing;
	};
	
	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	
	    var ShouldUpdate = function (_Component) {
	      inherits(ShouldUpdate, _Component);
	
	      function ShouldUpdate() {
	        classCallCheck(this, ShouldUpdate);
	        return possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };
	
	      ShouldUpdate.prototype.render = function render() {
	        return factory(this.props);
	      };
	
	      return ShouldUpdate;
	    }(React.Component);
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
	    }
	    return ShouldUpdate;
	  };
	};
	
	var pure = function pure(BaseComponent) {
	  var hoc = shouldUpdate(function (props, nextProps) {
	    return !shallowEqual(props, nextProps);
	  });
	
	  if (false) {
	    return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(hoc(BaseComponent));
	  }
	
	  return hoc(BaseComponent);
	};
	
	var onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
	  var hoc = shouldUpdate(function (props, nextProps) {
	    return !shallowEqual(pick(nextProps, propKeys), pick(props, propKeys));
	  });
	
	  if (false) {
	    return function (BaseComponent) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForKeys'))(hoc(BaseComponent));
	    };
	  }
	  return hoc;
	};
	
	var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
	  var propTypes = BaseComponent.propTypes;
	
	  if (false) {
	    if (!propTypes) {
	      /* eslint-disable */
	      console.error('A component without any `propTypes` was passed to ' + '`onlyUpdateForPropTypes()`. Check the implementation of the ' + ('component with display name "' + getDisplayName(BaseComponent) + '".'));
	      /* eslint-enable */
	    }
	  }
	
	  var propKeys = Object.keys(propTypes || {});
	  var OnlyUpdateForPropTypes = onlyUpdateForKeys(propKeys)(BaseComponent);
	
	  if (false) {
	    return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForPropTypes'))(OnlyUpdateForPropTypes);
	  }
	  return OnlyUpdateForPropTypes;
	};
	
	var withContext = function withContext(childContextTypes, getChildContext) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	
	    var WithContext = function (_Component) {
	      inherits(WithContext, _Component);
	
	      function WithContext() {
	        var _temp, _this, _ret;
	
	        classCallCheck(this, WithContext);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
	          return getChildContext(_this.props);
	        }, _temp), possibleConstructorReturn(_this, _ret);
	      }
	
	      WithContext.prototype.render = function render() {
	        return factory(this.props);
	      };
	
	      return WithContext;
	    }(React.Component);
	
	    WithContext.childContextTypes = childContextTypes;
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(WithContext);
	    }
	    return WithContext;
	  };
	};
	
	var getContext = function getContext(contextTypes) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	    var GetContext = function GetContext(ownerProps, context) {
	      return factory(_extends({}, ownerProps, context));
	    };
	
	    GetContext.contextTypes = contextTypes;
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'getContext'))(GetContext);
	    }
	    return GetContext;
	  };
	};
	
	/* eslint-disable no-console */
	var lifecycle = function lifecycle(spec) {
	  return function (BaseComponent) {
	    var factory = React.createFactory(BaseComponent);
	
	    if (false) {
	      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
	    }
	
	    var Lifecycle = function (_Component) {
	      inherits(Lifecycle, _Component);
	
	      function Lifecycle() {
	        classCallCheck(this, Lifecycle);
	        return possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      Lifecycle.prototype.render = function render() {
	        return factory(_extends({}, this.props, this.state));
	      };
	
	      return Lifecycle;
	    }(React.Component);
	
	    Object.keys(spec).forEach(function (hook) {
	      return Lifecycle.prototype[hook] = spec[hook];
	    });
	
	    if (false) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'lifecycle'))(Lifecycle);
	    }
	    return Lifecycle;
	  };
	};
	
	var isClassComponent = function isClassComponent(Component$$1) {
	  return Boolean(Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function');
	};
	
	var toClass = function toClass(baseComponent) {
	  if (isClassComponent(baseComponent)) {
	    return baseComponent;
	  }
	
	  var ToClass = function (_Component) {
	    inherits(ToClass, _Component);
	
	    function ToClass() {
	      classCallCheck(this, ToClass);
	      return possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    ToClass.prototype.render = function render() {
	      if (typeof baseComponent === 'string') {
	        return React__default.createElement(baseComponent, this.props);
	      }
	      return baseComponent(this.props, this.context);
	    };
	
	    return ToClass;
	  }(React.Component);
	
	  ToClass.displayName = getDisplayName(baseComponent);
	  ToClass.propTypes = baseComponent.propTypes;
	  ToClass.contextTypes = baseComponent.contextTypes;
	  ToClass.defaultProps = baseComponent.defaultProps;
	
	  return ToClass;
	};
	
	var setPropTypes = function setPropTypes(propTypes) {
	  return setStatic('propTypes', propTypes);
	};
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}
	
	var createSink = function createSink(callback) {
	  return function (_Component) {
	    inherits(Sink, _Component);
	
	    function Sink() {
	      classCallCheck(this, Sink);
	      return possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    Sink.prototype.componentWillMount = function componentWillMount() {
	      callback(this.props);
	    };
	
	    Sink.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      callback(nextProps);
	    };
	
	    Sink.prototype.render = function render() {
	      return null;
	    };
	
	    return Sink;
	  }(React.Component);
	};
	
	var componentFromProp = function componentFromProp(propName) {
	  var Component$$1 = function Component$$1(props) {
	    return React.createElement(props[propName], omit(props, [propName]));
	  };
	  Component$$1.displayName = 'componentFromProp(' + propName + ')';
	  return Component$$1;
	};
	
	var nest = function nest() {
	  for (var _len = arguments.length, Components = Array(_len), _key = 0; _key < _len; _key++) {
	    Components[_key] = arguments[_key];
	  }
	
	  var factories = Components.map(React.createFactory);
	  var Nest = function Nest(_ref) {
	    var props = objectWithoutProperties(_ref, []),
	        children = _ref.children;
	    return factories.reduceRight(function (child, factory) {
	      return factory(props, child);
	    }, children);
	  };
	
	  if (false) {
	    var displayNames = Components.map(getDisplayName);
	    Nest.displayName = 'nest(' + displayNames.join(', ') + ')';
	  }
	
	  return Nest;
	};
	
	var hoistStatics = function hoistStatics(higherOrderComponent) {
	  return function (BaseComponent) {
	    var NewComponent = higherOrderComponent(BaseComponent);
	    hoistNonReactStatics(NewComponent, BaseComponent);
	    return NewComponent;
	  };
	};
	
	var _config = {
	  fromESObservable: null,
	  toESObservable: null
	};
	
	var configureObservable = function configureObservable(c) {
	  _config = c;
	};
	
	var config = {
	  fromESObservable: function fromESObservable(observable) {
	    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
	  },
	  toESObservable: function toESObservable(stream) {
	    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
	  }
	};
	
	var componentFromStreamWithConfig = function componentFromStreamWithConfig(config$$1) {
	  return function (propsToVdom) {
	    return function (_Component) {
	      inherits(ComponentFromStream, _Component);
	
	      function ComponentFromStream() {
	        var _config$fromESObserva;
	
	        var _temp, _this, _ret;
	
	        classCallCheck(this, ComponentFromStream);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { vdom: null }, _this.propsEmitter = changeEmitter.createChangeEmitter(), _this.props$ = config$$1.fromESObservable((_config$fromESObserva = {
	          subscribe: function subscribe(observer) {
	            var unsubscribe = _this.propsEmitter.listen(function (props) {
	              if (props) {
	                observer.next(props);
	              } else {
	                observer.complete();
	              }
	            });
	            return { unsubscribe: unsubscribe };
	          }
	        }, _config$fromESObserva[$$observable] = function () {
	          return this;
	        }, _config$fromESObserva)), _this.vdom$ = config$$1.toESObservable(propsToVdom(_this.props$)), _temp), possibleConstructorReturn(_this, _ret);
	      }
	
	      // Stream of props
	
	
	      // Stream of vdom
	
	
	      ComponentFromStream.prototype.componentWillMount = function componentWillMount() {
	        var _this2 = this;
	
	        // Subscribe to child prop changes so we know when to re-render
	        this.subscription = this.vdom$.subscribe({
	          next: function next(vdom) {
	            _this2.setState({ vdom: vdom });
	          }
	        });
	        this.propsEmitter.emit(this.props);
	      };
	
	      ComponentFromStream.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        // Receive new props from the owner
	        this.propsEmitter.emit(nextProps);
	      };
	
	      ComponentFromStream.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return nextState.vdom !== this.state.vdom;
	      };
	
	      ComponentFromStream.prototype.componentWillUnmount = function componentWillUnmount() {
	        // Call without arguments to complete stream
	        this.propsEmitter.emit();
	
	        // Clean-up subscription before un-mounting
	        this.subscription.unsubscribe();
	      };
	
	      ComponentFromStream.prototype.render = function render() {
	        return this.state.vdom;
	      };
	
	      return ComponentFromStream;
	    }(React.Component);
	  };
	};
	
	var componentFromStream = function componentFromStream(propsToVdom) {
	  return componentFromStreamWithConfig(config)(propsToVdom);
	};
	
	var identity$1 = function identity(t) {
	  return t;
	};
	
	var mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config$$1) {
	  var componentFromStream = componentFromStreamWithConfig({
	    fromESObservable: identity$1,
	    toESObservable: identity$1
	  });
	  return function (transform) {
	    return function (BaseComponent) {
	      var factory = React.createFactory(BaseComponent);
	      var fromESObservable = config$$1.fromESObservable,
	          toESObservable = config$$1.toESObservable;
	
	      return componentFromStream(function (props$) {
	        var _ref;
	
	        return _ref = {
	          subscribe: function subscribe(observer) {
	            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
	              next: function next(childProps) {
	                return observer.next(factory(childProps));
	              }
	            });
	            return {
	              unsubscribe: function unsubscribe() {
	                return subscription.unsubscribe();
	              }
	            };
	          }
	        }, _ref[$$observable] = function () {
	          return this;
	        }, _ref;
	      });
	    };
	  };
	};
	
	var mapPropsStream = function mapPropsStream(transform) {
	  var hoc = mapPropsStreamWithConfig(config)(transform);
	
	  if (false) {
	    return function (BaseComponent) {
	      return setDisplayName(wrapDisplayName(BaseComponent, 'mapPropsStream'))(hoc(BaseComponent));
	    };
	  }
	  return hoc;
	};
	
	var createEventHandlerWithConfig = function createEventHandlerWithConfig(config$$1) {
	  return function () {
	    var _config$fromESObserva;
	
	    var emitter = changeEmitter.createChangeEmitter();
	    var stream = config$$1.fromESObservable((_config$fromESObserva = {
	      subscribe: function subscribe(observer) {
	        var unsubscribe = emitter.listen(function (value) {
	          return observer.next(value);
	        });
	        return { unsubscribe: unsubscribe };
	      }
	    }, _config$fromESObserva[$$observable] = function () {
	      return this;
	    }, _config$fromESObserva));
	    return {
	      handler: emitter.emit,
	      stream: stream
	    };
	  };
	};
	
	var createEventHandler = createEventHandlerWithConfig(config);
	
	// Higher-order component helpers
	
	exports.mapProps = mapProps;
	exports.withProps = withProps;
	exports.withPropsOnChange = withPropsOnChange;
	exports.withHandlers = withHandlers;
	exports.defaultProps = defaultProps;
	exports.renameProp = renameProp;
	exports.renameProps = renameProps;
	exports.flattenProp = flattenProp;
	exports.withState = withState;
	exports.withStateHandlers = withStateHandlers;
	exports.withReducer = withReducer;
	exports.branch = branch;
	exports.renderComponent = renderComponent;
	exports.renderNothing = renderNothing;
	exports.shouldUpdate = shouldUpdate;
	exports.pure = pure;
	exports.onlyUpdateForKeys = onlyUpdateForKeys;
	exports.onlyUpdateForPropTypes = onlyUpdateForPropTypes;
	exports.withContext = withContext;
	exports.getContext = getContext;
	exports.lifecycle = lifecycle;
	exports.toClass = toClass;
	exports.setStatic = setStatic;
	exports.setPropTypes = setPropTypes;
	exports.setDisplayName = setDisplayName;
	exports.compose = compose;
	exports.getDisplayName = getDisplayName;
	exports.wrapDisplayName = wrapDisplayName;
	exports.shallowEqual = shallowEqual;
	exports.isClassComponent = isClassComponent;
	exports.createSink = createSink;
	exports.componentFromProp = componentFromProp;
	exports.nest = nest;
	exports.hoistStatics = hoistStatics;
	exports.componentFromStream = componentFromStream;
	exports.componentFromStreamWithConfig = componentFromStreamWithConfig;
	exports.mapPropsStream = mapPropsStream;
	exports.mapPropsStreamWithConfig = mapPropsStreamWithConfig;
	exports.createEventHandler = createEventHandler;
	exports.createEventHandlerWithConfig = createEventHandlerWithConfig;
	exports.setObservableConfig = configureObservable;


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	var _compose = __webpack_require__(45);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	var _createStore = __webpack_require__(46);
	
	var _isPlainObject = __webpack_require__(31);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(48);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	
	    if (false) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }
	
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var unexpectedKeyCache = void 0;
	  if (false) {
	    unexpectedKeyCache = {};
	  }
	
	  var shapeAssertionError = void 0;
	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];
	
	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }
	
	    if (false) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(_key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(undefined, arguments));
	    };
	  });
	}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(31);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(69);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	
	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(46);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(112);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(111);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(110);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(45);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(48);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (false) {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(869);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),

/***/ 869:
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),

/***/ 261:
/***/ (function(module, exports) {

	/** @license React v0.19.1
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var f,g,h,k,l;
	if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
	y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
	typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
	function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
	function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
	function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
	function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
	function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
	exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
	exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
	exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(261);
	} else {
	  module.exports = require('./cjs/scheduler.development.js');
	}


/***/ }),

/***/ 262:
/***/ (function(module, exports) {

	var COMPLETE = 'complete',
	    CANCELED = 'canceled';
	
	function raf(task){
	    if('requestAnimationFrame' in window){
	        return window.requestAnimationFrame(task);
	    }
	
	    setTimeout(task, 16);
	}
	
	function setElementScroll(element, x, y){
	    Math.max(0, x);
	    Math.max(0, y);
	
	    if(element.self === element){
	        element.scrollTo(x, y);
	    }else{
	        element.scrollLeft = x;
	        element.scrollTop = y;
	    }
	}
	
	function getTargetScrollLocation(scrollSettings, parent){
	    var align = scrollSettings.align,
	        target = scrollSettings.target,
	        targetPosition = target.getBoundingClientRect(),
	        parentPosition,
	        x,
	        y,
	        differenceX,
	        differenceY,
	        targetWidth,
	        targetHeight,
	        leftAlign = align && align.left != null ? align.left : 0.5,
	        topAlign = align && align.top != null ? align.top : 0.5,
	        leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
	        topOffset = align && align.topOffset != null ? align.topOffset : 0,
	        leftScalar = leftAlign,
	        topScalar = topAlign;
	
	    if(scrollSettings.isWindow(parent)){
	        targetWidth = Math.min(targetPosition.width, parent.innerWidth);
	        targetHeight = Math.min(targetPosition.height, parent.innerHeight);
	        x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
	        y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
	        x -= leftOffset;
	        y -= topOffset;
	        x = scrollSettings.align.lockX ? parent.pageXOffset : x;
	        y = scrollSettings.align.lockY ? parent.pageYOffset : y;
	        differenceX = x - parent.pageXOffset;
	        differenceY = y - parent.pageYOffset;
	    }else{
	        targetWidth = targetPosition.width;
	        targetHeight = targetPosition.height;
	        parentPosition = parent.getBoundingClientRect();
	        var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
	        var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
	        x = offsetLeft + (targetWidth * leftScalar) - parent.clientWidth * leftScalar;
	        y = offsetTop + (targetHeight * topScalar) - parent.clientHeight * topScalar;
	        x -= leftOffset;
	        y -= topOffset;
	        x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
	        y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
	        x = scrollSettings.align.lockX ? parent.scrollLeft : x;
	        y = scrollSettings.align.lockY ? parent.scrollTop : y;
	        differenceX = x - parent.scrollLeft;
	        differenceY = y - parent.scrollTop;
	    }
	
	    return {
	        x: x,
	        y: y,
	        differenceX: differenceX,
	        differenceY: differenceY
	    };
	}
	
	function animate(parent){
	    var scrollSettings = parent._scrollSettings;
	
	    if(!scrollSettings){
	        return;
	    }
	
	    var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;
	
	    var location = getTargetScrollLocation(scrollSettings, parent),
	        time = Date.now() - scrollSettings.startTime,
	        timeValue = Math.min(1 / scrollSettings.time * time, 1);
	
	    if(scrollSettings.endIterations >= maxSynchronousAlignments){
	        setElementScroll(parent, location.x, location.y);
	        parent._scrollSettings = null;
	        return scrollSettings.end(COMPLETE);
	    }
	
	    var easeValue = 1 - scrollSettings.ease(timeValue);
	
	    setElementScroll(parent,
	        location.x - location.differenceX * easeValue,
	        location.y - location.differenceY * easeValue
	    );
	
	    if(time >= scrollSettings.time){
	        scrollSettings.endIterations++;
	        // Align ancestor synchronously
	        scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
	        animate(parent);
	        return;
	    }
	
	    raf(animate.bind(null, parent));
	}
	
	function defaultIsWindow(target){
	    return target.self === target
	}
	
	function transitionScrollTo(target, parent, settings, scrollAncestor, callback){
	    var idle = !parent._scrollSettings,
	        lastSettings = parent._scrollSettings,
	        now = Date.now(),
	        cancelHandler,
	        passiveOptions = { passive: true };
	
	    if(lastSettings){
	        lastSettings.end(CANCELED);
	    }
	
	    function end(endType){
	        parent._scrollSettings = null;
	
	        if(parent.parentElement && parent.parentElement._scrollSettings){
	            parent.parentElement._scrollSettings.end(endType);
	        }
	
	        if(settings.debug){
	            console.log('Scrolling ended with type', endType, 'for', parent)
	        }
	
	        callback(endType);
	        if(cancelHandler){
	            parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
	            parent.removeEventListener('wheel', cancelHandler, passiveOptions);
	        }
	    }
	
	    var maxSynchronousAlignments = settings.maxSynchronousAlignments;
	
	    if(maxSynchronousAlignments == null){
	        maxSynchronousAlignments = 3;
	    }
	
	    parent._scrollSettings = {
	        startTime: now,
	        endIterations: 0,
	        target: target,
	        time: settings.time,
	        ease: settings.ease,
	        align: settings.align,
	        isWindow: settings.isWindow || defaultIsWindow,
	        maxSynchronousAlignments: maxSynchronousAlignments,
	        end: end,
	        scrollAncestor
	    };
	
	    if(!('cancellable' in settings) || settings.cancellable){
	        cancelHandler = end.bind(null, CANCELED);
	        parent.addEventListener('touchstart', cancelHandler, passiveOptions);
	        parent.addEventListener('wheel', cancelHandler, passiveOptions);
	    }
	
	    if(idle){
	        animate(parent);
	    }
	
	    return cancelHandler
	}
	
	function defaultIsScrollable(element){
	    return (
	        'pageXOffset' in element ||
	        (
	            element.scrollHeight !== element.clientHeight ||
	            element.scrollWidth !== element.clientWidth
	        ) &&
	        getComputedStyle(element).overflow !== 'hidden'
	    );
	}
	
	function defaultValidTarget(){
	    return true;
	}
	
	function findParentElement(el){
	    if (el.assignedSlot) {
	        return findParentElement(el.assignedSlot);
	    }
	
	    if (el.parentElement) {
	        if(el.parentElement.tagName === 'BODY'){
	            return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
	        }
	        return el.parentElement;
	    }
	
	    if (el.getRootNode){
	        var parent = el.getRootNode()
	        if(parent.nodeType === 11) {
	            return parent.host;
	        }
	    }
	}
	
	module.exports = function(target, settings, callback){
	    if(!target){
	        return;
	    }
	
	    if(typeof settings === 'function'){
	        callback = settings;
	        settings = null;
	    }
	
	    if(!settings){
	        settings = {};
	    }
	
	    settings.time = isNaN(settings.time) ? 1000 : settings.time;
	    settings.ease = settings.ease || function(v){return 1 - Math.pow(1 - v, v / 2);};
	    settings.align = settings.align || {};
	
	    var parent = findParentElement(target),
	        parents = 1;
	
	    function done(endType){
	        parents--;
	        if(!parents){
	            callback && callback(endType);
	        }
	    }
	
	    var validTarget = settings.validTarget || defaultValidTarget;
	    var isScrollable = settings.isScrollable;
	
	    if(settings.debug){
	        console.log('About to scroll to', target)
	
	        if(!parent){
	            console.error('Target did not have a parent, is it mounted in the DOM?')
	        }
	    }
	
	    var scrollingElements = [];
	
	    while(parent){
	        if(settings.debug){
	            console.log('Scrolling parent node', parent)
	        }
	
	        if(validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))){
	            parents++;
	            scrollingElements.push(parent);
	        }
	
	        parent = findParentElement(parent);
	
	        if(!parent){
	            done(COMPLETE)
	            break;
	        }
	    }
	
	    return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
	};


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(265);


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var randomFromSeed = __webpack_require__(268);
	
	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;
	
	var shuffled;
	
	function reset() {
	    shuffled = false;
	}
	
	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }
	
	    if (_alphabet_ === alphabet) {
	        return;
	    }
	
	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }
	
	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });
	
	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }
	
	    alphabet = _alphabet_;
	    reset();
	}
	
	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}
	
	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}
	
	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }
	
	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;
	
	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}
	
	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}
	
	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}
	
	function get () {
	  return alphabet || ORIGINAL;
	}
	
	module.exports = {
	    get: get,
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var generate = __webpack_require__(264);
	var alphabet = __webpack_require__(33);
	
	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1567752802062;
	
	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 7;
	
	// Counter is used when shortid is called multiple times in one second.
	var counter;
	
	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function build(clusterWorkerId) {
	    var str = '';
	
	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);
	
	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }
	
	    str = str + generate(version);
	    str = str + generate(clusterWorkerId);
	    if (counter > 0) {
	        str = str + generate(counter);
	    }
	    str = str + generate(seconds);
	    return str;
	}
	
	module.exports = build;


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(33);
	var random = __webpack_require__(267);
	var format = __webpack_require__(253);
	
	function generate(number) {
	    var loopCounter = 0;
	    var done;
	
	    var str = '';
	
	    while (!done) {
	        str = str + format(random, alphabet.get(), 1);
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}
	
	module.exports = generate;


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var alphabet = __webpack_require__(33);
	var build = __webpack_require__(263);
	var isValid = __webpack_require__(266);
	
	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(269) || 0;
	
	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}
	
	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}
	
	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }
	
	    return alphabet.shuffled();
	}
	
	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {
	  return build(clusterWorkerId);
	}
	
	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.isValid = isValid;


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(33);
	
	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }
	
	    var nonAlphabetic = new RegExp('[^' +
	      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
	    ']');
	    return !nonAlphabetic.test(id);
	}
	
	module.exports = isShortId;


/***/ }),

/***/ 267:
/***/ (function(module, exports) {

	'use strict';
	
	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto
	
	var randomByte;
	
	if (!crypto || !crypto.getRandomValues) {
	    randomByte = function(size) {
	        var bytes = [];
	        for (var i = 0; i < size; i++) {
	            bytes.push(Math.floor(Math.random() * 256));
	        }
	        return bytes;
	    };
	} else {
	    randomByte = function(size) {
	        return crypto.getRandomValues(new Uint8Array(size));
	    };
	}
	
	module.exports = randomByte;


/***/ }),

/***/ 268:
/***/ (function(module, exports) {

	'use strict';
	
	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)
	
	var seed = 1;
	
	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}
	
	function setSeed(_seed_) {
	    seed = _seed_;
	}
	
	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ }),

/***/ 269:
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = 0;


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(80)
	var ieee754 = __webpack_require__(88)
	var isArray = __webpack_require__(202)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 2em;\n  background: cornsilk;\n\n  h1,\n  .ipa {\n    display: inline;\n  }\n\n  .ipa {\n    margin-left: 1rem;\n    font-weight: light;\n  }\n\n  p {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n  }\n\n  .part-of-speech {\n    padding-left: 1rem;\n  }\n\n  .definition {\n    font-weight: lighter;\n    font-size: smaller;\n    padding-left: 2rem;\n  }\n'], ['\n  padding: 2em;\n  background: cornsilk;\n\n  h1,\n  .ipa {\n    display: inline;\n  }\n\n  .ipa {\n    margin-left: 1rem;\n    font-weight: light;\n  }\n\n  p {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n  }\n\n  .part-of-speech {\n    padding-left: 1rem;\n  }\n\n  .definition {\n    font-weight: lighter;\n    font-size: smaller;\n    padding-left: 2rem;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Div = _styledComponents2.default.div(_templateObject);
	var Definition = function Definition(_ref) {
	  var word = _ref.word,
	      ipa = _ref.ipa,
	      PoS = _ref.PoS,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, ['word', 'ipa', 'PoS', 'children']);
	
	  return _react2.default.createElement(
	    Div,
	    props,
	    _react2.default.createElement(
	      'heading',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        word
	      ),
	      ipa && _react2.default.createElement(
	        'p',
	        { className: 'ipa' },
	        '/',
	        ipa,
	        '/'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'definition-body' },
	      PoS && _react2.default.createElement(
	        'p',
	        { className: 'part-of-speech' },
	        PoS
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: 'definition' },
	        children
	      )
	    )
	  );
	};
	
	exports.default = Definition;
	module.exports = exports['default'];

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  z-index: 10;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  @media (min-width: 60rem) {\n    & {\n      position: sticky;\n      top: 0;\n    }\n  }\n\n  li {\n    padding: 10px;\n  }\n\n  button {\n    display: flex;\n    border-style: none;\n    background: unset;\n    font-size: 3rem;\n    cursor: pointer;\n    align-items: center;\n    padding: 0;\n  }\n  button:focus {\n    outline: none;\n  }\n  button:hover {\n    transform: scale(1.05);\n  }\n'], ['\n  z-index: 10;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n  @media (min-width: 60rem) {\n    & {\n      position: sticky;\n      top: 0;\n    }\n  }\n\n  li {\n    padding: 10px;\n  }\n\n  button {\n    display: flex;\n    border-style: none;\n    background: unset;\n    font-size: 3rem;\n    cursor: pointer;\n    align-items: center;\n    padding: 0;\n  }\n  button:focus {\n    outline: none;\n  }\n  button:hover {\n    transform: scale(1.05);\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _notepad = __webpack_require__(272);
	
	var _notepad2 = _interopRequireDefault(_notepad);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Wrapper = _styledComponents2.default.header(_templateObject);
	
	var Header = function Header(_ref) {
	  var show = _ref.show,
	      hide = _ref.hide,
	      sideBarVisible = _ref.sideBarVisible,
	      toggleSideBar = _ref.toggleSideBar;
	  return _react2.default.createElement(
	    Wrapper,
	    null,
	    _react2.default.createElement(
	      'ul',
	      null,
	      _react2.default.createElement(
	        'li',
	        null,
	        _react2.default.createElement(
	          'button',
	          {
	            onClick: function onClick() {
	              toggleSideBar(sideBarVisible);
	            }
	          },
	          _react2.default.createElement('img', { src: _notepad2.default, alt: '\uD83D\uDDD2\uFE0F' })
	        )
	      )
	    )
	  );
	};
	
	exports.default = Header;
	module.exports = exports['default'];

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  .message {\n    --me-color: #ddd;\n    --you-color: dodgerblue;\n    --border-radius: 10px;\n\n    display: inline-block;\n    color: white;\n    padding: 5px;\n    margin: var(--border-radius, 10px) !important;\n    position: relative;\n    max-width: 75%;\n  }\n  .message::before {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: -5px;\n    bottom: 0;\n    border-top: var(--border-radius, 10px) solid transparent;\n    border-bottom: 0px solid transparent;\n  }\n\n  .you-column {\n    text-align: right;\n  }\n\n  .you-column,\n  .me-column {\n    p,\n    h1,\n    h2,\n    h3,\n    h4 {\n      margin: 0.25rem;\n      display: inline-block;\n    }\n  }\n\n  .me {\n    color: black;\n    border-radius: var(--border-radius, 10px) var(--border-radius, 10px)\n      var(--border-radius, 10px) 0;\n    background: var(--me-color);\n  }\n  .me::before {\n    border-right: var(--border-radius, 10px) solid var(--me-color);\n    border-left: 0px solid transparent;\n  }\n  .you {\n    border-radius: var(--border-radius, 10px) var(--border-radius, 10px) 0\n      var(--border-radius, 10px);\n    background: var(--you-color);\n    text-align: left;\n  }\n  .you::before {\n    right: -5px;\n    left: unset;\n    border-left: var(--border-radius, 10px) solid\n      ', ';\n    border-right: 0px solid transparent;\n  }\n'], ['\n  .message {\n    --me-color: #ddd;\n    --you-color: dodgerblue;\n    --border-radius: 10px;\n\n    display: inline-block;\n    color: white;\n    padding: 5px;\n    margin: var(--border-radius, 10px) !important;\n    position: relative;\n    max-width: 75%;\n  }\n  .message::before {\n    content: \'\';\n    position: absolute;\n    width: 0;\n    height: 0;\n    left: -5px;\n    bottom: 0;\n    border-top: var(--border-radius, 10px) solid transparent;\n    border-bottom: 0px solid transparent;\n  }\n\n  .you-column {\n    text-align: right;\n  }\n\n  .you-column,\n  .me-column {\n    p,\n    h1,\n    h2,\n    h3,\n    h4 {\n      margin: 0.25rem;\n      display: inline-block;\n    }\n  }\n\n  .me {\n    color: black;\n    border-radius: var(--border-radius, 10px) var(--border-radius, 10px)\n      var(--border-radius, 10px) 0;\n    background: var(--me-color);\n  }\n  .me::before {\n    border-right: var(--border-radius, 10px) solid var(--me-color);\n    border-left: 0px solid transparent;\n  }\n  .you {\n    border-radius: var(--border-radius, 10px) var(--border-radius, 10px) 0\n      var(--border-radius, 10px);\n    background: var(--you-color);\n    text-align: left;\n  }\n  .you::before {\n    right: -5px;\n    left: unset;\n    border-left: var(--border-radius, 10px) solid\n      ', ';\n    border-right: 0px solid transparent;\n  }\n']);
	
	var _shortid = __webpack_require__(10);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _marked = __webpack_require__(96);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Div = _styledComponents2.default.div(_templateObject, function (props) {
	  return props.bg ? props.bg : 'var(--you-color)';
	});
	
	var Message = function Message(_ref) {
	  var value = _ref.value,
	      _ref$me = _ref.me,
	      me = _ref$me === undefined ? false : _ref$me,
	      style = _ref.style;
	
	  var id = _shortid2.default.generate();
	
	  return _react2.default.createElement(
	    Div,
	    { bg: style && style.background ? style.background : null },
	    _react2.default.createElement(
	      'div',
	      { className: (me ? 'me' : 'you') + '-column' },
	      _react2.default.createElement('div', {
	        className: 'message ' + (me ? 'me' : 'you'),
	        id: id,
	        style: style ? style : null,
	        dangerouslySetInnerHTML: { __html: (0, _marked2.default)(value) }
	      })
	    )
	  );
	};
	
	// <style>
	//   {`#${id} {
	//   ${style && `--you-color: ${style.background};`}
	// }`}
	// </style>
	exports.default = Message;
	module.exports = exports['default'];

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  header {\n    background: #f7f7f7;\n    border-bottom: 1px solid #aaa;\n    text-align: center;\n  }\n\n  header h1 {\n    font-weight: bold;\n    margin: 0.5rem auto;\n  }\n\n  .messenger-body {\n    display: flex;\n    flex-direction: column;\n    overflow-y: scroll;\n    flex-grow: 1;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  header {\n    background: #f7f7f7;\n    border-bottom: 1px solid #aaa;\n    text-align: center;\n  }\n\n  header h1 {\n    font-weight: bold;\n    margin: 0.5rem auto;\n  }\n\n  .messenger-body {\n    display: flex;\n    flex-direction: column;\n    overflow-y: scroll;\n    flex-grow: 1;\n  }\n']);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                           * Two ways to use this.
	                                                                                           *
	                                                                                           * 1. In parent component, import <Messenger> and wrap a bunch of <Messages />
	                                                                                           *
	                                                                                           * ⚠ maybe not 2. In parent component, import messengerize and apply that to a template literal with keys indicating me and you.
	                                                                                           */
	
	// import Message from './Message';
	
	
	var Div = _styledComponents2.default.div(_templateObject);
	
	var Messenger = function Messenger(_ref) {
	  var children = _ref.children,
	      name = _ref.name;
	  return _react2.default.createElement(
	    Div,
	    null,
	    name && _react2.default.createElement(
	      'header',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        name
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: 'messenger-body' },
	      children
	    )
	  );
	};
	
	exports.default = Messenger;
	
	/*
	<div className="full-width">
	    <Phone>
	      <Messenger className="messenger" name="You">
	        <Message me>
	          
	        </Message>

	        <Message me>
	          <h3>It's me.</h3>
	        </Message>

	        <Message>
	          <p>Me?</p><br /><br />
	          <strong>You</strong> can't be <em>me</em>.
	        </Message>

	        <Message style={{ background: 'gold', color: 'black' }}>
	          <h1>Who am I in this situation?</h1>
	        </Message>

	        <Message me>
	          <p>
	            You tell me.
	          </p>
	        </Message>

	        <Message>
	          <p>Does anyone else find this a bit annoying?</p>
	        </Message>

	        <Message>
	          <p>I bet <strong>you</strong> do.</p>
	        </Message>

	        <Message me>
	          <h2>How about an h2?</h2>
	          <h1>These look the same no.</h1>
	        </Message>

	        <Message>
	          <h1>What does this look like</h1>
	        </Message>
	        <Message me>
	          <p>Hello</p>
	        </Message>

	        <Message>
	          <p>It's me</p>
	        </Message>

	        <Message>
	          <h1>What does this look like</h1>
	        </Message>

	        <Message>
	          <p>
	            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
	          </p>
	        </Message>

	        <Message me>
	          <h1>What does this look like</h1>
	        </Message>

	        <Message>
	          <h1>What does this look like</h1>
	        </Message>
	        <Message me>
	          <p>Hello</p>
	        </Message>

	        <Message>
	          <p>It's me</p>
	        </Message>

	        <Message>
	          <h1>What does this look like</h1>
	        </Message>

	        <Message>
	          <p>
	            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj
	          </p>
	        </Message>

	        <Message me>
	          <h1>What does this look f</h1>
	        </Message>

	      </Messenger>

	    </Phone>
	*/

	module.exports = exports['default'];

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  --aspect-ratio: 2;\n  --phone-height: 90vh;\n  --phone-button-height: 5vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin: 30px auto;\n  background: #000;\n  border: 3px solid #999;\n  height: var(--phone-height, 90vh);\n  width: calc(var(--phone-height, 90vh) / var(--aspect-ratio, 2));\n  max-height: 900px\n  max-width: calc(900px / var(--aspect-ratio, 2));;\n  border-radius: 5vmin;\n  padding: 0 2%;\n  box-shadow: 0 0 30px;\n\n  transition: width 0.5s 0.1s, height 0.5s 0.3s;\n\n.phone-screen {\n  background: white;\n  flex-grow: 1;\n  width: 100%;\n  height: 0;\n}\n\n.phone-speaker {\n  width: 20%;\n  height: 1%;\n  background: #444;\n  border-radius: 10%;\n  margin: 5vmin auto;\n}\n\n.phone-button {\n  background: #222;\n  border-radius: 50%;\n  width: var(--phone-button-height, 5vh);\n  height: var(--phone-button-height, 5vh);\n  margin: 3vmin auto;\n  display: block;\n}\n.phone-button:focus {\n  outline: none;\n}\n'], ['\n  --aspect-ratio: 2;\n  --phone-height: 90vh;\n  --phone-button-height: 5vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin: 30px auto;\n  background: #000;\n  border: 3px solid #999;\n  height: var(--phone-height, 90vh);\n  width: calc(var(--phone-height, 90vh) / var(--aspect-ratio, 2));\n  max-height: 900px\n  max-width: calc(900px / var(--aspect-ratio, 2));;\n  border-radius: 5vmin;\n  padding: 0 2%;\n  box-shadow: 0 0 30px;\n\n  transition: width 0.5s 0.1s, height 0.5s 0.3s;\n\n.phone-screen {\n  background: white;\n  flex-grow: 1;\n  width: 100%;\n  height: 0;\n}\n\n.phone-speaker {\n  width: 20%;\n  height: 1%;\n  background: #444;\n  border-radius: 10%;\n  margin: 5vmin auto;\n}\n\n.phone-button {\n  background: #222;\n  border-radius: 50%;\n  width: var(--phone-button-height, 5vh);\n  height: var(--phone-button-height, 5vh);\n  margin: 3vmin auto;\n  display: block;\n}\n.phone-button:focus {\n  outline: none;\n}\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _Message = __webpack_require__(146);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	var _Messenger = __webpack_require__(147);
	
	var _Messenger2 = _interopRequireDefault(_Messenger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Div = _styledComponents2.default.div(_templateObject);
	
	var Phone = function Phone(_ref) {
	  var messages = _ref.messages,
	      vertical = _ref.vertical,
	      _ref$name = _ref.name,
	      name = _ref$name === undefined ? 'you' : _ref$name,
	      _ref$style = _ref.style,
	      style = _ref$style === undefined ? {} : _ref$style;
	  return _react2.default.createElement(
	    Div,
	    { style: style },
	    _react2.default.createElement('div', { className: 'phone-speaker' }),
	    _react2.default.createElement(
	      'div',
	      { className: 'phone-screen' },
	      _react2.default.createElement(
	        _Messenger2.default,
	        { className: 'messenger', name: name },
	        messages.map(function (message) {
	          return _react2.default.createElement(_Message2.default, {
	            me: message.me,
	            key: message.value,
	            value: message.value,
	            style: message.style
	          });
	        })
	      )
	    ),
	    _react2.default.createElement('button', {
	      className: 'phone-button',
	      onClick: function onClick() {
	        return smoothScrollTo(document.querySelector('.messenger-body'), 0);
	      }
	    })
	  );
	};
	
	function smoothScrollTo(node, scrollTo) {
	  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { duration: 300 },
	      _ref2$duration = _ref2.duration,
	      duration = _ref2$duration === undefined ? 300 : _ref2$duration;
	
	  if (node) {
	    var scrollFrom = node.scrollTop;
	    var scrollDist = scrollTo - scrollFrom;
	
	    var startTime = null;
	    var lastScrollTop = node.scrollTop + 10; // just set it to something not equal to node.scrollTop
	
	    var scroll = function scroll(timestamp) {
	      if (!startTime) {
	        startTime = timestamp;
	      }
	
	      var dt = timestamp - startTime;
	
	      // eslint-disable-next-line no-param-reassign
	      node.scrollTop = scrollFrom + scrollDist * dt / duration;
	
	      // if scrolling stopped, quit the loop
	      if (Math.abs(node.scrollTop - scrollTo) > 1 && node.scrollTop !== lastScrollTop) {
	        window.requestAnimationFrame(scroll);
	        lastScrollTop = node.scrollTop;
	      }
	    };
	
	    window.requestAnimationFrame(scroll);
	  }
	}
	
	exports.default = Phone;
	module.exports = exports['default'];

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  background: firebrick;\n  border-radius: 3px;\n  padding: 5px;\n  color: white;\n  opacity: 0.95;\n  z-index: 1;\n'], ['\n  position: absolute;\n  background: firebrick;\n  border-radius: 3px;\n  padding: 5px;\n  color: white;\n  opacity: 0.95;\n  z-index: 1;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Span = _styledComponents2.default.span(_templateObject);
	var Popup = function Popup(_ref) {
	  var children = _ref.children,
	      _ref$additionalStyles = _ref.additionalStyles,
	      additionalStyles = _ref$additionalStyles === undefined ? {} : _ref$additionalStyles;
	  return _react2.default.createElement(
	    Span,
	    { style: additionalStyles },
	    children
	  );
	};
	
	exports.default = Popup;
	module.exports = exports['default'];

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 5px;\n  position: relative;\n'], ['\n  padding: 5px;\n  position: relative;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(9);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _whoa = __webpack_require__(77);
	
	var _whoa2 = _interopRequireDefault(_whoa);
	
	var _SideBar = __webpack_require__(76);
	
	var _SideBar2 = _interopRequireDefault(_SideBar);
	
	var _WithToggle = __webpack_require__(50);
	
	var _WithToggle2 = _interopRequireDefault(_WithToggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Article = _styledComponents2.default.article(_templateObject);
	
	function callNative(val) {
	  try {
	    webkit.messageHandlers.callbackHandler.postMessage(val);
	  } catch (err) {
	    console.log('The native context does not exist.');
	  }
	}
	
	var PostBody = function (_React$Component) {
	  _inherits(PostBody, _React$Component);
	
	  function PostBody() {
	    _classCallCheck(this, PostBody);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  // shouldComponentUpdate() {
	  //   return false;
	  // }
	
	  PostBody.prototype.componentDidMount = function componentDidMount() {
	    window.redBody = function () {
	      document.body.style.background = 'palevioletred';
	    };
	
	    var options = {
	      root: document.querySelector('#scrollArea'),
	      rootMargin: '0px',
	      threshold: 1.0
	    };
	
	    if (window.IntersectionObserver) {
	      var observer = new IntersectionObserver(callNative, options);
	      observer.observe(document.body);
	    } else {
	      window.addEventListener('scroll', function (evt) {
	        return callNative(document.body.scrollTop);
	      });
	    }
	  };
	
	  PostBody.prototype.componentDidCatch = function componentDidCatch() {
	    debugger;
	  };
	
	  /** ⚠️🔮 when I can use fragments (once Gatsby version of react (or react-next) has been updated, or maybe JSX or idk, babel for gatsby i thinkss, I should use fragment*/
	
	
	  PostBody.prototype.render = function render() {
	    return _react2.default.createElement(
	      _react2.default.Fragment,
	      null,
	      this.props.children
	    );
	  };
	
	  return PostBody;
	}(_react2.default.Component);
	
	// const PostWithToggle = WithToggle('sideBarVisible')(Post);
	
	exports.default = PostBody;
	module.exports = exports['default'];

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  grid-column: 2;\n\n  .inner-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n  }\n\n  h1 {\n    color: firebrick;\n    margin-bottom: 0.25em;\n    font-size: 2em;\n  }\n\n  p {\n    align-self: flex-end;\n    font-family: monospace;\n    color: #888;\n    font-size: 0.9em;\n  }\n\n  &.left-aligned {\n    margin: unset;;\n    justify-content: unset;\n\n    .inner-title {\n      align-items: unset;\n      margin: unset;\n    }\n  }\n'], ['\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  grid-column: 2;\n\n  .inner-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n  }\n\n  h1 {\n    color: firebrick;\n    margin-bottom: 0.25em;\n    font-size: 2em;\n  }\n\n  p {\n    align-self: flex-end;\n    font-family: monospace;\n    color: #888;\n    font-size: 0.9em;\n  }\n\n  &.left-aligned {\n    margin: unset;;\n    justify-content: unset;\n\n    .inner-title {\n      align-items: unset;\n      margin: unset;\n    }\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var OuterDiv = _styledComponents2.default.div(_templateObject);
	
	var PostHeading = function PostHeading(_ref) {
	  var children = _ref.children,
	      date = _ref.date,
	      className = _ref.className;
	  return _react2.default.createElement(
	    OuterDiv,
	    { className: 'outer-title' + (className ? ' ' + className : '') },
	    _react2.default.createElement(
	      'div',
	      { className: 'inner-title' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        children()
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        date
	      )
	    )
	  );
	};
	
	exports.default = PostHeading;
	module.exports = exports['default'];

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 300px;\n  max-width: 300px;\n  background: #fafafa;\n  left: 0;\n  transition: left ', 's;\n  border-right: 1px solid #ededed;\n  margin-right: 5px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  justify-content: flex-start;\n\n  .arrow-container {\n    position: sticky;\n    bottom: 0;\n    text-align: center;\n    background: #fafafa;\n    border-top: 1px solid #ccc;\n     {\n      /*display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex-grow: 1;*/\n    }\n  }\n  .arrow {\n    border: 0;\n    margin: 50px auto;\n    padding: 0;\n    height: 50px;\n    width: 60%;\n    position: relative;\n    transform-origin: center center;\n    transform: scale(0.5);\n    background: #ccc;\n    cursor: pointer;\n  }\n\n  .arrow::before {\n    content: \'\';\n    /* background: #ccc; */\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: -25px;\n    left: -20%;\n    border-right: 50px solid #ccc;\n    border-top: 50px solid transparent;\n    border-bottom: 50px solid transparent;\n    cursor: pointer;\n  }\n\n  .arrow:focus {\n    outline: 0;\n  }\n\n  .arrow:hover {\n    background: darkgray;\n  }\n  .arrow:hover::before {\n    border-right-color: darkgray;\n  }\n'], ['\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 300px;\n  max-width: 300px;\n  background: #fafafa;\n  left: 0;\n  transition: left ', 's;\n  border-right: 1px solid #ededed;\n  margin-right: 5px;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  justify-content: flex-start;\n\n  .arrow-container {\n    position: sticky;\n    bottom: 0;\n    text-align: center;\n    background: #fafafa;\n    border-top: 1px solid #ccc;\n     {\n      /*display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex-grow: 1;*/\n    }\n  }\n  .arrow {\n    border: 0;\n    margin: 50px auto;\n    padding: 0;\n    height: 50px;\n    width: 60%;\n    position: relative;\n    transform-origin: center center;\n    transform: scale(0.5);\n    background: #ccc;\n    cursor: pointer;\n  }\n\n  .arrow::before {\n    content: \'\';\n    /* background: #ccc; */\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: -25px;\n    left: -20%;\n    border-right: 50px solid #ccc;\n    border-top: 50px solid transparent;\n    border-bottom: 50px solid transparent;\n    cursor: pointer;\n  }\n\n  .arrow:focus {\n    outline: 0;\n  }\n\n  .arrow:hover {\n    background: darkgray;\n  }\n  .arrow:hover::before {\n    border-right-color: darkgray;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _NormativesList = __webpack_require__(159);
	
	var _NormativesList2 = _interopRequireDefault(_NormativesList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var sideBarTransitionTime = 0.5;
	
	var Div = _styledComponents2.default.div(_templateObject, sideBarTransitionTime);
	
	var SideBar = function SideBar(_ref) {
	  var sideBarVisible = _ref.sideBarVisible,
	      toggleSideBar = _ref.toggleSideBar;
	  return _react2.default.createElement(
	    Div,
	    { style: { left: sideBarVisible ? '0px' : '-300px' } },
	    _react2.default.createElement(_NormativesList2.default, null),
	    _react2.default.createElement(
	      'div',
	      { className: 'arrow-container' },
	      _react2.default.createElement('button', {
	        className: 'arrow',
	        onClick: function onClick() {
	          toggleSideBar(true);
	        }
	      })
	    )
	  );
	};
	
	exports.default = SideBar;
	module.exports = exports['default'];

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Section = undefined;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  left: 300px;\n  transition: width 0.5s, left 0.5s;\n  font-size: 1em;\n\n  .full-width-grid {\n    display: grid;\n    grid-template-columns: minmax(10px, 1fr) repeat(4, minmax(3em, 12.5em)) minmax(\n        10px,\n        1fr\n      );\n\n    * {\n      grid-column: 2 / span 4;\n    }\n  }\n\n  a {\n    color: #0066c0;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n\n    &:visited {\n      color: rebeccapurple;\n    }\n  }\n\n  blockquote {\n    border-left: 3px solid #444;\n    border-top: 3px solid #fff;\n    border-bottom: 3px solid #fff;\n    box-shadow: -3px 0 0 aquamarine, -6px 0 0 lightcoral, -9px 0 0 lemonchiffon;\n    padding: 0.5em;\n    padding-left: 1.5em;\n    margin: 1em;\n    background: #fafafa;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2,\n  h3 {\n    margin-bottom: 0.5em;\n  }\n\n  p {\n    margin-top: 0;\n    line-height: 1.75em;\n    vertical-align: middle;\n  }\n\n  ul p {\n    margin: 0;\n  }\n\n  del {\n    color: salmon;\n    position: relative;\n    display: inline-block;\n    &::after {\n      content: \'\';\n      position: absolute;\n      left: -5%;\n      top: -10%;\n      width: 110%;\n      height: 120%;\n      background: #ff8a8a;\n      box-shadow: 0px -1px 20px 3px lightsalmon,\n        inset 0px 2px 5px 3px palevioletred;\n      mix-blend-mode: multiply;\n    }\n  }\n'], ['\n  position: relative;\n  left: 300px;\n  transition: width 0.5s, left 0.5s;\n  font-size: 1em;\n\n  .full-width-grid {\n    display: grid;\n    grid-template-columns: minmax(10px, 1fr) repeat(4, minmax(3em, 12.5em)) minmax(\n        10px,\n        1fr\n      );\n\n    * {\n      grid-column: 2 / span 4;\n    }\n  }\n\n  a {\n    color: #0066c0;\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n\n    &:visited {\n      color: rebeccapurple;\n    }\n  }\n\n  blockquote {\n    border-left: 3px solid #444;\n    border-top: 3px solid #fff;\n    border-bottom: 3px solid #fff;\n    box-shadow: -3px 0 0 aquamarine, -6px 0 0 lightcoral, -9px 0 0 lemonchiffon;\n    padding: 0.5em;\n    padding-left: 1.5em;\n    margin: 1em;\n    background: #fafafa;\n\n    p {\n      margin: 0;\n    }\n  }\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  h2,\n  h3 {\n    margin-bottom: 0.5em;\n  }\n\n  p {\n    margin-top: 0;\n    line-height: 1.75em;\n    vertical-align: middle;\n  }\n\n  ul p {\n    margin: 0;\n  }\n\n  del {\n    color: salmon;\n    position: relative;\n    display: inline-block;\n    &::after {\n      content: \'\';\n      position: absolute;\n      left: -5%;\n      top: -10%;\n      width: 110%;\n      height: 120%;\n      background: #ff8a8a;\n      box-shadow: 0px -1px 20px 3px lightsalmon,\n        inset 0px 2px 5px 3px palevioletred;\n      mix-blend-mode: multiply;\n    }\n  }\n']);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _colors = __webpack_require__(25);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var makeElement = function makeElement(nodeType) {
	  return _styledComponents2.default[nodeType](_templateObject);
	};
	
	var Main = makeElement('main');
	var Section = exports.Section = makeElement('section');
	
	exports.default = Main;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WithEventListeners = function (_Component) {
	  _inherits(WithEventListeners, _Component);
	
	  // 🤔 should event listeners be bound in componentDidMount or constructor?
	  // I think constructor? But what if DOM element doesn't yet exist...
	  // see https://reactjs.org/docs/react-component.html#constructor
	  function WithEventListeners(props) {
	    _classCallCheck(this, WithEventListeners);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    props.eventListeners && props.eventListeners.forEach(function (_ref) {
	      var evt = _ref[0],
	          func = _ref[1];
	
	      if (props.node) props.node.addEventListener(evt, func);
	    });
	    return _this;
	  }
	
	  WithEventListeners.prototype.componentWillUnmount = function componentWillUnmount() {
	    var _this2 = this;
	
	    this.props.eventListeners.forEach(function (_ref2) {
	      var evt = _ref2[0],
	          func = _ref2[1];
	
	      _this2.props.node.removeEventListener(evt, func);
	    });
	  };
	
	  WithEventListeners.prototype.render = function render() {
	    return this.props.children();
	  };
	
	  return WithEventListeners;
	}(_react.Component);
	
	WithEventListeners.defaultProps = {
	  node: typeof document !== 'undefined' ? document : undefined
	};
	
	exports.default = WithEventListeners;
	module.exports = exports['default'];

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _recompose = __webpack_require__(32);
	
	var WithToggle = function WithToggle(toggleProp) {
	  return (0, _recompose.compose)((0, _recompose.withReducer)(toggleProp, 'dispatch', function (state, action) {
	    switch (action.type) {
	      case 'SHOW':
	        return true;
	      case 'HIDE':
	        return false;
	      default:
	        return false;
	    }
	  }), (0, _recompose.withHandlers)({
	    show: function show(_ref) {
	      var dispatch = _ref.dispatch;
	      return function (event) {
	        dispatch({ type: 'SHOW' });
	      };
	    },
	    hide: function hide(_ref2) {
	      var dispatch = _ref2.dispatch;
	      return function (event) {
	        dispatch({ type: 'HIDE' });
	      };
	    },
	    toggle: function toggle(_ref3) {
	      var dispatch = _ref3.dispatch;
	      return function (toggledOn) {
	        toggledOn ? dispatch({ type: 'HIDE' }) : dispatch({ type: 'SHOW' });
	      };
	    }
	  }));
	}; /**
	    * HOC
	    */
	
	exports.default = WithToggle;
	module.exports = exports['default'];

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  background: #f6f8fa;\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 0.9rem;\n'], ['\n  background: #f6f8fa;\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 0.9rem;\n']),
	    _templateObject2 = _taggedTemplateLiteralLoose(['\n  padding: 1rem;\n  background: #333;\n  code {\n    color: yellow;\n  }\n'], ['\n  padding: 1rem;\n  background: #333;\n  code {\n    color: yellow;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                          *
	                                                                                          * Code
	                                                                                          *
	                                                                                          */
	
	var InlineCode = _styledComponents2.default.code(_templateObject);
	
	var BlockCode = _styledComponents2.default.pre(_templateObject2);
	
	function Code(_ref) {
	  var value = _ref.value,
	      _ref$inline = _ref.inline,
	      inline = _ref$inline === undefined ? false : _ref$inline,
	      props = _objectWithoutProperties(_ref, ['value', 'inline']);
	
	  return inline ? _react2.default.createElement(
	    InlineCode,
	    null,
	    _react2.default.createElement(
	      InlineCode,
	      null,
	      value
	    )
	  ) : _react2.default.createElement(
	    BlockCode,
	    null,
	    _react2.default.createElement(
	      'code',
	      null,
	      value
	    )
	  );
	}
	
	exports.default = Code;
	module.exports = exports['default'];

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  & {\n    * {\n      ', ';\n    }\n  }\n'], ['\n  & {\n    * {\n      ', ';\n    }\n  }\n']);
	
	var _shortid = __webpack_require__(10);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _jsYaml = __webpack_require__(203);
	
	var _jsYaml2 = _interopRequireDefault(_jsYaml);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _WordChoice = __webpack_require__(168);
	
	var _WordChoice2 = _interopRequireDefault(_WordChoice);
	
	var _Ellipsis = __webpack_require__(156);
	
	var _Ellipsis2 = _interopRequireDefault(_Ellipsis);
	
	var _Tangent = __webpack_require__(164);
	
	var _Tangent2 = _interopRequireDefault(_Tangent);
	
	var _Normative = __webpack_require__(158);
	
	var _Normative2 = _interopRequireDefault(_Normative);
	
	var _Redaction = __webpack_require__(160);
	
	var _Redaction2 = _interopRequireDefault(_Redaction);
	
	var _Revision = __webpack_require__(161);
	
	var _Revision2 = _interopRequireDefault(_Revision);
	
	var _Code = __webpack_require__(155);
	
	var _Code2 = _interopRequireDefault(_Code);
	
	var _Search = __webpack_require__(162);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	var _Image = __webpack_require__(157);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _Sic = __webpack_require__(163);
	
	var _Sic2 = _interopRequireDefault(_Sic);
	
	var _TimeLapse = __webpack_require__(166);
	
	var _TimeLapse2 = _interopRequireDefault(_TimeLapse);
	
	var _TrelloCard = __webpack_require__(167);
	
	var _TrelloCard2 = _interopRequireDefault(_TrelloCard);
	
	var _CycleItems = __webpack_require__(75);
	
	var _CycleItems2 = _interopRequireDefault(_CycleItems);
	
	var _Definition = __webpack_require__(143);
	
	var _Definition2 = _interopRequireDefault(_Definition);
	
	var _Phone = __webpack_require__(148);
	
	var _Phone2 = _interopRequireDefault(_Phone);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                           *
	                                                                                           * Element
	                                                                                           *
	                                                                                           * Element must receive an object with prop type.
	                                                                                           * It will also usually have children, unless teh type is an image, or text?
	                                                                                           * There may be other props
	                                                                                           */
	
	// import FlambeLogo from 'flambe-logo';
	
	// 🔮 should maybe dynamically load components that aren't core Whoa on a per-use basis
	
	
	var customComponents = {
	  CycleItems: _CycleItems2.default,
	  Definition: _Definition2.default,
	  Phone: _Phone2.default
	};
	
	var ScopedStyle = _styledComponents2.default.style(_templateObject, function (_ref) {
	  var str = _ref.str;
	  return str;
	});
	
	function Element(_ref2) {
	  var type = _ref2.type,
	      children = _ref2.children,
	      props = _objectWithoutProperties(_ref2, ['type', 'children']);
	
	  if (typeof type !== 'string') {
	    console.log('type, children, props', type, children, props);
	    console.error('WHOA! type of element was not a string');
	    debugger;
	  }
	
	  var Tag = void 0,
	      href = void 0,
	      src = void 0,
	      alt = void 0;
	
	  var elementProps = {
	    // style: { transform: `translatex(${Math.random() * 50 - 5}px)` },
	  };
	
	  switch (type) {
	    case 'wordChoice':
	      Tag = _WordChoice2.default;
	      break;
	
	    case 'ellipsis':
	      Tag = _Ellipsis2.default;
	      break;
	
	    case 'tangent':
	      Tag = _Tangent2.default;
	      break;
	
	    case 'search':
	      Tag = _Search2.default;
	      break;
	
	    case 'normative':
	      Tag = _Normative2.default;
	      elementProps.id = props.id;
	      break;
	
	    case 'redaction':
	      Tag = _Redaction2.default;
	      break;
	
	    case 'revision':
	      Tag = _Revision2.default;
	      break;
	
	    case 'timeLapse':
	      Tag = _TimeLapse2.default;
	      break;
	    /* 🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝
	     * Custom Elements Above
	     * 🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝🔝
	     **/
	
	    case 'heading':
	      Tag = 'h' + props.depth;
	      break;
	
	    case 'paragraph':
	      Tag = 'p';
	
	      /** 💁 This is how I am allowing image elements to span the full page width */
	      if (children.length === 1 && children[0].type === 'image') {
	        elementProps.style = { gridColumn: '1 / span 6' };
	      }
	      break;
	
	    case 'text':
	      return _react2.default.createElement(
	        'span',
	        null,
	        props.value
	      );
	      break;
	
	    case 'inlineCode':
	      return _react2.default.createElement(_Code2.default, { inline: true, value: props.value });
	
	    case 'code':
	      if (props.lang === 'style') {
	        debugger;
	        return;
	      }
	      return _react2.default.createElement(_Code2.default, { value: props.value });
	
	    case 'delete':
	      Tag = 'del';
	      break;
	
	    case 'strong':
	      Tag = 'strong';
	      break;
	
	    case 'emphasis':
	      Tag = 'em';
	      break;
	
	    case 'blockquote':
	      Tag = 'blockquote';
	      break;
	
	    case 'style':
	      /* ⚠️ DO THIS bETTER */
	      return _react2.default.createElement(
	        ScopedStyle,
	        { str: props.value },
	        '}'
	      );
	
	    case 'link':
	
	    case 'linkReference':
	      if (children[0] && children[0].value === 'sic') return _react2.default.createElement(_Sic2.default, null);
	      Tag = 'a';
	      elementProps.href = props.url;
	      break;
	    // TODO when you do images, make sure I am doing images right here.
	
	    case 'imageReference':
	
	    case 'image':
	      Tag = 'img';
	      return props.url.includes('https://trello.com') ? _react2.default.createElement(_TrelloCard2.default, { src: props.src || props.url, alt: props.alt }) : _react2.default.createElement(_Image2.default, {
	        src: props.src || props.url,
	        blur: props.blur64,
	        width: props.width,
	        alt: props.alt
	      });
	      // elementProps.style = { maxWidth: '100%' };
	      // elementProps.src = props.src || props.url;
	      // elementProps.alt = props.alt;
	      break;
	
	    case 'list':
	      // elementProps.style = { display: 'inline' };
	      Tag = props.ordered ? 'ol' : 'ul';
	      break;
	
	    case 'listItem':
	      Tag = 'li';
	      break;
	
	    case 'thematicBreak':
	      return _react2.default.createElement('hr', null);
	
	    case 'root':
	      Tag = 'div';
	      break;
	
	    case 'html':
	      /* ⚠️ this isn't a foolproof regex. Like it prevents using "less than" in a css attribute. */
	      var match = props.value.match(/<style>([^<]*)<\/style>/m);
	      if (props.value.includes('<style>')) {
	        console.log('match', match);
	        console.log('props.value', props.value);
	      }
	      if (match) {
	        return _react2.default.createElement(ScopedStyle, { str: match[1] });
	      }
	      return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: props.value } });
	
	    case 'yaml':
	      return null;
	
	    case 'component':
	      console.log('props.value', props.value);
	
	      var _yaml$load = _jsYaml2.default.load(props.value),
	          compTag = _yaml$load.tag,
	          compProps = _yaml$load.props;
	
	      Tag = customComponents[compTag];
	      return _react2.default.createElement(Tag, compProps);
	
	    case 'span':
	      Tag = 'span';
	      break;
	
	    default:
	      Tag = 'span';
	      break;
	
	    // return null;
	  }
	
	  // somewhat hacky way to avoid putting a <form> in a <p>
	  if (children && children[0] && children[0].type === 'search') {
	    Tag = 'div';
	  }
	
	  return _react2.default.createElement(
	    Tag,
	    elementProps,
	    children && ChildrenElements(children, type)
	  );
	}
	
	function ChildrenElements(chunks, tag) {
	  if (chunks.value) {
	    return chunks.value;
	  } else if (Array.isArray(chunks)) {
	    /*
	    Normatives and Search and Redaction are an exception, they expect an array.
	    */
	    if (tag === 'normative' || tag === 'search' || tag === 'redaction' || tag === 'revision') {
	      return chunks;
	    }
	    return chunks.map(function (val) {
	      return val.type === 'text' ? val.value : _react2.default.createElement(
	        Element,
	        _extends({ key: _shortid2.default.generate(), type: val.type }, val),
	        val.children
	      );
	    });
	  } else if (chunks.type) {
	    return _react2.default.createElement(
	      Element,
	      _extends({ type: chunks.type }, chunks),
	      chunks.children
	    );
	  }
	  return ChildrenElements(chunks);
	}
	
	exports.default = Element;
	module.exports = exports['default'];

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Ellipsis(_ref) {
	  var children = _ref.children;
	
	  return _react2.default.createElement(
	    'span',
	    null,
	    '...ELLIPSIS'
	  );
	} /**
	   *
	   * Ellipsis
	   *
	   */
	
	exports.default = Ellipsis;
	module.exports = exports['default'];

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  text-align: center;\n\n  img {\n    max-width: 100%;\n    transition: 0.1s 1s;\n  }\n\n  .blur {\n    transition: opacity 0.5s 1s;\n    position: absolute;\n    z-index: 2;\n    pointer-events: none;\n  }\n'], ['\n  text-align: center;\n\n  img {\n    max-width: 100%;\n    transition: 0.1s 1s;\n  }\n\n  .blur {\n    transition: opacity 0.5s 1s;\n    position: absolute;\n    z-index: 2;\n    pointer-events: none;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                          *
	                                                                                          * Image
	                                                                                          *
	                                                                                          */
	
	var Wrapper = _styledComponents2.default.div(_templateObject);
	
	var Image = function (_React$Component) {
	  _inherits(Image, _React$Component);
	
	  function Image() {
	    _classCallCheck(this, Image);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    _this.state = {
	      showBlur: true
	    };
	    return _this;
	  }
	
	  Image.prototype.loadedImage = function loadedImage() {
	    this.setState({ showBlur: false });
	  };
	
	  Image.prototype.render = function render() {
	    var _this2 = this;
	
	    // don't do the blur thing with svgs, which are don't have a little blur thumbnail
	    if (this.props.src.match(/.*\.svg$/)) {
	      return _react2.default.createElement(
	        Wrapper,
	        null,
	        _react2.default.createElement('img', {
	          src: this.props.src,
	          alt: 'missing image \u2757 ' + (this.props.alt || this.props.src) + ' \u2757'
	        })
	      );
	    }
	
	    // if we have specified a size in the image url, use it
	    var visible = true;
	    if (this.props.blur) {
	      return _react2.default.createElement(
	        Wrapper,
	        {
	          style: {
	            maxWidth: '100%',
	            overflowY: 'hidden'
	          }
	        },
	        _react2.default.createElement('img', {
	          id: this.props.blur,
	          className: 'blur',
	          src: this.props.blur,
	          alt: 'missing image \u2757 ' + this.props.alt + ' \u2757',
	          style: {
	            width: this.props.width + 'px',
	            opacity: this.state.showBlur ? 1 : 0
	          }
	        }),
	        _react2.default.createElement('img', {
	          src: this.props.src,
	          alt: '\u2757 ' + (this.props.alt || this.props.src) + ' \u2757',
	          style: { opacity: this.state.showBlur ? 0 : 1 },
	          onLoad: function onLoad() {
	            _this2.loadedImage();
	          }
	        })
	      );
	    }
	
	    return _react2.default.createElement(
	      Wrapper,
	      null,
	      _react2.default.createElement('img', {
	        style: { maxWidth: '100%' },
	        src: this.props.src,
	        alt: '\u2757 ' + (this.props.alt || this.props.src) + ' \u2757'
	      })
	    );
	  };
	
	  return Image;
	}(_react2.default.Component);
	
	exports.default = Image;
	module.exports = exports['default'];

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Normative = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  transition: 0.5s;\n'], ['\n  transition: 0.5s;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(9);
	
	var _shortid = __webpack_require__(10);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _Element = __webpack_require__(27);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	var _plainText = __webpack_require__(51);
	
	var _plainText2 = _interopRequireDefault(_plainText);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                          *
	                                                                                          * Normative
	                                                                                          *
	                                                                                          * To be able to reference the normatives from an external list, we add an id to the inline normative.
	                                                                                          */
	
	var Span = _styledComponents2.default.span(_templateObject);
	
	function _addNormative(statement, id) {
	  return {
	    type: 'NORMATIVE_ADD',
	    statement: statement,
	    id: id
	  };
	}
	
	var Normative = exports.Normative = function (_Component) {
	  _inherits(Normative, _Component);
	
	  function Normative() {
	    _classCallCheck(this, Normative);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Normative.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    if (!this.props.normatives.find(function (normative) {
	      return normative.id === _this2.props.id;
	    })) this.props.addNormative((0, _plainText2.default)(this.props.children), this.props.id);
	  };
	
	  Normative.prototype.render = function render() {
	    var _this3 = this;
	
	    return _react2.default.createElement(
	      Span,
	      {
	        id: this.props.id,
	        ref: function ref(_ref) {
	          _this3.element = _ref;
	        }
	      },
	      this.props.children.map(function (child) {
	        return _react2.default.createElement(
	          _Element2.default,
	          _extends({ key: _shortid2.default.generate(), type: child.type }, child),
	          child.children
	        );
	      })
	    );
	  };
	
	  return Normative;
	}(_react.Component);
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    addNormative: function addNormative(statement, id) {
	      return dispatch(_addNormative(statement, id));
	    }
	  };
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return { normatives: state.whoa.normatives };
	}, mapDispatchToProps)(Normative);

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 0;\n  margin: 0;\n\n  a {\n    color: unset;\n    text-decoration: none;\n  }\n  li {\n    overflow-x: hidden;\n    padding: 10px 15px;\n    border-bottom: 1px solid #ededed;\n    cursor: pointer;\n  }\n  li:nth-last-of-type(1) {\n    border-bottom-color: #ccc;\n  }\n  li:hover {\n    background: ', ';\n  }\n'], ['\n  padding: 0;\n  margin: 0;\n\n  a {\n    color: unset;\n    text-decoration: none;\n  }\n  li {\n    overflow-x: hidden;\n    padding: 10px 15px;\n    border-bottom: 1px solid #ededed;\n    cursor: pointer;\n  }\n  li:nth-last-of-type(1) {\n    border-bottom-color: #ccc;\n  }\n  li:hover {\n    background: ', ';\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _recompose = __webpack_require__(32);
	
	var _reactRedux = __webpack_require__(9);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _scrollIntoView = __webpack_require__(262);
	
	var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);
	
	var _colors = __webpack_require__(25);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                           *
	                                                                                           * Normatives
	                                                                                           *
	                                                                                           */
	
	var UL = _styledComponents2.default.ul(_templateObject, _colors2.default.highlight);
	
	var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(function (state) {
	  return {
	    normatives: state.whoa.normatives,
	    currentPost: state.whoa.currentPost
	  };
	}), (0, _recompose.withHandlers)({
	  onMouseEnter: function onMouseEnter(dispatch) {
	    return function (id) {
	      var el = document.querySelector('#' + id);
	      if (el) el.style.background = _colors2.default.highlight;
	    };
	  },
	  onMouseLeave: function onMouseLeave(dispatch) {
	    return function (id) {
	      var el = document.querySelector('#' + id);
	      if (el) el.style.background = 'unset';
	    };
	  }
	}));
	
	var NormativesList = function NormativesList(_ref) {
	  var currentPost = _ref.currentPost,
	      normatives = _ref.normatives,
	      _onMouseEnter = _ref.onMouseEnter,
	      _onMouseLeave = _ref.onMouseLeave;
	  return _react2.default.createElement(
	    UL,
	    { className: 'offscreen' },
	    normatives && normatives.map(function (normative) {
	      return _react2.default.createElement(
	        'li',
	        {
	          key: normative.id,
	          onMouseEnter: function onMouseEnter() {
	            _onMouseEnter(normative.id);
	          },
	          onMouseLeave: function onMouseLeave() {
	            _onMouseLeave(normative.id);
	          },
	          onClick: function onClick() {
	            var toElement = document.getElementById(normative.id);
	            (0, _scrollIntoView2.default)(toElement, { time: 300 });
	          }
	        },
	        _react2.default.createElement(
	          'p',
	          null,
	          normative.statement
	        )
	      );
	    })
	  );
	};
	exports.default = enhance(NormativesList);
	module.exports = exports['default'];

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ';\n  transition: background-color 0.5s;\n\n  &:hover {\n    background: rgba(0,0,0,0.3);\n  }\n  \n  *::selection {\n    ', ';\n  }\n\n  &\n'], ['\n  ', ';\n  transition: background-color 0.5s;\n\n  &:hover {\n    background: rgba(0,0,0,0.3);\n  }\n  \n  *::selection {\n    ', ';\n  }\n\n  &\n']);
	
	var _shortid = __webpack_require__(10);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactRedux = __webpack_require__(9);
	
	var _Element = __webpack_require__(27);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                           * TODO hit the space bar or something to remove all redactions.
	                                                                                           */
	
	var Span = _styledComponents2.default.span(_templateObject, function (props) {
	  return props.redactionsVisible ? 'background: rgba(0,0,0,0.1)' : 'background: black';
	}, function (props) {
	  return props.redactionsVisible ? 'background: ``' : 'background: black;';
	});
	
	var Redaction = function Redaction(_ref) {
	  var children = _ref.children,
	      redactionsVisible = _ref.redactionsVisible;
	
	  return _react2.default.createElement(
	    Span,
	    { redactionsVisible: redactionsVisible },
	    children.map(function (child) {
	      return _react2.default.createElement(
	        _Element2.default,
	        _extends({ key: _shortid2.default.generate(), type: child.type }, child),
	        child.children
	      );
	    })
	  );
	};
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    redactionsVisible: state.whoa.redactionsVisible
	  };
	}, null)(Redaction);
	module.exports = exports['default'];

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  text-decoration: underline dashed rgba(255, 0, 0, 0.5);\n'], ['\n  text-decoration: underline dashed rgba(255, 0, 0, 0.5);\n']);
	
	var _shortid = __webpack_require__(10);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _Element = __webpack_require__(27);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	var _Popup = __webpack_require__(49);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _WithToggle = __webpack_require__(50);
	
	var _WithToggle2 = _interopRequireDefault(_WithToggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Span = _styledComponents2.default.span(_templateObject);
	
	var Revision = function Revision(_ref) {
	  var children = _ref.children,
	      popupOpen = _ref.popupOpen,
	      show = _ref.show,
	      hide = _ref.hide;
	
	  var length = children.length;
	
	  if (length === 1) {
	    return _react2.default.createElement(
	      Span,
	      null,
	      _react2.default.createElement(
	        _Element2.default,
	        _extends({ type: children[0].type }, children[0]),
	        children[0].children
	      )
	    );
	  }
	  return _react2.default.createElement(
	    Span,
	    {
	      className: 'revision',
	      onClick: function onClick() {
	        return popupOpen ? hide() : show();
	      },
	      onMouseEnter: show,
	      onMouseLeave: hide
	    },
	    _react2.default.createElement(
	      _Element2.default,
	      _extends({ type: children[0].type }, children[0]),
	      children[0].children
	    ),
	    popupOpen && _react2.default.createElement(
	      _Popup2.default,
	      null,
	      children[1]
	    )
	  );
	};
	
	exports.default = (0, _WithToggle2.default)('popupOpen')(Revision);
	module.exports = exports['default'];

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  font-family: arial, sans-serif;\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n  margin: 5px 0;\n  input {\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    outline: none;\n    font-size: 1em;\n    padding: 5px 0;\n    border: 0;\n\n    &:focus {\n      /** \u26A0\uFE0F if I want to do an animation, should use opacity */\n      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.16),\n        0 0 0 1px rgba(0, 0, 0, 0.08);\n    }\n  }\n'], ['\n  font-family: arial, sans-serif;\n  width: 100%;\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\n  margin: 5px 0;\n  input {\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    outline: none;\n    font-size: 1em;\n    padding: 5px 0;\n    border: 0;\n\n    &:focus {\n      /** \u26A0\uFE0F if I want to do an animation, should use opacity */\n      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.16),\n        0 0 0 1px rgba(0, 0, 0, 0.08);\n    }\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _plainText = __webpack_require__(51);
	
	var _plainText2 = _interopRequireDefault(_plainText);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                           *
	                                                                                           * Search
	                                                                                           *
	                                                                                           * Only accepts plain text. Should be a Block Level Element, despite how whoa-loader might be set up.
	                                                                                           */
	
	var Form = _styledComponents2.default.form(_templateObject);
	
	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);
	
	  function Search() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Search);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { textValue: '' }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Search.prototype.componentWillMount = function componentWillMount() {
	    this.setState({ textValue: (0, _plainText2.default)(this.props.children[0]) });
	  };
	
	  Search.prototype.onChange = function onChange(evt) {
	    evt.preventDefault();
	    this.setState({ textValue: evt.target.value });
	  };
	
	  Search.prototype.onSubmit = function onSubmit(evt) {
	    evt.preventDefault();
	    var searchString = 'https://www.google.com/search?q=' + this.state.textValue;
	
	    var strWindowFeatures = 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';
	
	    window.open(searchString, 'WindowName', strWindowFeatures);
	  };
	
	  Search.prototype.onFocus = function onFocus(evt) {
	    evt.target.parentElement.className += ' inFocus';
	  };
	
	  Search.prototype.onBlur = function onBlur(evt) {
	    evt.target.parentElement.className = evt.target.parentElement.className.replace(/\sinFocus/, '');
	  };
	
	  Search.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      Form,
	      {
	        onSubmit: function onSubmit(evt) {
	          _this2.onSubmit(evt);
	        },
	        action: ''
	      },
	      _react2.default.createElement('input', {
	        type: 'text',
	        value: this.state.textValue,
	        ref: function ref(input) {
	          _this2.textInput = input;
	        },
	        style: { maxWidth: '100%' }
	        // TODO this is hacky
	        , onChange: function onChange(evt) {
	          _this2.onChange(evt);
	        },
	        onFocus: this.onFocus,
	        onMouseEnter: this.onFocus,
	        onMouseLeave: this.onBlur,
	        onBlur: this.onBlur
	      })
	    );
	  };
	
	  return Search;
	}(_react2.default.Component);
	
	exports.default = Search;
	module.exports = exports['default'];

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  ', ';\n  opacity: 0.5;\n\n  &::before {\n    content: \'[\';\n  }\n\n  &::after {\n    content: \']\';\n  }\n\n  &::before,\n  &::after {\n    font-family: sans-serif;\n    font-style: normal;\n    transform: scaley(0.8);\n    display: inline-block;\n    transform-origin: 0 70%;\n  }\n'], ['\n  ', ';\n  opacity: 0.5;\n\n  &::before {\n    content: \'[\';\n  }\n\n  &::after {\n    content: \']\';\n  }\n\n  &::before,\n  &::after {\n    font-family: sans-serif;\n    font-style: normal;\n    transform: scaley(0.8);\n    display: inline-block;\n    transform-origin: 0 70%;\n  }\n']);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(78);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var StyledSic = _styledComponents2.default.span(_templateObject, _styles.italic);
	
	var Sic = function Sic() {
	  return _react2.default.createElement(
	    StyledSic,
	    null,
	    'sic'
	  );
	};
	
	exports.default = Sic;
	module.exports = exports['default'];

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline;\n  cursor: pointer;\n  svg {\n    position: absolute;\n    display: inline-block;\n    pointer-events: none;\n\n    text {\n      transform: translateY(1rem);\n      pointer-events: painted;\n    }\n    text:hover {\n      fill: steelblue;\n    }\n  }\n'], ['\n  display: inline;\n  cursor: pointer;\n  svg {\n    position: absolute;\n    display: inline-block;\n    pointer-events: none;\n\n    text {\n      transform: translateY(1rem);\n      pointer-events: painted;\n    }\n    text:hover {\n      fill: steelblue;\n    }\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shortid = __webpack_require__(10);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _reactRedux = __webpack_require__(9);
	
	var _recompose = __webpack_require__(32);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _WithToggle = __webpack_require__(50);
	
	var _WithToggle2 = _interopRequireDefault(_WithToggle);
	
	var _Popup = __webpack_require__(49);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _styles = __webpack_require__(165);
	
	var _plainText = __webpack_require__(51);
	
	var _plainText2 = _interopRequireDefault(_plainText);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                          *
	                                                                                          * Tangent
	                                                                                          *
	                                                                                          * A tangent (for now at least), can only contain plain text. This means no normatives, for now at least...
	                                                                                          * 
	                                                                                          * Gradients across such large svgs can be bad for performance, it appears. That is why I do not fade out
	                                                                                          */
	
	// import { sideBarTransitionTime } from '../../constants/styles'
	
	
	var sideBarTransitionTime = 0.5;
	
	var Span = _styledComponents2.default.span(_templateObject);
	
	var Tangent = function (_React$Component) {
	  _inherits(Tangent, _React$Component);
	
	  function Tangent(props) {
	    _classCallCheck(this, Tangent);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      straightLength: 300,
	      curveParameter: 200,
	      pinToRight: false, // set to true if the popup becomes too narrow
	      id: _shortid2.default.generate(),
	      innerText: (0, _plainText2.default)(props.children)
	    };
	    return _this;
	  }
	
	  // 🤯 none of this should be //ed out
	
	
	  Tangent.prototype.componentDidMount = function componentDidMount() {
	    // this._isMounted = true;
	    // this.onResize = this.calculatePath.bind(this);
	    window.addEventListener('resize', this.onResize);
	
	    // setTimeout(() => {
	    // this.calculatePath();
	    // }, 300);
	  };
	
	  Tangent.prototype.componentWillUnmount = function componentWillUnmount() {
	    window.removeEventListener('resize', this.onResize);
	  };
	
	  Tangent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    if (nextProps.sideBarVisible !== this.props.sideBarVisible) {
	      // recalculate tangent paths after the side bar has transitioned
	      setTimeout(function () {
	        _this2.calculatePath();
	      }, 1000 * Number(sideBarTransitionTime));
	    }
	  };
	
	  Tangent.prototype.calculatePath = function calculatePath() {
	    var svgLeft = this.svg && this.svg.getBoundingClientRect().left;
	    // TODO this is hacky-ish, could instead use a ref that is passed down down down. Actually maybe this is better
	    var postBody = document.querySelector('.full-width-grid') && document.querySelector('.full-width-grid').getBoundingClientRect();
	    var straightLength = postBody.right - svgLeft - 60;
	    if (straightLength < 0) {
	      straightLength = 0;
	    }
	
	    this.setState({
	      straightLength: straightLength > 0 ? straightLength : 0,
	      curveParameter: straightLength > 200 ? 200 : straightLength < 0 ? 0 : straightLength,
	      pinToRight: !(straightLength >= 200)
	    }, this.stateWasSet);
	  };
	
	  Tangent.prototype.stateWasSet = function stateWasSet() {
	    var textPathRect = this.textPath.getBoundingClientRect();
	    this.svg.setAttribute('width', textPathRect.width);
	    this.svg.setAttribute('height', textPathRect.height + 20);
	
	    var beyondPage = this.svg.getBoundingClientRect().right - document.documentElement.clientWidth;
	    console.log('beyondPage', beyondPage);
	    if (beyondPage > 0) {
	      // console.log('beyond page', beyondPage)
	      this.setState({
	        straightLength: this.state.straightLength - beyondPage - 15,
	        curveParameter: this.state.curveParameter - 1
	      }, this.stateWasSet);
	    } else {
	      // console.log('not beyond page')
	      // console.log(this.svg.getBoundingClientRect().right, document.documentElement.clientWidth)
	    }
	  };
	
	  Tangent.prototype.render = function render() {
	    var _this3 = this;
	
	    return _react2.default.createElement(
	      Span,
	      {
	        onClick: function onClick() {
	          return _this3.props.popupOpen ? _this3.props.hide() : _this3.props.show();
	        }
	      },
	      this.props.popupOpen && _react2.default.createElement(
	        _Popup2.default,
	        {
	          additionalStyles: _extends({
	            right: this.state.pinToRight ? 0 : 'unset'
	          }, _styles.popupStyle)
	        },
	        this.state.innerText
	      ),
	      '/*// \u26A0\uFE0F  \u26A0\uD83D\uDD2E \uFE0Fbe smarter about these things */',
	      _react2.default.createElement(
	        'svg',
	        {
	          width: this.state.straightLength + 250,
	          height: 500,
	          ref: function ref(_ref2) {
	            _this3.svg = _ref2;
	          }
	        },
	        _react2.default.createElement(
	          'defs',
	          null,
	          _react2.default.createElement('path', {
	            id: this.state.id,
	            d: 'M 0 0 \n                 l ' + this.state.straightLength + ' 0\n                 c ' + this.state.curveParameter + ' 0 ' + this.state.curveParameter + ' 0 ' + this.state.curveParameter + ' 200\n                 l 0 3000'
	          })
	        ),
	        _react2.default.createElement(
	          'text',
	          null,
	          _react2.default.createElement(
	            'textPath',
	            {
	              href: '#' + this.state.id,
	              ref: function ref(_ref) {
	                _this3.textPath = _ref;
	              }
	            },
	            this.state.innerText
	          )
	        )
	      ),
	      _react2.default.createElement('br', null)
	    );
	  };
	
	  return Tangent;
	}(_react2.default.Component);
	
	var enhance = (0, _recompose.compose)((0, _reactRedux.connect)(function (state) {
	  return { sideBarVisible: state.sideBarVisible };
	}), (0, _WithToggle2.default)('popupOpen'));
	
	exports.default = enhance(Tangent);
	module.exports = exports['default'];

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var popupStyle = exports.popupStyle = {
	  padding: '10px',
	  transform: 'translatey(1.5rem)',
	  opacity: '0.95',
	  background: 'steelblue',
	  maxWidth: '50%,'
	};

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  @font-face {\n    font-family: \'some time later\';\n    src: url(', ');\n  }\n\n  font-family: \'some time later\', fantasy;\n  font-size: 2em;\n  /* grid-column: 2 / span 4; */\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  padding: 1em;\n\n  p {\n    margin-bottom: 0;\n    transform: rotate(1deg);\n  }\n'], ['\n  @font-face {\n    font-family: \'some time later\';\n    src: url(', ');\n  }\n\n  font-family: \'some time later\', fantasy;\n  font-size: 2em;\n  /* grid-column: 2 / span 4; */\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  padding: 1em;\n\n  p {\n    margin-bottom: 0;\n    transform: rotate(1deg);\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _some_time_later = __webpack_require__(200);
	
	var _some_time_later2 = _interopRequireDefault(_some_time_later);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Div = _styledComponents2.default.div(_templateObject, _some_time_later2.default);
	
	var TimeLapse = function TimeLapse(_ref) {
	  var _ref$children = _ref.children,
	      children = _ref$children === undefined ? 'Some Time Later' : _ref$children;
	
	  return _react2.default.createElement(
	    Div,
	    null,
	    _react2.default.createElement(
	      'p',
	      null,
	      children
	    )
	  );
	};
	
	exports.default = TimeLapse;
	module.exports = exports['default'];

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TrelloCard = function (_Component) {
	  _inherits(TrelloCard, _Component);
	
	  function TrelloCard() {
	    _classCallCheck(this, TrelloCard);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  TrelloCard.prototype.componentWillMount = function componentWillMount() {
	    if (typeof document !== 'undefined') {
	      var script = document.createElement('script');
	      script.src = 'https://p.trellocdn.com/embed.min.js';
	      script.async = true;
	
	      document.body.appendChild(script);
	    }
	  };
	
	  TrelloCard.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { style: { textAlign: 'center' } },
	      _react2.default.createElement(
	        'blockquote',
	        { className: 'trello-card', __html: true },
	        _react2.default.createElement(
	          'a',
	          { href: this.props.src },
	          this.props.alt
	        )
	      )
	    );
	  };
	
	  return TrelloCard;
	}(_react.Component);
	
	exports.default = TrelloCard;
	module.exports = exports['default'];

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  position: relative;\n\n  &::before,\n  &::after {\n    opacity: 0.05;\n    display: block;\n    position: absolute;\n    font-size: 0.8rem;\n    line-height: 0.8rem;\n    z-index: -1;\n  }\n  &:hover::before,\n  &:hover::after {\n    opacity: 1;\n    background: rgba(255, 255, 255, 0.95);\n    z-index: 1;\n  }\n  &::before {\n    bottom: 80%;\n    content: attr(data-before);\n    /* transform: translateY(-180%); */\n  }\n  &::after {\n    content: attr(data-after);\n    top: 75%;\n    /* transform: translateY(-0.3rem); */\n  }\n'], ['\n  display: inline-block;\n  position: relative;\n\n  &::before,\n  &::after {\n    opacity: 0.05;\n    display: block;\n    position: absolute;\n    font-size: 0.8rem;\n    line-height: 0.8rem;\n    z-index: -1;\n  }\n  &:hover::before,\n  &:hover::after {\n    opacity: 1;\n    background: rgba(255, 255, 255, 0.95);\n    z-index: 1;\n  }\n  &::before {\n    bottom: 80%;\n    content: attr(data-before);\n    /* transform: translateY(-180%); */\n  }\n  &::after {\n    content: attr(data-after);\n    top: 75%;\n    /* transform: translateY(-0.3rem); */\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteralLoose(['\n  &::before {\n    position: absolute;\n    content: \'WC\';\n    z-index: -1;\n    opacity: 0.2;\n    color: lightblue;\n    font-size: 2rem;\n  }\n  &:hover::after {\n    ', ' content: \'\uD83D\uDC48 word choice\';\n    line-height: 1;\n    background: firebrick;\n  }\n'], ['\n  &::before {\n    position: absolute;\n    content: \'WC\';\n    z-index: -1;\n    opacity: 0.2;\n    color: lightblue;\n    font-size: 2rem;\n  }\n  &:hover::after {\n    ', ' content: \'\uD83D\uDC48 word choice\';\n    line-height: 1;\n    background: firebrick;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _Popup = __webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /**
	                                                                                           *
	                                                                                           * WordChoice
	                                                                                           *
	                                                                                           */
	
	/**
	 * 💁⚠️ Right now, word choice will only work for up to three words
	 */
	
	var Multiple = _styledComponents2.default.span(_templateObject);
	
	var Single = _styledComponents2.default.span(_templateObject2, _Popup.popupStyle);
	
	function noBreakingSpace() {
	  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	
	  return str.replace(/\s/, ' ');
	}
	
	function WordChoice(_ref) {
	  var children = _ref.children;
	
	  return children[1] ? _react2.default.createElement(
	    Multiple,
	    {
	      'data-before': noBreakingSpace(children[1]),
	      'data-after': noBreakingSpace(children[2])
	    },
	    children[0]
	  ) : _react2.default.createElement(
	    Single,
	    null,
	    children[0]
	  );
	}
	
	exports.default = WordChoice;
	module.exports = exports['default'];

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(3);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _shortid = __webpack_require__(10);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _Element = __webpack_require__(27);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Whoa = function (_Component) {
	  _inherits(Whoa, _Component);
	
	  function Whoa() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Whoa);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { hasError: false }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Whoa.prototype.componentDidCatch = function componentDidCatch(error, info) {
	    console.log('WHOA CAUGHT\uD83D\uDCA5', error, info);
	    this.setState({ hasError: true, error: { error: error, info: info } });
	  };
	
	  Whoa.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	    // const nextContent = nextProps.content || nextProps.children
	    // const currentContent = this.props.content || this.props.children
	    // if (nextContent.children.length === currentContent.children.length) {
	    //   return false
	    // }
	
	    // ⚠️ I don't think this is a good idea, but I was hitting a bug when I didn't do this, so this was quick fix to avoid bug, but probably stopping hot reloading, at the least. Buuuut, it might actually be what I want to do really because I don't want to reparse the whole AST, which this does.
	    return false;
	  };
	
	  Whoa.prototype.render = function render() {
	    return this.state.hasError ? _react2.default.createElement(
	      'h1',
	      null,
	      JSON.stringify(this.state.error)
	    ) : _react2.default.createElement(
	      _react.Fragment,
	      null,
	      this.props.children().slice(3) /* 💁 this slices off the frontmatter */
	      .map(function (child) {
	        return _react2.default.createElement(_Element2.default, _extends({ key: _shortid2.default.generate() }, child));
	      })
	    );
	  };
	
	  return Whoa;
	}(_react.Component);
	
	exports.default = Whoa;
	module.exports = exports['default'];

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/** 🔮 might want to have this stored in redux store for theming... but also keep in mind css custom properties... maybe redux would set the custom properties... to persist user preference */
	exports.default = {
	  accent1: 'firebrick',
	  highlight: '#fbf99a',
	  link: '#0066c0'
	};
	module.exports = exports['default'];

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _actions = __webpack_require__(79);
	
	exports.default = [{ action: _actions.REDACTIONS_SHOW, copy: 'show redactions 🕵' }, { action: _actions.REDACTIONS_HIDE, copy: 'hide redactions 🕵' }];
	module.exports = exports['default'];

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var italic = exports.italic = "\nfont-family: 'mr-eaves-sans', 'mr-eaves-modern', cursive;\nfont-style: italic;";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/some_time_later.f879fdba.otf";

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCAzNSA1MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPkdyb3VwPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB1c2luZyBGaWdtYTwvZGVzYz4KPGcgaWQ9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAyIDgwOCkiPgo8ZyBpZD0iR3JvdXAiPgo8ZyBpZD0iUmVjdGFuZ2xlIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMiAtODA4KSIgZmlsbD0iI0ZGRkFEQSIvPgo8bWFzayBpZD0ibWFzazBfb3V0bGluZV9pbnMiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMF9maWxsIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMiAtODA4KSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfb3V0bGluZV9pbnMpIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDFfc3Ryb2tlXzJ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyIC04MDgpIi8+CjwvZz4KPC9nPgo8ZyBpZD0iUmVjdGFuZ2xlIDIiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMl9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAwIC03OTMpIiBmaWxsPSIjQTNDN0ZGIi8+CjwvZz4KPGcgaWQ9IlJlY3RhbmdsZSAyLjEyIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMCAtNzk2KSIgZmlsbD0iI0EzQzdGRiIvPgo8L2c+CjxnIGlkPSJSZWN0YW5nbGUgMi40Ij4KPHVzZSB4bGluazpocmVmPSIjcGF0aDNfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMiAtODA4KSIgZmlsbD0iIzYzM0MxOSIvPgo8L2c+CjxnIGlkPSJSZWN0YW5nbGUgMi4xIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMCAtNzg5LjkxNSkiIGZpbGw9IiNBM0M3RkYiLz4KPC9nPgo8ZyBpZD0iUmVjdGFuZ2xlIDIuMiI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgyX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAgLTc4Ni44MzEpIiBmaWxsPSIjQTNDN0ZGIi8+CjwvZz4KPGcgaWQ9IlJlY3RhbmdsZSAyLjMiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMl9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAwIC03ODMuNzQ2KSIgZmlsbD0iI0EzQzdGRiIvPgo8L2c+CjxnIGlkPSJSZWN0YW5nbGUgMi41Ij4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMCAtNzgwLjk3KSIgZmlsbD0iI0EzQzdGRiIvPgo8L2c+CjxnIGlkPSJSZWN0YW5nbGUgMi42Ij4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMCAtNzc3Ljg4NikiIGZpbGw9IiNBM0M3RkYiLz4KPC9nPgo8ZyBpZD0iUmVjdGFuZ2xlIDIuNyI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgyX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAgLTc3NC44MDEpIiBmaWxsPSIjQTNDN0ZGIi8+CjwvZz4KPGcgaWQ9IlJlY3RhbmdsZSAyLjgiPgo8dXNlIHhsaW5rOmhyZWY9IiNwYXRoMl9maWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAwIC03NzEuNzE2KSIgZmlsbD0iI0EzQzdGRiIvPgo8L2c+CjxnIGlkPSJSZWN0YW5nbGUgMi45Ij4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMCAtNzY4Ljk0KSIgZmlsbD0iI0EzQzdGRiIvPgo8L2c+CjxnIGlkPSJSZWN0YW5nbGUgMi4xMCI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGgyX2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAgLTc2NS44NTYpIiBmaWxsPSIjQTNDN0ZGIi8+CjwvZz4KPGcgaWQ9IlJlY3RhbmdsZSAyLjExIj4KPHVzZSB4bGluazpocmVmPSIjcGF0aDJfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMCAtNzYyLjc3MSkiIGZpbGw9IiNBM0M3RkYiLz4KPC9nPgo8ZyBpZD0iUmVjdGFuZ2xlIDMiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTptdWx0aXBseSI+Cjx1c2UgeGxpbms6aHJlZj0iI3BhdGg0X2ZpbGwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTggLTgwNSkiIGZpbGw9IiNGRkQwRDAiLz4KPC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDAgMEwgMzUgMEwgMzUgNTJMIDAgNTJMIDAgMFoiLz4KPHBhdGggaWQ9InBhdGgxX3N0cm9rZV8yeCIgZD0iTSAwIDBMIDAgLTJMIC0yIC0yTCAtMiAwTCAwIDBaTSAzNSAwTCAzNyAwTCAzNyAtMkwgMzUgLTJMIDM1IDBaTSAzNSA1MkwgMzUgNTRMIDM3IDU0TCAzNyA1MkwgMzUgNTJaTSAwIDUyTCAtMiA1MkwgLTIgNTRMIDAgNTRMIDAgNTJaTSAwIDJMIDM1IDJMIDM1IC0yTCAwIC0yTCAwIDJaTSAzMyAwTCAzMyA1MkwgMzcgNTJMIDM3IDBMIDMzIDBaTSAzNSA1MEwgMCA1MEwgMCA1NEwgMzUgNTRMIDM1IDUwWk0gMiA1MkwgMiAwTCAtMiAwTCAtMiA1MkwgMiA1MloiLz4KPHBhdGggaWQ9InBhdGgyX2ZpbGwiIGQ9Ik0gMCAwTCAzMSAwTCAzMSAwLjc3MTE0NEwgMCAwLjc3MTE0NEwgMCAwWiIvPgo8cGF0aCBpZD0icGF0aDNfZmlsbCIgZD0iTSAwIDBMIDM1IDBMIDM1IDRMIDAgNEwgMCAwWiIvPgo8cGF0aCBpZD0icGF0aDRfZmlsbCIgZD0iTSAwIDBMIDEgMEwgMSA0OUwgMCA0OUwgMCAwWiIvPgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var CLEAR = exports.CLEAR = 'CLEAR';
	var COMMAND_RUN = exports.COMMAND_RUN = 'COMMAND_RUN';
	var CURRENT_POST_SET = exports.CURRENT_POST_SET = 'CURRENT_POST_SET';
	var NAV_HIDE = exports.NAV_HIDE = 'NAV_HIDE';
	var NAV_SHOW = exports.NAV_SHOW = 'NAV_SHOW';
	var NORMATIVE_ADD = exports.NORMATIVE_ADD = 'NORMATIVE_ADD';
	var SIDE_BAR_SHOW = exports.SIDE_BAR_SHOW = 'SIDE_BAR_SHOW';
	var SIDE_BAR_HIDE = exports.SIDE_BAR_HIDE = 'SIDE_BAR_HIDE';
	var REDACTIONS_SHOW = exports.REDACTIONS_SHOW = 'REDACTIONS_SHOW';
	var REDACTIONS_HIDE = exports.REDACTIONS_HIDE = 'REDACTIONS_HIDE';

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  min-height: 100vh;\n  position: relative;\n  width: 100%;\n'], ['\n  min-height: 100vh;\n  position: relative;\n  width: 100%;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(9);
	
	var _reactHelmet = __webpack_require__(40);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _gatsbyLink = __webpack_require__(14);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _get = __webpack_require__(93);
	
	var _get2 = _interopRequireDefault(_get);
	
	var _styledComponents = __webpack_require__(4);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _reactCommander = __webpack_require__(836);
	
	var _reactCommander2 = _interopRequireDefault(_reactCommander);
	
	var _whoa = __webpack_require__(77);
	
	var _whoa2 = _interopRequireDefault(_whoa);
	
	var _PostHeading = __webpack_require__(150);
	
	var _PostHeading2 = _interopRequireDefault(_PostHeading);
	
	var _PostBody = __webpack_require__(149);
	
	var _PostBody2 = _interopRequireDefault(_PostBody);
	
	var _SideBar = __webpack_require__(76);
	
	var _SideBar2 = _interopRequireDefault(_SideBar);
	
	var _Header = __webpack_require__(145);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _StyledMain = __webpack_require__(153);
	
	var _StyledMain2 = _interopRequireDefault(_StyledMain);
	
	var _WithEventListeners = __webpack_require__(154);
	
	var _WithEventListeners2 = _interopRequireDefault(_WithEventListeners);
	
	var _commands = __webpack_require__(169);
	
	var _commands2 = _interopRequireDefault(_commands);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	// import Commander from '../components/Commander';
	
	
	var BlogPost = _styledComponents2.default.div(_templateObject);
	
	var BlogPostTemplate = function (_React$Component) {
	  _inherits(BlogPostTemplate, _React$Component);
	
	  function BlogPostTemplate() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, BlogPostTemplate);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      com: false
	    }, _this.submitCommand = function (command) {
	      _this.hideCommander();
	      _this.props.dispatchAction({ type: command.action });
	    }, _this.showCommander = function () {
	      _this.setState({ com: true });
	    }, _this.hideCommander = function () {
	      _this.setState({ com: false });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  BlogPostTemplate.prototype.componentDidMount = function componentDidMount() {
	    this.props.setCurrentPost(this.props.data.whoa.frontmatter.title);
	
	    if (true) if (typeof document !== 'undefined') {
	      /** ⚠️🔮 TURN INTO A GATSBY PLUGIN? */
	      var utterances = document.createElement('script');
	      utterances.setAttribute('src', 'https://utteranc.es/client.js');
	      utterances.setAttribute('repo', 'davvidbaker/davidbaker.is');
	      utterances.setAttribute('branch', 'master');
	      utterances.setAttribute('issue-term', 'pathname');
	      utterances.setAttribute('async', true);
	      document.querySelector('main').appendChild(utterances);
	    }
	  };
	
	  BlogPostTemplate.prototype.componentDidCatch = function componentDidCatch(error, info) {
	    debugger;
	  };
	
	  BlogPostTemplate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.props.showNav();
	    this.props.clear();
	  };
	
	  BlogPostTemplate.prototype.render = function render() {
	    var _this2 = this;
	
	    var post = this.props.data.whoa;
	    var siteTitle = (0, _get2.default)(this.props, 'data.site.siteMetadata.title');
	
	    if (post && post.frontmatter.bareNaked) {
	      this.props.hideNav();
	    } else {
	      this.props.showNav();
	    }
	
	    var eventListeners = [['keydown', function (e) {
	      if (e.shiftKey && (e.metaKey || e.ctrlKey) && e.key === 'p') {
	        /** 💁 By default, if chrome devtools are open, this will pull up their command palette, even if focus is in the page, not dev tools. */
	        e.preventDefault();
	        _this2.showCommander();
	      }
	    }]];
	
	    return !post ? _react2.default.createElement(
	      'div',
	      null,
	      'Missing post'
	    ) : _react2.default.createElement(
	      _WithEventListeners2.default,
	      {
	        eventListeners: eventListeners,
	        node: typeof document !== 'undefined' ? document : undefined
	      },
	      function () {
	        return _react2.default.createElement(
	          BlogPost,
	          null,
	          _react2.default.createElement(_reactHelmet2.default, {
	            title: (post && post.frontmatter.title) + ' | ' + siteTitle
	          }),
	          _react2.default.createElement(
	            _StyledMain2.default,
	            {
	              style: {
	                left: _this2.props.sideBarVisible ? '300px' : 0,
	                width: _this2.props.sideBarVisible ? 'calc(100% - 300px)' : '100%'
	              }
	            },
	            _this2.props.normatives.length > 0 && _react2.default.createElement(_Header2.default, {
	              sideBarVisible: _this2.props.sideBarVisible,
	              toggleSideBar: _this2.props.toggleSideBar
	            }),
	            _react2.default.createElement(
	              'div',
	              {
	                className: 'full-width-grid',
	                style: {
	                  // maxWidth: '50rem',
	                  margin: '0 auto'
	                }
	              },
	              post && !post.frontmatter.bareNaked && _react2.default.createElement(
	                _PostHeading2.default,
	                { date: post.frontmatter.date },
	                function () {
	                  return post.frontmatter.title;
	                }
	              ),
	              _react2.default.createElement(
	                _PostBody2.default,
	                { normatives: _this2.props.normatives },
	                _react2.default.createElement(
	                  _whoa2.default,
	                  null,
	                  function () {
	                    return JSON.parse(post.ast).children;
	                  }
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(_SideBar2.default, {
	            sideBarVisible: _this2.props.sideBarVisible,
	            toggleSideBar: _this2.props.toggleSideBar
	          }),
	          _react2.default.createElement(_reactCommander2.default, {
	            appElement: typeof window !== 'undefined' && window.___gatsby,
	            commands: _commands2.default,
	            isOpen: _this2.state.com,
	            hideCommander: _this2.hideCommander,
	            onSubmit: _this2.submitCommand
	          })
	        );
	      }
	    );
	  };
	
	  return BlogPostTemplate;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    navVisible: state.navVisible,
	    normatives: state.whoa.normatives,
	    sideBarVisible: state.sideBarVisible
	  };
	}, function (dispatch) {
	  return {
	    hideNav: function hideNav() {
	      return dispatch({ type: 'NAV_HIDE' });
	    },
	    showNav: function showNav() {
	      return dispatch({ type: 'NAV_SHOW' });
	    },
	    setCurrentPost: function setCurrentPost(title) {
	      return dispatch({ type: 'CURRENT_POST_SET', title: title });
	    },
	    toggleSideBar: function toggleSideBar(showing) {
	      return dispatch({ type: showing ? 'SIDE_BAR_HIDE' : 'SIDE_BAR_SHOW' });
	    },
	    dispatchAction: function dispatchAction(action) {
	      return dispatch(action);
	    },
	    clear: function clear() {
	      return dispatch({ type: 'CLEAR' });
	    }
	  };
	})(BlogPostTemplate);
	var pageQuery = exports.pageQuery = '** extracted graphql fragment **';

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var plainText = function plainText(input) {
	  if (!input) return null;
	
	  if (typeof input === 'string') return input;
	
	  if (Array.isArray(input)) {
	    return input.map(function (el) {
	      return plainText(el);
	    }).join('');
	  } else if (input.props && input.props.type === 'text') {
	    return input.props.value;
	  } else if (input.type === 'text') {
	    return input.value;
	  } else if (input.props && input.props.children) {
	    return plainText(input.props.children);
	  } else {
	    return plainText(input.children);
	    // debugger;
	  }
	};
	exports.default = plainText;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-templates-blog-post-js-48b8aaf34725d1249294.js.map