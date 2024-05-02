// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magician :string [] = ['saad','zain','bilal','ali']

function copyarray(arre : string []){

    return [...arre]

}

function make_great (magicianArray : string []){

    for (let i=0; i<magicianArray.length; i++){

        magician[i] = 'the great ' + magicianArray[i]
    }

}






function show_magicians (magicians : string[]){

    magicians.forEach(element =>{

        console.log(element)
    });

}

const copymagician = copyarray (magician)

make_great (copymagician)

console.log('this is my orignal array')
show_magicians (magician)

console.log('this is my modified copy array')
show_magicians(copymagician)

