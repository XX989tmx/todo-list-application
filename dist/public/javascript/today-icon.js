"use strict";
// const setAsTodayIconsList = document.querySelectorAll(".setAsTodayIcon");
// console.log('today');
// console.log(setAsTodayIconsList);
// for (let i = 0; i < setAsTodayIconsList.length; i++) {
//     const setAsTodayIcon = setAsTodayIconsList[i];
//     setAsTodayIcon.addEventListener('click',(event) => {
//         // send http req
//         // set isDone property as true in server side
//         // if response 200
//         console.log('ababababa');
//         setAsTodayIcon.classList.add("today-icon-active");
//         // remove li node
//         setAsTodayIcon.parentNode?.removeChild(setAsTodayIcon);
//     })
// }
var setAsTodayUl = document.getElementById("todo-container");
var setAsTodayLiList = setAsTodayUl === null || setAsTodayUl === void 0 ? void 0 : setAsTodayUl.children;
var _loop_1 = function (i) {
    var setAsTodayLi = setAsTodayLiList[i];
    setAsTodayLi.addEventListener("click", function (event) {
        var todoItemsRow = setAsTodayLi.children;
        var todoItemCols = todoItemsRow[0].children;
        console.log(todoItemCols);
        var todayIconDiv = todoItemCols[3];
        console.log(todayIconDiv);
        var todayIcon = todayIconDiv.children[0];
        console.log(todayIcon);
        // send http req
        // set isDone property as true in server side
        // if response status code === 200
        todayIcon.classList.add("today-icon-active");
        // remove li node
        setTimeout(function () {
            var _a;
            (_a = setAsTodayLi.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(setAsTodayLi);
        }, 1000);
    });
};
for (var i = 0; i < setAsTodayLiList.length; i++) {
    _loop_1(i);
}
// const todayIcon = document.getElementById("set-as-today-icon");
// todayIcon?.addEventListener("click", (event) => {
//   console.log("today");
// });
