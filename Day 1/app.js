
//PRINTING STATEMENT
    document.write("saniivani college of engineering");
    console.log("Hello sanjivani");

    let ab=10;
    let ba=5;
    document.write("sum is",ab+ba);
    console.log("sum is",ba+ab);

//TEMPLATE LITERALS= USED TO ADD EMDEED EXPRESSION IN A STRING
    let pencilsize=10;
    let erasersize=5;
    //let output="the total price is : "+(pencilsize + erasersize) + "Rupees.";
    let output=`the total price is : ${pencilsize+erasersize} Rupees.`;
    document.write(output);

//OPERATOR
    let a=10;
    let b=5;
    console.log(a+b);       //15
    console.log(a++);       //10
    console.log(++a);       //12
    console.log(b=a);       //12
    console.log(a==b);      //true
    console.log(a>b);       //false
    console.log(a!=b);      //false
    console.log(a==='b');   //false
    console.log(a===b);     //true
    console.log("a"<"b");   //true


//CONDITIONAL STATEMENT

    //IF condition == if condition get true it can check also futher statement
        let color=green;
        if(color=="red")
        {
            console.log("stop! light color is " + color);
        }
        if(color=="yellow")
        {
            console.log("slow down! light color is " + color);
        }
        if(color==="green")
        {
            console.log("go! light color is " + color);
        }


    //ELSE IF statement ==if condition get true it cant check for for further statement
        let marks=45;
        if(marks>=80)
        {
            console.log("A+");
        }
        else if(marks>=60)
        {
            console.log("A");
        }
        else if(marks>=33)
        {
            console.log("B");
        }
        else if(marks<33)
        {
            console.log("F");
        }

    //IF ELSE = statement
        let aa=5;
        let bb=6;
        if(aa<bb)
        {
            console.log("A is greater",aa);
        }
        else
        {
            console.log("B is greater",bb);
        }

    //PRATICE PROBLEM
        let size ="s";
        if(size === "xl")
        {
            console.log("price is 250");
        }
        else if(size === "L")
        {
            console.log("price is 200");
        }
        else if(size === "M")
        {
            console.log("price is 100");
        }
        else
        {
            console.log("price is 50");
        }

    //NESTED if-else == nested is writing if-else inside if-else statements.it can have many levels.
        let mark=33;
        if(mark >= 33)
        {
            console.log("student is pass");
            if( mark > 80)
            {
                console.log("student got grade O+");
            }
            else 
            {
                console.log("student got grade A");
            }
        }
        else
        {
            console.log("Student is fail");
        }


//LOGICAL OPERATOR

    //AND OPEARTOR = * '&&'
        let markss= 75;
        if(markss >= 33 && markss >=80)
        {
            console.log("pass");
            console.log("grade A++");
        }
        else
        {
            console.log("fail");
        }

    //OR OPERATOR = + '||'
        let marksss= 75;
        if(marksss >= 33 || marksss >=80)
        {
            console.log("pass");
            console.log("grade A++");
        }
        else
        {
            console.log("fail");
        }

    // NOT OPERATOR= ! IF VALUE IS TRUE BY USING NOT OPERATOR WE CAN MAKE IT FALSE
        let mmarksss= 75;
        if(mmarksss >= 33 || mmarksss >=80 && !false)
        {
            console.log("pass");
            console.log("grade A++");
        }
        else
        {
            console.log("fail");
        }
         
    //PRATICE PROBLEM
        let letter="apple";
        if(letter[0] === "a" && letter.length>=3)
        {
            console.log("Good String");
        }
        else
        {
            console.log("Not Good String");
        }

//TRUTHY VALUE =EVERYHTING IN JS IS TRUE OR FALSE
    if(true)
    {
        console.log("it has true value");
    }
    else
    {
        console.log("it has false value");
    }

    let z=" "
    if(z)
    {
        console.log("z is empty");
    }
    else
    {
        console.log("z is not empty");
    }

//SWITCH STATEMENT
    //switch statement= used when we have some fixed values that we need to compare to.
    //break statement=it is used to break statement
    let colors="red";
    switch(colors)
    {
        case "red":
            console.log("Stop");
            break;              //it is used to break statement
        case "yellow":
            console.log("slow down");
            break;
        case "green":
            console.log("go");
            break;
        default :
            console.log("light is broken");
    }
    console.log("after switch statement");

    let day=5;
    switch(day)
    {
        case 1 :
                console.log("Monday");
                break;
        case 2 :
                console.log("tuesday");
                break;
        case 3 :
                console.log("wednesday");
                break;
        case 4 :
                console.log("thurday");
                break;
        case 5 :
                console.log("friday");
                break;
        case 6 :
                console.log("saturday");
                break;
        case 7 :
                console.log("sunday");
                break;
        default :
            console.log("Invalid Day");
    }

//AlERT
    //Alert=it used to display alert message on the screen
    alert("this is an alert");

//LOG
    //log
    console.log("this is used to print message");

//ERROR
    //error
    console.error("This is used to print error message");

//WARNING
    //warning
    console.warn("This is used to print warning message");

//PROMPT
    //prompt= display a dialog box that asks user for some input
    let firstname= prompt("enter your name");
    console.log(firstname);

    // let firstname=prompt("enter ur first name");
    // let lastname=prompt("enter ur last name ");
    // let msg="welcome "+firstname+" "+lastname;
    // alert(msg);

