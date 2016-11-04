# postcss-bad-selectors [![Build Status](https://travis-ci.org/2createStudio/postcss-bad-selectors.svg?branch=master)](https://travis-ci.org/2createStudio/postcss-bad-selectors) [![npm version](https://badge.fury.io/js/postcss-bad-selectors.svg)](http://badge.fury.io/js/postcss-bad-selectors)

> [PostCSS](https://github.com/postcss/postcss) plugin that slaps you, if you write wrong selectors.

## Install

```
npm install postcss-bad-selectors
```

## Example

```javascript
var path    = require('path');
var postcss = require('postcss');
var bad     = require('postcss-bad-selectors');

postcss([bad(getToken)])
	.process(css, { from: './css/_module.logo.css' })
	.catch(function(err) {
		console.log(err); // Wrong selector error
	})


function getToken(file) {
	var file        = path.basename(file);
	var prefixRegex = /^_module/gi;
	var token       = null;

	if (prefixRegex.test(file)) {
		token = file.replace(prefixRegex, '');
		token = path.basename(token, '.css');
	}

	return token; // 'Valid CSS selector e.g. _module.logo.css => .logo'
}
```

**Note:** `getToken` can return `String` or `RegExp`.

## Input
```css
.logo {}
.wrapper .logo-blue {}
```

## Output
```
postcss-bad-selectors: /Users/john/Server/project/css/_module.logo.css:8:2: Wrong selector
@media (max-width: 767px) {
	.logo,
 ^
	.wrapper .logo-blue {}
```

## Contributing

Pull requests are welcome.

## License
MIT © 2createStudio
