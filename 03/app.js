const sumNumbers = function(number) {
    let result = 0;

    for (let i = 1; i <= number; i++) {
        result += i;
    }

    return result;
}

console.log(sumNumbers(4));