/**
 * 
 * Bind: It is same as call function but the difference is that it creates a copy of the call function and 
 * after that we can invoke it. It takes an owner object as an argument. It takes arguments separately.
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

const newPrintFunc= printDetails.bind(userDetails1,'India', 'punjab');// in call function we can pass arguments separately.
newPrintFunc();