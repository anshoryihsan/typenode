abstract class Vehicel{
  abstract wheels: number;
  start():void{
    console.log('brummm~!');
  }
}
class Car extends Vehicel  {
  wheels: number = 4;
}
class Motorcycle extends Vehicel{
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
;
car.start();

let motor = new Motorcycle();
console.log(motor.wheels);
;
motor.start();