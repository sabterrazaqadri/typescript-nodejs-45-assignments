"use strict";
let guests = ['Ghulam Mustafa Qadri', 'Hafiz Bilal Qadri', 'Hafiz Tahir Qadri'];
// for( let i=0 ; i<guests.length; i++) {
// console.log ('Dear Mr. ' + guests [i] + ', \n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You ! \n\n')
// }
let absent = 'Ghulam Mustafa Qadri';
let new_guest = 'Owais Raza Qadri';
guests[0] = new_guest;
// for( let i=0 ; i<guests.length; i++){
//     console.log ('Dear Mr. ' + guests [i] + ', \n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You ! \n\n')
//     }
// console.log (`Mr. ${absent} is not coming.`) ;
console.log('\n\nGood News ! We Are Inviting 3 More Peoples\n\n');
guests.unshift('Sajid Qadri');
guests.splice(2, 0, 'Abdullah Qadri');
guests.push('Kazim Raza');
for (let i = 0; i < guests.length; i++) {
    console.log('Dear Mr. ' + guests[i] + ', \n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You ! \n\n');
}
console.log('\nSorry ! we are inviting only two peoples');
while (guests.length > 2) {
    let removed = guests.pop();
    console.log(`Sorry Mr ${removed} You Are Not Invited.`);
}
for (let i = 0; i < guests.length; i++) {
    console.log('Dear Mr. ' + guests[i] + ', \n\n You are still invited \n\n');
}
guests.splice(0, 2);
console.log(guests);
