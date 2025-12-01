let username = prompt('Enter your name: ')|| 'Pro Coder';
let userAge = +prompt('Enter your age: ') || 22;

// if (!username) {
//     username = 'Pro Coder';
// }

// if (!userAge || isNaN(userAge)) {
//     userAge = 22;
// }

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);



if(userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
}

if(userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
}

if(userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning JavaScript.');
}

if(userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.` );
    console.log('And he/she is working in It.');
}
    
if(userAge > 45) {
    console.log(`${username} is a retired.`);
    console.log('And he/she is reads newspaper.');
}
    


console.log('Program ended.');
