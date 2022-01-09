const { Utils } = require("../common");

let numPrimes = 0;
let result = null;
for (let i = 2; ; i++) {
    if (Utils.isPrimeNumber(i)) {
        numPrimes++;
        if (numPrimes === 10001) {
            result = i;
            break;
        }
    }
}

console.log(result);