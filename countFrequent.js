let str="I see, mmm... I see, 2 and 2"

if(str === '') {
    return [];
}
if(typeof str !== 'string') {
    throw new Error('Input must be a string');
}
var words = str.split(' ');
var wordCount = {};
var highestCount = 0;
var highestWords = [];
words.forEach(function(word) {
    var cleanWord = word.replace(/[^a-zA-Z]/g, '');
    console.log(cleanWord)
    if(wordCount[cleanWord]) {
        wordCount[cleanWord]++;
    } else {
        wordCount[cleanWord] = 1;
    }
    if(wordCount[cleanWord] > highestCount) {
        highestCount = wordCount[cleanWord];
    }
}
);
console.log(wordCount)
for(var word in wordCount) {
    if(word){
        if(wordCount[word] === highestCount) {
            highestWords.push(word);
        }
    }
}
console.log(highestWords)
