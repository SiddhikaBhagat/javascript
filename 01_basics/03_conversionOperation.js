//-------conversion of data types----------------------

let scor="32";
let r="546etf"
console.log(typeof(scor));
let stringtonuber=Number(scor);
console.log(typeof(stringtonuber));
console.log(r);
console.log(typeof(r));
let change=Number(r);
console.log(typeof(change));//gives number
console.log(change);// gives nan



let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//convert to number
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
//null =>0
//undefined =>nan

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);
//convert to boolean
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// -------operation---------------------------------

let value = 3
let negValue = -value
 //console.log(negValue);

//   console.log(2+2);
//  console.log(2-2);
//  console.log(2*2);
//  console.log(2**3);
//  console.log(2/3);
//  console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2); //if string first then convert into string
// console.log(1 + "2");//if number first act as number and then append
// console.log("1" + 2 + 2);//if string first then convert into string
// console.log(1 + 2 + "2");/if number first act as number and then append


 //console.log(+true);//1
 //console.log(+"");//0

 let gameCounter = 100
++gameCounter;
console.log(gameCounter);
