'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString
        .replace(/\s*$/, '')
        .split('\n')
        .map((str) => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let freqDictA = {};
    let freqDictB = {};
    let length = 0;
    let count = 0;
    a.length > b.length ? (length = a.length) : (length = b.length);
    for (let i = 0; i < length; i++) {
        if (a[i] !== undefined) {
            freqDictA.hasOwnProperty(a[i])
                ? freqDictA[a[i]]++
                : (freqDictA[a[i]] = 1);
        }
        if (b[i] !== undefined) {
            freqDictB.hasOwnProperty(b[i])
                ? freqDictB[b[i]]++
                : (freqDictB[b[i]] = 1);
        }
    }

    for (let key in freqDictA) {
        if (freqDictB[key]) {
            if (freqDictA[key] !== freqDictB[key]) {
                count += Math.abs(freqDictA[key] - freqDictB[key]);
            }
        } else {
            count += freqDictA[key];
        }
    }
    for (let key in freqDictB) {
        if (!freqDictA[key]) {
            count += freqDictB[key];
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
