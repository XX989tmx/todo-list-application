"use strict";
var pathname = window.location.pathname;
switch (pathname) {
    case "/inbox":
        var sidebarInbox = document.getElementById("sidebar-inbox");
        if (sidebarInbox === null) {
            alert("error");
        }
        else {
            sidebarInbox.style.backgroundColor = "#324f92";
        }
        break;
    case "/today":
        var sidebarToday = document.getElementById("sidebar-today");
        if (sidebarToday === null) {
            alert("error");
        }
        else {
            sidebarToday.style.backgroundColor = "#324f92";
        }
        break;
    case "/whatToDoNext":
        var sidebarWhatToDoNext = document.getElementById("sidebar-whatToDoNext");
        if (sidebarWhatToDoNext === null) {
            alert("error");
        }
        else {
            sidebarWhatToDoNext.style.backgroundColor = "#324f92";
        }
        break;
    case "/log":
        var sidebarLog = document.getElementById("sidebar-log");
        if (sidebarLog === null) {
            alert("error");
        }
        else {
            sidebarLog.style.backgroundColor = "#324f92";
        }
        break;
    case "/trashBox":
        var sidebarTrashBox = document.getElementById("sidebar-trashBox");
        if (sidebarTrashBox === null) {
            alert("error");
        }
        else {
            sidebarTrashBox.style.backgroundColor = "#324f92";
        }
        break;
    default:
        break;
}
