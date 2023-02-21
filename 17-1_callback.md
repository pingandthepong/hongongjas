# 콜백함수

```JS
const test = function (a) {
  a();
}

const f = function () {
  console.log("hi");
}

test(f); // "hi"
```

> 자바스크립트에서 함수는 '값'이기에, 한 함수가 다른 함수의 매개변수로 들어갈 수 있다.

- test함수는 매개변수로 '함수'를 받는다.
- 매개변수로 받는 함수를 '콜백함수'라고 한다.

- 콜백함수를 써도 안 써도 결과는 같을 수 있지만, 함수를 호출하는 시점이나 동작 순서가 조금씩 달라진다.
- 코드를 작성하는 다양한 함수 표현 방식 중 하나라고 이해하는 것이 좋다.

---

## 콜백함수의 매개변수

```JS
const test = function(a) {
  a(10);
}

const f = function(param) {
  console.log(param);
}

test(f); // 10
```

- test 함수 본문에서 콜백함수의 매개변수를 넣으면, 콜백함수는 그 매개변수를 받는다.

---

### 콜백함수의 매개변수로 '배열' 넣기

```JS
const test = function (array, a) {
  for (const value of array) {
    a(value);
  }
}

const f = function (param) {
  console.log(param);
}

test([1,2,3,4,5], f);
// 1
// 2
// 3
// 4
// 5

```

- test 함수의 매개변수로 배열과 콜백함수를 받아,
- 콜백함수의 매개변수로 배열을 순환해 배열의 요소를 넣어줄 수 있다.

```JS
// 위의 코드를 이렇게 줄일 수도 있다.
test([1,2,3,4,5], function(param) {console.log(param)});
```

---
