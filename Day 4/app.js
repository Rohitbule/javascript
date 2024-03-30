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
// let fruits=['mango', 'apple', 'banana', 'litchi', 'orange']
// fruits.push("pineapple");                                   //it adding element to last of array
// for(let i=0; i<fruits.length; i++)
// {
//     console.log(i,'=', fruits[i])
// }
// console.log("reverse arry is printing");
// for(let i=fruits.length-1; i>=0; i--)
// {
//     console.log(i, '=', fruits[i]);
// }

//NESTED LOOPS
// let heroes = [ ['ironman', 'spiderman', 'thor'], ['superman', 'wonder woman', 'flash'] ]
// for(let i=0; i<heroes.length; i++)
// {
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++)
//     {
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let student=[ ['aman',95], ['rohit',94.4], ['saiprasad',100]];
// for(let i=0; i<student.length; i++)
// {
//     //console.log(`info of student #${i}' );
//     console.log(`info of student #${i}`);

//     for(let j=0; j<student[i].length; j++)
//     {
//         console.log(student[i][j]);
//     }
// }

//FOR OF LOOP = WHEN WE HAVE AN COMPLEX COLLECTION 
// let fruits=['mango', 'apple', 'banana', 'orange', 'litchi'];
// for(i of fruits)
// {
//     console.log(i);
// }

// for( char of "apnacollege")
// {
//     console.log(char);
// }

//NESTED FOR OF LOOP
// let hero = [ ['ironman', 'spiderman', 'thor'], ['superman', 'wonder woman', 'flash'] ];
// for(list of hero )
// {
//     for(hero of list)
//     {
//         console.log(hero);
//     }
// }

//TO DO APP
//LIST - TO SHOW AL TODOS
//ADD - TO ADD A TODO
//DELETE - TO DELTE A TASK
//QUIT - TO EXIT THE TODO

let todo = [];
let req = prompt("please enter your request");
while(true)
{
    if(req == 'quit')
    {
        console.log("quit app");
        break;
    }

    if(req == 'list')           //USE TO SHOW PRINTED VALUE
    {
        console.log('------------------');
        for(let i=0; i<todo.length; i++ )
        {
            console.log(i, todo[i]);
        }
        console.log('------------------');
    }

    else if(req == "add")
    {
        let task = prompt("please enter the task ypu want to add");
        todo.push(task);
        console.log("task added");
    }

    else if(req == "delete")
    {
        let idx = prompt("please enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }

    else{
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}