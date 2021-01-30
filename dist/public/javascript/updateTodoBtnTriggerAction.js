"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MODAL_TRIGGER_BUTTON_CLASS = ".update-todo-modal-trigger-button";
var MODAL_TITLE_INPUT_ID = "update-todo-input-title";
var MODAL_NOTES_INPUT_ID = "update-todo-input-notes";
var MODAL_PRIORITY_INPUT_ID = "update-priority-option";
var MODAL_SCHEDULED_DATE_INPUT_ID = "update-todo-schedule";
var MODAL_DEADLINE_INPUT_ID = "update-todo-deadline";
var MODAL_SUBMIT_BUTTON_ID = "update-todo-inputs";
var METHOD = "POST";
//todo クラス名（とファイル名）はTodoModalSubmit として、UpdateだけでなくAddなど他のtodo modal submitアクションにも流用できるようにすべき。名前の変更
var UpdateTodoSubmit = /** @class */ (function () {
    function UpdateTodoSubmit(modalTriggerButtonId, modalInputId, modalNotesId, modalPriorityOptionId, modalTodoScheduledDateId, modalDeadlineId, modalSubmitButtonId, httpMethod, url) {
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
    UpdateTodoSubmit.prototype.getModalTriggerButtonElement = function () {
        return document.querySelectorAll(this.modalTriggerButtonId);
    };
    UpdateTodoSubmit.prototype.getTodoIdOfActionTarget = function () {
        var todoModalTriggerButtons = this.getModalTriggerButtonElement();
        var _loop_1 = function (i) {
            var todoModalTriggerButton = todoModalTriggerButtons[i];
            todoModalTriggerButton.addEventListener("click", function (event) {
                var _a, _b, _c;
                UpdateTodoSubmit.targetTodoId = todoModalTriggerButton.getAttribute("id");
                console.log("target todo is --");
                console.log(UpdateTodoSubmit.targetTodoId);
                var idFieldInModal = document.getElementById("todoId");
                idFieldInModal === null || idFieldInModal === void 0 ? void 0 : idFieldInModal.setAttribute("value", UpdateTodoSubmit.targetTodoId);
                console.log(idFieldInModal);
                //
                var todoItemsRow = todoModalTriggerButton.parentNode;
                console.log(todoItemsRow);
                var todoCol = todoItemsRow === null || todoItemsRow === void 0 ? void 0 : todoItemsRow.children;
                console.log(todoCol);
                // priority
                var priority = (_a = todoCol[1].children[0].firstChild) === null || _a === void 0 ? void 0 : _a.textContent;
                console.log(priority);
                // title
                var title = (_b = todoCol[2].children[0].firstChild) === null || _b === void 0 ? void 0 : _b.textContent;
                console.log(title);
                // set to modal
                var titleField = document.getElementById("update-todo-input-title");
                titleField === null || titleField === void 0 ? void 0 : titleField.setAttribute("value", title);
                var select = (_c = document.getElementById("update-priority-option")) === null || _c === void 0 ? void 0 : _c.children;
                console.log(select);
                for (var j = 0; j < select.length; j++) {
                    var option = select[j];
                    console.log(option.textContent);
                    if (+option.innerHTML == +priority) {
                        option.setAttribute("value", priority);
                        option.setAttribute("selected", "selected");
                    }
                }
            });
        };
        for (var i = 0; i < todoModalTriggerButtons.length; i++) {
            _loop_1(i);
        }
    };
    UpdateTodoSubmit.prototype.setTitleFieldInModal = function () {
        var titleInputElement = document.getElementById(this.modalInputId);
        titleInputElement === null || titleInputElement === void 0 ? void 0 : titleInputElement.addEventListener("change", function (event) {
            UpdateTodoSubmit.updatedTitle = event.target.value;
        });
    };
    UpdateTodoSubmit.prototype.setNotesFieldInModal = function () {
        var notesInputElement = document.getElementById(this.modalNotesId);
        notesInputElement === null || notesInputElement === void 0 ? void 0 : notesInputElement.addEventListener("change", function (event) {
            UpdateTodoSubmit.updatedNotes = event.target.value;
            console.log("etv");
            console.log(UpdateTodoSubmit.updatedNotes);
        });
    };
    UpdateTodoSubmit.prototype.setPriorityFieldInModal = function () {
        var priorityInputElement = document.getElementById(this.modalPriorityOptionId);
        priorityInputElement === null || priorityInputElement === void 0 ? void 0 : priorityInputElement.addEventListener("change", function (event) {
            UpdateTodoSubmit.updatedPriority = event.target.value;
        });
    };
    UpdateTodoSubmit.prototype.setScheduledDateInModal = function () {
        var scheduledDateInputElement = document.getElementById(this.modalTodoScheduledDateId);
        scheduledDateInputElement === null || scheduledDateInputElement === void 0 ? void 0 : scheduledDateInputElement.addEventListener("change", function (event) {
            UpdateTodoSubmit.updatedScheduledDate = event.target.value;
        });
    };
    UpdateTodoSubmit.prototype.setDeadlineInModal = function () {
        var deadlineInputElement = document.getElementById(this.modalDeadlineId);
        deadlineInputElement === null || deadlineInputElement === void 0 ? void 0 : deadlineInputElement.addEventListener("change", function (event) {
            UpdateTodoSubmit.updatedDeadline = event.target.value;
        });
    };
    UpdateTodoSubmit.prototype.setBody = function () {
        UpdateTodoSubmit.body = {
            todoId: UpdateTodoSubmit.targetTodoId,
            title: UpdateTodoSubmit.updatedTitle,
            notes: UpdateTodoSubmit.updatedNotes,
            priority: UpdateTodoSubmit.updatedPriority,
            scheduledDate: UpdateTodoSubmit.updatedScheduledDate,
            deadline: UpdateTodoSubmit.updatedDeadline,
        };
    };
    UpdateTodoSubmit.prototype.setFullUrl = function () {
        // UpdateTodoSubmit.fullUrl = this.url + UpdateTodoSubmit.targetTodoId;
        UpdateTodoSubmit.fullUrl = this.url;
    };
    UpdateTodoSubmit.prototype.getFormSubmitElement = function () {
        return document.getElementById(this.modalSubmitButtonId);
    };
    UpdateTodoSubmit.prototype.sendHttpRequest = function () {
        var _this = this;
        console.log("body--");
        console.log(UpdateTodoSubmit.body);
        var submitButton = this.getFormSubmitElement();
        submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                event.preventDefault();
                this.setBody();
                this.setFullUrl();
                fetch(UpdateTodoSubmit.fullUrl, {
                    method: this.httpMethod,
                    body: JSON.stringify(UpdateTodoSubmit.body),
                })
                    .then(function (response) {
                    console.log("res");
                    response.json();
                })
                    .catch(function (err) { });
                return [2 /*return*/];
            });
        }); });
    };
    UpdateTodoSubmit.prototype.readyToSubmit = function () {
        this.getTodoIdOfActionTarget();
        this.setTitleFieldInModal();
        this.setNotesFieldInModal();
        this.setScheduledDateInModal();
        this.setDeadlineInModal();
        // this.setBody();
        // this.setFullUrl();
        this.sendHttpRequest();
    };
    UpdateTodoSubmit.updatedTitle = "";
    UpdateTodoSubmit.updatedNotes = "";
    UpdateTodoSubmit.updatedPriority = "";
    UpdateTodoSubmit.updatedScheduledDate = "";
    UpdateTodoSubmit.updatedDeadline = "";
    UpdateTodoSubmit.fullUrl = "";
    return UpdateTodoSubmit;
}());
var u = new UpdateTodoSubmit(MODAL_TRIGGER_BUTTON_CLASS, MODAL_TITLE_INPUT_ID, MODAL_NOTES_INPUT_ID, MODAL_PRIORITY_INPUT_ID, MODAL_SCHEDULED_DATE_INPUT_ID, MODAL_DEADLINE_INPUT_ID, MODAL_SUBMIT_BUTTON_ID, METHOD, "http://localhost:8080/updateTodo");
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
