

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
var pagination = require('pagination-helper');
```

#### ES6

```javascript
import pagination, { IPaginationParams } from "pagination-helper";

const params: IPaginationParams = {
    data_per_page: 10,
    exportDataAsarray: true,
};

const pagination_helper = pagination(params);


// Calculates the total number of pages based on data count
// @param data_count Total number of items to paginate
// @returns Number of pages or array of page numbers if exportDataAsarray is true
pagination_helper.getNumberOfPage(569) // output: 57 pages
```

#### React
if you want to map number of your page's in your react component you can go on like this:

```javascript
import pagination, { IPaginationParams } from "pagination-helper";

const params: IPaginationParams = {
    data_per_page: 10,
    exportDataAsarray: true,
};

const pagination_helper = pagination(params);


// Calculates the total number of pages based on data count
// @param data_count Total number of items to paginate
// @returns Number of pages or array of page numbers if exportDataAsarray is true
pagination_helper.getNumberOfPages(20.9) // => [1, 2, 3]
```

#### Get Page Number by Offset And Limit
```javascript
// Determines the current page number based on offset and limit values
// @param offset Number of items to skip
// @returns The current page number
pagination_helper.getPageNumberByOffsetAndLimit(30)
```

#### Get Offset(Limit) And Limit(Take) by Page Number
this method give you the number of your (take, skip) by page number, it's useful for when you want to write a query to get the data
```javascript
// Calculates the take (limit) and skip (offset) values for pagination
// @param pageNumber The current page number to calculate pagination values for
// @returns An object containing take and skip values
pagination_helper.getTakeAndSkip(7) // => { take: 10, skip: 60 }, it means, if you want to go to page 7 set this data
// to your query
```

## Maintainers

- [alireza kargar](https://github.com/alirezakargar1380) - **alireza kargar** (author)

[ci-url]: https://github.com/validatorjs/validator.js/actions?query=workflow%3ACI
[ci-image]: https://github.com/validatorjs/validator.js/workflows/CI/badge.svg?branch=master

