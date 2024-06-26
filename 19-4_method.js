console.log("2023.02.23.목, 김주현, 김밥집, 3000".split(","));

console.log("------------------------------------");

const input = `
일자, 달러, 엔, 유로
02, 1141.8, 1097.46, 1262.37
03, 1148.7, 1111.36, 1274.65
03, 1140.6, 1107.81, 1266.58
07, 1143.4, 1099.58, 1267.8
08, 1141.6, 1091.97, 1261.07  `;

console.log(input);
// '\n일자, 달러, 엔, 유로\n02, 1141.8, 1097.46, 1262.37\n03, 1148.7, 1111.36, 1274.65\n03, 1140.6, 1107.81, 1266.58\n07, 1143.4, 1099.58, 1267.8\n08, 1141.6, 1091.97, 1261.07  '

console.log(input.trim());
// '일자, 달러, 엔, 유로\n02, 1141.8, 1097.46, 1262.37\n03, 1148.7, 1111.36, 1274.65\n03, 1140.6, 1107.81, 1266.58\n07, 1143.4, 1099.58, 1267.8\n08, 1141.6, 1091.97, 1261.07'

console.log(input.trim().split("\n"));
// (6) ['일자, 달러, 엔, 유로', '02, 1141.8, 1097.46, 1262.37', '03, 1148.7, 1111.36, 1274.65', '03, 1140.6, 1107.81, 1266.58', '07, 1143.4, 1099.58, 1267.8', '08, 1141.6, 1091.97, 1261.07']
// 0 : "일자, 달러, 엔, 유로"
// 1 : "02, 1141.8, 1097.46, 1262.37"
// 2 : "03, 1148.7, 1111.36, 1274.65"
// 3 : "03, 1140.6, 1107.81, 1266.58"
// 4 : "07, 1143.4, 1099.58, 1267.8"
// 5 : "08, 1141.6, 1091.97, 1261.07"

console.log(
  input
    .trim()
    .split("\n")
    .map((line) => line.split(","))
);
// (6) [Array(4), Array(4), Array(4), Array(4), Array(4), Array(4)]
// 0 : (4) ['일자', ' 달러', ' 엔', ' 유로']
// 1 : (4) ['02', ' 1141.8', ' 1097.46', ' 1262.37']
// 2 : (4) ['03', ' 1148.7', ' 1111.36', ' 1274.65']
// 3 : (4) ['03', ' 1140.6', ' 1107.81', ' 1266.58']
// 4 : (4) ['07', ' 1143.4', ' 1099.58', ' 1267.8']
// 5 : (4) ['08', ' 1141.6', ' 1091.97', ' 1261.07']

// map(() => {}) : 배열 메서드로, 배열을 순회해 return값으로 "새로운 배열"을 반환한다.

console.log("------------------------------------");
