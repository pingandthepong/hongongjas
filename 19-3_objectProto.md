# 기본 자료형과 객체 자료형, 프로토타입

> 자바스크립트의 모든 자료형은 기본 자료형과 객체 자료형으로 구분됨

- 기본 자료형 (스택에 값 저장) : 숫자, 문자열, 불
- 객체 자료형 (스택과 힙을 연결 => 속성과 메서드를 가질 수 있음) : 함수, 배열, 객체 등

---

- 배열도 동적으로 속성 추가/삭제 가능

```JS
const a = [];
a.내맘대로속성 = 10;
console.log(a); // [ '내맘대로속성': 10 ]
delete a.내맘대로속성;
console.log(a.내맘대로속성); // undefined

const b = function() {};
b.value = 10;
console.log(b); // { value: 100 }
```

---

## 객체 자료형 확인

### 배열

- `typeof()`로 확인하면 "object"로 나옴
- 정확히 배열인지 확인하려면 `Array.isArray()`로 확인 (true/false 반환됨)

### 함수

- `typeof()`로 확인하면 "function"이라고 잘 나옴
- `typeof() === "function"` 이렇게 확인 가능
- 함수도 객체 자료형에 속하는데 왜 잘 나올까 라고 생각한다면, 언어 창시자가 정한 규칙일 뿐임. 그냥 외우는 수 밖에 없음

- 자바스크립트의 함수는 일급 객체(first-class-object)다.
- 일급 객체 : 객체가 아닌 것 같은 게 객체로 다뤄질 때

---

## 기본 자료형을 객체 자료형으로 선언하기

> `String.prototype.contain = function() {]` 이 뭐 하는 코드인지만 알면 됨

- 자료형 변환 시 Number(), String(), Boolean() 등의 함수를 사용했다.
- 이 함수들 앞에 `new` 키워드를 붙이면 기본 자료형이 객체가 된다.

```JS
// 숫자 자료형 객체로 만들기
const a = new Number(10);

// 문자 자료형 객체로 만들기
const b = new String("문자열");

// 불 자료형 객체로 만들기
const c = new Boolean(true);

// 모두 "object"가 반환된다.
typeof(a);
typeof(b);
typeof(c);
```

- 객체가 되었다면, 속성 추가 가능⭐️

```JS
a.value = 20;
console.log(a); // Number {10, value: 20}
```

---

## 기본 자료형의 승급

- 기본적으로 기본 자료형은 속성과 메서드를 가질 수 없다.
- 하지만 `.length`, `.bold`, `.anchor` 등을 사용할 수 있고, 이 말은 속성과 메서드를 활용하고 있다는 것인데 왜 기본 자료형은 속성과 메서드를 사용할 수 없다고 할까? => '**_일시적으로_** 객체로 변환'하는 것이다.

- 일시적으로 기본 자료형에 어떠한 옷을 입혀주는 것
- 이 옷은 메서드를 활용한 직후에 바로 없어지고 다시 기본 자료형으로 돌아온다.
- 옷에 속성과 메서드를 추가한다면, 기본 자료형이 승급하면(옷을 입으면), 속성과 메서드 활용 가능

## 프로토타입을 활용한 속성과 메서드 추가

> prototype = 일시적으로 입는 옷

`String.prototype.value = 10;` (어떤 문자열을 만들었을 때, `value` 활용 가능)

```JS
String.prototype.value = 10;

const a = "문자열";

console.log(a.value); // 10
```

- 객체, 객체 공유 모델
- 클래스의 등장으로 인해 prototype이 자바스크립트 개발에서 설 자리를 많이 잃었음
- prototype에 무언가를 추가하면, 기본 자료형에 추가적인 속성을 집어넣을 수 있음

---

### prototype 활용

- 문자열 내부에 어떠한 문자열이 포함되어 있는지 알 수 있는 메서드가 따로 없음
- indexOf()를 활용해 만들 수 있는데, 매번 indexOf를 작성한다면 귀찮음
- 그래서 prototype에 한 번만 정의해주면, 간단하게 사용 가능하고, 코드의 의미도 명확해지므로 좋음

```JS
String.prototype.contain = function (다른 문자열) {
  return this.indexOf(다른문자열) >= 0;
}

const aa = "문자열";

console.log(`aa.contain('문자'): ${aa.contain('문자')}`); // aa.contain('문자'): true

```

- prototype은 기본 자료형에 원하는 추가적인 메서드를 집어넣고 싶을 때 활용함
- 위험성이 있기에 현대에는 많이 사용하지 않지만, 구조와 원리를 알고 있는 게 좋다.
