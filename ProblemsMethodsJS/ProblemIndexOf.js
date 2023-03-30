/*create a function for an array of numbers which tells 
us the index of the element we are looking for*/
const arr = [1, 2, 3, 4, 5];
const arrIndex = (arr) => {
     let index = arr.indexOf(2);
     console.log(index);
}

arrIndex(arr);