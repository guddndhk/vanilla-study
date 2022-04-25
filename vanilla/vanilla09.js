//비구조화 할당
//
// const example = {
//     a: 123, b: {c: 135, d: 146},
//     const a = example.a;
//     const d = example.b.d;
//
//     const {a, b: {d}} = example;

arr = [1, 2, 3, 4, 5];
const x = arr[0];
const y = arr[1];
const z = arr[4];

const [x, y, , , z] = arr;

//this 가 있을때는 구조분해 할당 x