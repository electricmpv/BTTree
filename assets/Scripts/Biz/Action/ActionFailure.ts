import BTAction from "db://assets/Scripts/Base/BTAction";
import { NodeStatus } from "db://assets/Scripts/Enum";

export default class ActionFailure extends BTAction {
  onUpdate() {
    return NodeStatus.Failure;
  }
}
