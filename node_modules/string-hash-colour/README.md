# string-hash-colour

Pick a colour from a string. Repeatable but not reversable.

You can also choose a colour you would like to avoid similarity to, with a given minimum proximity.

## Example

```javascript
var shc = require("string-hash-colour");

shc.convert("Hello world!")	// #1b8519

shc.convert("Hello world!", { avoid: "#1b8519" }); //#b85199

shc.convert("Hello world!", { avoid: "#1b8519", proximity: 100 }); // ...still #b85199. I can't find a hash that isn't very far away immediately upon detection of proximity. But this is how you use it, anyway.
```

## Install

Use [node](http://nodejs.org) with [npm](http://npmjs.org):

	npm install string-hash-colour
