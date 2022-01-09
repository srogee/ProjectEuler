for (let i = 20; ; i++) {
    if (meetsConditions(i)) {
        console.log(i);
        break;
    }
}

function meetsConditions(number) {
    for (let i = 1; i <= 20; i++) {
        if (number % i !== 0) {
            return false;
        }
    }

    return true;
}