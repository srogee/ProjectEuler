const { Utils } = require("../common");

let componentMin = 100;
let componentMax = 999;
let minPossibleProduct = Math.pow(componentMin, 2);
let maxPossibleProduct = Math.pow(componentMax, 2);

for (let i = maxPossibleProduct; i >= minPossibleProduct; i--) {
    if (Utils.isPalindrome(i) && dividesEvenlyIntoTwoThreeDigitNums(i)) {
        console.log(i);
        break;
    }
}

function dividesEvenlyIntoTwoThreeDigitNums(n) {
    for (let divisor = componentMax; divisor >= componentMin; divisor--) {
        if (dividesEvenly(n, divisor) && isThreeDigitNumber(divisor) && isThreeDigitNumber(n / divisor)) {
            return true;
        }
    }

    return false;
}

function dividesEvenly(a, b) {
    return a % b === 0;
}

function isThreeDigitNumber(n) {
    return n.toString().length === 3;
}