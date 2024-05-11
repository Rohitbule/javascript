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

function calsum(a,b)
{
    let sum = a+b;
    console.log(sum);
}
calsum(1,2);