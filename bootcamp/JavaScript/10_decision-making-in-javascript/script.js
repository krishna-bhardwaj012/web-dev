const username = prompt('Enter your name: ');
const userAge = +prompt('Enter your age: ');

console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if(userAge >= 18 && userAge <= 24) {
    console.log('user is a college student.');
    console.log('And he/she is learning JavaScript.');
}

if(userAge >= 25 && userAge <= 45) {
    console.log('user is a working professional');
    console.log('And he/she is working in It.');
}
    


console.log('Program ended.');
