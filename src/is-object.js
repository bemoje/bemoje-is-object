import isArray from '@bemoje/is-array'

/**
 * Determine whether a value is an object or not.
 * @param {*} value - a value
 * @return {boolean}
 */
export default function isObject(value) {
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
