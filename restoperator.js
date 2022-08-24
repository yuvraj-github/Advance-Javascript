/**
 * 
 * Rest operator: It represents indefinite number of arguments as an array.
 * 
 */

function addNumbers(a,b,c,...other) {
    console.log(other);
    return a+b+c;
}
const rest = addNumbers(2,3,4,1,2,5);
console.log(rest);