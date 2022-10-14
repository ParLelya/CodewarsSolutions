import ReduceButGrow from "./codewars/ReducebutGrow.js";
import QuarterOfTheYear from "./codewars/Quarteroftheyear.js";

export default class Solution {
  constructor(solutionName, kyu) {
    this.solutionName = solutionName;
    this.kyu = kyu;
  }

  run() {}

  switchText() {
    let text = document.querySelector(".problem");
    text.insertAdjacentHTML("afterbegin", this.createHTML());
  }

  createHTML() {}
}

let solutions = new Map();
solutions.set(1, ReduceButGrow).set(2, QuarterOfTheYear);

let concreteSolution = ReduceButGrow.constructor;

concreteSolution.run();

//TODO как пользователь будет переключаться между солюшенами?
//TODO вывод ответа?
