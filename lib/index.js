"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagination = void 0;
/**
 * Creates a pagination helper with the specified configuration
 * @param params Configuration parameters for pagination
 */
var pagination = function (params) {
    var data_per_page = params.data_per_page || 0;
    var exportAsArray = params.exportDataAsarray || false;
    /**
     * Calculates the total number of pages based on data count
     * @param data_count Total number of items to paginate
     * @returns Number of pages or array of page numbers if exportDataAsarray is true
     */
    var getNumberOfPages = function (data_count) {
        var count = Math.ceil(data_count / data_per_page);
        if (!exportAsArray)
            return count;
        var array = [];
        for (var i = 1; i <= count; i++) {
            array.push(i);
        }
        return array;
    };
    /**
    * Calculates the take (limit) and skip (offset) values for pagination
    * @param pageNumber The current page number to calculate pagination values for
    * @returns An object containing take and skip values
    */
    var getTakeAndSkip = function (pageNumber) { return ({
        take: data_per_page,
        skip: (data_per_page * pageNumber) - data_per_page
    }); };
    /**
     * Determines the current page number based on offset and limit values
     * @param offset Number of items to skip
     * @param limit Number of items per page
     * @returns The current page number
     */
    var getPageNumberByOffsetAndLimit = function (offset, limit) {
        if (limit > offset) {
            return 1;
        }
        return Math.ceil((offset + limit) / limit);
    };
    return {
        getNumberOfPages: getNumberOfPages,
        getTakeAndSkip: getTakeAndSkip,
        getPageNumberByOffsetAndLimit: getPageNumberByOffsetAndLimit
    };
};
exports.pagination = pagination;
exports.default = exports.pagination;
