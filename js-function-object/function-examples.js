// function functionname (parameters) {
//     // function body
//     // return
// }

// var returnvalues = functionname(parameters value);


function getAverage (assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 60;
const assignment3Marks = 57;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log ('My Average so far: ', myAverage);