/* 
Q1: 
hoisting - process where variable and function declarations are moved to the top of their containing scope during the compilation phase.
Variable: A named storage location in a computer's memory that holds data.
Function: A block of reusable code designed to perform a specific task.
Data Type: Primitive, non-primitive, and objects (6 in total within the three categories)
currying - when a function returns another instead of values and also repeats same thing
overloading - ability to define multiple functions with the same name but different parameters or argument types
*/

/*
Q2
Robert - string
0.0266 - number
false - boolean
{ myname: 'Test Me' } - object
25166665 - number
undefined - undefined
true - boolean
Robert Jr. - string
null - object
{} - object
-32767 - number
*/

// Q3
function showUserInfo (firstName, lastName, age)
{
    console.log(firstName, lastName, age);
}

showUserInfo("Eric", "D.", 25);

// Q4
function doAddition(n1, n2, n3)
{
    return n1 + n2 + n3;
}
console.log(doAddition(2,3,4)); //9 - functions correctly adds all three numbers
console.log(doAddition(2)); //NaN - The function is missing two parameters, so JavaScript assigns undefined to those parameters. Adding undefined to a number results in NaN.
console.log(doAddition(2.3,3)); //NaN - same reason as above, but missing one parameters this time.
console.log(doAddition("first", 2, "three")); //first2three - since when adding a string and a number,
// JavaScript performs type coercion and tries to convert the string representations of numbers to string. 
// In this case, "first" and "three" cannot be converted to numbers, so they are treated as strings and concatenated with the number 2, resulting in the string "first2three".

// Q5
// closure
function outerFunction() 
{
    var outerVariable = "I am outer";

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from the outer function's scope
    }

    return innerFunction;
}

var innerFunc = outerFunction();
innerFunc(); // Output: I am outer

// hoisting
console.log(x); // Output: undefined
var x = 5;

// constructor function
function Person(name, age) 
{
    this.name = name;
    this.age = age;
}

var person1 = new Person("Alice", 30);
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30

//

// Optional Question
var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) 
{
    setTimeout(function() 
    {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}
// Output:
/*
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
*/