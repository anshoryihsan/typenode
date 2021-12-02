import ILaptop from "./ILaptop";
import * as keyboard from "./Keyboadrd";

abstract class BaseLaptop<T> implements ILaptop<T>{
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(name:string, type:T, withNumeric:boolean, withTouchButton:boolean){
    this.name=name;
    this.type=type;
    this.withNumeric=withNumeric;
    this.withTouchButton=withTouchButton;
  }

  a():void{
    console.log(keyboard.a());
    
  }
  b():void{
    console.log(keyboard.b());
  }
}

export default BaseLaptop;