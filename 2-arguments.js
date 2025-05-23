let argCount = process.argv.length - 2;
// Subtracting 2 for 'node' and script name

if (argCount === 0) {
    console.log('No argument');
} else if (argCount === 1) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}