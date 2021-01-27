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
var updateTodoModalTriggerButtons = document.querySelectorAll(".update-todo-modal-trigger-button");
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
var targetTodoId;
var _loop_1 = function (i) {
    var updateTodoModalTriggerButton = updateTodoModalTriggerButtons[i];
    updateTodoModalTriggerButton.addEventListener("click", function (event) {
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
};
for (var i = 0; i < updateTodoModalTriggerButtons.length; i++) {
    _loop_1(i);
}
var updateTitleInput = document.getElementById("update-todo-input-title");
var updatedTitle;
updateTitleInput === null || updateTitleInput === void 0 ? void 0 : updateTitleInput.addEventListener('change', function (event) {
    updatedTitle = event.target.value;
    console.log('etv');
    console.log(updatedTitle);
});
var updatedNotes;
var updateNotesInput = document.getElementById("update-todo-input-notes");
updateNotesInput === null || updateNotesInput === void 0 ? void 0 : updateNotesInput.addEventListener("change", function (event) {
    updatedNotes = event.target.value;
    console.log("etv");
    console.log(updatedNotes);
});
var updatedPriority;
var updatePriorityInput = document.getElementById("update-priority-option");
updatePriorityInput === null || updatePriorityInput === void 0 ? void 0 : updatePriorityInput.addEventListener("change", function (event) {
    updatedPriority = event.target.value;
    console.log("etv");
    console.log(updatedPriority);
});
var updatedScheduledDate;
var updateScheduledDate = document.getElementById("update-todo-schedule");
updateScheduledDate === null || updateScheduledDate === void 0 ? void 0 : updateScheduledDate.addEventListener("change", function (event) {
    updatedScheduledDate = event.target.value;
    console.log("etv");
    console.log(updatedScheduledDate);
});
var updatedDeadline;
var updateDeadline = document.getElementById("update-todo-deadline");
updateDeadline === null || updateDeadline === void 0 ? void 0 : updateDeadline.addEventListener("change", function (event) {
    updatedDeadline = event.target.value;
    console.log("etv");
    console.log(updatedDeadline);
});
var submitUpdateTodoButton = document.getElementById("update-todo-inputs");
submitUpdateTodoButton === null || submitUpdateTodoButton === void 0 ? void 0 : submitUpdateTodoButton.addEventListener('submit', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var body, url;
    return __generator(this, function (_a) {
        body = {
            todoId: targetTodoId,
            title: updatedTitle,
            notes: updatedNotes,
            priority: updatedPriority,
            scheduledDate: updatedScheduledDate,
            deadline: updatedDeadline,
        };
        console.log("body");
        console.log(body);
        url = "http://localhost:8080/updateTodo/" + targetTodoId;
        fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
        }).then(function (response) {
            console.log('res');
            response.json();
        }).catch(function (err) {
        });
        return [2 /*return*/];
    });
}); });
