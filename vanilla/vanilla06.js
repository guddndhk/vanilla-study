// const ,let
/*

if (true) {//스코프
    var x = 3; // var 는 블록스코프를 무시함 펑션(함수스코프)으로 감싸면 지킨다.
}//이부분을 블록 스코프라함

const 는 블록 스코프 규칙을 지킨다.
*/

const a = 3; // 상수가 된다. = 을 한번만 붙일수 있다고 생각하면 된다.
//하지만 이렇게 바꿀수는 있다.
// const 를 자주 쓰는 이유는 자바와 같다. 같이 자주 바뀌면 안되기 때문.. 코드가 복잡해 지고 협업시 예상치 못한 오류가 발생한다.
const c = {name: 'proteinCake'}
c.name = 'cakeProtein';

let b = 3; // 변수가 된다.