// print A-Z All Alphabates

// Create a new array with 26 undefined elements
const arr = [... new Array (26)];

//  Initialize a variable to store the ASCII value for 'A'
let start = 65;


// when we dont want to use value add _ in function parameter
// Iterate over each element in the array using forEach
arr.forEach(function(_,i) {
    console.log(String.fromCharCode(start++));
});