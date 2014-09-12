var Queue = function() {
  this.storage = {};
};

// Queue.prototype.methods = {
//   enqueue: function(value) {
//     this.storage[this.size()] = value;
//   },
//   dequeue: function() {
//     var first = this.storage[0];
//     delete this.storage[0];

//     for(var key in this.storage) {
//       var newKey = key - 1;
//       this.storage[newKey] = this.storage[key];
//     }
//     delete this.storage[this.size() - 1];
//     return first;
//   },
//   size: function() {
//     return Object.keys(this.storage).length;
//   }
// }
Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};
Queue.prototype.dequeue = function() {
  var first = this.storage[0];
  delete this.storage[0];

  for(var key in this.storage) {
    var newKey = key - 1;
    this.storage[newKey] = this.storage[key];
  }
  delete this.storage[this.size() - 1];
  return first;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


var newQueue = new Queue();
console.log(newQueue.size());
console.log("butts", newQueue.storage)
