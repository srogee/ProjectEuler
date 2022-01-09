const { Utils } = require("../common");

// Array of all multiples of 3 and 5 below 1000, deduplicated
const multiples = Utils.removeDuplicatesFromArray(Utils.getMultiplesOfN(3, 1000).concat(Utils.getMultiplesOfN(5, 1000)));

console.log(Utils.getSumOfArray(multiples));