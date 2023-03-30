/*Create a function that returns true if all elements of the array 
are true and false if only one element is false.*/
const data = [true, 2, NaN, true];
const data2 = [true, true, true, true];
const trueFalse = (data) => {
    for(let i = 0; i < data.length; i++){
        if(!data[i]){
            return false;
        }
    }
    return true;
}
console.log(trueFalse(data));
console.log(trueFalse(data2));