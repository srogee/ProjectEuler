const { Utils } = require("../common");

let sum = 0;
Utils.forRange(2, 2000000, (number) => {
    if (Utils.isPrimeNumber(number)) {
        sum += number;
    }
});

console.log(sum);