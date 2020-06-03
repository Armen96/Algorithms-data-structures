const assert = require('assert');
// Implement classes Node and Linked List

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    unshift(data) {
        const newHead = new Node(data, this.head);
        this.length++;
        this.head = newHead;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        while (this.head !== null) {
            if(this.head.next === null) return this.head;

            this.head = this.head.next;
        }
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    shift() {
        let removedNode = this.head;
        if (removedNode) {
            this.head = this.head.next;
            this.length--;
        }
        return removedNode;
    }

    pop() {
        if(!this.head) return;

        if(this.length === 1) return this.shift();

        let last = this.getLast();
        let newHead = this.head;

        while (newHead.next !== last) {
            newHead = newHead.next;
        }


        newHead.next = null;
        this.length--;
        return last;
    }

    push(data) {
        let last = this.getLast();

        if(last) {
            last.next = new Node(data,null);
        } else{
            this.head = new Node(data,null);
        }

        this.length++;
    }

    get(index) {

        if( index >= this.length || index < 0 ) {
            return null;
        }

        let current = this.head;
        let counter = 0;

        while( counter < index ) {
            current = current.next;
        }

        return current;
    }

}


describe("A Node", () => {
    it("has properties 'data' and 'next'", () => {
        const node = new Node(1, 2);
        assert.equal(node.data, 1);
        assert.equal(node.next, 2);
    });
});

describe("unshift(data)", () => {
    it("adds new node to start of list by correctly setting head and updating length.", () => {
        const l = new LinkedList();
        l.unshift("Kevin");
        assert.equal(l.head.data, "Kevin");
        assert.equal(l.length, 1);
    });

    it("Does not overwrite old head.", () => {
        const l = new LinkedList();
        l.unshift("Kevin");
        assert.equal(l.head.data, "Kevin");
        assert.equal(l.length, 1);

        l.unshift("eric");
        assert.equal(l.head.data, "eric");
        assert.equal(l.head.next.data, "Kevin");
        assert.equal(l.length, 2);
    });
});

describe("getFirst()", () => {
    it("returns the first node in linked list.", () => {
        const l = new LinkedList();
        assert.equal(l.getFirst(), null);
        l.unshift(1);
        assert.equal(l.getFirst().data, 1);
        l.unshift(2);
        assert.equal(l.getFirst().data, 2);
    });
});

describe("getLast()", () => {
    it("returns the last node in linked list.", () => {
        const l = new LinkedList();
        l.unshift(1);
        assert.equal(l.getLast().data, 1);
        l.unshift(2);
        assert.equal(l.getLast().data, 1);
    });
    it("does not crash AND returns null on empty list.", () => {
        const l = new LinkedList();
        assert.equal(l.getLast(), null);
    });
});

describe("clear()", () => {
    it("clears out the linked list and resets length to 0.", () => {
        const l = new LinkedList();
        assert.equal(l.length, 0);
        l.unshift(1);
        l.unshift(1);
        l.unshift(1);
        assert.equal(l.length, 3);
        l.clear();
        assert.equal(l.length, 0);
        assert.equal(l.head, null);
    });
});

describe("shift()", () => {
    it("removes AND returns first node, updates length for linked list w/ one node.", () => {
        const l = new LinkedList();
        l.unshift(1);
        assert.equal(l.shift().data, 1);
        assert.equal(l.length, 0);
        assert.equal(l.getFirst(), null);
    });
    it("removes the first node and returns it, decreases length of list.", () => {
        const l = new LinkedList();
        l.unshift(3);
        l.unshift(2);
        l.unshift(1);
        assert.equal(l.shift().data, 1);
        assert.equal(l.length, 2);
        assert.equal(l.getFirst().data, 2);
        assert.equal(l.shift().data, 2);
        assert.equal(l.length, 1);
        assert.equal(l.getFirst().data, 3);
    });
    it("does not crash AND returns null on empty list. Does not decrease length.", () => {
        const l = new LinkedList();
        assert.equal(l.shift(), null);
        assert.equal(l.length, 0);
    });
});

describe("pop()", () => {
    it("removes AND returns last node, decreases length on linked-list w/ one node.", () => {
        const l = new LinkedList();
        l.unshift(1);
        assert.equal(l.pop().data, 1);
        assert.equal(l.head, null);
        assert.equal(l.length, 0);
    });
    it("Returns null on empty list AND does not decrease length.", () => {
        const l = new LinkedList();
        assert.equal(l.pop(), null);
        assert.equal(l.length, 0);
    });
});

describe("push(data)", () => {
    it("adds to the end of the list and increases length.", () => {
        const l = new LinkedList();
        l.unshift(1);
        l.push(2);
        assert.equal(l.length, 2);
        assert.equal(l.getLast().data, 2);
    });
    it("adds to end of empty list and increases length without crashing.", () => {
        const l = new LinkedList();
        l.push(1);
        assert.equal(l.length, 1);
        assert.equal(l.getLast().data, 1);
        assert.equal(l.getFirst().data, 1);
    });
});

describe("get(index)", () => {
    it("returns null on negative or out of bounds index.", () => {
        const l = new LinkedList();
        l.push("Kevin");
        assert.equal(l.get(-1), null);
        assert.equal(l.get(100), null);
    });
    it("returns the node at given index.", () => {
        const l = new LinkedList();
        l.push("Kevin");
        l.push("is");
        l.push("kewl");

        assert.equal(l.get(0).data, "Kevin");
        assert.equal(l.get(1).data, "is");
        assert.equal(l.get(2).data, "kewl");
    });
});

describe.skip("set(index, data)", () => {
    it("returns falsy value on out of bounds or negative index.", () => {
        const l = new LinkedList();
        l.push(2);
        assert.isNotOk(l.set(-1, "meow"));
        assert.isNotOk(l.set(100, "meow"));
    });
    it("Updates node and returns true.", () => {
        const l = new LinkedList();
        l.push(2);
        l.push(4);
        assert.equal(l.set(1, "meow"), true);
        assert.equal(l.getLast().data, "meow");
    });
});

describe.skip("remove(index)", () => {
    it("returns falsy value on out of bounds OR negative index.", () => {
        const l = new LinkedList();
        l.push(2);
        assert.isNotOk(l.remove(-1));
        assert.isNotOk(l.remove(100));
    });
    it("removes and returns node at given index. Decreases length.", () => {
        const l = new LinkedList();
        l.push(1);
        l.push(2);
        l.push(3);
        l.push(4);

        assert.equal(l.get(3).data, 4);
        assert.equal(l.remove(3).data, 4);
        assert.isNotOk(l.get(3));
        assert.equal(l.length, 3);
    });
    it("removes node at index 0, decreases length, and returns removed node.", () => {
        const l = new LinkedList();
        l.push(1);
        l.push(2);
        l.push(3);
        l.push(4);

        assert.equal(l.get(0).data, 1);
        assert.equal(l.remove(0).data, 1);
        assert.equal(l.get(0).data, 2);
        assert.equal(l.length, 3);
    });
});

describe.skip("insert(index, data)", () => {
    it("returns false on index greater than length or negative index.", () => {
        const l = new LinkedList();
        assert.equal(l.insert(1, "meow"), false);
        assert.equal(l.insert(-10, "meow"), false);
        assert.equal(l.length, 0);
    });
    it("inserts new node at given index, increases length, and returns true.", () => {
        const l = new LinkedList();
        l.push(1);
        l.push(2);
        l.push(3);
        l.push(4);
        assert.equal(l.insert(2, "kevin"), true);
        assert.equal(l.get(0).data, 1);
        assert.equal(l.get(1).data, 2);
        assert.equal(l.get(2).data, "kevin");
        assert.equal(l.get(3).data, 3);
        assert.equal(l.get(4).data, 4);
        assert.equal(l.length, 5);
    });
    it("inserts node at 0 index correctly, increases length, returns true.", () => {
        const l = new LinkedList();
        l.push(1);
        l.push(2);
        l.push(3);
        assert.equal(l.insert(0, "kevin"), true);
        assert.equal(l.get(0).data, "kevin");
        assert.equal(l.get(1).data, 1);
        assert.equal(l.get(2).data, 2);
        assert.equal(l.get(3).data, 3);
        assert.equal(l.length, 4);
    });
});

describe.skip("reverse()", () => {
    it("reverses the data in the list and keeps the same nodes.", () => {
        const l = new LinkedList();

        l.push("A");
        l.push("B");
        l.push("C");
        const node = l.get(1);
        l.reverse();

        assert.equal(l.get(0).data, "C");
        assert.equal(l.get(1).data, "B");
        assert.equal(l.get(2).data, "A");
        assert.equal(l.get(1), node);
    });
    it("does not crash on list with 0 or 1 nodes.", () => {
        const l = new LinkedList();

        l.reverse();
        l.push("A");
        l.reverse();

        assert.equal(l.get(0).data, "A");
    });
});

describe.skip("forEach(fn)", () => {
    it("calls function on each Node by passing in each Node as first argument", () => {
        const l = new LinkedList();

        l.push(10);
        l.push(20);
        l.push(30);

        l.forEach(node => {
            node.data += 1;
        });

        assert.equal(l.get(0).data, 11);
        assert.equal(l.get(1).data, 21);
        assert.equal(l.get(2).data, 31);
    });
    it("also passes in index of each Node as second argument to function", () => {
        const l = new LinkedList();

        l.push(10);
        l.push(20);
        l.push(30);

        l.forEach((node, index) => {
            if (index % 2 === 0) {
                node.data += 1;
            }
        });

        assert.equal(l.get(0).data, 11);
        assert.equal(l.get(1).data, 20);
        assert.equal(l.get(2).data, 31);
    });
});
