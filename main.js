var TextSplitter = require('./src/textSplitter').TextSplitter;
var OccurencyCounter = require('./src/occurencyCounter').OccurencyCounter;
var Reader = require('./src/reader').Reader;

fs = require('fs');

var reader = new Reader();
var contents = reader.fromFile('book.txt');

var splitter = new TextSplitter(contents);
var words = splitter.toArray();

var counter = new OccurencyCounter();
var occurencies = counter.calculate(words);

for (key in occurencies){
    console.log( "Word `" + key + "` appeared " + occurencies[key] + " time(s)");
}
