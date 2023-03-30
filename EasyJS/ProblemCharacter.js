/* Create a function that takes two strings as arguments and returns
the number of times the first string (the single character) is found in the second string.*/
const  characterString = (character, string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count;
  }
const character = "a";
const string = "julian garcia";
const count = characterString(character, string);
console.log(count);

/* in this example, the function counts the number of times the character 'a' appears 
in the string 'banana'. The function loops through each character in the string and checks 
if it matches the character argument. If it does, the count is incremented. Finally, 
the count is returned.*/