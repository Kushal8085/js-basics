const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));

// const otherNumber=123.8966;
// const otherNumber=1123.8966;

// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

// console.log(Math.random()); //0 (inclusive) ≤ value < 1 (exclusive)
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+min); //👉 Why +1? Because we want to include both 10 and 20. Without +1, 20 would never appear.
//(max - min + 1) we multiply this so that our range can be 0<=num<11
//Math.random() * 11 => This gives a decimal number in the range:0 ≤ value < 11
//So now we have random decimal numbers between 0 and 10.999…
//Math.floor(Math.random() * N) gives numbers from 0 to N-1

//✅ Final output range: 10 to 20 (inclusive)