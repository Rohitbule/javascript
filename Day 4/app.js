//LOOPS =  USED TO ITERATE A PIECE OF CODE

//FOR LOOPS 
// for(let i=0; i<=5; i++)
// {
//     console.log(i);
// }

// for(let i=10; i>=1; i--)
// {
//     console.log(i);
// }

// for(let i=1; i<=15; i=i+2)
// {
//     console.log(i);
// }
// console.log("backward");
// for(let i=15; i>=1; i=i-2)
// {
//     console.log(i);
// }

// for(let i=0; i<=10; i=i+2)
// {
//     console.log(i);
// }

//INFINITE LOOP
// for(let i=1; i>=0; i++)
// {
//     console.log(i); 
// }

// let n=prompt("write your number");
// n=parseInt(n);              //iske andr jo bhi dalogo tho woh integer ban jayega
// for(let i=n ; i<=n*10; i=i+n)
// {
//     console.log(i);
// }

// //NESTED LOOP
// for(let i=1; i<=3; i++)
// {
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++)
//     {
//         console.log(j);
//     }
// }

// //WHILE LOOP
// let i=1;
// while(i <= 5)
// {
//     console.log(i);
//     i++;
// }

// //favorite game
// const favmovie = 'avatar';
// let guess = prompt ("guess my favourite movie");
// while( guess != favmovie )
// {
//     if(guess == "quit")
//     {
//         console.log("you are quit");
//         break;
//     }
//     guess = prompt ("wrong guess.please try again");
// }
// if(guess == favmovie)
// {
//     console.log("congrats!!");
// }
// else
// {
//     console.log("quit");
// }

// //BREAK KEYWORD
// let i=1;
// while( i <= 5)
// {
//     if(i == 3)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used break at 3");

//LOOP WITH ARRAYS
let fruits=['mango', 'apple', 'banana', 'litchi', 'orange']
fruits.push("pineapple");                                   //it adding element to last of array
for(let i=0; i<fruits.length; i++)
{
    console.log(i,'=', fruits[i])
}
console.log("reverse arry is printing");
for(let i=fruits.length-1; i>=0; i--)
{
    console.log(i, '=', fruits[i]);
}