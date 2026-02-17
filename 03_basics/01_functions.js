// console.log("K");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("L");

function sayMyName() {
  console.log("K");
  console.log("U");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("L");
}

// sayMyName
// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   console.log("Kushal");
  //   return result;
  //   console.log("Kushal");

  return number1 + number2;
}

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)
// addTwoNumbers(3,5)

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  // if(username === undefined){
  //     console.log("Please enter a username");
  //     return
  // }
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// loginUserMessage("kushal")
// console.log(loginUserMessage("kushal"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
// console.log(loginUserMessage("kushal"));

// function calculateCartPrice(num1) {
//   return num1;
// }
function calculateCartPrice(val1, val2, ...num1) {
  // rest/ spread operator
  return num1;
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 500));
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "kushal",
  //   price: 199,
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`,
  );
}

// handleObject(user)
// handleObject({
//   username: "sam",
//   price: "399",
// });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
