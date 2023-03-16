// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { Console } = require("console")
const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Psedocode 1. Create a function called firstItem with array as a parameter
//           2. Input is a function that takes in an array 
//           3. Use .shift to remove the first element from an array 
//           4. Use .sort to return array in order with math.random to shuffle the order.
//           5. Output returns the removes the first item from the array and shuffles the remaining content.
const firstItem = (array) => {
   array.shift("")
   return array.sort((a, b) => Math.random())}
console.log(firstItem(colors1))
console.log(firstItem(colors2))

describe("firstItem", () => {
  it("removes the first item from the array and shuffles the remaining content", () => {
    expect(firstItem(colors1)).toEqual( expect.arrayContaining(firstItem(colors1)))
    expect(firstItem(colors2)).toEqual( expect.arrayContaining(firstItem(colors2)))
  
  })
})

// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe("myVote", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(myVote(votes1)).toEqual(11)
    expect(myVote(votes2)).toEqual(-31)
  
  })
})

// ReferenceError: myVote is not defined
// Psedocode 1. Create a function called myVote with "votes" as a parameter
//           2. Input is a function that takes in an object that contains up votes and down votes
//           3. Return the objects upVotes subtracted by downVotes 
//           3. Output returns the end tally which is 11 and -31.

const myVote = (votes) => {
  return votes.upVotes - votes.downVotes
}
console.log(myVote(votes1))
console.log(myVote(votes2))
// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
describe("myValue", () => {
  it("returns one array with no duplicate values", () => {
    expect(myValue(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    // expect(myValue(dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  
  })
})
// ReferenceError: myValue is not defined
// Psedocode 1. Create a function called myValue
//           2. Input is a function that takes in two arrays as arguments
//           3. Use concat to merge the two arrays together.
//           4. Use HOF .filter to iterate through the array and return a new array with the the new condition.
//           5. Returns one array with no duplicate values by using indexOf which returns the position of the first occurrence of a value in a string. 
//              Value strictly equal to the index returns the value only once.


let merge = dataArray1.concat(dataArray2)
const myValue = () => {
   return merge.filter((value,index) => {
    return merge.indexOf(value) === index})}


    // STRETCH: Use the spread operator to pass in a dynamic number of arguments. Stuck on this one, will need assistance.


  

    // Tests:       3 passed, 3 total
