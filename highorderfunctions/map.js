/**
 * Study about
 * 
 * map
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

/**companies.map((company, index) => {
    console.log(company.name)
}) **/

// Map function with string literals or template literals

const companyDetail = companies.map((company, index) => {
    return `${company.name} ${company.category}`
}) 

console.log(companyDetail);