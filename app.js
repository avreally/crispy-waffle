// + print name and and date of completion
// text on screen should be in Swedish
// + ask user how many dices to throw, min = 1. max = 5
// 		+ receive information
// + generate random whole number between 1 and 6 for each dice, one at a time
// + print numbers on screen and the sum and a number of total dice strokes
// 		if any random number = 6
// 			do not add that to sum
//			 throw 2 more dices (generate random whole number between 1 and 6 for each dice)
// 		+ indicate that on a screen
// 		if again any random number = 6 - repeat
// give option to start and end program
// + handle input errors

// const prompt = require('prompt-sync')();
const prompt = require('prompt-sync')({ sigint: true });

console.log('Valeriia Shadrina 31/05/20');

const diceCount = prompt('How many dices you want to throw? Enter a number from 1 to 6: ');

// handle input errors
if (diceCount >= 1 && diceCount <= 6) {
	console.log(`You want to throw a dice ${diceCount} times.`);

	// Do I need Number?
	let maxThrow = Number(diceCount);
	// console.log(maxThrow);

	// create array to store the result of every dice throw
	const resultArray = [];

	// min number of dices to throw
	const minThrow = 1;

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
				console.log(`One of results is equal to 6, throwing dice 2 more times.`);
				let firstTime = throwDice();
				console.log(firstTime);
				let secondTime = throwDice();
				console.log(secondTime);
			} else {
				resultArray.push(result);
			}
		}
	}

	// calling function to test how it works
	// randomNumber(1, 5);

	// calling function
	throwDices(minThrow, maxThrow);

	// printing results for each dice
	console.log(`Result for each dice is: ${resultArray}.`);

	// counting sum of throws
	let resultSum = resultArray.reduce(function(accumulator, currentValue) {
		return accumulator + currentValue;
	}, 0);

	// printing sum of throws
	console.log(`Total sum is: ${resultSum}.`);
} else {
	console.log(`Sorry, you entered incorrect number. Please try again.`);
}
