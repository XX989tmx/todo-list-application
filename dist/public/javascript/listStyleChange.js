"use strict";
var todoItemList = document.querySelectorAll(".todo-item-list-ul");
console.log(todoItemList);
var todoItemsLi = todoItemList[0].children;
console.log(todoItemsLi);
var _loop_1 = function (i) {
    var todoItemLi = todoItemsLi[i];
    console.log(todoItemLi);
    setTimeout(function () {
        todoItemsLi[i].style.backgroundColor = "rgb(252, 252, 252)";
    }, 700);
};
for (var i = 0; i < todoItemsLi.length; i++) {
    _loop_1(i);
}
