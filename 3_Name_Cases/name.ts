let Person_Name : string = ' ';

Person_Name = prompt('What Is Your Name?') || '';

let lowercase : string = Person_Name.toLowerCase()
let uppercase : string = Person_Name.toUpperCase()
let titlecase : string = Person_Name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(Person_Name !== null && Person_Name !== ''){alert(`Hello ${Person_Name}, Here Are Your Name In :
Lowercase : ${lowercase}
Uppercase : ${uppercase}
Titlecase : ${titlecase}
`)}
else{alert('Please Fill Your Name First !')}

