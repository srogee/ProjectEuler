const { Utils } = require("../common");

const multiples = [...new Set(getMultiplesOfN(3, 1000).concat(getMultiplesOfN(5, 1000)))];

console.log(Utils.getSumOfArray(multiples));

function getMultiplesOfN(n, limit) {
    const multiples = [];
    for (let i = 1; ; i++) {
        const multiple = n * i;
        if (multiple >= limit) {
            break;
        } else {
            multiples.push(multiple);
        }
    }
    return multiples;
}