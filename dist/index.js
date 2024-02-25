"use strict";var b=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var w=b(function(O,q){
var n=require('@stdlib/assert-is-little-endian/dist'),c=require('@stdlib/array-uint8/dist'),l=require('@stdlib/array-dataview/dist'),g=4294967296,y=new c(8);function A(v,r,e){var a,I,i,t,u;if(r===1)t=v;else{for(t=y,u=0;u<8;u++)t[u]=v[e],e+=r;e=0}return a=new l(t.buffer,t.byteOffset,t.byteLength),n?(i=a.getInt32(e,n),I=a.getInt32(e+4,n)):(I=a.getInt32(e,n),i=a.getInt32(e+4,n)),i<0&&(i+=g),I*g+i}q.exports=A
});var E=w();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
