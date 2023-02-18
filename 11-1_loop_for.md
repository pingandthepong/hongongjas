# 반복문

> 배열 등과 함께 사용 : `for...of` `for...in` (더 쉬움)  
> 범용적으로 사용 : `for`

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
for (어디부터; 어디까지; 몇_씩_증감시키면서) {

}
```

```JS
// 0, 1, 2, 3, 4
for (let i = 0; i < 5; i++) { console.log(`${i}번째 반복입니다.`) }

// 0, 2, 4, 6, 8
for (let i = 0; i < 10; i += 2) { console.log(`${i}번째 반복입니다.`) }

// 10, 13, 16, 19
for (let i = 10; i < 20; i += 3) { console.log(`${i}번째 반복입니다.`) }

// 20, 19, 18, 17, ...
for (let i = 20; i >= 10; i--) { console.log(`${i}번째 반복입니다.`) }

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
