function calculateMoney(ticketSells) {
    if (ticketSale <= 0) {
        return "Invalid Number";
    }
    let dailyIncomes = ticketSale * 120;
    let consumption = 500 + (8 * 50);
    let residualMoney = dailyIncomes - consumption;
    return residualMoney;
}
// ----------------------------
function checkName(stringName) {

    if (typeof stringName !== 'string') {
        return "invalid";
    }
    stringName = stringName.toLowerCase();
    const fixedValueLastDigit = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const finalName = stringName.charAt(stringName.length - 1);
    if (fixedValueLastDigit.includes(finalName)) {
        return "Good Name";
    }
    return "Bad Name";
}
// ------------------------------------

function deleteInvalids(arrayName) {

    if (!Array.isArray(arrayName)) {
        return "impractical number";
    }

    return arrayName.filter(element => typeof element === 'number' && !isNaN(element));

}

// ----------------------

// problem-4--------

function password(nameOfObject) {

    if (!nameOfObject.hasOwnProperty('name') || !nameOfObject.hasOwnProperty('birthYear') || !nameOfObject.hasOwnProperty('siteName') || nameOfObject.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const bringOfFirstName = nameOfObject.siteName.charAt(0).toUpperCase();

    const finalcountOfName = `${nameOfObject.siteName}#${nameOfObject.name}@${nameOfObject.birthYear}`;

    return finalcountOfName;
}

// console.log(password({ name: "RajuHR", birthYear: 1999, siteName: "Facebook" }));
// console.log(password({ name: "raju", birthYear: 2002, siteName: "Facebook" }));
// console.log(password({ name: "raju", birthYear: 200, siteName: "Facebook" }));
// console.log(password({ name: "raju", birthYear: 2002 }));

// ----------------------------5 task-----

function monthlySavings(payments, livingCost) {

    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    const totalEarnings = payments.reduce((acc, curr) => acc + curr, 0);
    const tax = totalEarnings >= 3000 ? totalEarnings * 0.2 : 0;
    const savings = totalEarnings - tax - livingCost;
    if (savings <= 0) {
        return "earn more";
    }
    return savings;
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2000], 5500)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400]));










