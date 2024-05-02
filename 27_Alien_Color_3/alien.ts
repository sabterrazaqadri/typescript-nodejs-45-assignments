// Write three versions of this program, making sure each message is printed for the appropriate color alien.

// version 1

let aliencolor : string = 'green';

// If the alien is green, print a message that the player earned 5 points.

if (aliencolor === 'green'){

console.log('the player earned 5 points');

}

// If the alien is yellow, print a message that the player earned 10 points.


else if (aliencolor === 'yellow'){

    console.log('the player earned 10 points');
    
    }
    

// If the alien is red, print a message that the player earned 15 points.


else if (aliencolor === 'red'){

    console.log('the player earned 15 points');
    
    }
    
    else console.log ('please select the right colour');

// version 2
    
aliencolor = 'yellow';

if (aliencolor === 'green'){

console.log('the player earned 5 points');

}

else if (aliencolor === 'yellow'){

    console.log('the player earned 10 points');
    
    }

else if (aliencolor === 'red'){

    console.log('the player earned 15 points');
    
    }
    
    else console.log ('please select the right colour');


// version 3
    
aliencolor = 'red';

if (aliencolor === 'green'){

console.log('the player earned 5 points');

}

else if (aliencolor === 'yellow'){

    console.log('the player earned 10 points');
    
    }

else if (aliencolor === 'red'){

    console.log('the player earned 15 points');
    
    }
    
    else console.log ('please select the right colour');


