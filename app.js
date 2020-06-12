const prompt = require('prompt-sync')({ sigint: true });

console.log('To start the program press "Enter". To quit the program press "Ctrl + C".');
prompt('');

// creating array to store the result of every dice throw
const resultArray = [];

function throwDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function arraySum(items) {
	let sum = 0;
	for (let i = 0; i < items.length; i++) {
		sum += items[i];
	}
	return sum;
}

// function that throws dices and saves results
// if one of the throws equals to 6 it rethrows it two more times
function throwDices(minThrow, maxThrow) {
	for (let i = minThrow; i <= maxThrow; i++) {
		let result = throwDice();
		if (result === 6) {
			console.log('You got a 6! Throwing dice two more times.');
			throwDices(minThrow, 2);
		} else {
			resultArray.push(result);
			let currentSum = arraySum(resultArray);
			console.log(`The result is: ${result}, the sum so far is: ${currentSum}.`);
		}
	}
}

let enteredCorrectNumber = false;

while (!enteredCorrectNumber) {
	console.log(
		'How many dices do you want to throw? Enter a number from 1 to 5 (if you get a 6 the dice will be thrown two more times):'
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
		console.log(`The total sum is: ${resultSum}, number of throws: ${numberOfDices}.`);
	} else {
		console.log('Sorry, you entered the wrong number. Please try again.');
	}
}
