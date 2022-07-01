<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# fromInt64Bytes

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a signed 64-bit integer byte array to a [double-precision floating-point number][ieee754].



<section class="usage">

## Usage

```javascript
import fromInt64Bytes from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-int64-bytes@deno/mod.js';
```

#### fromInt64Bytes( bytes, stride, offset )

Converts a signed 64-bit integer byte array to a [double-precision floating-point number][ieee754].

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
var out = fromInt64Bytes( bytes, 1, 0 );
// returns -1.0
```

The function supports providing a `stride` and an index `offset` for indexing into a provided byte array.

<!-- eslint-disable max-len -->

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var bytes = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] );
var out = fromInt64Bytes( bytes, 2, 1 );
// returns -1.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes host byte order (endianness).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import IS_LITTLE_ENDIAN from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@deno/mod.js';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import fromInt64Bytes from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-int64-bytes@deno/mod.js';

var bytes;
var sgn;
var x;
var b;
var s;
var i;
var j;
var k;

bytes = new Uint8Array( 8 );
if ( IS_LITTLE_ENDIAN ) {
    k = 0;
    s = 1;
} else {
    k = 7;
    s = -1;
}
// Generate random integer-valued doubles on the interval (-2^16, 2^16)...
for ( i = 0; i < 10; i++ ) {
    // Determine the sign:
    sgn = ( bernoulli( 0.5 ) ) ? 0 : 128; // 2^7

    // Set a subset of individual (lower-order) bytes:
    for ( j = 0; j < 2; j++ ) {
        b = discreteUniform( 0, 255 ); // 2^8-1
        bytes[ k+(j*s) ] = b;
    }
    // Set higher-order bytes using two's complement:
    for ( j = 2; j < 8; j++ ) {
        bytes[ k+(j*s) ] = ( sgn ) ? 255 : 0; // 2^8-1
    }
    // Convert the bytes to a double:
    x = fromInt64Bytes( bytes, 1, 0 );
    console.log( bytes + ' => ' + x );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-from-int64-bytes.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-from-int64-bytes

[test-image]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-from-int64-bytes/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-from-int64-bytes?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-from-int64-bytes.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-from-int64-bytes/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-from-int64-bytes/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
