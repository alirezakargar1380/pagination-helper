export interface ITakeAndSkip {
    skip: number;
    take: number;
}
export interface IPaginationParams {
    data_per_page: number;
    exportDataAsarray?: boolean;
}
interface PaginationHelperReturn {
    /**
     * Calculates the total number of pages based on data count
     * @param data_count Total number of items to paginate
     * @returns Number of pages or array of page numbers if exportDataAsarray is true
     */
    getNumberOfPages: (data_count: number) => number | number[];
    /**
     * Calculates the take (limit) and skip (offset) values for pagination
     * @param pageNumber The current page number to calculate pagination values for
     * @returns An object containing take and skip values
     */
    getTakeAndSkip: (pageNumber: number) => ITakeAndSkip;
    /**
     * Determines the current page number based on offset and limit values
     * @param offset Number of items to skip
     * @returns The current page number
     */
    getPageNumberByOffsetAndLimit: (offset: number) => number;
}
/**
 * Creates a pagination helper with the specified configuration
 * @param params Configuration parameters for pagination
 */
export declare const pagination: (params: IPaginationParams) => PaginationHelperReturn;
export default pagination;
