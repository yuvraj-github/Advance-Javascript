/**
 * Study about
 * 
 * Reduce: It executes a reducer function on each element of an array and returns a single value.
 *
 */

const companies = [
    { name: "Google", category: "Product based", start: 1981, end: 2004 },
    { name: "Amazon", category: "Product based", start: 1992, end: 2005 },
    { name: "Paytm", category: "Product based", start: 1989, end: 2000 },
    { name: "Coforge", category: "Service based", start: 1982, end: 2006 },
    { name: "Mindtree", category: "Service based", start: 1982, end: 2006 }
];

const ages = [20, 33, 18, 40, 50, 35, 25, 78, 19, 34];

//sum of elements of ages using simple way

/** let total = 0
for(let i=0; i<ages.length; i++) {
    total+=ages[i];
}
console.log(total); **/

const sumAges = ages.reduce((total, age) => {
    return total + age;
}, 0)
console.log(sumAges);


//This is the shortes way.
const sumAges1 = ages.reduce((total, age) => total + age, 0);
console.log(sumAges1);


