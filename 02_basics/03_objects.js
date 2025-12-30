//objects can be declared in two types:
//1)Literal kind //it is of multiple instances
//2)Constructor kind //it is of type singleton

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",//keys are in the form of string
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
 console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
console.log(JsUser);