import isObject from '../src/is-object'

isObject({})
//=> true

isObject(Object.create(null))
//=> true

isObject(new Object())
//=> true

isObject(new (class Custom {})())
//=> true

isObject([])
//=> false

isObject(null)
//=> false

isObject(undefined)
//=> false

isObject(void 0)
//=> false
