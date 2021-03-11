class Node {
  constructor (data, next = null, prev = null) {
      this.data = data
      this.next = next
      this.prev = prev
  }
}

class QueueLL {
  constructor() {
      this.head = null
      this.tail = null
  }

  enqueue(data) {
      let newNode = new Node (data, null, this.head)

      if (!this.head) {
          this.head = newNode
      } else {
          this.tail.next = newNode
          newNode.prev = this.tail
      }

      this.tail = newNode
  }

  dequeue() {
      let data = this.head.data
      this.head = this.head.next
      return data
  }

  peek() {
      return isEmpty() ? 'empty list!' : this.head.data
  }

  isEmpty() {
      return this.head == null
  }
}

class QueueArr {
  constructor() {
      this.items = []
  }

  enqueue(data) {
      this.items.push(data)
  }

  dequeue() {
      return this.items.shift()
  }

  peek() {
      return isEmpty() ? 'empty list!' : this.items[0]
  }

  isEmpty(){
      return this.items.length === 0
  }
}