function listNode(value){
    this.val = value;
    this.next = null;
}

function sList(){
    this.head = null;
}

// addFront
// Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
// addFront(Node, Number) => Node

function addFront (Node, Number) {
    var node1 = Number;
    var temp = Node;
    while (node1) {
        this.val = node1;
        this.next = temp;
    }
    return this;
}

// this.addFront = function (val) {
//     var newNode = val;
//     var temp = this.head;
//     this.head = newNode;
//     this.head.next = temp;
//     return this;
// }

// contains
// Given a pointer to a listNode and a value, return whether value is found in any node within the list. 
// contants(Node, Number) => Boolean

function contains (Node, Number) {
    var temp = Node
    while (Node) {
        if (temp.val !== Number){
            temp = temp.next;
        }
        else if (temp.val == Number) {
            return true;
        }
        else
        return false;
    }
}

// this.contains = function(val) {
    
//     var runner = this.head;
//     while (runner.next != null) {
//         if (runner.val !== val){
//             runner = runner.next;
//         }
//         else if (runner == val) {
//             return true;
//         }
//         else
//         return false;
//     }
// }

// removeFront
// Given a pointer to the first node in a list, remove the head node and return the new list. If list is empty, return null.
// removeFront(Node) => Node

function removeFront(Node){
    while (Node) {
        Node.next = Node.next.next;
        return this;
    }
}

// this.removeFront = function (){
//     while (this.next != null) {
//         this.head = this.head.next;
//         return this;
//     }
// }

// front
// Return the value (not the node) at the head of the list. If list is empty, return null.
// front(Node) => Number

function front(Node) {
    while (Node) {
        if (Node.next != null){
            return Node.val;
        }
        else {
            return null;
        }
    }
}

// this.front = function () {
//     while (this.next != null) {
//         if (this.next != null){
//             return this.head.val;
//         }
//         else {
//             return null;
//         }
//     }
// }


// SList: Add Back
// Create a function that creates a ListNode with given value and inserts it at end of a linked list.

this.addBack = function(val) {
    if (this.next != null){     //same as if(node) ---> "if node exists"
        var runner = this.head;     //set runner or temp variable here to maintain pointer.
        while (this.next != null){
            runner = runner.next;
        }
        runner.next.val = val;      // video ex. temp.next = { val: value, next: null}
    }
}

// video ex.
// addBack(obj1, 'd');
// console.log(obj1);

    // function sNode(val) {
    //     this.val = val;
    //     this.next = null;
    // }
    // function sList() {
    //     this.head = null;
    //     // ...other properties...
    // }

    node1 = new sNode(1);
    node2 = new sNode(2);
    node3 = new sNode(3);
    node4 = new sNode(4);
    node5 = new sNode(5);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4; 
    node4.next = node5;   
    
    list = new sList();
    list.head = node1;

    function iterateAndLog(listParam){
        console.log(listParam);
        if(listParam.head){
            current = listParam.head;
            console.log(current);
            while(current.next){
                current = current.next;
            }
            console.log(current);
        }
    }
    iterateAndLog(list);