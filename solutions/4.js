const { Utils } = require("../common");

let max = null;

for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
        const product = i * j;
        if (Utils.isPalindrome(product.toString())) {
            if (max === null || product > max) {
                max = product;
            } else if (product < max) {
                // Further products of i * j will always be smaller if this is true because j decreases
                break;
            }
        }
    }
}

console.log(max);