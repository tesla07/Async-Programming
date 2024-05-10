console.log("Start")

function longOperation(waitms = 2000) {
    console.log("Operation Started")

    setTimeout(function(){
        console.log("Operation ended")

    }, waitms)

    
}

longOperation(10000)
console.log("End")