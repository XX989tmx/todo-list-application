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

const setAsTodayUl = document.getElementById("todo-container");
const setAsTodayLiList = setAsTodayUl?.children;

for (let i = 0; i < setAsTodayLiList.length; i++) {
  const setAsTodayLi = setAsTodayLiList[i];
  setAsTodayLi.addEventListener("click", (event) => {
    const todoItemsRow = setAsTodayLi.children;
    const todoItemCols = todoItemsRow[0].children;
    console.log(todoItemCols);
    const todayIconDiv = todoItemCols[3];
    console.log(todayIconDiv);
    const todayIcon = todayIconDiv.children[0];
    console.log(todayIcon);

    // send http req
            // set isDone property as true in server side
            // if response status code === 200
    todayIcon.classList.add("today-icon-active");
    // remove li node
    setTimeout(() => {
        setAsTodayLi.parentNode?.removeChild(setAsTodayLi);
    }, 1000);
    
  });
}

// const todayIcon = document.getElementById("set-as-today-icon");

// todayIcon?.addEventListener("click", (event) => {
//   console.log("today");
// });
