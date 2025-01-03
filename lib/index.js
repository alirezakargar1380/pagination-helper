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
    var getTakeAndSkip = function (pageNumber) { return ({
        take: data_per_page,
        skip: (data_per_page * pageNumber) - data_per_page
    }); };
    var getPageNumberByOffsetAndLimit = function (offset) {
        if (data_per_page > offset) {
            return 1;
        }
        return Math.ceil((offset + data_per_page) / data_per_page);
    };
    return {
        getNumberOfPages: getNumberOfPages,
        getTakeAndSkip: getTakeAndSkip,
        getPageNumberByOffsetAndLimit: getPageNumberByOffsetAndLimit
    };
};
exports.pagination = pagination;
exports.default = exports.pagination;
