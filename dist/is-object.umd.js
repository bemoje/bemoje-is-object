(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-array')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-array'], factory) :
	(global = global || self, global['is-object'] = factory(global.isArray));
}(this, (function (isArray) { 'use strict';

	isArray = isArray && Object.prototype.hasOwnProperty.call(isArray, 'default') ? isArray['default'] : isArray;

	/**
	 * Determine whether a value is an object or not.
	 * @param {*} value - a value
	 * @return {boolean}
	 */
	function isObject(value) {
		// is undefined or null
		if (value == null) {
			return false
		}

		// is object (or array)
		if (typeof value !== 'object') {
			return false
		}

		// is array
		if (isArray(value)) {
			return false
		}

		return true
	}

	return isObject;

})));
