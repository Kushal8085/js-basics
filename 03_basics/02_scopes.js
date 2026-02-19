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
  // console.log("INNER: ", a);
  function addNum() {
    // 2nd layer of scope
  }
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++ interesting ++++++++++++++++++++

// console.log(addOne(5));

function addOne(num) {
  return num + 1;
}
// console.log(addOne(5));

addTwo(5); // hoisting concept

const addTwo = function (num) {
  return num + 2;
};
// console.log(addTwo(5))
