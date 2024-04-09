//Six data types are present in Javascript
// Primitive Types (assigned as value)
// String, Number, Boolean, 

// Non-Primitive Types (assigned as reference)
// Object

//console.log(data_name1); // data_name1 is not defined : error
console.log(data_name); //undefined - hoisting - (default value to variable in js)

//var - is a keyword used in core-js to declare variables, function etc

var data_name = "Learning MERNSTack"; //declare and assign value to the variable

console.log(data_name);
console.log("Data Types ", typeof data_name); //data type of data 

var data_name="Learning Vanilla Javascript"; //re-declare and re-assign value to the variable

console.log(data_name);
console.log("Data Types ", typeof data_name);

data_name = "Learning Ecma Script basics";

console.log(data_name);
console.log("Data Types ", typeof data_name);

var data_name =2024; //dynamically changes the type depending the value assigned
data_name =20.24; //float

console.log(data_name);
console.log("Data Types ", typeof data_name); //data type of data  - number

var data_name = undefined;

console.log(data_name);
console.log("Data Types ", typeof data_name);

data_name = null; //data value

console.log(data_name);
console.log("Data Types ", typeof data_name);

data_name = {}; //creating a object, json object, object literal

data_name = {
    FirstName :"Hemant",
    Address: "Somewhere on earth"
};

console.log(data_name);
console.log("Data Types ", typeof data_name);

data_name =null;

console.log(data_name);
console.log("Data Types ", typeof data_name);

data_name = {
    FirstName: "Mark",
    Address: "Somewhere in London"
};

console.log(data_name);
console.log("Data Types ", typeof data_name);

//ES-6: Symbol -(ES6 : class based implementation of JS)
//used to create customized variable of our choice
var symbol_1 = Symbol("New Value of choice");

console.log(symbol_1);
console.log("Data Types ", typeof symbol_1);