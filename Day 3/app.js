//Array = Linear collection of Array

let marks=[99,85,93,76,62];
let names=["adam","bob","catlyn"];
let info=["aman",25,6.1]; //mixed array

console.log(marks);
console.log(names);
console.log(info);
console.log(typeof names);  //object
console.log(info[0][0]);    //a
console.log(info[0]);       //aman
console.log(info.length);  //3
console.log(info[0].length); //4

//empty array
let emparr=[];

//Array are mutuable
let name=["rohit","om","sai"];
console.log(name);
name[0]="tushar";
console.log(name);
name[10]="varad";
console.log(name);

// //Array methods
// push:add to end
// pop:delete from end and returns it.
// unshift: add to Start
// shift : delete from start and returns it.

let car=["audi","bmw","xuv","maruti"];
console.log(car);
car.push("toyato");
car.unshift("ferrari");
console.log(car);
car.pop("toyato");
car.shift("ferrari");
console.log(car);

let follower=["a","b","c"];
let block=follower.shift();
console.log(follower);
console.log(block);

let start=["january","july","march","august"];
console.log(start);
start.shift();
start.shift();
console.log(start);
start.unshift("june");
start.unshift("july");
console.log(start);

//INDEXOF = returns index of something
//INCLUDES = search for a value
//CONCAT = merge 2 arrays
//REVERSE = reverse an array
//SLICE = copies a portion of an array 
//SPLICE = REMOVE|REPLACES|ADD ELEMENTS IN PLACE
//SPLICE = SPLICE(START,DELETECOUNT,ITEM)...ITEMN)

let primary=["red","yellow","blue"];
let secondary=["orange","green","violet"];
// primary.indexof("yellow"); //1
// primary.indexOf("green");  //-1
// primary.indexOf("Yellow");  //-1
// primary.includes("red");    //true
// primary.includes("green");  //green
// console.log(primary.concat(secondary));
// let allcolors=primary.concat(secondary);
// console.log(allcolors);
// console.log(primary.reverse());
// console.log(primary.slice());
// console.log(primary.slice(2));
// console.log(primary.slice(2,3));
// console.log(primary.slice(-2));
console.log(primary.splice(2));
console.log(primary.splice(0,2));
console.log(primary.splice(0,1,"black","grey"));

let cars=["audi","bmw","xuv","maruti"];
console.log(cars.splice(3));
console.log(cars.splice(0,1));
cars.push("maruti");
cars.push("ferrari");
console.log(cars.splice(1,2));
console.log(cars.splice(0,0,"toyota","xuv","maruti"));
console.log(cars.splice(1,0,"mercedes"));
console.log(cars.splice(1,1,"gwagon"));
console.log(cars);
