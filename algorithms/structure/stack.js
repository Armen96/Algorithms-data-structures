/**
 * Stack is a linear data structure in which addition or removal of element follows a particular order i.e.
 * LIFO(Last in First Out) AND FILO(First in Last Out).
 */
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if(!this.isEmpty()) {
            this.items.pop();
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length -1];
        }
    }

    printStack() {
        let stackList = '';

        this.items.forEach(item => {
            stackList = stackList + ' ' + item;
        });

        return stackList;
    }
}

const stack = new Stack();

stack.push(5);
stack.push(7);
stack.push(9);

console.log(stack.peek());

stack.push(11);
stack.push(13);

console.log(stack.peek());

stack.pop();
stack.pop();
stack.pop();

console.log(stack.printStack());



