var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  var newNode;

  list.addToTail = function(value){
    // create a new node
    newNode = makeNode(value);
    // if it's not the first item assign tail.next to newNode's value
    if(list.tail) {
      list.tail.next = newNode;
    }
    else {
      list.head = newNode;
    }
    // tag newNode as tail
    list.tail = newNode;
  };

  list.removeHead = function(){
    // if there is something next, set head's next as new head
    if(list.head.next) {
      list.head = list.head.next;
    }
    else {
      list.head = null;
    }
  };

  list.contains = function(target, node){
    var keepLooping = true;
    var nodeBeingChecked = list.head;
    // while loop to iterate until the last item is reached
    while(keepLooping)
      // check if first item's value is equal to target, if so, return true.
      if(nodeBeingChecked.value === target) {
        keepLooping = false;
        return true;
      }
      // else, go to the next item, and check again
      else {
        nodeBeingChecked = nodeBeingChecked.next;
        if(nodeBeingChecked === null) {
          keepLooping = false;
          return false;
        }
      }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
