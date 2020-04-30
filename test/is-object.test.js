import isObject from '../src/is-object'

describe('isObject', () => {
	test('plain object', () => {
		const o = {}
		expect(isObject(o)).toBe(true)
	})
	test('object instance', () => {
		const o = new Object()
		expect(isObject(o)).toBe(true)
	})
	test('custom class instance', () => {
		class Test {}
		const o = new Test()
		expect(isObject(o)).toBe(true)
	})
	test('plain null proto', () => {
		const o = Object.create(null)
		expect(isObject(o)).toBe(true)
	})
	test('array', () => {
		const o = []
		expect(isObject(o)).toBe(false)
	})
	test('void', () => {
		const o = void 0
		expect(isObject(o)).toBe(false)
	})
	test('null', () => {
		const o = null
		expect(isObject(o)).toBe(false)
	})
	test('undefined', () => {
		const o = undefined
		expect(isObject(o)).toBe(false)
	})
	test('null string', () => {
		const o = 'null'
		expect(isObject(o)).toBe(false)
	})
	test('undefined string', () => {
		const o = 'undefined'
		expect(isObject(o)).toBe(false)
	})
})
