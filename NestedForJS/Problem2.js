/*Create a function in which I will compare each element of the array fruits 
with each of its elements to verify if they are the same element or not and print the result.*/
let fruits = ["apple", "banana", "orange", "kiwi", "grape"];

function checkFruits() {
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits.length; j++) {
      if (i === j) {
        console.log(`${fruits[i]} and ${fruits[j]} are the same`);
      } else {
        console.log(`${fruits[i]} and ${fruits[j]} are different`);
      }
    }
  }
}

checkFruits();