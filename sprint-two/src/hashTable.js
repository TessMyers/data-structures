var HashTable = function(){
  this._limit = 8;
  this._boxStorage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pair = [];
  pair.push(k,v); // [k,v]
  if(this._boxStorage.get(i) === undefined) {
    var secondarr = [];
    secondarr.push(pair)
    this._boxStorage.set(i, secondarr);
  } else {
    this._boxStorage.get(i).push(pair);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var arrOfPairs = this._boxStorage.get(i);
  for (var j = 0; j < arrOfPairs.length; j++ ){
    if (arrOfPairs[j][0] === k ){
      return arrOfPairs[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var arrOfPairs = this._boxStorage.get(i);
  for (var j = 0; j < arrOfPairs.length; j++ ){
    if (arrOfPairs[j][0] === k ){
      console.log("before", arrOfPairs);
      arrOfPairs[j][1] = null;
      console.log("after", arrOfPairs);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
