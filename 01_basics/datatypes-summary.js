// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
// let userEmail;
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

// const bigNumber = 3455644245677478987645n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"kushal",
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);
console.log(typeof anotherId);


