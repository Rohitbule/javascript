//ARRAY METHODS 
//1. forEach = arr.foreach(some function definition or name)

// let arr = [1,2,3,4,5];

// arr.forEach( (el) => {
//     console.log("printed through an arrow function",el);
// })

// arr.forEach(function (el) {
//     console.log("print through an normal function",el);
// });

// let print = function(el)
// {
//     console.log(el);
// };
// arr.forEach(print);

let arr = [ {
    name : "aman",
    marks : 95,
},
{
    name : "Rohit",
    marks : 90,
},
{
    name : "om",
    marks : 87,
},
];
arr.forEach((student) => {
    console.log(student);
    console.log(student.marks);
});
