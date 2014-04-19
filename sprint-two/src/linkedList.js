var makeLinkedList = function(type){


  var list = {};
  list.type = type || 1;
  list.head = null;
  list.tail = null;
    //do an extend to doubly linked list methods
  _.extend(list, extraMethods);

  var newNode;

  list.addToTail = function(value){
    // create a new node
    newNode = makeNode(value);
    // if it's not the first item assign tail.next to newNode's value
    if(list.tail) {
      list.tail.next = newNode;
      if(this.type === 2) {
        newNode.previous = list.tail;
      }
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

var makeNode = function(value, type){
  type = type || 1;

  var node = {};
  node.value = value;
  node.next = null;

  if(type === 2) {
    _.extend(node, doublyLinkedNode);
  }

  return node;
};

// make doubly linked list methods and properties in an object
var doublyLinkedNode = {};

doublyLinkedNode.previous = null;

var extraMethods = {};

extraMethods.removeTail = function(node) {
  var end;
  // if type is singly linked list
  if (this.type === 1) {
    node = node || this.head;
  // iterate through singly linked list to find second to last node
    if (node.next && node.next.next) {
      end = this.removeTail(node.next);
    }
    else if(node.next && !node.next.next) {
      this.tail = node;
      end = node.next;
      node.next = null;
    }
    else if (!node.next) {        // 1-item linked list
      end = node;
      this.head = null;
      this.tail = null;
      return end;
    } else {                      // 0-item linked list
      end = null;
    }
    return end;                   // TODO: make it return value, not node
  } else if(this.type === 2) {

  }
};

extraMethods.addToHead = function() {};









