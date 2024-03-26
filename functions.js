// In Java
// class - template/abstraction - ex: Area
// functions/methods circle, rentangle, square, etc.

// functions in javascript are first class member citizens and hold almost all power present in runtime

// keyword is function, name of function, then params
// return is mandatory in js functions, by default js will return default value - undefined
// Pure Functions - which must have something returned

session = "MERNStack Session";
// 1. Named function
function UserName(params)
{
    //definition and the scope of the function
    console.log(params);
    console.log(this.session);
    //console.log(this);
}

UserName("Ramant"); // it executes in global scope - use "this" keyword (global object, execution context)

// 2. Function Expression - when we assgin function definition to a var its termed as Function Expression

// console.log(validUser(5,9)); //validUser is not a valid function

var validUser = function (a, b)
{
    return a +b;
}

console.log(validUser(5,9)); //validUser is a valid function and therefore is executed

// 3. IIFE - Immediately Invoked Function Expressions - helps us to execute a function for one time only
(function IIFE_Name(params, lastName)
{
    console.log(params);
    console.log(lastName);
})("David", "Miller");

// as soon as function excute at line 33 it can't be accessed any further
// IIFE_Name("Steve", "Smith");
function Area(length, width, radius)
{
    this.length = length;
    this.width = width;
    this.radius = radius;

    this.rectangle = function()
    {
        return this.length * this.width; 
    }

    this.square = function()
    {
        return this.length * this.length;
    }

    this.circle = function()
    {
        return 3.14159265 * this.radius * this.radius;
    }
}

var areaObj = new Area (2,5,10);

console.log(areaObj.rectangle()); //executes in the context of Area (constructor function object / class)
console.log(areaObj.square());
console.log(areaObj.circle());

// this - a reserved keyword