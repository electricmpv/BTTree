import { NodeStatus } from "db://assets/Scripts/Enum";
import BTDecorator from "db://assets/Scripts/Base/BTDecorator";

export default class DecoratorInverter extends BTDecorator {
  onUpdate() {
    const res = this.childrens[0].run();
    return this.decorate(res);
  }

  decorate(status: NodeStatus): NodeStatus {
    switch (status) {
      case NodeStatus.Failure:
        return NodeStatus.Success;
      case NodeStatus.Success:
        return NodeStatus.Failure;
      default:
        return status;
    }
  }
}
