# 문서 객체 모델 DOM

> DOM (Document Object Model)

---

## 문서 객체 조작

### 방법1) `<body>` 마지막 단에서 `<script>document.body.innerHTML = "";</script>`

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
