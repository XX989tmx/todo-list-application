import { activityModel as ActivitySchema } from './../model/activitySchema';
import { Document, ObjectId } from "mongoose";
import { IActivitySchema } from "../model/activitySchema";
import { ITodoSchema } from "../model/todoSchema";
import { IUserSchema } from "../model/userSchema";
import { Todo } from "./todo";

export interface ActivityInterface {
  id: ObjectId | IUserSchema | string | null;
  date: Date | any;
  accomplishedTodo: Todo[] | ITodoSchema[] | any[];
  accomplishedCount: number;
  productivityScore: number;
  isInRowState: boolean;
  inRowDuration: number;
  longestInRowDuration: number;
  userId: ObjectId | IUserSchema | string | null;
}

export class Activity implements ActivityInterface {
  // 1日1Activityインスタンス（スキーマ）の関係性。それぞれの集合についてはActivityList,ActivitySchemaListで管理する。TodoとTodolistの関係とほぼ同様
  // 毎日計測
  // productivity scoreはクライアント側で色の濃度と連動
  // productivity score 基準
  // 0個達成：0, 1個以上達成:1, 5個以上達成:2, 10個以上達成:3
  // inRow bonus:
  // 2日以上highが連続するとtrueにする。クライアントサイドで金色に連動

  //!!! Activity class に加え、Activities classを追加する.
  //!!! また、Activity Schemaだけでなく、activities schemaも追加する. user Schemaにrefをつける
  // !! 変更に従い、productivity scoreの集計ロジックのやり方と、配置するクラスに変更を加える必要があるかもしれない

  static ActivitySchema: IActivitySchema;

  id: ObjectId | IUserSchema | string | null;
  date: Date | any;
  accomplishedTodo: Todo[] | ITodoSchema[] | any[];
  accomplishedCount: number;
  productivityScore: number;
  isInRowState: boolean;
  inRowDuration: number;
  longestInRowDuration: number;
  userId: ObjectId | IUserSchema | string | null;

  constructor() {
    this.id = null;
    this.date = null; // date of today
    this.accomplishedTodo = [];
    this.accomplishedCount = 0;
    this.productivityScore = 0; // 0:none,1:low,2:mid,3:high
    this.isInRowState = false;
    this.inRowDuration = 0;
    this.longestInRowDuration = 0; //n days
    this.userId = null;
  }

  // todoDocあたりがおかしいので変更
  set(todoDoc, date, accomplishedTodo, userId) {
    this.id = todoDoc.id;
    this.date = this.getToday();
    this.accomplishedTodo = this.setAccomplishedTodo(todoDoc);
    this.accomplishedCount = this.setAccomplishedCount();
    this.productivityScore = this.getProductivityScore();
    this.isInRowState = this.isInRow(todoDoc);
    this.inRowDuration = this.getInRowDuration(todoDoc);
    this.longestInRowDuration = 0;
    this.userId = this.setUserId(userId);
    return this;
  }

  setAccomplishedTodo(todo: Todo) {
    this.accomplishedTodo.push(todo);
    return this.accomplishedTodo;
  }

  getToday() {
    return new Date();
  }

  setAccomplishedCount() {
    const count = this.accomplishedTodo.length;
    this.accomplishedCount = count;
    return this.accomplishedCount;
  }

  getAccomplishedCount() {
    return this.setAccomplishedCount();
  }

  setProductivityScore() {
    this.productivityScore = this.getAccomplishedCount();
    return this.productivityScore;
  }

  getProductivityScore() {
    return this.setProductivityScore();
  }

  isInRow(todoDoc: Todo) {
    const id = todoDoc.id;
    let oldToNewSortedArr: Todo[] = this.accomplishedTodo.sort(
      (a, b) => a.dateCompleted - b.dateCompleted
    );
    let count = 0;
    // for (let i = id; i < oldToNewSortedArr.length; i--) {
    //   if (oldToNewSortedArr[i].productivityScore > 10) {
    //     count += 1;
    //   }
    // }
    if (count > 1) {
      return true;
    } else {
      return false;
    }
  }

  getInRowDuration(todoDoc: Todo | ITodoSchema) {
    const id = todoDoc.id;
    let oldToNewSortedArr: Todo[] = this.accomplishedTodo.sort(
      (a, b) => a.dateCompleted - b.dateCompleted
    );
    let idxOfTargetDocId: number;
    for (let i = 0; i < this.accomplishedTodo.length; i++) {
      if (this.accomplishedTodo[i].id.toString() === id.toString()) {
        idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
      }
    }

    let count = 0;
    // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
    //   if (oldToNewSortedArr[i].productivityScore > 10) {
    //     count += 1;
    //   } else {
    //     break;
    //   }
    // }
    return count;
  }

  getLongestInRowDuration(todoDoc: Todo | ITodoSchema) {
    const id = todoDoc.id;
    let oldToNewSortedArr = this.accomplishedTodo.sort(
      (a, b) => a.dateCompleted - b.dateCompleted
    );
    let idxOfTargetDocId;
    if (id !== null) {
      for (let i = 0; i < this.accomplishedTodo.length; i++) {
        if (this.accomplishedTodo[i].id.toString() === id.toString()) {
          idxOfTargetDocId = this.accomplishedTodo[i].id.toString();
        }
      }
    }

    let countArr = [];
    let count = 0;
    // for (let i = idxOfTargetDocId; i < oldToNewSortedArr.length; i--) {
    //   if (oldToNewSortedArr[i].productivityScore > 10) {
    //     count += 1;
    //   } else {
    //     countArr.push(count);
    //     count = 0;
    //   }
    // }
    // const maxInRow = Math.max(...countArr);
    // return maxInRow;
  }

  static async saveToDatabase() {
    // save to database
    return this;
  }

  static async getAllFromDatabase() {
    return this;
  }

  setUserId(userId: string) {
    this.userId = userId;
    return this.userId;
  }

  // インスタンスデータをデータベースに保存する処理 //
  // - ActivitySchemaインスタンスの作成　createActivitySchemaInstance()
  static createActivitySchemaInstance() {
    const activitySchemaInstance = new ActivitySchema({
      date: null,
      accomplishedTodo: [],
      accomplishedCount: 0,
      productivityScore: 0,
      isInRow: null,
      inRowDuration: null,
      longestInRowDuration: 0,
      userId: null,
    });
    return activitySchemaInstance;
  }
  // - ActivitySchemaインスタンスにActivityインスタンス（Class)関連のデータアトリビュートを保存する処理(userID以外)　setActivitySchema()
  static setActivitySchema(
    activitySchemaInstance: IActivitySchema,
    activityInstance: any
  ) {
    activitySchemaInstance.date = activityInstance.date;
    activitySchemaInstance.accomplishedTodo = activityInstance.accomplishedTodo;
    activitySchemaInstance.accomplishedCount =
      activityInstance.accomplishedCount;
    activitySchemaInstance.productivityScore =
      activityInstance.productivityScore;
    activitySchemaInstance.isInRow = activityInstance.isInRowState;
    activitySchemaInstance.inRowDuration = activityInstance.inRowDuration;
    activitySchemaInstance.longestInRowDuration =
      activityInstance.longestInRowDuration;

    return activitySchemaInstance;
  }
  // - ActivitySchemaインスタンスにuserIdを保存する処理 setUserIdToActivitySchema(userId)
  static setUserIdToActivitySchema(
    activitySchemaInstance: IActivitySchema | any,
    userSchemaInstance: IUserSchema | any
  ) {
    activitySchemaInstance.userId = userSchemaInstance._id;
    return activitySchemaInstance;
  }
  // - ActivitySchemaインスタンス(mongooseDocument)を保存する処理　　saveActivitySchemaToDatabase() {doc.save()}
  static async saveActivitySchemaToDatabase(
    activitySchemaInstance: IActivitySchema | Document<any>  
  ) {
    try {
      await activitySchemaInstance.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async getActivitySchemaFromDatabase(userId: string) {
    let activitySchema;
    try {
      activitySchema = await ActivitySchema.findOne({ userId: userId });
      Activity.ActivitySchema = activitySchema;
    } catch (error) {
      console.log(error);
    }

    return activitySchema;
  }

  static async save() {
    try {
      await Activity.ActivitySchema.save();
    } catch (error) {}
  }
}
