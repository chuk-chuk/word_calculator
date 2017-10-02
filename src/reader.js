(function(exports){
  var Reader = function() {}

  Reader.prototype.fromFile = function(fileName) {
    fs = require('fs');
    var contents = fs.readFileSync(fileName, 'utf8');
    return contents.toLowerCase();
  }

  exports.Reader = Reader;
})(this);
