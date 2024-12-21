import BTAction from "db://assets/Scripts/Base/BTAction";
import { NodeStatus } from "db://assets/Scripts/Enum";

export default class ActionLog extends BTAction {
  constructor(private text: string) {
    super();
  }

  onUpdate() {
    console.log(this.text);
    return NodeStatus.Success;
  }
}
