//호출스택 3
function oneMore() {
    console.log('one more');
}
function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    }, 0);
    new Promise(resolve => {
        resolve('hi');
    })
        .then(console.log);
    oneMore();
}

setTimeout(run, 5000);

/*
프로미스는 내부까지는 동기임.
프로미스는 then 을 만나는 순간 비동기로 변한다.
setTimeout 보다는 promise 가 우선순위 테스크 큐에서 이벤트 루프를 발생시킬때 더 먼저 실행된다.
자바스크립트는 싱글 스레드 인데 어떻게 백그라운드 스레드를 생성하지? 백그라운드는 C++ 이나 운영체제 스레드를 사용한다.
해당 부분은 자바스크립트 엔진이 알아서 해준다. 백그라운드 데스크큐는 자바스크립트가 아니다..
 */