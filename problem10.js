const { Utils } = require('./common');

let sum = 0;
for (let i = 2; i < 2000000; i++) {
    if (Utils.isPrimeNumber(i)) {
        sum += i;
    }
}

console.log(sum);