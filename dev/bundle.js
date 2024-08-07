(function (l, r) {
  if (!l || l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src =
    '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.getElementsByTagName('head')[0].appendChild(r);
})(self.document);
var rollupTsUtils = (function (exports, _asyncToGenerator, _regeneratorRuntime, _Promise) {
  'use strict';

  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }

  var asyncFunction = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
        var result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1)
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return _Promise.resolve('Babel test');
              case 2:
                result = _context.sent;
                return _context.abrupt('return', result);
              case 4:
              case 'end':
                return _context.stop();
            }
        }, _callee);
      }),
    );
    return function asyncFunction() {
      return _ref.apply(this, arguments);
    };
  })();

  exports.add = add;
  exports.asyncFunction = asyncFunction;
  exports.divide = divide;
  exports.multiply = multiply;
  exports.subtract = subtract;

  return exports;
})({}, _asyncToGenerator, _regeneratorRuntime, _Promise);
//# sourceMappingURL=bundle.js.map
