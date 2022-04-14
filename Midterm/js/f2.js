//Given the following Array with employee objects

const employeeList = [

  {

      name: "Amy",

      scores: []

  },

  {

      name: "Beth",

      scores: []

  },

  {

      name: "Chuck",

      scores: []

  },

  {

      name: "Dave",

      scores: []

  },

  {

      name: "Eric",

      scores: []

  },

  {

      name: "Fran",

      scores: []

  },

  {

      name: "Gina",

      scores: []

  },

  {

      name: "Henry",

      scores: []

  }

];

 

//PART I - Populate Array

//Write code to populate the employee's scores.

//Requirements:

//  Employees must take at least 3 tests

//  Employees may take 7 tests

//  

//Task

//For each employee, generate a random number between 3 and 7 (number of tests taken)

//  For each test, assign a random score between 61 and 100

//

//Example:

//  Assume Amy took 4 tests.  The result for Amy may look as follows:

//   {

//     name: "Amy",

//     scores: [75, 98, 82, 93]

//   },

 

// Hint:

//  Loop through the employeeList Array

//    For each employee object, generate a random number between 3 to 7 (number of tests)

//    Iterate through the number of tests, adding a value to the scores array between 61 and 100.

 


 

//You could use the following to test the updated employee list:

//console.log(employeeList);

 

//----------------------------------------------------------------//

//PART II - Summary Data

//Create an array of objects, each object containing the following:

// name

// scores

// numberOf Tests

// avgScore

// minScore

 

//Requirements

//  You must use Array Operations (map, reduce, filter) / Functional Programming Techniques

//  DO NOT write a traditional loop

 

//Sample object for "Amy"

// This is just an example, your values will vary depending on number of tests and test scores

//  As above, Assume Amy took 4 tests

//   {

//     name: "Amy",

//     scores: [75, 98, 82, 93],

//     numberOfTests: 4,

//     avgScore: 87,

//     minScore: 75

//   },

 

// Hint:  Create a new array with the summary data

 

// << YOUR CODE HERE >>

 

 

//You could test your results by displaying your array to the console (as you did in Part I)

 

//----------------------------------------------------------------//

//PART III - Output the results

// Output the summarized data to the console.  You must use the following format:

//Name: Amy

//Scores: 75,98,82,93

//Number of tests: 4

//Average score: 87

//Min score: 75

 

// Hint: Loop through the array created in Part II

//       This is NOT a single console.log(yourArrayName): note the format.

 

// << YOUR CODE HERE >>