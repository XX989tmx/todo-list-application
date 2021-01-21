"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.values = [];
    }
    Queue.prototype.enqueue = function (val) {
        this.values.push(val);
        return this;
    };
    Queue.prototype.dequeue = function () {
        return this.values.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
