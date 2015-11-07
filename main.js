// when the button is pressed
function oneClick() {
    var moment = record();
    store(moment);
    display(moment);
}

// capture data from the camera, mic, gps, clock
function record() {
console.log("recording")
return {
     "pic":undefined
    ,"gps":undefined
    ,"audio":undefined
    ,"time":undefined
    }
}

// store the data (in a cookie..?)
function store(moment) {
console.log("storing")
}

// add a moment to the visible list of moments
function display(moment) {
console.log("displaying"+moment)
}

// retrive all data from the cookies
function fetch() {
console.log("fetching")
}

// load existing data
function loadAllMoments() {
    var moments = fetch();
    
}