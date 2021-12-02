import Asus from "./Asus";
import Dell from './Dell';

let asus = new Asus("Zenbook",true,false);
console.log(asus);

let dell = new Dell("latitude", true, true);
dell.a();
console.log(dell);

