// Javascript program to find longest common prefix of
// given array of words.

function checkPrefix(arr)
{
    const firstWordSplit = arr[0].split("");
    const lastWordSplit = arr[1].split("");

    let count = 0;
    for (let i = 0; i < firstWordSplit.length; i++) {
        if (firstWordSplit[i] === lastWordSplit[i]) {
            count++;
        }
    }
    return count;
}

const data = ["aa", "bcde", "bcd", "bb", "aabc", "cc", "aacd", "bbde",  "bc"];

//checkPrefix(["aab", "aabc"]);

let tmp = [];
let result = [];
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
        let currentPair = [data[i], data[j]];
        if (!tmp.includes(currentPair[0])) {
            if (currentPair[0] !== currentPair[1]) {
                if (checkPrefix([currentPair[0], currentPair[1]]) > 1) {
                    tmp.push(currentPair[0]);
                    result.push([currentPair, `(${data[i]}, ${data[j]}): ${data[i]} is a prefix for ${data[j]}`]);
                }
            }
        }
    }
}

console.log(result);
