// How to declare a functions 

function SayMyName (){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("T");

}

// SayMyName()

function AddTwoNumbers (number1,number2){
    let result = number1+number2
    return result
}

const Final = AddTwoNumbers(3,5)
// console.log(Final);

//rest operations

// we have a lot of entries we are unaware of then we do 

function CartValue(...num1){
    return num1
}

console.log(CartValue(100,500,200));

//  [ 100, 500, 200 ]

// handling an object
// handling an object in fucntion 

// creating an Object 

uerValue = {
    UserName : "Prabhat",
    phoneNo  : 7770098538

}

// now creating functions to handle the object 

function HandleObject(AnyObject){
    console.log(`the name of User is ${AnyObject.UserName} and phone number is ${AnyObject.phoneNo}`);
}
HandleObject(uerValue)

// the name of User is Prabhat and phone number is 7770098538


// passing array as argument


const MyArray = [100,200,400,100,600]

function HandleArray (NewArray){
    console.log(NewArray[1])
}

HandleArray(MyArray)

// 200