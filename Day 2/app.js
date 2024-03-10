
//STRING METHODS=ACTION THAT CAN BE PERFORMED ON OBJECTS
//FORMAT = STRINGNAME.METHOD()

//str.trim=trims whitespace from both ends of strings & return a new one
let password = prompt("set your password");
let newpass=password.trim();
console.log(newpass);

//str.touppercase()="ROHIT"
//str.tolowercase()=" rohit"
let name="ROHIT";
let msg="bule";
console.log(msg.toUpperCase());
console.log(name.toLowerCase());

//indexof()=returns the first index of occurence of some value in string.or gives -1 if not found
let str="Ilovecoding";
console.log(str.indexOf("love"));
console.log(str.indexOf("o"));

//method chaining
let a="    sanjivani  "
let b=a.trim();
console.log("after trim :",b);
b=b.toUpperCase();
console.log("after uppercase : ",b);
let c=a.trim().toUpperCase();   //method chaining
console.log(c);

//SLICE=returns a part of the original string as a new string
let string="hello";
console.log(string.slice(0,3));
console.log(string.slice(0));
console.log(string.slice(-2));  //5-2=3

//REPLACE=Searches a value in the string & returns a new string with the value replaced
console.log(string.replace("hello","i love coding"));
console.log(string.replace("h","I"));

//REPEAT=returns a string with the number of copies of a string.
console.log(string.repeat(5));

//PRACTICE PROBLEM
let mssg="help";
console.log(mssg.trim().toUpperCase());

let namee="Apnacollege";
console.log(namee.slice(4,9));
console.log(namee.indexOf("na"));
console.log(namee.replace("Apna","our"));
console.log(namee.slice(4).replace("l","t").replace("l","t"));
