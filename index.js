// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=Math.floor;function t(t){return e(t)===t&&t>=0}var n=Math.sqrt,o=Number.POSITIVE_INFINITY;return function(e,f,r){return!t(e)||!t(f)||!t(r)||e===o||f===o||f>e||r>e?NaN:(e-2*f)*n(e-1)*(e-2*r)/(n(r*f*(e-f)*(e-r))*(e-2))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).skewness=t();
//# sourceMappingURL=index.js.map
