"use strict";
function sumArray(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
}
const sum = sumArray([1, 2, 3, 4, 5]);
console.log(sum);
