function getParameterValues(key) {
    var pageURL = window.location.search.substring(1);
    var urlQS = pageURL.split('&');
    for (var i = 0; i < urlQS.length; i++) {
        var paramName = urlQS[i].split('=');
        if (paramName[0] == key) {
            //replace the special char like "+","&" etc from value
            var value = paramName[1].replace('%20', ' ').replace('%26', '&').replace('+', ' ');
            return value;
        }
    }
}
var param1;
var param2;


window.onload = function () {
   
    param1 = getParameterValues("parm1");
    param2 = getParameterValues("parm2");
}

window.addEventListener("message", (event) => {
    
    param1 = event.data.parm1;
    param2 = event.data.parm2;

});

function readparentparam() {
    return "param 1:" + param1 + "param 2:" + param2;
}

