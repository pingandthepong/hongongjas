# 타이머 함수

`setTimeout()` : 특정한 시간 후에 한 번  
`setInterval()` : 특정한 시간마다

```JS
setTimeout(function () {}, 밀리초_단위의_시간);
setInterval(function () {}, 밀리초_단위의_시간);
```

- 자바스크립트에서 콜백함수를 사용하는 또 다른 대표적 함수
- 첫 번째 매개변수에 핸들러로 콜백함수가 들어감.  
  콜백함수는 매개변수의 마지막에 들어가는 것이 일반적이지만, 타이머함수는 과거 관례/규칙이 없을 때 만들어져서 콜백함수가 매개변수의 앞 쪽에 온다.

- 시계 만들 때, 움직임을 구현할 때 등 사용

```JS
setTimeout(function() {
  console.log('setTimeout()함수입니다.')
}, 3000); // 3초 뒤에 한 번 실행됨

setInterval(function() {
  console.log('setInterval()함수입니다.')
}, 2000); // 2초마다 실행됨
```

---

# 타이머 제거 함수

`clearTimeout()`  
`clearInterval()`

- setTimeout과 setInterval 호출 시 리턴되는 함수
- 매개변수로 핸들이라는 숫자를 하나 넣음

```JS
const a = setTimeout(function() {
  console.log("setTimeout 함수입니다.")
}, 1000);

const b = setInterval(function() {
  console.log("setInterval 함수입니다.")
}, 1000);

console.log(a, b);

clearTimeout(a);
clearInterval(b);

// console.log만 찍히고, setTimeout과 setInterval은 실행되지 않는다.
```
