export class Name {
    first: string;
    second: string;
  
    constructor(first: string, second: string) {
      this.first = first;
      this.second = second;
    }
  
    get message(): string {
      return `Hello ${this.first} ${this.second}`;
    }
}