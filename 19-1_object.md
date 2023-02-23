# 객체

- 쉽지만(?) 자바스크립트 개발 시 많이 사용되기에 중요

## 배열과 객체 비교

> 배열 `const array = []` : 여러 자료를 한꺼번에 다룰 수 있게 해주는 특별한 자료형의 일종

- 배열 내부의 값으로 여러 값(`요소(element)`)들을 쉼표로 구분해 넣음

> 객체 `const object = {}` : 여러 자료를 한꺼번에 다룰 수 있게 해주는 특별한 자료형의 일종

- 객체 내부의 값으로 여러 값(`속성(property)`)들을 쉼표로 구분해 넣고, `키:값`의 형태

---

## 객체 속성

> `키` : 일반적으로 식별자의 형태 (숫자로 시작X, 기호는 $와 \_만 포함 가능)  
> `값` : 원하는 자료형 가능

- "object 객체의 name 속성, age 속성" 등으로 표현

```JS
const object = {
  name: '구름',
  age: 7
}
```

- 배열은 인덱스로 요소 확인 가능 (array[0])
- 객체는 키로 속성 확인 가능 (아래 두 방법 모두 가능)

```JS
object['name'];
object.name; // 더 많이 사용
```

---

## 값 교체

- 배열 값 교체

```JS
array[0] = 200;
```

- 객체 값 교체

```JS
object.name = '별';
object.age = 1;
```

---

## 객체의 `키`를 식별자로 사용할 수 없는 단어로 사용할 경우

- 키는 식별자와 문자열 모두 사용 가능
- 대부분 식별자를 사용하지만, 식별자로 사용할 수 없는 단어라면 문자열 사용
- 문자열 사용 시, 객체의 요소에 접근하려면 무조건 대괄호[] 사용

---

## 객체 속성 & 메서드

- 객체 내부 속성으로 함수 가능(메서드)
- 객체의 속성인 메서드를 화살표 함수로 만들면 this를 바인딩하지 않으므로, 객체 메서드에서 this 사용 시 화살표 함수 사용X (익명 함수 사용)
- 타 프로그래밍 언어는 객체 내부에서 `this.`을 생략해도 되지만, **_자바스크립트에서는 객체 자기 자신을 나타낼 때 `this.` 생략 불가능_**

```JS
const dog = {
  name: '구름',
  age: 7,
  bark: function() {
    console.log(`${dog.name}이/가 짖습니다!`)
  },
  sleep: () => {
    console.log(`${dog.name}이/가 잡니다!`)
  }
}

dog.bark(); // 이렇게 호출
dog.sleep(); // 화살표함수는 this를 바인딩하지 않으므로 사용 X
```

- 타 프로그래밍 언어에서는 '속성'과 '메서드'가 확실하게 구분됨
- 자바스크립트에서의 '메서드'는 속성의 일종이고, 함수 자료형인 '속성'이다.

### this 바인딩

> this 바인딩 : this를 현재 객체와 연결하는 행위

- 익명 함수 : this 바인딩을 한다.
- 화살표 함수 : this 바인딩을 안 한다.