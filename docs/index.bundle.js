"use strict";
(self["webpackChunkapi_based_webapp"] = self["webpackChunkapi_based_webapp"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_displayCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayCard.js */ "./src/modules/displayCard.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/init.js */ "./src/modules/init.js");
/* harmony import */ var _modules_cardCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cardCounter.js */ "./src/modules/cardCounter.js");
/* harmony import */ var _modules_likesData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likesData.js */ "./src/modules/likesData.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






 // Display all items

var displayItems = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var artistId,
        container,
        response,
        obj,
        index,
        element,
        btns,
        _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            artistId = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : '271256';
            container = document.getElementById('section');
            _context3.next = 4;
            return fetch("https://itunes.apple.com/lookup?id=".concat(artistId, "&entity=album&limit=12"), {
              method: 'POST',
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();

          case 7:
            obj = _context3.sent;

            for (index = 1; index < obj.results.length; index += 1) {
              element = obj.results[index];
              (0,_modules_displayCard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container, element.artworkUrl100, element.collectionCensoredName, 0, element.collectionId);
            }

            btns = document.querySelectorAll('.comment');
            Array.from(btns).forEach(function (btn, index) {
              var element = obj.results[index + 1];
              btn.addEventListener('click', /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
                  var form, commentUrl, getComment, sand;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCommentPopUp(event, element);
                          form = document.querySelector('#form');
                          commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VonFwyCfU4bUnxbvPNPN/comments/';
                          _context2.next = 5;
                          return "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VonFwyCfU4bUnxbvPNPN/comments?item_id=".concat(index + 1);

                        case 5:
                          getComment = _context2.sent;
                          form.addEventListener('submit', /*#__PURE__*/function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
                              var name, text, nameValue, textValue;
                              return _regeneratorRuntime().wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      event.preventDefault();
                                      name = document.querySelector('#input');
                                      text = document.querySelector('#textarea');
                                      nameValue = name.value;
                                      textValue = text.value;
                                      _context.next = 7;
                                      return _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].postAComment(commentUrl, index + 1, nameValue, textValue);

                                    case 7:
                                      _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearField();
                                      _context.next = 10;
                                      return _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].getComment(getComment);

                                    case 10:
                                      _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].showPer(nameValue, textValue);

                                    case 11:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x2) {
                              return _ref3.apply(this, arguments);
                            };
                          }());
                          _context2.next = 9;
                          return _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].getComment(getComment);

                        case 9:
                          sand = _context2.sent;
                          _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].showComment(sand);
                          _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].countComment(sand);

                        case 12:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });
            (0,_modules_cardCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
            (0,_modules_likesData_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function displayItems() {
    return _ref.apply(this, arguments);
  };
}();

(0,_modules_init_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
displayItems();
document.querySelector('.comment-popup').addEventListener('click', function (event) {
  return _modules_comment_js__WEBPACK_IMPORTED_MODULE_2__["default"].closePopUp(event);
});

/***/ }),

/***/ "./src/modules/cardCounter.js":
/*!************************************!*\
  !*** ./src/modules/cardCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var cardCounter = function cardCounter() {
  var cards = document.getElementById('section');
  var cardscount = document.getElementById('cards-count');
  cardscount.innerHTML = "Albums(".concat(cards.childNodes.length - 1, ")");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardCounter);

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comment)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var popUp = document.querySelector('.comment-popup');

var Comment = /*#__PURE__*/_createClass(function Comment() {
  _classCallCheck(this, Comment);
});

_defineProperty(Comment, "createCommentPopUp", function (data) {
  var newArticle = document.createElement('article');
  newArticle.innerHTML = "<div class= \"wrapper\">\n    <div class= \"flex\"> \n  <img class=\"pop-image\" src= ".concat(data.artworkUrl100, " alt=\"Image\"/> \n  <span class='material-symbols-outlined white'>close</span>\n  </div>\n  <h2 class=\"white\">Collection Name: ").concat(data.collectionName, "</h2>\n  <div class= \"pop-details\">\n    <a class=\"white border link\" href=\"").concat(data.collectionViewUrl, "\" target=\"_blank\">Click Here To Listen</a>\n    <p class=\"white border\">Release Date: ").concat(data.releaseDate, "</p>\n    <p class=\"white border\">Price: $").concat(data.collectionPrice, "</p>\n    <p class=\"white border\">Genre Type: ").concat(data.primaryGenreName, "</p>\n  </div>\n  <fieldset class=\"fieldset\">\n  <legend class=\"count white\"></legend>\n  <ul class=\"store-comments white\"></ul>\n </fieldset>\n  <div>\n  <h4 class= \"white comment-header\">Add a Comment</h4>\n  <form id=\"form\">\n  <input\n  type=\"text\"\n  name=\"name\"\n  maxlength=\"20\"\n              id=\"input\"\n              placeholder=\"Add your Name\"\n            />\n            <br />\n            <textarea name=\"\" id=\"textarea\" cols=\"30\" rows=\"10\" maxlength=\"100\" placeholder= \"insights\"></textarea>\n            <button type=\"submit\" class=\"btn\">Comment</button>\n            </form>\n            </div>\n            </div>\n  ");
  popUp.appendChild(newArticle);
});

_defineProperty(Comment, "displayCommentPopUp", function (event, element) {
  if (event.target.id === element.collectionId.toString()) {
    Comment.createCommentPopUp(element);
  }
});

_defineProperty(Comment, "closePopUp", function (event) {
  var child = event.target;
  var parentContainer = child.parentElement.parentElement.parentElement.parentElement;

  if (child.classList.contains('material-symbols-outlined')) {
    parentContainer.removeChild(child.parentElement.parentElement.parentElement);
  }
});

_defineProperty(Comment, "postAComment", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, id, userName, comment) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify({
                item_id: id,
                username: userName,
                comment: comment
              })
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());

_defineProperty(Comment, "getComment", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var fetchData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url);

          case 2:
            fetchData = _context2.sent;
            return _context2.abrupt("return", fetchData.json());

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x5) {
    return _ref2.apply(this, arguments);
  };
}());

_defineProperty(Comment, "getStorage", function () {
  return JSON.parse(localStorage.getItem('appId'));
});

_defineProperty(Comment, "clearField", function () {
  var name = document.querySelector('#input');
  var text = document.querySelector('#textarea');
  name.value = '';
  text.value = '';
});

_defineProperty(Comment, "showComment", function (comments) {
  var fieldset = document.querySelector('fieldset');

  if (comments.length > 0) {
    comments.forEach(function (comment) {
      var commentContainer = document.querySelector('.store-comments');
      var container = document.createElement('li');
      container.innerHTML = "".concat(comment.creation_date, " ").concat(comment.username, ": ").concat(comment.comment);
      commentContainer.appendChild(container);
    });
  } else {
    fieldset.style.display = 'none';
  }
});

_defineProperty(Comment, "showPer", function (nameValue, textValue) {
  var date = new Date();
  var newDate = "".concat(date.getFullYear(), "-0").concat(date.getMonth() + 1, "-").concat(date.getDate());
  var commentContainer = document.querySelector('.store-comments');
  var container = document.createElement('li');
  container.innerHTML = "".concat(newDate, " ").concat(nameValue, ": ").concat(textValue);
  commentContainer.appendChild(container);
});

_defineProperty(Comment, "countComment", function (comments) {
  var count = document.querySelector('.count');

  if (comments.length > 0) {
    count.innerHTML = "Comment ( ".concat(comments.length, ")");
  } else {
    count.innerHTML = '';
  }
});



/***/ }),

/***/ "./src/modules/displayCard.js":
/*!************************************!*\
  !*** ./src/modules/displayCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likeButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeButton.js */ "./src/modules/likeButton.js");
/* harmony import */ var _Assets_images_icons8_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Assets/images/icons8.png */ "./Assets/images/icons8.png");

 // Display single card/item

var displayCard = function displayCard(container) {
  var albumImg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unknown';
  var albumName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'no-name';
  var likes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var index = arguments.length > 4 ? arguments[4] : undefined;
  var likesCounter = likes;
  var div = document.createElement('div');
  var img = document.createElement('img');
  var i = document.createElement('i');
  var h3 = document.createElement('h3');
  var titleContainer = document.createElement('div');
  var likeIcon = document.createElement('img');
  var likesContainer = document.createElement('div');
  var descriptionText = document.createElement('p');
  var commentsButton = document.createElement('button');
  var reservationsButton = document.createElement('button');
  var itemId = document.querySelectorAll('#section > div').length;
  likeIcon.setAttribute('data-likes', likesCounter);
  likeIcon.setAttribute('data-itemId', itemId);
  descriptionText.setAttribute('data-cardid', itemId);
  descriptionText.textContent = "".concat(likeIcon.dataset.likes, " likes");
  likeIcon.setAttribute('src', _Assets_images_icons8_png__WEBPACK_IMPORTED_MODULE_1__);
  likeIcon.classList.add('icon-size');
  likesContainer.classList.add('description-container');
  h3.innerHTML = albumName;
  img.setAttribute('src', albumImg);
  commentsButton.classList.add('comment');
  commentsButton.setAttribute('type', 'button');
  commentsButton.setAttribute('id', index);
  reservationsButton.setAttribute('type', 'button');
  commentsButton.textContent = 'Comments';
  reservationsButton.textContent = 'Reservation';
  div.classList.add('items-container');
  titleContainer.classList.add('title-like');
  i.addEventListener('click', _likeButton_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  likesContainer.append(i, descriptionText);
  i.append(likeIcon);
  titleContainer.append(h3, likesContainer);
  div.append(img, titleContainer, commentsButton, reservationsButton);
  container.append(div);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCard);

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* Init App id */
// Check for an existing App id, if there isn't create one
var initId = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var id;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (localStorage.getItem('appId') === null) {
              id = 'VonFwyCfU4bUnxbvPNPN';
              localStorage.setItem('appId', JSON.stringify(id));
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initId() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initId);

/***/ }),

/***/ "./src/modules/likeButton.js":
/*!***********************************!*\
  !*** ./src/modules/likeButton.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLikeCounter.js */ "./src/modules/updateLikeCounter.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 // Add like to item using Involvement API

function setLike() {
  return _setLike.apply(this, arguments);
}

function _setLike() {
  _setLike = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var likeIcon, likesNumber, cardId, appId;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            likeIcon = this.firstChild;
            likesNumber = likeIcon.dataset.likes;
            cardId = likeIcon.dataset.itemid;
            appId = JSON.parse(localStorage.getItem('appId'));
            _context.next = 6;
            return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/likes/"), {
              method: 'POST',
              body: JSON.stringify({
                item_id: "".concat(cardId)
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          case 6:
            likeIcon.setAttribute('data-likes', likesNumber = Number(likesNumber) + 1);
            (0,_updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cardId, likesNumber);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _setLike.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLike);

/***/ }),

/***/ "./src/modules/likesData.js":
/*!**********************************!*\
  !*** ./src/modules/likesData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLikeCounter.js */ "./src/modules/updateLikeCounter.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var updateAllLikes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var appId, response, obj, list;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appId = JSON.parse(localStorage.getItem('appId'));
            _context.next = 3;
            return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/".concat(appId, "/likes/"), {
              method: 'GET',
              headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            obj = _context.sent;
            _context.next = 9;
            return obj;

          case 9:
            list = _context.sent;
            list = list.slice(0);
            list.forEach(function (element) {
              (0,_updateLikeCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element.item_id, element.likes);
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateAllLikes() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateAllLikes);

/***/ }),

/***/ "./src/modules/updateLikeCounter.js":
/*!******************************************!*\
  !*** ./src/modules/updateLikeCounter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateLikeCounter = function updateLikeCounter(cardId, likes) {
  var pElement = document.querySelector("[data-cardid=\"".concat(cardId, "\"]"));
  var likeIcon = document.querySelector("[data-itemid=\"".concat(cardId, "\"]"));
  likeIcon.setAttribute('data-likes', likes);
  pElement.textContent = "".concat(likes, " likes");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikeCounter);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf */ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf */ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf */ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/images/pexels-stephan-seeber-1261728.jpg */ "./Assets/images/pexels-stephan-seeber-1261728.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/images/pexels-sebastiaan-stam-1097456.jpg */ "./Assets/images/pexels-sebastiaan-stam-1097456.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Hacim-medium';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-bold';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-light';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family:\r\n    'Hacim-medium',\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n\r\n  /* Full height */\r\n  height: 100%;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  margin: 16px auto;\r\n  padding: 16px;\r\n  border-bottom: 3px solid #303638;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.white {\r\n  color: white;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  width: max-content;\r\n  padding: 4px;\r\n  height: max-content;\r\n  border: 1px solid white;\r\n  background-color: black;\r\n}\r\n\r\n.material-symbols-outlined:hover {\r\n  background-color: red;\r\n  color: white;\r\n  border-radius: 3px;\r\n  border: 3px solid white;\r\n  cursor: pointer;\r\n}\r\n\r\n.border {\r\n  margin-bottom: 4px;\r\n  padding: 5px;\r\n  text-decoration: none;\r\n  border-radius: 3px;\r\n  border: 2px solid white;\r\n  width: max-content;\r\n  background-color: black;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pop-image {\r\n  width: 20%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.count {\r\n  padding: 7px;\r\n}\r\n\r\n.link:hover {\r\n  color: #ff8a53;\r\n  border-color: #ff8a53;\r\n  background-color: white;\r\n}\r\n\r\n.comment-header {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#input {\r\n  width: 50%;\r\n  height: 30px;\r\n  margin-bottom: 5px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#input:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\n#textarea {\r\n  width: 50%;\r\n  height: 100px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#textarea:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfieldset {\r\n  padding: 5px;\r\n}\r\n\r\n.pop-details {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\narticle {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  left: 0;\r\n  bottom: 0;\r\n  padding: 2%;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow-y: scroll;\r\n  background-color: rgba(255, 255, 255, 0.932);\r\n  background-blend-mode: soft-light;\r\n}\r\n\r\n.items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 26%;\r\n  gap: 15px;\r\n\r\n  /* Card style */\r\n  margin: 10px;\r\n  background-color: #afbbc159;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n}\r\n\r\nimg {\r\n  width: 70%;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#section {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.icon-size {\r\n  width: 28px;\r\n}\r\n\r\n.description-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.items-container > img {\r\n  /* Card style */\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\nbutton {\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  position: relative;\r\n  width: 50%;\r\n  height: 10%;\r\n  line-height: 64px;\r\n  transition: all 0.3s;\r\n  transform: scale(1, 1);\r\n  align-self: center;\r\n  border-radius: 10px;\r\n  color: #ff8a53;\r\n  background: #07070700;\r\n  border: 1px solid #fccab3;\r\n  font-weight: normal;\r\n  margin: 6px 0;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-family: 'Open Sans', sans-serif;\r\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #303638;\r\n  border-radius: 3px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 40px;\r\n  color: #f8d2c1;\r\n  font-size: 20px;\r\n  font-family:\r\n    hacim-medium,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nheader p {\r\n  color: #323838;\r\n  font-family:\r\n    Hacim-bold,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n  font-size: 30px;\r\n}\r\n\r\n.flexbox {\r\n  background: linear-gradient(155deg, #55c7ed00, #2bb3e000, #f8d2c100);\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search {\r\n  margin: 20px;\r\n}\r\n\r\n.search > h3 {\r\n  font-weight: normal;\r\n}\r\n\r\n.search > div {\r\n  display: inline-block;\r\n  position: relative;\r\n  filter: drop-shadow(0 1px #0092c200);\r\n}\r\n\r\n.search > div::after {\r\n  content: '';\r\n  background: #2a2c2a;\r\n  width: 4px;\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 21px;\r\n  right: -5px;\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.search > div > input {\r\n  color: #2a2c2a;\r\n  font-size: 16px;\r\n  background: transparent;\r\n  width: 25px;\r\n  height: 25px;\r\n  padding: 10px;\r\n  border: solid 3px #2a2c2a;\r\n  outline: none;\r\n  border-radius: 35px;\r\n  transition: width 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.search > div > input::placeholder {\r\n  color: #2a2c2a;\r\n  opacity: 0;\r\n  transition: opacity 150ms ease-out;\r\n}\r\n\r\n.search > div > input:focus::placeholder {\r\n  opacity: 1;\r\n}\r\n\r\n.search > div > input:focus,\r\n.search > div > input:not(:placeholder-shown) {\r\n  width: 250px;\r\n}\r\n\r\n.art {\r\n  margin-right: 5px;\r\n}\r\n\r\n.dra {\r\n  margin-right: 30px;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.title-like > h3 {\r\n  font-family: Hacim-light, Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Hacim-medium';\r\n  src: url(../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-bold';\r\n  src: url(../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Hacim-light';\r\n  src: url(../Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family:\r\n    'Hacim-medium',\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nbody {\r\n  background-image: url(../Assets/images/pexels-stephan-seeber-1261728.jpg);\r\n\r\n  /* Full height */\r\n  height: 100%;\r\n\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n  margin: 16px auto;\r\n  padding: 16px;\r\n  border-bottom: 3px solid #303638;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.white {\r\n  color: white;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  width: max-content;\r\n  padding: 4px;\r\n  height: max-content;\r\n  border: 1px solid white;\r\n  background-color: black;\r\n}\r\n\r\n.material-symbols-outlined:hover {\r\n  background-color: red;\r\n  color: white;\r\n  border-radius: 3px;\r\n  border: 3px solid white;\r\n  cursor: pointer;\r\n}\r\n\r\n.border {\r\n  margin-bottom: 4px;\r\n  padding: 5px;\r\n  text-decoration: none;\r\n  border-radius: 3px;\r\n  border: 2px solid white;\r\n  width: max-content;\r\n  background-color: black;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.pop-image {\r\n  width: 20%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.count {\r\n  padding: 7px;\r\n}\r\n\r\n.link:hover {\r\n  color: #ff8a53;\r\n  border-color: #ff8a53;\r\n  background-color: white;\r\n}\r\n\r\n.comment-header {\r\n  margin-top: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#input {\r\n  width: 50%;\r\n  height: 30px;\r\n  margin-bottom: 5px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#input:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\n#textarea {\r\n  width: 50%;\r\n  height: 100px;\r\n  padding: 5px;\r\n  border-top: none;\r\n  border-left: none;\r\n  border-right: none;\r\n  border-bottom: 3px solid #ff8a53;\r\n}\r\n\r\n#textarea:focus {\r\n  outline: none;\r\n  padding: 5px;\r\n}\r\n\r\nfieldset {\r\n  padding: 5px;\r\n}\r\n\r\n.pop-details {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  background-image: url(../Assets/images/pexels-sebastiaan-stam-1097456.jpg);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\narticle {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  left: 0;\r\n  bottom: 0;\r\n  padding: 2%;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow-y: scroll;\r\n  background-color: rgba(255, 255, 255, 0.932);\r\n  background-blend-mode: soft-light;\r\n}\r\n\r\n.items-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 26%;\r\n  gap: 15px;\r\n\r\n  /* Card style */\r\n  margin: 10px;\r\n  background-color: #afbbc159;\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\r\n  overflow: hidden;\r\n}\r\n\r\nimg {\r\n  width: 70%;\r\n  align-self: center;\r\n  cursor: pointer;\r\n}\r\n\r\n#section {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.icon-size {\r\n  width: 28px;\r\n}\r\n\r\n.description-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.title-like {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.items-container > img {\r\n  /* Card style */\r\n  width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\nbutton {\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  position: relative;\r\n  width: 50%;\r\n  height: 10%;\r\n  line-height: 64px;\r\n  transition: all 0.3s;\r\n  transform: scale(1, 1);\r\n  align-self: center;\r\n  border-radius: 10px;\r\n  color: #ff8a53;\r\n  background: #07070700;\r\n  border: 1px solid #fccab3;\r\n  font-weight: normal;\r\n  margin: 6px 0;\r\n  margin-right: 12px;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  font-family: 'Open Sans', sans-serif;\r\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #303638;\r\n  border-radius: 3px;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 40px;\r\n  color: #f8d2c1;\r\n  font-size: 20px;\r\n  font-family:\r\n    hacim-medium,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n}\r\n\r\nheader p {\r\n  color: #323838;\r\n  font-family:\r\n    Hacim-bold,\r\n    'Gill Sans',\r\n    'Gill Sans MT',\r\n    Calibri,\r\n    'Trebuchet MS',\r\n    sans-serif;\r\n  font-size: 30px;\r\n}\r\n\r\n.flexbox {\r\n  background: linear-gradient(155deg, #55c7ed00, #2bb3e000, #f8d2c100);\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.search {\r\n  margin: 20px;\r\n}\r\n\r\n.search > h3 {\r\n  font-weight: normal;\r\n}\r\n\r\n.search > div {\r\n  display: inline-block;\r\n  position: relative;\r\n  filter: drop-shadow(0 1px #0092c200);\r\n}\r\n\r\n.search > div::after {\r\n  content: '';\r\n  background: #2a2c2a;\r\n  width: 4px;\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 21px;\r\n  right: -5px;\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.search > div > input {\r\n  color: #2a2c2a;\r\n  font-size: 16px;\r\n  background: transparent;\r\n  width: 25px;\r\n  height: 25px;\r\n  padding: 10px;\r\n  border: solid 3px #2a2c2a;\r\n  outline: none;\r\n  border-radius: 35px;\r\n  transition: width 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.search > div > input::placeholder {\r\n  color: #2a2c2a;\r\n  opacity: 0;\r\n  transition: opacity 150ms ease-out;\r\n}\r\n\r\n.search > div > input:focus::placeholder {\r\n  opacity: 1;\r\n}\r\n\r\n.search > div > input:focus,\r\n.search > div > input:not(:placeholder-shown) {\r\n  width: 250px;\r\n}\r\n\r\n.art {\r\n  margin-right: 5px;\r\n}\r\n\r\n.dra {\r\n  margin-right: 30px;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.title-like > h3 {\r\n  font-family: Hacim-light, Arial, Helvetica, sans-serif;\r\n  font-size: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf":
/*!*****************************************************************!*\
  !*** ./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Light.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3909911086b67fad6e8.ttf";

/***/ }),

/***/ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf":
/*!******************************************************************!*\
  !*** ./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Medium.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a643f8609757b4fef183.ttf";

/***/ }),

/***/ "./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf":
/*!*****************************************************************!*\
  !*** ./Assets/hacim-simple-sans-serif-font/TTF/Hacim-Round.ttf ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "887b10527333c9164337.ttf";

/***/ }),

/***/ "./Assets/images/icons8.png":
/*!**********************************!*\
  !*** ./Assets/images/icons8.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bcd9c81b52c3e63977d.png";

/***/ }),

/***/ "./Assets/images/pexels-sebastiaan-stam-1097456.jpg":
/*!**********************************************************!*\
  !*** ./Assets/images/pexels-sebastiaan-stam-1097456.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e291456bfcb5e488e6d4.jpg";

/***/ }),

/***/ "./Assets/images/pexels-stephan-seeber-1261728.jpg":
/*!*********************************************************!*\
  !*** ./Assets/images/pexels-stephan-seeber-1261728.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "695e6576103e0f48e480.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVB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QUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvY2FyZENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDYXJkLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9pbml0LmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9saWtlQnV0dG9uLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9saWtlc0RhdGEuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL3VwZGF0ZUxpa2VDb3VudGVyLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2FwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGlzcGxheUNhcmQgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlDYXJkLmpzJztcbmltcG9ydCBDb21tZW50IGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcbmltcG9ydCBpbml0SWQgZnJvbSAnLi9tb2R1bGVzL2luaXQuanMnO1xuaW1wb3J0IGNhcmRDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9jYXJkQ291bnRlci5qcyc7XG5pbXBvcnQgdXBkYXRlQWxsTGlrZXMgZnJvbSAnLi9tb2R1bGVzL2xpa2VzRGF0YS5qcyc7XG5cbi8vIERpc3BsYXkgYWxsIGl0ZW1zXG5jb25zdCBkaXNwbGF5SXRlbXMgPSBhc3luYyAoYXJ0aXN0SWQgPSAnMjcxMjU2JykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbicpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2l0dW5lcy5hcHBsZS5jb20vbG9va3VwP2lkPSR7YXJ0aXN0SWR9JmVudGl0eT1hbGJ1bSZsaW1pdD0xMmAsXG4gICAge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0sXG4gICk7XG4gIGNvbnN0IG9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IG9iai5yZXN1bHRzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBvYmoucmVzdWx0c1tpbmRleF07XG4gICAgZGlzcGxheUNhcmQoXG4gICAgICBjb250YWluZXIsXG4gICAgICBlbGVtZW50LmFydHdvcmtVcmwxMDAsXG4gICAgICBlbGVtZW50LmNvbGxlY3Rpb25DZW5zb3JlZE5hbWUsXG4gICAgICAwLFxuICAgICAgZWxlbWVudC5jb2xsZWN0aW9uSWQsXG4gICAgKTtcbiAgfVxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQnKTtcbiAgQXJyYXkuZnJvbShidG5zKS5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IG9iai5yZXN1bHRzW2luZGV4ICsgMV07XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBDb21tZW50LmRpc3BsYXlDb21tZW50UG9wVXAoZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG4gICAgICBjb25zdCBjb21tZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1ZvbkZ3eUNmVTRiVW54YnZQTlBOL2NvbW1lbnRzLyc7XG4gICAgICBjb25zdCBnZXRDb21tZW50ID0gYXdhaXQgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL1ZvbkZ3eUNmVTRiVW54YnZQTlBOL2NvbW1lbnRzP2l0ZW1faWQ9JHtcbiAgICAgICAgaW5kZXggKyAxXG4gICAgICB9YDtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0YXJlYScpO1xuICAgICAgICBjb25zdCBuYW1lVmFsdWUgPSBuYW1lLnZhbHVlO1xuICAgICAgICBjb25zdCB0ZXh0VmFsdWUgPSB0ZXh0LnZhbHVlO1xuICAgICAgICBhd2FpdCBDb21tZW50LnBvc3RBQ29tbWVudChcbiAgICAgICAgICBjb21tZW50VXJsLFxuICAgICAgICAgIGluZGV4ICsgMSxcbiAgICAgICAgICBuYW1lVmFsdWUsXG4gICAgICAgICAgdGV4dFZhbHVlLFxuICAgICAgICApO1xuICAgICAgICBDb21tZW50LmNsZWFyRmllbGQoKTtcbiAgICAgICAgYXdhaXQgQ29tbWVudC5nZXRDb21tZW50KGdldENvbW1lbnQpO1xuICAgICAgICBDb21tZW50LnNob3dQZXIobmFtZVZhbHVlLCB0ZXh0VmFsdWUpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBzYW5kID0gYXdhaXQgQ29tbWVudC5nZXRDb21tZW50KGdldENvbW1lbnQpO1xuICAgICAgQ29tbWVudC5zaG93Q29tbWVudChzYW5kKTtcbiAgICAgIENvbW1lbnQuY291bnRDb21tZW50KHNhbmQpO1xuICAgIH0pO1xuICB9KTtcbiAgY2FyZENvdW50ZXIoKTtcbiAgdXBkYXRlQWxsTGlrZXMoKTtcbn07XG5pbml0SWQoKTtcbmRpc3BsYXlJdGVtcygpO1xuXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtcG9wdXAnKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IENvbW1lbnQuY2xvc2VQb3BVcChldmVudCkpO1xuIiwiY29uc3QgY2FyZENvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgY2FyZHNjb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcy1jb3VudCcpO1xuICBjYXJkc2NvdW50LmlubmVySFRNTCA9IGBBbGJ1bXMoJHtjYXJkcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDF9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkQ291bnRlcjsiLCJjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tZW50IHtcbiAgc3RhdGljIGNyZWF0ZUNvbW1lbnRQb3BVcCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgbmV3QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBuZXdBcnRpY2xlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSBcIndyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPSBcImZsZXhcIj4gXG4gIDxpbWcgY2xhc3M9XCJwb3AtaW1hZ2VcIiBzcmM9ICR7ZGF0YS5hcnR3b3JrVXJsMTAwfSBhbHQ9XCJJbWFnZVwiLz4gXG4gIDxzcGFuIGNsYXNzPSdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHdoaXRlJz5jbG9zZTwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxoMiBjbGFzcz1cIndoaXRlXCI+Q29sbGVjdGlvbiBOYW1lOiAke2RhdGEuY29sbGVjdGlvbk5hbWV9PC9oMj5cbiAgPGRpdiBjbGFzcz0gXCJwb3AtZGV0YWlsc1wiPlxuICAgIDxhIGNsYXNzPVwid2hpdGUgYm9yZGVyIGxpbmtcIiBocmVmPVwiJHtkYXRhLmNvbGxlY3Rpb25WaWV3VXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPkNsaWNrIEhlcmUgVG8gTGlzdGVuPC9hPlxuICAgIDxwIGNsYXNzPVwid2hpdGUgYm9yZGVyXCI+UmVsZWFzZSBEYXRlOiAke2RhdGEucmVsZWFzZURhdGV9PC9wPlxuICAgIDxwIGNsYXNzPVwid2hpdGUgYm9yZGVyXCI+UHJpY2U6ICQke2RhdGEuY29sbGVjdGlvblByaWNlfTwvcD5cbiAgICA8cCBjbGFzcz1cIndoaXRlIGJvcmRlclwiPkdlbnJlIFR5cGU6ICR7ZGF0YS5wcmltYXJ5R2VucmVOYW1lfTwvcD5cbiAgPC9kaXY+XG4gIDxmaWVsZHNldCBjbGFzcz1cImZpZWxkc2V0XCI+XG4gIDxsZWdlbmQgY2xhc3M9XCJjb3VudCB3aGl0ZVwiPjwvbGVnZW5kPlxuICA8dWwgY2xhc3M9XCJzdG9yZS1jb21tZW50cyB3aGl0ZVwiPjwvdWw+XG4gPC9maWVsZHNldD5cbiAgPGRpdj5cbiAgPGg0IGNsYXNzPSBcIndoaXRlIGNvbW1lbnQtaGVhZGVyXCI+QWRkIGEgQ29tbWVudDwvaDQ+XG4gIDxmb3JtIGlkPVwiZm9ybVwiPlxuICA8aW5wdXRcbiAgdHlwZT1cInRleHRcIlxuICBuYW1lPVwibmFtZVwiXG4gIG1heGxlbmd0aD1cIjIwXCJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgTmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIlwiIGlkPVwidGV4dGFyZWFcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBtYXhsZW5ndGg9XCIxMDBcIiBwbGFjZWhvbGRlcj0gXCJpbnNpZ2h0c1wiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gIGA7XG4gICAgcG9wVXAuYXBwZW5kQ2hpbGQobmV3QXJ0aWNsZSk7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUNvbW1lbnRQb3BVcCA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09IGVsZW1lbnQuY29sbGVjdGlvbklkLnRvU3RyaW5nKCkpIHtcbiAgICAgIENvbW1lbnQuY3JlYXRlQ29tbWVudFBvcFVwKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjbG9zZVBvcFVwID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2hpbGQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gY2hpbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAoY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJykpIHtcbiAgICAgIHBhcmVudENvbnRhaW5lci5yZW1vdmVDaGlsZChcbiAgICAgICAgY2hpbGQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwb3N0QUNvbW1lbnQgPSBhc3luYyAodXJsLCBpZCwgdXNlck5hbWUsIGNvbW1lbnQpID0+IHtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lLFxuICAgICAgICBjb21tZW50LFxuICAgICAgfSksXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0Q29tbWVudCA9IGFzeW5jICh1cmwpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIHJldHVybiBmZXRjaERhdGEuanNvbigpO1xuICB9XG5cbiAgc3RhdGljIGdldFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHBJZCcpKVxuXG4gIHN0YXRpYyBjbGVhckZpZWxkID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRhcmVhJyk7XG4gICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgIHRleHQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBzaG93Q29tbWVudCA9IChjb21tZW50cykgPT4ge1xuICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmllbGRzZXQnKTtcbiAgICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBjb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b3JlLWNvbW1lbnRzJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgJHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fWA7XG4gICAgICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZHNldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzaG93UGVyID0gKG5hbWVWYWx1ZSwgdGV4dFZhbHVlKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgbmV3RGF0ZSA9IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tMCR7XG4gICAgICBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG4gICAgY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9yZS1jb21tZW50cycpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGAke25ld0RhdGV9ICR7bmFtZVZhbHVlfTogJHt0ZXh0VmFsdWV9YDtcbiAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBzdGF0aWMgY291bnRDb21tZW50ID0gKGNvbW1lbnRzKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQnKTtcbiAgICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY291bnQuaW5uZXJIVE1MID0gYENvbW1lbnQgKCAke2NvbW1lbnRzLmxlbmd0aH0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHNldExpa2UgZnJvbSAnLi9saWtlQnV0dG9uLmpzJztcbmltcG9ydCBsaWtlVXJsIGZyb20gJy4uLy4uL0Fzc2V0cy9pbWFnZXMvaWNvbnM4LnBuZyc7XG5cbi8vIERpc3BsYXkgc2luZ2xlIGNhcmQvaXRlbVxuY29uc3QgZGlzcGxheUNhcmQgPSAoY29udGFpbmVyLCBhbGJ1bUltZyA9ICd1bmtub3duJywgYWxidW1OYW1lID0gJ25vLW5hbWUnLCBsaWtlcyA9IDAsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGxpa2VzQ291bnRlciA9IGxpa2VzO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgbGlrZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBjb21tZW50c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCByZXNlcnZhdGlvbnNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgaXRlbUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NlY3Rpb24gPiBkaXYnKS5sZW5ndGg7XG5cbiAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLWxpa2VzJywgbGlrZXNDb3VudGVyKTtcbiAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLWl0ZW1JZCcsIGl0ZW1JZCk7XG4gIGRlc2NyaXB0aW9uVGV4dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FyZGlkJywgaXRlbUlkKTtcbiAgZGVzY3JpcHRpb25UZXh0LnRleHRDb250ZW50ID0gYCR7bGlrZUljb24uZGF0YXNldC5saWtlc30gbGlrZXNgO1xuICBsaWtlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGxpa2VVcmwpO1xuICBsaWtlSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uLXNpemUnKTtcbiAgbGlrZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tY29udGFpbmVyJyk7XG4gIGgzLmlubmVySFRNTCA9IGFsYnVtTmFtZTtcbiAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYWxidW1JbWcpO1xuICBjb21tZW50c0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21tZW50Jyk7XG4gIGNvbW1lbnRzQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY29tbWVudHNCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGluZGV4KTtcbiAgcmVzZXJ2YXRpb25zQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY29tbWVudHNCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICByZXNlcnZhdGlvbnNCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb24nO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnaXRlbXMtY29udGFpbmVyJyk7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWxpa2UnKTtcbiAgaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldExpa2UpO1xuXG4gIGxpa2VzQ29udGFpbmVyLmFwcGVuZChpLCBkZXNjcmlwdGlvblRleHQpO1xuICBpLmFwcGVuZChsaWtlSWNvbik7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZChoMywgbGlrZXNDb250YWluZXIpO1xuICBkaXYuYXBwZW5kKGltZywgdGl0bGVDb250YWluZXIsIGNvbW1lbnRzQnV0dG9uLCByZXNlcnZhdGlvbnNCdXR0b24pO1xuICBjb250YWluZXIuYXBwZW5kKGRpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q2FyZDsiLCIvKiBJbml0IEFwcCBpZCAqL1xuLy8gQ2hlY2sgZm9yIGFuIGV4aXN0aW5nIEFwcCBpZCwgaWYgdGhlcmUgaXNuJ3QgY3JlYXRlIG9uZVxuXG5jb25zdCBpbml0SWQgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwSWQnKSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGlkID0gJ1ZvbkZ3eUNmVTRiVW54YnZQTlBOJztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBwSWQnLCBKU09OLnN0cmluZ2lmeShpZCkpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0SWQ7IiwiaW1wb3J0IHVwZGF0ZUxpa2VDb3VudGVyIGZyb20gJy4vdXBkYXRlTGlrZUNvdW50ZXIuanMnO1xuXG4vLyBBZGQgbGlrZSB0byBpdGVtIHVzaW5nIEludm9sdmVtZW50IEFQSVxuYXN5bmMgZnVuY3Rpb24gc2V0TGlrZSgpIHtcbiAgY29uc3QgbGlrZUljb24gPSB0aGlzLmZpcnN0Q2hpbGQ7XG4gIGxldCBsaWtlc051bWJlciA9IGxpa2VJY29uLmRhdGFzZXQubGlrZXM7XG4gIGNvbnN0IGNhcmRJZCA9IGxpa2VJY29uLmRhdGFzZXQuaXRlbWlkO1xuICBjb25zdCBhcHBJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcElkJykpO1xuXG4gIGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2FwcElkfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7Y2FyZElkfWAsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgbGlrZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLWxpa2VzJywgbGlrZXNOdW1iZXIgPSBOdW1iZXIobGlrZXNOdW1iZXIpICsgMSk7XG4gIHVwZGF0ZUxpa2VDb3VudGVyKGNhcmRJZCwgbGlrZXNOdW1iZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRMaWtlOyIsImltcG9ydCB1cGRhdGVMaWtlQ291bnRlciBmcm9tICcuL3VwZGF0ZUxpa2VDb3VudGVyLmpzJztcblxuY29uc3QgdXBkYXRlQWxsTGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwcElkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwSWQnKSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwSWR9L2xpa2VzL2AsXG4gICAge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbiAgY29uc3Qgb2JqID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgbGlzdCA9IGF3YWl0IG9iajtcbiAgbGlzdCA9IGxpc3Quc2xpY2UoMCk7XG4gIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUxpa2VDb3VudGVyKGVsZW1lbnQuaXRlbV9pZCwgZWxlbWVudC5saWtlcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQWxsTGlrZXM7IiwiY29uc3QgdXBkYXRlTGlrZUNvdW50ZXIgPSAoY2FyZElkLCBsaWtlcykgPT4ge1xuICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhcmRpZD1cIiR7Y2FyZElkfVwiXWApO1xuICBjb25zdCBsaWtlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWl0ZW1pZD1cIiR7Y2FyZElkfVwiXWApO1xuICBsaWtlSWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlrZXMnLCBsaWtlcyk7XG4gIHBFbGVtZW50LnRleHRDb250ZW50ID0gYCR7bGlrZXN9IGxpa2VzYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUxpa2VDb3VudGVyOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvaGFjaW0tc2ltcGxlLXNhbnMtc2VyaWYtZm9udC9UVEYvSGFjaW0tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL0Fzc2V0cy9oYWNpbS1zaW1wbGUtc2Fucy1zZXJpZi1mb250L1RURi9IYWNpbS1Sb3VuZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvaGFjaW0tc2ltcGxlLXNhbnMtc2VyaWYtZm9udC9UVEYvSGFjaW0tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vQXNzZXRzL2ltYWdlcy9wZXhlbHMtc3RlcGhhbi1zZWViZXItMTI2MTcyOC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9Bc3NldHMvaW1hZ2VzL3BleGVscy1zZWJhc3RpYWFuLXN0YW0tMTA5NzQ1Ni5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0hhY2ltLW1lZGl1bSc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdIYWNpbS1ib2xkJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0hhY2ltLWxpZ2h0JztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICAnSGFjaW0tbWVkaXVtJyxcXHJcXG4gICAgJ0dpbGwgU2FucycsXFxyXFxuICAgICdHaWxsIFNhbnMgTVQnLFxcclxcbiAgICBDYWxpYnJpLFxcclxcbiAgICAnVHJlYnVjaGV0IE1TJyxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcblxcclxcbiAgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIG1hcmdpbjogMTZweCBhdXRvO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMzAzNjM4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlciB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jb3VudCB7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5saW5rOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmY4YTUzO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmY4YTUzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWRlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjhhNTM7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmOGE1MztcXHJcXG59XFxyXFxuXFxyXFxuI3RleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5hcnRpY2xlIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcGFkZGluZzogMiU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTMyKTtcXHJcXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc29mdC1saWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAyNiU7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuXFxyXFxuICAvKiBDYXJkIHN0eWxlICovXFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiYmMxNTk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1zaXplIHtcXHJcXG4gIHdpZHRoOiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWxpa2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLWNvbnRhaW5lciA+IGltZyB7XFxyXFxuICAvKiBDYXJkIHN0eWxlICovXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZjhhNTM7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDcwNzA3MDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmNjYWIzO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIG1hcmdpbjogNnB4IDA7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDM2Mzg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDQwcHg7XFxyXFxuICBjb2xvcjogI2Y4ZDJjMTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OlxcclxcbiAgICBoYWNpbS1tZWRpdW0sXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBwIHtcXHJcXG4gIGNvbG9yOiAjMzIzODM4O1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuICAgIEhhY2ltLWJvbGQsXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5mbGV4Ym94IHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTVkZWcsICM1NWM3ZWQwMCwgIzJiYjNlMDAwLCAjZjhkMmMxMDApO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGgzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAjMDA5MmMyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGJhY2tncm91bmQ6ICMyYTJjMmE7XFxyXFxuICB3aWR0aDogNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMXB4O1xcclxcbiAgcmlnaHQ6IC01cHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQge1xcclxcbiAgY29sb3I6ICMyYTJjMmE7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogc29saWQgM3B4ICMyYTJjMmE7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICMyYTJjMmE7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGRpdiA+IGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXFxyXFxuLnNlYXJjaCA+IGRpdiA+IGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyYSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbGlrZSA+IGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBIYWNpbS1saWdodCwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBcUU7QUFDdkU7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQW9FO0FBQ3RFOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUFvRTtBQUN0RTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNUOzs7Ozs7Y0FNWTtBQUNkOztBQUVBO0VBQ0UseURBQXlFOztFQUV6RSxnQkFBZ0I7RUFDaEIsWUFBWTs7RUFFWixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVB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LFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0hhY2ltLW1lZGl1bSc7XFxyXFxuICBzcmM6IHVybCguLi9Bc3NldHMvaGFjaW0tc2ltcGxlLXNhbnMtc2VyaWYtZm9udC9UVEYvSGFjaW0tTWVkaXVtLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdIYWNpbS1ib2xkJztcXHJcXG4gIHNyYzogdXJsKC4uL0Fzc2V0cy9oYWNpbS1zaW1wbGUtc2Fucy1zZXJpZi1mb250L1RURi9IYWNpbS1Sb3VuZC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSGFjaW0tbGlnaHQnO1xcclxcbiAgc3JjOiB1cmwoLi4vQXNzZXRzL2hhY2ltLXNpbXBsZS1zYW5zLXNlcmlmLWZvbnQvVFRGL0hhY2ltLUxpZ2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgJ0hhY2ltLW1lZGl1bScsXFxyXFxuICAgICdHaWxsIFNhbnMnLFxcclxcbiAgICAnR2lsbCBTYW5zIE1UJyxcXHJcXG4gICAgQ2FsaWJyaSxcXHJcXG4gICAgJ1RyZWJ1Y2hldCBNUycsXFxyXFxuICAgIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL0Fzc2V0cy9pbWFnZXMvcGV4ZWxzLXN0ZXBoYW4tc2VlYmVyLTEyNjE3MjguanBnKTtcXHJcXG5cXHJcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW46IDE2cHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzMwMzYzODtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcC1pbWFnZSB7XFxyXFxuICB3aWR0aDogMjAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnQge1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmOGE1MztcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmOGE1MztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmY4YTUzO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZjhhNTM7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3AtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9Bc3NldHMvaW1hZ2VzL3BleGVscy1zZWJhc3RpYWFuLXN0YW0tMTA5NzQ1Ni5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBwYWRkaW5nOiAyJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzIpO1xcclxcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzb2Z0LWxpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDI2JTtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG5cXHJcXG4gIC8qIENhcmQgc3R5bGUgKi9cXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmJiYzE1OTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5pY29uLXNpemUge1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtbGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtY29udGFpbmVyID4gaW1nIHtcXHJcXG4gIC8qIENhcmQgc3R5bGUgKi9cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICBsaW5lLWhlaWdodDogNjRweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmOGE1MztcXHJcXG4gIGJhY2tncm91bmQ6ICMwNzA3MDcwMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmY2NhYjM7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbWFyZ2luOiA2cHggMDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzYzODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNDBweDtcXHJcXG4gIGNvbG9yOiAjZjhkMmMxO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6XFxyXFxuICAgIGhhY2ltLW1lZGl1bSxcXHJcXG4gICAgJ0dpbGwgU2FucycsXFxyXFxuICAgICdHaWxsIFNhbnMgTVQnLFxcclxcbiAgICBDYWxpYnJpLFxcclxcbiAgICAnVHJlYnVjaGV0IE1TJyxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHAge1xcclxcbiAgY29sb3I6ICMzMjM4Mzg7XFxyXFxuICBmb250LWZhbWlseTpcXHJcXG4gICAgSGFjaW0tYm9sZCxcXHJcXG4gICAgJ0dpbGwgU2FucycsXFxyXFxuICAgICdHaWxsIFNhbnMgTVQnLFxcclxcbiAgICBDYWxpYnJpLFxcclxcbiAgICAnVHJlYnVjaGV0IE1TJyxcXHJcXG4gICAgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXhib3gge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1NWRlZywgIzU1YzdlZDAwLCAjMmJiM2UwMDAsICNmOGQyYzEwMCk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gge1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gaDMge1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4ICMwMDkyYzIwMCk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXY6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgYmFja2dyb3VuZDogIzJhMmMyYTtcXHJcXG4gIHdpZHRoOiA0cHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIxcHg7XFxyXFxuICByaWdodDogLTVweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYgPiBpbnB1dCB7XFxyXFxuICBjb2xvcjogIzJhMmMyYTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAzcHggIzJhMmMyYTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCA+IGRpdiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogIzJhMmMyYTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggPiBkaXYgPiBpbnB1dDpmb2N1cyxcXHJcXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS1saWtlID4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IEhhY2ltLWxpZ2h0LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbImRpc3BsYXlDYXJkIiwiQ29tbWVudCIsImluaXRJZCIsImNhcmRDb3VudGVyIiwidXBkYXRlQWxsTGlrZXMiLCJkaXNwbGF5SXRlbXMiLCJhcnRpc3RJZCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImpzb24iLCJvYmoiLCJpbmRleCIsInJlc3VsdHMiLCJsZW5ndGgiLCJlbGVtZW50IiwiYXJ0d29ya1VybDEwMCIsImNvbGxlY3Rpb25DZW5zb3JlZE5hbWUiLCJjb2xsZWN0aW9uSWQiLCJidG5zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkaXNwbGF5Q29tbWVudFBvcFVwIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJjb21tZW50VXJsIiwiZ2V0Q29tbWVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRleHQiLCJuYW1lVmFsdWUiLCJ2YWx1ZSIsInRleHRWYWx1ZSIsInBvc3RBQ29tbWVudCIsImNsZWFyRmllbGQiLCJzaG93UGVyIiwic2FuZCIsInNob3dDb21tZW50IiwiY291bnRDb21tZW50IiwiY2xvc2VQb3BVcCIsImNhcmRzIiwiY2FyZHNjb3VudCIsImlubmVySFRNTCIsImNoaWxkTm9kZXMiLCJwb3BVcCIsImRhdGEiLCJuZXdBcnRpY2xlIiwiY3JlYXRlRWxlbWVudCIsImNvbGxlY3Rpb25OYW1lIiwiY29sbGVjdGlvblZpZXdVcmwiLCJyZWxlYXNlRGF0ZSIsImNvbGxlY3Rpb25QcmljZSIsInByaW1hcnlHZW5yZU5hbWUiLCJhcHBlbmRDaGlsZCIsInRhcmdldCIsImlkIiwidG9TdHJpbmciLCJjcmVhdGVDb21tZW50UG9wVXAiLCJjaGlsZCIsInBhcmVudENvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIiwidXJsIiwidXNlck5hbWUiLCJjb21tZW50IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtX2lkIiwidXNlcm5hbWUiLCJmZXRjaERhdGEiLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb21tZW50cyIsImZpZWxkc2V0IiwiY29tbWVudENvbnRhaW5lciIsImNyZWF0aW9uX2RhdGUiLCJzdHlsZSIsImRpc3BsYXkiLCJkYXRlIiwiRGF0ZSIsIm5ld0RhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImNvdW50Iiwic2V0TGlrZSIsImxpa2VVcmwiLCJhbGJ1bUltZyIsImFsYnVtTmFtZSIsImxpa2VzIiwibGlrZXNDb3VudGVyIiwiZGl2IiwiaW1nIiwiaSIsImgzIiwidGl0bGVDb250YWluZXIiLCJsaWtlSWNvbiIsImxpa2VzQ29udGFpbmVyIiwiZGVzY3JpcHRpb25UZXh0IiwiY29tbWVudHNCdXR0b24iLCJyZXNlcnZhdGlvbnNCdXR0b24iLCJpdGVtSWQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImRhdGFzZXQiLCJhZGQiLCJhcHBlbmQiLCJzZXRJdGVtIiwidXBkYXRlTGlrZUNvdW50ZXIiLCJmaXJzdENoaWxkIiwibGlrZXNOdW1iZXIiLCJjYXJkSWQiLCJpdGVtaWQiLCJhcHBJZCIsIk51bWJlciIsImxpc3QiLCJzbGljZSIsInBFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==