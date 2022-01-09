const { Utils } = require('./common');

let numPrimes = 0;
for (let i = 2; ; i++) {
    if (Utils.isPrimeNumber(i)) {
        numPrimes++;
        if (numPrimes === 10001) {
            console.log(i);
        }
    }
}