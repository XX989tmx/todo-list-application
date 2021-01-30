"use strict";
window.addEventListener("load", function (event) {
    var inboxItems = "<%- inbox %>";
    var idArr = [];
    for (var i = 0; i < inboxItems.length; i++) {
        var inboxItem = inboxItems[i];
        var itemId = inboxItem.id;
        idArr.push(itemId);
    }
    // const storage = window.localStorage;
    // storage.setItem("inboxItems", `${idArr}`);
});
