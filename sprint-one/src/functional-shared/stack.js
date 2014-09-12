var makeStack = function() {
  someInstance = {};
  storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value){
    storage[this.size()] = value;
    this.count++;
  },
  pop: function() {
    var last = storage[this.size() - 1];
    delete storage[this.size() - 1];

    this.count = this.count - 1 < 0 ? 0 : this.count - 1;
    return last;
  },
  size: function() {
    return this.count;
  }
};

// // with original size hack:
// var makeStack = function() {
//   someInstance = {};
//   storage = {};

//   // apparently we also need to declare variables...
//   var a;

//   _.extend(someInstance, stackMethods);

//   return someInstance;
// };

// var stackMethods = {
//   push: function(value){
//     storage[this.size()] = value;
//   },
//   pop: function() {
//     var last = storage[this.size() - 1];
//     delete storage[this.size() - 1];

//     return last;
//   },
//   size: function() {
//     return Object.keys(storage).length
//   }
// };

