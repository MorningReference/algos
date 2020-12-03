'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    inputString = inputString
        .replace(/\s*$/, '')
        .split('\n')
        .map((str) => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let numOfPos = 0,
        numOfNeg = 0,
        numOfZero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numOfPos++;
        } else if (arr[i] < 0) {
            numOfNeg++;
        } else {
            numOfZero++;
        }
    }
    console.log(numOfPos / arr.length);
    console.log(numOfNeg / arr.length);
    console.log(numOfZero / arr.length);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine()
        .split(' ')
        .map((arrTemp) => parseInt(arrTemp, 10));

    plusMinus(arr);
}
