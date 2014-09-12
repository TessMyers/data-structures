var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.size()] = value;
  this.count++;
};

Stack.prototype.pop = function(){
  var last = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];

  this.count = this.count - 1 < 0 ? 0 : this.count - 1;

  return last;
};

Stack.prototype.size = function(){
  return this.count;
};



