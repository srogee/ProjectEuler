const { Utils } = require("../common");

// Get all prime factors of the number, then find the largest one
let primeFactors = Utils.calculateFactors(600851475143).filter(num => Utils.isPrimeNumber(num));
console.log(Utils.getMaxInArray(primeFactors));