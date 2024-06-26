# 다양한 메서드 맛보기

- 어떤 기능이 있는지 정도만 알고, 그 때 그 때 검색해서 찾는 게 좋다.

---

## Number 객체

> `.toFixed()` : 매개변수에 0을 넣으면 정수만 출력, 1을 넣으면 소수점 첫 번째 자리까지 출력, 2를 넣으면 ... **_문자형으로 출력됨_**

> `Number.isNaN()` : 매개변수에 NaN이 오면 true, 아니면 false 출력

> `Number.isFinite()` : '유한한'

---

## String 객체

> ⭐️`trim()` : 앞 뒤의 쓸데없는 공백 제거(줄바꿈, 띄어쓰기 등)

> ⭐️`split()` : 구분된 데이터를 잘라서 배열로 만듦 (쉼표, 띄어쓰기, | 등)

- 데이터 분석, 알고리즘 대회 등에서 굉장히 많이 사용함

```JS
"2023.02.23.목, 김주현, 김밥집, 3000".split(",");
// (4) ['2023.02.23.목', ' 김주현', ' 김밥집', ' 3000']
```

---

## Math 객체

> 수학과 관련된 속성 제공

> `Math.E` : 자연상수 값 확인

> ⭐️`Math.floor()` : 내림

> `Math.ceil()` : 올림

> `Math.round()` : 반올림

> `Math.max()`, `Math.min()` : 최대값, 최소값  
> (배열의 경우, 전개연산자를 활용해 넣어야 제대로 출력됨)

> `Math.random()` : 0~1 사이의 랜덤한 숫자 출력

- 0~50까지의 랜덤한 정수 뽑기 : `Math.floor(Math.random() * 50);`
