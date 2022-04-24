//템플릿 문자열 객체 리터럴

/*
레거시
 */
var won = 1000;
var result = '이과자는' + won + '원입니다.';
console.log(result);

/*
트랜드
 */
const result2 = `이 과자는 ${won} 원입니다.`; //`` 빽틱
console.log(result2)

function a() {
}

a();
a``; //태그드 템플릿 리터럴 이라함..