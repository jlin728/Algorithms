// Create SLQueue method dequeue() to remove and return value at front of queue. Remember SLQueue uses singly linked list, not array.

function SLNode (val){
    this.val = val;
    this.next = null;
}

function SLQueue(){
    var head = null;
    var tail = null;
}

function dequeue(){
    temp = 0;
    this.head = null;
    this.tail = null;
    this.dequeue = function (val){
        if (this.head.next!==null){
            temp = this.head.val;
            this.head = this.head.next;
        }
        else (this.head === null){
            this.tail = this.head;
            return this.head.val
        }
    }
    return temp;
}
