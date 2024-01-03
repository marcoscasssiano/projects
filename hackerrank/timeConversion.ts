'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    let pmOrAm: string = s.slice(-2)
    let hours: string = s.slice(0, 2)

    if (pmOrAm == "AM" && hours == "12") {
        return (`00${s.slice(2, 8)}`)
    } if (pmOrAm == "AM") {
        return (`${s.slice(0, 8)}`)
    } if (pmOrAm == "PM" && hours == "12") {
        return (`12${s.slice(2, 8)}`)
    } else {
        return (`${parseInt(hours) + 12}${s.slice(2, 8)}`)
    }


}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
