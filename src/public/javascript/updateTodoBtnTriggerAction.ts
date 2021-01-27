const updateTodoModalTriggerButtons = document.querySelectorAll(
  ".update-todo-modal-trigger-button"
);
console.log("update");

console.log(updateTodoModalTriggerButtons);
// let targetTodoId: string;
// for (let i = 0; i < updateTodoModalTriggerButtons.length; i++) {
//   const updateTodoTriggerBtn = updateTodoModalTriggerButtons[i];
//   updateTodoTriggerBtn.addEventListener("click", (event) => {
//     targetTodoId = updateTodoTriggerBtn.getAttribute("id");
//   });
// }

//  const updateTodoForm: HTMLFormElement |any = document.getElementById(
//    "update-todo-form"
//  );
// console.log("updateTodoForm");

// console.log(updateTodoForm);
// const submitUpdateTodoButton = document.getElementById("update-todo-inputs");

// submitUpdateTodoButton?.addEventListener("click", (event) => {
// //   event.preventDefault();
//   const formData = new FormData(updateTodoForm);
//   formData.append("todoId", targetTodoId);
//   console.log(formData);
// });
let targetTodoId:string|any;

for (let i = 0; i < updateTodoModalTriggerButtons.length; i++) {
  const updateTodoModalTriggerButton = updateTodoModalTriggerButtons[i];
  updateTodoModalTriggerButton.addEventListener("click", (event) => {
    targetTodoId = updateTodoModalTriggerButton.getAttribute("id");
    console.log(targetTodoId);
    // const todoItemsDiv = updateTodoModalTriggerButton.parentElement;
    // console.log(todoItemsDiv);
    // const childNodesOfTodoItemsDiv = todoItemsDiv.childNodes;
    // console.log(childNodesOfTodoItemsDiv);
    // const priorityDiv = childNodesOfTodoItemsDiv[3];
    // const priority = priorityDiv.childNodes[1].textContent;
    // console.log(priority);

    // console.log("--");
    // console.log(childNodesOfTodoItemsDiv);
    // const titleDiv = childNodesOfTodoItemsDiv[5];
    // const title = titleDiv.childNodes[1].textContent;
    // console.log(titleDiv.childNodes[1].textContent);

    // const notesAndDeadlinesGrandparentDiv = childNodesOfTodoItemsDiv[6];
    // const notes =
    //   notesAndDeadlinesGrandparentDiv.childNodes[0].childNodes[1].value;
    // const deadline =
    //   notesAndDeadlinesGrandparentDiv.childNodes[0].childNodes[2].value;
    // // update todo modal の各フィールドに既存の値をセット.
    // const updateModalForm = document.getElementById("update-todo-form");
    // const updateModalFormChilds = updateModalForm.childElementCount;
    // // id set
    // const todoIdInput = updateModalFormChilds[0].childNodes[0];
    // todoIdInput.value = targetTodoId;
    // // title set
    // const todoTitleInput = updateModalFormChilds[1].childNodes[1];
    // todoTitleInput.value = title;
    // // notes set
    // const todoNotesInput = updateModalFormChilds[3].childNodes[1];
    // todoNotesInput.value = notes;
    // // set priority
    // const todoPrioritySelect = updateModalFormChilds[4].childNodes[1];
    // todoPrioritySelect.value = priority;
    // // set scheduledDate
    // const todoScheduledDateInput = updateModalFormChilds[5].childNodes[1];
    // //  todoScheduledDateInput.value =
    // // set deadline
    // const todoDeadlineInput = updateModalFormChilds[6].childNodes[1];
    // todoDeadlineInput.value = deadline;
  });
}

const updateTitleInput = document.getElementById("update-todo-input-title");
let updatedTitle:string|any;
updateTitleInput?.addEventListener('change',(event:Event) => {
    updatedTitle = event.target.value;
    console.log('etv');
    console.log(updatedTitle);
});
let updatedNotes:string|any;
const updateNotesInput = document.getElementById("update-todo-input-notes");
updateNotesInput?.addEventListener("change",(event) => {
    updatedNotes = event.target.value;
    console.log("etv");
    console.log(updatedNotes);
})
let updatedPriority:string|any;
const updatePriorityInput = document.getElementById("update-priority-option");
updatePriorityInput?.addEventListener("change",(event) => {
    updatedPriority = event.target.value;
    console.log("etv");
    console.log(updatedPriority);
});
let updatedScheduledDate:string|any;
const updateScheduledDate = document.getElementById("update-todo-schedule");
updateScheduledDate?.addEventListener("change",(event) => {
    updatedScheduledDate = event.target.value;
    console.log("etv");
    console.log(updatedScheduledDate);
})
let updatedDeadline:string|any;
const updateDeadline = document.getElementById("update-todo-deadline");
updateDeadline?.addEventListener("change",(event) => {
     updatedDeadline = event.target.value;
     console.log("etv");
     console.log(updatedDeadline);
})

const submitUpdateTodoButton = document.getElementById("update-todo-inputs");
submitUpdateTodoButton?.addEventListener('submit',async(event) => {
    // event.preventDefault();
    let body = {
      todoId: targetTodoId,
      title: updatedTitle,
      notes: updatedNotes,
      priority: updatedPriority,
      scheduledDate: updatedScheduledDate,
      deadline: updatedDeadline,
    };

    console.log("body");
    console.log(body);
    const url = `http://localhost:8080/updateTodo/${targetTodoId}`;

    fetch(url,{
        method:"POST",
        body: JSON.stringify(body)
    }).then((response) => {
        console.log('res');
        response.json();
    }).catch((err) => {
        
    });
})



