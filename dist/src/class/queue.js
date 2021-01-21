"use strict";
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
module.exports.queue = Queue;
