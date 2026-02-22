// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();

// chai()

// (function aurCode(name){
//     console.log(`DB CONNECTED TWO ${name}`);
// })('kushal');

// aurCode('kushal')

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("kushal");

//global scope ke pollution se bachne k lie ya apne function ko(aur functn ke variables ko) bachane k lie hm IIFE ka use kr rhe h
// Isse global scope k pollutants i.e. variables hmare function ko affect nhi krege aur by using IIFE hmara function execute ho jaega as soon as it is defined
