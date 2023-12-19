const student = {
    name:"Rohit",
    age:20,
    marks:94.4
};
console.log(student);

let student2=["rohit",23,94.4];
console.log(student2);

const item = {
    price : 100.99,
    discount : 50,
    colors :["red","pink"]
};
console.log(item);

//create a post
const post ={
    username : "@rohitbule",
    content : "this is my first post",
    likes : 150,
    reposts : 5,
    tags :["@saimore","omushir"]
};
console.log(post);

//how to get your values
console.log(post["content"]);
console.log(post.likes);
console.log(post.tags[0]);

let prop = "reposts";
console.log(post[prop]);

let obj ={
    1 : "a",
    2 : "b",
    null : "d",
    true : "c",
    undefined : "e"
};
console.log(obj);
console.log(obj[2]);
console.log(obj.null);

//how to add and update value
const student3 ={
    name : "rohit",
    age : 23,
    marks : 94.4,
    city  : "delhi"
};
console.log(student3);
console.log(student3.city);
console.log(student3.city="mumbai"); // to  update a new value
console.log(student3.city);
console.log(student3.gender="male");  //to add new object
console.log(student3);
console.log(delete student3.age);  //delte from the object 
console.log(student3);
console.log(student3.marks=[99,89,70]);
console.log(student3);

//objects of objects : storing information of multiple student
/*const classinfo ={
    aman:{
        grade:"A+",
        city:"delhi",
    },
    om:{
        grade:"A",
        city:"pune",
    },
    sai:{
        grade:"o",
        city:"Mumbai"
    }
};
console.log(classinfo);
console.log(classinfo.aman);
console.log(classinfo.aman.city);
console.log(classinfo.aman.city="ahmednagar");
console.log(classinfo);*/

//array of object
/*const classinfo =[
    {
        name : "Rohit",
        grade:"A+",
        city:"delhi",
    },
    {
        name :"om",
        grade:"A",
        city:"nashik",
    },
    {
        name : "sai",
        grade:"o",
        city:"Mumbai"
    },
];
console.log(classinfo);
console.log(classinfo[0]);
console.log(classinfo[0].name);
console.log(classinfo[0].name="tushar");
console.log(classinfo[0].gender="male");
console.log(classinfo);*/

//math object and properties
/*console.log(Math.E);
console.log(Math.PI);

console.log(Math.abs(8));
console.log(Math.pow(2,3));
console.log(Math.floor(5.99)); //nearest or smallest int value
console.log(Math.ceil(5.99));  //largest value round of done */

//random integer
/*let num = Math.random();
console.log(Math.random());
let step2 = num * 10;
console.log(step2);
let step3=Math.floor(step2);
console.log(step3);*/

console.log(Math.floor( Math.random() * 10) + 1);

console.log(Math.floor( Math.random() * 10) + 20);

console.log(Math.floor( Math.random() * 5) + 21);

        //GUESSING GAME
//user enter a max number and tries to guess a random generated number between 1 to max.

const max = prompt("enter the max number");

const random =Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true)
{
    if(guess == "quit")
    {
        console.log("user quit");
        break;
    }

    if(guess == random)
    {
        console.log("you are right congrts!! random number was",random);
        break;
    }
    else if(guess < random)
    {
        guess = prompt("hint ::your guess was too small.please try again")
    }
    else
    {
        guess =prompt("hint :: your gues was too large.please try agin ")
    }
    /*else
    {
        guess=prompt("your guess was wrong. please try again");
    }*/
}

















































































































































































































