const prompt = require('prompt-sync')({ sigint: true });

console.log('Valeriia Shadrina 01/06/20');
console.log('För att borja programmet ange "Enter". För att avsluta programmet ange "Ctrl + C".');
prompt('');

// creating array to store the result of every dice throw
const resultArray = [];

function throwDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function arraySum(items) {
	return items.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0);
}

// function that throws dices and saves results
// if one of the throws equals to 6 it rethrows it two more times
function throwDices(minThrow, maxThrow) {
	for (let i = minThrow; i <= maxThrow; i++) {
		let result = throwDice();
		if (result === 6) {
			console.log('Du har en 6! Kastar tärningar ytterligare två gånger.');
			throwDices(minThrow, 2);
		} else {
			resultArray.push(result);
			let currentSum = arraySum(resultArray);
			console.log(
				`Resultatet för en tärning är: ${result}, summan av slagna tärningar hittills är: ${currentSum}.`
			);
		}
	}
}

let enteredCorrectNumber = false;

while (!enteredCorrectNumber) {
	console.log(
		'Hur många tärningar vill du kasta? Ange ett nummer från 1 till 5 (om du får en 6 kastas tärning ytterligare två gånger):'
	);
	const diceCount = Number(prompt(''));

	// handling input errors
	if (diceCount >= 1 && diceCount <= 5) {
		enteredCorrectNumber = true;

		// converting input to a number
		let maxThrow = diceCount;

		// min number of dices to throw
		const minThrow = 1;

		// calling function
		throwDices(minThrow, maxThrow);

		// counting sum of throws
		let resultSum = arraySum(resultArray);

		// counting how many dices were thrown
		let numberOfDices = resultArray.length;

		// printing sum of throws and how many dices were thrown
		console.log(`Totalsumman är: ${resultSum}, antal tärningsslag är: ${numberOfDices}.`);
	} else {
		console.log('Tyvärr, angav du fel nummer. Var god försök igen.');
	}
}
