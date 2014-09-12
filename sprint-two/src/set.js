var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
//if set storage is undefined, create an object;
if(this._storage === undefined) {
  this._storage = {};
}
this._storage[item] = item;
};

setPrototype.contains = function(item){
  var retVal = false;
  for(var key in this._storage) {
    if (this._storage[key] === item) {
      retVal = true;
    }
  }
  return retVal;
};

setPrototype.remove = function(item){
  for(var key in this._storage) {
    if(this._storage[key] === item) {
      delete this._storage[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
