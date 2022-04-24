//호출스택
function first() {
    second();
    console.log("첫 번쨰")
}
function second() {
    third();
    console.log("첫 번쨰")
}
function third() {
    console.log("첫 번쨰")
}

first();