const mongoose = require('mongoose')
const InboxSchema = require('../model/inboxSchema')
const todo = require('./todo')
const Inbox = todo.inbox;

class InboxRoutesLogic {
  // -データベースからInboxデータを読み出す
  // -データベースからUserデータを読み出す
  // -データベースからUserIdに一致するTodoデータをすべて読み出す。それを配列にいれる
  // -Inbox class Instance をInitialize
  // -Todo class InstanceをInitialize
  // -User ClassInstanceをInitialize ??
  // -Todoデータの配列をループでまわし、内部で、1Todo classクラスインスタンスをInitialize。2TodoClassInstanceに個々のTodoDataの値をセット（todoInstance.set(todoData)）。3Result配列をループ街に作成しておき、個々のTodoClassInstanceを各ループ毎にPush。4Result配列をReturnし、変数に入れる。
  // -　1Inbox class InstanceをInitializeする。2InboxClassInstanceに値をセットする。具体的には、listにResult配列をセット、sizeに

  async renderInbox(userId) {
    //
    // -データベースからInboxデータを読み出す
    let inboxData;
    try {
      inboxData = await InboxSchema.findById(userId);
    } catch (error) {
      console.log(error);
    }
    let inboxDataSize = inboxData.length;
    // -　1Inbox class InstanceをInitializeする。
    // - Inbox Class InstanceにInboxデータをセットする。
    const inboxInstance = new Inbox(inboxData, inboxDataSize, userId);

    // -Inbox Class InstanceをResとして返す。
    return inboxInstance;
  }

  
}