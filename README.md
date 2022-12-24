

# pagination-helper
[![CI][ci-image]][ci-url]

a simple pagination for calculating offset, limit and number of pages

## Installation and Usage

### Server-side usage

Install the library with `npm install pagination-helper`

#### No ES6

```javascript
var paginationHelper = require('pagination-helper');

let allCombitions = all_possible_nums({
    "one": [1],
    "two": [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "three": [1]
})

console.log(allCombitions) //=> [
//   111, 121, 131,
//   141, 151, 161,
//   171, 181, 191
// ]
```

#### ES6

```javascript
import paginationHelper from "pagination-helper";
```

## Maintainers

- [alireza kargar](https://github.com/alirezakargar1380) - **alireza kargar** (author)

[ci-url]: https://github.com/validatorjs/validator.js/actions?query=workflow%3ACI
[ci-image]: https://github.com/validatorjs/validator.js/workflows/CI/badge.svg?branch=master

