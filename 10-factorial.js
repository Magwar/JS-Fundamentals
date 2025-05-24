let fractionalArg = parseInt(process.argv[2]);

const factorial = (n) => {
    if (isNaN(n)){
        return 1;
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
    }
const result = factorial(fractionalArg);
console.log(result);

// The above code takes a command line argument, converts it to a number,
// calculates its factorial (The factorial of a number is the product of all the positive integers less than or equal to that number.),
// and prints the result.
// If the argument is not a number, it prints 1. If the argument is negative, it returns undefined.
// If the argument is 0 or 1, it returns 1. Otherwise, it returns the product of the argument and the factorial of the argument minus 1.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// The factorial of 0 is 1.
// The factorial of a negative number is undefined.
// The factorial of a number is often denoted by n!.