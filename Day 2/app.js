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
let a="  hello  "
let b=msg.trim();
console.log("after trim : ",b);
b=b.toUpperCase();
console.log("after uppercase : ",b);