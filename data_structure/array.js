// push, pop, shift, unshift,  forEach, map, concat

class MyArray {
    constructor(...args) {
        this.arr = new Array(...args);
    }

    length() {
        return this.arr.length;
    }

    print() {
        console.log(this.arr)
    }

    add(arr=[], index=this.length()) {
        // console.log('add: ', arr, index)
        const newArr = []
        for(let i=0; i<index; i++){
            newArr[newArr.length] = this.arr[i];
        }
        for(let i=0; i<arr.length; i++){
            newArr[newArr.length] = arr[i];
            
        }
        for(let i=index; i<this.arr.length; i++){
            newArr[newArr.length] = this.arr[i];
        }
        this.arr = newArr;
        return this.arr;
    }

    remove(index=this.length()-1, size=1) {
        // console.log('remove: ', index, size)
        const newArr = []
        for(let i=0; i<index; i++){
            newArr[newArr.length] = this.arr[i];
        }
        for(let i=index+size; i<this.arr.length; i++){
            newArr[newArr.length] = this.arr[i];
        }
        this.arr = newArr;
        return this.arr;
    }

    insert(value, index=this.length()) {
        this.add([value], index);
    }

    delete(index=this.length()-1) {
        this.remove(index)
    }

    push(value) {
        this.insert(value)
    }

    pop(value) {
        this.delete(value)
    }

    unshift(value) {
        this.insert(value, 0)
    }

    shift(value) {
        this.delete(0)
    }

    map(callback) {
        let newArr = new MyArray;
        for(let i=0; i<this.arr.length; i++) {
            newArr.push(callback(this.arr[i], i , this.arr))
        }
        return newArr;
    }

    forEach(callback) {
        for(let i=0; i<this.arr.length; i++) {
            callback(this.arr[i], i , this.arr);
        }
    }

    concat(arr) {
        return this.add(arr);
    }
    
}


const myArr = new MyArray('a', 2, 5);
myArr.print();
myArr.pop();
myArr.print();
myArr.push(7);
myArr.print();
myArr.shift();
myArr.print();
myArr.unshift(10);
myArr.print();
myArr.concat([8,7,6])
myArr.print();
console.log('for each-');
myArr.forEach((value, index, arr)=>console.log(`${value} ${index}`))
const newArr = myArr.map((value, index) => value+1);
newArr.print();
