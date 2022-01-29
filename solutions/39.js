function isTriangle(a, b, c) {
    return (a * a + b * b) === c * c;
}

let max = 0;
let maxP = 0;
for (let p = 121; p <= 1000; p++) {
    let solutions = 0;

    for (let a = 1; a <= p - 2; a++) {
        for (let b = 1; b <= p - a; b++) {
            const c = p - (a + b);
            if (isTriangle(a, b, c)) {
                solutions++;
            }
        }
    }

    if (solutions > max) {
        max = solutions;
        maxP = p;
    }
}

console.log(maxP);