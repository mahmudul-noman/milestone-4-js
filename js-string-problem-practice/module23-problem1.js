var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
// console.log(area);

function triangle_area(side1, side2, side3) {
    var perimeter = (side1 + side2 + side3)/2;
    var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
}
// const useer_Input = (4, 5, 6);
// const calc_triangle = triangle_area(useer_Input);

console.log (4, 5, 6);
