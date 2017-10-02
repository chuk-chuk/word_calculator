(function(exports){
  var OccurencyCounter = function() {}

  OccurencyCounter.prototype.calculate = function(input) {
    var countedWords = input.reduce(function (prev, next) {
      if (typeof prev[next] == 'undefined') {
        prev[next] = 1;
      } else {
        prev[next] += 1;
      }
      return prev;
    }, {});
    console.log(countedWords);
    return countedWords;
  }

  exports.OccurencyCounter = OccurencyCounter;
})(this);
