// when the button is pressed
function oneClick() {
    var moment = record();
    
    store(moment);
    display(moment);
    // gps returns asynchronously so we must store in callback
    if ("geolocation" in navigator) {
        $("#gps"+moment.time).append('<div id="waitingForGPS'+moment.time+'">Waiting for GPS...</div>');
        navigator.geolocation.getCurrentPosition(function(position) {
            $("#waitingForGPS"+moment.time).remove();
            $("#gps"+moment.time).append(position.coords.latitude+"  "+position.coords.longitude);
            storeGPS(moment.time,position);
        });
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

// store the GPS data
function storeGPS(time,position) {
console.log("storing gps")
}

// add a moment to the visible list of moments
function display(moment) {
$("#moments").prepend('<div class="moment">'+moment.timeString+
    '<div class="timestamp">'+moment.time+'</div>'+
    '<div class="gps">'+moment.gps.coords.latitude+"  "+moment.gps.coords.longitude+"</div>"+
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