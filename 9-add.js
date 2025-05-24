let sum = parseInt(process.argv[2]) + parseInt(process.argv[3]);

isNaN(sum) && console.log("NaN");

!isNaN(sum) && (function() {
    console.log(sum);
}
)();
// The above code takes two command line arguments, adds them together, and prints the result.