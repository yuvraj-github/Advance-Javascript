/**
 * 
 * Call: By using this function an object can use a method belonging to another object. 
 * It takes an owner object as an argument. It takes arguments separately.
 * 
 */

 let userDetails = {
    name: 'Yuvraj',
    age: 28,
    designation: "Software Engineer",
    // printDetails: function(){
    //     console.log(this.name);
    // }
 }

 /** This is generic function */
let printDetails = function(country, city){
    console.log(this.name+' '+country+' '+city);
}
 //userDetails.printDetails();

 let userDetails1 = {
    name: 'Ajay',
    age: 28,
    designation: "Software Engineer",    
 }

// userDetails.printDetails.call(userDetails1);
printDetails.call(userDetails1,'India', 'punjab');// in call function we can pass arguments separately.