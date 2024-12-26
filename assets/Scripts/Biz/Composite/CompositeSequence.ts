import BTComposite from "db://assets/Scripts/Base/BTComposite";
import { NodeStatus } from "db://assets/Scripts/Enum";

export default class CompositeSequence extends BTComposite {
  onStart() {
    super.onStart();
    this.index = 0;
  }

  canExecute(): boolean {
    return (
      this.index < this.childrens.length && this.status !== NodeStatus.Failure
    );
  }
  onChildExecuted(status: NodeStatus): void {
    switch (status) {
      case NodeStatus.Success:
        this.index++;
        if (this.index >= this.childrens.length) {
          this.status = NodeStatus.Success;
        } else {
          this.status = NodeStatus.Running;
        }
        break;
      case NodeStatus.Failure:
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
    if (this.status === NodeStatus.Failure) {
      return NodeStatus.Failure;
    }
    if (this.index >= this.childrens.length) {
      this.status = NodeStatus.Failure;
      return NodeStatus.Success;
    }
    const child = this.childrens[this.index];
    const res = child.run();
    if (res === NodeStatus.Success) {
      this.index++;
    }
    if (res === NodeStatus.Failure) {
      this.status = NodeStatus.Failure;
      return NodeStatus.Failure;
    }

    return NodeStatus.Running;
  }*/
}
