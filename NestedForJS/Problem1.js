/*create a function in which it compares each element of i with each element 
of j and that prints if they are equal or not. i<= 5 and j <=5.*/
function checkNumbers() {
    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 5; j++) {
        if (i === j) {
          console.log(`${i} and ${j} are the same`);
        } else {
          console.log(`${i} and ${j} are different`);
        }
      }
    }
  }
  
checkNumbers();
