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