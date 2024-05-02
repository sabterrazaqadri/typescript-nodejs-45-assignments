"use strict";
let person_name = '';
person_name = prompt('what is your name?') || '';
if (person_name !== null && person_name !== '') {
    alert(`Hello ${person_name}, Would You Like To Learn Some Python Today?`);
}
else {
    alert('You Have To Fill Your Name !');
}
