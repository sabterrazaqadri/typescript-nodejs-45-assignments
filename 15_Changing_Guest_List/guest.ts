let guests : string[] = ['Ghulam Mustafa Qadri', 'Hafiz Bilal Qadri', 'Hafiz Tahir Qadri'];

for( let i=0 ; i<guests.length; i++) {

console.log ('Dear Mr. ' + guests [i] + ', \n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You ! \n\n')

}

let absent : string = 'Hafiz Bilal Qadri';

let new_guest : string = 'Owais Raza Qadri';
    
guests[1] = new_guest;


for( let i=0 ; i<guests.length; i++){

    console.log ('Dear Mr. ' + guests [i] + ', \n\nIt Is Our Pleasure To Invite You In Our Party. \n\nThank You ! \n\n')
    
    }
    
console.log (`Mr. ${absent} is not coming.`) 

