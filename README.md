

# pagination-helper
[![CI][ci-image]][ci-url]

a simple pagination for calculating offset, limit and number of pages

## Installation and Usage

### Server-side usage

Install the library with `npm install pagination-helper`

#### yarn
`yarn add pagination-helper`


#### No ES6

```javascript
var paginationHelper = require('pagination-helper');
```

#### ES6

```javascript
import paginationHelper from "pagination-helper";

let pagination = new paginationHelper({
    data_per_page: 10
})

console.log(pagination.getNumberOfPages(209)) // => 21, it means that you have 21 pages
console.log(pagination.getNumberOfPages(20.9)) // => 3, it means that you have 3 pages, it support the float numbers.
```

#### React
if you want to map number of your page's in your react component you can go on like this:

```javascript
import paginationHelper from "pagination-helper";

let pagination = new paginationHelper({
    data_per_page: 10,
    exportDataAsarray: true
})

console.log(pagination.getNumberOfPages(20.9)) // => [ 1, 2, 3 ]
```

#### Get Page Number by Offset And Limit
```javascript
console.log(pagination.getPageNumberByOffsetAndLimit(30, 5)) // => 7, it means you are in page 7
```

#### Get Offset(Limit) And Limit(Take) by Page Number
this method give you the number of your (take, skip) by page number, it's useful for when you want to write a query to get the data
```javascript
console.log(pagination.getTakeAndSkip(7)) // => { take: 10, skip: 60 }, it means, if you want to go to page 7 set this data
// to your query
```

## Maintainers

- [alireza kargar](https://github.com/alirezakargar1380) - **alireza kargar** (author)

[ci-url]: https://github.com/validatorjs/validator.js/actions?query=workflow%3ACI
[ci-image]: https://github.com/validatorjs/validator.js/workflows/CI/badge.svg?branch=master

