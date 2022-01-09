const { Utils } = require("../common");

let lastTwoTerms = [1, 2];
let sum = 2;

for (;;) {
    let nextTerm = Utils.getSumOfArray(lastTwoTerms);
    lastTwoTerms = [lastTwoTerms[1], nextTerm];

    if (nextTerm > 4000000) {
        break;
    }

    if (nextTerm % 2 === 0) {
        sum += nextTerm;
    }
}

console.log(sum);