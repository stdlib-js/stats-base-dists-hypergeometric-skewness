"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=o(function(g,q){
var i=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),u=require('@stdlib/math-base-special-sqrt/dist'),v=require('@stdlib/constants-float64-pinf/dist');function c(r,e,t){var s,a;return!i(r)||!i(e)||!i(t)||r===v||e===v||e>r||t>r?NaN:(s=(r-2*e)*u(r-1)*(r-2*t),a=u(t*e*(r-e)*(r-t))*(r-2),s/a)}q.exports=c
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
