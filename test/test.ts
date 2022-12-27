import pagination from "./../index";

const p = new pagination({
    data_per_page: 10,
    exportDataAsarray: false
})
// console.log(p.getTakeAndSkip(2))
console.log(p.getNumberOfPages(20.9))
// console.log(p.getPageNumberByOffsetAndLimit(30, 10))