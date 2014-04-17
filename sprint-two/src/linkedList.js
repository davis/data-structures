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
    node = node || list.head;
    if(node) { // if node is not null
      // check if first item's value is equal to target, if so, return true.
      if(node.value === target) {
        return true;
      }
      else {
        if(node.next) {
          return list.contains(target, node.next);
        }
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
