function Node(value){
    this.val = value;
    this.next;
}

var node1 = newNode(3); varList1 = newSLL(); list1.add(1).add(2).add(3)


function SLL{
    this.head = null;
    // adding node to end
    this.add = function(value){
        if(this.head == null){this.head = new Node(value);
        }
        else{
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next=newNode(value);
            return this;
        }
    }
}