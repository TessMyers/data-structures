var makeQueue = function(){
  var queue = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  queue.enqueue = function(value){
    storage[queue.size()] = value;
  };

  queue.dequeue = function(){
    var first = storage[0];
    delete storage[0];

    for (var key in storage) {
      var newKey = key - 1;
      storage[newKey] = storage[key];
    }

    delete storage[queue.size()-1];
    return first;
  };

  queue.size = function(){
    return Object.keys(storage).length;
  };

  return queue;
};
