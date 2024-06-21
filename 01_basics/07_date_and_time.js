console.log("Hello");


let CurrentDate = new Date();
console.log(CurrentDate.toDateString());

console.log(CurrentDate.toISOString());

console.log(CurrentDate.toJSON());

console.log(CurrentDate.toLocaleDateString());
console.log(CurrentDate.toLocaleString());

let NewTime = new Date();

const MytimeStamp = Date.now()
console.log(MytimeStamp);
console.log(NewTime.getTime());
console.log(NewTime.getDate());