// last node which is tail will have .next as null because it is a tail
class Node {
  constructor(data, next = null) {
    this.data = data,
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first Node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last Node
  insertLast(data) {
    let node = new Node(data);
    let current;

    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // insert at index
  insertAt(data,index) {
    // index out of range
    if(index > 0 && index > this.size) {
      return;
    }
    if(index === 0) {
      this.insertFirst(data);
      return;
    }
    // initializing the new node with the data
    const node = new Node(data);
    let current, previous;
    // set the current to first
    current = this.head;
    let count = 0;
    while(count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;

  }
  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while(current) {
      if(count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) {
      return ;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // remove first
    if(index === 0) {
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;

  }


  // clear LinkedList
  clear() {
    this.head = null;
    this.size = 0;
  }

  // print LinkedList data
  printList() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //reverse linkedlist
  reverse() {
    let current = this.head;
    let previous, temp;
    while(current) {
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }

    return previous;
  }
  
}

let list = new LinkedList();
list.insertLast(100);
list.insertLast(200);
list.insertLast(300);
list.insertLast(300);
list.insertLast(300);
list.insertAt(500,3);
list.removeAt(3);
list.printList();
