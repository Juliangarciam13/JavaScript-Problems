/*Create a function that takes two numbers as arguments ( num, length)
and return an array of multiples of num until the length of the
array scope length.*/
function arrayOfMultiples (num, l) {
	let arrMultiply = [];
	for (let i = 1; arrMultiply.length < l; i++){
		arrMultiply.push(num * i);
	}
	return arrMultiply;
}
console.log(arrayOfMultiples(5,7));
