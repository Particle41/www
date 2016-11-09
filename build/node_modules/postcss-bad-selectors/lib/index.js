'use strict';

/**
 * Module dependencies.
 */
var postcss = require('postcss');
var lodash  = require('lodash');

/**
 * Register the PostCSS plugin.
 */
module.exports = postcss.plugin('postcss-bad-selectors', plugin);

/**
 * PostCSS plugin definition.
 *
 * @param  {Function} cb
 * @return {Function}
 */
function plugin(cb) {
	return function(css) {
		if (lodash.isFunction(cb)) {
			var token = cb(css.source.input.file);

			if (!lodash.isNull(token)) {
				css.eachRule(function(rule) {
					if (!areSelectorsValid(rule.selectors, token)) {
						throw rule.error('Wrong selector');
					}
				});
			}
		}
	}
}

/**
 * Checks if all selectors in collection are valid.
 *
 * @param  {Array}  selectors
 * @param  {String} token
 * @return {Boolean}
 */
function areSelectorsValid(selectors, token) {
	return lodash.every(selectors, function(selector) {
		if (lodash.isRegExp(token)) {
			return token.test(lodash.trim(selector));
		} else {
			return lodash.startsWith(lodash.trim(selector), token);
		}
	});
}
