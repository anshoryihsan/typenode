class List<T>{
  private data: T[];
  constructor(...elements: T[]){
    this.data = elements;
  }
  add(elements: T): void{
    this.data.push(elements);
  }
  addMultiple(...elements: T[]): void{
    this.data.push(...elements);
  }
  getAll(): T[]{
    return this.data;
  }
}

let numbers =new List<number>(1,2,3);
numbers.add(4);
numbers.addMultiple(5,6,7);
console.log(numbers.getAll());


let random = new List<number | string>(1,'b','c','d');
random.add("e");
random.add(6);
random.addMultiple(321,"wasd");
console.log(random.getAll());
