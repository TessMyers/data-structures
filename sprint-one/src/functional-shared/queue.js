var makeQueue = function(){
  var queue = {};
  storage = {};
  queue.count = 0;

  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {

  enqueue: function(value){
    storage[this.size()] = value;
    this.count++;
  },

  dequeue: function (){
    var first = storage[0];
    delete storage[0];

    for (var key in storage){
      var newKey = key - 1;
      storage[newKey] = storage[key];
    }
    delete storage[this.size() - 1];

    this.count = this.count - 1 < 0 ? 0 : this.count - 1;
    return first;
  },

  size: function(){
    return this.count;
  }
};



