/**
 * A Queue works on the FIFO(First in First Out) principle.
 * Hence, it performs two basic operations that is addition of elements at the end of the queue
 * and removal of elements from the front of the queue.
 *
 * Like Stack, Queue is also a linear data structure.
 */

class Queue
{
    constructor()
    {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if(!this.isEmpty()) {
            this.items.shift();
        }
    }

    front() {
        if(!this.isEmpty()) {
            return this.items[0];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        let queueList = '';

        this.items.forEach(item => {
            queueList = queueList + ' ' + item;
        });

        return queueList;
    }
}


const data = new Queue();

data.enqueue(5);
data.enqueue(7);
data.enqueue(9);
data.enqueue(11);
data.enqueue(13);
data.enqueue(15);

data.dequeue();

console.log(data.front());
console.log(data.printQueue());
