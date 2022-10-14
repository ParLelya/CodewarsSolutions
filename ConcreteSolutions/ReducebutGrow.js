import Solution from "../SolutionRunner.js";

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const array = [1, 2, 3, 4]
function multiply(arr) {
	return arr.reduce(
		(previousValue, currentValue) => previousValue * currentValue,
		1)
}
multiply(array)
*/

class ReduceButGrow extends Solution {
  constructor() {
    super.switchText();
  }

  multiply(arr) {
    return arr.reduce(
      (previousValue, currentValue) => previousValue * currentValue,
      1
    );
  }

  run() {
    const array = [1, 2, 3, 4];
    console.assert(multiply(array) === 24);
  }

  createHTML() {
    return `<h3>Reduce But Grow</h3>
	<p>Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
	[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24</p>
	<pre><code>const array = [1, 2, 3, 4]
	function multiply(arr) {
		return arr.reduce(
			(previousValue, currentValue) => previousValue * currentValue,
			1)
	}
	multiply(array)</code></pre>`;
  }
}

export default ReduceButGrow;
