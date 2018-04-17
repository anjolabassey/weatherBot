if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        w.onmessage = function(event) {
            chat.append("<div id='botmsg'>" + "The weather is " + temp  + " degree celcius " + "with the possibility of " + description + "</div>");
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        alert("Sorry! No Web Worker support.");
    }





var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();