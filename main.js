// when the button is pressed
function oneClick() {
    var moment = record();
    // gps returns asynchronously so we must store in callback
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            moment.gps = position;
            store(moment);
            display(moment);
        });
    } else {
        store(moment);
        display(moment);
    }
}

// capture data from the camera, mic, clock
function record() {
var timeString = getDateTime();
var time = Date.now();

return {
     "pic":undefined
    ,"gps":undefined
    ,"audio":undefined
    ,"timeString":timeString
    ,"time":time
    }
}

// store the data (in a cookie..?)
function store(moment) {
console.log("storing")
}

// add a moment to the visible list of moments
function display(moment) {
console.log("displaying"+moment)
$("#moments").prepend('<div class="moment">'+moment.timeString+
    '<div class="timestamp">'+moment.time+'</div>'+
    '<div class="gps">'+moment.gps.position.coords.latitude+"  "+moment.gps.position.coords.longitude+"</div>"+
    '</div>');
}

// sort moments in REVERSE chronological order
function sortMoments() {
    var moments = $(".moment").sort(function(a, b) {
    return Number($(b).find(".timestamp").text()) > Number($(a).find(".timestamp").text());
    });
    $("#moments").children().detach();
    $("#moments").append(moments);
}

// retrive all data from the cookies
function fetch() {
console.log("fetching")
}

// load existing data
function loadAllMoments() {
    var moments = fetch();
    
}



// this function from stackoverflow user Daniel Lee, edited by user jleft
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
     return dateTime;
}