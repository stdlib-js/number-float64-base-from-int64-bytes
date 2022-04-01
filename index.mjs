// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";var n=t,r=s,i=new e(8);var d=function(t,e,s){var d,a,m,f,l;if(1===e)f=t;else{for(f=i,l=0;l<8;l++)f[l]=t[s],s+=e;s=0}return d=new r(f.buffer,f.byteOffset,f.byteLength),n?(m=d.getInt32(s,n),a=d.getInt32(s+4,n)):(a=d.getInt32(s,n),m=d.getInt32(s+4,n)),m<0&&(m+=4294967296),4294967296*a+m};export{d as default};
//# sourceMappingURL=index.mjs.map
