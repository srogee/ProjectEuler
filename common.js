class Utils {
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
}

module.exports = { Utils }