class Stack {
    constructor() {
        this.values = [];
    }

    push(val) {
        this.values.push(val)
        return this 
    }

    pop() {
        return this.values.pop()
    }
}

module.exports.stack = Stack 