const todoItemList = document.querySelectorAll(".todo-item-list-ul");
console.log(todoItemList);
let todoItemsLi = todoItemList[0].children;
console.log(todoItemsLi);

for (let i = 0; i < todoItemsLi.length; i++) {
  const todoItemLi = todoItemsLi[i];
  console.log(todoItemLi);

  setTimeout(() => {
    todoItemsLi[i].style.backgroundColor = "rgb(252, 252, 252)";
  }, 700);
}
