let inputArg = parseInt(process.argv[2]);

isNaN(inputArg) && console.log("Missing number of occurrences");

!isNaN(inputArg) && (function(){
for (let i = 0; i < inputArg; i++) {
    console.log("C is fun");
}
})();