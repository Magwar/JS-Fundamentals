let square = parseInt(process.argv[2]);

isNaN(square) && console.log("Missing size");

!isNaN(square) && (function() {
    for (let i = 0; i < square; i++) {
        console.log("X".repeat(square));
    }
})();