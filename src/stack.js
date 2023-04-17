const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = []
  }

  push(element) {
    this.array.push(element)
    console.log('push = ' + this.array)
  }

  pop() {
    return this.array.pop()
    console.log('pop = ' + this.array)
  }

  peek() {
    let arrLength = this.array.length;
    return this.array[arrLength - 1]
    console.log('peek = ' + this.array)
  }
}



module.exports = {
  Stack
};
