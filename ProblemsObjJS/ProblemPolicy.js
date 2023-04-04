/*El tipo del seguro vuelve a llamar, le explica que su poliza cubre un 
maximo de 50000. Si los gastos fueron hospital, transport, lawyer. calcular
la diferencia entre el limite de la poliza y lo que se gasto por el accidente.*/
const obj =  {hospital: 15000, transport: 8000, lawyer: 12000};
const limit = 50000;
function calculateDifference(obj, limit) {
	let result = 0;
	for(let i in obj){
		result = result + obj[i];
	}
	return limit-result;
}
console.log(calculateDifference(obj, limit));