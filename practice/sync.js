console.log("Start");

function longOperation(waitMs = 2000) {
    console.log("longOperation start")
    let waitUntil = new Date(new Date().getTime() + waitMs)
    while( new Date() < waitUntil) {
        // do nothing
    }
    console.log("Operation end")
}
longOperation(5000)
let result = 5;
console.log("result", result)