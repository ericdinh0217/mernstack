// Behaves as the snapshot or lookahead of the javascript code present, and gives behaviour of partial compilation
// It happens when we try to use a function or variable before its declaration
// 1. Variable Hoisting - variable gets an undefined value
// 2. Functional Hoisting - functions get hoisted with its definition

console.log(myVar);
//console.log(myVar()); //function expressions do not hoist with definition
//console.log(PrintName);
//console.log(PrintName("Whats in the name"));

var myVar = "Assign me a name";

myVar = function PrintName(name)
{
    console.log(name);
}

function PrintName(name)
{
    console.log(name);
}