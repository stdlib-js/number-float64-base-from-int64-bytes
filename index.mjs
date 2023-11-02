// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.1.0-esm/index.mjs";var n=new e(8);function r(e,r,i){var d,a,m,f,l;if(1===r)f=e;else{for(f=n,l=0;l<8;l++)f[l]=e[i],i+=r;i=0}return d=new s(f.buffer,f.byteOffset,f.byteLength),t?(m=d.getInt32(i,t),a=d.getInt32(i+4,t)):(a=d.getInt32(i,t),m=d.getInt32(i+4,t)),m<0&&(m+=4294967296),4294967296*a+m}export{r as default};
//# sourceMappingURL=index.mjs.map
