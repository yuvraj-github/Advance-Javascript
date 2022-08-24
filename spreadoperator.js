/**
 * 
 * Spread Operator: It copy all or part of an existing array or object into another array or object.
 * 
 */

const numbers = [1,2,3,4,5];
const [one, two, ...other] = numbers;

console.log(other);