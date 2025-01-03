export interface ITakeAndSkip {
    skip: number
    take: number
}

export interface IPaginationParams {
    data_per_page: number
    exportDataAsarray?: boolean
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
     * @param limit Number of items per page
     * @returns The current page number
     */
    getPageNumberByOffsetAndLimit: (offset: number, limit: number) => number;
}

/**
 * Creates a pagination helper with the specified configuration
 * @param params Configuration parameters for pagination
 */
export const pagination = (params: IPaginationParams): PaginationHelperReturn => {
    const data_per_page = params.data_per_page || 0
    const exportAsArray = params.exportDataAsarray || false

    /**
     * Calculates the total number of pages based on data count
     * @param data_count Total number of items to paginate
     * @returns Number of pages or array of page numbers if exportDataAsarray is true
     */
    const getNumberOfPages = (data_count: number): number | number[] => {
        const count = Math.ceil(data_count / data_per_page)

        if (!exportAsArray) return count

        const array: Array<number> = []
        for (let i = 1; i <= count; i++) {
            array.push(i)
        }

        return array
    }

    /**
    * Calculates the take (limit) and skip (offset) values for pagination
    * @param pageNumber The current page number to calculate pagination values for
    * @returns An object containing take and skip values
    */
    const getTakeAndSkip = (pageNumber: number): ITakeAndSkip => ({
        take: data_per_page,
        skip: (data_per_page * pageNumber) - data_per_page
    })

    /**
     * Determines the current page number based on offset and limit values
     * @param offset Number of items to skip
     * @param limit Number of items per page
     * @returns The current page number
     */
    const getPageNumberByOffsetAndLimit = (offset: number, limit: number): number => {
        if (limit > offset) {
            return 1
        }
        return (offset + limit) / limit
    }

    return {
        getNumberOfPages,
        getTakeAndSkip,
        getPageNumberByOffsetAndLimit
    }
}

export default pagination