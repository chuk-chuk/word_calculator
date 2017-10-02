(function(exports){
  var Reader = function() {}

  Reader.prototype.fromFile = function(fileName) {
    fs = require('fs');
    return fs.readFileSync(fileName, 'utf8');
  }

  exports.Reader = Reader;
})(this);
