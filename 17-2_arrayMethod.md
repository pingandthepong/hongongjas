## 배열 메서드

- 배열 메서드 중 콜백함수를 받는 함수가 많다.

### forEach()

`forEach((value, index, array) => {})`

> forEach()는 매개변수(param)로 콜백함수를 받는다.  
> forEach()는 매개변수(param)로 주어진 콜백함수를 배열 요소 각각에 대해 실행하는 메서드이다.

> forEach()는 return 값이 없기에, 변수에 할당하기 보다는 반복문이나 조건문과 같이 바로 호출되는 것이 일반적이다.  
> map()과 유사하지만 forEach()를 사용하는 것이 적절할 때가 있는데, forEach()는 return값이 반환되지 않기 때문에 return 값으로 새로운 배열이 필요하지 않는 경우라면 forEach 메서드를 활용하는 것이 성능 면에서 좋다.

```JS
let array = [273, 52, 103, 32, 57];

array.forEach((value, index) => {
  console.log(`${index}번째 값은 ${value}입니다.`);
})

// "0번째 값은 273입니다."
// "1번째 값은 52입니다."
// "2번째 값은 103입니다."
// "3번째 값은 32입니다."
// "4번째 값은 57입니다."
```

---

### filter()

`filter((value, index, array) => {})`

> filter()는 매개변수를 forEach와 똑같이 받는다.  
> filter()는 콜백함수로 `true`/`false`를 리턴하는 함수가 올 것을 예상한다.  
> filter()는 특정 조건을 만족하는 요소들을 걸러 return하는 배열 메서드다.(⭐️return하기 때문에 return값이 중요)  
> (배열에서 특정 값 이상의 숫자들만 모은다거나, 여러 객체들이 모여있는 배열에서 특정 프로퍼티를 가진 값들만 모으는 경우 유용)

> 콜백함수의 리턴 값이 truthy하면 새로운 배열에 추가, falsy하면 버림받는 식으로 Filter 라는 메서드 이름처럼 요소들이 걸러짐

```JS
let array = [273, 52, 103, 32, 57];

array = array.filter((value, index) => value % 2 === 0);
console.log(`짝수만 출력 : ${array}`);

// "짝수만 출력 : 52,32"

// (만약 filter가 아닌 forEach로 바꾸면, undefined가 반환된다.)
```

```JS
const number = [1,2,3,4,5];

const newNumber = number.filter((element, index, array) => {
  console.log(`요소: ${element}`);
  console.log(`index: ${index}`);
  console.log(array);

  return element > 3;
})

console.log(newNumber);
// [4, 5]

```

```JS
const a = ["스위스", "우영우", "맛있는수육", "잘먹었습니다"];

const three = a.filter(word => word.length === 3);

console.log(three); // ["스위스", "우영우"]
```

```JS
const values = [false, true, 0, 1, "", "string", undefined, null, {}, []];
const returnValues = values.filter(value => value);
console.log(returnValues);

// [true, 1, 'string', {…}, Array(0)]
```

---

### map()

`map((value, index, array) => {})`

> map()은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 메서드
> map()은 forEach()와 비슷하게 배열의 요소를 반복하는 반복문이지만, return되는 결과에 따라 새로운 배열을 만들어낸다는 점이 다르다(리턴되는 배열이 있느냐 없느냐!).  
> map()을 통해 생성된 배열은 **_새로운 배열_**이다.

```JS
const array = [1, 2, 3, 4, 5];

const newMap = array.map(value => value + "!!");

console.log(newMap); // ["1!!","2!!","3!!","4!!","5!!"]
```

```JS
const myArr = [1, 2, 3, 4, 5];

const newMyArr = myArr.map((element, index, array) => {
  return element * 2;
});

console.log(newMyArr); // [2,4,6,8,10]
```

- map()을 통해 생성된 배열은 '새로운 배열'이다. (결과값이 같더라도, 다른 배열이다)

```JS
const arr1 = [1, 2, 3, 4, 5];

const arr2 = arr1;

const arr3 = arr1.map(element => return element);

console.log(arr1); // [1,2,3,4,5]
console.log(arr2); // [1,2,3,4,5]
console.log(arr3); // [1,2,3,4,5]

console.log(arr1 === arr2); // true
console.log(arr1 === arr3); // false
console.log(arr2 === arr3); // false
```

---

### 화살표 함수

`(매개변수) => { 본문(리턴할 코드가 한 줄이면 return과 대괄호도 생략 가능 }`
