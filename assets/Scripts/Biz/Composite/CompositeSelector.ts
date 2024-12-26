import BTComposite from "db://assets/Scripts/Base/BTComposite";
import { NodeStatus } from "db://assets/Scripts/Enum";

export default class CompositeSelector extends BTComposite {
  onStart() {
    super.onStart();
    this.index = 0;
  }

  canExecute(): boolean {
    return (
      this.index < this.childrens.length && this.status !== NodeStatus.Success
    );
  }
  onChildExecuted(status: NodeStatus): void {
    switch (status) {
      case NodeStatus.Success:
        this.status = NodeStatus.Success;
        break;
      case NodeStatus.Failure:
        this.index++;
        if (this.index >= this.childrens.length) {
          this.status = NodeStatus.Failure;
        } else {
          this.status = NodeStatus.Running;
        }
        this.status = NodeStatus.Failure;
        break;
      case NodeStatus.Running:
        this.status = NodeStatus.Running;
        break;
      default:
        break;
    }
  }

  /*onUpdate() {
    if (this.status === NodeStatus.Success) {
      return NodeStatus.Success;
    }
    if (this.index >= this.childrens.length) {
      this.status = NodeStatus.Failure;
      return NodeStatus.Failure;
    }
    const child = this.childrens[this.index];
    const res = child.run();
    if (res === NodeStatus.Failure) {
      this.index++;
    }
    if (res === NodeStatus.Success) {
      this.status = NodeStatus.Success;
      return NodeStatus.Success;
    }

    return NodeStatus.Running;
  }*/
}
