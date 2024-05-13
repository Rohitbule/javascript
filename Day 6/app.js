// function hello()                     //function definition
// {
//     console.log("hello");
// }
// hello();                             //function calling

// function printName()                 //function definition
// {
//     console.log("Rohit");
//     console.log("Bule");
// }
// printName();                         //function calling 

// function print1to5()                 //function definition
// {
//     for(i=0; i<5; i++)
//     {
//         console.log("i = ", i);
//     }
// }
// print1to5();                         //function calling

// function isadult()                        //function definition
// {
//     let age = 10;
//     if(age < 18)
//     {
//         console.log("person is not Adult");
//     }
//     else
//     {
//         console.log("person is Adult");
//     }
// }
// isadult();                                  //function calling

//dice game
// function rolldice()
// {
//     let rand = Math.floor(Math.random() * 6) + 1;
//     console.log("you have roll the dice!.your score is",rand);
// }
//  rolldice();
//  rolldice();
//  rolldice();
//  rolldice();
//  rolldice();
//  rolldice();

//function with argument = values we pass to the function.
// function avg(a,b,c)
// {
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }

// avg(10,20,30);

//return function.
// function sum(a,b)
// {
//     console.log("it will get print");
//     return a+b;
//     //console.log("it will not get print");
// }

// console.log(sum(sum(5,5),5));

// function getsum(n)
// {
//     let sum=0;
//     for(let i=1; i<=n; i++)
//         {
//             sum +=i;
//         }
//         return sum;
// }

// console.log(getsum(10));

//create a function that returns the concatenation of all strings in an array.
// let str = ["hi","hello","bye","!"]

// function concat(str)
// {
//     let result ="";

//     for(let i=0; i<str.length; i++)
//         {
//             result +=str[i];
//         }

//     return result;
// }

// console.log(concat(str));

//scope : scope determine the accessiblity of variables,objects,and functions from different parts of the code.
//function,block,lexical,global this are scope.
//function scope: variables defined inside a function are not accessible(visible) from outside the function.
//    let sum =54; //global scope
//    function calsum(a,b)
//    {
//         //let sum = a+b;   //function scope
//         console.log(sum);
//    }
//    calsum(1,2);
//    console.log(sum);  

// Block Scope : variables declared inside a {} block cannot be accessed from outside the block .
// let age =25;
// if(age >=18)
//     {
//          let str = "adult";
//          console.log(str);  //block chya atta madli value ch print kart
//     }
//console.log(str);  str blocked chya atta madhe declared kelel ahe.

//Lexiacl Scope : a variable defined outside a function can be accesed inside another function defined after the variable declaration.
//the oppsite is not true.

// function outerfunction()
// {
//     let x = 10;
//     let y = 20;
//     function innerfunction()
//     {
//         //let a =200;
//         console.log(x);
//     }
//     innerfunction();
//    // console.log(a);
// }
// outerfunction();

// let greet = "hello";

// function changegreet()
// {
//     let greet = "namaste";
//     console.log(greet);
//     function innergreen()
//     {
//         console.log(greet);
//     }
// }
// console.log(greet);
// changegreet();

//function expressions
// let name = "Rohit";
// let sum =  function(a,b)
// {
//     return a + b;
// }
// console.log(sum(1,2));

//Higher order functions
// a function that does one or both:
//1. takes one or multiple functions functions as argument
//2. returns a functions.

//1. takes one or multiple functions functions as argument
// function multiplegreet(func , n)
// {
//     for(let i=1; i<=n; i++)
//         {
//             func();
//         }
// }

// let greet = function()
// {
//     console.log("hello");
// }
// multiplegreet(greet,2);

//2 . returns function
// function oddeventest(request)  
// {
//     if(request == "odd")
//         {
//             return function(n)
//             {
//                 console.log(!(n%2 == 0));
//             }
//         }
//         else if(request == "even")
//             {
//                 return function(n)
//                 {
//                     console.log(n%2 == 0);
//                 }
//             }
//         else
//         {
//             console.log("Wrong request");
//         }
// }
// let oddTester = oddeventest("odd");
// oddTester(8);

//methods : Actions that can be performed on an object.
// const calculator = {
//     num: 55 ,
//     add: function(a,b)
//     {
//         return a + b;
//     },
//     sub: function(a,b)
//     {
//         return a - b;
//     },
//     mul : function(a,b)
//     {
//         return a * b;
//     }
// };
// console.log(calculator.add(1,2));
// console.log(calculator.sub(1,2));
// console.log(calculator.add(1,2));

//method shorthand
const calculator = {
    add(a,b)
    {
        return a+b;
    },
    sub(a,b)
    {
        return a-b;
    }
};
console.log(calculator.add(1,2));















