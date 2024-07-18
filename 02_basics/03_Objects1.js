// to define the object in the java script 

const JsUser = {
    FirstName : "Prabhat",
    age : 18, 
    location : "Hyderabad" , 
    email : "halalua@gmail.com" , 
    isLOggedIn: true 

}

// console.log(JsUser)

/*
output :
{
    FirstName: 'Prabhat',
    age: 18,
    location: 'Hyderabad',
    emal: 'halalua@gmail.com',
    isLOggedIn: true
  }

  */


// console.log(JsUser.email)
// console.log(JsUser["email"])

JsUser.email = "ChangedEmail@gmai.com"

// console.log(JsUser)

JsUser.greeting = Function()
    console.log("Hello User");


console.log(JsUser.greeting())