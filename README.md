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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# fromInt64Bytes

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a signed 64-bit integer byte array to a [double-precision floating-point number][ieee754].

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float64-base-from-int64-bytes
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var fromInt64Bytes = require( '@stdlib/number-float64-base-from-int64-bytes' );
```

#### fromInt64Bytes( bytes, stride, offset )

Converts a signed 64-bit integer byte array to a [double-precision floating-point number][ieee754].

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
var out = fromInt64Bytes( bytes, 1, 0 );
// returns -1.0
```

The function supports providing a `stride` and an index `offset` for indexing into a provided byte array.

<!-- eslint-disable max-len -->

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

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
var IS_LITTLE_ENDIAN = require( '@stdlib/assert-is-little-endian' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var bernoulli = require( '@stdlib/random-base-bernoulli' );
var Uint8Array = require( '@stdlib/array-uint8' );
var fromInt64Bytes = require( '@stdlib/number-float64-base-from-int64-bytes' );

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

* * *

## See Also

-   <span class="package-name">[`@stdlib/number-float64/base/to-int64-bytes`][@stdlib/number/float64/base/to-int64-bytes]</span><span class="delimiter">: </span><span class="description">convert an integer-valued double-precision floating-point number to a signed 64-bit integer byte array according to host byte order.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float64-base-from-int64-bytes/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-from-int64-bytes/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/number/float64/base/to-int64-bytes]: https://github.com/stdlib-js/number-float64-base-to-int64-bytes

<!-- </related-links> -->

</section>

<!-- /.links -->
