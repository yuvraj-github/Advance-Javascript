/**
 * 
 * Closure: A function having access to the parent scope.
 * 
 */

 const sum = function(a) {
    console.log('The value of a: '+a);
    let c = 4
    return function(b){
        return a+b+c;  // Lexical scope
    }
 }

 const store = sum(3);
 console.log(store(2));