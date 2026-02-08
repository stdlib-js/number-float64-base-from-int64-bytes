// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.2.2-esm/index.mjs";var n=4294967296,r=new e(8);function i(e,i,d){var a,m,f,l,j;if(1===i)l=e;else{for(l=r,j=0;j<8;j++)l[j]=e[d],d+=i;d=0}return a=new s(l.buffer,l.byteOffset,l.byteLength),t?(f=a.getInt32(d,t),m=a.getInt32(d+4,t)):(m=a.getInt32(d,t),f=a.getInt32(d+4,t)),f<0&&(f+=n),m*n+f}export{i as default};
//# sourceMappingURL=index.mjs.map
