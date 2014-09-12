var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null){
      list.tail = makeNode(value);
      list.head = list.tail;
    } else {

      list.tail.next = makeNode(value);
      list.tail = list.tail.next;

      // var reference = list.tail.next;
      // list.tail = makeNode(value);
      // reference = list.tail;
    }
  };


  list.removeHead = function(){
    var oldHead = list.head;
    list.head = list.head.next;


    return oldHead.value;
  };

  list.contains = function(target){

    var currentItem = list.head;
    var retval = false;

    var inspect = function(item){
      if (item && item.value === target) {
        retval = true;
      } else if (item.next === null) {
        return;
      } else {
        inspect(item.next);
      };
    }
    inspect(currentItem);
    return retval;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
