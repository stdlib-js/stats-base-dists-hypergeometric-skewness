// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function t(t){return r(t)===t&&t>=0}var a=Math.sqrt,n=Number.POSITIVE_INFINITY;function u(r,u,e){return!t(r)||!t(u)||!t(e)||r===n||u===n||u>r||e>r?NaN:(r-2*u)*a(r-1)*(r-2*e)/(a(e*u*(r-u)*(r-e))*(r-2))}export{u as default};
//# sourceMappingURL=mod.js.map
