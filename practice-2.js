//:::::::: PRACTICE PROBLEM 1 :::::::::::::::
// var fruits = ['Apple', 'Banana', 'Orange'];
// // var Check__Index = fruits.indexOf('Banana'); 
// // console.log(Check__Index);
// fruits[1] = 'Mango';
// // console.log(fruits);
// var Remove__Fruits = fruits.pop();
// // console.log(fruits);
// var Added_Fruits = fruits.push('Watermelon');
// console.log(fruits);


//:::::::: PRACTICE PROBLEM 2 :::::::::::::::
var Grade_A = 80;
var Grade_B = 60;
var Grade_C = 50;
var Grade_D = 40;
var Grade_F = 39;

// ressult sheet
var Get__Result = 35;

if (Grade_A <= Get__Result) {
    console.log('You Earned A Grade.');
}
else if (Grade_B <= Get__Result) {
    console.log('You Earned B Grade.');
}
else if (Grade_C <= Get__Result) {
    console.log('You Earned C Grade.')
}
else if (Grade_D <= Get__Result) {
    console.log('You Earned D Grade.')
}
else{
    console.log('Your Grade is F.')
}


//:::::::: PRACTICE PROBLEM 3-1 :::::::::::::::
// var number_1 = 13;
// var number_2 = 79;
// var number_3 = 45;

// if ((number_1 >= number_2) && (number_1 >= number_3)) {
//     // console.log('The Largest Number is: 13');
//     Large__Number = number_1;
// }
// else if ((number_2 >= number_1) && (number_2 >= number_3)) {
//     // console.log('The Largest Number is: 79');
//     Large__Number = number_2
// }
// else {
//     // console.log('The Largest Number is: 45');
//     Large__Number = number_3;
// }
// console.log('The Largest Number is:' + Large__Number);


//:::::::: PRACTICE PROBLEM 3-2 :::::::::::::::
// var Triangle_A = 9;
// var Triangle_B = 8;
// var Triangle_C = 9;

// if ((Triangle_A === Triangle_B) || (Triangle_A === Triangle_C) || (Triangle_B === Triangle_C) || (Triangle_B === Triangle_A)) {
//     console.log('This Triangle is Isosceles (means: two sides are equal)');
// }
// else {
//     console.log('This Triangle is not Isosceles');
// }