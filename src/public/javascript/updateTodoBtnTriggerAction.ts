const updateTodoModalTriggerButtons = document.querySelectorAll(
  ".update-todo-modal-trigger-button"
);
console.log(updateTodoModalTriggerButtons);
for (let i = 0; i < updateTodoModalTriggerButtons.length; i++) {
  const updateTodoModalTriggerButton = updateTodoModalTriggerButtons[i];
  updateTodoModalTriggerButton.addEventListener("click", (event) => {
    const targetTodoId = updateTodoModalTriggerButton.getAttribute("id");
    console.log(targetTodoId);
    const todoItemsDiv = updateTodoModalTriggerButton.parentElement;
    console.log(todoItemsDiv);
    const childNodesOfTodoItemsDiv = todoItemsDiv.childNodes;
    console.log(childNodesOfTodoItemsDiv);
    const priorityDiv = childNodesOfTodoItemsDiv[3];
    const priority = priorityDiv.childNodes[1].textContent;
    console.log(priority);

    console.log("--");
    console.log(childNodesOfTodoItemsDiv);
    const titleDiv = childNodesOfTodoItemsDiv[5];
    const title = titleDiv.childNodes[1].textContent;
    console.log(titleDiv.childNodes[1].textContent);
    
    const notesAndDeadlinesGrandparentDiv = childNodesOfTodoItemsDiv[6];
    const notes =
      notesAndDeadlinesGrandparentDiv.childNodes[0].childNodes[1].value;
    const deadline =
      notesAndDeadlinesGrandparentDiv.childNodes[0].childNodes[2].value;
    // update todo modal の各フィールドに既存の値をセット.
    const updateModalForm = document.getElementById("update-todo-form");
    const updateModalFormChilds = updateModalForm.childElementCount;
    // id set
    const todoIdInput = updateModalFormChilds[0].childNodes[0];
    todoIdInput.value = targetTodoId;
    // title set
    const todoTitleInput = updateModalFormChilds[1].childNodes[1];
    todoTitleInput.value = title;
    // notes set
    const todoNotesInput = updateModalFormChilds[3].childNodes[1];
    todoNotesInput.value = notes;
    // set priority
    const todoPrioritySelect = updateModalFormChilds[4].childNodes[1];
    todoPrioritySelect.value = priority;
    // set scheduledDate
    const todoScheduledDateInput = updateModalFormChilds[5].childNodes[1];
    //  todoScheduledDateInput.value =
    // set deadline
    const todoDeadlineInput = updateModalFormChilds[6].childNodes[1];
    todoDeadlineInput.value = deadline;
  });
}
