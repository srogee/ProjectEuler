const { Utils } = require("../common");

function getSumOfProperDivisors(n) {
    return Utils.getSumOfArray(Utils.getProperDivisors(n));
}

const cache = new Set();

function isNumberAmicable(n) {
    if (cache.has(n)) {
        return true;
    }

    let a = n;
    let b = getSumOfProperDivisors(a);
    if (a !== b && getSumOfProperDivisors(b) === a) {
        cache.add(a);
        cache.add(b);
        return true;
    }

    return false;
}

console.log(Utils.getSumOfArray(Utils.makeRange(1, 9999).filter(number => isNumberAmicable(number))));