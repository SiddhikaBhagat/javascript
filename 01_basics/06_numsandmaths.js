//----------------Numbers-----------------

let score=10000000000;
// console.log(score);
let modify =score.toString();
// console.log(modify.length)
// console.log(typeof(modify))
const balance=new Number(45);
// console.log(balance);
// console.log(score.toFixed(2));
// console.log(score.toPrecision(4));
// console.log(score.toLocaleString('en-IN'));
// console.log(Number.MAX_VALUE);

//-----------Maths----------------------
//  console.log(Math);
//  console.log(Math.abs(-4));
//  console.log(Math.round(4.6));
//  console.log(Math.ceil(4.2));
//  console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
//  console.log(Math.max(4, 3, 6, 8));

//  console.log(Math.random());//gives value between zero and 1

//  console.log((Math.random()*10)+1);//whwn we multiply by 10 one pont is shifted sowe get the cvalue from one we add one in it because sometime after decimal 0 will also be there.
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)