function getData(params:any) {
  return params;
}
// console.log(getData("wasd").length);//benar
// console.log(getData(123).length);//salah

//generic type
function myData<T>(values:T) {
  return values;
}
console.log(myData("wasd").length);//benar
console.log(myData(123));//benar length tdk ada

