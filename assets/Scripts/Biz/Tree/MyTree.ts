import BTTree from "db://assets/Scripts/Base/BTTree";
import ActionLog from "db://assets/Scripts/Biz/Action/ActionLog";
import CompositeSelector from "db://assets/Scripts/Biz/Composite/CompositeSelector";
import ActionFailure from "db://assets/Scripts/Biz/Action/ActionFailure";

export default class MyTree extends BTTree {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.root = new CompositeSelector([
      new ActionFailure(),
      //new ActionLog("hello world"),
      new ActionLog("hahahaha"),
    ]);
  }
}
