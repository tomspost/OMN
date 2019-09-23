# colour-proximity

Get a value of the proximity of two hex colours.

This package also exports `rgb2lab([r,g,b])`, a function that converts RGB to L*a*b* at Observer=2° and Illuminant=D65

## Example

```javascript
colour-proximity.proximity("#ffffff","#fffffe")	// 0.5074219151751335
colour-proximity.proximity("#ffffff","#000000")	// 100.000000625
```

## Install

Use [node](http://nodejs.org) with [npm](http://npmjs.org):

	npm install colour-proximity
