"use strict";
// pop-over
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});
$("#delete-todo-button").popover({ trigger: "hover" });
$("#update-todo-button").popover({
    trigger: "hover",
    content: "update this todo",
    placement: "right",
});
$("#add-todo-button").popover({
    trigger: "hover",
    content: "Add new todo",
    placement: "right",
});
$("#drag-button").popover({
    trigger: "hover",
    content: "Move todo item",
    placement: "left",
});
$("#inbox-mainsection-heading").popover({
    trigger: "hover",
    title: "Tips for using Inbox",
    content: "Use Inbox as temporary space for brainstorming of todo. Put task into Inbox before evaluating their importance or priority. ",
});
$("#todo-input-title").popover({
    trigger: "focus",
    content: "Input name of todo.",
});
$("#todo-input-notes").popover({
    trigger: "focus",
    content: "Notes or Additional information.",
});
$("#priority-option").popover({
    trigger: "focus",
    title: "Priority input",
    content: "Priority criteria. 1 : low importance. 2 : mid importance. 3 : high importance.",
    placement: "top",
});
$("#todo-schedule").popover({
    trigger: "focus",
    content: "Input target date.(optional)",
});
$("#todo-deadline").popover({
    trigger: "focus",
    content: "Input deadline of todo(optional).",
});
$("#submit-todo-inputs").popover({
    trigger: "hover focus",
    content: "Submit input information.",
});
$("#update-todo-input-title").popover({
    trigger: "focus",
    content: "Input name of todo.",
});
$("#update-todo-input-notes").popover({
    trigger: "focus",
    content: "Notes or Additional information.",
});
$("#update-priority-option").popover({
    trigger: "focus",
    title: "Priority input",
    content: "Priority criteria. 1 : low importance. 2 : mid importance. 3 : high importance.",
    placement: "top",
});
$("#update-todo-schedule").popover({
    trigger: "focus",
    content: "Input target date.(optional)",
});
$("#update-todo-deadline").popover({
    trigger: "focus",
    content: "Input deadline of todo(optional).",
});
$("#update-todo-inputs").popover({
    trigger: "hover focus",
    content: "Submit input information.",
});
$("#todo-item-collapse-contents").popover({
    trigger: "hover",
    content: "Edit",
});
