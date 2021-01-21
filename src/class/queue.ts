export class Queue {
    values : any[]
    constructor() {
        this.values = []
    }

    enqueue(val) {
        this.values.push(val);
        return this 
    }

    dequeue() {
        return this.values.shift();
    }
}
