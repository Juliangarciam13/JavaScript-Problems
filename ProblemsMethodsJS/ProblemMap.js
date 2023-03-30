/*we have an array names and we want to create a new array which contains 
the length of each element*/
const names = [ "Ana","Pablo","Pedro", "Julian","Andres"];
const nameSizes = names.map((name)=>name.length);
console.log(nameSizes);
