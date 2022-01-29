const { Utils } = require("../common");

const cache = new Map();
function getCollatzSequenceLength(start) {
    let sequence = [ start ];
    let n = start;
    while (n > 1) {
        if (cache.has(n)) {
            return sequence.length + cache.get(n);
        }
        if (Utils.isEven(n)) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        sequence.push(n);
    }

    cache.set(n, sequence.length);

    return sequence.length;
}

let max = 0;
let startingMax = 0;
for (let i = 1; i <= 999999; i++) {
    const length = getCollatzSequenceLength(i);
    if (length > max) {
        max = length;
        startingMax = i;
    }
}

console.log(startingMax);