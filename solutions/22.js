const fs = require('fs');
const path = require('path');
const { Utils } = require("../common");

let baseCharCode = 'A'.charCodeAt(0);
const names = fs.readFileSync(path.join(__dirname, 'p022_names.txt'), { encoding: 'utf-8' }).split(',').map(name => name.substring(1, name.length - 1));

names.sort();
console.log(Utils.getSumOfArray(names.map((name, index) => getNameScore(name, index))));

function getNameScore(name, index) {
    let score = 0;
    for (let i = 0; i < name.length; i++) {
        score += name.charCodeAt(i) - baseCharCode + 1;
    }
    return score * (index + 1);
}