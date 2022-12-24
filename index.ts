interface ITakeAndSkip {
    skip: number
    take: number
}

interface IPagination {
    data_per_page: number
}

interface p {
    getTakeAndSkip(pageNumber: number): ITakeAndSkip
    getPageNumberByOffsetAndLimit(offset: number, limit: number): number
}

export default class pagination implements p {
    private data_per_page: number
    constructor(params: IPagination) {
        this.data_per_page = params.data_per_page || 0
    }

    /**
    *   data_per_page: number of data that you want to show per page
    *   data_number: number of all of your data
    */
    getNumberOfPages(data_number: number) {
        let count: number = data_number
        if (count < this.data_per_page) {
            count = 1
        } else {
            count = count / this.data_per_page
            const integer = Number.isInteger(count)
            if (!integer) {
                count = Number(count.toFixed(0))
                count++
            }
        }

        /**
         *  this is the number of your page that you have
         */
        return count
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