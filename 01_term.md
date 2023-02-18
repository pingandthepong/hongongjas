## 표현식 expression

- 값을 만들어내는 단위

## 문장 Statement

- 코드를 실행하는 단위 ('문'이라는 들어가면 다 문장의 일종이라고 생각하면 됨)

## 키워드

- 자바스크립트가 만들어질 때 정한 특별한 의미의 '키워드'

- await; break; case; catch; class; const; continue; debugger; default ; delete; do; else; export ; true; 등

## 식별자

- 프로그래밍 언어에서 이름을 붙일 때 사용하는 단어. 주로 변수명이나 함수명 등으로 사용됨

1. 키워드 사용 금지
2. 숫자로 시작 금지
3. 특수문자는 \_와 $만 허용 (단일 사용 가능)
4. 공백 문자 금지

- 사용 가능한 식별자 : alpha, alpha10, _alpha, $alpha, Alpha, ALPHA, _, $ 등
- 사용 불가능한 식별자 : break, 273alpha, has space 등

### 식별자 이름 관례 (camelCase)

- createMap
- createRequest
- createImageBitmap
- customElement
- removeAll

### 대문자로 시작하면 클래스

- Array
- Number
- Component
- Pet

- 모두 다 대문자면 클래스 아님.
  (문법적으로 틀리진 않았지만 관례적으로 클래스가 아닌 '상수'로 인식하게 됨)

- 소문자라면 뒤에 ()가 붙으면 함수, 아니면 변수
- 다른 식별자와 함께 사용되면 속성, 다른 식별자와 함께 사용됐는데 ()도 붙으면 메소드

#### 문제 풀이

- alert() => 함수
- prompt() => 함수
- input => 변수
- Array.length => 속성
- Math.PI => 속성
- Math.abs() => 메소드

#### 연습

https://github.com/facebook/react/blob/main/scripts/release/utils.js

- 키워드 = const색깔, 하늘색(조건문 등에 사용됨), true/false 등
- 나머지 = 식별자

## 코드의 구조

- 주어 + 동사 + 목적어
- I love you => 나는 사랑한다 너를

- console.log('안녕하세요');
- -> console이 log한다. '안녕하세요'를

- 동사 + 목적어 -> 명령문
- Love you => 사랑해라 너를

- alert('안녕하세요');
- -> alert해라. '안녕하세요'를.
