//complee todo request
let headers = new Headers();
headers.append("Content-Type", "text/html");

const init = {
  method: "GET",
  headers: headers,
  mode: "cors",
  cache: "default",
};

// let request = new Request("http://localhost:8080/completeTodo");
const sendCompleteTodoRequest = async (request, init) => {
  let response;
  try {
    await fetch(request, init);
  } catch (error) {}
};

const checkboxInputs = document.querySelectorAll(".todo-checkbox");
console.log(checkboxInputs);
for (let i = 0; i < checkboxInputs.length; i++) {
  const input = checkboxInputs[i];
  console.log("input");
  console.log(input);
  const inputId = input.getAttribute("id");
  const isChecked = input.getAttribute("value");
  console.log(isChecked);
  const completedTodoId = inputId;
  let body = {
    completedTodoId,
  };

  console.log(inputId);
  input.addEventListener("click", async () => {
    console.log("12345");
    console.log(inputId);
    const url = "http://localhost:8080/completeTodo/" + inputId;
    fetch(url)
      .then((result) => {
        const LiElement:any = input.parentElement.parentElement.parentElement;
        LiElement.style.backgroundColor = "rgb(239, 241, 242)";
        setTimeout(() => {
          LiElement.remove();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
    // let request = new Request(
    //   "http://localhost:8080/completeTodo/" + inputId
    // );
    // sendCompleteTodoRequest(request, init)
    //   .then((result) => {
    //     console.log(request);
    //     setTimeout(() => {
    //       const LiElement =
    //         input.parentElement.parentElement.parentElement;

    //       LiElement.remove();
    //     }, 1500);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  });
}
//
const todos = document.querySelectorAll(".todo-item");
console.log(todos);
for (let i = 0; i < todos.length; i++) {
  const todoLiElement = todos[i];
  const todoRow = todoLiElement.firstChild;
}
