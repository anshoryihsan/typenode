//tipe data pada balikan function

function getName():string {
  return "helo ihsan";
}
function getAge():number {
  return 123;
}

////
function tambah(val:number, val2:number):number {
  return val+val2;
}
// const result = tambah(2,3);
// console.log(result);

//function sebagai type data
type _Tambah =(val1:number,val2:number)=>number;
const Add: _Tambah = (val1: number, val2: number): number=>{
  return val1+val2;
};
// console.log(Add(5,1));

//default parameter
const fullName = (first: string, last:string = "ihsan"):string=>{
  return first+" "+last;
};
// console.log(fullName("ihsan", "anshory"));

//optional parameter
const getUmur = (val1:string, val2?:string):string=>{
return val1+" "+val2;
};
console.log(getUmur("a"));
