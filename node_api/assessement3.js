//Question 1-5
const express = require('express');
const fs = require('fs').promises;

// Express app setup
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes setup
// ---------------------

// Route for student-related operations
const studentRouter = express.Router();

// API to get student details and save them to a file
studentRouter.get('/getStudentDetails', async (req, res) => {
  const { name, age, address, session } = req.query;
  const studentInfo = { name, age, address, session };

  try {
    // Convert object to JSON string
    const studentInfoJSON = JSON.stringify(studentInfo);

    // Write JSON string to file
    await fs.writeFile('studentInfo.json', studentInfoJSON);

    res.send('Student info saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Mounting student routes
app.use('/student', studentRouter);

// Server setup
// ---------------------

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Additional functionalities
// ---------------------

// Question 6: Example of Map and Set collections
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

const mySet = new Set();
mySet.add(1);
mySet.add(2);

// Question 7: Creating a promise object
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      'Arrow functions',
      'Template literals',
      'Destructuring assignment',
      'Let and const',
      'Spread syntax'
    ]);
  }, 2000);
  setTimeout(() => {
    reject('Promise rejected');
  }, 3000);
});

// Question 8: Function using spread and rest operators
function multiply(...args) {
  return args.reduce((acc, val) => acc * val, 1);
}

// Question 9: Using async/await with the promise
async function getData() {
  try {
    const data = await myPromise;
    console.log('Resolved:', data);
  } catch (error) {
    console.error('Rejected:', error);
  }
}

getData();

// Question 10: Example of a generator function
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
