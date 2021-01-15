class CreateTodoRoutesLogic {
    // todoデータを新規作成保存し、User,InboxスキーマのTodoが関連する値を更新し、保存する。その後、Inboxデータを再度読み出し、Inboxページに渡しRerenderする。
    // -Userデータをデータベースから読み出す
    // -Inboxデータをデータベースから読み出す

    //- req.bodyからTodoフィールドの値をOBD

    //- user class instance をinitialize
    // -inbox class instanceをinitialize
    // todo class instanceをinitialize
    // todo class instanceにreq.bodyのTodoフィールドの値をセットする。

    // todo dataの保存処理
    // -todo schema instance をinitialize : createTodoSchemaInstace()
    // -todo schema instance に todo class instance の値をセット：setTodoSchema();
    // -userIdをtodo schema instanceにセット（UserIdをTodoSchemaに関連付け）:setUserIdToTodoSchema();
    // - todo schema instanceをデータベースに保存: saveTodoSchemaToDatabase();

    // inbox dataの更新保存処理
    // -inbox class instanceにInboxDataをセットする：A　set methodでセット　or B inbox class instance initialize時に、InboxDataをセット
    // -inbox class instance　のinbox fieldにTodoSchema　を追加：inbox.addNewTodo(todoSchema);
    // -inbox data(databaseから読み出したInboxData)の各フィールドを、inbox class instanceのそれに更新する for n times: inboxData.x = inbox.x
    // -inbox schemaを保存 saveInboxSchemaToDatabase();

    // user dataの更新保存処理
    //  -user dataのtodo fieldにTodo新規追加：todo schema instance をuser.todo にPush（）
    // -user dataを保存　　saveUserSchemaToDatabase();
    // -inbox fieldについてはRefキーで参照する方式のため、手動更新不要。

    // inbox class instance をReturn
}