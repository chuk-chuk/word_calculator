var TextSplitter = require('./src/textSplitter').TextSplitter;
var OccurencyCounter = require('./src/occurencyCounter').OccurencyCounter;
var Reader = require('./src/reader').Reader;
var PrimeFinder = require('./src/primeFinder').PrimeFinder;

fs = require('fs');

var reader = new Reader();
var contents = reader.fromFile('book.txt');

var splitter = new TextSplitter(contents);
var words = splitter.toArray();

var counter = new OccurencyCounter();
var occurencies = counter.calculate(words);

var primeFinder = new PrimeFinder();

for (key in occurencies){
    var isPrimeText = primeFinder.isPrime(occurencies[key]) ? "is" : "is not"

    console.log( "Word `" +
       key +
       "` appeared " +
       occurencies[key] +
       " time(s) and it "
       + isPrimeText
       + " a prime number"
     );
}
