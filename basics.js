//Javascript is - Interpreted Languages and Partially compiled as well due to hoisting feature

//Case sensitive

var myName = "Arda";
var MyName = "Gracia";

console.log(myName);
console.log(MyName);

//semi-colon (;) is option, >> expect few edge cases (IIFE function) <<

// we can delcare variables - 
// using string
// using alphanumeric, but shouldn't start with number // var1_name1
// only two special chars can be used - $ and _
// space is not allowed between var name

// commenting code - 
// single line comment - ctrl+/ (can be toggle)

// Test

// Multi line comment
/*
Test
*/

// expressions and operators
// && - and, || - or, !not, =, ==, ===, ?(ternary operator)

var a = 10;
var b = "10";

if(a===b) //data values and its type both are compared
{
    console.log("are actually equal");
}
else if(a==b) //data values are compared
{
    console.log("only values are equal, nots it type");
}

//condition ? (do the job when its true) : (do the job when its false)

a == b ? console.log("only values are equal not its type") : console.log("are actually equal");