// Last in first out

// functions for stack are push,pop and peek, length/size

class Stack {
  constructor() {
    this.items = []
  }

  push(ele) {
    this.items.push(ele);
  }

  pop() {
    if(this.items.length === 0) {
      return;
    }
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return (this.items.length === 0);
  }

  printStack() {
    for(let ele of this.items) {
      console.log(ele);
    }
  }

}

let stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
console.log(stack.isEmpty());
stack.push(2);
stack.push(3);
stack.push(4);
stack.printStack();
