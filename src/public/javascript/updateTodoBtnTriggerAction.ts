const MODAL_TRIGGER_BUTTON_CLASS = ".update-todo-modal-trigger-button";

const MODAL_TITLE_INPUT_ID = "update-todo-input-title";
const MODAL_NOTES_INPUT_ID = "update-todo-input-notes";
const MODAL_PRIORITY_INPUT_ID = "update-priority-option";
const MODAL_SCHEDULED_DATE_INPUT_ID = "update-todo-schedule";
const MODAL_DEADLINE_INPUT_ID = "update-todo-deadline";
const MODAL_SUBMIT_BUTTON_ID = "update-todo-inputs";
const METHOD = "POST";

interface modalInputBody {
  todoId: string | any;
  title: string | any;
  notes: string | any;
  priority: string | any;
  scheduledDate: string | any;
  deadline: string | any;
}
//todo クラス名（とファイル名）はTodoModalSubmit として、UpdateだけでなくAddなど他のtodo modal submitアクションにも流用できるようにすべき。名前の変更
class UpdateTodoSubmit {
  static targetTodoId: string | any;
  static updatedTitle: string | any = "";
  static updatedNotes: string | any = "";
  static updatedPriority: string | any = "";
  static updatedScheduledDate: string | any = "";
  static updatedDeadline: string | any = "";
  static body: modalInputBody;
  static fullUrl: string = "";

  modalTriggerButtonId: string;
  modalInputId: string;
  modalNotesId: string;
  modalPriorityOptionId: string;
  modalTodoScheduledDateId: string;
  modalDeadlineId: string;
  modalSubmitButtonId: string;
  httpMethod: string;
  url: string;
  constructor(
    modalTriggerButtonId,
    modalInputId,
    modalNotesId,
    modalPriorityOptionId,
    modalTodoScheduledDateId,
    modalDeadlineId,
    modalSubmitButtonId,
    httpMethod,
    url
  ) {
    (this.modalTriggerButtonId = modalTriggerButtonId),
      (this.modalInputId = modalInputId),
      (this.modalNotesId = modalNotesId),
      (this.modalPriorityOptionId = modalPriorityOptionId),
      (this.modalTodoScheduledDateId = modalTodoScheduledDateId),
      (this.modalDeadlineId = modalDeadlineId);
    (this.modalSubmitButtonId = modalSubmitButtonId),
      (this.httpMethod = httpMethod);
    this.url = url;
  }

  getModalTriggerButtonElement() {
    return document.querySelectorAll(this.modalTriggerButtonId);
  }

  getTodoIdOfActionTarget() {
    const todoModalTriggerButtons = this.getModalTriggerButtonElement();

    for (let i = 0; i < todoModalTriggerButtons.length; i++) {
      const todoModalTriggerButton = todoModalTriggerButtons[i];
      todoModalTriggerButton.addEventListener("click", (event) => {
        UpdateTodoSubmit.targetTodoId = todoModalTriggerButton.getAttribute(
          "id"
        );
        console.log("target todo is --");

        console.log(UpdateTodoSubmit.targetTodoId);
      });
    }
  }

  setTitleFieldInModal() {
    const titleInputElement = document.getElementById(this.modalInputId);

    titleInputElement?.addEventListener("change", (event: Event) => {
      UpdateTodoSubmit.updatedTitle = event.target.value;
    });
  }

  setNotesFieldInModal() {
    const notesInputElement = document.getElementById(this.modalNotesId);
    notesInputElement?.addEventListener("change", (event) => {
      UpdateTodoSubmit.updatedNotes = event.target.value;
      console.log("etv");
      console.log(UpdateTodoSubmit.updatedNotes);
    });
  }

  setPriorityFieldInModal() {
    const priorityInputElement = document.getElementById(
      this.modalPriorityOptionId
    );
    priorityInputElement?.addEventListener("change", (event) => {
      UpdateTodoSubmit.updatedPriority = event.target.value;
    });
  }

  setScheduledDateInModal() {
    const scheduledDateInputElement = document.getElementById(
      this.modalTodoScheduledDateId
    );
    scheduledDateInputElement?.addEventListener("change", (event) => {
      UpdateTodoSubmit.updatedScheduledDate = event.target.value;
    });
  }

  setDeadlineInModal() {
    const deadlineInputElement = document.getElementById(this.modalDeadlineId);
    deadlineInputElement?.addEventListener("change", (event) => {
      UpdateTodoSubmit.updatedDeadline = event.target.value;
    });
  }

  setBody() {
    UpdateTodoSubmit.body = {
      todoId: UpdateTodoSubmit.targetTodoId,
      title: UpdateTodoSubmit.updatedTitle,
      notes: UpdateTodoSubmit.updatedNotes,
      priority: UpdateTodoSubmit.updatedPriority,
      scheduledDate: UpdateTodoSubmit.updatedScheduledDate,
      deadline: UpdateTodoSubmit.updatedDeadline,
    };
  }

  setFullUrl() {
    // UpdateTodoSubmit.fullUrl = this.url + UpdateTodoSubmit.targetTodoId;
    UpdateTodoSubmit.fullUrl = this.url;
  }

  getFormSubmitElement() {
    return document.getElementById(this.modalSubmitButtonId);
  }

  sendHttpRequest() {
    console.log("body--");

    console.log(UpdateTodoSubmit.body);
    const submitButton = this.getFormSubmitElement();
    submitButton?.addEventListener("submit", async (event) => {
      event.preventDefault();
      this.setBody();
      this.setFullUrl();

      fetch(UpdateTodoSubmit.fullUrl, {
        method: this.httpMethod,
        body: JSON.stringify(UpdateTodoSubmit.body),
      })
        .then((response) => {
          console.log("res");
          response.json();
        })
        .catch((err) => {});
    });
  }

  readyToSubmit() {
    this.getTodoIdOfActionTarget();
    this.setTitleFieldInModal();
    this.setNotesFieldInModal();
    this.setScheduledDateInModal();
    this.setDeadlineInModal();
    // this.setBody();
    // this.setFullUrl();
    this.sendHttpRequest();
  }
}

const u = new UpdateTodoSubmit(
  MODAL_TRIGGER_BUTTON_CLASS,
  MODAL_TITLE_INPUT_ID,
  MODAL_NOTES_INPUT_ID,
  MODAL_PRIORITY_INPUT_ID,
  MODAL_SCHEDULED_DATE_INPUT_ID,
  MODAL_DEADLINE_INPUT_ID,
  MODAL_SUBMIT_BUTTON_ID,
  METHOD,
  "http://localhost:8080/updateTodo"
);
u.readyToSubmit();

// console.log("update");

// console.log(updateTodoModalTriggerButtons);
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
// let targetTodoId: string = "";

// for (let i = 0; i < updateTodoModalTriggerButtons.length; i++) {
//   const updateTodoModalTriggerButton = updateTodoModalTriggerButtons[i];
//   updateTodoModalTriggerButton.addEventListener("click", (event) => {
//     targetTodoId = updateTodoModalTriggerButton.getAttribute("id");
//     console.log(targetTodoId);
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
//   });
// }

// const updateTitleInput = document.getElementById(MODAL_TITLE_INPUT_ID);
// let updatedTitle: string | any;
// updateTitleInput?.addEventListener("change", (event: Event) => {
//   updatedTitle = event.target.value;
//   console.log("etv");
//   console.log(updatedTitle);
// });
// let updatedNotes: string | any;
// const updateNotesInput = document.getElementById(MODAL_NOTES_INPUT_ID);
// updateNotesInput?.addEventListener("change", (event) => {
//   updatedNotes = event.target.value;
//   console.log("etv");
//   console.log(updatedNotes);
// });
// let updatedPriority: string | any;
// const updatePriorityInput = document.getElementById(MODAL_PRIORITY_INPUT_ID);
// updatePriorityInput?.addEventListener("change", (event) => {
//   updatedPriority = event.target.value;
//   console.log("etv");
//   console.log(updatedPriority);
// });
// let updatedScheduledDate: string | any;
// const updateScheduledDate = document.getElementById(
//   MODAL_SCHEDULED_DATE_INPUT_ID
// );
// updateScheduledDate?.addEventListener("change", (event) => {
//   updatedScheduledDate = event.target.value;
//   console.log("etv");
//   console.log(updatedScheduledDate);
// });
// let updatedDeadline: string | any;
// const updateDeadline = document.getElementById(MODAL_DEADLINE_INPUT_ID);
// updateDeadline?.addEventListener("change", (event) => {
//   updatedDeadline = event.target.value;
//   console.log("etv");
//   console.log(updatedDeadline);
// });

// const submitUpdateTodoButton = document.getElementById(MODAL_SUBMIT_BUTTON_ID);
// submitUpdateTodoButton?.addEventListener("submit", async (event) => {
//   // event.preventDefault();
//   let body = {
//     todoId: targetTodoId,
//     title: updatedTitle,
//     notes: updatedNotes,
//     priority: updatedPriority,
//     scheduledDate: updatedScheduledDate,
//     deadline: updatedDeadline,
//   };

//   console.log("body");
//   console.log(body);
//   const url = `http://localhost:8080/updateTodo/${targetTodoId}`;

//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify(body),
//   })
//     .then((response) => {
//       console.log("res");
//       response.json();
//     })
//     .catch((err) => {});
// });
