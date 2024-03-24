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

// Array methods
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
//indexof method
console.log(primary.indexOf("yellow")); //1
console.log(primary.indexOf("green"));  //-1
console.log(primary.indexOf("Yellow"));  //-1
//includes
console.log(primary.includes("red"));    //true
console.log(primary.includes("green"));  //false
//concat
console.log(primary.concat(secondary));
let allcolors=primary.concat(secondary);  //combibing both primary and seondary in allcolors array.
console.log(allcolors);
//reverse
console.log(primary.reverse());
//slice
console.log(primary.slice()); //blue,yellow,red
console.log(primary.slice(2));  //red
console.log(primary.slice(1,3));    //red
console.log(primary.slice(0,3));
console.log(primary.slice(-2)); //blue,yellow
//splice
console.log(primary.splice(2)); //red
console.log(primary.splice(0,2));   //blue,yellow
console.log(primary.splice(0,1,"blue","black"));    //

let cars=["audi","bmw","xuv","maruti"];
console.log(cars);      //audi,bmw,xuv,maruti
cars.splice(3);    
console.log(cars);      //audi,bmw,xuv
cars.splice(0,1);  
console.log(cars);      //bmw,xuv
cars.push("maruti");
cars.push("ferrari");
console.log(cars);      //audi,bmw,maruti,ferrari
cars.splice(1,2);  
console.log(cars);      //bmw,ferrari
//console.log(cars.splice(0,0,"toyota","xuv","maruti"));

cars.splice(1,0,"mercedes");
console.log(cars);
cars.splice(1,1,"gwagon");
console.log(cars);

//SORITNG =SORT AN ARRAY . it can perform basically on string or characcters
let  days=['monday','tueday','wednesday','thursday','friday','saturday','sunday'];
days.sort();
console.log(days);

let squares=[25,16,4,49,36,9];
squares.sort();
console.log(squares);

//splice pratice
let 