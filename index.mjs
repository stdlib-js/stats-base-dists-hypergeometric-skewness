// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";function n(n,i,r){return!s(n)||!s(i)||!s(r)||n===e||i===e||i>n||r>n?NaN:(n-2*i)*t(n-1)*(n-2*r)/(t(r*i*(n-i)*(n-r))*(n-2))}export{n as default};
//# sourceMappingURL=index.mjs.map
