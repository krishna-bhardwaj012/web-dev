const userAge = 22

const isSchoolStudent =(userAge >=6) && (userAge <=18)
const isCollegeStudent = (userAge >= 18) && (userAge <= 25)


const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2