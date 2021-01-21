"use strict";
var pathname = window.location.pathname;
switch (pathname) {
    case "/inbox":
        document.getElementById("sidebar-inbox").style.backgroundColor =
            "rgb(229, 229, 229)";
        break;
    case "/today":
        document.getElementById("sidebar-today").style.backgroundColor = "rgb(229, 229, 229)";
        break;
    case "/whatToDoNext":
        document.getElementById("sidebar-whatToDoNext").style.backgroundColor =
            "rgb(229, 229, 229)";
        break;
    case "/log":
        document.getElementById("sidebar-log").style.backgroundColor = "rgb(229, 229, 229)";
        break;
    case "/trashBox":
        document.getElementById("sidebar-trashBox").style.backgroundColor = "rgb(229, 229, 229)";
        break;
    default:
        break;
}
