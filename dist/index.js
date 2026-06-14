"use strict";var b=function(v,e){return function(){try{return e||v((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var w=b(function(O,q){"use strict";var n=require("@stdlib/assert-is-little-endian"),c=require("@stdlib/array-uint8"),l=require("@stdlib/array-dataview"),g=4294967296,y=new c(8);function A(v,e,r){var a,I,i,t,u;if(e===1)t=v;else{for(t=y,u=0;u<8;u++)t[u]=v[r],r+=e;r=0}return a=new l(t.buffer,t.byteOffset,t.byteLength),n?(i=a.getInt32(r,n),I=a.getInt32(r+4,n)):(I=a.getInt32(r,n),i=a.getInt32(r+4,n)),i<0&&(i+=g),I*g+i}q.exports=A});var E=w();module.exports=E;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
