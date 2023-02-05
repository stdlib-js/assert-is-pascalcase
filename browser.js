// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__,a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(i.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,a.get),y&&u&&u.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"string"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",d=y()?function(t){var e,r,n,o,u;if(null==t)return s.call(t);r=t[_],u=_,e=null!=(o=t)&&b.call(o,u);try{t[_]=void 0}catch(e){return s.call(t)}return n=s.call(t),e?t[_]=r:delete t[_],n}:function(t){return s.call(t)},g=String.prototype.valueOf,v=y();function m(t){return"object"==typeof t&&(t instanceof String||(v?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function S(t){return f(t)||m(t)}function j(t,e,r){return t.replace(e,r)}c(S,"isPrimitive",f),c(S,"isObject",m);var h=void 0!==String.prototype.trim,w=String.prototype.trim,O=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,P=h&&""===w.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===w.call("᠎")?function(t){return w.call(t)}:function(t){return j(t,O,"$1")},T=/\s+/g,$=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,A=/(?:\s|^)([^\s]+)(?=\s|$)/g,x=/([a-z0-9])([A-Z])/g;function C(t,e){return function(t){return""===t?"":t.charAt(0).toUpperCase()+t.slice(1)}(e.toLowerCase())}return function(t){return f(t)&&(e=j(e=t,$," "),e=j(e,T," "),e=j(e,x,"$1 $2"),j(e=P(e),A,C)===t);var e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isPascalcase=e();
//# sourceMappingURL=browser.js.map
