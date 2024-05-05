let score = "33"

let number = Number(score)
console.log(typeof(number))
/*  
if the score is "33abc" and we convert it in integer by using Number(score) then although it would be able to convert it and when we see the type we get number but when we would console it out then it would be NaN as its not a Number

but null would be 0
and undefined would be NaN
and true of bollean type would be 1
*/

let isLoggedIn = ""
let booleanisLoggedIN = Boolean(isLoggedIn)
console.log(booleanisLoggedIN)

/*
when we typecast the boolean and number this is outout we get
if isLoggedIn = 1 => true
if isLoggedIn = 0 => false
if isLoggedIn = "" => false
if isLoggedIn = "stringnot empty" => true

*/

// ============operations===============

let value = 3
let negvalue = -value
console.log(negvalue)

/*

console.log("addition operation: ",2+2);
console.log("subtraction operation: ",2-2);
console.log("multiplication operation: ",2*2);
console.log("poweer operation: ",2**3);
console.log("division operation: ",2/2);
console.log("remainder operation: ",2%2);

*/

// we can add/concatinate string as well

let str1 = "hello"
let str2 = " prabhat"
console.log(str1+str2)
console.log(1 + str2)

console.log("1"+1+1)

// starting with string hence everything is treated as string 

console.log(1+1+"1")

// once starting is int everything is in nnumber

console.log("1"+1+"1")

// this would alse play as string 


let gamecounter = 100
gamecounter ++

// postfix increment

console.log(gamecounter)
-- gamecounter

// prefix increment 


console.log(gamecounter)


let x= 3

let y = x++
console.log("postfix incrent of 3 is ",y)
// this would give output as y=3, as action would happen after it, that means in another run or cycle the increment value would be appended

let a= 3

let b = ++a
console.log("prefix incrent of 3 is ",b)
// this would give output as b=4, as action would happen before it, that means in the curent    cycle the increment value would be appended