import pagination from "./../index";

const p = new pagination({
    data_per_page: 2,
    exportDataAsarray: true
})
// console.log(p.getTakeAndSkip(2))
console.log(p.getNumberOfPages(10))
// console.log(p.getPageNumberByOffsetAndLimit(30, 10))