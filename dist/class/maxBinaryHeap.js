"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxBinaryHeap = void 0;
var todo_1 = require("./todo");
var MaxBinaryHeap = /** @class */ (function () {
    function MaxBinaryHeap() {
        this.values = [];
    }
    MaxBinaryHeap.prototype.insert = function (val) {
        this.values.push(val);
        this.bubbleUp();
    };
    MaxBinaryHeap.prototype.bubbleUp = function () {
        var idx = this.values.length - 1;
        var element = this.values[idx].priority;
        while (idx > 0) {
            var parentIdx = Math.floor((idx - 1) / 2);
            var parent_1 = this.values[parentIdx].priority;
            if (element <= parent_1)
                break;
            this.values[parentIdx] = this.values[idx];
            this.values[idx] = this.values[parentIdx];
            idx = parentIdx;
        }
    };
    MaxBinaryHeap.prototype.extractMax = function () {
        var max = this.values[0];
        var end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    };
    MaxBinaryHeap.prototype.sinkDown = function () {
        var idx = 0;
        var length = this.values.length;
        var element = this.values[0].priority;
        while (true) {
            var leftChildIdx = 2 * idx + 1;
            var rightChildIdx = 2 * idx + 2;
            var leftChild = void 0, rightChild = void 0;
            var swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx].priority;
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx].priority;
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null)
                break;
            this.values[idx] = this.values[swap];
            this.values[swap] = this.values[idx];
            idx = swap;
        }
    };
    return MaxBinaryHeap;
}());
exports.MaxBinaryHeap = MaxBinaryHeap;
var mb = new MaxBinaryHeap();
console.log(mb);
var arr = [
    new todo_1.Todo("todo1", "note11111111", 1, new Date(), new Date(), null),
    new todo_1.Todo("todo2", "note2", 3, new Date(), new Date(), null),
    new todo_1.Todo("todo3", "note3", 2, new Date(), new Date(), null),
];
for (var i = 0; i < arr.length; i++) {
    var todo = arr[i];
    mb.insert(todo);
}
console.log(mb);
console.log(mb.extractMax());
