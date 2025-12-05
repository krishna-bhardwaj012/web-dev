let username = 'krishna'

const user = {
    firstName: 'Adarsh',
    lastName: 'kumar',
    pata: {
        city: 'Banglore',
        pinCode: 876876,
        state: 'Karnataka',
        moreDetails:{
            population: 234577899,

            area: '787 sq km',
        },
    },
    age: 23,
    isGraduate: false,
}


// Object.seal(user) used to prevent adding or removing properties from an object, but allows modification of existing properties.
Object.freeze(user)  // used to make an object immutable, preventing any changes to its properties.


console.log('isGraduate' in user);