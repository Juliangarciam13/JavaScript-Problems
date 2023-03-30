/*create a function which joins all the 
elements of an array and separates them with "-"*/const arr = ["one", "two", "three", "four"];
const arrJoin = (arr) => {
    let joined = arr.join("-");
    console.log(joined);
}
arrJoin(arr);