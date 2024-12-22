import { NodeStatus } from "db://assets/Scripts/Enum";
import BTConditional from "db://assets/Scripts/Base/BTConditional";
import Blackboard from "db://assets/Scripts/Blackboard";

export default class ConditionalMP extends BTConditional {
  onUpdate() {
    console.log(
      "Blackboard.Instance.mp",
      Blackboard.Instance.mp,
      "ConditionalMP的判断结果为",
      Blackboard.Instance.mp >= 100,
    );
    if (Blackboard.Instance.mp >= 100) {
      return NodeStatus.Success;
    }
    return NodeStatus.Failure;
  }
}
