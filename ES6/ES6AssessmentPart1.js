//1.
//a.
const goodHeroes = heroes.filter(hero => !hero.isEvil);
//b.
const uniqueFamilyNames = [...new Set(heroes.map(hero => hero.family))];
console.log(uniqueFamilyNames);
//c.
heroes.forEach(hero => console.log(`Sir ${hero.name}`));
//d.
const hasGoodMarvelHero = heroes.some(hero => hero.family === 'Marvel' && !hero.isEvil);
console.log(hasGoodMarvelHero ? "Yes" : "No");

//2.
function multiplyNumbers(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

const result = multiplyNumbers(1, 2, 3, 4, 5);
console.log(result);
//
function printStudents(...students) {
    students.forEach(student => console.log(student));
}

printStudents('Alice', 'Bob', 'Charlie', 'David');

//3.
const person = {
    userDetails: {
        first: "FirstName",
        last: "LastName"
    }
};

const { userDetails: { last }, ...updatedPerson } = person;

const updatedPersonWithContact = {
    ...updatedPerson,
    contactNumber: "9119119110"
};

console.log(last);
console.log(updatedPersonWithContact);

//4.
const array = [1, 2, 3];
array.push(4);

console.log(array);

//5.
//for-of
const iterable = [10, 20, 30];

for (const value of iterable) {
    console.log(value);
}

//for-in
const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
    console.log(key);
    console.log(object[key]);
}

//6.
const car = {
    brand: 'Toyota',
    model: 'Camry',
    displayInfo: function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
};

const boundDisplayInfo = car.displayInfo.bind(car);

const arrowDisplayInfo = () => {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

boundDisplayInfo(); 
arrowDisplayInfo.bind(car)(); 

//7.
console.log('Start of script');

function delayedFunction() {
    console.log('Delayed function executed');
}

setTimeout(delayedFunction, 2000);

console.log('End of script');

//8.
function createUser(name = 'Anonymous', age = 0) {
    return {
        name,
        age
    };
}

const user1 = createUser();
const user2 = createUser('Alice', 30);

console.log(user1);
console.log(user2);

//9.
const obj1 = {
    a: 1,
    b: 2
};

const obj2 = {
    b: 3,
    c: 4
};

const mergedObject1 = Object.assign({}, obj1, obj2);
console.log(mergedObject1);

const mergedObject2 = { ...obj1, ...obj2 };
console.log(mergedObject2); 

//10.
//call
const person1 = {
    fullName: function(city, country) {
        return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Doe'
};

const fullNameJohn = person1.fullName.call(john, 'New York', 'USA');
console.log(fullNameJohn); 
//apply
const person2 = {
    fullName: function(city, country) {
        return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country;
    }
};

const jane = {
    firstName: 'Jane',
    lastName: 'Smith'
};
const fullNameJane = person2.fullName.apply(jane, ['Los Angeles', 'USA']);
console.log(fullNameJane); 

