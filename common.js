const _ = require('lodash');

class Utils {
    static getNumberDigits(number) {
        let array = [...(number.toString())];
        return array.map(digit => parseInt(digit));
    }

    static getNthTriangularNumber(n) {
        return n * (n + 1) / 2;
    }

    static getNthPentagonalNumber(n) {
        return n * (3 * n - 1) / 2;
    }

    static getNthHexagonalNumber(n) {
        return n * (2 * n - 1);
    }

    static areArraysEqualIgnoringOrder(array1, array2) {
        const clone1 = _.clone(array1).sort();
        const clone2 = _.clone(array2).sort();
        return _.isEqual(clone1, clone2);
    }

    /**
     * Returns a copy of the specified array without duplicates
     * @param {any[]} array 
     * @returns {any[]} Copy of the array without duplicates
     */
    static removeDuplicatesFromArray(array) {
        return [...new Set(array)];
    }

    /**
     * Generates an array of all multiples of N that are below the specified limit
     * @param {number} n
     * @param {number} limit 
     * @returns {number[]} Array of all multiples of N that are below limit
     */
    static getMultiplesOfN(n, limit) {
        const multiples = [];
        for (let i = 1; i < limit; i++) {
            const multiple = n * i;
            if (multiple >= limit) {
                break;
            } else {
                multiples.push(multiple);
            }
        }
        return multiples;
    }

    /**
     * For loop with explicit start and end
     * @param {number} start - the first index in the loop, inclusive
     * @param {number} end - the last index in the loop, inclusive
     * @param {(i: number) => void} func - function to run for each iteration of the loop
     */
    static forRange(start, end, func) {
        if (end >= start) {
            for (let i = start; i <= end; i++) {
                func(i);
            }
        } else {
            for (let i = start; i >= end; i--) {
                func(i);
            }
        }
    }

    static makeRange(start, end) {
        let array = [];
        Utils.forRange(start, end, num => array.push(num));
        return array;
    }

    /**
     * Checks if a number is even or not
     * @param {number} number - number to check
     * @returns True if number is even, false otherwise
     */
    static isEven(number) {
        return number % 2 === 0;
    }

    /**
     * Checks if a number is odd or not
     * @param {number} number - number to check
     * @returns True if number is odd, false otherwise
     */
    static isOdd(number) {
        return !Utils.isEven(number);
    }

    static isPalindrome(value) {
        if (typeof value === 'number') {
            value = value.toString();
        }

        if (value.length < 2) {
            return true;
        }
        
        for (let i = 0; i < value.length; i++) {
            if (value[i] !== value[value.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }

    static getSumOfSquares(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i * i;
        }
        return sum;
    }
    
    static getSquareOfSums(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum * sum;
    }

    static isPrimeNumber(n) {
        let factorCount = 0;

        if (n <= 1) {
            // Negative numbers and zero and one are not prime
            return false;
        }

        if (n == 2 || n == 3) {
            return true;
        }

        const nMod6 = n % 6;
        if (nMod6 !== 1 && nMod6 !== 5) {
            // Not a prime number because it doesn't fit 6n + 1 or 6n - 1;
            return false;
        }
   
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                factorCount++;
                if (n / i != i) {
                    factorCount++;
                }
    
                if (factorCount > 2) {
                    return false;
                }
            }
        }
    
        return true;
    }

    static getBinomialCoefficient(n, k) {
        return Utils.getFactorial(n) / (Utils.getFactorial(k) * Utils.getFactorial(n - k));
    }

    static getFactorial(n) {
        let product = 1;
        for (let i = n; i > 1; i--) {
            product *= i;
        }
        return product;
    }

    static getBigFactorial(n) {
        let product = 1n;
        for (let i = n; i > 1; i--) {
            product *= BigInt(i);
        }
        return product;
    }

    static getProperDivisors(n) {
        return this.calculateFactors(n).filter(value => value < n);
    }

    static calculateFactors(n) {
        const factors = [];
   
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                factors.push(i);
                if (n / i != i) {
                    factors.push(n / i);
                }
            }
        }
    
        return factors;
    }

    static getPrimeFactors(n) {
        return Utils.calculateFactors(n).filter(factor => Utils.isPrimeNumber(factor));
    }

    static getSumOfArray(array) {
        let sum = 0;
        for (const element of array) {
            sum += element;
        }
        return sum;
    }

    static getMaxInArray(array) {
        let max = null;
        for (const element of array) {
            if (max === null || element > max) {
                max = element;
            }
        }
        return max;
    }

    static getMinInArray(array) {
        let min = null;
        for (const element of array) {
            if (min === null || element < min) {
                min = element;
            }
        }
        return min;
    }
}

class PrimeNumberGenerator {
    static generate(start, end) {
        return Utils.makeRange(start, end).filter(number => Utils.isPrimeNumber(number));
    }
}

module.exports = { Utils, PrimeNumberGenerator }