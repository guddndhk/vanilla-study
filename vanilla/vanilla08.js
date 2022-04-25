// 화살표 함수
function add1(x, y) {
    return x + y;
}

// 좋은점 코드량이 줄어듬
const add2 = (x, y) => {
    return x + y;
};

// 중괄호 다음에 바로 리턴이 나오면 생략이 가능하다.
const add3 = (x, y) => x + y;

// 헷갈릴수 있어 () 로 한번 묶어준다.
const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

const not2 = x => x;

// 객체를 리턴시에는 () 필수
const obj = (x, y) => ({x, y})

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();