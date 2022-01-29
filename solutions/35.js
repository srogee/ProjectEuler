const { PrimeNumberGenerator } = require("../common");

let primeNumberSet = new Set(PrimeNumberGenerator.generate(1, 999999));

function isCircularPrimeNumber(number) {
    return generateCircularVariations(number).every(number => primeNumberSet.has(number));
}

function generateCircularVariations(number) {
    const str = number.toString();
    let array = [];

    for (let variation = 0; variation < str.length; variation++) {
        let variationStr = '';

        for (let i = 0; i < str.length; i++) {
            variationStr += str[(i + variation) % str.length];
        }
        
        array.push(parseInt(variationStr));
    }

    return array;
}

circularPrimes = [...primeNumberSet.values()].filter(number => isCircularPrimeNumber(number));
console.log(circularPrimes.length);