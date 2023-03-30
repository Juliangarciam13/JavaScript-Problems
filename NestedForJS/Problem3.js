/*we have two arrays of numbers and we want to compare if any element 
of the first array is equal to any element of the second array and print the result*/
const arr = [1, 2, 3];
const arr2 = [4, 3, 2];
function checkArr() {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) {
          console.log(`${arr[i]} and ${arr2[j]} are the same`);
        } else {
          console.log(`${arr[i]} and ${arr2[j]} are different`);
        }
      }
    }
  }
  
checkArr();