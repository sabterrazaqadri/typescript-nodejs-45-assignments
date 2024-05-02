//Store the locations in a array. Make sure the array is not in alphabetical order
let places : string [] = ['Makkah', 'Madinah', 'Karbala', 'Baghdad', 'Ajmer'];

//Print your array in its original order
console.log(places);

//Print your array in alphabetical order without modifying the actual list
console.log( [...places].sort());

// Show that your array is still in its original order by printing it.
console.log(places);

//Print your array in reverse alphabetical order without changing the order of the original list
console.log( [...places].sort().reverse());

//Show that your array is still in its original order by printing it again
console.log(places);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log(places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log(places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log(places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log(places.sort().reverse());
