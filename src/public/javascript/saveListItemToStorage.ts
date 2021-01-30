window.addEventListener("load", (event) => {
  const inboxItems = "<%- inbox %>";
  let idArr = [];
  for (let i = 0; i < inboxItems.length; i++) {
    const inboxItem = inboxItems[i];
    const itemId = inboxItem.id;
    idArr.push(itemId);
  }
  // const storage = window.localStorage;
  // storage.setItem("inboxItems", `${idArr}`);
});
