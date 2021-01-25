import { Todo } from "./todo";
import { ITodoSchema } from "./../model/todoSchema";

export class MaxBinaryHeap {
  values: Todo[] | ITodoSchema[] | any[];
  constructor() {
    this.values = [];
  }

  insert(val: Todo | ITodoSchema) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx: number = this.values.length - 1;
    const element = this.values[idx].priority;
    while (idx > 0) {
      let parentIdx: number = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx].priority;
      if (element <= parent) break;
      this.values[parentIdx] = this.values[idx];
      this.values[idx] = this.values[parentIdx];
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0].priority;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap: number | null = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx].priority;
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx].priority;
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = this.values[idx];
      idx = swap;
    }
  }
}

const mb = new MaxBinaryHeap();
console.log(mb);

let arr = [
  new Todo("todo1", "note11111111", 1, new Date(), new Date(), null),
  new Todo("todo2", "note2", 3, new Date(), new Date(), null),
  new Todo("todo3", "note3", 2, new Date(), new Date(), null),];
for (let i = 0; i < arr.length; i++) {
  const todo = arr[i];
  mb.insert(todo);
}
console.log(mb);
console.log(mb.extractMax());