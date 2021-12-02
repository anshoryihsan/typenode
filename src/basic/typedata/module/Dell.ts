import Laptop from "./BaseLaptop";

class Dell<T> extends Laptop<T>{
  constructor(type: T, numeric: boolean, touchButton: boolean){
    super("Dell", type, numeric, touchButton);
  }
}
export default Dell;