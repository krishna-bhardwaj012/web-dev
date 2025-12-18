// Function Definition 
function introduceMe(username, profession, userage) {
   console.log('Hi,');
   console.log(`My name is ${username || 'ProMax'}.`);
   console.log(`I am a ${profession}.`);
   console.log(`I am ${userage} years old.`);
}

//                  Function call
// const returnValue = introduceMe()

// introduceMe()
// console.log('*******************');
// introduceMe()
// console.log('******************')


introduceMe('krishna', 'Software Engineer', 25)
introduceMe('Rishi', 'Frontend Developer', 24)
introduceMe('Sachin', 'Backend Developer', 25)
