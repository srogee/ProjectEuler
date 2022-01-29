function getWordsForNumber(n) {
    const hundredsPlace = Math.floor(n / 100);
    const mod100 = n % 100;
    const tensPlace = Math.floor(n / 10);
    const onesPlace = n % 10;

     if (n >= 1 && n <= 19) {
        switch (n) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
        }
    } else if (n >= 20 && n <= 99) {
        switch (tensPlace) {
            case 2: return 'twenty' + getWordsForNumber(onesPlace);
            case 3: return 'thirty' + getWordsForNumber(onesPlace);
            case 4: return 'forty' + getWordsForNumber(onesPlace);
            case 5: return 'fifty' + getWordsForNumber(onesPlace);
            case 6: return 'sixty' + getWordsForNumber(onesPlace);
            case 7: return 'seventy' + getWordsForNumber(onesPlace);
            case 8: return 'eighty' + getWordsForNumber(onesPlace);
            case 9: return 'ninety' + getWordsForNumber(onesPlace);
        }
    } else if (n >= 100 && n <= 999) {
        if (mod100 === 0) {
            return getWordsForNumber(hundredsPlace) + 'hundred';
        } else {
            return getWordsForNumber(hundredsPlace * 100) + 'and' + getWordsForNumber(mod100);
        }
    } else if (n === 1000) {
        return 'onethousand';
    } else {
        return '';
    }
}

let sum = 0;
for (let i = 1; i <= 1000; i++) {
    sum += getWordsForNumber(i).length;
}
console.log(sum);