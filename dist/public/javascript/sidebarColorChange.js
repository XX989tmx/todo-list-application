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
            sidebarInbox.style.borderLeft = "solid 3px #3178c6";
        }
        break;
    case "/today":
        var sidebarToday = document.getElementById("sidebar-today");
        if (sidebarToday === null) {
            alert("error");
        }
        else {
            sidebarToday.style.backgroundColor = "#324f92";
            sidebarToday.style.borderLeft = "solid 3px #3178c6";
        }
        break;
    case "/whatToDoNext":
        var sidebarWhatToDoNext = document.getElementById("sidebar-whatToDoNext");
        if (sidebarWhatToDoNext === null) {
            alert("error");
        }
        else {
            sidebarWhatToDoNext.style.backgroundColor = "#324f92";
            sidebarWhatToDoNext.style.borderLeft = "solid 3px #3178c6";
        }
        break;
    case "/activity":
        var sidebarActivity = document.getElementById("sidebar-activity");
        if (sidebarActivity === null) {
            alert("error");
        }
        else {
            sidebarActivity.style.backgroundColor = "#324f92";
            sidebarActivity.style.borderLeft = "solid 3px #3178c6";
        }
        break;
    case "/log":
        var sidebarLog = document.getElementById("sidebar-log");
        if (sidebarLog === null) {
            alert("error");
        }
        else {
            sidebarLog.style.backgroundColor = "#324f92";
            sidebarLog.style.borderLeft = "solid 3px #3178c6";
        }
        break;
    case "/trashBox":
        var sidebarTrashBox = document.getElementById("sidebar-trashBox");
        if (sidebarTrashBox === null) {
            alert("error");
        }
        else {
            sidebarTrashBox.style.backgroundColor = "#324f92";
            sidebarTrashBox.style.borderLeft = "solid 3px #3178c6";
        }
        break;
    default:
        break;
}
