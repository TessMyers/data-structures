var makeStack = function() {
  var newStack = Object.create(stackMethods);
  storage = {};
  return newStack;
};


var stackMethods = {
  push: function(value) {
    storage[this.size()] = value;
  },
  pop: function() {
    var last = storage[this.size() - 1];
    delete storage[this.size() - 1];
    return last;
  },
  size: function() {
    return Object.keys(storage).length;
  }
};


