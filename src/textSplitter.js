(function(exports){
  var TextSplitter = function(text) {
    this.text = text;
  }

  TextSplitter.prototype.toArray = function() {
    if(this.text === '') {
      return [];
    }
    return this.text.match(/\b(\w+|_)\b/g);
  }

  exports.TextSplitter = TextSplitter;
})(this);
