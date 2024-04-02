//Objects -defined with class object in js are the back bone or basic allocations of js
// var user = new Object({}); //constructor based

//1.  Using two curly brackets
var Employee = 
{
    Name: "Nhan",
    ID : 2123,
    GroupCode: "Permanent",
    GetEmployeeInfo: function()
    {
        return this.Name + " " + this.ID + " " + this.GroupCode; //+ " " + this.salary;
    }
};

//Employee.salary = "$25000"; //adding property to class
//console.log(Employee.GetEmployeeInfo());

//This is not recondmended for inheritance
//2. We can use object constructor to create a copy and provide partial inheritance
// var SoftwareEngg = new Object(Employee);

// SoftwareEngg.salary = "$30000";

// SoftwareEngg.GetEmployeeInfo = function()
// {
//     return this.Name + " " + this.ID + " " + this.GroupCode + " " + this.salary;
// }

// console.log(Employee.GetEmployeeInfo());
// console.log(SoftwareEngg.GetEmployeeInfo());

//3. We should use Object.create to create a copy and provide inheritance

var SoftwareEngg = Object.create(Employee);
SoftwareEngg.salary = "$30000";

SoftwareEngg.GetEmployeeInfo = function()
{
    return this.Name + " " + this.ID + " " + this.GroupCode + " " + this.salary;
}

console.log(Employee.GetEmployeeInfo());
console.log(SoftwareEngg.GetEmployeeInfo());

//this inheritance in javascript is possible only due to prototype
//prototype - is an object in js to create link between child and parent (.__proto__)

console.log(SoftwareEngg.__proto__); //return Employee object 

//4. Empty Object
var emptyObj = {}; // new Object;
console.log(emptyObj.__proto__);

//5. Breaking th eprotoype chain and defining base funcitons - passing null in constructor method
var nullPrototype = Object.create(null);
nullPrototype.toString = function(params)
{
    return "Do something interesting"
};

//6. Object.Assign - mergin two objects

var User = 
{
    name: "Aileen", 
    add1: "Lake City 1",
    mobile: "9898989898989"
}

var address = 
{
    name: "Aileen", 
    add1: "Wall Streets",
    productName: "New product"
}
//var Delivery = {User, Address}
var delivery = Object.assign(User, address);
console.log(delivery);

//create one object with name person, and inherit it to Student and create two new properties and one new method
//pls use both ways of inheritance