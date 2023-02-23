const pet = {
  name: "구름",
  age: 8,
};

console.log(pet);

pet.color = "brown";
console.log(pet);

delete pet.color;
console.log(pet);

console.log("-------------------------");

// 문제 1 : 자바스크랩트 객체로 선언하기

const book = {
  name: "혼자 공부하는 파이썬",
  price: 18000,
  publisher: "한빛미디어",
};

console.log(book);

console.log("-------------------------");

// 문제 4 : 메서드

const object = {
  ko: "빵",
  en: "bread",
  fr: "pain",
  es: "pan",
  lang: {
    ko: "한국어",
    en: "영어",
    fr: "프랑스어",
    es: "스페인어",
  },
  print: function (lang) {
    console.log(`${this.ko}는 ${this.lang[lang]}로 ${this[lang]}입니다.`);
  },
};

object.print("es");
