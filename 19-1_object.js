const array = [100, 20, "string", true, function () {}, () => {}];
console.log(array[0]); // 100
console.log(array[1]); // 20

array[0] = 200;
console.log(array[0]);

const object = {
  name: "구름",
  age: 7,
};

console.log(object.name); // 구름
console.log(object.age); // 7

object.name = "별";
object.age = 1;
console.log(object.name); // 별
console.log(object.age); // 1

console.log("-------------------------");

const dog = {
  name: "구름",
  age: 7,
  bark: function () {
    console.log(`${this.name}이/가 짖습니다!`);
  },
  sleep: () => {
    console.log(`${this.name}이/가 잡니다!`);
  },
};

dog.bark(); // 구름이/가 짖습니다! (익명함수는 this 바인딩)
dog.sleep(); // undefined이/가 잡니다! (화살표함수는 this 바인딩X)
