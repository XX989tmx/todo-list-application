// move to trash action
const deleteHeaders = new Headers();
deleteHeaders.append("Content-Type", "text/html");

const init2 = {
  method: "DELETE",
  headers: deleteHeaders,
  mode: "cors",
  cache: "default",
};

// let request = new Request("http://localhost:8080/deleteTodo");
const sendDeleteTodoRequest = async (request, init) => {
  try {
    await fetch(request, init);
  } catch (error) {}
};
const deleteTodoIcons = document.querySelectorAll(".delete-todo");
console.log("!delete todo icons !");
console.log(deleteTodoIcons);
for (let i = 0; i < deleteTodoIcons.length; i++) {
  const deleteTodoIcon = deleteTodoIcons[i];
  const deleteTodoId = deleteTodoIcon.getAttribute("id");
  let body = {
    deleteTodoId,
  };
  deleteTodoIcon.addEventListener("click", async (params) => {
    console.log("move to trash!");
    console.log(deleteTodoId);
   const url = "http://localhost:8080/moveToTrash/" + deleteTodoId;
    fetch(url)
      .then((result) => {
        const liElement2:any = deleteTodoIcon.parentElement.parentElement;
        liElement2.style.backgroundColor = "rgb(239, 241, 242)";
        liElement2.remove();
      })
      .catch((err) => {
        console.log(err);
      });
    // let request2 = new Request(
    //   `http://localhost:8080/deleteTodo/${deleteTodoId}`
    // );
    // sendDeleteTodoRequest(request2, init2)
    //   .then((response) => {
    //     setTimeout(() => {
    //       const liElement2 = deleteTodoIcon.parentElement.parentElement;

    //       liElement2.remove();
    //     }, 1500);

    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  });
}
