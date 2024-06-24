console.log("hello")
// this is the syntax to declare an array 
const Number = [1,2,3,4,5]

console.log(Number);
console.log(Number[1]); //we can acces elements at different idices

// to add any element at the end of the array we use .push()
Number.push(14)
console.log(Number);

// output -> [1,2,3,4,5,14]


// to remove the last element from the array we use .pop()
Number.pop()
console.log(Number);

// output -> [1,2,3,4,5]

Number.unshift(0) //this is to add element in the begining
Number.shift() // this is to remove element from the begining

console.log(Number);


console.log(Number.includes(3)); //this gives the bollean value if the element passed exit in aaray or not
console.log(Number.indexOf(3)); // this gives the index of the element we are loooking for

const Newarray = Number.join() // this convers the whole array into string [1,2,3,4,5] -> 1,2,3,4,5
console.log(Newarray);


// ther a difference in slice and splice 
console.log("array: ", Number); 
console.log("the slice function : ", Number.slice(1,3));
// sice gives the output of what part we want to see and there is no affect on the main array 
console.log("array: ", Number);
console.log("the splice function : ", Number.splice(1,3));
// splice function gives the output and also make the changes in the main array 
console.log("array: ", Number);

