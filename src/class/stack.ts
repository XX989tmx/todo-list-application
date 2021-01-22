
export interface StackInterface {
    values: any[]
}
export class Stack implements StackInterface {
  values: any[];
  constructor() {
    this.values = [];
  }

  push(val) {
    this.values.push(val);
    return this;
  }

  pop() {
    return this.values.pop();
  }
}
