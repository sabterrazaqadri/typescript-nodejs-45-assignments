// Write a series of conditional tests

let car : string = 'subaru';

// test 1

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

// test 2

console.log("Is car == 'subaru'? I predict True.")
console.log(car != 'subaru')

// test 3

console.log("Is car == 'honda'? I predict True.")
console.log(car != 'honda')

// test 4

console.log("Is car == 'subaru'? I predict True.")
console.log(car !== 'subaru')

// test 5

console.log("Is car.uppercase == 'SUBARU'? I predict True.")
console.log(car.toUpperCase() == 'SUBARU')

// test 6

console.log("Is car.uppercase == 'subaru'? I predict True.")
console.log(car.toUpperCase() == 'subaru')

// test 7

console.log("Is car.lowercase == 'subaru'? I predict True.")
console.log(car.toLowerCase() == 'subaru')

// test 8

console.log("Is car.uppercase == 'SUBARU'? I predict True.")
console.log(car.toLowerCase() == 'SUBARU')

// test 9

console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru')

// test 10

console.log("Is car == 'Train'? I predict false.")
console.log(car == 'Train')