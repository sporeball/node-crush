# node-crush

<a href="https://www.npmjs.com/package/@sporeball/node-crush"><img src="https://img.shields.io/npm/v/@sporeball/node-crush" /></a>

> crush JavaScript files - reduce file size by 20% or more

a port of [Aivo Paas](https://twitter.com/aivopaas)' tool [JSCrush](http://www.iteral.com/jscrush) for the *modren era* -- TypeScript declarations, no leaking to the global scope, etc.

uses a brute-force algorithm to produce a compressed statement that can be `eval`'ed back into the original.\
this has been a staple of [JS1k](https://js1k.com) for many years.

## disclaimer
aside from fixing scope issues, the algorithm used in this package is unchanged from the original, and may be **prohibitively slow** to produce output depending on the size of the input (several seconds or minutes).\
as mentioned above, it also **requires an eval** for decompression; make sure you trust the code you're passing to it.

## install
```
$ npm install @sporeball/node-crush
```

## API

### crush(input)

#### input
type: `string`

a string containing the JavaScript code to crush.

---

### donate
you can support the development of this project and others via Patreon:

[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsporeball%26type%3Dpledges%26suffix%3D%252Fmonth&style=for-the-badge)](https://patreon.com/sporeball)
