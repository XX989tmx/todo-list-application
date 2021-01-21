"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this.values = [];
    }
    Stack.prototype.push = function (val) {
        this.values.push(val);
        return this;
    };
    Stack.prototype.pop = function () {
        return this.values.pop();
    };
    return Stack;
}());
module.exports.stack = Stack;
