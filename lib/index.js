"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pagination {
    constructor(params) {
        this.data_per_page = params.data_per_page || 0;
        this.exportDataAsarray = params.exportDataAsarray || false;
    }
    /**
    *   data_per_page: number of data that you want to show per page
    *   data_number: number of all of your data
    */
    getNumberOfPages(data_number) {
        let count = Math.ceil(data_number / this.data_per_page);
        /**
         *  this is the number of your page that you have
         */
        if (!this.exportDataAsarray)
            return count;
        const array = [];
        for (let i = 1; i <= count; i++) {
            array.push(i);
        }
        return array;
    }
    getTakeAndSkip(pageNumber) {
        return {
            take: this.data_per_page,
            skip: (this.data_per_page * pageNumber) - this.data_per_page
        };
    }
    getPageNumberByOffsetAndLimit(offset, limit) {
        if (limit > offset)
            return 1;
        return (offset + limit) / limit;
    }
}
exports.default = pagination;
