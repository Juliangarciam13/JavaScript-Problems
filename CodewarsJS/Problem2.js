/*You are given an array(list) strarr of strings and an integer k. Your task is to return 
the first longest string consisting of k consecutive strings taken in the array. 
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing 
in Elm, "nothing" in Erlang).*/
const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const  k = 3;
const result = [];
const longestConsec = (strarr, k) => {
    let wordLongest = "";
    if(strarr.length === 0 || k > strarr.length || k <= 0){
        return ""
    }
    for (let i = 0; i <= strarr.length - k; i++){   
        let newString = "";
        for(let j = 0; j < k; j++){        
            newString += strarr[i+j]; 
        }
        if (newString.length > wordLongest.length){
            wordLongest = newString;
        }
    }
    return wordLongest;
};

console.log(longestConsec(strarr,k));













/*function longestConsec(strarr, k) {
    // your code
    if (strarr.length === 0 || k <= 0) {
        return "";
    }

    let longest = "";

    for (let i = 0; i < strarr.length - k + 1; i++) {
        let current = strarr.slice(i, i + k).join("");
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}

const strarr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
const k = 2;
console.log(longestConsec(strarr, k));*/