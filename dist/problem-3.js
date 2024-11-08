"use strict";
function countWordOccurrences(sentence, word) {
    const spliteSentence = sentence.toLowerCase().split(' ');
    const filteredArray = spliteSentence.filter((item) => item === word.toLowerCase());
    const numberTimes = filteredArray.length;
    // console.log(numberTimes)
    return numberTimes;
}
countWordOccurrences("I love typescript typescript Typescript", "Typescript");
