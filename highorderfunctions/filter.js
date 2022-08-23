/**
 * Study about
 * 
 * Filter : It is used to create a new array form a given array based on a specified condition.
 *
 */ 

 const companies = [
    {name: "Google", category: "Product based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product based", start: 1992, end: 2005},
    {name: "Paytm", category: "Product based", start: 1989, end: 2000},
    {name: "Coforge", category: "Service based", start: 1982, end: 2006},
    {name: "Mindtree", category: "Service based", start: 1982, end: 2006}
];

const ages = [20, 33, 18, 40, 50, 35, 25, 78, 19, 34];

 //simple way without using any inbuilt function.

// for(let i=0; i<=ages.length; i++) {
//     if(ages[i] >= 20) {
//         console.log(ages[i]);
//     }
// }

const age = ages.filter((age, index) => age>30)
console.log(age);

/** const serviceBasesComp = companies.filter((company, index) => {
    if(company.category==='Service based') {
        return true;
    }
})
console.log(serviceBasesComp); **/

const serviceBasesComp = companies.filter(company => company.category === 'Service based');
console.log(serviceBasesComp); 