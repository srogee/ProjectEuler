const { Utils } = require("../common");

const numbersByMethod = new Map([[ 'triangular', new Set()], [ 'pentagonal', new Set()], [ 'hexagonal', new Set()], ])

function find() {
    for (let i = 144; ; i++) {
        const triangular = Utils.getNthTriangularNumber(i);
        const pentagonal = Utils.getNthPentagonalNumber(i);
        const hexagonal = Utils.getNthHexagonalNumber(i);

        numbersByMethod.get('triangular').add(triangular);
        numbersByMethod.get('pentagonal').add(pentagonal);
        numbersByMethod.get('hexagonal').add(hexagonal);

        if (doAllSetsContainNumber(triangular)) {
            return triangular;
        }

        if (doAllSetsContainNumber(pentagonal)) {
            return pentagonal;
        }

        if (doAllSetsContainNumber(hexagonal)) {
            return hexagonal;
        }
    }
}

function doAllSetsContainNumber(n) {
    return [...numbersByMethod.values()].every(set => set.has(n));
}

console.log(find());