// State.js

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

var StateEnum = {
    UNVISITED: "",
    SPONSORED: "sponsored",
    HIDDEN: "hidden"
};

function getState() {
    switch (getCookie("SponsorKliksSFO")) {
        case "":
            return StateEnum.UNVISITED;
            break;
        case "sponsored":
            return StateEnum.SPONSORED;
            break;
        case "hidden":
            return StateEnum.HIDDEN;
            break;
    }
}