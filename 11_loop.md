# 반복문

> 배열 등과 함께 사용 : `for...of` `for...in` (더 쉬움)  
> 범용적으로 사용 : `for`  
> 조건이 중요할 땐 `while`

> ⭐️⭐️⭐️⭐️⭐️ `for...in`은 `객체`를 순환함 ⭐️⭐️⭐️⭐️⭐️

```JS
for () { // 반복문의 헤더
  // 반복문의 본문
}
```

---

## for...of

> 배열의 `요소`를 순환

```JS
for (const 요소 of 배열) {
  console.log(요소);
}
```

```JS
const fruits = ['banana', 'apple', 'tangerine']
for (const fruit of fruits) {
  console.log(fruit);
}
// 'banana'
// 'apple'
// 'tangerine'
```

---

## for...in

> 객체 순환  
> 배열에서는 인덱스 순환(?)

```JS
// 혼공자스 설명
for (const 인덱스 in 배열) {
  console.log(인덱스, 배열[인덱스]);
}

// 멘토님 설명
for (const key in 객체) {
  // for...in문은 객체를 순환한다. 객체 안의 key값을 순환할 때 사용한다.
}
```

```JS
const fruits = ['banana', 'apple', 'tangerine'];

for (const fruit in fruits) {
  console.log(fruit, fruits[fruit]);
}
// "0" "banana"
// "1" "apple"
// "2" "tangerine"
```

1. 배열의 요소 개수만큼 반복이 일어난다.
2. 각각의 반복에서 반복 변수에 요소(또는 인덱스)가 하나씩 들어간다.

---

## for

```JS
for (어디부터; 어디까지; 몇_씩_증감시키면서) { }
```

```JS
for (let i = 0; i < 5; i++) { console.log(`${i}번째 반복입니다.`) }
// 0, 1, 2, 3, 4

for (let i = 0; i < 10; i += 2) { console.log(`${i}번째 반복입니다.`) }
// 0, 2, 4, 6, 8

for (let i = 10; i < 20; i += 3) { console.log(`${i}번째 반복입니다.`) }
// 10, 13, 16, 19

for (let i = 20; i >= 10; i--) { console.log(`${i}번째 반복입니다.`) }
// 20, 19, 18, 17, ...

```

```JS
const fruits = ['banana', 'apple', 'tangerine'];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
// 0 "banana"
// 1 "apple"
// 2 "tangerine"
```

---

## while

> while 반복문은 '조건이 중요할 때' 사용(결과가 나올 때까지, 특정 시간이 될 때까지, 파일을 읽으며 특정 단어를 찾을 때까지 등등).

> `break` 와 `continue` 구문 사용 가능

> 사실 자바스크립트는 초보자 단계에서 while 반복문을 사용할 일이 거의 없다.😀

```JS
while (불 표현식) {
  // 본문
}
// 다음 줄
```

1. 불 표현식을 확인한다.
2. true라면, 본문 실행 후 1번으로 돌아간다(무한루프가 돌 수 있기에 조건이 false가 되는 지점이 있어야 함).
3. false라면, 종료.

```JS
// 아래의 두 반복문은 완전히 같다.

for (let i = 0; i < 10; i++) {}

let i = 0;
while (i < 10) { i++; }

// while문은 '조건이 중요할 때' 사용
// for문은 특정 횟수가 중요하거나, 배열을 순환할 때 사용

```

---

### continue

```JS
let i = 0;
while (i < 10) {
  i++;
  console.log(`${i}번째 반복입니다.`);
  continue;
  console.log("현재 반복이 끝났습니다.");
}

// continue를 만나면 다시 반복으로 돌아가기에 마지막 console.log("현재 반복이 끝났습니다.");는 실행되지 않는다.
```
