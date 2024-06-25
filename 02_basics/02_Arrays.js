
// Array ll 

// push to array 


const marvel_heroes = ["hulk", "spiderman", "ironman"];
const Dc_heroes = ["superman", "Batman", "flash"];

console.log(marvel_heroes);
console.log(Dc_heroes);
marvel_heroes.push(Dc_heroes)

console.log(marvel_heroes);


/*
Output is :->
[ 'hulk', 'spiderman', 'ironman' ]
[ 'superman', 'Batman', 'flash' ]
[ 'hulk', 'spiderman', 'ironman', [ 'superman', 'Batman', 'flash' ] ]

*/

//concat function

const marvel_heroes = ["hulk", "spiderman", "ironman"];
const Dc_heroes = ["superman", "Batman", "flash"];

console.log(marvel_heroes);
console.log(Dc_heroes);
const all_Heroes = marvel_heroes.concat(Dc_heroes)
console.log(all_Heroes)


/*
Output :->

[ 'hulk', 'spiderman', 'ironman' ]
[ 'superman', 'Batman', 'flash' ]
[ 'hulk', 'spiderman', 'ironman', 'superman', 'Batman', 'flash' ]


*/

// Sprad Function 
// this function add multiple arrays 
const marvel_heroes = ["hulk", "spiderman", "ironman"];
const Dc_heroes = ["superman", "Batman", "flash"];

const all_Heroes = [...Dc_heroes,...marvel_heroes]
console.log(all_Heroes);

/*
Output :->

[ 'superman', 'Batman', 'flash', 'hulk', 'spiderman', 'ironman' ]


*/


// convert to array 

// there are some function who cane take mulpite instace and convert it into array form 


const Newarray =Array.from("Prabhat")
console.log(Newarray);

/*
this function makes an array out of prabhat and output is :
output :->
[ 'P', 'r', 'a','b', 'h', 'a','t' ]
*/

const Score1 = 100
const Score2  = 200
const Score3 = 300

const Newarray  =  Array.of(Score1,Score2,Score3)
console.log(Newarray);


/*
this function makes an array out of given variable and output is :
output :->
[ 100, 200, 300 ]
*/