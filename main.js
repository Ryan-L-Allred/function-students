const createStudent = () => {
    const studentObject = {
        name: "Jimmy Hoffa",
        grade: 4
    }
    return studentObject
}
const student = createStudent()


const addMathGrade = (studentObject) => {
    studentObject.math = "B"
    return studentObject
}
const goodAtMath = addMathGrade(student)


const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
    return studentObject
}
const badAtHistory = addHistoryGrade(goodAtMath)


const addScienceGrade = (studentObject) => {
    studentObject.science = "A"
    return studentObject
}
const greatAtScience = addScienceGrade(student)
console.log(greatAtScience)
/*I can keep using the student variable to pass through these functions as an argument. It will log the same result as if I were to 
pass the previous variable through as an argument. 
*/