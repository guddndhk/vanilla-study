//변수 선언
let study = "study";
console.log(study);
let study3;
let sutdy4 = null;
//상수
const study2 = "study2";
console.log(study2)

console.log(typeof study2);

console.log(typeof study3)//undefined

console.log(typeof sutdy4, sutdy4);//object, null

//es6 추가 문법 Symbol
//유니크한 값을 만듬
let testSymbol1 = Symbol(1);
let testSymbol2 = Symbol(1);
console.log(typeof testSymbol1, testSymbol1);
console.log(typeof testSymbol2, testSymbol2);

//== 같니? 라고 물어보는거고
console.log(testSymbol1 == testSymbol2);//false
// === 데이터 타입 까지도 똑같니? 라고 물어보는거다.
console.log(testSymbol1 === testSymbol2);//false
