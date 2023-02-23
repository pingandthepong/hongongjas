const a = [];
a.내맘대로속성 = 10;
console.log(a);

const b = function () {};
b.value = 100;
console.log(b);

console.log("--------------------");

const num = new Number(10);
console.log(num); // Number {10}
num.value = 20;
console.log(num); // Number {10, value: 20}

console.log("--------------------");

String.prototype.value = 10;

const str = "문자열";

console.log(str.value); // 10

console.log("--------------------");

String.prototype.contain = function (다른문자열) {
  return this.indexOf(다른문자열) >= 0;
};

const aa = "문자열";

console.log(`aa.contain('문자'): ${aa.contain("문자")}`); // aa.contain('문자'): true

console.log("--------------------");
