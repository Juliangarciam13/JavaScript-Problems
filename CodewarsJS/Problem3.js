/*You are given an initial 2-value array (x). You will use this to calculate a score.
If both values in (x) are numbers, the score is the sum of the two. If only one is a number, 
the score is that number. If neither is a number, return 'Void!'.
Once you have your score, you must return an array of arrays. Each sub array will be the same 
as (x) and the number of sub arrays should be equal to the score.*/
const explode = (x) => {
    let score = 0;
    if (typeof x[0] === 'number' && typeof x[1] === 'number') {
        score = x[0] + x[1];
    } else if (typeof x[0] === 'number') {
        score = x[0];
    } else if (typeof x[1] === 'number') {
        score = x[1];
    } else {
        return 'Void!';
    }

    const result = Array.from({ length: score }, () => x);
    return result;
}

const x = ['a', 3];
const result = explode(x);
console.log(result);

/*I didn't understand the exercise very well so I looked it up on the internet and I 
understand everything except: const result = Array.from({ length: score }, () => x)
The Array.from() method creates a new Array instance from an iterable object.*/