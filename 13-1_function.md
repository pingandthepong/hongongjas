# 함수

## 1. 만드는 방법

```JS
const f = function (매개변수) {
  // 본문
  return 리턴값;
}

// 함수 호출 (함수 본문 실행)
f();
```

- 점프 : 함수를 호출했을 때, 함수의 본문으로 이동하는 과정
- 리턴 : 함수가 끝나고 원래 위치(호출부)로 돌아가는 것

- 프로시저 형태의 함수 : 매개변수를 갖지 않는 함수

## 2. 함수를 사용하는 이유

- 코드의 재사용 : 같은 코드를 쉽게 한 번 더 사용하는 것

```JS
// 반복문을 사용해 1부터 100까지의 수를 더했었다.
// 1부터 10까지, 1부터 20까지 등 더하는 함수를 만들면 코드를 줄일 수 있다!

const sum = function () {
  let output = 0;
  for (let i = 0; i <= limit; i++) {
    output += i;
  }
  console.log(output);
}

let limit = 10;
sum(); // 1부터 10까지의 합이 계산됨

limit = 20;
sum(); // 1부터 20까지의 합이 계산됨
```

```JS
// 위와 같이 사용하면 입력하기 귀찮다. 매개변수를 활용하면 괄호 안에 바로 넣을 수 있다! 그리고 리턴값을 사용하면 활용도가 높아지니 사용해보겠다.

const sum = function (limit) {
  let output = 0;
  for (let i = 0; i <= limit; i++) {
    output += i;
  }
  return output;
}

console.log(`합은 ${sum(10)}`);
console.log(`합은 ${sum(20)}`);

```

---

## 익명 함수

> ✅ 현대 자바스크립트는 익명 함수를 훨씬 더 많이 사용함

```JS
const sum = function () {}
```

## 선언적 함수

> 초기에 많이 사용했었음

```JS
function sum () {}
```
