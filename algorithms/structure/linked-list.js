class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        this.length++;
        let newNode = new Node(value);

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    remove() {
        if (this.tail) {
            this.length--;

            const tailNode = this.tail;

            // search for the node before tail
            let currentNode = this.head;

            // The while loop stops when the node next to tail node is found
            while (currentNode.next !== tailNode) {
                currentNode = currentNode.next;
            }


            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            return tailNode;
        }
        return undefined;
    }

    insertHead(value) {
        this.length++;
        let newNode = new Node(value);

        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }

    removeHead() {
        if (this.head) {
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }
}

const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(true);
linkedList.insert(20);
linkedList.print(); // 7 true 20
