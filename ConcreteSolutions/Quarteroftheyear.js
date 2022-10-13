/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
	if (month <= 3) {
			return 1
		} else if (month <= 6) {
			return 2
		} else if (month <= 9) {
			return 3
		} else {
			return 4
		}
}
*/

class QuarterOfTheYear extends Solution {
  constructor() {
    super.switchText();
  }
  
  quarterOf(month) {
    if (month <= 3) {
      return 1;
    } else if (month <= 6) {
      return 2;
    } else if (month <= 9) {
      return 3;
    } else {
      return 4;
    }
  }

  run() {
    console.assert(this.quarterOf(3) === 1);
    console.assert(this.quarterOf(5) === 2);
    console.assert(this.quarterOf(11) === 4);
  }

  createHTML() {
    return `<h3>Quarter Of The Year</h3>
	<p>Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
	For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.</p>
	<pre><code>const quarterOf = (month) => {
		if (month <= 3) {
				return 1
			} else if (month <= 6) {
				return 2
			} else if (month <= 9) {
				return 3
			} else {
				return 4
			}
	}</code></pre>`;
  }
}
