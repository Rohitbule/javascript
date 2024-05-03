//JS OBJECT LITERALS = USED TO STORE KEYED COLLECTIONS AND COMPLEX ENTITIES
//  PROPERTY => (KEY,VALUE)PAIR
//  OBJECTS ARE A COLLECTION OF PROPERTIES

//JS OBJECT LITERALS
// let delhi = {
//     latitude: "28.7041degree North",
//     longitude: "77.1025degree East"
// };
// console.log(delhi);

// const student = {
//     name: "Rohit",
//     age: 21,
//     marks: 90.23
// };
// console.log(student);

// const item = {
//     price: 100.0,
//     discount: 50,
//     colors: ['Red','Yellow']
// };
// console.log(item);

// THREAD / TWITTER POST
// CREATE AN OBJECT LITERALS FOR THE PROPERTIES OF THREAD/ TWITTER POST WHICH INCLUDES-
// USERNAME,CONTENT,LIKES,REPOST,TAGS

// const post = {
//     username: "@RohitBule",
//     content: "This is my first project",
//     likes: 150,
//     repost: 5,
//     tags: ["@saimore","@omushir"]
// };
// console.log(post);

// //GET VALUES
// console.log("Likes are",post["likes"]);
// console.log(post.content)

// let pro = "repost";
// console.log(post[pro]);
// console.log(pro);
//let pro = "reposts";
//console.log(post[prop]);

// GET VALUES = 1) JS AUTOMATICALLY CONVERTS OBJECTS KEYS TO STRINGS.
//              2) EVEN IF WE MADE THE NUMBER AS A KEY ,THE NUMBER WILL BE CONVERTED WILL BE CONVERTED TO String.

// const obj = {
//     1 : "a",
//     2 : "b",
//     true : "c",
//     null : "d",
//     undefined : "e"
// };
// console.log(obj);
// console.log(obj[1]);
// console.log(obj[null]);
// console.log(obj.undefined);

//add/update value
//change the city to mumbai.
//add a new property gender female.
//change the marks to "A"

// const student = {
//     name: "Rohit",  
//     age: 21,
//     marks: 90.23,
//     city: "delhi"
// };
// console.log(student);
// student.city = "mumbai";  // for changing a value from delhi to mumbai
// console.log(student);
// student.gender = "male";
// console.log(student);
// student.marks = "A";
// console.log(student);
// delete student.marks;
// console.log(student);

//object of object = storing information of multiple students.

// const classinfo = {
//     rohit: {
//         grade : "a",
//         city : "kopargaon"
//     },
//     sai: {
//         grade : "b",
//         city : "Ahmednagar"
//     },
//     om: {
//         grade : "c",
//         city : "ozar"
//     }, 
// };
// console.log(classinfo);
// console.log(classinfo.rohit);
// console.log(classinfo.rohit.city);
// classinfo.rohit.city = "pune";
// console.log(classinfo);

//arrao of objects.
// const classinfo = [
//     {
//         name: "rohit",
//         grade: "A",
//         city: "Ahmednagar"
//     },
//     {
//         name: "om",
//         grade: "A+",
//         city: "ozar"
//     },
//     {
//         name: "sai",
//         grade: "b+",
//         city: "shevgaon" 
//     },
// ];
// console.log(classinfo);
// console.log(classinfo[1]);
// console.log(classinfo[2]);
// console.log(classinfo[0]);
// console.log(classinfo[0].city);

//math objects
// console.log(Math.PI); //math properties
// console.log(Math.E);  //math properties
// console.log(Math.abs(12.66));  //negative la positive kart.
// console.log(Math.pow(2,5));  //pow function
// console.log(Math.floor(2.88));  //  round of  karto . less value det
// console.log(Math.ceil(5.99));  // motya number la round of  karto.
// console.log(Math.random(8))  // 0 ani 1 madhi value det.ani 1 kadhi value det nahi.

//random integers generate kart
// let step1 = Math.random();
// console.log(step1);
// let step2 = step1*10;
// console.log(step2);
// let step3 = Math.floor(step2);
// console.log(step3); 
// let step4 = step3 + 1;
// console.log(step4);

// let num = Math.floor(Math.random() * 10) + 1;
// console.log(num);

// let num1 = Math.floor(Math.random() * 5) + 21;
// console.log(num1);

//GUESSING GAME
//user enters a max number & tries to guess a random generated number between 1 to max

const max = prompt("Enter the max number");
const random  = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number");
while(true)
{
    if(guess == "quit")
    {
        console.log("user quit");
        break;
    }
    if(guess == random)
    {
        console.log("you are right! congrats!! random number was",random);
        break;
    }
    else if(guess < random)
    {
        guess = prompt("Hint : your guess was to small.please try again");
    }
    else
    {
        guess = prompt("Hint : your guess was too large.please try again");
    }
}