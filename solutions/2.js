const { Utils } = require("../common");

// Start the Fibonacci sequence and add 2 to the sum since it's an even term
let lastTwoTerms = [1, 2];
let sum = 2;

for (;;) {
    // Calculate next term in sequence and modify lastTwoTerms
    let nextTerm = Utils.getSumOfArray(lastTwoTerms);
    lastTwoTerms = [lastTwoTerms[1], nextTerm];

    if (nextTerm > 4000000) {
        break;
    }

    if (Utils.isEven(nextTerm)) {
        sum += nextTerm;
    }
}

console.log(sum);