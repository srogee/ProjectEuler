function meetsConditions(a, b, c) {
    return (a * a + b * b === c * c) && (a + b + c === 1000);
}

let max = 1000;

function find() {
    for (let a = 1; a < max; a++) {
        for (let b = 1; b < max; b++) {
            let c = Math.sqrt(a * a + b * b);
            if (a + b + c === 1000) {
                console.log(a * b * c);
                return;
            }
        }
    }
}

find();