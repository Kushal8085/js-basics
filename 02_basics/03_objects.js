// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const jsUser={
    name: "Kushal",
    "full name": "Kushal Popli",
    // mySym:"mykey1",
    [mySym]:"mykey1",
    age: 18,
    location: "Jaipur",
    email: "kushalpopli@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.mySym);
// console.log(typeof jsUser.mySym);

// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email="kushal@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email="kushal@microsoft.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser.greeting); // function execute nhi hota, uska reference returnback krta h
// console.log(jsUser.greetingTwo); // function execute nhi hota, uska reference returnback krta h

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// jb bhi method/functn call krte h to ek undefined bi ata h (browser m bi) => ek execution browser khud se krta h
