// + print name and and date of completion
// - text on screen should be in Swedish
// + ask user how many dices to throw, min = 1. max = 5
// 		+ receive information
// + generate random whole number between 1 and 6 for each dice, one at a time
// + print numbers on screen and the sum and a number of total dice strokes
// 		+ if any random number = 6
// 			+ do not add that to sum
//			 + throw 2 more dices (generate random whole number between 1 and 6 for each dice)
// 		+ indicate that on a screen
// 		+ if again any random number = 6 - repeat
// + give option to start
// 		+ and end program
// + handle input errors

// const prompt = require('prompt-sync')();
const prompt = require('prompt-sync')({ sigint: true });

console.log('Valeriia Shadrina 01/06/20');
console.log('För att borja programmet ange "Enter". För att avsluta programmet ange "Ctrl + C".');
prompt('');

// create array to store the result of every dice throw
const resultArray = [];

// this function generates random whole number between 1 and 6 (including)
function throwDice() {
	return Math.floor(Math.random() * 6) + 1;
}

// generate random whole number between 1 and 6 (including) for each dice, one at a time
function throwDices(minThrow, maxThrow) {
	for (let i = minThrow; i <= maxThrow; i++) {
		let result = throwDice();
		console.log(result);
		if (result === 6) {
			console.log(
				'Du har en 6! Kasta tärningar ytterligare två gånger / You got a 6! Throwing dice 2 more times.'
			);
			throwDices(minThrow, 2);
			// let firstTime = throwDice();
			// console.log(firstTime);
			// let secondTime = throwDice();
			// console.log(secondTime);
		} else {
			resultArray.push(result);
		}
	}
}

let enteredCorrectNumber = false;

while (!enteredCorrectNumber) {
	console.log(
		'Hur många tärningar vill du kasta? Ange ett nummer från 1 till 6? (om du får en 6 kastas tärning ytterligare två gånger):'
	);
	const diceCount = Number(prompt(''));

	// handle input errors
	if (diceCount >= 1 && diceCount <= 6) {
		console.log(`Du vill kasta en tärning / You want to throw a dice ${diceCount} gånger / times.`);
		enteredCorrectNumber = true;

		// Do I need Number? **All user input will be read as a String,
		// so in order to treat user input as numbers, you’ll need to convert the input**
		let maxThrow = diceCount;
		// console.log(maxThrow);

		// min number of dices to throw
		const minThrow = 1;

		// calling function to test how it works
		// randomNumber(1, 5);

		// calling function
		throwDices(minThrow, maxThrow);

		// printing results for each dice
		console.log(`Resultatet för varje tärning är / Result for each dice is: ${resultArray}.`);

		// counting sum of throws
		let resultSum = resultArray.reduce(function(accumulator, currentValue) {
			return accumulator + currentValue;
		}, 0);

		// printing sum of throws
		console.log(`Totalsumman är / Total sum is: ${resultSum}.`);
	} else {
		console.log(
			'Tyvärr, angav du fel nummer. Var god försök igen. / Sorry, you entered incorrect number. Please try again.'
		);
	}
}
