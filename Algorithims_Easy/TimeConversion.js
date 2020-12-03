'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    inputString = inputString
        .trim()
        .split('\n')
        .map((str) => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    let amPm = s.slice(s.length - 2, s.length);
    let returnTime = '';

    console.log(amPm);

    let modifiedTime = s.slice(0, 2);
    console.log(modifiedTime);
    if (amPm === 'PM') {
        if (modifiedTime === '12') {
            return '12' + s.slice(2, s.length - 2);
        }
        modifiedTime = parseInt(modifiedTime) + 12;
        returnTime = modifiedTime + s.slice(2, s.length - 2);
        return returnTime;
    } else if (modifiedTime === '12') {
        return '00' + s.slice(2, s.length - 2);
    }

    return s.slice(0, s.length - 2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
