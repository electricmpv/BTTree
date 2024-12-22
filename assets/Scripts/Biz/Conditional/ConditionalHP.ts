import { NodeStatus } from "db://assets/Scripts/Enum";
import BTConditional from "db://assets/Scripts/Base/BTConditional";
import Blackboard from "db://assets/Scripts/Blackboard";

export default class ConditionalHP extends BTConditional {
  onUpdate() {
    console.log(
      "Blackboard.Instance.hp",
      Blackboard.Instance.hp,
      "ConditionalHP的判断结果为",
      Blackboard.Instance.hp >= 100,
    );
    if (Blackboard.Instance.hp >= 100) {
      return NodeStatus.Success;
    }
    return NodeStatus.Failure;
  }
}
