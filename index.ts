export interface ITakeAndSkip {
    skip: number
    take: number
}

export interface IPaginationParams {
    data_per_page: number,
    exportDataAsarray?: boolean
}

export interface IPaginationHelper {
    getTakeAndSkip(pageNumber: number): ITakeAndSkip
    getNumberOfPages(data_number: number): number | Array<number>
    getPageNumberByOffsetAndLimit(offset: number, limit: number): number
}

export default class pagination implements IPaginationHelper {
    private data_per_page: number
    private exportDataAsarray?: boolean
    constructor(params: IPaginationParams) {
        this.data_per_page = params.data_per_page || 0
        this.exportDataAsarray = params.exportDataAsarray || false
    }

    /**
    *   data_per_page: number of data that you want to show per page
    *   data_number: number of all of your data
    */
    getNumberOfPages(data_number: number) {
        let count: number = Math.ceil(data_number/this.data_per_page)

        /**
         *  this is the number of your page that you have
         */
        if (!this.exportDataAsarray) return count

        const array: Array<number> = []
        for (let i = 1; i <= count; i++) {
            array.push(i)
        }

        return array
    }

    getTakeAndSkip(pageNumber: number) {
        return {
            take: this.data_per_page,
            skip: (this.data_per_page * pageNumber) - this.data_per_page
        }
    }

    getPageNumberByOffsetAndLimit(offset: number, limit: number) {
        if (limit > offset) return 1
        return (offset+limit)/limit
    }
}