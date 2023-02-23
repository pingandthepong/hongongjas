// Lodash 사용 연습

const books = [
  {
    name: "혼자 공부하는 파이썬",
    price: 18000,
    publisher: "한빛미디어",
  },
  {
    name: "HTML5 웹 프로그래밍 입문",
    price: 26000,
    publisher: "한빛아카데미",
  },
  {
    name: "머신러닝 딥러닝 실전 개발 입문",
    price: 30000,
    publisher: "위키북스",
  },
  {
    name: "딥러닝을 위한 수학",
    price: 25000,
    publisher: "위키북스",
  },
];

console.log(books);
// _.sortBy(변수명, [값]) : 가격 기준 오름차순 정렬
const output = _.sortBy(books, ["price"]);
console.log(output);

// _.sortBy(변수명, [값]) : 출판사 기준 + 가격 기준 오름차순 정렬
const output2 = _.sortBy(books, ["publisher", "price"]);
console.log(output2);

//

const myFriend = [
  { name: "kys", job: "developer", age: 27 },
  { name: "cys", job: "webtoons man", age: 27 },
  { name: "yhs", job: "florist", age: 26 },
  { name: "chj", job: "nonghyup man", age: 27 },
  { name: "ghh", job: "coffee man", age: 27 },
  { name: "ldh", job: "kangaroo", age: 27 },
];

// _.find(변수명, 콜백함수 )처음으로 참이 되는 객체 반환
const output3 = _.find(myFriend, function (friend) {
  return friend.age < 28;
});

console.log(output3);

// _.findIndex(변수명, 콜백함수 혹은 객체값) 처음 일치하는 object의 index값 반환
const output4 = _.findIndex(myFriend, { name: "ldh" });
console.log(output4);

console.log("-------------------------");
console.log("-------------------------");

const books2 = [
  {
    name: "혼자 공부하는 파이썬",
    price: 18000,
    publisher: "한빛미디어",
  },
  {
    name: "HTML5 웹 프로그래밍 입문",
    price: 26000,
    publisher: "한빛아카데미",
  },
  {
    name: "머신러닝 딥러닝 실전 개발 입문",
    price: 30000,
    publisher: "위키북스",
  },
  {
    name: "딥러닝을 위한 수학",
    price: 25000,
    publisher: "위키북스",
  },
];

// 이름으로 오름차순 정렬
const nameSort = _.sortBy(books2, ["name"]);
console.log(nameSort);

// _.orderBy(객체의 배열, [정렬하고 싶은 것들], [오름차순(기본값), 내림차순 선택] )
const nameOrder = _.orderBy(books2, ["name"], ["desc"]);
console.log(nameOrder);
