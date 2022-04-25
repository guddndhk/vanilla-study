//클래스
//프로토타입 문법을 깔끔하게 작성할 수 있는 class 문법 도입.

//생성자 함수는 대문자로 선언 자바와 같다.
var Human = function (type) {
    this.type = type || 'human';
};

 Human.prototype = {
    constructor(type = 'human') {
        this.type = type;
    }
}

//생성자 메서드 스테틱 메서드
Human.isHuman = function (human) {
    return human instanceof Human;
};

//인스턴스 메서드 프로토타입 메서드
Human.prototype.breathe = function () {
    alert('h-a-a-a-m');
};

//
