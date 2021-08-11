const addDays = require("date-fns/addDays")
function nani(days) {
    result = addDays(new Date(2020,7,22),days)
    return (`${result.getDate()}-${result.getMonth()+1}-${result.getFullYear()}`)
}
module.export = nani