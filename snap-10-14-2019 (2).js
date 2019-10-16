/**
 * converting a number to sum of all unique positive factors
 * @param number integer number which we are finding factors for
 * @returns {*} the sum of all unique positive factors
 */
function sumUniquePositiveFactors (number) {
	let sum = 0;
	for (i = 1; i<=number; i++) {
		if(number % i === 0) {
			sum = sum + i;
		}
	}
	return sum;
}
console.log(sumUniquePositiveFactors(-12));