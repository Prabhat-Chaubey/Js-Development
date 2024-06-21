# Js-Development
## 1. Data Types Summary

>Data is categorized into two type **Primitive/value** type and **Non-Primitive/Reference** type there are **7 types** of
>
>**Primitve data type** 
>> - ***String*** 
>> 
>> - ***Number***
>>  
>> - ***Bolean***
>>  
>>- ***Null***
>> 
>> - ***Undefined***
>> 
>> - ***Symbol***
>> 
>> - ***BigInt***
>
>
> **Non primitive/reference types**
>
>> - ***Array***
>>
>>> `const SuperHeroes = ["shaktiman","hulk","Thor"]`
>>>
>>> `console.log(SuperHeroes)`
>>
>> - ***Objects***
>>
>>> `let student = {name : "prabhat",age : 12,division : "c",rollcall : 77}`
>>>
>>> `console.log(student)`
>>> 
>>> `console.log(student.name)`
>>
>> - ***Functions***
>>
>>> `const myFunction = function(){`
>>>
>>>    `console.log("hello fucntion")`
>>>
>>> `}`
>>> 
>>> `myFunction();`
>>>
>>
> 
> Javascript is a **Dynamicaaly typed language**, because if we do `(const = 100)` then that data type of const would be `int`, but we have not mentoned it to be `int` or `String`, hence it is a dynamic langugae. 
>
>we cant go back and check the data type again and again so we have a fucntion `typeof` which helps to know the type of the data we are using 
>
>> `console.log(typeof myFunction)`
>>
>>`console.log(typeof SuperHeroes)`
>>
>>`console.log(typeof student)`
>
> ### Stack and Heap memory 
>
> There are two storage ways, stack and heap memory type
>
> - ***Stack Memory (In primitive Types)***
>
> - ***Heap Memory (In Non-Primitive Types)***
>
>> **Stack Memory**
>> 
>> In stack memory we get the copy and not the original one 
>>>
>>> `let Firstname = "Prabhat";`
>>>
>>>`let OneMoreName = Firstname;`
>>>
>>> `console.log(Firstname);`
>>>
>>> `console.log(OneMoreName);`
>>>
>>> Till now one more name have value as `"Prabhat"`
>>>
>>> `OneMoreName = "Ruchi"`
>>> Now, Firstname -> Prabhat , OneMoreName -> Ruchi ,Because we made changes in the copy
>>
>> **Heap Memory**
>>>In HeapMemory we get the references , which means 
>>>
>>>`let UserOne = {email : "abc@gmail.com",upi : "abc123"}`
>>>
>>> `console.log(UserOne);`
>>>
>>> ![Alt](/Images/Heapmemory1.png)
>>>
>>>
>>> `let UserTwo = UserOne`
>>>
>>> `console.log(UserTwo);`
>>>
>>> ![Alt](/Images/heapmemory2.png)
>>>
>>> `UserTwo.email="Ruchi@gmail.com"`
>>>
>>> **Now SInce we have the reference of same heap memory so it would update accordingly**
>>>
>>> `console.log(UserOne.email);`
>>>
>>> `console.log(UserTwo.email);`
>>> would have the same output as `Ruchi@gmail.com`
>>>
>>
>> 
>
>
##string
