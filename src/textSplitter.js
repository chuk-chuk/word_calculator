(function(exports){
  var TextSplitter = function(text) {
    this.text = text;
  }

  TextSplitter.prototype.toArray = function() {
    return this.text.match(/\b(\w+|_)\b/g);
  }

  exports.TextSplitter = TextSplitter;
})(this);
