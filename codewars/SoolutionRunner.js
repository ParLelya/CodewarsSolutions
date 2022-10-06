//TODO создать мапу, присвоив номера в качестве ключей и названия солюшенов как значения
//TODO узнать, как получить ссылки на конструкторы солюшенов
//TODO как пользователь будет переключаться между солюшенами?

let solutions = new Map()
solutions.set(1, ReduceButGrow)
		 .set(2, QuarterOfTheYear)

let concreteSolution = Object.create(ReduceButGrow) 

concreteSolution.run()
