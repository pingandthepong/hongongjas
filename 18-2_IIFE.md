# 즉시 호출 함수 (IIFE)

> - 함수를 만들고 즉시 호출하는 함수 (개인적으로는 '물고기 모양'으로 기억했다.)
> - IIFE (Immediately Invoked Function Expression)

`(function(){})()` `(() => {})()`

```JS
// IIFE 함수는 사실 아래와 동일함
const a = function() {};
a();
```

- 한 사람이 개발하면 함수명/상수명 등을 겹치지 않게 작성할 수 있지만, 대부분 협업을 통해 작업이 진행되고 양도 방대하기에 일일이 수정하기 어려워 충돌이 일어난다.
- 충돌을 피하는 코드를 미리 작성하거나, 개발을 하면서 충돌을 피하는 코드로 작성할 줄 알아야 한다.
- 충돌을 피하는 코드의 형태로 '즉시 호출 함수'가 있다.

```JS
// 당연히 오류가 뜬다.
const a = 10;
const a = 20;

// 상수와 변수가 함수 내부에서만 작동하기에 충돌이 일어나지 않는다.
(function() {
  const a = 10;
  console.log(a);
})();
(function() {
  const a = 20;
  console.log(a);
})();

// 10
// 20
```