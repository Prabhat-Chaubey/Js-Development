# Js-Development
# 1. Data Types 

Data is categorized into two type **Primitive/value** type and **Non-Primitive/Reference** type there are **7 types** of
**Primitve data type** 
- ***String*** 
- ***Number***  
- ***Bolean***  
- ***Null***
- ***Undefined*** 
- ***Symbol***
- ***BigInt***

**Non primitive/reference types** 
<br>
 - ***Array***

> `const SuperHeroes = ["shaktiman","hulk","Thor"]`
>
> `console.log(SuperHeroes)`
> 
> There are various function that we perform on `Array` and some of those functions are
>
>> - `Push()` This function appends element to the end of an exsting array.
>>
>> - `Pop()` This function removes the last element from the array.
>>
>> - `Unshift()` This function appends any element to the starting of the array.
>>
>> - `Shift()` This function deletes the first element from the array.
>>
>> - `Includes()` this Function is helpful to find if the element is prsent in the array or not , for example `NewArray.includes("Prabhat")` now if `"prabhat"` is present in the array `NewArray` then it would return `True` else it would return `False`
>>
>> - `Indexof()` this function would give the index of the element, in the prior example if `prabhat` is present then `NewArray.indexof("prabhat")` would give the index of `"prabhat"`
>>
>> - `join()` this function is helpful as it converts the whole `array` into `String` format, `newArray = [1,2,3,4]` and output of `newArray.join()` would be `1,2,3,4`
>>
>> - `Slice() and Splice()` these function have some what same work but the have very different method of working <br>
>>      - `Slice()`<br> This function give the slice of array we demand, if theres an `array [1,2,3,4,5]` then the `array.slice(1,3)` would return the output as `[2,3]` <br>
>>      - `Splice` <br> In this function the original array also gets affected in the same scenario `splice(1,3)` would return `[2,3,4]` but also the main array becomes `[1,5]`
>>
>> - `Concat Fuction` <br> this function is useful when we are contatinating two arrays, `Array1.concat(Array2)` but this is old practice now in mordern javascript we use different fucntion which is spread fucntion.
>>
>> - `Spread Function` <br> this function is veryuseful to merge two or more arrays, and hence it is quite used in mordern js, `Const ResultArray = [... Array1,...Array2]` this is how its done and `Resultarray` would have the merged array.
>>
>> - `to Conversion` <br> This function focuses on how we can convert it into array for example by using <br>
>>      - `'.from()'` we can make an array, `Array.from("PRABHAT")` would give the output as `["P","R","A","B","H","A","T"]` <br>
>>      - `'.of()'` we can make an array, `Array.of(var1,var2,var3)` and the output would be arrray of all those variable , and those variables might have int or string datatype. <br>
 - ***Objects***

> `let student = {name : "prabhat",age : 12,division : "c",rollcall : 77}`
>
> `console.log(student)`
> 
> `console.log(student.name)`

 - ***Functions***

> `const myFunction = function(){`
>
>    `console.log("hello fucntion")`
>
> `}`
> 
> `myFunction();`
>

 
 Javascript is a **Dynamicaaly typed language**, because if we do `(const = 100)` then that data type of const would be `int`, but we have not mentoned it to be `int` or `String`, hence it is a dynamic langugae. 

we cant go back and check the data type again and again so we have a fucntion `typeof` which helps to know the type of the data we are using 

> `console.log(typeof myFunction)`
>
>`console.log(typeof SuperHeroes)`
>
>`console.log(typeof student)`
>
## 1.2 Stack and Heap memory 
***
There are two storage ways, stack and heap memory type
- ***Stack Memory (In primitive Types)***
- ***Heap Memory (In Non-Primitive Types)***

- **Stack Memory**
<br>
In stack memory we get the copy and not the original one 

> `let Firstname = "Prabhat";`
>
>`let OneMoreName = Firstname;`
>
> `console.log(Firstname);`
>
> `console.log(OneMoreName);`
>
> Till now one more name have value as `"Prabhat"`
>
> `OneMoreName = "Ruchi"`
> Now, Firstname -> Prabhat , OneMoreName -> Ruchi ,Because we made changes in the copy

 - **Heap Memory**
<br>
In HeapMemory we get the references , which means
<br>

>`let UserOne = {email : "abc@gmail.com",upi : "abc123"}`
>
> `console.log(UserOne);`
>
> ![Alt](/Images/Heapmemory1.png)
>
>
> `let UserTwo = UserOne`
>
> `console.log(UserTwo);`
>
> ![Alt](/Images/heapmemory2.png)
>
> `UserTwo.email="Ruchi@gmail.com"`
>
> **Now SInce we have the reference of same heap memory so it would update accordingly**
>
> `console.log(UserOne.email);`
>
> `console.log(UserTwo.email);`
>
> would have the same output as `Ruchi@gmail.com`

## **1.3 String**
***
`Const name = "Prabhat"`
<br>
<br>
`Const repocount = 10`
<br>
<br>
Now lets make a sentence by using there variables. <br>
<br>
`Console.log(name + repocount)` <br>
<br>
The Output Would be `prabhat10`<br><br>
But this way is very old and not favored in modern projects, so to counter it we would be using ***String Interpolation***
>***String Interpolation***
>
>> `console.log(my name is ${name} and my repocount is ${repocount} )`
>>
>
## **1.4 Math and Numbers**
There are various functions that we use from the maths library , if needed check from mdn documentations. Some of them for reference are <br>
>
> `tofixed(2)` <br>
>
this code get the two decimal places, for instance we i have `400` then `math.fixed(2)` would give the output as `400.00` <br>
>
> `toPrecision(3)` <br>
>
this code get the precision of 3 numbers, for instance we i have `123.9` then `math.toPrecision(3)` would give the output as `124` <br>
>
> `Math.abs(3)` <br>
>
This is absolute value, this gives output as a positive number, even if the number is negative.
>
> `Math.round(4-3)` <br>
>
This rounds off the value in normal for, if we want the lower range the `Math.floor()` and if we want the upper range the `Math.ciel()` 
>
> `Math.random()`  this genrates a  random value which lies between 0 -  1<br>
>
> `Math.max()` <br>
>
> `Math.min()` <br>
>
## **1.5 Date and Time**
>
>![Alt](/Images/Date_and_time.png)
>
## **1.6 Objects**
>
>![Alt](/Images/Objects.png)
>
