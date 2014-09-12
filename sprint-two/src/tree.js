var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);

  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
// use 'this' to refer to elements in the maker function
  if(this.children === undefined){
    var kiddies = [];
    kiddies.push(makeTree(value));
    this.children = kiddies;
  }

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
