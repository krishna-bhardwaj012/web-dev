const userAge = 22

const isSchoolStudent =(userAge >=6) && (userAge <=18)
const isCollegeStudent = (userAge >= 18) && (userAge <= 25)


const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && 'null'
const orResult3 = 'Hello' || 'null'

const andResult4 = 'Hello' && 4 + 8
const orResult4 = 'Hello' || 4 + 8

const andResult5 = 'Hello' && console.log('hello')
const orResult5 = undefined || console.log('hello2')
