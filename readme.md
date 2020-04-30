# @bemoje/is-object

Determine whether a value is an object or not.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-object" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-object" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-object" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-object.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-object" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-object.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-object" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-object" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-object/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-object" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-object
npm install --save @bemoje/is-object
npm install --save-dev @bemoje/is-object
```

## Usage

```javascript

import isObject from '@bemoje/is-object'

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

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [isObject][1]

    -   [Parameters][2]

## isObject

Determine whether a value is an object or not.

##### Parameters

-   `value` **any** a value

Returns **[boolean][3]** 

[1]: #isobject

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean