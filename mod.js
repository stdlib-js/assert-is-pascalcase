// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,u=e.__defineSetter__,a=e.__lookupGetter__,l=e.__lookupSetter__;var i=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,i){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof i||null===i||"[object Array]"===n.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((f="value"in i)&&(a.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=i.value,t.__proto__=c):t[r]=i.value),p="get"in i,y="set"in i,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,i.get),y&&u&&u.call(t,r,i.set),t};function c(t,r,e){i(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=y()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[_],u=_,r=null!=(o=t)&&b.call(o,u);try{t[_]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[_]=e:delete t[_],n}:function(t){return v.call(t)},g=String.prototype.valueOf;var m=y();function S(t){return"object"==typeof t&&(t instanceof String||(m?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===s(t)))}function d(t){return f(t)||S(t)}function j(t,r,e){return t.replace(r,e)}c(d,"isPrimitive",f),c(d,"isObject",S);var w=void 0!==String.prototype.trim,h=String.prototype.trim;var O=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var P=w&&""===h.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===h.call("᠎")?function(t){return h.call(t)}:function(t){return j(t,O,"$1")},$=/\s+/g,A=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,T=/(?:\s|^)([^\s]+)(?=\s|$)/g,C=/([a-z0-9])([A-Z])/g;function E(t,r){return function(t){return""===t?"":t.charAt(0).toUpperCase()+t.slice(1)}(r.toLowerCase())}function k(t){return f(t)&&(r=j(r=t,A," "),r=j(r,$," "),r=j(r,C,"$1 $2"),j(r=P(r),T,E)===t);var r}export{k as default};
//# sourceMappingURL=mod.js.map
