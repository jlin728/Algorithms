function listNode(value){
    this.val = value;
    this.next = null;
}

// addFront
// Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
// addFront(Node, Number) => Node

this.addFront = function (val) {
    var newNode = val;
    var temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    return this;
}

// contains
// Given a pointer to a listNode and a value, return whether value is found in any node within the list. 
// contants(Node, Number) => Boolean

this.contains = function(val) {
    
    var runner = this.head;
    while (runner.next != null) {
        if (runner.val !== val){
            runner = runner.next;
        }
        else if (runner == val) {
            return true;
        }
        else
        return false;
    }
}

// removeFront
// Given a pointer to the first node in a list, remove the head node and return the new list. If list is empty, return null.
// removeFront(Node) => Node

this.removeFront = function (){
    while (this.next != null) {
        this.head = this.head.next;
        return this;
    }
}

// front
// Return the value (not the node) at the head of the list. If list is empty, return null.
// front(Node) => Number

this.front = function () {
    while (this.next != null) {
        if (this.next != null){
            return this.head.val;
        }
        else {
            return null;
        }
    }
}