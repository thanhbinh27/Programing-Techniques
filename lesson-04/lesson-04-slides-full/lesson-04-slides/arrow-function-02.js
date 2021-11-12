//ES5 
var phraseSplitterEs5 = function phraseSplitter(phrase) {
    return phrase.split(' ');
};
console.log(phraseSplitterEs5("Hello World")); // ["Hello", "World"]

//ES6 
var phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("Hello World")); // ["Hello", "World"]