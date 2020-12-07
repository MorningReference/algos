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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribeCounter = 0;
    let highestNum = q.length;
    let loopNum = 0;
    let tempArr = [];
    let idxOfHighestNum = q.indexOf(highestNum);
    while (highestNum > 0) {
        idxOfHighestNum = q.indexOf(highestNum);
        loopNum = highestNum - (idxOfHighestNum + 1);
        if (loopNum > 2) {
            console.log('Too chaotic');
            return false;
        } else if (loopNum > 0) {
            tempArr = q.slice(idxOfHighestNum + 1, q.length);
            q = q.slice(0, idxOfHighestNum);
            q = q.concat(tempArr);
            q.push(highestNum);
            bribeCounter += loopNum;
        }
        highestNum--;
    }
    console.log(bribeCounter);
}

function minimumBribes(q) {
    let bribeCounter = 0;
    let highestNum = q.length;
    let loopNum = 0;
    let tempArr = [];
    let idxOfHighestNum = q.indexOf(highestNum);
    while (highestNum > 0) {
        idxOfHighestNum = q.indexOf(highestNum);
        loopNum = highestNum - (idxOfHighestNum + 1);
        if (loopNum > 2) {
            console.log('Too chaotic');

            return false;
        } else if (loopNum > 0) {
            tempArr = q.slice(idxOfHighestNum + 1, q.length);
            q = q.slice(0, idxOfHighestNum);
            q = q.concat(tempArr);
            q.push(highestNum);
            // console.log('went in else if', 'loopnum: ', loopNum, 'highest num: ', highestNum)
            // for(let i = 0; i < loopNum; i++) {
            //     idxOfHighestNum = q.indexOf(highestNum);
            //     temp = q[idxOfHighestNum];
            //     q[idxOfHighestNum] = q[idxOfHighestNum+1];
            //     q[idxOfHighestNum+1] = temp;
            //     // console.log('loop');
            // }
            // console.log('array', q);
            bribeCounter += loopNum;
        }
        highestNum--;
    }
    // for(let i = 0; i < q.length; i++) {
    //     bribeAmount = q[i] - (i+1);
    //     if(bribeAmount > 2) {
    //         console.log('Too chaotic');
    //         isChaotic = true;
    //         break;
    //     }
    //     else if(bribeAmount > 0) {
    //         // console.log('add to counter');
    //         bribeCounter += bribeAmount;
    //     }
    // }
    console.log(bribeCounter);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine()
            .split(' ')
            .map((qTemp) => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
