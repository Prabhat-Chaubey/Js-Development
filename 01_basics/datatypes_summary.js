// data is categorized into two type 
// primitive/value type
// there are 7 types of primitve data type 
// String 
// Number 
// Bolean 
// null
// undefined
// Symbol
// BigInt


// non primitive/reference type 

// Array

const SuperHeroes = ["shaktiman","hulk","Thor"]
console.log(SuperHeroes)

// objects

let student = {
    name : "prabhat",
    age : 12,
    division : "c",
    rollcall : 77
}
console.log(student)
console.log(student.name)



// functons


const myFunction = function(){
    console.log("hello fucntion")
}
myFunction();

// javascript is a dynamicaaly typed language, because if we do (const = 100) then that data type of const would be int, but we have not mentoned it to be int or String, hnce iit is a dynamic langugae 


// we cant go back and check the data type again and again so we have a fucntion *typeof* which helps to know the type of the data we are using 

console.log(typeof myFunction)
console.log(typeof SuperHeroes)
console.log(typeof student)