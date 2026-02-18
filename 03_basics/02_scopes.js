// let a = 10;
// const b = 20;
// var c = 30;
// var c = 300; // Global Scope
let a = 300;

if (true) {
  // 1st layer of scope
  // Block Scope
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   c = 30;
  console.log("INNER: ", a);
  function addNum() {
    // 2nd layer of scope
  }
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

console.log(a);
// console.log(b);
// console.log(c);
