class Solution {
	constructor(solutionName, kyu) {
		this.solutionName = solutionName
		this.kyu = kyu
	}
	run() 
	createHTML()
	switchText() {
		let text = document.querySelector(".problem")
		text.insertAdjacentHTML('afterbegin', this.createHTML())
	}
}

