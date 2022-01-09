const { Utils } = require("../common");

let lastTriangleNumber = 28;
let maxDivisorCount = 0;

for (let i = 8; ; i++) {
    lastTriangleNumber = lastTriangleNumber + i;
    const divisorCount = Utils.calculateFactors(lastTriangleNumber).length;
    if (divisorCount > maxDivisorCount) {
        maxDivisorCount = divisorCount;
    }
    if (divisorCount > 500) {
        console.log(`Answer is ${lastTriangleNumber}`);
        break;
    }
}