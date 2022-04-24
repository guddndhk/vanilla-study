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
 */