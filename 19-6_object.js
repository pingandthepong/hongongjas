// 객체 기본값 지정

// 왜 사용해야 할까?

const test = function (name, age, color) {
  return `${name} : ${age} : ${color}`;
};

console.log(test("구름", 7, "갈색")); // 구름 : 7 : 갈색

// 코드를 입력할 때는 보조기능으로 인해 입력해야 하는 매개변수가 무엇인지 알 수 있지만,
// 보조기능 없이 눈으로 보기만 한다면 매개변수에 입력하는 각각의 값이 무엇을 나타내는지 알기 힘듦.

// 코드를 입력하는 것보다 읽는 시간이 더 많은 개발자들이기에, 매개변수로 '객체'를 전달해 명확히 코드를 작성하는 것을 선호하게 되었음. "읽기 좋은 코드"

const test2 = function (object) {
  return `${object.name} : ${object.age} : ${object.color}`;
};

console.log(
  test2({
    name: "주현",
    age: 30,
    color: "여름쿨톤",
  })
);

console.log("-------------------------");
console.log("객체 기본값 지정");
console.log("-------------------------");

const test3 = {
  name: "주현",
  age: 30,
  color: "여름쿨톤",
};

console.log(test3.name);
console.log(test3.age);
console.log(test3.color);
console.log(test3.status); // undefined

// 과거(1)
test3.status = test3.status !== undefined ? test3.status : "이상 없음";
console.log("과거(1) : " + test3.status); // 이상 없음

// 과거(2) : 빈문자열 or 0과 같이 false로 변환되는 값이 오지 않는다면
test3.status = test3.status ? test3.status : "이상 없음";
console.log("과거(2) : " + test3.status); // 이상 없음

// 과거(3) (조건부 연산자 + 짧은 조건문 은 이 때만 사용. 외우기)
test3.status = test3.status || "이상 없음";
console.log("과거(3) : " + test3.status);

console.log("------------------------------------");
console.log("현대적인 방법 두 가지");
console.log("------------------------------------");

// 현대(1) : 전개연산자로 객체 기본 매개변수 지정하기 (status가 먼저 와야 다음에 혹시 test3에 status가 있으면 덮어쓰고, 없으면 "이상 없음"이 뜨기 때문에 순서 중요(기본값처럼 작동))
const newTest3 = { status: "이상 없음", ...test3 };
console.log(newTest3);

// 현대(2) : 기본 객체 매개변수 함수 - 함수 정의를 바꾸는 방법(매개변수에 특수한 문법 넣기)
const test4 = function ({ name, age, color, status = "이상 없음" }) {
  return `${name} : ${age} : ${color} : ${status}`;
};

console.log(
  test4({
    name: "구름",
    age: 7,
    color: "갈색",
  })
);

console.log("------------------------------------");
console.log("객체 속성 일괄 추출하기");
console.log("------------------------------------");

// 현대(1)을 기준으로
// obj. 이걸 붙여서  추출하는 게 번거롭기 때문에

// const dog = function (obj) {
//   obj = { status: "이상 없음", ...obj };

//   return `${obj.name} : ${obj.age} : ${obj.color}`;
// };

// console.log(
//   dog({
//     name: "멍멍",
//     age: 1,
//     color: "white",
//   })
// );

// const 뒤에 객체 형태의 무언가를 넣으면... 오른쪽 객체에서 변수처럼 추출 가능(?)
// obj. 없어도 잘 추출됨
const dog = function (obj) {
  const { name, age, color, status } = { status: "이상 없음", ...obj };

  return `${name} : ${age} : ${color} : ${status}`;
};

console.log(
  dog({
    name: "멍멍2",
    age: 2,
    color: "brown",
  })
);
