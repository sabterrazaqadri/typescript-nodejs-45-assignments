//Tests for equality with strings
console.log("Tests for equality with strings:", "apple" === "apple");
//Tests for inequality with strings
console.log("Tests for inequality with strings:", "apple" != "orange");
// Tests using the lower case function
console.log("Tests using the lower case function:", "BOOk".toLowerCase() === "book");
// Tests using the upper case function
console.log("Tests using the upper case function:", "book".toUpperCase() === "BOOK");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
console.log("equality and inequality test:", 786 === 786);
console.log("greater than and less than:", 20 > 18);
console.log("greater than or equal to:", 90 >= 80);
console.log("less than or equal to:", 90 <= 90);
// Tests using "and" and "or" operators
console.log("Tests using 'and' operators:", 2 === 2 && 5 >= 5);
console.log("Tests using 'or' operators:", 2 === 2 || 3 < 5);
// Test whether an item is in a array or not
var fruits = ['apple', 'orange', 'banana', 'grapes'];
console.log('test banana in the array:', fruits.includes("banana"));
console.log('test pineapple in the array:', !fruits.includes("pineapple"));
