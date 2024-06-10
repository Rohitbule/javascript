//THIS KEYWORD : "THIS" keyword to an object that is executing the current piece of code .
const student  = {
    name : "shradhha",
    age : 23,
    eng : 95,
    math : 90,
    phy : 98,
    getavg()
    {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(student.getavg());
function getavg()
{
    console.log(this);
}

//try & catch
//the ttry statement allows you to define a block of code to be tested for errors while it is being executed .
//the catch statement allows you to define a block of code to be executed ,if an errors occurs in the try block.
// console.log("hello");
// console.log("hello");
// //let a =10;
// try
// {
//     console.log(a);
// }
// catch(err)
// {
//     console.log("Caught an error .. a is not defined");
//     console.log(err);
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

//ARROW FUNCTIONS 
// const sum = (a,b) =>
// {
//     console.log("the addition of two number is " ,a+b);
// };
// sum(2,3);

// const cube = n => {
//     return n*n*n;
// }
// console.log("the cube of number is",cube(3));

// const pow = (a,b) =>
//     {
//         return a ** b;
//     };
// console.log("the power is ",pow(2,3));

//Implict return 
// const mul = (a,b) => (a*b);
// console.log(mul(2,3));

//SET TIMEOUT
// console.log("Hi there!");
// setTimeout(() => {
//     console.log("Apna College");
// },4000);
// console.log("welcome to");

//SET INTERVAL
// let id = setInterval(() => {
//     console.log("Apna College");
// },2000);
// console.log(id);
// clearInterval(id);


// let id2 = setInterval(() => {
//     console.log("hi there");
// },2000);
// console.log(id2);

//THIS WITH ARROW FUNCTIONS
//function = scope = this = calling object.
//Arrow = lexical scope = parent scope = call.
// const student = {
//     name : "aman",
//     marks : 95,
//     prop: this,  //global scope
//     getname: function() {
//         console.log(this);
//         return this.name;  //this is chi value student ahe.
//     },
//     getmarks: () => {
//         console.log(this);  //parent scope => window 
//         return this.marks;    //this is chi value window ahe.
//     },
//     getinformation1: function() {
//         setTimeout( () => {
//             console.log(this);  //student
//         },2000);
//     },
//     getinformation2: function() {
//         setTimeout( function() {
//             console.log(this);  //window
//         },2000);
//     },
// };
// console.log(student.getname());
// console.log(student.getmarks());

//wrrite an arrow functions that returns the square of a number 'n'.
// const square = (n) => n*n;
// console.log(square(3));

//write a function that prints "Hello world" 5 times at intervals of 2s each.
// let id = setInterval(() => {
//     console.log("hello world");
// },2000);

// setTimeout(() => {
//     clearInterval(id);
// },10000);

// const object = {
//     message: 'Hello, World!',
//     logMessage () 
//     {
//         console.log(this.message);
//     }
// };
// setTimeout (object.logMessage,1000);

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage.bind(object), 1000);

// let length = 4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };
// object.method(callback,1,2);
