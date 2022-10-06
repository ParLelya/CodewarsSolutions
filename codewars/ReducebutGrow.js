/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
const array = [1, 2, 3, 4]
function multiply(arr) {
	return arr.reduce(
		(previousValue, currentValue) => previousValue * currentValue,
		1)
}
multiply(array)