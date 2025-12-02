
// if (dayNumber === 0){
//     console.log ('it is Sunday')
// } else if(dayNumber === 1) {
//     console.log ('it is Monday')
// } else if (dayNumber === 2){
//     console.log ('it is Tuesday')
// } else if (dayNumber === 3){
//     console.log ('it is Wednesday')
// } else if (dayNumber === 4){
//     console.log ('it is Thursday')
// } else if (dayNumber === 5){
//     console.log ('it is Friday')
// } else if (dayNumber === 6){
//     console.log ('it is Saturday')
// } else {
//     console.log ('Please Enter a Valid Day Number')
// }

const dayNumber = 14

// switch (dayNumber){
//     case 0:
//         console.log ('it is Sunday today')
//         break
//     case 1:
//         console.log ('it is Monday today')
//         break
//     case 2:
//         console.log ('it is Tuesday today')
//         break
//     case 3:
//         console.log ('it is Wednesday today')
//         break
//     case 4:
//         console.log ('it is Thursday today')
//         break
//     case 5:
//         console.log('it is Friday today')
//         break
//     case 6:
//         console.log('it is Saturday today')
//         break
//     default:
//         console.log('Please Enter a Valid Day Number')

// }

const username ='krishna'
const userAge = 22


if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
} else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
} else if (userAge >= 18 && userAge <= 24) {
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
} else if (userAge > 45 && userAge < 121) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
} else if (userAge >= 121) {
    console.log(`${username} is immortal.`);
    console.log('And he/she reads newspaper.');
} else {
    console.log('Please Enter a Valid Age');
}

console.log('Program Ended!');



