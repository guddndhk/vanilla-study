// 프로미스
// 콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책
//내용이 실행이 되었지만 결과를 아직 반환 하지 않은 객체
const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

// 다른 코드가 들어갈 수 있음.
//코드를 분리할 수 있냐 없냐의 큰차이.
// 코드 생태계가 콜백에서 프로미스로 가는중.
promise
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    })

//여러개의 프로미스 동시에 실행 Promise,all(배열)
/*
하나라도 실패하면 catch 로 간다.
allSettled로 실패한 것만 추려낼 수 있음.
 */

//async/await 에이싱크 어웨이트
async function findAllSaveUser(User) {
    let user = await User.findOne({});
    user.name = 'cake';
    user = await user.save();
    user = await user.findOne({gender: 'male'});
// await 이 then 역활을 한다. 실행순서가 오른쪽에서 왼쪽으로 간다고 생각하자.
// await 을 쓰려면 함수가 항상 async 가 붙어야함.
// topLevel await 이 나오면서 async 가 없어됨.
//결론 async 는 프로미스의 문법을 간단히 만든거다.
// async 와  await 을 쓰려면 try catch 를 써줘야한다.
}

