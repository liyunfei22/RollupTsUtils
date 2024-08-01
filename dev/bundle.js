
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var rollupTsUtils = (function (exports) {
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

    exports.add = add;
    exports.divide = divide;
    exports.multiply = multiply;
    exports.subtract = subtract;

    return exports;

})({});
//# sourceMappingURL=bundle.js.map
