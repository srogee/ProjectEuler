const { Utils } = require("../common");

let primeFactors = Utils.calculateFactors(600851475143).filter(num => Utils.isPrimeNumber(num));
console.log(Utils.getMaxInArray(primeFactors));