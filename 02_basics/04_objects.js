// const tinderUser = new Object() // using singleton(constructor)
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "kushal",
      lastname: "popli",
    },
  },
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname);
// console.log(regularUser.fullname?.userfullname?.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3={obj1, obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)

// console.log(obj3);
// console.log(obj1);
// console.log(obj3==obj1);

// const obj3={...obj1,...obj2}
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 1,
    email: "k@gmail.com",
  },
];
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

/* USED IN REACT */
// const navbar=(props.company)=>{

// }

// const navbar=({company})=>{

// }

// navbar(company="kushal")

// JSON => Javascript Object Notation
// not only limited to Javascript, used in API industry like in Ruby, PHP etc.
// objects ko usually json format m hi bhjte hain

// {
//   "name":"kushal",
//   "coursename":"js in hindi",
//   "price":"free"
// }

// [
//   {},
//   {},
//   {}
// ]
