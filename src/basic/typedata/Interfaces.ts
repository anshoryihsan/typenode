interface Laptop{
  name: string;
  on():void;
  off():void;
}

class Asus implements Laptop{
  name: string;
  isGameing: boolean;
  constructor(name:string,isGameing:boolean){
    this.name=name;
    this.isGameing= isGameing;
  }
  on(): void {
    console.log('nyala');
  }
  off(): void {
    console.log('mati');
  }
}

class Dell implements Laptop{
  name: string;
  keyboardLigth: boolean;
  constructor(name:string, keyboardLight: boolean){
    this.name = name;
    this.keyboardLigth = keyboardLight;
  }
  on(): void {
    console.log('nyala');
  }
  off(): void {
    console.log('mati');
  }
}

let dell = new Dell('vostro',false);
console.log(dell);
