// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var username = ['admin', 'amar', 'zaid', 'ahmed', 'bakar'];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
for (var i = 0; i < username.length; i++) {
    if (username[i] == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else
        (console.log("such as Hello ".concat(username[i], ", thank you for logging in again.")));
}
// Solotion By ForEach Method (Personally) :
// username.forEach(name => {
// if (name === 'admin'){
//     console.log('Hello admin, would you like to see a status report?')
// }
// else (console.log(`Hello ${name}, thank you for logging in again`))
// })
