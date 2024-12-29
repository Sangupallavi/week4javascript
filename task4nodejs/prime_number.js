const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter a number: ", (input) => {
    const numb = parseFloat(input);

    if (isNaN(numb)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if (numb <= 1) {
        console.log(`${numb} is neither a prime number nor a composite number.`);
    } else if (numb % 1 !== 0) {
        console.log(`${numb} is not a prime number because it is not an integer.`);
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(numb); i++) {
            if (numb % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${numb} is a prime number.`);
        } else {
            console.log(`${numb} is not a prime number.`);
        }
    }

    rl.close();
});
