"use strict";
var InboxEjsScript = /** @class */ (function () {
    function InboxEjsScript() {
    }
    InboxEjsScript.prototype.setInboxSidebarHeadingAction = function () {
        var inboxSidebarHeading = document.getElementById("inbox-sidebar-heading");
        inboxSidebarHeading.addEventListener("mouseover", function () {
            console.log("mouse-over");
        });
        $(document).ready(function () {
            $("#inbox-sidebar-heading").on({
                click: function () {
                    console.log("heading-clicked2");
                },
            });
        });
    };
    InboxEjsScript.prototype.loadItem = function (idTagElement) {
        $(document).ready(function () {
            $("#main-section").load("inbox");
        });
    };
    InboxEjsScript.prototype.addNewTodo = function () {
        $(document).ready(function () {
            var body = {};
            $("#add-todo-button").on({
                click: function () {
                    $("#todo-input-modal").modal();
                },
            });
            // form related actions
            $("#todo-input-title").on({
                focus: function () {
                    // pop help dialog?
                    console.log("title focused");
                },
                blur: function () {
                    // add green check dom element or show element;
                    console.log("lose focus");
                },
                change: function (event) {
                    console.log(event.target.value);
                    body["title"] = event.target.value;
                    // let todoInputTitle = document.getElementById(
                    //   "todo-input-title"
                    // );
                    // const value = todoInputTitle.value;
                    // console.log(value);
                },
            });
            $("#todo-input-notes").on({
                focus: function () {
                    // pop dialog
                },
                blur: function () {
                    console.log("lose focus2");
                },
                change: function (event) {
                    // const todoInputNotes = document.getElementById(
                    //   "todo-input-notes"
                    // );
                    // const value = todoInputNotes.value;
                    console.log(event.target.value);
                    body["notes"] = event.target.value;
                },
            });
            $("#priority-option").on({
                change: function (event) {
                    console.log(event.target.value);
                    body["priority"] = event.target.value;
                },
            });
            $("#todo-schedule").on({
                focus: function () {
                    // pop dialog
                },
                blur: function () {
                    console.log("lose focus3");
                },
                change: function (event) {
                    console.log(event.target.value);
                    body["schedule"] = event.target.value;
                },
            });
            $("#todo-deadline").on({
                focus: function () {
                    // pop dialog
                },
                blur: function () {
                    console.log("lose focus4");
                },
                change: function (event) {
                    console.log(event.target.value);
                    body["deadline"] = event.target.value;
                    console.log(body);
                },
            });
            // $("#submit-todo-inputs").on({
            //   submit: function () {
            //     // post to backend url; ajax
            //     // event.preventDefault();
            //     // var xhr = new XMLHttpRequest();
            //     // xhr.open("POST", "http://localhost:8080/createTodo", true);
            //     // xhr.setRequestHeader("Content-Type", "application/json");
            //     // xhr.send(JSON.stringify(body));
            //   },
            // });
            $("#close-modal-button").on({
                click: function () {
                    // close modal action
                },
            });
            $("#cancel-todo-input").on({
                click: function () {
                    // close modal action
                },
            });
            // document
            //   .getElementById("submit-todo-inputs")
            //   .addEventListener("submit", function () {
            //   });
        });
    };
    InboxEjsScript.prototype.viewTodo = function () {
        // in case updateTodo action could not meet a requirement, implement this.
        $(document).ready(function () {
            $("#todo-item").on({
                mouseover: function () {
                    //pop over?
                    console.log("show contents");
                },
            });
        });
    };
    InboxEjsScript.prototype.dragTodo = function () {
        $(document).ready(function () {
            $("#drag-button").on({
                drag: function () {
                    console.log("dragged");
                },
            });
        });
    };
    InboxEjsScript.prototype.updateTodo = function () {
        $(document).ready(function () {
            var formData = new FormData();
            var body = {};
            $("#update-todo-button").on({
                click: function () {
                    // update todo item via modal window;
                    // if item is updated, send patch request to server. ajax.
                    console.log("open update window");
                    $("#update-todo-input-modal").modal();
                },
            });
            $("#update-todo-input-title").on({
                change: function (event) {
                    console.log(event.target.value);
                    body["update-todo-input-title"] = event.target.value;
                },
            });
            $("#update-todo-input-notes").on({
                change: function (event) {
                    console.log(event.target.value);
                    body["update-todo-input-notes"] = event.target.value;
                },
            });
            $("#update-priority-option").on({
                change: function (event) {
                    console.log(event.target.value);
                    body["update-priority-option"] = event.target.value;
                },
            });
            $("#update-todo-schedule").on({
                change: function (event) {
                    console.log(event.target.value);
                    body["update-todo-schedule"] = event.target.value;
                },
            });
            $("#update-todo-deadline").on({
                change: function (event) {
                    console.log(event.target.value);
                    body["update-todo-deadline"] = event.target.value;
                    console.log(body);
                },
            });
            $("#update-todo-inputs").on({
                click: function (event) {
                    console.log(event.target.value);
                },
            });
            // $("#update-todo-form").on({
            //   submit: function (event) {},
            // });
        });
    };
    InboxEjsScript.prototype.deleteTodo = function () {
        $(document).ready(function () {
            $("#delete-todo-button").on({
                click: function () {
                    // delete. move item into trash. send delete request to server. ajax;
                    // hide todo item animation. namely add method to remove dom node of target todo item. fade animation.
                    console.log("deleted");
                    $("#todo-item-li").remove();
                },
            });
        });
    };
    InboxEjsScript.prototype.completeTodo = function () {
        $(document).ready(function () {
            $("#checkbox1").on({
                click: function () {
                    // complete todo item. move item into completed folder. send request to server. ajax.
                    // hide todo item animation. namely add method to remove dom node of target todo item.
                    $("#todo-item-li").remove();
                },
            });
        });
    };
    return InboxEjsScript;
}());
var inbox = new InboxEjsScript();
inbox.setInboxSidebarHeadingAction();
inbox.addNewTodo();
inbox.updateTodo();
inbox.deleteTodo();
inbox.viewTodo();
inbox.dragTodo();
inbox.completeTodo();
