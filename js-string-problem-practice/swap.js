let first = 5;
let second = 7;
console.log(first, second);

// Swap: Wrong Approach ------------------
// first = second;
// second = first;

// Swap: Approach-1 --------------------------
const temp = first;
first = second;
second = temp;
// console.log(first, second);


// Swap: Approach-2 --------------------------
[ first, second ] = [ second, first ];
console.log(first, second);