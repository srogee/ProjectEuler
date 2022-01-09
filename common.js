class Utils {
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

    static isPalindrome(str) {
        return str.split('').reverse().join('') === str;
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

module.exports = { Utils }