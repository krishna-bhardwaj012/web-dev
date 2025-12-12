// const username1 = 'Krishna'

// let username2 = username1

// username2 = username2 + ' Kumar'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')



// Object.assign(myFruits, fruits) // create new array by Object.assign
const myFruits = [...fruits] // create new array by spread operator


// const myFruits =[].concat(fruits) // create new array by concatenation

// const myFruits = fruits.slice() // create new array by slicing all elements

const user1 = {
    firstName: 'Krishna',
    lastName: 'Kumar',
    pata: {
        city: 'Bangalore',
        pincode: 560037
    }
}

// const user2 = {}
// Object.assign(user2, user1)

// user2.lastName = ()

const user2 = {...user1}


