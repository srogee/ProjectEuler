const { Utils } = require("../common");

function raise2ToPower(power) {
    let bigint = 1n;

    for (let i = 1; i <= power; i++) {
        bigint *= 2n;
    }

    return bigint;
}

console.log(Utils.getSumOfArray(Utils.getNumberDigits(raise2ToPower(1000))));