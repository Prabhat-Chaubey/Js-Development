
// Defeining object inside an Obejct 
const regularUser = {
    email : "randomemail@gmail.com",
    age : 42,
    fullnName : {
        UserFirstName : "Prabhat",
        UserMiddleName : "Ritesh",
        UserLastName : "Chaubey"
    }
}
// comand to see the object
// console.log(regularUser);
//command to see the object inside the object
// console.log(regularUser.fullnName.UserFirstName);

const Object1 ={UerName : "Prabhat"}
const Object2 = {surname : "Chaubey"}

//spread Operator
// const FullName ={... Object1,...Object2}
console.log(FullName);

// { UerName: 'Prabhat', surname: 'Chaubey' }
