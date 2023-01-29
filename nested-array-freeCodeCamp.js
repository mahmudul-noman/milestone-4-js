const Nested__Array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

// const Sub__Array = Nested__Array[3];
// console.log(Sub__Array);

// const Nested_SubArray = Nested__Array[3][0];
// console.log(Nested_SubArray);

const Nested_SubArray_Element = Nested__Array[3][0][1];
console.log(Nested_SubArray_Element);