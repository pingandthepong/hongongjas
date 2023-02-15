# 자료형 변환

- 문자열을 입력 받는 `prompt("메시지", "디폴트값")` 함수
- 불을 입력 받는 `confirm()` 함수

```JS
const a = prompt("아무 것이나 입력해주세요.", "");
a; // 입력한 내용이 return됨

const b = confirm("메시지");
b; // true 혹은 false가 return 됨
```

## 해당 자료형으로 변환

- `Number()`
- `String()`
- `Boolean()`

---

### 숫자로 형변환

`Number()`

```JS
<script>
  const a = Number(prompt("첫 번째 숫자 입력"));
  const b = Number(prompt("두 번째 숫자 입력"));
  alert(`${a} + ${b} = ${a + b}`);
</script>
```

- 문자열을 숫자로 형변환하면, `NaN`이 반환됨

> `NaN` : 숫자형이지만, 숫자로 표시할 수 없는 경우 (제대로 연산 안됨)

---

### 불 형변환

#### 불 => 문자열로 형변환

> String(true) => "true"
> String(false) => "false"

#### 불 => 숫자열로 형변환

> Number(true) => 1
> Number(false) => 0

#### 다른 자료형 => 불로 형변환 (암기⭐️)

> 5가지 경우 => false (이외의 경우 => true)  
> `0`, `NaN`, `""`, `null`, `undefined`
