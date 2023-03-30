/* The insurance guy calls back and apologizes. they found another
policy made by your spouse, but this is limited to cover a maximum
determined in losses (for example, €50,000). You send an invoice to your
spouse for the difference you lost. Given an object from the stolen objects
and a limit, return the difference between the total value of those objects and the limit
of the policy.*/
const obj =  {hospital: 15000, transport: 8000, lawyer: 12000};
const limit = 50000;
function calculateDifference(obj, limit) {
	let result = 0;
	for(let i in obj){
		result = result + obj[i];
	}
	return result-limit;
}
console.log(calculateDifference(obj, limit));

/* In JavaScript, the for...in loop is used to iterate over the properties of an object.
The loop syntax is for (leave variable in object) where variable is a variable that
will contain the name of the property for each iteration, and object is the object to iterate over.
So for(let i in obj) means that for each iteration of the loop, the variable i will contain
the name of the current property being iterated over, and obj is the object being iterated over. The cycle
will be executed for each property on the object.*/