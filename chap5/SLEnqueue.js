//Create SLQueue method enqueue(val) to add the given value to end of our queue. Remember SLQueue uses singly linked lists, not an array).

function SLNode (val){
    this.val = val;
    this.next = null;
}

function SLQueue(){
    var head = null;
    var tail = null;
}

this.enqueue = function (val){
    if(head == null){
        head = newSLNode(val);
        tail = head;
    }
    else{
        tail.next = newSLNode(val);
        tail = tail.next;
    }
    return this;
}
