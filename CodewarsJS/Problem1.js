/*In this exercise, what you want to do is create 
a function that removes the first and last characters from a string. */
const removeChar = (x) => {
  let newWord = x.slice(1, -1);
  return newWord;
};

console.log(removeChar("Bootcamp"));