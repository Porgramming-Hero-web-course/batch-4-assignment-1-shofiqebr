

function countWordOccurrences  (sentence : string , word : string) : number {
    const spliteSentence = sentence.toLowerCase().split(' ')
 
 const filteredArray = spliteSentence.filter((item) => item === word.toLowerCase() )
 const numberTimes =  filteredArray.length

 return numberTimes; 
 }
 
 countWordOccurrences("I love typescript", "Typescript")
 
 