// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var t=function(t){return r(t)===t&&t>=0},a=Math.sqrt,n=Number.POSITIVE_INFINITY,u=t,e=a,o=n;var I=function(r,t,a){return!u(r)||!u(t)||!u(a)||r===o||t===o||t>r||a>r?NaN:(r-2*t)*e(r-1)*(r-2*a)/(e(a*t*(r-t)*(r-a))*(r-2))};export{I as default};
//# sourceMappingURL=mod.js.map
