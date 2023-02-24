# 문서 객체 모델 DOM

> DOM (Document Object Model)

---

## 문서 객체 조작

### 방법1) `<body>` 마지막 단에서 `document.body.innerHTML = "";`

- 태그 조작을 하기 위해서는, 그 태그가 생성된 이후에 script태그를 놓아서 사용해야 함.
- 그래서 `<body>`태그 가장 밑 단에서 조작.

### 방법2) 최대한 `<head>`태그 안에 넣으라

- HTML문서를 보면 `<script>`태그는 최대한 `<head>`태그 안에 넣으라는 말이 있음.
- 그래서 `<head>`태그 안에서 조작할 수 있게, "문서 객체가 모두 만들어진 다음에 실행해 달라"는 코드인  
  `document.addEventListener("DOMContentLoaded", () => {})` 내부에서 문서 객체 조작.

#### `document.addEventListener("DOMContentLoaded", () => { // 문서 객체 조작 })`

- "DOMContentLoaded" 이벤트 발생 시, 뒤의 콜백 함수를 실행해달라
- 웹 브라우저가 제공해주는 이벤트로, DOM Content 내용이 Load가 완료되면, 그 때 실행 해줌(앞으로 많이 나옴).

---

## 문서 객체 가져오기

> `document.querySelector()` & `document.querySelectorAll()` method

### `document.querySelector()`

- 선택자로 잡아지는 것 단 하나만 추출해서 조작

### `document.querySelectorAll()`

- 태그를 여러 개 집어서 추출해주기 때문에 for..of 등의 반복문과 함께 사용

```JS
// input이 두 개 여러 개 있는 상황이라면

const inputAll = document.querySelectorAll('input');

for (const el of inputAll) {
  el.style.backgroundColor = "blue";
}
```

---

## 문서 객체 조작하기 - 글자

> 조작 = 값 추출 / 값 넣기

> `textContent`  
> `innerHTML`

```html
<h1 id="textContent">textContent 속성 기존 문자열</h1>
<h1 id="innerHTML">innerHTML 속성 기존 문자열</h1>
```

```JS
document.addEventListener("DOMContentLoaded", () => {
  const header1 = document.querySelector("#textContent");
  const header2 = document.querySelector("#innerHTML");
})
```

- 값 추출

```JS
console.log(header1.textContent);
console.log(header2.innerHTML);
```

- 값 넣기

```JS
header1.textContent = "원하는 값1";
header2.innerHTML = "원하는 값2";
```

### textContent

- 태그도 text로 인식
- 일반적으로 많이 사용

### innerHTML

- 태그를 태그로 인식
- 보완에 있어서 문제가 있을 수 있기에 많이 사용하지는 않음

---

## 문서 객체 조작하기 - 속성

> 조작 = 값 추출 / 값 넣기

- `.setAttribute("속성명", "값");`
- `.getAttribute("속성명");`

- 표준 속성은 set, get 없이 바로 불러오기 가능

```html
<img />
```

```JS
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("img");

  // 값 넣기
  img.setAttribute("src", "http://placekitten.com/200/200");
  // 표준 속성은 바로 입력 가능
  img.src = "http://placekitten.com/200/200"; 가능


  // 값 추출
  console.log(img.getAttribute("src"));
  // 표준 속성은 바로 입력 가능
  console.log(img.src);
})
```

### 비표준 속성을 왜 조작할까?

- 태그에 추가적인 정보를 전달하고 싶을 때 일시적으로 '사용자 정의 속성(데이터 속성)'을 활용하게 됨
- 추후에 다루겠음

---

## 문서 객체 조작하기 - 스타일 ()

> .style. =

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

```JS
document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll("div");

  // querySelectorAll은 for...of 혹은 forEach 등을 활용해 반복

  // div 배경색깔 흰색에서 검은색으로 그라데이션 만들기
  divs.forEach((div, key) => {
    div.style.backgroundColor = `rgb(${key * 25.5}, ${key * 25.5}, ${key * 25.5})`;
  })
})
```
