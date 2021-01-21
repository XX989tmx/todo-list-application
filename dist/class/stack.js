"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
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
exports.Stack = Stack;
