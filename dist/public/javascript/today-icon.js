"use strict";
var setAsTodayIconsList = document.querySelectorAll(".setAsTodayIcon");
console.log("today");
console.log(setAsTodayIconsList);
var _loop_1 = function (i) {
    var setAsTodayIcon = setAsTodayIconsList[i];
    setAsTodayIcon.addEventListener("click", function (event) {
        var _a, _b;
        // send http req
        // set isDone property as true in server side
        // if response 200
        console.log("ababababa");
        setAsTodayIcon.classList.add("today-icon-active");
        // bubble up to li element
        var LiElement = (_b = (_a = setAsTodayIcon.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        console.log(LiElement);
        // remove li node
        setTimeout(function () {
            var _a;
            (_a = LiElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(LiElement);
        }, 1000);
    });
};
for (var i = 0; i < setAsTodayIconsList.length; i++) {
    _loop_1(i);
}
// const setAsTodayUl = document.getElementById("todo-container");
// const setAsTodayLiList = setAsTodayUl?.children;
// for (let i = 0; i < setAsTodayLiList.length; i++) {
//   const setAsTodayLi = setAsTodayLiList[i];
//   setAsTodayLi.addEventListener("click", (event) => {
//     const todoItemsRow = setAsTodayLi.children;
//     const todoItemCols = todoItemsRow[0].children;
//     console.log(todoItemCols);
//     const todayIconDiv = todoItemCols[3];
//     console.log(todayIconDiv);
//     const todayIcon = todayIconDiv.children[0];
//     console.log(todayIcon);
//     // send http req
//             // set isDone property as true in server side
//             // if response status code === 200
//     todayIcon.classList.add("today-icon-active");
//     // remove li node
//     setTimeout(() => {
//         setAsTodayLi.parentNode?.removeChild(setAsTodayLi);
//     }, 1000);
//   });
// }
// const todayIcon = document.getElementById("set-as-today-icon");
// todayIcon?.addEventListener("click", (event) => {
//   console.log("today");
// });
