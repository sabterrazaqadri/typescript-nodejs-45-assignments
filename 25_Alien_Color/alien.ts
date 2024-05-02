// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alienColor : string = 'Green';

// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

if (alienColor === 'Green'){

console.log('you have got complete 10 points !')

} else if (alienColor === 'Yellow'){

console.log('you have got 05 points !')

} else {

console.log('you have got 0 points !')

}

// The version that fails will have no output

alienColor = 'Yellow'

if (alienColor === 'Green'){

    console.log('you have got complete 10 points !')
}