let sum = 0;
for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
        let date = new Date(year, month, 1, 12, 0, 0);
        console.log(date.toDateString());
        if (date.getDay() === 0) {
            sum++;
        }
    }
}

console.log(sum);