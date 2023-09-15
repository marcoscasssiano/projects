'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var inputLines = [];
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function () {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function birthdayCakeCandles(candles) {
    var maxNumber = Math.max.apply(null, candles);
    var contador = 0;
    for (var i = 0; i <= candles.length; i++) {
        (candles[i] = maxNumber) ? contador++ : contador;
    }
    return contador;
}
function main() {
    var ws = (0, fs_1.createWriteStream)(process.env['OUTPUT_PATH']);
    var candlesCount = parseInt(readLine().trim(), 10);
    var candles = readLine().replace(/\s+$/g, '').split(' ').map(function (candlesTemp) { return parseInt(candlesTemp, 10); });
    var result = birthdayCakeCandles(candles);
    ws.write(result + '\n');
    ws.end();
}
var doces = [3, 2, 1, 3];
var teste = birthdayCakeCandles(doces);
console.log(teste);
