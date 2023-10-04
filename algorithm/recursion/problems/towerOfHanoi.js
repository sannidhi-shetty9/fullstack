/*
The Tower of Hanoi is a classic mathematical puzzle or problem that involves moving a stack of disks from one peg to another, subject to the following rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the top disk from one of the stacks and placing it on top of another stack or on an empty peg.
3. No disk may be placed on top of a smaller disk.

The puzzle consists of three pegs and a number of disks of different sizes that can be stacked in decreasing order of size on any peg. The challenge is to move the entire stack of disks from the source peg to the destination peg, using the third peg as an auxiliary, following the rules above.

The Tower of Hanoi problem can be solved using recursion. Here's an example implementation in JavaScript:
*/

function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

const numDisks = 4;
// towerOfHanoi(numDisks, 'A', 'B', 'C');

/*
In this example, the `towerOfHanoi` function uses recursion to solve the problem. It moves `n - 1` disks from the source peg to the auxiliary peg, then moves the nth disk from the source peg to the destination peg, and finally moves the `n - 1` disks from the auxiliary peg to the destination peg.

When you run this code with `numDisks` set to 3, you will see the sequence of moves required to solve the Tower of Hanoi puzzle for 3 disks.

Keep in mind that the number of moves required to solve the Tower of Hanoi puzzle for `n` disks is 2^n - 1, which grows exponentially with the number of disks. This problem is often used to illustrate recursion and its power in solving complex problems by breaking them down into simpler sub-problems.
*/

/*
. move above items to aux
  move item to destination
  move items from aux to destination
*/

class Stack {
    constructor(name, ...items) {
        this.name=name;
        this.arr = items;
    }

    push(item) {
        this.arr.push(item)
    }

    pop() {
        return this.arr.pop();
    }

    view() {
        return this.arr[this.arr.length-1];
    }

    size() {
        return this.arr.length;
    }

    print() {
        console.log(`${this.name}: [${this.arr}]`)
    }
}

class TowerOfHanoi extends Stack {
    push(item) {
        if(this.size && this.view()<item) {
            throw "Error: input value is larger than stack elements"
        }
        super.push(item);
    }
}

/*
problem: move items in stack from src to destination

rules: 
1. only one item can be moved at a time
2. stack should always be in descending order (larget at bottom)

soln: 
1. reduce to stack by recursion to 2 elements. (src:[2,1] aux:[] dest:[] -> items in src to be moved to dst)
2. move top most item to aux. (src:[2] aux:[1] dst:[])
3. move the item from src to dst. (src:[] aux:[1] dest:[2])
4. move the item from aux to dst. (src:[] aux:[] dest:[2,1])

steps: 
1. move items above n from source to auxillary stack (by calling the move fn recursively)
2. move item n from source to destination
3. move item from auxillary to destination (by calling the move fn recursively)
*/

let moveTowerItems = (n, src, dst, aux) => {
    console.log(`n: ${n}`)
    if(n === 1) {
        // aux.push(src.pop());
        dst.push(src.pop());
    // console.log(n);
    src.print(); dst.print(); aux.print();
        // dst.push(src.pop())
        return;
    }
    moveTowerItems(n-1, src, aux, dst); // move items above n from source to auxillary stack
    dst.push(src.pop()); // move item n from source to destination
    src.print(); dst.print(); aux.print();
    moveTowerItems(n-1, aux, dst, src); // move item from auxillry to destination

// let aux = new Stack();
    
}


let src = new TowerOfHanoi('src',3, 2, 1);
let dst = new TowerOfHanoi('dst');
let aux = new TowerOfHanoi('aux',);
src.print(); dst.print(); aux.print();
res = moveTowerItems(src.size(), src, dst , aux);
// let aux = new Stack();

/*
input: src=[3,2,1]
output:
src: [3,2,1]
dst: []
aux: []
n: 3
n: 2
n: 1
src: [3,2]
dst: [1]
aux: []
src: [3]
aux: [2]
dst: [1]
n: 1
dst: []
aux: [2,1]
src: [3]
src: []
dst: [3]
aux: [2,1]
n: 2
n: 1
aux: [2]
src: [1]
dst: [3]
aux: []
dst: [3,2]
src: [1]
n: 1
src: []
dst: [3,2,1]
aux: []
*/

