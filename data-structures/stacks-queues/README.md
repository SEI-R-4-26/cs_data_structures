## Stacks and Queues

![](https://imgs.developpaper.com/imgs/3169162767-5c88cc850daa1_articlex.jpg)

Stacks and queues are defined by their behavior — in other words, how items are added to and removed from them:


| Stacks |  Queues |
| --- | --- | 
|Operate on “last-in, first-out” (aka, LIFO) behavior. The last, most recently added item, is the first to be removed.	|Operate on “first-in, first-out” (aka, FIFO) behavior. Items are removed in the order they were added, from first to last.|
| Insertion and deletion in stacks takes place only from one end of the list called the top. | Insertion and deletion in queues takes place from the opposite ends of the list. The insertion takes place at the rear of the list and the deletion takes place from the front of the list. |
| Insert operation is called push operation. | Insert operation is called enqueue operation. |
| Delete operation is called pop operation. | Delete operation is called dequeue operation. |
| In stacks we maintain only one pointer to access the list, called the top, which always points to the last element present in the list. | In queues we maintain two pointers to access the list. The front pointer always points to the first element inserted in the list and is still present, and the rear pointer always points to the last inserted element. |
| Stacks are used in solving problems involving recursion. | Queues are used in solving problems involved with sequential processing. |


Let's break down a few of the ways that Stacks and Queues are implemented and discuss when might be the best situations for using them.

## Stacks
A stack is a collection that is based on the last-in-first-out (LIFO) policy. By tradition, we name the stack insert method `push()` and the stack remove operation `pop()`. We also include a method to test whether the stack is empty.

### Array implementations of stacks
Representing stacks with arrays is a natural idea. In particular, we maintain an instance variable n that stores the number of items in the stack and an array items[] that stores the n items, with the most recently inserted item in items[n-1] and the least recently inserted item in items[0]. This policy allows us to add and remove items at the end without moving any of the other items in the stack.



### Linked list implementation
A singly linked list comprises a sequence of nodes, with each node containing a reference (or link) to its successor. By convention, the link in the last node is null, to indicate that it terminates the list. With object-oriented programming, implementing linked lists is not difficult. 

Representing stacks with linked lists is a natural idea. In particular, we maintain an instance variable first that stores a reference to the most recently inserted item. This policy allows us to add and remove items at the beginning of the linked list without accessing the links of any other items in the linked list.

## Queues
A queue supports the insert and remove operations using a first-in first-out (FIFO) discipline. By convention, we name the queue insert operation `enqueue` and the remove operation `dequeue`.