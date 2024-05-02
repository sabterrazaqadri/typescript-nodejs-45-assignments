// Choose a color for an alien

let alien_colour :string = 'Green'

// If the alien’s color is green, 
// print a statement that the player just earned 5 points for shooting the alien
// If the alien’s color isn’t green, print a statement that the player just earned 10 points

if (alien_colour == 'Green'){

console.log('player just earned 5 points for shooting the alien')

} else {

console.log('player just earned 10 points')

}

// Write one version of this program that runs the if block and another that runs the else block

alien_colour = 'Yellow'

if (alien_colour == 'Green'){

    console.log('player just earned 5 points for shooting the alien')
    
    } else {
    
    console.log('player just earned 10 points')
    
    }