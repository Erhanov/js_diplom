/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.6+9869a4bc
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var calc = __webpack_require__(/*! ./parts/calc.js */ "./src/parts/calc.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/parts/modal.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/parts/slider.js"),
      form = __webpack_require__(/*! ./parts/form.js */ "./src/parts/form.js"),
      accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/parts/accordion.js"),
      filter = __webpack_require__(/*! ./parts/filter.js */ "./src/parts/filter.js"),
      extra = __webpack_require__(/*! ./parts/extra.js */ "./src/parts/extra.js"),
      load = __webpack_require__(/*! ./parts/load.js */ "./src/parts/load.js"),
      burger = __webpack_require__(/*! ./parts/burger.js */ "./src/parts/burger.js"),
      link = __webpack_require__(/*! ./parts/link.js */ "./src/parts/link.js");

  calc();
  modal();
  slider();
  form();
  accordion();
  filter();
  extra();
  load();
  burger();
  link();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),

/***/ "./src/parts/accordion.js":
/*!********************************!*\
  !*** ./src/parts/accordion.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
  // Аккордион
  var accordBlock = document.querySelectorAll(".accordion-block"),
      accordHeading = document.querySelectorAll(".heading"),
      MainBody = document.getElementsByTagName("body")[0],
      a = 0,
      b = 0;

  function hideBlockContent() {
    for (var i = 0; i < accordBlock.length; i++) {
      accordBlock[i].classList.remove("show");
      accordBlock[i].classList.remove('animated', "jackInTheBox");
      accordBlock[i].classList.add("hide");
      accordHeading[i].classList.remove('active');
    }
  }

  hideBlockContent();

  function showBlockContent(b) {
    if (accordBlock[b].classList.contains("hide")) {
      accordBlock[b].classList.remove("hide");
      accordBlock[b].classList.add("show");
      accordBlock[b].classList.add('animated', "jackInTheBox");
      accordHeading[b].classList.add('active');
    }
  }

  accordHeading.forEach(function (item, i, arr) {
    item.addEventListener('click', function (event) {
      var target = event.target;

      if (target && target.classList.contains('active')) {
        hideBlockContent();
        a++;
      } else if (target && target.classList.contains('heading')) {
        hideBlockContent();
        showBlockContent(i);
        a++;
      }
    });
  });
  MainBody.addEventListener('click', function (event) {
    var target = event.target;

    if (!(target && target.classList.contains('heading'))) {
      hideBlockContent();
      a++;
    }
  });
}

module.exports = accordion;

/***/ }),

/***/ "./src/parts/burger.js":
/*!*****************************!*\
  !*** ./src/parts/burger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function burger() {
  var burger = document.querySelector('.burger'),
      burgerButton = document.querySelector('.burger-menu'),
      header = document.querySelector('.header'),
      MainBody = document.getElementsByTagName("body")[0],
      a = 0;

  function checkBurger() {
    if (window.innerWidth <= 768) {
      if (a % 2 == 0) {
        burgerButton.style.display = 'block';
        burgerButton.classList.add('animated', 'fadeInDown');
        a++;
      } else {
        burgerButton.classList.add('animated', 'fadeOutUp');
        a++;
        setTimeout(function () {
          burgerButton.style.display = 'none';
          burgerButton.classList.remove('animated', 'fadeOutUp');
        }, 500);
      }
    }
  }

  burger.addEventListener('click', checkBurger);
}

module.exports = burger;

/***/ }),

/***/ "./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var sizePicture = document.getElementById('size'),
      materialPicture = document.getElementById('material'),
      optionsPicture = document.getElementById('options'),
      promocodePicture = document.querySelector('.promocode'),
      pricePicture = document.querySelector('.calc-price'),
      promo = 1;
  var startValue = 0;
  sizePicture.addEventListener('change', function () {
    startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value * sizePicture.options[sizePicture.selectedIndex].value * optionsPicture.options[optionsPicture.selectedIndex].value;

    if (materialPicture.options[materialPicture.selectedIndex].value == '' && sizePicture.options[sizePicture.selectedIndex].value == '') {
      pricePicture.innerHTML = 0;
    }

    pricePicture.innerHTML = startValue * promo;
    console.log(sizePicture.options[sizePicture.selectedIndex].value);
    console.log(materialPicture.options[materialPicture.selectedIndex].value);
    console.log(optionsPicture.options[optionsPicture.selectedIndex].value);
  });
  materialPicture.addEventListener('change', function () {
    startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value * sizePicture.options[sizePicture.selectedIndex].value * optionsPicture.options[optionsPicture.selectedIndex].value;

    if (materialPicture.options[materialPicture.selectedIndex].value == '' && sizePicture.options[sizePicture.selectedIndex].value == '') {
      pricePicture.innerHTML = 0;
    }

    pricePicture.innerHTML = startValue * promo;
  });
  optionsPicture.addEventListener('change', function () {
    startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value * sizePicture.options[sizePicture.selectedIndex].value * optionsPicture.options[optionsPicture.selectedIndex].value;

    if (materialPicture.options[materialPicture.selectedIndex].value == '' && sizePicture.options[sizePicture.selectedIndex].value == '') {
      pricePicture.innerHTML = 0;
    }

    pricePicture.innerHTML = startValue * promo;
  });
  promocodePicture.addEventListener('input', function () {
    startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value * sizePicture.options[sizePicture.selectedIndex].value * optionsPicture.options[optionsPicture.selectedIndex].value;

    if (promocodePicture.value == 'IWANTPOPART') {
      promo = 0.7;
      pricePicture.innerHTML = startValue * promo;
    } else {
      promo = 1;
      pricePicture.innerHTML = startValue * promo;
    }
  });
}

module.exports = calc;

/***/ }),

/***/ "./src/parts/extra.js":
/*!****************************!*\
  !*** ./src/parts/extra.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function extra() {
  var showImg = function showImg(n) {
    n.style.display = "block";
    n.classList.add("animated", "fadeIn");
  };

  var paint = document.querySelectorAll(".extra-paint"),
      paintBtn = document.querySelector(".extra-paint-btn");
  paintBtn.addEventListener("click", function () {
    paint.forEach(function (item) {
      showImg(item);
      paintBtn.style.display = 'none';
    });
  });
}

module.exports = extra;

/***/ }),

/***/ "./src/parts/filter.js":
/*!*****************************!*\
  !*** ./src/parts/filter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function filter() {
  var showImg = function showImg(n) {
    n.style.display = "block";
    n.classList.add("animated", "fadeIn");
  };

  var port = document.querySelector(".portfolio"),
      portImg = document.querySelectorAll(".portfolio-img"),
      allWorks = document.querySelector(".all"),
      lovers = document.querySelector(".lovers"),
      chef = document.querySelector(".chef"),
      girl = document.querySelector(".girl"),
      guy = document.querySelector(".guy"),
      grandma = document.querySelector(".grandmother"),
      grandpa = document.querySelector(".granddad"),
      imgBlock = document.querySelectorAll(".portfolio-block"),
      portNo = document.querySelector(".portfolio-no");
  port.addEventListener("click", function (event) {
    var target = event.target;

    function checkBtn() {
      if (target && (target == lovers || target == allWorks || target == chef || target == girl || target == guy || target == grandma || target == grandpa)) {
        portImg.forEach(function (item) {
          item.classList.remove("active");
        });
        imgBlock.forEach(function (item) {
          item.style.display = "none";
          item.classList.remove("fadeIn");
        });
        portNo.style.display = "none";
      }
    }

    function portfolioNoImgs() {
      portNo.style.display = "block";
      portNo.classList.add("fadeIn");
    }

    if (target && target == lovers) {
      checkBtn();
      lovers.classList.add("active");
      imgBlock.forEach(function (item) {
        if (item.classList.contains("lovers")) {
          showImg(item);
        }
      });
    }

    if (target && target == allWorks) {
      checkBtn();
      allWorks.classList.add("active");
      imgBlock.forEach(function (item) {
        if (item.classList.contains("all")) {
          showImg(item);
        }
      });
    }

    if (target && target == chef) {
      checkBtn();
      chef.classList.add("active");
      imgBlock.forEach(function (item) {
        if (item.classList.contains("chef")) {
          showImg(item);
        }
      });
    }

    if (target && target == girl) {
      checkBtn();
      girl.classList.add("active");
      imgBlock.forEach(function (item) {
        if (item.classList.contains("girl")) {
          showImg(item);
        }
      });
    }

    if (target && target == guy) {
      checkBtn();
      guy.classList.add("active");
      imgBlock.forEach(function (item) {
        if (item.classList.contains("guy")) {
          showImg(item);
        }
      });
    }

    if (target && target == grandma) {
      checkBtn();
      grandma.classList.add("active");
      portfolioNoImgs();
    }

    if (target && target == grandpa) {
      checkBtn();
      grandpa.classList.add("active");
      portfolioNoImgs();
    }
  });
}

module.exports = filter;

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = typeof Promise === 'undefined' ? __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").Promise : Promise;

function form() {
  var message = {
    loading: 'Loading',
    success: 'Everything is Fine',
    failure: 'Smth got wrong'
  },
      statusMessage = document.createElement('div');

  var SendForm = function SendForm(event, form) {
    event.preventDefault();
    form.appendChild(statusMessage);
    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    var formData = new FormData(form),
        obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    var json = JSON.stringify(obj);
    request.send(json);
    var promise = new _Promise(function (resolve, reject) {
      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          resolve();
        } else if (request.readyState == 4 && request.status == 200) {
          resolve();
        } else {
          reject();
        }
      });
    });
    return promise;
  };

  var clearInputConsult = function clearInputConsult(input, input1, input2, input3) {
    input.value = '';
    input1.value = '';
    input2.value = '';
    input3.value = '';
  };

  var clearInputModalConsult = function clearInputModalConsult(input, input1) {
    input.value = '';
    input1.value = '';
  };

  var clearInputModalDesign = function clearInputModalDesign(input, input1, input2, input3) {
    input.value = '';
    input1.value = '';
    input2.value = '';
    input3.value = '';
  };

  var formConsult = document.querySelector('.form-consult'),
      formModalConsult = document.querySelector('.form-modal_consult'),
      formModalDesign = document.querySelector('.form-modal_design'),
      buttonConsult = document.querySelector('.button-consult'),
      buttonModalConsult = document.querySelector('.button-modal_consult'),
      buttonModalDesign = document.querySelector('.button-modal_design'),
      nameInput = document.querySelectorAll('.name-input'),
      phoneInput = document.querySelectorAll('.phone-input'),
      emailInput = document.querySelectorAll('.email-input'),
      messageInput = document.querySelector('.input-text'),
      messageTextarea = document.querySelector('.message-textarea');

  var phoneControl = function phoneControl(input) {
    var firstDigit = input.value.charCodeAt(0);

    if (firstDigit > 57 || firstDigit < 42) {
      input.value = '';
    }

    for (var i = 1; i < input.value.length; i++) {
      if (input.value.charCodeAt(i) > 57 || input.value.charCodeAt(i) < 48) {
        input.value = '+';
      }
    }

    if (input.value.length > 11) {
      input.value = input.value.substring(0, 12);
    }
  };

  var textControl = function textControl(input) {
    for (var i = 0; i < input.value.length; i++) {
      if (input.value.charCodeAt(i) > 1103 || input.value.charCodeAt(i) < 1072) {
        input.value = '';
      }
    }
  };

  var emailControl = function emailControl(input) {
    for (var i = 0; i < input.value.length; i++) {
      if (input.value.charCodeAt(i) > 122 || input.value.charCodeAt(i) < 97) {
        input.value = '';
      }
    }
  };

  formConsult.addEventListener('submit', function () {
    SendForm(event, formConsult).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(function () {
      return clearInputConsult(messageInput, nameInput[0], phoneInput[0], emailInput[0]);
    });
  });
  formModalConsult.addEventListener('submit', function () {
    SendForm(event, formModalConsult).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(function () {
      return clearInputModalConsult(phoneInput[1], nameInput[1]);
    });
  });
  formModalDesign.addEventListener('submit', function () {
    SendForm(event, formModalDesign).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.success;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(function () {
      return clearInputModalDesign(phoneInput[2], nameInput[2], emailInput[1], messageTextarea);
    });
  });
  nameInput.forEach(function (item) {
    item.addEventListener('input', function () {
      textControl(item);
    });
  });
  emailInput.forEach(function (item) {
    item.addEventListener('input', function () {
      emailControl(item);
    });
  });
  phoneInput.forEach(function (item) {
    item.addEventListener('input', function () {
      phoneControl(item);
    });
  });
}

module.exports = form;

/***/ }),

/***/ "./src/parts/link.js":
/*!***************************!*\
  !*** ./src/parts/link.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function link() {
  var anchors = document.querySelectorAll('a[href*="#"]');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

module.exports = link;

/***/ }),

/***/ "./src/parts/load.js":
/*!***************************!*\
  !*** ./src/parts/load.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function load() {
  var hovers1 = document.querySelector('.size-1'),
      hovers2 = document.querySelector('.size-2'),
      hovers3 = document.querySelector('.size-3'),
      hovers4 = document.querySelector('.size-4'),
      sizeContainer = document.querySelector('.sizes'),
      sizeP = document.querySelectorAll('.size'),
      startPrice = document.querySelectorAll('.starting-price'),
      finalPrice = document.querySelectorAll('.final-price'),
      sizeBlock = document.querySelectorAll('.sizes-block');
  sizeContainer.addEventListener('mouseover', function (event) {
    var target = event.target;

    if (target && target == hovers1) {
      hovers1.src = 'img/sizes-1-1.png';
      sizeP[0].style.display = 'none';
      startPrice[0].style.display = 'none';
      finalPrice[0].style.display = 'none';
    }

    if (target && target == hovers2) {
      hovers2.src = 'img/sizes-2-1.png';
      sizeP[1].style.display = 'none';
      startPrice[1].style.display = 'none';
      finalPrice[1].style.display = 'none';
    }

    if (target && target == hovers3) {
      hovers3.src = 'img/sizes-3-1.png';
      sizeP[2].style.display = 'none';
      startPrice[2].style.display = 'none';
      finalPrice[2].style.display = 'none';
    }

    if (target && target == hovers4) {
      hovers4.src = 'img/sizes-4-1.png';
      sizeP[3].style.display = 'none';
      startPrice[3].style.display = 'none';
      finalPrice[3].style.display = 'none';
    }
  });
  sizeContainer.addEventListener('mouseout', function (event) {
    var target = event.target;

    if (target && target == hovers1) {
      hovers1.src = 'img/sizes-1.png';
      sizeP[0].style.display = 'block';
      startPrice[0].style.display = 'block';
      finalPrice[0].style.display = 'block';
    }

    if (target && target == hovers2) {
      hovers2.src = 'img/sizes-2.png';
      sizeP[1].style.display = 'block';
      startPrice[1].style.display = 'block';
      finalPrice[1].style.display = 'block';
    }

    if (target && target == hovers3) {
      hovers3.src = 'img/sizes-3.png';
      sizeP[2].style.display = 'block';
      startPrice[2].style.display = 'block';
      finalPrice[2].style.display = 'block';
    }

    if (target && target == hovers4) {
      hovers4.src = 'img/sizes-4.png';
      sizeP[3].style.display = 'block';
      startPrice[3].style.display = 'block';
      finalPrice[3].style.display = 'block';
    }
  });
}

module.exports = load;

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var buttonConsultation = document.querySelectorAll('.button-consultation'),
      buttonDesign = document.querySelectorAll('.button-design'),
      buttonGift = document.querySelector('.fixed-gift'),
      popupConsultation = document.querySelector('.popup-consultation'),
      popupDesign = document.querySelector('.popup-design'),
      popupGift = document.querySelector('.popup-gift'),
      close = document.querySelectorAll('.popup-close'),
      MainBody = document.getElementsByTagName("body")[0];

  var showModal = function showModal(modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    counter60sec++;
  };

  var closeModal = function closeModal(modal) {
    modal.classList.remove("show");
    document.body.style.overflow = '';
  };

  var counterBottom = 0,
      counter60sec = 0;
  close.forEach(function (item) {
    item.addEventListener('click', function () {
      closeModal(popupConsultation);
      closeModal(popupDesign);
      closeModal(popupGift);
      counterBottom++;
      counter60sec--;
    });
  });
  buttonConsultation.forEach(function (item) {
    item.addEventListener('click', function () {
      showModal(popupConsultation);
    });
  });
  buttonDesign.forEach(function (item) {
    item.addEventListener('click', function () {
      showModal(popupDesign);
    });
  });
  buttonGift.addEventListener('click', function () {
    showModal(popupGift);
    buttonGift.style.display = 'none';
  });
  MainBody.addEventListener("click", function (event) {
    var target = event.target;

    if (target && target.classList.contains("show")) {
      target.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && counterBottom == 0) {
      showModal(popupGift);
      buttonGift.style.display = 'none';
    }
  };

  var timer = setTimeout(function () {
    if (counter60sec == 1) {
      clearTimeout(timer);
    } else {
      showModal(popupConsultation);
    }
  }, 60000);
}

module.exports = modal;

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var smallSlider = function smallSlider() {
    var slideIndex = 1,
        slides = document.querySelectorAll('.main-slider-item');
    slides[1].style.display = 'none';

    var showSlides = function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach(function (item) {
        return item.style.display = 'none';
      });
      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('animated', 'fadeInUp');
    };

    var plusSlides = function plusSlides(n) {
      showSlides(slideIndex += n);
    };

    setInterval(function (n) {
      plusSlides(1);
    }, 5000);
  };

  smallSlider();

  var bigSlider = function bigSlider() {
    var slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider-item'),
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');

    var showSlides = function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach(function (item) {
        return item.style.display = 'none';
      });
      slides[slideIndex - 1].style.display = 'block';
    };

    var plusSlides = function plusSlides(n) {
      showSlides(slideIndex += n);
    };

    prev.addEventListener('click', function () {
      plusSlides(-1);
      slides[slideIndex - 1].classList.remove('animated', 'fadeIn');
      slides[slideIndex - 1].classList.add('animated', 'fadeIn');
    });
    next.addEventListener('click', function () {
      plusSlides(1);
      slides[slideIndex - 1].classList.remove('animated', 'fadeIn');
      slides[slideIndex - 1].classList.add('animated', 'fadeIn');
    });
    showSlides(slideIndex);
    setInterval(function (n) {
      plusSlides(1);
      slides[slideIndex - 1].classList.remove('animated', 'fadeIn');
      slides[slideIndex - 1].classList.add('animated', 'fadeIn');
    }, 5000);
  };

  bigSlider();
}

module.exports = slider;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map