// A queue works on FIFO(First in first out) principle

class Queue {
  constructor() {
    this.items = [];
  }

  //enqueue(item) add an element to the queue
  enqueue(item) {
    this.items.push(item);
  }

  //dequeue
  dequeue() {
    if(this.isEmpty()) {
      return 'queue is empty';
    }
    return this.items.shift();
  }
  //front
  front() {
    if(this.isEmpty()) {
      return 'no elements in Queue';
    }
    return this.items[0];
  }
  //isempty
  isEmpty() {
    return (this.items.length === 0);
  }
  //printqueue
  printQueue() {
    let output = [];
    for(let i = 0;i<this.items.length;i++) {
      output.push(this.items[i]);
    }
    return output.join(' ');
  }

}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.printQueue());
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
