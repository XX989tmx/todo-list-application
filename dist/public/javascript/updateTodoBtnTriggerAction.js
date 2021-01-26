"use strict";
var updateTodoModalTriggerButtons = document.querySelectorAll(".update-todo-modal-trigger-button");
console.log(updateTodoModalTriggerButtons);
var _loop_1 = function (i) {
    var updateTodoModalTriggerButton = updateTodoModalTriggerButtons[i];
    updateTodoModalTriggerButton.addEventListener("click", function (event) {
        var targetTodoId = updateTodoModalTriggerButton.getAttribute("id");
        console.log(targetTodoId);
        var todoItemsDiv = updateTodoModalTriggerButton.parentElement;
        console.log(todoItemsDiv);
        var childNodesOfTodoItemsDiv = todoItemsDiv.childNodes;
        console.log(childNodesOfTodoItemsDiv);
        var priorityDiv = childNodesOfTodoItemsDiv[3];
        var priority = priorityDiv.childNodes[1].textContent;
        console.log(priority);
        console.log("--");
        console.log(childNodesOfTodoItemsDiv);
        var titleDiv = childNodesOfTodoItemsDiv[5];
        var title = titleDiv.childNodes[1].textContent;
        console.log(titleDiv.childNodes[1].textContent);
        var notesAndDeadlinesGrandparentDiv = childNodesOfTodoItemsDiv[6];
        var notes = notesAndDeadlinesGrandparentDiv.childNodes[0].childNodes[1].value;
        var deadline = notesAndDeadlinesGrandparentDiv.childNodes[0].childNodes[2].value;
        // update todo modal の各フィールドに既存の値をセット.
        var updateModalForm = document.getElementById("update-todo-form");
        var updateModalFormChilds = updateModalForm.childElementCount;
        // id set
        var todoIdInput = updateModalFormChilds[0].childNodes[0];
        todoIdInput.value = targetTodoId;
        // title set
        var todoTitleInput = updateModalFormChilds[1].childNodes[1];
        todoTitleInput.value = title;
        // notes set
        var todoNotesInput = updateModalFormChilds[3].childNodes[1];
        todoNotesInput.value = notes;
        // set priority
        var todoPrioritySelect = updateModalFormChilds[4].childNodes[1];
        todoPrioritySelect.value = priority;
        // set scheduledDate
        var todoScheduledDateInput = updateModalFormChilds[5].childNodes[1];
        //  todoScheduledDateInput.value =
        // set deadline
        var todoDeadlineInput = updateModalFormChilds[6].childNodes[1];
        todoDeadlineInput.value = deadline;
    });
};
for (var i = 0; i < updateTodoModalTriggerButtons.length; i++) {
    _loop_1(i);
}
