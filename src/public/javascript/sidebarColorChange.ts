const pathname = window.location.pathname;
switch (pathname) {
  case "/inbox":
    const sidebarInbox = document.getElementById("sidebar-inbox");
    if (sidebarInbox === null) {
      alert("error");
    } else {
      sidebarInbox.style.backgroundColor = "rgb(229, 229, 229)";
    }
    break;
  case "/today":
    const sidebarToday = document.getElementById("sidebar-today");
    if (sidebarToday === null) {
      alert("error");
    } else {
      sidebarToday.style.backgroundColor = "rgb(229, 229, 229)";
    }
    break;
  case "/whatToDoNext":
    const sidebarWhatToDoNext = document.getElementById("sidebar-whatToDoNext");
    if (sidebarWhatToDoNext === null) {
      alert('error')
    } else {
      sidebarWhatToDoNext.style.backgroundColor = "rgb(229, 229, 229)";
    }

    break;
  case "/log":
    const sidebarLog = document.getElementById("sidebar-log");
    if (sidebarLog === null) {
      alert("error");
    } else {
      sidebarLog.style.backgroundColor = "rgb(229, 229, 229)";
    }

    break;
  case "/trashBox":
    const sidebarTrashBox = document.getElementById("sidebar-trashBox");
    if (sidebarTrashBox === null) {
      alert("error");
    } else {
      sidebarTrashBox.style.backgroundColor = "rgb(229, 229, 229)";
    }

    break;

  default:
    break;
}
