//Destructuring - a way to read values from array or object without initializing literals

//1. Array Destructuring

//a. reading values without multiple variables and indexing

// let [one, two, three, four, no_val=0] = [11,22,33,44];

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(no_val);

//b. we can rest for array

//a. reading values without multiple variables and indexing

let [one, two, ...rest_Array] =[11,22,33,44,55,66,77];

console.log(one);
console.log(two);
console.log(rest_Array);

//cc. swapping of variables

let x = 9, y=10;

[x,y] = [y,x]; //swapping
console.log(x);
console.log(y);

//2. Object Destructuring

//a. Single level destructuring
let User = 
{
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%"
};

// let Session = User.Session;

// let {Name = "David N", Session, TotalMarks} = User;

// console.log(Name);
// console.log(Session);
// console.log(TotalMarks);

//b. Nested destructruring

let Student =
{
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject :
    {
        Physics : 80,
        Chemistry :89,
        Language: 92
    }
};

let { Name = "Joe S", Session, Standard, Subject : {Physics, Mathematics = 100, Language}} = Student

console.log(Name)
console.log(Session)
console.log(Standard)
//console.log(Subject)
console.log(Mathematics)
console.log(Physics)
console.log(Language)