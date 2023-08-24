'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    let negativo : number = 0
    let positivo : number = 0
    let zero : number = 0
    let totalNumeros : number = arr.length

    for(let i = 0; i <= totalNumeros; i++ ) {
        if(Math.sign(arr[i]) == 1){
            positivo++
        } 
        if (Math.sign(arr[i]) == -1){
            negativo++
        } 
        if(Math.sign(arr[i]) == 0){
            zero++
        }
    }

    console.log((positivo / totalNumeros).toFixed(6))
    console.log((negativo / totalNumeros).toFixed(6))
    console.log((zero / totalNumeros).toFixed(6))
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
