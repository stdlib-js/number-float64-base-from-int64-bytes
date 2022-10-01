// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,r=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,f,i,a,u;if(null==t)return e.call(t);f=t[o],u=o,n=null!=(a=t)&&r.call(a,u);try{t[o]=void 0}catch(n){return e.call(t)}return i=e.call(t),n?t[o]=f:delete t[o],i}:function(t){return e.call(t)},i="function"==typeof Uint8Array,a="function"==typeof Uint8Array?Uint8Array:null,u="function"==typeof Uint8Array?Uint8Array:void 0;t=function(){var t,n,e;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,256,257]),e=n,t=(i&&e instanceof Uint8Array||"[object Uint8Array]"===f(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?u:function(){throw new Error("not implemented")};var y,c=t,l="function"==typeof Uint16Array,p="function"==typeof Uint16Array?Uint16Array:null,w="function"==typeof Uint16Array?Uint16Array:void 0;y=function(){var t,n,e;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,65536,65537]),e=n,t=(l&&e instanceof Uint16Array||"[object Uint16Array]"===f(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?w:function(){throw new Error("not implemented")};var A,b={uint16:y,uint8:c};(A=new b.uint16(1))[0]=4660;var s,d=52===new b.uint8(A.buffer)[0],m="function"==typeof DataView,v="function"==typeof ArrayBuffer,g="function"==typeof Float64Array,h="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;s=function(){var t,n,e;if("function"!=typeof h)return!1;try{n=new h([1,3.14,-3.14,NaN]),e=n,t=(g&&e instanceof Float64Array||"[object Float64Array]"===f(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?F:function(){throw new Error("not implemented")};var U,V=s,j="function"==typeof ArrayBuffer?ArrayBuffer:null,B="function"==typeof ArrayBuffer?ArrayBuffer:void 0;U=function(){var t,n,e,r;if("function"!=typeof j)return!1;try{e=new j(16),r=e,(t=(v&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===f(r))&&"function"==typeof j.isView)&&((n=new V(e))[0]=-3.14,n[1]=NaN,t=t&&j.isView(n)&&16===e.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){t=!1}return t}()?B:function(){throw new Error("not implemented")};var S,D=U,N="function"==typeof DataView?DataView:null,E="function"==typeof DataView?DataView:void 0;S=function(){var t,n,e,r;if("function"!=typeof N)return!1;try{e=new D(24),n=new N(e,8),r=n,(t=(m&&r instanceof DataView||"[object DataView]"===f(r))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),t=t&&n.buffer===e&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){t=!1}return t}()?E:function(){throw new Error("not implemented")};var I=S,O=4294967296,T=new c(8);return function(t,n,e){var r,o,f,i,a;if(1===n)i=t;else{for(i=T,a=0;a<8;a++)i[a]=t[e],e+=n;e=0}return r=new I(i.buffer,i.byteOffset,i.byteLength),d?(f=r.getInt32(e,d),o=r.getInt32(e+4,d)):(o=r.getInt32(e,d),f=r.getInt32(e+4,d)),f<0&&(f+=O),o*O+f}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).fromInt64Bytes=n();
//# sourceMappingURL=index.js.map