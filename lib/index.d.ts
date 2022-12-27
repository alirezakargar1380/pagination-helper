interface ITakeAndSkip {
    skip: number;
    take: number;
}
interface IPagination {
    data_per_page: number;
    exportDataAsarray?: boolean;
}
interface p {
    getTakeAndSkip(pageNumber: number): ITakeAndSkip;
    getNumberOfPages(data_number: number): number | Array<number>;
    getPageNumberByOffsetAndLimit(offset: number, limit: number): number;
}
export default class pagination implements p {
    private data_per_page;
    private exportDataAsarray?;
    constructor(params: IPagination);
    /**
    *   data_per_page: number of data that you want to show per page
    *   data_number: number of all of your data
    */
    getNumberOfPages(data_number: number): number | number[];
    getTakeAndSkip(pageNumber: number): {
        take: number;
        skip: number;
    };
    getPageNumberByOffsetAndLimit(offset: number, limit: number): number;
}
export {};
