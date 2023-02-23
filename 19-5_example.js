// 이렇게 만들면 오류남. 기본 자료형은 객체가 됐다가 바로 사라짐(?)
// const num = 52000;
// num.원 = function () {
//   return this.valueOf() + "원";
// };
// console.log(num.원());

// 객체로 만들어서 사용하거나
const num2 = new Number(52000);
num2.원 = function () {
  return this.valueOf() + "원";
};
console.log(num2.원());

// prototype을 활용할 수 있음
const num3 = 52000;
Number.prototype.원 = function () {
  return this.valueOf() + "원";
};

console.log(num3.원());
