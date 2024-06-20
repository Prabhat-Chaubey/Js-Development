/* 
data is categorized into two type 
primitive/value type
there are 7 types of primitve data type 
String 
Number 
Bolean 
null
undefined
Symbol
BigInt

*/

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




// stack and heap memory 

// there are two storage ways, stack and heap memory type 

// Stack Memory (In primitive Types)
// Heap Memory (In Non-Primitive Types)

// in stack memory we get the copy and not the original one 

let Firstname = "Prabhat";
let OneMoreName = Firstname;

console.log(Firstname);
console.log(OneMoreName);

// till now one more name have value as "Prabhat"

OneMoreName = "Ruchi"

/* Now
 Firstname -> Prabhat
 OneMoreName -> Ruchi
 Because we made changes in the copy 
*/

// In HeapMemory we get the references , which means 

let UserOne = {
    email : "abc@gmail.com",
    upi : "abc123"
}

console.log(UserOne);

/*         _________________________________
UserOne -> |    {                           |
           |    email : "abc@gmail.com",    |
           |    upi : "abc123"              |
           |        }                       |
           _________________________________
                        Heap Memory

           Now its visible that the UserOne is having the refference on one heap memory
*/

let UserTwo = UserOne
console.log(UserTwo);

/*         _________________________________
UserOne -> |    {                           |
UserTwo -> |    email : "abc@gmail.com",    |
           |    upi : "abc123"              |
           |        }                       |
           _________________________________
                        Heap Memory

           Now its visible that the UserOne and userTwo both having the refference on one heap memory
*/

UserTwo.email="Ruchi@gmail.com"

/*
Now SInce we have the refernce of same heap memory so it would update accordingly
*/

console.log(UserOne.email);
console.log(UserTwo.email);