const { Utils } = require("../common");

// Get all prime factors of the number, then find the largest one
let factors = Utils.calculateFactors(600851475143);
let primeFactors = factors.filter(num => Utils.isPrimeNumber(num));
let max = Utils.getMaxInArray(primeFactors);
console.log(max);