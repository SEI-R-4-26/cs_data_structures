# Linked Lists

![](https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png)

## Overview

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations like they are with arrays. The elements in a linked list are linked using `pointers` as shown in the image above.

In simple words, a linked list consists of `nodes` where each node contains a `data field` and a `reference` (pointer) to the next node in the list.



You can think of nodes as objects containing some sort of data and a reference to the next node in the list:

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```


## Why Use A Linked List?
Why not just use an array?

Arrays can be used to store linear data of similar types, but arrays have the following limitations.

1) The size of the arrays is fixed: So we must know the upper limit on the number of elements in advance.
2) Inserting a new element in an array of elements is expensive because the room has to be created for the new elements and to create room existing elements have to be shifted.

For example, if we maintain a sorted list of IDs in an array called `idArray`:

```js
const idArray = [1000, 1010, 1050, 2000, 2040].
```

And if we want to insert a new ID: `1005`, then to maintain the sorted order, we have to move all the elements after 1000 (excluding 1000).

Deletion is also expensive with arrays until unless some special techniques are used. For example, to delete `1010` in our `idArray`, everything _after_ `1010` has to be moved.

### Advantages Over Arrays
1) Dynamic size
2) Ease of insertion/deletion

### Drawbacks:
1) Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists as efficiently.
2) Extra memory space for a pointer is required with each element of the list.
3) Not cache friendly. Since array elements are contiguous locations, they are much more accesible than in linked lists.

### Code Implementation
A linked list is represented by a pointer (a reference or linke) to the first node of the linked list.

- The first node is called the head. 
- If the linked list is empty, then the value of the head is NULL.

Each node in a list consists of at least two parts:
1) data
2) Pointer (Or Reference) to the next node

Let's take a look at the Linked List we have implemented in `LinkedList.js`


## Resources

