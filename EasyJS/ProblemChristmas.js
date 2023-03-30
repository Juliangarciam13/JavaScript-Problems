/*Christmas Eve is almost upon us so naturally we need
prepare some milk and cookies for Santa! Create a function that accepts a Date object
and return true if it is Christmas Eve (December 24) and false otherwise.*/
let date = {
    year: 2023,
    month: 12,
    day: 23, 
}
const christmas = (date) => {
    if(date.month === 12 && date.day === 24){
        return "Today is Christmas";
    } else {
        return "Today is not Christmas";
    }
}
console.log(christmas(date));