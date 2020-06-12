# Dice simulator project

## About

The user is asked for a choice of how many dices to throw. 
At least 1 and max 5 dices can be selected.

The program randomizes results for each dice, one at a time, 
and prints this on the screen along with the sum of the thrown dices so far.

If any dice gets the result 6 then it is not added to the sum, but two more dices are thrown. 
This is indicated on the screen whenever it happens. 
As long as any dice gets the result 6 this procedure is repeated.

When all dices are thrown, the total sum and number of dice throws are printed on the screen.

## Run app
```
npm i
node app.js
```

To interrupt program at any point press `Ctrl + C`