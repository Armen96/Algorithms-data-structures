/**
 *  This problem was recently asked by Twitter:
 *
 *  Implement a class for a stack that supports all the regular functions (push, pop) and
 *  an additional function of max() which returns the maximum element in the stack (return None if the stack is empty).
 *  Each method should run in constant time.
 */

class MaxStack {
   constructor(){
       this.stack = [];
       this.global_max = null;
   }

    pop() {
        this.stack.pop();

        this.global_max = Math.max(...this.stack);
    }

    push(number) {
        if( this.global_max !== null ) {
            if( this.global_max <= number ) {
                this.global_max = number;
            }
        } else {
            this.global_max = number;
        }

        this.stack.push(number);
    }

    getMax () {
       return this.global_max;
    }
}

let x = new MaxStack();

x.push(1);
x.push(6);

console.log(x.getMax()); // 6

x.push(9);
console.log(x.getMax()); // 9

x.pop();
x.pop();
console.log(x.getMax()); // 1
