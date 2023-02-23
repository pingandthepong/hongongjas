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
